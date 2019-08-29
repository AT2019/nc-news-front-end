NC-News-Front-End

A project used in the NorthCoders News front-end block review sprint, incorporating articles posted by logged in users, the isLoading pattern and error handling methods to catch any user errors. Users logged in to the site are able to post articles and comments,as well as being able to vote on them. The app was written in ReactJS and CSS.

Built with

- Create React App
- Axios
- Reach/Router
- Jest

Getting Started
The sprint should be forked into your own repository on Github,and then cloned onto your local machine. Once done, in the terminal, type:

git clone 'github repo url'
cd into the repository

Installing
First of all, you'll need to create a React app. To get set up within React:

npx create-react-app "your app name"

You'll also need to install the following packages to your local machine:

npm i @reach/router
npm i axios

Within your package.json file, you'll see the following scripts:

"start": "react-scripts start"

npm start runs the newly created app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

NC-News (Back-end)
A fully functioning API was created for the NorthCoders News project, including several end points and error handling to capture any user errors. You can find the back-end project here:

https://github.com/AT2019/nc-news-api

This API has also been deployed and hosted on heroku here:

https://nc-newsorama.herokuapp.com/api

Author
Anke Teale

License
This project is licensed under the MIT license
