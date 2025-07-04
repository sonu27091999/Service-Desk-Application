import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
import './AppBarActual.css'
import {Link} from 'react-router-dom'

const AppBarActual= ()=>{

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId)
        const offset = 67
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            })
        }
    }

    return(
        <>
        <AppBar position='fixed' className='Appbar'>
            <Container className='container'>
                <Toolbar>
                    <Box className='boxes'>
                        <Box className='leftItems'>
                            <Typography variant='h5' onClick={() => scrollToSection('hero')}>
                                deskUP!
                            </Typography>
                            <MenuItem onClick={() => scrollToSection('features')}>
                                <Typography>
                                    Features
                                </Typography>                            
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('testimonials')}>
                                <Typography>
                                    Testimonials
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('pricing')}>
                                <Typography>
                                    Pricing
                                </Typography>
                            </MenuItem>
                        </Box>
                        <Box className='rightItems'>
                            <MenuItem button='true' component={Link} to='/signIn'>
                                <Typography>
                                    Sign-In
                                </Typography>
                            </MenuItem>
                            <MenuItem button='true' component={Link} to='/signUp'>
                                <Typography>
                                    Sign-Up
                                </Typography>
                            </MenuItem>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    )
}

export default AppBarActual
