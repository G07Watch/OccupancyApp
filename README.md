Occupancy App

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