#ioet

Exercise Ioet

# Overview

I decided to realize a express project because always a solution in a web app is better I believe, also worked with object, arrays and sending the data instead of using console.

# Architecture

The architecture I used was N-layers dividing the routes and logic, with this approach we can make our application better.

# Approach, Methodology

I first take the txt file and line by line structure an object which helps me work with the data, then I made a function which iterates each Input with their respectives users finding when the schedule matchs.
To control the hours I write in a paper all the possible cases, I comment that part in the code when is equal, greater than, etc.

# Start a new aplication

To start a new application you need to write in your terminal:

- npm install
- npm start

The app is listening to port http://localhost:3000/users when you update the page you will see the result json, you can also do it in postman or changing res.send() for console.log()
