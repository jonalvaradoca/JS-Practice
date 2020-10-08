// testing git pushes

var stack = [];
var top = 0;

function push(elem) {
    stack[top] = elem;
    top += 1;
}

function pop() {
    top -= 1;
    return stack[top + 1];
}

function empty() {
    return top == 0;
}

