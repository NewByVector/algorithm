//用链表实现一个栈
class Node {
    constructor (item, next) {
        this.item = item;
        this.next = next;
    } 
}
class Stack {
    constructor () {
        this.first = null;
        this.N = 0;
    }
    isEmpty () {
        return this.first === null;
    }
    size () {
        return this.N;
    }
    push (item) {
        var oldfirst = this.first;
        this.first = new Node(item, oldfirst);
        this.N++;
    }
    pop () {
        if (this.first !== null) {
            var item = this.first.item;
            this.first = this.first.next;
            this.N--;
            return item;
        }
    }
}

//测试
var s = new Stack();
s.size();  //0
s.isEmpty();  //true
s.push('one');
s.push('two');
s.push('three');
s.size();  //3
s.isEmpty();  //false
s.pop();  //three
s.pop();  //two