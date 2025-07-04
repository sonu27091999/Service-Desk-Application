import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { auth, db } from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const SignUP = () => {
    const [profile, setProfile] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate()
    
    const handleChange = (event) => {
        setProfile(event.target.value)
        console.log('Profile set to:', event.target.value)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            await setDoc(doc(db, 'users', user.uid), {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                profile,
            })
            console.log('User registered successfully:', user)
            if (profile === 'customer') {
                navigate(`/custLand?email=${formData.email}`)
            } else if (profile === 'administrator') {
                navigate('/adminLand')
            } else if (profile === 'worker') {
                navigate('/workerLand')
            }
        } catch (error) {
            console.error('Error signing up:', error)
        }
    }

    const redirectHome= ()=>{
        navigate('/')
    }

    return (
        <>
        <Button variant="outlined" onClick={redirectHome}>
            BACK TO HOME
        </Button>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Profile</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={profile}
                                            label="Profile"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="customer">Customer (I will use services)</MenuItem>
                                            <MenuItem value="administrator">Administrator (I manage the application)</MenuItem>
                                            <MenuItem value="worker">Worker (I will provide services)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/SignIN" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default SignUP
