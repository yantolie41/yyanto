const express = require('express')
const app = express();
const port = process.env.PORT || 8000;
const handlebars =  require('express-handlebars')
const path = require('path')

app.set('view engine','hbs')
app.set('views', path.join(__dirname, "views"))

app.engine('hbs', handlebars({
  layoutsDir:  __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'main'
}))

app.use(express.static('public'))

app.get('/', (req, res) => {

  res.render('main', {layout: 'index'})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});