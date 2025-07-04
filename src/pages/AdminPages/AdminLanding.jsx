import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
//import { Link } from 'react-router-dom'
import './AdminLanding.css'
import './PendingTickets'
import PendingTickets from './PendingTickets'
import AssignmentManager from './AssignmentManager'

const AdminLanding = () => {

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId)
        const offset = 65
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            })
        }
    }

    return (
        <>
            <AppBar position='fixed' className='AppbarAdmin'>
                <Container className='containerAdmin'>
                    <Toolbar>
                        <Box className='boxesAdmin'>
                            <Typography variant='h5' onClick={() => scrollToSection('hero')}>
                                DeskUP!
                            </Typography>
                            <MenuItem onClick={() => scrollToSection('taskList')}>
                                <Typography>
                                    Pending Tickets
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('kanban')}>
                                <Typography>
                                    Assignment Manager
                                </Typography>
                            </MenuItem>
                            <Typography variant='h5' sx={{ ml: 50 }}>
                                Administrator
                            </Typography>
                            <Typography variant='h5'>
                                Dashboard
                            </Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <section id='taskList'>
                <PendingTickets />
            </section>

            <section id='kanban'>
                <AssignmentManager />
            </section>
        </>
    )
}

export default AdminLanding
