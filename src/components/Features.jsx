import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography, Grid } from '@mui/material'
import './Features.css'
import ticketImg from '../assets/flat-design-person-making-complain.png'
import trackImg from '../assets/landing-page-template.png'
import priorityImg from '../assets/freepik-export-20240703124357i6VW.png'
import taskAssign from '../assets/giant-check-list.png'
import kanban from '../assets/kanban-method-concept-illustration.png'
import resolve from '../assets/Wavy_Bus-06_Single-09.jpg'
import number1 from '../assets/10317227_27872.jpg'
import assign from '../assets/6596995_3333237.jpg'

const Features = () => {
    return (
        <Card className='featureSection'>
            <CardContent>
                <Typography variant='h2' className='heading'>
                    Our Features
                </Typography>

                <Typography variant='h4' className='heading'>
                    3 way interaction: Customer, Admin and Worker
                </Typography>
                <br></br>
                <br></br>
                <Typography variant='h4'>A happy customer</Typography>
                <Typography variant='h6'>Upon signUP, register yourself as a customer and enjoy
                    all of these features </Typography>

                <Grid container direction='column' spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <img src={ticketImg} alt='img' className='ticketImg'
                                    style={{ width: '250px', height: '200px' }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>Raising a complaint ticket has never been easier</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <img src={trackImg} alt='img' className='trackImg'
                                    style={{ width: '250px', height: '200px' }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>Get realtime updates of the status of your complaint</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <img src={priorityImg} alt='img' className='priorityImg'
                                    style={{ width: '250px', height: '200px' }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>Set your priorities, straight up. 
                                </Typography>
                                <Typography>
                                High priority tasks
                                have an average resolve time of less than 12hrs!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br></br>
                <div className='subTextContainer'>
                    <Typography variant='h4' className='subText'>A helping hand for Administration</Typography>
                    <Typography variant='h6' className='subText'>Introducing an all new Ticket-Management System</Typography>
                </div>

                <Grid container direction='column' spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
                            <Grid item>
                                <Typography align="right">Assign tasks in less than 3 clicks</Typography>
                            </Grid>
                            <Grid item>
                                <img src={taskAssign} alt='img' className='ticketImg'
                                    style={{ width: '250px', height: '200px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
                            <Grid item>
                                <Typography align="right">A kanban board to manage the To-Dos, In-Progress and Pending complaints</Typography>
                            </Grid>
                            <Grid item>
                                <img src={kanban} alt='img' className='trackImg'
                                    style={{ width: '250px', height: '200px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
                            <Grid item>
                                <Typography align="right">Automatically resolves the tickes upon Completions
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src={resolve} alt='img' className='priorityImg'
                                    style={{ width: '250px', height: '200px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br></br>
                <Typography variant='h4' className='subText'>A competent Workforce</Typography>
                <Typography variant='h6' className='subText'>A hassle-free view and updation of the Worker tasks</Typography>

                <Grid container direction='column' spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <img src={number1} alt='img' className='ticketImg'
                                    style={{ width: '250px', height: '200px' }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>All associated workers are top 1% in their industry</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <img src={assign} alt='img' className='trackImg'
                                    style={{ width: '250px', height: '200px' }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>Managing assignment of task is as easy as it can get</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}

export default Features
