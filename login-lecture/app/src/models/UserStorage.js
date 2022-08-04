"use strict";

class UserStorage {
    static #users = { //# public->private 은닉화
        id : ["tom", "나개발", "김팀장"],
        psword : ["1234", "1234", "123456"], 
        name : ["이름", "나개발", "김팀장"],
    };
    
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){ //해당하는 키값이 들어있는지 확인=>값이 있으면 true
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;