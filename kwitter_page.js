//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAR5INL1VAUxr87Ve2Cv9xxiRC9xaGFYSo",
      authDomain: "kwitter-22f56.firebaseapp.com",
      databaseURL: "https://kwitter-22f56-default-rtdb.firebaseio.com",
      projectId: "kwitter-22f56",
      storageBucket: "kwitter-22f56.appspot.com",
      messagingSenderId: "577191000255",
      appId: "1:577191000255:web:e42350d030b6c335f06e0a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send(){
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name: user_name , 
             message: msg , 
             like: 0 
       });
    document.getElementById("msg").value = " ";   
 }
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
