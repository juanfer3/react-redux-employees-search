import axios from 'axios';

const employee = axios.create({
    baseURL: 'http://dummy.restapiexample.com/api/v1/'
  })
  
export default employee;

