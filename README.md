Occupancy App


Background and Overview

  The primary purpose of this application is meant to be part of a multi-pronged approach to prolonged social distancing efforts to slow the spread of the coronavirus.  The Occupancy App's primary goal is to allow a business or organization to communicate in real-time the number of people in a given facility.  A secondary function intending to be implemented is the assignment of time slots for visitors/faculty and the ability to reserve slots using a time span determined by the coordinators of the facility.






Construction Notes:

  Yelp API

    The Yelp API apparently does not support CORS.  It does support JSONP.
  
    JSONP support status:
      Node-fetch: ??
      axios: None
      jquery-ajax: yes
  
  The following is a method to utilize JSONP as provided by
   https://github.com/axios/axios/blob/master/COOKBOOK.md#jsonp

      <!-- JSONP
    $ npm install jsonp --save
    const jsonp = require('jsonp');

    jsonp('http://www.example.com/foo', null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(data);
      }
    }); -->


Considerations: 
  with the Yelp API having CORS issues, proceeding without the Yelp API might be better in the interim.

  Is not using React reasonable or practical for the purposes of this application?

Progress Note:
  Due to difficulties integrating the Yelp API, that feature is being temporarily shelved.