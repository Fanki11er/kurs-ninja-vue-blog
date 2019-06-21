<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h3>List Of Blogs</h3>
        <input type="text" v-model="search" placeholder="Search Blog">
        <div class="single-blog" v-for="blog in filterBlogs" v-bind:key="blog.id">
            <h2 v-rainbow>{{ blog.title | to-upper }}</h2>
        </div>
    </div>
</template>

<script>

import searchMixin from '../mixins/searchBlog';

export default {

    data(){
        return{
            blogs: [],
            search: '',
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0, 10);
        })
    },

    computed: {
        
    },

    filters: {
        toUpper(value){
            return value.toUpperCase();
        }
    },

    directives: {
        'rainbow': {
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString().slice(2,8);
            }
        }
    },

    mixins: [searchMixin],
}
</script>

<style>
#show-blogs {
    margin: 0 auto;
    max-width: 800px;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
