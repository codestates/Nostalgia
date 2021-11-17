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


const controllers = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
  })
);
app.use(cookieParser());


//app.use('/', express.static('brand_logo'));

/*app.get('/',(req,res)=>{
  fs.readFile('./uploads/4d28e90715288eb005b151736e08426b',function(err,data){
    res.writeHead(200,{'Content-Type': 'image/png'});
    res.write(data);
    res.end();
  })
})*/


app.get('/user/userinfo', controllers.userinfo);
app.post('/user/signup', controllers.signup);
app.post('/user/login', controllers.login);
app.post('/user/signout', controllers.signout);
app.post('/user/change-password',controllers.changepassword);
app.post('/user/change-username',controllers.changeusername);
app.post('/user/change-image', upload.single('image'), controllers.changeimage.uploadProfile);
app.post('/user/delete-account', controllers.deleteaccount);
app.post('/user/check-username',controllers.checkusername);

app.post('/favorite/add-favorite', controllers.addfavorite);
app.get('/favorite/get-favorite/:user_id', controllers.getfavorite);

 app.post('/perfume/get-perfume-info', controllers.getperfumeinfo);
 app.get('/perfume/get-perfume-info-all', controllers.getperfumeinfoall);

app.post('/review/add-review', controllers.addreview);
app.post('/review/get-review-info', controllers.getreviewinfo);
app.post('/review/like-review', controllers.likereview);
app.post('/review/number-of-like', controllers.numberoflike);
app.post('/review/myreview', controllers.myreview);

app.post('/search/get-recent-search', controllers.getrecentsearch);
app.get('/brand/logo',controllers.logo);

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