let Vue = require('vue');
window.$ = require('jquery');
require('bootstrap');

//Global Vue Component
Vue.component('message', {
    
    props: ['title', 'body'],
    
    data() {
        return {
            isVisible: true
        };
    },
    
    template: `
        <div class="panel panel-default" v-show="isVisible">
            <div class="panel-heading">
                {{title}}
            <button type="button" class="btn btn-default" @click="hideModal">Hide</button>
            
            <div class="panel-body">
                {{body}}
            </div>
            
        </div>
    `,
    
    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});
    
    new Vue({
        el: '#app'
    });