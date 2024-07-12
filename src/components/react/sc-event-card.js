import * as React from 'react'
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material'
import placeholderImg from '../../../static/images/placeholder.png'

const eventCard = () => {
    return (
        <Card>
            <CardContent>
                <CardMedia
                    component="img"
                    alt="placeholder"
                    height="100"
                    image={placeholderImg}
                />
                <Typography fontFamily="var(--base-font-family)" color="#000000" gutterBottom>
                    Test
                </Typography>
                <Box>
                    <Typography>
                        Title
                    </Typography>
                    <Button aria-label="favorite">
                        <span className="material-icons">favorite_border</span>
                    </Button>
                </Box>
                <Typography>
                    Description lorem ipsum
                </Typography>
                <Typography>
                    Times: times
                </Typography>

            </CardContent>
        </Card>
    )
}

export default eventCard