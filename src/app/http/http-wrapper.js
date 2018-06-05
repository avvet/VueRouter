import axios from "axios/index";

const HTTP = 'http://localhost:3000/';
const USERS ='users';

class HttpWrapperClass {
  getUsersFromServer(users,callback){
    axios
      .get(HTTP + USERS)
      .then(resp => {
        console.log(resp.data,'DATA');
        callback(resp.data);
      })
      .catch(err => {
        console.log(err, 'Error to get Users');
      })
  }
}


const httpWrapper = new HttpWrapperClass();

export {httpWrapper}
