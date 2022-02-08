// Fila ou FIFO (first-in, first-out) significa que o primeiro que entra é o primeiro a sair.
// Exemplo do mundo real: Fila do banco.

const Queue = () => {
  const data = [];

  const add = (value) => {
    data.push(value);
  };

  const remove = () => {
    if (data.length === 0) {
      return 'Empty queue';
    }
    const value = data[data.length - 1];
    data.splice(data.length - 1, 1);
    return value;
  };

  const print = () => console.log(data);

  return {
    add,
    remove,
    print
  }
}

const queue = Queue();

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);

queue.print();
console.log(queue.remove());
queue.print();
console.log(queue.remove());
queue.print();
console.log(queue.remove());
queue.print();
console.log(queue.remove());
queue.print();
console.log(queue.remove());
queue.print();
console.log(queue.remove());
queue.print();