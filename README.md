# DaoSpace - Web Module

## Getting Started
This is the official repository of Team Shreshtha for SCL 2022 organised by World Konkani Centre.

## Technology Stack
The project implementation will be done using MERN (MongoDB Express React NodeJS) stack. 
#### Client side
  React - A JavaScript library for building user interfaces<br>
#### Server side
  Node.js - evented I/O for the backend<br>
  Express.js - Fast, unopinionated, minimalist web framework for Node.js<br>
  MongoDB - The application data platform for NoSQL databases<br>
  Mongoose - mongoose<br>

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `env` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `app.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

## Requirements
For development, you will need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

If the installation was successful, you should be able to run the following command.

    node --version
    v8.11.3

    npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    npm install npm -g
    
## DB: MONGO ATLAS
    
   Atlas allows online access to the MongoDB via your IP access. Log in to your atlas before you run your project
    
## Running the application

    git clone git@github.com:World-Konkani-Centre/SCL-2022-SHRESHTHA.git
    cd SCL-2022-SHRESHTHA
    
  Now, you need to install the packages both in client and server directory. 
  
    cd server
    npm i && start
    
    cd ..
   
    cd client
    npm i && start



Team Shreshtha

members:
Anirrudha Kamath
K Avinash Nayak
Bhagavi Nayak
Karthik Mahale
Srinidhi Bhat (Team Lead)
Sushma
V Sahana Kamath
