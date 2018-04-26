/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
// import '../style/index.scss';

window.onload = function(){
    
  let nouns = ['dog','car','clock'];
  let verbs = ['died', 'stopped', 'broke'];
  let pronouns = ['my','Our','Their'];
  
  function generateExcuse (A,B,C) {
      
      var rand1 = Math.floor(Math.random() * Math.floor(3));
      var rand2 = Math.floor(Math.random() * Math.floor(3));
      var rand3 = Math.floor(Math.random() * Math.floor(3));
      
      const sentence = A[rand1] + ' ' + B[rand2] + ' ' + C[rand3];
      
      return sentence; 
  }
  
var myVariable = generateExcuse(pronouns, nouns, verbs);
  
console.log(myVariable);
    
};
    
    
    // var pronouns = [
    //     'My', 'The', 'Their', 'Our'
    //     ];
        
    // var subjects = [
    // 'dog', 'power', 'car'
    // ];
    
    // var pronounsPosition = 0;
    
    // var theExcuse = pronouns[pronounsPosition] + ' ' + subjects[0];
    
    


    
    


