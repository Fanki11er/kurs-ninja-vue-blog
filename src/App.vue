<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>

  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';

export default {
 components: {
   'add-blog': AddBlog,
   'show-blogs': showBlogs,
   'list-blogs': listBlogs,
   'app-header': header,
 },

  data(){
    return{

    }
  },
  methods: {

  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
