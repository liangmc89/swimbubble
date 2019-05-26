define(['vue', 'axios.min', 'quasar.mat.umd.min',  'VueScroller','timeago.min'], 
function (Vue, axios, Quasar, VueScroller,timeago) {  
  Vue.component('scroller',VueScroller.default.Scroller)  
  Vue.component('timeago',{
    props:['datetime'],
    template:`<span ref='el_timeago' :datetime="datetime"></span>`,
    computed:{
      el_timeago(){
        return this.$refs.el_timeago
      }
    },
    mounted(){
      timeago.render(this.el_timeago,'zh_CN')
    }
  })
  axios.defaults.timeout = 20000;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  //axios.defaults.baseURL = '/www.easy-mock.com/mock/5ce8d38015839242d1653eaa/swimbubble/';                              
  axios.interceptors.request.use((config) => {
    return config;
  }, (error) => {
    return Promise.reject(error);
  });  

  axios.interceptors.response.use((res) => {  
    return Promise.resolve(res.data);
  }, (error) => {
    return Promise.reject(error);
  });  
  Vue.prototype.$axios = axios  
  return Vue
})