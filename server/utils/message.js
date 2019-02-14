var moment = require('moment');

// var generateMessage = (from,text)=>{
//     return {
//         from,
//         text,
//         createdAt:new Date().getTime()
//     }
// }

// module.exports = generateMessage;

var generateMessage = (from, text) => {
    return {
      from,
      text,
      createdAt: moment().valueOf()
    };
  };
  var generateLocationMessage =(from,longitute,latitude)=>{
    return{
      from,
      url:`http://www.google.com/maps?q=${longitute},${latitude}`,
      //http://google.com/maps?q=
      createdAt: moment().valueOf()
    }
  }
  module.exports = {generateMessage,generateLocationMessage};
  