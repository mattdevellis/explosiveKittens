let Vue = require('vue');
window.$ = require('jquery');
require('bootstrap');

Vue.component('tabs', {
    template: `
        <div>
            <div class='tabs'>
                <ul class="nav nav-pills">
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a href="#" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            
            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,
    
    created() {
        this.tabs = this.$children;
    },
    
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    },
    
    data() {
        return { tabs: [] };
    }
});

Vue.component('tab', {
    template: `
        <div><slot></slot></div>
    `,
    
    props: {
        name: { required: true},
        selected: { default: false}
    },
    
    data() {
        return {
            isActive: false
        };
    },
       
    
    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#app'
});