const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/public'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.use('/', router);

app.listen(port, () => {
  console.log(`the app listening at http://localhost:${port}`)
})