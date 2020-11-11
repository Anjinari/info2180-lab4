window.onload = function(){

  document.getElementById("button").onclick = function(){
    show_result(document.getElementById("searchbar").value)
  }
}

function myFunction() {
    var request = new XMLHttpRequest();
   
    request.onreadystatechange = function() {
        if (request.readyState === request.DONE){
            var ans = request.response;
            alert(response);
            }else{
            alert("Error")
        }   
    };   
    
    request.open("GET", 'superheroes.php', true);
    request.send();      
}
