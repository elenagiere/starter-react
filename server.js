const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const spark = require('ciscospark/env');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    console.log('called /express_backend');

    spark.rooms.list({
      max: 10
    })
      .then(function(rooms) {
      const room = rooms.items.filter(function (room) {
        return room.title === 'My First Room!';
      })[0];

      return spark.messages.create({
        text: 'Hello World!',
        roomId: room.id
      });
    })
    // Make sure to log errors in case something goes wrong.
    .catch(function(reason) {
      console.error(reason);
      process.exit(1);
    });

    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


    // function callback(name, detail) {
    //   console.log('callback');
    //   console.log(name);
    //   console.log(detail);
    //   if (name === 'messages:created') {
    //     const createdTimestamp = detail.data.created;
    //     console.log(createdTimestamp);
    //     // Perform an action if a new message has been created
    //   }
    // }

