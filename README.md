<h1 align = "center">
<img width="60px" src ="https://avatars0.githubusercontent.com/u/9892522?s=400&v=4" /> <br/>
freeCodeCamp <br/>
Timestamp Microservice API Project <img  src="https://travis-ci.org/erdembircan/timestamp-microservice.svg?branch=master"/> </h1>

<blockquote>
      User stories:
      <ul>1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp
        or a natural language date (example: January 1, 2016)</ul>
      <ul>2) If it does, it returns both the Unix timestamp and the natural language form of that date.</ul>
      <ul>3) If it does not contain a date or Unix timestamp, it returns null for those properties.</ul>
</blockquote>

<h3>Usage:</h3>
 <code>https://limitless-gorge-38874.herokuapp.com/December%2015,%202015</code>
    <br>
<code>https://limitless-gorge-38874.herokuapp.com/1450137600</code>
<h3>Example output:</h3>
<samp>
          {
            "unix": 1450137600,
            "natural": "December 15, 2015"
          }
</samp>