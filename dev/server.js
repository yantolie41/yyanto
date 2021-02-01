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
  defaultLayout: 'index'
}))

app.use('*/images', express.static('dev/statics/images'));
app.use('*/pdf', express.static('dev/statics/pdf'));

//Routes
app.get('/', function (req, res) {
  res.render("main")
})
app.get('/about', function (req, res) {
  res.render(path.join(__dirname + '/views/partials/about'))
})
app.get('/about/education', function (req, res) {
  res.render(path.join(__dirname + '/views/partials/education'))
})
app.get('/about/work_experience', function (req, res) {
  res.render(path.join(__dirname + '/views/partials/workExperience'))
})
//

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});