let button = document.getElementById("button");


button.addEventListener("click", welcome);

function welcome(){
    let name = document.getElementById("input").value.toUpperCase();
    if(name.length === 0){
        document.getElementById("hello").innerHTML = "Please enter your name";
        let removeButtons = document.getElementById("buttons").classList.add("d-none");
    }else{
        document.getElementById("hello").innerHTML = "Hello " + name + ", Choose your favourite color!";
        let showButtons = document.getElementById("buttons").classList.remove("d-none");
    }
}

//Enter Key
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("button").click();
    }
  });

//Switch background colors
document.getElementById("blue").addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
})
document.getElementById("orange").addEventListener("click", function() {
    document.body.style.backgroundColor = "orange";
})
document.getElementById("yellow").addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
})
document.getElementById("green").addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(10, 231, 10)";
})
document.getElementById("grey").addEventListener("click", function() {
    document.body.style.backgroundColor = "grey";
})
