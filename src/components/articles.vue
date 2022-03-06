<template>
    <div style="opacity: 100%;">
    <h1>题目</h1>
    <div style="margin:auto">
        <pre class="el-icon-user-solid">{{author.username}}</pre>&nbsp;&nbsp;&nbsp;
        <pre class="el-icon-date">{{create_time}}</pre>&nbsp;&nbsp;&nbsp;
        <pre class="el-icon-view">{{view_number}}</pre>&nbsp;&nbsp;&nbsp;
    </div>
    <div style="opacity: 100%;">
        <VueMarkdown :source="content" class="markdown-body" style="opacity: 100%;background-color: #E9EEF3;color:hotpink"></VueMarkdown>

    </div>
        </div>
</template>

<script>
    import settings from "../assets/js/settings";
    import VueMarkdown from 'vue-markdown'
    export default {
        name: "articles",
        props:{
            aid:String
    },
        components:{
            VueMarkdown
        },
        data(){
            return {
                content:'',
                author:'',
                create_time:'',
                view_number:'',
            }
        },
        created() {
            this.$axios.get(settings.base_url+'/user/detail/',{
                params:{
                    id:this.aid
                }
            }).then(response=>{
                this.content = response.data.content;
                this.author = response.data.author;
                this.create_time = response.data.create_time;
                this.view_number = response.data.view_number;
                // this.content = response.data.content;
            }).catch(error=>{

            })
        },
        watch:{
            "aid":function () {
this.$axios.get(settings.base_url+'/user/detail/',{
                params:{
                    id:this.aid
                }
            }).then(response=>{
                this.content = response.data.content;

            }).catch(error=>{

            })
            }
        }

    }
</script>

<style scoped>

</style>