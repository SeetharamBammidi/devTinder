s2 e3 homework:

-Create a repository(project folder in you system)
-Initilize the repository(npm init at the time package.son file created)
-node_module, package.json, package-lock.json
-Install express(npm i express)
-Create server
-Listen to port 7777
-Write request handlers for /hello, /test
-Install nodemon and update script in package.json(npm i nodemon and "start":"node src/app.js" and "dev":"nodemon src/app.js")
-What are dependences
-What is the use of "-g" while install npm
-Difference b/w caret(^) and tilde(~)

s2 e4 homework:

-Initilize git(go terminal in vs code  do git init)
-In your project root folder create file .gitignore  and add like node_module  then automaticall not showing changes in node module folder files.
-Create a remote repo on github.com
-Push all code to remote origin
-Play with routes and route extension ex: /hello , /hello/2
-Order of the routes matter a lot
-Install post man app and make workspace/collection > test API call
-Write logic to handle GET, POST, PATCH, DELETE API calls and test them on postman
-Explore routing and use of ?, + , (), * in the routes
-Use of regex in routes /a/, /.*fly$/
-Reading the query params in the routes
-Reading the dynamic routes


s2 e5

-Multiple Route handlers - play with the code
-next()
-next function and errors along with  res.send()
-app.use("/route",rH, [rH2,rH3, rH4, rH5]);
-What is middleware ? why do we need it?
-How express js basically handles requests behind the scenes
-Difference b/w app.use() vs app.all()
-Write a dummy auth middleware for admin
-Write a dummy auth middleware all user routes except  /user/login



s2 e6

-Create a free cluster on MangoDB official website (mango Atlas)
-Install mangoose library
-Connect your application to the database "Connection-url"/devTinder
-Call the connectionDB function and connect to database before starting application on 7777
-Create a userSchema and usermodel
-Create POST /signup API to add data to database
-Push some documents using API calls from postman
-Error Handling using try, catch