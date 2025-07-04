import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { useLocation } from 'react-router-dom'
import { Box, Typography, Card, CardContent, Button } from '@mui/material'
import './ViewTicket.css'

const ViewTicket = () => {
    const [tickets, setTickets] = useState([])
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const userEmail = searchParams.get('email')

    useEffect(() => {
        const fetchTickets = async () => {
            const q = query(collection(db, 'tickets'), where('email', '==', userEmail))
            const querySnapshot = await getDocs(q)
            const ticketsArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setTickets(ticketsArray)
        }

        fetchTickets()
    }, [userEmail])

    const handleDelete = async (ticketId) => {
        try {
            await deleteDoc(doc(db, 'tickets', ticketId))
            setTickets(tickets.filter(ticket => ticket.id !== ticketId))
            console.log('Ticket deleted successfully:', ticketId)
        } catch (error) {
            console.error('Error deleting ticket:', error)
        }
    }

    return (
        <Box component="section" sx={{ p: 2, maxWidth: 500, mx: 'auto' }}>
            <Typography variant='h5' sx={{ mb: 2, textAlign: 'center' }}>
                Your Tickets
            </Typography>
            {tickets.length === 0 ? (
                <Typography sx={{ mb: 2, textAlign: 'center' }}>no complaints huh</Typography>
            ) : (
                tickets.map((ticket) => (
                    <Card key={ticket.id} sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant='body1'><strong>Description:</strong></Typography>
                            <Typography variant='body1' className='descriptionText'>{ticket.description}</Typography>
                            <Typography variant='body1' className='categoryText'><strong>Category:</strong> {ticket.category}</Typography>
                            <Typography variant='body1' className='priorityText'><strong>Priority:</strong> {ticket.priority}</Typography>
                            <Typography variant='body1' className='statusText'><strong>Status:</strong> {ticket.status}</Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleDelete(ticket.id)}
                                sx={{ mt: 2 }}
                            >
                                Delete Ticket
                            </Button>
                        </CardContent>
                    </Card>
                ))
            )}
        </Box>
    )
}

export default ViewTicket
