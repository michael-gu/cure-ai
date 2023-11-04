import React, { useState } from 'react';
import './CureAI.css';
import { AppBar, Box, Button, TextField, Toolbar, Typography} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Themes/customTheme';
import { Link } from 'react-router-dom'

const CureAIApp = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSendMessage = () => {
      const userInput = inputValue.trim();
      if (userInput !== '') {
        setMessages(prevMessages => [...prevMessages, { text: userInput, sender: 'You' }]);
        setInputValue('');
  
        fetch(`http://localhost:8080/getChatResponse?input=${encodeURIComponent(userInput)}`)
          .then(response => response.text())
          .then(data => {
            setMessages(prevMessages => [...prevMessages, { text: data, sender: 'CureAI' }]);
          })
          .catch(error => {
            console.error('Error:', error);
          });
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
                <Link to="/cureai" style={{ textDecoration: 'none' }}>
                  <Button variant='contained' color='secondary'>
                    <Typography color={'white'}>Try CureAI</Typography>
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
          <div className='try-content'>
            <Typography variant="h4" fontWeight={'bold'} gutterBottom>Try CureAI Assistant</Typography>
            <Typography fontSize={24} fontWeight={'bold'} paragraph>
                Experience the future of healthcare today!
            </Typography>
          </div>
          <div className='content-container'>
            <div className="chatbot-container">
              <div className="chatbox">        
                <div className="message-container">
                  {messages.map((message, index) => (
                    <div className="message" key={index}>
                      <strong>{message.sender}:</strong> {message.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="input-container">
                <TextField
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type a message..."
                  className="input-field"
                  multiline="true"
                  InputProps={{endAdornment: (<Button variant="contained" color='quarternary' onClick={handleSendMessage}>Send</Button>),}} />
              </div>
            </div>

            <div id='chatbot-tips'>
              <Typography variant="h5" fontWeight={'bold'} gutterBottom>CureAI's Chat Assistant Capabilities</Typography>
              <ul>
                <li><Typography variant="h8">Suggest possible diagnoses based on your symptoms</Typography></li>
                <li><Typography variant="h8">Provide general medical advice</Typography></li>
              </ul>
              <Typography variant="h7" fontWeight={'bold'} gutterBottom>NOTE: CureAI is not licensed to give definitive information. For conclusive advice, 
              please consult a qualified healthcare professional for any medical concerns or questions you may have</Typography>
            </div>
          </div>
          

        </div> 
      </ThemeProvider>
    );
  };
  
  export default CureAIApp;
  