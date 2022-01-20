class Stack {
    index = -1;
    data = [];

    push(data) {
        this.data.push(data)
        this.index++
    }

    pop() {
        if(this.index >= 0)
        {
            let item = this.data[this.index]

            this.data.splice(this.index, 1);
            this.index--
            return item
        }
        else 
        {
            return undefined
        }
    }

    peek() {
       return this.data[this.index]
    }

    isEmpty() {
        return this.data[0] == null? true : false
    }
}