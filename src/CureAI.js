import React, { useState } from 'react';
import './CureAI.css';
import { AppBar, Button, Box, TextField, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const ChatApp = () => {
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
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div className='homepage'>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2">
              CureAI
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">Settings</Button>
          </Toolbar>
        </AppBar>
        <div className="chatbot-container">
            <div className="chatbox">        
              <div className="message-container">
                {messages.map((message, index) => (
                  <div className="message" key={index}>
                    <strong>{message.sender}:</strong> {message.text}
                  </div>
                ))}
              </div>
              <div className="input-container">
                <TextField
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type a message..."
                  className="input-field"
                  multiline="true"
                  InputProps={{endAdornment: (<Button variant="contained" onClick={handleSendMessage}>Send</Button>),}} />
              </div>
            </div>
          </div>
        </div>
    );
  };
  
  export default ChatApp;
  