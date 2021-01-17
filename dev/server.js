const express = require('express')
const app = express();
const port = process.env.PORT || 8000;
const handlebars =  require('express-handlebars')

app.set('view-engine','hbs')

app.get('/', (req, res) => {
  res.render('main', {layout: 'index'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});