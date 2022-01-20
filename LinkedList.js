class ListNode {
    constructor(data) { 
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this.head = head
    }

    size() {
        let node = this.head
        let count = 0

        while(node) {
            count++
            node = node.next
        }
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let last = this.head;

        if(last) {
            while(last.next)
            {
                last = last.next
            }
        }
        return last
    }

    getFirst() {
        return this.head
    }
}

// given the head of linked list reverse the nodes

var reverseList = function(headNode) {
    var currentNode = headNode
    var prev = null
    var next = null

    while(currentNode)
    {                               
        next = currentNode.next             
        currentNode.next = prev
        prev = currentNode 
        currentNode = next
    }

    return prev
}


let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

let linkedList = new LinkedList(node1)

var reversed = reverseList(node1)
console.log(reversed)

while(reversed != null)
{
    console.log(reversed.data)
    reversed = reversed.next
}

