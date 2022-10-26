import axios from "axios";

 const myhttp = axios.create({
    baseURL: 'http://localhost:6100/',
    timeout: 1000,
    headers: {
      'X-Custom-Header': 'foobar',
      cached: false,
      
    }
  });

  export {
    myhttp
  }