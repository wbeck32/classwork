add(node) {
if(node.value === null) throw Error;
    if (node.value < this.value) {
        if (!this.left) {
            this.left.add(node)
            else {
                this.left.add(node)
            }
        }
    } else {
        if (!this.right) {

        } else {

        }
    }
}



find(name) {
    if(name === this.value) return this.person;
    if(this.left && name < this.value)
        return this.left.find(name)
}

remove(name) {
    const found = this.find(name);
    if(!found) return;
}

const fn = s => w =