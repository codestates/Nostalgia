require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
});

const { perfume_info,brand,user,favorite } = require('./models');

const controllers = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['https://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
  })
);
app.use(cookieParser());


/*app.get('/', async(req,res)=>{
  const data = await perfume_info.findOne({where:{'id':1} , include:[brand]});

  res.json(data);
})*/


app.get('/user/userinfo', controllers.userinfo);
app.post('/user/signup', controllers.signup);
app.post('/user/login', controllers.login);
app.post('/user/signout', controllers.signout);
app.post('/user/change-password',controllers.changepassword);
app.post('/user/change-username',controllers.changeusername);
app.post('/user/change-image', upload.single('image'), controllers.changeimage.uploadProfile);
app.post('/user/delete-account', controllers.deleteaccount);
app.get('/user/check-username',controllers.checkusername);

app.post('/favorite/add-favorite', controllers.addfavorite);
app.get('/favorite/get-favorite', controllers.getfavorite);

 app.get('/perfume/get-perfume-info', controllers.getperfumeinfo);
 app.get('/perfume/get-perfume-info-all', controllers.getperfumeinfoall);

app.post('/review/add-review', controllers.addreview);
app.get('/review/get-review-info', controllers.getreviewinfo);
app.post('/review/like-review', controllers.likereview);
app.get('/review/number-of-like', controllers.numberoflike);
app.get('/review/myreview', controllers.myreview);

app.get('/search/get-recent-search', controllers.getrecentsearch);
app.get('/brand/logo', controllers.logo);

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('https server runnning'));
} else {
  server = app.listen(HTTPS_PORT, () => console.log('http server runnning'));
}
module.exports = server;