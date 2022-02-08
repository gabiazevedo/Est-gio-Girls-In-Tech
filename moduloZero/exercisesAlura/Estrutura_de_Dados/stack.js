// Pilha ou FILO (first-in, last-out) significa que o primeiro que entra é o último a sair.
// Exemplo do mundo real: Pilha de pratos.

const Stack = () => {
  const data = [];
  let top = -1;

  const push = (value) => {
    top++;
    data[top] = value;
  }

  const pop = () => {
    if (top < 0) {
      return 'Stack is empty';
    } else {
      const itemToReturn = data[top];
      data.splice(top, 1);
      top--;
      return itemToReturn;
    }
  }

  const print = () => {
    console.log(data, top);
  }

  return {
    push,
    pop,
    print
  }
}

const stack = Stack()

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.print()

