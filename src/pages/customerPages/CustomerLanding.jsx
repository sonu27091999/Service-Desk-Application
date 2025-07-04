import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
//import { Link } from 'react-router-dom'
import RaiseTicket from './RaiseTicket'
import ViewTicket from './ViewTicket'
import './CustomerLanding.css'

const CustomerLanding = () => {

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId)
        const offset = 60
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
            <AppBar position='fixed' className='AppbarCust'>
                <Container className='containerCust'>
                    <Toolbar>
                        <Box className='boxesCust'>

                            <Typography variant='h5' onClick={() => scrollToSection('hero')}>
                                deskUP!
                            </Typography>
                            <MenuItem onClick={() => scrollToSection('viewTicket')}>
                                <Typography>
                                    View Tickets
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('newTicket')}>
                                <Typography>
                                    Raise Ticket
                                </Typography>
                            </MenuItem>
                            <Typography variant='h5' sx={{ml:50}}>
                                Customer
                            </Typography>
                            <Typography variant='h5'>
                                Dashboard
                            </Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <br></br>
            <br></br>
            <div>
                <section id='viewTicket'>
                    <ViewTicket />
                </section>
                <br></br>
                <section id='newTicket' className='newTicket'>
                    <RaiseTicket />
                </section>
                <br></br>
            </div>
        </>
    )
}

export default CustomerLanding
