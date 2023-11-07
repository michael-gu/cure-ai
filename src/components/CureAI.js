import React, { useState } from 'react';
import './CureAI.css';
import './Menu.css'
import { Button, TextField, Typography} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Themes/customTheme';
import { footer, menu } from './elements'

const CureAIApp = () => {
    const [messages, setMessages] = useState([{text: "Welcome to CureAI - I am Curie, your AI health assistant.", sender: "Curie"}]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSendMessage = () => {
      const userInput = inputValue.trim();
      if (userInput !== '') {
        setMessages(prevMessages => [...prevMessages, { text: userInput, sender: 'You' }]);
        setInputValue('');
  
        fetch(`http://https://tranquil-savannah-00376-c1488b304c95.herokuapp.com/get-curie-response?input=${encodeURIComponent(userInput)}&tokens=${400}`)
          .then(response => response.text())
          .then(data => {
            setMessages(prevMessages => [...prevMessages, { text: data, sender: 'Curie' }]);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }


    };

    return (
      <div className='chat-page-container'>
        <ThemeProvider theme={theme}>
          {menu}
          <div className='chat-page'>          
            <div className='chat-page-header'>
                <Typography variant="h4" fontWeight={'bold'} gutterBottom>Connect with Curie: Your Personalized Wellness AI</Typography>
                <Typography fontSize={24} fontWeight={'bold'} paragraph>
                24/7 Trusted Medical Insights at Your Fingertips
                </Typography>
            </div>
            <div className='curie-container'>
              <div className='curie-chatbox-container'>
                <div className="curie-chatbox">        
                  <div className="message-container">
                    <Typography variant='h6' color={'primary'}>
                      {messages.map((message, index) => (
                        <div className="message" key={index}>
                          <strong>{message.sender}:</strong> {message.text}
                        </div>
                      ))} 
                    </Typography>

                  </div>
                </div>
                <div className="input-container">
                  <TextField
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                    className="input-field"
                    multiline="true"
                    InputProps={{endAdornment: (<Button variant="contained" color='secondary' onClick={handleSendMessage}>Send</Button>),}} />
                </div>
              </div>

              <div className='curie-information'>
                <Typography fontSize={32} fontWeight={'bold'} gutterBottom>Meet CureAI's Chatbot Curie.</Typography>
                <Typography variant="h7"><strong>Be Informed:</strong> With access to a vast corpus of medical literature and guidelines, Curie offers well-informed advice on various health-related topics.</Typography>
                <br></br><br></br>
                <Typography variant="h7"><strong>Get Diagnosed:</strong> Curie has been trained on extensive medical knowledge and can provide preliminary information about various diseases based on the symptoms you describe. </Typography>
                <br></br><br></br>
                <Typography variant="h7"><strong>Stay Secure: </strong> Curie is equipped with the latest advancements in natural language processing and machine learning, enabling it to understand and respond to your queries with accurate and reliable information.</Typography>
                <br></br><br></br><br></br><br></br>
                <Typography variant="h9" gutterBottom>
                <strong>Note:</strong> While Curie is a valuable resource, it's crucial to remember that it does not replace the expertise of a qualified healthcare provider. Always consult a medical professional for personalized advice, diagnosis, and treatment.
                </Typography>
              </div> 
            </div> 
            <div className='chat-faqs'> 
              <Typography variant='h3' fontWeight={'bold'} gutterBottom>Frequently Asked Questions</Typography>
              <Typography variant='h4' fontWeight={'bold'} gutterBottom>How does the AI medical chat bot work?</Typography>
              <Typography variant='h6' paragraph>The AI medical chat bot utilizes advanced natural language processing and machine learning techniques to understand and respond to user queries. It is trained on a vast corpus of medical literature and constantly updated to provide accurate and up-to-date information.</Typography>
              <Typography variant='h4' fontWeight={'bold'} gutterBottom>What types of questions can I ask the chat bot?</Typography>
              <Typography variant='h6' paragraph>You can ask the chat bot a wide range of medical-related questions, from general health inquiries to specific symptoms, advice on managing chronic conditions, and more. However, please remember that the chat bot is not a replacement for professional medical advice.</Typography>
              <Typography variant='h4' fontWeight={'bold'} gutterBottom>Can I trust the privacy and security of my information?</Typography>
              <Typography variant='h6' paragraph>Absolutely. We take privacy and security seriously. All interactions with the chat bot are encrypted, and we adhere to strict privacy policies. Your data will never be shared with third parties without your explicit consent.</Typography>
              

            </div>
          </div>
        </ThemeProvider>
        {footer}
      </div>
    );
  };
  
  export default CureAIApp;
  