import * as React from 'react'
import { useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material'
import placeholderImg from '../../../static/images/placeholder.png'
import '../../scss/react.scss'

const eventCard = () => {
    const [isActive, setActive] = useState(false)

    const handleButtonClick = () => {
        setIsActive(!isActive)
    }

    return (
        <Card className="event-card" >
            <CardContent className="event-content">
                <CardMedia
                    component="img"
                    alt="placeholder"
                    height="100"
                    image={placeholderImg}
                    className="event-image"
                />
                <Box className="event-title-box">
                    <Typography className="event-title">
                        Title
                    </Typography>
                    <IconButton className="event-button">
                        <span className="material-icons">
                            favorite_border
                        </span>
                    </IconButton>
                </Box>
                <Typography className="event-description">
                    Description lorem ipsum
                </Typography>
                <Typography className="event-times">
                    Times: times
                </Typography>
            </CardContent>
        </Card>
    )
}

export default eventCard