
// Your web app's Firebase configuration
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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
        function addRoom(){
              room_name = document.getElementById("room_name").value;
             firebase.database().ref ("/").child(room_name).update({
                   purpose:"adding room name" 
             });
             localStorage.setItem("room_name" , room_name);
             window.locaion = "kwitter_page.html";

        }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names + " onclick='Redirecttoroomname(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row ; 

      //End code
      });});}
getData();

function Redirecttoroomname(name){
console.log(name);
localStorage.setItem ("room_name" , name);
window.location = "kwitter_page.html"; 

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }