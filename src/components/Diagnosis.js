import React, { useState } from 'react';
import { Box, Button, Typography, TextField} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Themes/customTheme';
import { menu, footer } from './elements'
import './Diagnosis.css';
import './Menu.css'
import './CustomTextField.css'; // Import your custom CSS file

const DiagnosisApp = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [diagnosis, setDiagnosisResponse] = useState('N/A');
    const [summary, setSummary] = useState('Please fill out patient diagnosis form to receive results.');
    const [treatment, setTreatment] = useState('Please fill out patient diagnosis form to receive results.');
    const [concerns, setConcerns] = useState('');
    const [processing, setProcessing] = useState(false);

    const handleClickScroll = () => {
        const element = document.getElementById('result-scroll');
        const appbarHeight = 8 * window.innerHeight / 100; // Calculate 8vh in pixels
    
        if (element) {
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            const targetY = elementTop - appbarHeight;
            window.scrollTo({
                top: targetY,
                behavior: 'smooth'
            });
        }
    }   

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        try {
            const response1 = await fetch(`http://localhost:8080/get-diagnosis?age=${age}&symptoms=${symptoms}`);
            const data1 = await response1.text();
            await setDiagnosisResponse(data1);
            
            const diseaseData = `What is ${data1}?`;
            const response2 = await fetch(`http://localhost:8080/get-curie-response?input=${diseaseData}&tokens=${300}`);
            const data2 = await response2.text();
            await setSummary(data2);
          
            const diagnosticData = `How to treat ${data1} or alleviate it's symptoms?`;
            //console.log(diagnosticData); // Ensure that `diseaseResponse` is being used here
            const response3 = await fetch(`http://localhost:8080/get-curie-response?input=${diagnosticData}&tokens=${300}`);
            const data3 = await response3.text();
            await setTreatment(data3);
            handleClickScroll();
            setProcessing(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='diagnosis-page-container'>
            <ThemeProvider theme={theme}>     
                {menu}
                <div className='diagnosis-form'>
                    <Typography variant='h3' fontWeight={'bold'} color={'#3F3F3F'} className='diagnosis-header'>Patient Diagnosis Form</Typography>
                    <Box mt={3}>
                        <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            className="custom-text-field" // Apply a custom class
                            InputProps={{
                                className: 'input', // Apply a custom class to the input
                            }}
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            margin="normal"
                            style={{ backgroundColor: 'white' }}
                        />
                        <TextField
                            label="Age"
                            className="custom-text-field" // Apply a custom class
                            InputProps={{
                                className: 'input', // Apply a custom class to the input
                            }}
                            variant="outlined"
                            fullWidth
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            margin="normal"
                            style={{ backgroundColor: 'white' }}
                        />
                        <TextField
                            label="Concerns"
                            className="custom-text-field" // Apply a custom class
                            InputProps={{
                                className: 'input', // Apply a custom class to the input
                            }}
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={2}
                            value={concerns}
                            onChange={(e) => setConcerns(e.target.value)}
                            required
                            margin="normal"
                            style={{ backgroundColor: 'white' }}
                        />                        
                        <TextField
                            label="Symptoms"
                            className="custom-text-field" // Apply a custom class
                            InputProps={{
                                className: 'input', // Apply a custom class to the input
                            }}
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            required
                            margin="normal"
                            style={{ backgroundColor: 'white' }}
                        />

                        <Button variant="contained" type="submit" color="button" size='large'>
                            <Typography variant='h7' color={'white'} fontWeight={'bold'}>Get Results</Typography>
                        </Button>
                        {processing && <Typography variant='h5' color={'#3F3F3F'}>Processing Request...</Typography>}

                        </form>
                    </Box>
                </div>
                <div id='result-scroll' className='diagnosis-result-container'>
                    <div className='result-dialogue'>
                        <Typography className='result-header' variant='h3' fontWeight={'bold'} color={'#3F3F3F'} gutterBottom>Diagnosis</Typography>
                        <Typography color={'#3F3F3F'} variant='h4' fontWeight={'bold'}>CureAI Assessment: {diagnosis}</Typography>
                        <br></br>
                        <Typography color={'#3F3F3F'} variant='h5'>{summary}</Typography>
                    </div>
                    <div className='result-dialogue'>
                        <Typography className='result-header' variant='h3' fontWeight={'bold'} color={'#3F3F3F'} gutterBottom>Treatment</Typography>
                        <Typography color={'#3F3F3F'} variant='h4' fontWeight={'bold'}>CureAI Suggested Treatment</Typography>
                        <br></br>
                        <Typography color={'#3F3F3F'} variant='h5'>{treatment}</Typography>
                    </div>

                </div>
                    
            </ThemeProvider>
            {footer}
        </div>
    );
}

export default DiagnosisApp