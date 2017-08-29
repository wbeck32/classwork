import reducer from './counter.reducer';
import { INCREMENT, DECREMENT } from './counter.constants';
import { increment, decrement } from './counter.actions';

describe('counter', () => {

  describe('actions', () => {

    it('increment takes an amount payload', () => {
      expect(increment(12)).toEqual({ 
        type: INCREMENT,
        payload: 12
      });
    });

    it('increment has default amount of 1', () => {
      expect(increment()).toEqual({ 
        type: INCREMENT,
        payload: 1
      });
    });

    it('decrement takes an amount payload', () => {
      expect(decrement(12)).toEqual({ 
        type: DECREMENT,
        payload: 12
      });
    });

    it('decrement has default amount of 1', () => {
      expect(decrement()).toEqual({ 
        type: DECREMENT,
        payload: 1
      });
    });

  });

  describe('reducers', () => {

    it('Has default value of 0', () => {
      expect(reducer(undefined, { type: 'DUMMY' })).toEqual({ count: 0 });
    });

    it('INCREMENT', () => {
      const action = increment(5);
      expect(reducer({ count: 0 }, action)).toEqual({ count: 5 });
    });

    it('DECREMENT', () => {
      const action = decrement(5);
      expect(reducer({ count: 0 }, action)).toEqual({ count: -5 });
    });

  });

});
