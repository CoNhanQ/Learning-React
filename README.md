### Learning-React
### Name: Co Nhan

### I use to git repost to learn React

### First react project: Tic Tac Toe game

*** Description:
*** Player: 2
*** Move contain: 'X' , 'O'
*** Squares: 9 Squares

### Travel site project



### Learn Node.Js



### Learn NPM

*** npm init -y // install Package.json
*** npm install lodash // install lodash
*** npm install normalize.css // install normalize
*** npm install // install all dependencies in Package.json


### Learn Webpack

*** Create webpack.config.js // help webpack to located this file

const path = require('path');

module.exports =  {
   entry: './app/assets/scripts/App.js'   // tell webpack where to create bundle
    output: {
      filename: 'bundle.js',
      Path: path.result(__dirname, 'app')
    },
    watch: true // tell npm to actively watch for change
  }

*** Inside package.json
"script" : {
  "dev": "webpack",  // tell npm (npm install webpack) to look for webpack in local computer install of global.
}

*** In Command line: npm run dev // tell cmd to run dev.
