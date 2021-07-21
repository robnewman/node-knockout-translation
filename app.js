var express = require('express'),
  app = express();


// Tell express to serve static files from the special
// node variable __dirname which contains the current
// folder
app.use(express.static(__dirname));

// Start listening on port 3000
app.listen(3000);

app.get('/api/todos', function(req, res) {
    //...
    res.status(200).json([
        { name: 'Item 1 from server', complete: false },
        { name: 'Item 2 from server', complete: false },
        { name: 'Completed Item from server', complete: true }
      ]);
    res.end();
});