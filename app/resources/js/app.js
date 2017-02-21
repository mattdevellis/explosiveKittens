let Vue = require('vue');
window.$ = require('jquery');
require('bootstrap');

//Global Vue Component
Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#app',
    
    data: {
        tasks: [
            {description: 'Do some stuff', completed: true},
            {description: 'Do the art', completed: false},
            {description: 'Do the science', completed: true},
            {description: 'Do the sex', completed: false},
            {description: 'Do the sleep', completed: true},
            ],
            
        newName: '',
        names: ['Matt', 'Alyssa', 'Taylor', 'Austin'],
        
        title: 'Now the title is being set through JavaScript'
    },
    
    computed: {
        
        incompleteTasks() {
            return this.tasks.filter(task => !task.completed);
        },
        
        completeTasks() {
            return this.tasks.filter(task => task.completed);
        }
        
    },
    
    //always only nest custom methods
    //within this methods object.
    methods: {
      addName() {
          this.names.push(this.newName);
          
          this.newName='';
      }
    }
    
});