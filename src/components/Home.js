import React, { useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography, Grid, Card, Container, CardMedia, CardContent} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Themes/customTheme';
import { Link } from 'react-router-dom'
import './Home.css';

const HomePage = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar className='topMenuBar' position="fixed" color='primary'>
                <Toolbar>
                <Typography margin-right={5} className="appbar-button" variant="h2" color={'white'}>
                    CureAI
                </Typography>
                <Box margin={1}> {/* Adjust the margin value as needed */}
                    <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant='contained' color='secondary'>
                        <Typography color={'white'}>Home</Typography>
                    </Button>
                    </Link>
                </Box>
                <Box margin={1}>
                    <Link to="/cure-ai" style={{ textDecoration: 'none' }}>
                    <Button variant='contained' color='secondary'>
                        <Typography color={'white'}>CURE AI</Typography>
                    </Button>
                    </Link>
                </Box>
                <Box margin={1}>
                    <Link to="/diagnosis-page" style={{ textDecoration: 'none' }}>
                    <Button variant='contained' color='secondary'>
                        <Typography color={'white'}>Diagnose</Typography>
                    </Button>
                    </Link>
                </Box>
                </Toolbar>
            </AppBar>
            <div className='page'>
                <Container className='page-content'>
                    <div className='content-box'>
                        <Typography variant="h2" fontWeight={'bold'} gutterBottom>Introducing CureAI.</Typography>
                        <Typography variant="h3" fontWeight={'bold'} gutterBottom>Your Health and Wellness Companion.</Typography>
                        <Typography fontSize={20} paragraph>
                            Harnessing the power of cutting-edge artificial intelligence, CureAI is revolutionizing the way we approach healthcare. With the ability to 
                            swiftly and accurately diagnose diseases based on symptoms, as well as provide insightful answers to a wide range of medical and health-related 
                            queries, CureAI is poised to transform the healthcare landscape. Our mission is to empower individuals with instant access to reliable information, 
                            reducing both cost and wait time associated with traditional doctor visits. Embodying a commitment to precision and accessibility,
                            CureAI stands as a beacon of progress in the pursuit of a healthier, more informed world. 
                        </Typography>
                        <Typography fontSize={24} fontWeight={'bold'} paragraph>
                            Try CureAI's Chat Assistant Today!
                        </Typography>
                    </div>
                    
                    <div className='content-box'>
                        <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                            Meet Our Founder
                        </Typography>
                        <Typography fontSize={20} paragraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
                        also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </div>
                    <div className='content-box'>
                        <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                            News and Updates
                        </Typography>
                        <Grid container spacing={2}>
                            {[1, 2, 3].map((number) => (
                            <Grid item xs={12} sm={4} key={number}>
                                <Card className="team-card">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={`https://via.placeholder.com/300x140?text=Image+${number}`}
                                    alt={`News #${number}`}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                    News Article #{number}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Write a brief description about the news update here.
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </div>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default HomePage