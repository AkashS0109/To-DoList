const inputbox=document.getElementById("input-box");
const listcontainer =document.getElementById("list-con");
 function addTask(){
    if(inputbox.value==''){
        alert("You must write something!!");
    }
    else{
        let  li=document.createElement("li");
        li.style.fontSize="20px";
        li.innerHTML=inputbox.value;

        listcontainer.appendChild(li);
        var img = document.createElement("img");
     img.setAttribute("src", "fgh.png");
    img.setAttribute("width", "27");
        img.setAttribute("height", "27");
        img.setAttribute("alt", "The Pulpit Rock");
        li.appendChild(img)
    }
        
        
 }




 listcontainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
    }
 } ,false);