[{
 
}]


class Users {
    constructor () {
        this.users = []; 
    }
    addUser(id,name,room){
        var user = {id,name,room}
        console.log(user);
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        var user = this.getUser(id);

        if(user) {
            this.user = this.users.filter((user) => user.id != id);
        }   
        return user;
    }
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0]
    }
    getUserList (room){
     var users = this.users.filter((user)=>user.room === room);
     var namesArray = users.map((user)=>user.name);

     return namesArray;
    }
}
module.exports = {Users};





// class Person {
//     constructor(name,age){
//         console.log(name,age)
//     }
// }

// var me = new Person('akhil',25) ;