<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
        <p>作者:{{blog.content}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories" :key="category">
                {{category}}
            </li>
        </ul>
        <button @click="deleteSingleBlog()">删除</button>
         <router-link :to="'/edit/'+id">编辑</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        axios.get('https://happyblog-328e3.firebaseio.com/posts/'+this.id+".json")
        //this.$http.get('https://happyblog-328e3.firebaseio.com/posts/'+this.id+".json")
            .then((data)=>{
                this.blog = data.data;
            })
    },
    methods:{
        deleteSingleBlog(){
            this.$http.delete("https://happyblog-328e3.firebaseio.com/posts/"+this.id+".json")
                .then(response =>{
                    this.$router.push({path:'/'})
                })
        }
    }
}
</script>

<style>
#single-blog{
    max-width:960px;
    margin:0 auto;
    padding:20px;
    background:#eee;
    border:1px dotted #aaa;
}
</style>