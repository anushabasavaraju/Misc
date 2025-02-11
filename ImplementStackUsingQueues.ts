/* 
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
*/
//This code needs some tweaks in pop/top functions.

class MyStack {
    private q1: number[];
    private q2: number[];
    constructor() {
        this.q1 = [];
        this.q2 = [];    
    }

    push(x: number): void {
        this.q1.push(x);    
    }

    pop(): number {
        let length = this.q1.length;
        if(length === 1)
        return this.q1.pop();
        else
        {
            for(let i = 0; i < length-1; i++)
            {
                this.q2.push(this.q1.pop());
            }
        }let popped = this.q1.pop();
        let temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
        return popped;    
    }

    top(): number {
        // let l = this.q1.length;
        // if(l === 1)
        // return this.q1[0];
        // else
        // {
        //     for(let i = 0; i < l-1; i++)
        //     {
        //         this.q2.push(this.q1.pop());
        //     }
        // }
        // let temp = this.q1;
        // this.q1 = this.q2;
        // this.q2 = temp;
        // const top = this.q1[0];
    
        // this.q2.push(this.q1[0]);
        return this.q1[this.q1.length-1];    
    }

    empty(): boolean {
        return ((this.q1.length === 0)  && (this.q2.length === 0))
        
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
