import * as React from 'react'
import { Box, Typography, TextField, Stack, Checkbox, Button, FormGroup, FormControlLabel } from '@mui/material'
import '../../scss/react.scss'

const contactForm = () => {
    return (

        <Box className="form-container">
            <Typography className="form-title">Contact Us</Typography>
            <Box className="form-section">
                <Typography className="form-sub">How can we contact you?</Typography>
                <Stack>
                    <TextField variant="outlined" label="Name" className="form-text"></TextField>
                    <TextField variant="outlined" label="Email address" className="form-text"></TextField>
                    <TextField variant="outlined" label="Phone number" className="form-text"></TextField>
                </Stack>
            </Box>
            <Box className="form-section">
                <Typography className="form-sub">How can we help you?</Typography>
                    <FormGroup>
                        <FormControlLabel className="form-checkbox" control={<Checkbox />} label="General enquiry" />
                        <FormControlLabel className="form-checkbox" control={<Checkbox />} label="Expression of interest as vendor" />
                        <FormControlLabel className="form-checkbox" control={<Checkbox />} label="Accessibility enquiry" />
                    </FormGroup>
                    <TextField variant="outlined" label="Add your enquiry..." className="form-enquiry" multiline rows={4}></TextField>
            </Box>
            <Stack className="form-section">
                <Button className="form-button">Cancel</Button>
                <Button className="form-button">Send message</Button>
            </Stack>
        </Box>

    )
}

export default contactForm