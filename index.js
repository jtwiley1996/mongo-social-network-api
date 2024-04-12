const express = require('express');
const db = require('./config/connection');
const apiRoutes = require('./routes/apis');
const cfonts = require('cfonts');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiRoutes);

// Generate and display ASCII art text
cfonts.say('Social Network API', {
  font: 'block',             
  align: 'center',             
  colors: ['white'],        
  background: 'transparent',  
  letterSpacing: 1,          
  lineHeight: 1,             
  space: true,               
  maxLength: '0',            
  gradient: false,           
  independentGradient: false, 
  transitionGradient: false,  
  env: 'node'                 
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
