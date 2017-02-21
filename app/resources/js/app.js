let Vue = require('vue');
window.$ = require('jquery');
require('bootstrap');

new Vue({
    el: '#app',
    
    data: {
        newName: '',
        names: ['Matt', 'Alyssa', 'Taylor', 'Austin'],
        
        title: 'Now the title is being set through JavaScript'
    },
    
    methods: {
      addName() {
          this.names.push(this.newName);
          
          this.newName='';
      }
    }
    
});