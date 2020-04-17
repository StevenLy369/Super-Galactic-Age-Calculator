/* eslint-disable no-console */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Age } from '../src/age';




function displayData(newAge){

  $("#age-display").text(`You are ${newAge.age} years old. And you are expected to live until ${newAge.lifeExpect}?`);
  $("#mercury-age-display").text(` In Mercury, You are ${newAge.mercuryOld} years old. And you should be expected to live until ${newAge.mercuryExpect} years old.`);





}



$(document).ready(function(){
  let newAge;


  $("#age-form").submit(function(event) {
    event.preventDefault();
    newAge = new Age($("#input-age").val(), $("#input-expectancy").val());
    newAge.calculateExpect();
    

    console.log(newAge.age);
    displayData(newAge);
    


  });




  



});


