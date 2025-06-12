const input = document.getElementById("todo-input");
const btn = document.getElementById("todo-btn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
    const newtask = input.value;
    if (newtask.trim() == "") return;

    const li = document.createElement("li");
    li.textContent = newtask;
    list.appendChild(li);
    input.value = "";

    li.addEventListener('dblclick', () => {
        li.style.backgroundColor = "red";
    })

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete ❌";
    deletebtn.className = "delete-btn";
    li.appendChild(deletebtn);
    deletebtn.style.color = "red";
    deletebtn.addEventListener("click", () => {
        li.remove();
    })
})