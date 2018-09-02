import axios from 'axios';
const MyHttp = {};
MyHttp.install = function(Vue) {
    axios.defaults.baseURL = 'http://127.0.0.1:3001/';
    Vue.prototype.$http = axios;
}

export default MyHttp;
