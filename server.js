const firebase = require("firebase");



const firebaseConfig = {
    apiKey: "AIzaSyAkryPummY3a_Qi-YR4dV-VGUV8EZvJjFw",
    authDomain: "quiz-8558b.firebaseapp.com",
    databaseURL: "https://quiz-8558b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quiz-8558b",
    storageBucket: "quiz-8558b.appspot.com",
    messagingSenderId: "803148155342",
    appId: "1:803148155342:web:7a14a22b97dd588f8c839f",
    measurementId: "G-0GW1MMVKSR"
  };
  
  firebase.initializeApp(firebaseConfig)
  const db = firebase.database();
  

console.log("Server is running")
const express = require("express")
const app = express();
app.listen(process.env.PORT || 3000)
app.use(express.static(__dirname + '/public'));
app.use(express.json({limit: '1mb'}));
var score;
app.post('/api', (request, response) => {
 console.log(request.body.person)
 score = (request.body.userScore)
 
 db.ref(request.body.person).set(score)
 response.end();
});

app.post('/ch',(request,response) => {
  var ref = (request.body.person)
  var firebaseref = firebase.database().ref(ref)
  firebaseref.once("value", function(snapshot){
    var data = snapshot.val();
    console.log(data)
   if (data == null){
    console.log("kk")
    response.json({
      repet: "no"
    })
   }
   if (data != null){
    response.json({
      repet: "yes"
    });
   }
  })
})

