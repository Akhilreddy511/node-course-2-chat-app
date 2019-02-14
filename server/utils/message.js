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
      createdAt: new Date().getTime()
    };
  };
  var generateLocationMessage =(from,longitute,latitude)=>{
    return{
      from,
      url:`http://www.google.com/maps?q=${longitute},${latitude}`,
      //http://google.com/maps?q=
      createdAt: new Date().getTime()
    }
  }
  module.exports = {generateMessage,generateLocationMessage};
  