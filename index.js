const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/');
const cfonts = require('cfonts');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Generate and display ASCII art text
cfonts.say('Social Network', {
  font: 'block',
  align: 'center',
  colors: ['cyanBright', 'magentaBright', 'yellowBright', 'greenBright', 'blueBright'], // Bright colors
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0',
  gradient: true, // Apply gradient
  independentGradient: false,
  transitionGradient: false,
  env: 'node'
});



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
