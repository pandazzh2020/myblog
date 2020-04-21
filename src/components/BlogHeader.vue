<template>
    <nav>
        <ul>
            <li>
                <router-link to"/" exact>博客</router-link>
                <router-link to"/add" exact>写博客</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import AddBlog from './AddBlog'
import ShowBlogs from './ShowBlogs'
import BlogHeader from './BlogHeader'

export default {
    name:'app',
    components: {
        AddBlog,ShowBlogs,BlogHeader
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: aliceblue;
    border-radius:5px;
    text-decoration: none;
    padding: 12px;
}
nav{
    background:red;
    padding: 30px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: rgba(red, green, blue, alpha);
    color:#444;
}

</style>