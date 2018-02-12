# Welcome to Sygnia's Frontend Exercise!

For the purpose of this exercise, we're going to use Flask as the backend, and ReactJS+Redux as the frontend frameworks.

During an investigation, we'll often want to create an attack timeline,<br/>
in order to better track the attacker's behaviour.

Your main task is to create a nice table UI, which will let us view our investigation findings.

# Running the application

For the server, simply run:
```
cd <DEV_TASK_DIRECTORY>
python3 setup.py develop
cd <MOCK_SERVER_DIRECTORY>
python3 mockserver/app.py
```

For the frontend part, run:
```
cd <MOCK_SERVER_DIRECTORY>/client
npm install
npm start
``` 

Then, while both are running, open your browser and direct it to:
<http://localhost:3000>

At first, you'll just get the Hello page.<br/>
In the end, it'll be replaced with a glorious table!<br/>
You can add all your code under the client directory.

# API

The server supports a single POST request:

* <http://localhost:3001/api/events> - Retrieves a list of all the timeline events.<br/>
Expects a JSON with the `query` parameter, for filtering (will retrieve only events containing the query's content).<br/>
If no `query` was given, or if `query` is empty, will retrieve the complete list of events.

# Parts

## Part 1

Create a nice table component which will show the timeline events.<br/>
No need for fancy CSS for now...

## Part 2

Add sorting support for columns (single column is ok).

## Part 3

Add a general filter text box - all events will be filtered according to it.  
Its events should be a part of the general state.

## Part 4

Add some CSS to the table - striped rows & hovering support.

# Notes

* ReactJS and Redux are already set-up for you, with a basic app.

* Focus more on functionality and less on UX.<br/>
Using a UI library is more than welcome (but the table component should be written by you)!

# Good luck!

Feel free to ask us any question you have during this exercise!<br/>
We know some of the features may be unclear or ambiguous, and that's ok!<br/>

Once you're done, please send us a zipped version [here](mailto:ofir.b@sygnia.co).
