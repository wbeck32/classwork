class PersonNode {
    constructor(person) {
        this.value = person.name;
        this.person = person;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    add(node) {
        if(node.value === this.value) throw new Error();
        
        if(node.value < this.value) {
            if(!this.left) {
                this.left = node;
                node.parent = this;
            }
            else this.left.add(node);
        }
        else {
            if(!this.right) {
                this.right = node;
                node.parent = this;
            }
            else this.right.add(nod);
        }
    }

    find(name) {
        if(name === this.value) return this;

        if(name < this.value) {
            return this.left ? this.left.find(name) : null;
        }

        return this.right ? this.right.find(name) : null;
    }

    remove(name) {
        const found = this.find(name);
        if(!found) return;
        const { parent, left, right } = found;

        if(!left && !right) {
            if(found.value < parent.value) parent.left = null;
            parent.right = null;
        }
        else if(!left) {
            right.parent = parent;
        }
        else {
            const promote = left;
            promote.parent = parent;
            const oldRight = promote.right;
            if(oldRight) right.add(oldRight);
            promote.right = right;
        }   
    }
};