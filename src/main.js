/* eslint-disable no-console */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Age } from '../src/age';




function displayData(newAge){

  $("#age-display").text(`You are ${newAge.age} years old. And you are expected to live until ${newAge.lifeExpect}?`);
  $("#mercury-age-display").text(` In Mercury, You would ${newAge.mercuryOld} years old. And you should be expected to live until ${newAge.mercuryExpect} years old.`);
  $("#venus-age-display").text(`In Venus, You would ${newAge.venusOld} years old. And you are expected to live until ${newAge.venusExpect} years old.`);
  $("#mars-age-display").text(`In Mars, you would ${newAge.marsOld} years old, And you are expected to live until ${newAge.marsExpect} years old.`);
  $("#jupiter-age-display").text(`In Juputer, you would ${newAge.juputerOld} years old, And you are expected to live until ${newAge.juputerExpect} years old.`);



}



$(document).ready(function(){
  let newAge;


  $("#age-form").submit(function(event) {
    event.preventDefault();
    newAge = new Age($("#input-age").val(), $("#input-expectancy").val());
    newAge.calculateExpect();
    $("#age-form").hide();
    

    console.log(newAge.age);
    displayData(newAge);
    


  });




  



});


