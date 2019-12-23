var button = document.getElementById('btn').addEventListener('click', newItem);


// var remove = document.getElementById('button').addEventListener('click', removeItem);

function newItem() {
    var item = document.getElementById("input").value;
    if (item.length === 0) {
        alert("Enter Valid Items");
    }
    else {
        var ul = document.getElementById("add-item");
        var li = document.createElement("li");

        var removeButton = document.createElement("button");
        removeButton.innerText = "\u2716";
        removeButton.className = "remove";
        removeButton.setAttribute("id", "delete");

        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "checkbox";

        
        li.appendChild(checkBox);
        li.appendChild(document.createTextNode(item));
        li.appendChild(removeButton);
        
        ul.appendChild(li);
        document.getElementById("input").value = "";
    }
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 13) {
        newItem();
    }
};

// console.log(document.getElementsByTagName("li").length);
// var remove = document.getElementById('delete');
// console.log(remove);
// remove.addEventListener('click', deleteTask);


// var print = document.getElementsByClassName("remove");
// var check = document.getElementsByClassName("checkbox");
// buttonHandler(print, check);
// console.log(print);


function deleteTask() {
    
    console.log("Delete Task...");

    var listItem = this.parentNode;
    console.log(listItem);
    var ul = listItem.parentNode;
    console.log(ul);
    ul.removeChild(listItem);

}
function buttonHandler(item, checkboxHandler) {

    var deleteButton = item.querySelector("button.remove");
    deleteButton.onclick = deleteTask;

    var checkBox = list.querySelector("input[type=checkbox]");
    checkBox.onchange = checkboxHandler;
}

for(let i=0; i<document.getElementsByTagName("li").length;i++)
{
    console.log(i);
    var remove = document.getElementById('delete').addEventListener('click', deleteTask);
}

var ul = document.getElementById("add-item");
var liNodes = [];

for (var i = 0; i < ul.childNodes.length; i++) {
	if (ul.childNodes[i].nodeName == "LI") {
		liNodes.push(ul.childNodes[i]);
    }
    console.log(liNodes);
}