const assert = require('assert');

class EE {
    constructor() {
        this.events = {};
    }
    on(event, handler) {
        if(!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(handler);
    }
    emit(event){
        this.events[event].forEach(handler => handler());
    }
}

describe('ee', () => {
    it('emits event to registered handler', () => {
        const ee = new EE();
        let called = 0;
        ee.on('foo', () => {
            called += 1;
        });
        ee.emit('foo');
        assert.equal(called, 1);
    });
    
    it('emits to all registered handlers', () => {
        const ee = new EE();
        let called = 0;
        ee.on('foo', () => {
            called += 1;
        });
        ee.on('foo', () => {
            called += 1;
        });
        ee.emit('foo'); 
        assert.equal(called, 2);       
    })
    
    it('emits only handlers for specified event', () => {
        const ee = new EE();
        let called = [];
        ee.on('foo', () => {
            called.push('foo');
        });
        ee.on('bar', () => {
            called.push('bar');
        });
        ee.emit('foo'); 
        assert.deepEqual(called, ['foo']);       
    })


});
