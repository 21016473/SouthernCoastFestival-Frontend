import React, { useState } from 'react'
import { Grid, Box, Button, Stack, Typography, useMediaQuery, Select, MenuItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import '../../scss/react.scss'

const venueCards = () => {
    const [activeSection, setActiveSection] = useState('location')
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    const handleButtonClick = (section) => {
        setActiveSection(section)
    }

    const sections = [
        { id: 'location', label: 'Location' },
        { id: 'map', label: 'Festival Map' },
        { id: 'accessibility', label: 'Accessibility' },
        { id: 'parking', label: 'Parking' },
        { id: 'transport', label: 'Transport' },
    ]

    return (
        <>
        {isSmallScreen ? (
            <Box className="venue-nav-list">
                <Select 
                    value={activeSection} 
                    onChange={(e) => handleButtonClick(e.target.value)}
                    sx={{ color: '#FFFFFF' }}
                >
                    {sections.map((section) => (
                        <MenuItem key={section.id} value={section.id}>
                            {section.label}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
        ) : (
            <Grid container spacing={1} className="venue-nav">
                {sections.map((section) => (
                    <Grid item key={section.id}>
                        <Button onClick={() => handleButtonClick(section.id)}>
                            {section.label}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        )}
        

        <Box className="venue-container">
            {activeSection === 'location' && (
                <Box id="location">
                    <Stack>
                        <Typography className="subtitle">Location</Typography>
                        <Typography className="paragraph">Rippleside Park, Bell Parade Geelong, Victoria, Australia</Typography>
                    </Stack>
                    <Box className="google-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.567231010363!2d144.35266371147935!3d-38.12700147178166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad416b703b7800b%3A0xf04567605324bc0!2sRippleside%20Park!5e0!3m2!1sen!2sau!4v1721380831126!5m2!1sen!2sau" 
                            width="600" 
                            height="450" 
                            style={{ border: 0}} 
                            allowFullScreen="" 
                            loading="lazy"
                        >
                        </iframe>
                    </Box>
                </Box>
            )}
            {activeSection === 'map' && (
                <Box id="map">
                    <Box id="map-img"></Box>
                    <Typography className="subtitle">Festival Map</Typography>
                </Box>
            )}
            {activeSection === 'accessibility' && (
                <Box id="accessibility">
                    <Typography className="subtitle">Accessibility</Typography>
                    <Typography className="paragraph">We are committed to providing an accommodating experience for all our guests. If you have any specific requirements, don't hesitate to contact us.</Typography>
                    <Stack className="info">
                        <Typography className="bold">Parking:</Typography>
                        <Typography className="paragraph">Designated infoarking spots are located close to the entrance for guests with mobility needs. Display the appropriate permits.</Typography>
                    </Stack>
                    <Stack className="info">
                        <Typography className="bold">Pathways:</Typography>
                        <Typography className="paragraph">The event grounds feature smooth pathways to ensure easy navigation for wheelchairs and mobility aids.</Typography>
                    </Stack>
                    <Stack className="info">
                        <Typography className="bold">Restrooms:</Typography>
                        <Typography className="paragraph">Wheelchair-infoestrooms are available throughout the event site.</Typography>
                    </Stack>
                    <Stack className="info">
                        <Typography className="bold">Viewing:</Typography>
                        <Typography className="paragraph">We offer designated viewing areas for guests using wheelchairs, ensuring an unobstructed view of the light displays and performances.</Typography>
                    </Stack>
                    <Stack className="info">
                        <Typography className="bold">Assistance: </Typography>
                        <Typography className="paragraph">Our friendly staff and volunteers are on hand to assist with any needs or questions you may have during your visit.</Typography>
                    </Stack>
                </Box>
            )}
            {activeSection === 'parking' && (
                <Box id="parking">
                    <Typography className="subtitle">Parking</Typography>
                    <Stack className="info">
                        <Typography className="bold">On-site: </Typography>
                        <Typography className="paragraph">Our main event site features ample parking spaces just a short walk from the entrance. Follow signs to designated parking areas upon arrival.</Typography>
                    </Stack>
                    <Stack className="info">
                        <Typography className="bold">Street: </Typography>
                        <Typography className="paragraph">Limited street parking is available around the event site. Be sure to check local signage for any restrictions or time limits.</Typography>
                    </Stack>
                    <Stack className="info">
                        <Typography className="bold">On-site: </Typography>
                        <Typography className="paragraph">During peak times, additional overflow parking is available nearby. Shuttle services will be provided to transport guests to and from the main event area.</Typography>
                    </Stack>
                </Box>
            )}
            {activeSection === 'transport' && (
                <Box id="transport">
                    <Typography className="subtitle">Transport</Typography>
                    <Typography className="paragraph">For convenient infoe light festival, many parking spots are available nearby. Alternatively, infoublic transport is easy with frequent bus services and a nearby train station.</Typography>
                    <Typography className="paragraph">Follow signs for designated parking areas or plan your journey using public transport options for a hassle-free visit to this event.</Typography>
                </Box>
            )}
        </Box>
        </>
    )
}

export default venueCards