/* 
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
*/

class MyQueue {
    private inputStack: number[];
    private outputStack: number[];
    constructor() { 
        this.inputStack = [];
        this.outputStack = [];
    }

    push(x: number): void {
        this.inputStack.push(x);
    }

    pop(): number {
        this.peek();
        return this.outputStack.pop();
        
    }

    peek(): number {
        if(this.outputStack.length === 0)
        {
            while(this.inputStack.length !== 0)
            {
                this.outputStack.push(this.inputStack.pop());
            }
        }
        return this.outputStack[this.outputStack.length-1];
        
    }

    empty(): boolean {
        return ((this.inputStack.length === 0) && (this.outputStack.length === 0));
        
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
