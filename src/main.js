/* eslint-disable no-console */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
 import { Age } from '../src/age';




$(document).ready(function(){
 let newAge;


  $("#age-form").submit(function(event) {
    event.preventDefault();
    newAge = new Age($("#input-age").val());
    newAge.mercuryAge();
    

    console.log(newAge);
    console.log(newAge.mercuryAge);


  });











})


