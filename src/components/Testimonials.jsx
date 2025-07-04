import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import './Testimonials.css'
import img1 from '../assets/testimonial1.webp'
import img2 from '../assets/testimonial2.avif'
import img3 from '../assets/testimonial3.jfif'

const Testimonials = () => {
    return (
        <>
        <div className='topOrder'>
            <Card sx={{ maxWidth: 345 }} className='testimonialSection'>
                <CardMedia
                    sx={{ height: 140 }}
                    image={img1}
                    title="porf1"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mr Lamar
                    </Typography>
                    <Typography variant="body1">
                        '...Better than any other service desk in the market, true market domination...'
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className='testimonialSection'>
                <CardMedia
                    sx={{ height: 140 }}
                    image={img2}
                    title="porf2"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mr Woods
                    </Typography>
                    <Typography variant="body1">
                        '...Works never been easier, remarkable automation...'
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className='testimonialSection'>
                <CardMedia
                    sx={{ height: 140 }}
                    image={img3}
                    title="porf3"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Ms Lily
                    </Typography>
                    <Typography variant="body1">
                        '...Managing a team only seems tedious, after using this it actually becomes a walk in the park...'
                    </Typography>
                </CardContent>
            </Card>
        </div>
        </>
    )
}

export default Testimonials
