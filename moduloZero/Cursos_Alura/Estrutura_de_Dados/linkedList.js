const LinkedList = () => {

  let head = null;
  let length = 0;

  const Node = (value) => {
    return {
      value,
      next: null
    }
  }

  // O(n)
  const add = (value) => {
    if (!head) {
      head = Node(value);
      length++;
      return head;
    }
    let node = head;
    while (node.next) {
      node = node.next
    }
    node.next = Node(value);
    length++;
    return node.next;
  }

  return {
    length: () => length,
    add: (value) => add(value),
    print: () => console.log(head)
  }
}

const list = LinkedList();
console.log(list.length());
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list.length());
list.print();