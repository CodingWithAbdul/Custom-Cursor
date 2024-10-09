var body = document.querySelector("body")
var corsur = document.querySelector("#corsur");


body.addEventListener("mousemove",function(details){

        corsur.style.left = details.clientX-50 + "px";
        corsur.style.top = details.clientY-50 + "px";

})
