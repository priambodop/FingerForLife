class Users{
  constructor(){
    this.userArray = [];
  }

  addUser(id, room){
    var newUser = {id, room};
    this.userArray.push(newUser);
    return newUser;
  }

  removeUser(id){
    var tempUser = this.userArray.filter((user) => user.id === id);

    if (tempUser) {
      this.userArray = this.userArray.filter((user) => user.id !== id);
    }

    return tempUser;
  }

  getUserList(room){
    var userList = this.userArray.filter((user) => user.room === room);
    var idList = userList.filter((user) => userList.id);

    return idList;
  }
}

module.exports = {Users};
