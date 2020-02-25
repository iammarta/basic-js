const chainMaker = {
    chain: [],
    getLength: function() {
        return this.chain.length;
      },
      addLink: function(value) {
        this.chain.push('( '+value+' )');
        return this;
      },
      removeLink: function(position) {
        if (typeof position != 'number' || position > this.getLength() || position < 1) {
          this.chain = [];
          throw new Error('Error');
        }
    
        this.chain.splice(position - 1, 1);
        return this;
      },
      reverseChain: function() {
        this.chain.reverse();
        return this;
      },
      finishChain: function() {
        let res = this.chain.join('~~');
        this.chain = [];
        return res;
      }
  };
  
  module.exports = chainMaker;