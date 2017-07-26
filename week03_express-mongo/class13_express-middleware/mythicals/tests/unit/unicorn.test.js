const Unicorn = require('../../lib/models/unicorn');
const { assert } = require('chai');

describe('Unicorn model', () => {
    it('validates with required fields', () => {
        const unicorn = new Unicorn({
            name: 'bobby',
            color: 'gold',
            candy: [
                { name: 'KitKat', sugar: 30 },
                { name: 'Lollipop', sugar: 25 }
            ]
        });
        
        return unicorn.validate();
    });

    it('fails validation when required fields are missing', () => {
        const unicorn = new Unicorn();
        
        return unicorn.validate()
            .then(
                () => { throw new Error('Expected validation error'); },
                ({ errors }) => {
                    assert.ok(errors.name);
                    assert.ok(errors.color);
                }
            );
    });

    it('color should be of enum type', () => {
        const unicorn = new Unicorn({
            name: 'foo',
            color: 'brown'
        });
        
        return unicorn.validate()
            .then(
                () => { throw new Error('Expected validation error'); },
                ({ errors }) => {
                    assert.equal(errors.color.kind, 'enum');
                }
            );
    });
})