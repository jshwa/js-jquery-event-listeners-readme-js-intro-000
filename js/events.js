//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').append(.tasty)
  })
}


$(document).ready(function(){

frameIt()
// call functions here

});
