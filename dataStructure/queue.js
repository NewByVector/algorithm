//用链表实现一个队列
class Node {
    constructor(item, next) {
        this.item = item;
        this.next = next;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.N = 0;
    }
    isEmpty() {
        return this.first === null;
    }
    size() {
        return this.N;
    }
    enqueue(item) {
        var oldlast = this.last;
        this.last = new Node(item, null);
        if (this.isEmpty()) {
            this.first = this.last;
        } else {
            oldlast.next = this.last;
        }
        this.N++;
    }
    dequeue() {
        if (this.first !== null) {
            var item = this.first.item;
            this.first = this.first.next;
            if (this.isEmpty()) {
                this.last = null;
            }
            this.N--;
            return item;
        }
    }
}

//测试
var q = new Queue();
q.isEmpty();  //true
q.size();  //0
q.enqueue('one');
q.enqueue('two');
q.enqueue('three');
q.isEmpty();  //false
q.size();  //3
q.dequeue();  //one
q.dequeue();  //two
q.dequeue();  //three
q.isEmpty();   //true
q.size();  //0