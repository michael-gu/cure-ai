import React from 'react';
import { Typography, Grid, Card, Container, CardMedia, CardContent} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Themes/customTheme';
import './Home.css';
import './Menu.css';
import pfp from './images/pfp.jpg'
import veloxLogo from './images/velox_logo.png'
import trailblazerLogo from './images/trailblazer_logo.PNG'
import { menu, footer } from './elements'

const HomePage = () => {
    return (
        <div className='home-page-container'>
        <ThemeProvider theme={theme}>
            {menu}
            <div className='home-page'>
                <Container className='home-page-content'>
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
                    </div>
                    
                    <div className='content-box'>
                        <Typography variant="h3" fontWeight={'bold'} gutterBottom>
                            A Message From the Founder
                        </Typography>
                        <Typography fontSize={20}>
                        I am thrilled to welcolme you to the transformative world of CureAI. CureAI stands at the forefront of a healthcare revolution, harnessing the immense potential of 
                        cutting-edge OpenAI technology. Our mission is clear: to empower individuals with instant access to reliable information, transcending the traditional barriers of cost and wait time associated with conventional doctor visits.<br></br><br></br> 
                        At CureAI, we are dedicated to precision and accessibility, ensuring that healthcare is not a privilege, but a fundamental right for all. In this pursuit, CureAI serves as a beacon of progress, 
                        illuminating the path toward a healthier, more informed world. Together, let us forge ahead on this journey of innovation and compassion, revolutionizing healthcare for the betterment of humanity.
                        Welcome to CureAI. Welcome to a future of possibility and empowerment.<br></br><br></br>
                        </Typography>
                        <Typography fontSize={24}>- Michael Gu, Founder/CEO</Typography>
                    </div>
                    <div className='content-box'>
                        <Typography variant="h3" fontWeight={'bold'} gutterBottom>
                            News and Updates
                        </Typography>
                        <Grid container>
                            <Grid item xs={12} sm={4} className='team-grid'>
                                <Card className="news-card">
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={pfp}
                                    alt={`News #1`}
                                />
                                <CardContent>
                                    <Typography fontSize={26} fontWeight={'bold'} color={'#00355e'} gutterBottom>
                                    Meet the Founder
                                    </Typography>
                                    <Typography fontSize={18} color={'#00355e'}>
                                        I'm Michael Gu, the founder of CureAI. See my work and latest updates below! <br></br>
                                        Website: <a href="https://michael-gu.github.io/website/" target="_blank" rel="noopener noreferrer">Link</a>
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4} className='team-grid'>
                                <Card className="news-card">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={veloxLogo}
                                        alt={`News #2`}
                                    />
                                    <CardContent>
                                        <Typography fontSize={26} fontWeight={'bold'} color={'#00355e'} gutterBottom>
                                            Project: Velox Solutions
                                        </Typography>
                                        <Typography fontSize={18} color={'#00355e'}>
                                            Velox is a tech solution that aims to disrupt and revitalize customer service communications via streamlined, fully automated customer support backed by new AI capabilities, language processing, and calling functions.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4} className='team-grid'>
                                <Card className="news-card">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={trailblazerLogo}
                                        alt={`News #3`}
                                    />
                                    <CardContent>
                                        <Typography fontSize={26} fontWeight={'bold'} color={'#00355e'} gutterBottom>
                                        Project: Trailblazer
                                        </Typography>
                                        <Typography fontSize={18} color={'#00355e'}>
                                        Trailblazer is an iOS native app that is changing the way outdoor communities connect. Utilizing our self-developed trail recording system, people and trailblazers can create and share their adventures, contributing to a community-developed trailmap. Our potential lies only in the limitations of what our trailblazers can imagine!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </ThemeProvider>
        {footer}
        </div>
    );
}

export default HomePage