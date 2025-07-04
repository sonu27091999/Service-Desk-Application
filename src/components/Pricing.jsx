import Card from '@mui/material/Card'
import { Typography } from '@mui/material'
import './Pricing.css'

const Pricing = () => {
    return (
        <Card className='parentCard'>
            <Typography variant='h4' className='header'>
                PRICING
            </Typography>
            <br></br>
            <Typography variant='h6'>
                If you are an organization, choose any one of the plans and begin immediately:
            </Typography>

            <Card className='cardContent'>
                <Card className='actualCard'>
                    <Typography variant='h5'>
                        FREE
                    </Typography>
                    <div className='free'>
                        <Typography>
                            Max Requests/day: 250
                        </Typography>
                        <Typography>
                            Worker Dashboard: 25 hires(max)
                        </Typography>
                        <Typography>
                            Payroll: unavailabe
                        </Typography>
                    </div>
                </Card>

                <Card className='actualCard'>
                    <Typography variant='h5'>
                        BASIC
                    </Typography>
                    <div className='basic'>
                        <Typography>
                            Max Requests/day: 550
                        </Typography>
                        <Typography>
                            Worker Dashboard: 50 hires(max)
                        </Typography>
                        <Typography>
                            Payroll: 35 employees(max)
                        </Typography>
                    </div>
                </Card>

                <Card className='actualCard'>
                    <Typography variant='h5'>
                        PRO
                    </Typography>
                    <Typography>
                        (poppular)
                    </Typography>
                    <div className='pro'>
                        <Typography>
                            Max Requests/day: 2700
                        </Typography>
                        <Typography>
                            Worker Dashboard: 170 hires(max)
                        </Typography>
                        <Typography>
                            Payroll: 170 employees(max)
                        </Typography>
                    </div>
                </Card>

                <Card className='actualCard'>
                    <Typography variant='h5'>
                        ENTERPRISE
                    </Typography>
                    <div className='exterprise'>
                        <Typography>
                            Max Requests/day: unlimited
                        </Typography>
                        <Typography>
                            Worker Dashboard: unlimited
                        </Typography>
                        <Typography>
                            Payroll: 400 employees(max)
                        </Typography>
                    </div>
                </Card>
            </Card>
        </Card>
    )
}

export default Pricing
