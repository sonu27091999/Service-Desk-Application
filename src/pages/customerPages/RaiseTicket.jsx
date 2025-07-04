import { useState } from 'react'
import { db } from '../../firebase/firebaseConfig.js'
import { doc, setDoc } from 'firebase/firestore'
import { useLocation } from 'react-router-dom'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import './RaiseTicket.css'

const RaiseTicket = () => {
    const [ticket, setTicket] = useState({
        category: '',
        priority: '',
        description: ''
    })
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const userEmail = searchParams.get('email')

    const [priorityDisp, setPriorityDisp] = useState('')
    const [categoryDisp, setCategoryDisp] = useState('')

    const handleChange = (event) => {
        setCategoryDisp(event.target.value)
        setTicket({ ...ticket, category: event.target.value })
    }

    const handlePriorityChange = (event) => {
        setPriorityDisp(event.target.value)
        setTicket({ ...ticket, priority: event.target.value })
    }

    const handleDescriptionChange = (event) => {
        setTicket({ ...ticket, description: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await setDoc(doc(db, 'tickets', Date.now().toString()), {
                category: ticket.category,
                priority: ticket.priority,
                description: ticket.description,
                email: userEmail,
                status: 'Pending'
            })
            setTicket({ category: '', priority: '', description: '' })
            setPriorityDisp('')
            setCategoryDisp('')
            console.log('Ticket submitted successfully:', ticket)
        } catch (error) {
            console.error('Error adding ticket to Firestore:', error)
        }
    }

    return (
        <Box component="section" sx={{ p: 2, border: '2px solid black', maxWidth: 500 }} className='parentBox'>
            <Typography variant='h6' className='top'>
                Raise a new ticket
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="filled-basic"
                    label="Describe the issue you are facing..."
                    multiline
                    maxRows={4}
                    variant="filled"
                    className='description'
                    sx={{ m: 1, width: '68ch' }}
                    value={ticket.description}
                    onChange={handleDescriptionChange}
                />
                <div className='selectors'>
                    <Box sx={{ minWidth: 150 }} className='category'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categoryDisp}
                                label="Category"
                                onChange={handleChange}
                            >
                                <MenuItem value="Electrical">Electrical</MenuItem>
                                <MenuItem value="Plumbing">Plumbing</MenuItem>
                                <MenuItem value="Carpentry">Carpentry</MenuItem>
                                <MenuItem value="Mason">Mason</MenuItem>
                                <MenuItem value="Gas">Gas</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 150 }} className='priority'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={priorityDisp}
                                label="Priority"
                                onChange={handlePriorityChange}
                            >
                                <MenuItem value="Urgent">Urgent:(immediate dispatch)</MenuItem>
                                <MenuItem value="High">High:(resolves in 1 hr)</MenuItem>
                                <MenuItem value="Medium">Medium:(resolves in 24 hr)</MenuItem>
                                <MenuItem value="Low">Low:(resolves in 48 hr)</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <br></br>
                <Button type="submit" className='button'>
                    SUBMIT
                </Button>
            </form>
        </Box>
    )
}

export default RaiseTicket
