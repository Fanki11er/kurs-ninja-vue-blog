import showBlogs from './components/showBlogs.vue';
import addBlogs from './components/AddBlog.vue';
import singleBlog from './components/singleBlog.vue';

export default [
    {
        path:'/', 
        component: showBlogs,
    },

    {   
        path: '/add',
        component: addBlogs,
    },

    {
        path: '/blog/:id',
        component: singleBlog,
    },
]