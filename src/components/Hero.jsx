import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'
import deskImg from '../assets/call-center.png'
import './Hero.css'

const Hero= ()=>{
    return(
        <Card className='Hero'>
            <CardContent>
                <Typography variant='h3'>
                    ONE DESK, MANY HAPPY CUSTOMERS!
                </Typography>
                <Typography variant='h5'>
                    and all possible solutions, So do not wait and deskUP!
                </Typography>
                <div className='deskImage'>
                    <img src={deskImg} alt='img' className='theImage' />
                </div>
            </CardContent>
        </Card>
    )
}

export default Hero
