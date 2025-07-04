import { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Card, CardContent, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { db } from '../../firebase/firebaseConfig'
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'
import CssBaseline from '@mui/material/CssBaseline'

const initialData = {
    tasks: {},
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Pending',
            taskIds: [],
        },
        'column-2': {
            id: 'column-2',
            title: 'Assigned',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Completed',
            taskIds: [],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
}

const AssignmentManager = () => {
    const [data, setData] = useState(initialData)
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'tickets'))
                const ticketsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTickets(ticketsData)
                const newTasks = {}
                const newTaskIds = []
                ticketsData.forEach(ticket => {
                    const taskId = ticket.id
                    newTasks[taskId] = {
                        id: taskId,
                        content: `${ticket.description} - ${ticket.category} - ${ticket.priority}`,
                    }
                    newTaskIds.push(taskId)
                })
                setData(prevData => ({
                    ...prevData,
                    tasks: newTasks,
                    columns: {
                        ...prevData.columns,
                        'column-1': {
                            ...prevData.columns['column-1'],
                            taskIds: newTaskIds,
                        },
                    },
                }))
            } catch (error) {
                console.error('Error fetching tickets:', error)
            }
        }
        fetchTickets()
    }, [])

    const onDragEnd = async (result) => {
        const { destination, source, draggableId } = result
        if (!destination) return
        if (destination.droppableId === source.droppableId && destination.index === source.index) return

        const startColumn = data.columns[source.droppableId]
        const endColumn = data.columns[destination.droppableId]

        const updatedTask = data.tasks[draggableId]
        if (!updatedTask) {
            console.error(`Task with ID ${draggableId} not found in data.tasks`)
            return
        }

        let newStatus = ''
        if (endColumn.id === 'column-2') {
            newStatus = 'Assigned'
        } else if (endColumn.id === 'column-3') {
            newStatus = 'Completed'
        } else {
            newStatus = 'Pending'
        }

        try {
            await updateDoc(doc(db, 'tickets', updatedTask.id), {
                status: newStatus,
            })
            console.log(`Ticket status updated successfully (${updatedTask.id}): ${newStatus}`)
        } catch (error) {
            console.error('Error updating ticket status:', error)
        }

        if (startColumn === endColumn) {
            const newTaskIds = Array.from(startColumn.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...startColumn,
                taskIds: newTaskIds,
            }

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn,
                },
            }

            setData(newState)
        } else {
            const startTaskIds = Array.from(startColumn.taskIds)
            startTaskIds.splice(source.index, 1)
            const newStartColumn = {
                ...startColumn,
                taskIds: startTaskIds,
            }

            const endTaskIds = Array.from(endColumn.taskIds)
            endTaskIds.splice(destination.index, 0, draggableId)
            const newEndColumn = {
                ...endColumn,
                taskIds: endTaskIds,
            }

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newStartColumn.id]: newStartColumn,
                    [newEndColumn.id]: newEndColumn,
                },
            }

            setData(newState)
        }
    }

    const deleteTask = (taskId) => {
        const newTasks = { ...data.tasks }
        delete newTasks[taskId]

        const newColumns = {}
        for (const columnId in data.columns) {
            newColumns[columnId] = {
                ...data.columns[columnId],
                taskIds: data.columns[columnId].taskIds.filter((id) => id !== taskId),
            }
        }

        const newState = {
            ...data,
            tasks: newTasks,
            columns: newColumns,
        }

        setData(newState)
    }

    return (
        <>
            <CssBaseline />
            <DragDropContext onDragEnd={onDragEnd}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
                    {data.columnOrder.map((columnId) => {
                        const column = data.columns[columnId]
                        const tasks = column.taskIds.map((taskId) => data.tasks[taskId])

                        return (
                            <Droppable key={column.id} droppableId={column.id}>
                                {(provided) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            margin: '8px',
                                            border: '1px solid lightgrey',
                                            borderRadius: '2px',
                                            padding: '8px',
                                            width: '300px',
                                            backgroundColor: '#f4f4f4',
                                        }}
                                    >
                                        <Typography variant="h6" component="h3">
                                            {column.title}
                                        </Typography>
                                        {tasks.map((task, index) => (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided) => (
                                                    <Card
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            marginBottom: '8px',
                                                            ...provided.draggableProps.style,
                                                        }}
                                                    >
                                                        <CardContent
                                                            style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            <Typography>{task.content}</Typography>
                                                            <IconButton
                                                                aria-label="delete"
                                                                size="small"
                                                                onClick={() => deleteTask(task.id)}
                                                            >
                                                                <DeleteIcon fontSize="small" />
                                                            </IconButton>
                                                        </CardContent>
                                                    </Card>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        )
                    })}
                </div>
            </DragDropContext>
        </>
    )
}

export default AssignmentManager
