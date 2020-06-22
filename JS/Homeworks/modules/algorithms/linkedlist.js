//node არის linkedlist ის ელემენტი
class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //ამატებს Node-ის ობიექტს LInkedListში
    add(element) {
        let node = new Node(element);
        let current;
        //თუ linkedListის პირველი ელემენტი არ არსებობს, ვამატებთ მასში
        if (this.head == null)
            this.head = node;
        else {
            //იმ ყველა არსებული ელემენტი რაც არსებობს გადადის სათითაოდ მის შემდეგ ელემენტზე, და ამ ახალ ობიექტს ტენის ბოლო ელემენტად
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        // LinkedList-ის ზომას ზრდის ერთით
        this.size++;
    }

    insertAt(element, index) {
        //
        if (index > 0 && index > this.size)
            return false;
        else {
            let node = new Node(element);
            let curr, prev;

            curr = this.head;
            //პირველ ელემენტად ტენის ამ ობიექტს
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;
                //ყველა არსებული ელემენტი გადააქვს მომდევნო ელემენტის ადგილას
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                //ესენი არის ბოლოს შემოტანილი ელემენტები
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    //ვშლით ელემენტს გადმოცემული პარამეტრის მიხედვით
    removeFrom(index) {

        if (index > 0 && index > this.size)
            return -1;
        else {
            //
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;

            return curr.element;
        }
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;
        //ეძებს შეყვანილ ელმენტს  Linkedlist-ის ელემენტებში
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    //პოულობს რომელი ადგილი უკავია ამ კონკრეტულ ელემენტს
    indexOf(element) {
        let count = 0;
        let current = this.head;

        while (current != null) {
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    size_of_list() {
        console.log(this.size);
    }
    //გამოაქვს LinkedListის ობიქტის ელემენტები
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }


}

let ll = new LinkedList();
console.log(ll.isEmpty());
ll.add(10);
ll.printList();
console.log(ll.size_of_list());
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.printList();

console.log(ll.removeElement(50));

ll.printList();

console.log("Index of 40 is: " + ll.indexOf(40));

ll.insertAt(60, 2);

ll.printList();

ll.removeFrom(3);

ll.printList(); 