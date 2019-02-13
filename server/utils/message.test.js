var expect = require('expect');

// var generateMessage = require('./message');
var {generateMessage} = require('./message');

// describe('generate Message',()=>{
//     it('should genrate correct message Object',()=>{
//         var from = 'jonny';
//         var text = 'some mess';

//         var message = generateMessage(from,text);

//         expect(message.createdAt).toBeA('number');
//         expect(message).toInclude({from,text});
//     })
// })

describe('generateMessage', () => {
    it('should generate correct message object', () => {
      var from = 'Jen';
      var text = 'Some message';
      var message = generateMessage(from, text);
  
      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({from, text});
    });
  });