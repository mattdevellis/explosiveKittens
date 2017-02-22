let Vue = require('vue');
window.$ = require('jquery');
require('bootstrap');

Vue.component( {
    template: `
        <div>
            <div class='tabs'>
                <ul class="nav nav-pills">
                    <li v-for="tab in tabs">{{ tab.name }}</li>
                </ul>
            </div>
            
            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,
    
    created() {
        this.tabs = this.$children;
    }
    
    data() {
        return { tabs: [] };
    
    
});

Vue.component('tab', {
    template: `
        <div><slot></slot></div>
    `,
    
    props: {
        name: { required: true}
    }
});

new Vue({
    el: '#app'
});