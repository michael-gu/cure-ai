import React, { useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography, TextField} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Themes/customTheme';
import { Link } from 'react-router-dom'
import './Diagnosis.css';

const DiagnosisApp = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [diagnosis, setDiagnosisResponse] = useState('Enter patient information to receive diagnostic.');
    const [disease, setDiseaseResponse] = useState('N/A');
    const [treatment, setTreatmentResponse] = useState('N/A');

    const handleSubmit = async (e) => {
        e.preventDefault();

        //const inputData = `Name: ${name}, Age: ${age}, Symptoms: ${symptoms}. Give a diagnosis for what I might be experiencing in 100 words or less.`;
        const inputData = `Age: ${age}, Symptoms: ${symptoms}. Concisely identify what illness is most commonly associated with these symptoms at this age. Describe what the illness is`;


        try {
            const response1 = await fetch(`http://localhost:8080/getChatResponse?input=${inputData}`);
            const data1 = await response1.text();
            await setDiagnosisResponse(data1);
            
            const diseaseData = `In 3 words or less, identify the illness or condition from this description: ${data1}.`;
            const response2 = await fetch(`http://localhost:8080/getChatResponse?input=${diseaseData}`);
            const data2 = await response2.text();
            await setDiseaseResponse(data2);
          
            const diagnosticData = `If I had ${data2} at age ${age}, what are my typical treatment options?`;
            //console.log(diagnosticData); // Ensure that `diseaseResponse` is being used here
            const response3 = await fetch(`http://localhost:8080/getChatResponse?input=${diagnosticData}`);
            const data3 = await response3.text();
            await setTreatmentResponse(data3);
            console.log(diagnosis)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='page'>
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
            <div className='diagnosis-container'>
                <div className='diagnosis-form'>
                    <Typography variant='h5' fontWeight={'bold'} color={'#00355e'} className='diagnosis-header'>Patient Diagnosis Form</Typography>
                    <Box mt={3}>
                        <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="Age"
                            variant="outlined"
                            fullWidth
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            margin="normal"
                        />
                        <TextField
                            label="Symptoms"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            required
                            margin="normal"
                        />
                        <Button variant="contained" type="submit" color="primary">
                            Submit
                        </Button>
                        </form>
                    </Box>
                </div>
                <div className='diagnosis-dialogue'>
                    <Typography className='diagnosis-header' variant='h5' fontWeight={'bold'} color={"#00355e"} gutterBottom>CureAI Diagnosis</Typography>
                    <Typography color={"#00355e"} variant='h6'>Assesment: {disease}</Typography>
                    <br></br>
                    <Typography color={"#00355e"} variant='h9'>{diagnosis}</Typography>
                </div>
                <div className='diagnosis-dialogue'>
                    <Typography className='diagnosis-header' variant='h5' fontWeight={'bold'} color={"#00355e"} gutterBottom>CureAI Treatment Plan</Typography>
                    <Typography color={"#00355e"} variant='h9'>{treatment}</Typography>
                </div>
            </div>
            </div>
        </ThemeProvider>
    );
}

export default DiagnosisApp