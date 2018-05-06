class Users{
  constructor(){
    this.userArray = [];
  }

  addUser(id, room){
    var newUser = {id, room};
    this.userArray.push(newUser);
    console.log(this.userArray);
    return newUser;
  }

  isRoomExist(room){
    var result = 0;
    console.log(`The room to be Checked: ${room}`);
    var tempUser = this.userArray.filter((user) => user.room === room);
    console.log(tempUser);
    if (tempUser.length == 0) {
      result = 0;
      console.log(`result false: ${result}`);
    }else{
      result = 1;
      console.log(`result true: ${result}`);
    }

    return result;
  }

  getUser(id){
    return this.userArray.filter((user) => user.id === id)[0];
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
    var idList = userList.map((user) => userList.id);

    return idList;
  }
}

module.exports = {Users};
