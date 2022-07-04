let newtext = document.getElementById('newlistitem');
var ids = 0;

function additem() {
    let newDiv = document.createElement("div");
    let newTextDiv = document.createElement("div");
    let newButtonDelete = document.createElement("button");
    newDiv.classList.add("box");
    newTextDiv.classList.add("text");
    newButtonDelete.classList.add("delete");
    newDiv.setAttribute('id', ids);
    newButtonDelete.setAttribute('id', ids + "A");
    newTextDiv.setAttribute('id', ids + "B");
    //newButtonDelete.setAttribute('onclick', "deleteitem()")
    document.body.appendChild(newDiv);
    document.getElementById(ids).appendChild(newTextDiv);
    document.getElementById(ids + "B").innerText = newtext.value;
    document.getElementById(ids).appendChild(newButtonDelete);
    document.getElementById(ids + "A").innerText = "X";

    document.getElementById('newlistitem').value = "";
    newButtonDelete.addEventListener('click', function () {
        newDiv.remove(this);
    })

    ids += 1;
}

