class LinkedList {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    add(value) {
        if(this.head == null) {
            this.head = {'value': value, 'next': null};
            this.tail = this.head;
        }
        else {
            let tailNext = {'value': value, 'next': null};
            this.tail.next = tailNext;
            this.tail = tailNext;
        }
    }

    print() {
        let current = this.head;
        while(current != null) {
            console.log(current);
            current = current.next;
        }
    }

    search(val) {
        let current = this.head;
        let result;
        while(current != null) {
            if(current.value === val) {
                result = current;
            }
            current = current.next;
        }
        return result; 
    }

    remove(val) {
        let current = this.head;
        let result;
        let previous;
        if(val === this.head.value) {
            this.head = this.head.next;
            return;
        }
        while(current != null) {
            if(current.value === val) {
                result = current;
                break;
            }
            previous = current;
            current = current.next;
        }
        previous.next = result.next;
    }
}

let myLinkedList = new LinkedList;
myLinkedList.add("Hello");
myLinkedList.add("my");
myLinkedList.add("name");
myLinkedList.add("is");
myLinkedList.add("Sun");

myLinkedList.print();

myLinkedList.search("my");
myLinkedList.search("5");

myLinkedList.remove("is");
myLinkedList.print();

