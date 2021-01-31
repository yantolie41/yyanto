const express = require('express')
const app = express();
const port = process.env.PORT || 8000;
const handlebars =  require('express-handlebars')
const path = require('path')



app.set('view engine','hbs')
app.set('views', path.join(__dirname, "views"))


app.engine('hbs', handlebars({
  extname: 'hbs',
  layoutsDir:  __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  defaultLayout: 'index'
}))

app.use('*/images', express.static('dev/statics/images'));


app.get('/', (req, res) => {

  //res.render('main')
  res.send("Hi")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});