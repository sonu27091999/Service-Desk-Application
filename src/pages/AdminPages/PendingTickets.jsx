import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import './PendingTickets.css'

const PendingTickets = () => {

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
            } catch (error) {
                console.error('Error fetching tickets:', error)
            }
        }

        fetchTickets()
    }, [])

    return (
        <>
        <Typography variant='h5' sx={{mt:9, textAlign:"center"}}>
            Pending tickets
        </Typography>
            <Box component="section" sx={{ p: 2, maxWidth: 500, margin: '0 auto', mt: 1 }} className='containerBox'>
                {tickets.map((ticket) => (
                    <Box key={ticket.id} sx={{ p: 2, border: '2px solid gray', marginBottom: 2, borderRadius: 2 }} className='viewBoxTop'>
                        <Typography variant='body1'><strong>Description:</strong></Typography>
                        <Typography variant='body1' className='descriptionText'>{ticket.description}</Typography>
                        <Typography variant='body1' className='categoryText'><strong>Category:</strong> {ticket.category}</Typography>
                        <Typography variant='body1' className='priorityText'><strong>Priority:</strong> {ticket.priority}</Typography>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default PendingTickets
