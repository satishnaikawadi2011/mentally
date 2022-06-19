

<p align="center">
  <a href="https://sn-mentally.vercel.app/" target="_blank">
    <img 
      src="https://res.cloudinary.com/dg2zkumuc/image/upload/v1655645464/mentally/intro-removebg-preview_vdtmxv.png"
      alt="Mentally"
      title="Mentally"
      width="500"
    />
    <br/>
  </a>
</p>

 <p align="center">
A small step toward helping people to get aware of mental health</b> .
    <br />
    <br />
    <a href="https://sn-mentally.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/satishnaikawadi2011/mentally/issues">Report Bug</a>
    ·
    <a href="https://github.com/satishnaikawadi2011/mentally/issues">Request Feature</a>
  </p>

<p align="center">
  <a href="https://sn-mentally.vercel.app/" target="_blank">
<img src="https://res.cloudinary.com/dg2zkumuc/image/upload/v1655645878/mentally/home_awmasr.png" title="Compilateur" alt="Compilateur"/>
</a>
</p>

## Table of Contents
- [Project Breakdown](#project-breakdown)
- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Features](#features)
  - [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contact](#maintainer)
- [Support](#support)
- [License](#license)
- [Deployment](#deployment)

## Project Breakdown
### 🗂️`client` - Holds the client application
- #### `src`
    - #### `animations` - This folder holds components and data related to animations used in the app 
    - #### `api` - This folder holds API configuration and endpoints for communicating to server 
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `constants` - This folder holds constant variables used throughout the client application
    - #### `hooks` - This folder holds the custom react hooks used in the projects
    - #### `pages` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `routes` - This folder holds the different pathnames and routing related code
    - #### `styles` - This folder holds styling related files.
    - #### `utils` - This folder holds some of the custom utility functions used
    - #### `App.tsx` - This is what renders all of our browser routes and different pages
    - #### `main.tsx` - This is what renders the react app by rendering App.tsx, should not change
- #### `index.html` - Single HTML page of our application to render different components
- #### `package.json` - Defines npm behaviors and packages for the client
- #### `tsconfig.json` - Specifies the root files and the compiler options required to compile the project.

### 🗂️`data` - This folder holds dataset used to train and test the machine learning model

### 🗂️`notebooks` - This folder holds python notebooks containing code used for exploratory data analysis and training machine learning models

### 🗂 `server`
- #### `data` - This folder holds the file related data used in server such as JSON files 
- #### `models` - This folder holds machine learning models trained with sklearn
- #### `app.py` - This file is the entry file of application and holds flask server setup and API endpoints
- #### `requirements.txt` - This file holds the list of dependencies used in this server code

### 🙈`.gitignore` - Tells git which files to ignore

### 📝`README.md` - This file!

## About The Project
As with our overall health, mental health influences the way that you function from day to day. This is why it is so important to care about mental health. If you do not take care of your mental health, you could find it challenging to work, build healthy relationships, and even leave your home. According to World Health Organization (WHO), there has been a 13 percent rise in mental health conditions and substance use disorders worldwide in the last decade. Based on the estimates of the WHO, approximately 7.5% of the Indian population is suffering from any kind of mental illness. Mentally is designed to help in spreading Mental health awareness. It has the feature of recommending treatment to a person by getting info about their daily routine and work life. It is a small step toward helping people to get aware of mental health and providing them resources in doing so.

So it predicts whether the user needs a mental health treatment or not by getting some basic info regarding their daily routine and work life. 


### Built With

- [React](https://reactjs.org/)
- [Python](https://www.python.org/)
- [Anaconda](https://www.anaconda.com/)

### Features

- REST API created from scratch with Python and Flask
- Dark and light color modes
- Mental Health Treatment recommendation system
- Fast and robust Client application created with React JS
- Use of plain CSS with CSS modules for styling react components
- Well-structured and Responsive UI along with animations and colors which give users positive energy 

### Screenshots

##### 1. Switch between color modes
<p align="center">
<img src="https://res.cloudinary.com/dg2zkumuc/image/upload/v1655647562/mentally/light-mode_zq87u1.png" title="Mentally" alt="Mentally"/>
</p>

##### 2. About Us Page
<p align="center">
<img src="https://res.cloudinary.com/dg2zkumuc/image/upload/v1655647562/mentally/about_qbwqpt.png" title="Mentally" alt="Mentally"/>
</p>

##### 3. Multi Page form to get user input with beutiful input fields
<p align="center">
<img src="https://res.cloudinary.com/dg2zkumuc/image/upload/v1655647561/mentally/form_rcaheg.png" title="Mentally" alt="Mentally"/>
</p>

##### 4. Result Page after submitting the form 
<p align="center">
<img src="https://res.cloudinary.com/dg2zkumuc/image/upload/v1655647561/mentally/result_sgqb0y.png" title="Mentally" alt="Mentally"/>
</p>

##### 5. Not found page for unknwon routes
<p align="center">
<img src="https://res.cloudinary.com/dg2zkumuc/image/upload/v1655647561/mentally/404_othozf.png" title="Mentally" alt="Mentally"/>
</p>

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- [React](https://reactjs.org/)
- [Python](https://www.python.org/)
- [Anaconda](https://www.anaconda.com/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/satishnaikawadi2011/mentally
```

2. Install Python packages for Server

```sh
cd server
pip install -r requirements.txt
```

3. Install NPM packages for Client

```sh
cd client
npm install
```

## Usage

The primary goal of this project is to predict whether the user needs a mental health treatment or not by getting some basic info regarding their daily routine and work life. 

_For more examples, please refer to the [Working Demo](https://sn-mentally.vercel.app/)_

## Roadmap

See the [open issues](https://github.com/satishnaikawadi2011/mentally/issues) for a list of proposed features (and known issues).

## Maintainer
Important decisions regarding the project are taken by the following maintainer.

| Satish        |
| :-------------: |
| <img  height="100" width="100" src="https://res.cloudinary.com/dyfm31f1n/image/upload/v1650221859/github-profile/me-github_yumapj.jpg">      |
| [@satishnaikawadi2011](https://github.com/satishnaikawadi2011)      |
## Support

<a href="https://www.buymeacoffee.com/satishnaikawadi" target="_blank">
  <img src="https://res.cloudinary.com/dyfm31f1n/image/upload/v1649760399/repopup/bmc-button_bridqp.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

## License

**Mentally** is licensed under the [MIT License](https://github.com/satishnaikawadi2011/mentally/blob/main/LICENSE).

## Deployment
<a href="https://sn-mentally.vercel.app/"><img src="https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge"/></a>