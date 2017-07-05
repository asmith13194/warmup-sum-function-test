const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it('Should return sum of arguments.', function(){
      expect(sum([1,2,3])).to.equal(6);
    });

    it('Should return invalid if arguments are not a number.', function(){
      assert.equal(sum(['a',2,3]), 'Invalid');
    });

    it('Should return AWESOME ADAM if sum greater than 100', function(){
      assert.equal(sum([1,99]), 'AWESOME ADAM');
    });

});
