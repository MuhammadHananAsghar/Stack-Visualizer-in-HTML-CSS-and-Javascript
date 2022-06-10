var stack = document.querySelector(".stack");
var push = document.getElementById("push");
var cubes = document.querySelectorAll(".cube");
var reset = document.getElementById("reset");
var pop = document.getElementById("pop");
var topElement = document.getElementById("top");

reset.onclick = () => {
  stack.innerHTML = "";
};

push.addEventListener("click", () => {
  if (stack.children.length < 10) {
    htmlData = stack.innerHTML;
    let cube = `<div class="cube" style="background-color: #FF4444;">${Math.floor(
      Math.random() * 101
    )}</div>`;
    cube += htmlData;
    stack.innerHTML = cube;
  } else {
    alert("Stack Overflow");
  }
});

pop.onclick = () => {
  if (stack.children.length > 0) {
    let nodesCollection = [];
    let nodes = stack.children;
    for (let i = 0; i < nodes.length; i++) {
      nodesCollection.push(nodes[i].outerHTML);
    }
    nodesCollection.splice(0, 1);
    let html = "";
    for (let k = 0; k < nodesCollection.length; k++) {
      if (nodesCollection[k]) {
        html += nodesCollection[k];
      }
    }
    stack.innerHTML = html;
  } else {
    alert("Stack Underflow");
  }
};

topElement.onclick = () => {
  if (stack.children.length <= 0) {
    alert("Stack is empty.");
  } else {
    let nodesCollection = [];
    let nodes = stack.children;
    for (let i = 0; i < nodes.length; i++) {
      nodesCollection.push(nodes[i].innerHTML);
    }
    let tempString = "Top element of the stack is "+nodesCollection[0]+".";
    alert(tempString);
  }
};
