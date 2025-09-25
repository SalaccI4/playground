const container = document.querySelector("#container")
const div = document.querySelector("div")

//Create p with red text
const one = document.createElement("p")
one.textContent = "Hey I'm red!!"
one.style.color = "red"
container.appendChild(one)

//Create h3 with blue text
const two = document.createElement("h3")
two.textContent = "I'm a blue h3!"
two.style.color = "blue"
container.appendChild(two)

//Create parent node div with h1 and p as child nodes
const three = document.createElement("div")
three.style.border = "2px solid black"
three.style.backgroundColor = "pink"

const four = document.createElement("h1")
four.textContent = "I'm in a div"
const five = document.createElement("p")
five.textContent = "ME TOO!"

three.appendChild(four)
three.appendChild(five)
container.appendChild(three)

//Testing DOM Events
const btn = document.querySelector("#btn");

btn.onclick = () => alert("Hello World");

btn.addEventListener("click", () => {
    alert("Hello World");
});

btn.addEventListener("click", function (e) {
    console.log(e.target);
});
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});