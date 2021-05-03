const text = document.getElementById("noteSpan");

function add() {
    let note = document.getElementById('Note').value;
    let title = document.getElementById('Title').value;
    let node = document.createElement("p");

    if (note == "" || title == "") {
        alert("Input must be filled!")
    } else {
        node.appendChild(document.createTextNode(title+ ": " + note));
        text.appendChild(node);
        document.getElementById("Note").value = "";
        document.getElementById("Title").value = "";
        localStorage.setItem(title, note);
    }
}

function remove() {
    text.innerHTML = "";
    localStorage.clear()
}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    // console.log(`${key}: ${localStorage.getItem(key)}`);

    let node = document.createElement("p");
    let title = `${key}`;
    let note = `${localStorage.getItem(key)}`;
    node.appendChild(document.createTextNode(title+ ": " + note));
    text.appendChild(node);
    
}