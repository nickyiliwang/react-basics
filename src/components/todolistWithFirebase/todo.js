import React, { Component } from 'react'
import {firebaseConfig} from '../firebase/keys'

export default class todo extends Component {
    render() {
        return (
            <div>
                <main>
  <div class="container">
    
    <div class="page-header">
      <h1>jQuery To-Do App</h1>
    </div>

    <form>
      <input class="form-control" type="text" placeholder="Add an item...">
    </form>

    <ul>
      <!-- To do items get added dynamically here -->
    </ul>
  </div>
</main>

            </div>
        )
    }
}





  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDpR7Aq_tldFQ-mj-W3Lhk6J6UTFChiBFo",
    authDomain: "todoapp-f0819.firebaseapp.com",
    databaseURL: "https://todoapp-f0819.firebaseio.com",
    projectId: "todoapp-f0819",
    storageBucket: "todoapp-f0819.appspot.com",
    messagingSenderId: "1043639975023",
    appId: "1:1043639975023:web:d011c7708db2d716c8219a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){

const dbRef  = firebase.database().ref();

  $('form').on('submit', function(e) {
      e.preventDefault();

      if ($('input').val() !== '') {
          // store what the user typed in a variable
          const toDoItem = $('input').val();

          $('ul').append("<li> <span class='fa fa-square-o'></span> " + toDoItem + "</li>");
          
        // create an object that contains information about our todo items
        const toDOItemInfo = {
          description: toDoItem,
          complete: false
        }
        // push that new object into my database 
        dbRef.push(toDOItemInfo)

          // clear input
          $('input').val('');
      };
  });

  $('ul').on('click', 'li', function() {

  });

//   // my version
// dbRef.on('value', (data) => {
//   const toDoData = data.val() 
//   $('ul').empty()

//   for(let key in toDoData) {
//     $('ul').append("<li> <span class='fa fa-square-o'></span> " + toDoData[key].description + "</li>");
//   }
// })

dbRef.on('value', (data) => {
  const toDoData = data.val() 

const toDoArray = [];

  for(let key in toDoData) {
    toDoArray.push(`<li data-key=${key}> <span class='fa fa-square-o'></span> ${ toDoData[key].description} </li>`);
  }

  // .html() method loops through the array, what the fuck
  // $('ul').html(toDoArray)
  $('ul').html('')
  toDoArray.forEach(item => {
    $('ul').append(item)
  })
})

$('ul').on('click', 'li', function() {
  const checkBox = $(this).find('.fa');
      checkBox.toggleClass("fa-square-o fa-check-square-o");
      $(this).toggleClass("text-muted")
  const selectedKey = $(this).data('key');
  const toDoItemRef = firebase.database().ref(`/${selectedKey}`);

  // getting snapshot of the appropriate node without listening for changes
  toDoItemRef.once('value', (data) => {

// grab the data
const targeted = data.val();

// update the complete status of the correct to-do
toDoItemRef.update({
  complete: !targeted.complete
    })
  })
});




});