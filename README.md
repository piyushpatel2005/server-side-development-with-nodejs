# Course on Server Side Development using NodeJs

## Week 1: Getting familiar with NodeJs, NodeJS and Express Framework.

## Week 2: MongoDB and Mongoose for ODM

Install MongoDB by following the instructions on the official website for MongoDB.

You can run Mongo server using Mongo Daemon
type: ```mongod --dbpath=[path] --port=[port number]

In another terminal, you can test the application.


# Use of Loopback for quick deployment
Install loopback using the command ```npm install strongloop -g```

Now, to scaffold out an application just type the command ```slc loopback```
Answer the questions and you're done.

At a convenient location, type ```slc loopback``` to start scaffolding out your application.

Go to new directory you created while scaffolding your app using ```cd <NEW DIRECTORY>```
To create loopback model for anything type
```slc loopback:model```

Answer the questions and add new properties to the model.

You can run the server using ```node .```
and explore the api operations at
http://localhost:3000/explorer
