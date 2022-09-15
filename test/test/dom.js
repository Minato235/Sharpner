var form=document.getElementById("addForm");
var itemList=document.getElementById("items");
//submit
form.addEventListener("submit",addToList);
//remove
itemList.addEventListener("click",removeItem);
//function

function addToList(e){
e.preventDefault();
//get input value
var newItem=document.getElementById("item").value;
var li=document.createElement("li");
li.className="list-group-item";
li.appendChild(document.createTextNode(newItem));
var deletebtn=document.createElement("button");
deletebtn.className="btn btn-danger btn-sm float-right delete";
deletebtn.appendChild(document.createTextNode("X"));
li.appendChild(deletebtn);
itemList.appendChild(li);
}

function removeItem(e){
if(e.target.classList.contains("delete")){
if(confirm("Are You Sure?")){
    var li=e.target.parentElement;
    itemList.removeChild(li);
}
}
}