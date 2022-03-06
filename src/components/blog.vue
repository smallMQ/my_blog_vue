<template>
    <div style="width: 100%;">
         <div class="beitou" v-for="blog in blog_list">
            <el-col style="width: 250px;">
                <div style="width: 230px;height: 180px">
                    <img :src="blog.photo" alt="" width="100%" style="margin: 20px 10px">
                </div>
            </el-col>
            <el-main>
                <div>
                    <div>
                        <el-link :underline="false" @click="goto_detail(blog.id)"><h2 style="text-align: left;margin-top: 5px">
                            {{blog.theme}}</h2></el-link>

                    </div>


                    <p>{{blog.simple_introduction}}</p>
                </div>
                <div style="margin-top:30px;margin-bottom: 0px">
                    <pre class="el-icon-user-solid">{{blog.author.username}}</pre>&nbsp;&nbsp;&nbsp;
                    <pre class="el-icon-date">{{blog.create_time}}</pre>&nbsp;&nbsp;&nbsp;
                    <pre class="el-icon-view">{{blog.view_number}}</pre>&nbsp;&nbsp;&nbsp;
                </div>

            </el-main>
        </div>


<el-pagination
  background
  layout="prev, pager, next"
  :page-size="4"
  :total="blog_count"
    @next-click="next_page"
    @prev-click="prev_page"
  :current-page="current_page"
  @current-change="change_page"
  id="pagen"
>
</el-pagination>
    </div>
</template>

<script>
    import settings from "../assets/js/settings";
    export default {
        name: "blog",
        data(){
          return{
              active:"4",
              blog_list:[],
              blog_count:"",
              current_page:1,
              // tag_id:'',
          }
        },
        props: {
            tag_id : String
        },
        methods:{
            goto_detail(blog_id){
                this.active = "4";
                this.$emit('goto_detail',this.active,blog_id);
                console.log('id是',blog_id)
            },
            get_blogs(){
                this.$axios.get(settings.base_url+'/user/blog/').then(response=>{
                    this.blog_list = response.data.results;
                    this.blog_count = response.data.count;
                }).catch(error=>{
                    console.log(error)
                })
            },
            next_page(){
                this.current_page +=1;
            },
            prev_page(){
                this.current_page -=1;
            },
            change_page(val){
                    this.current_page = val;
            }
        },
        created() {
            this.get_blogs();
        },
        watch:{
            "current_page":function () {
                console.log(this.tag_id)
                if(this.tag_id!=' ')
                {
                    this.$axios.get(settings.base_url+'/user/blog/',
                    {
                        params:{
                            page:this.current_page,
                        }
                }).then(response=>{
                    console.log('ok')
                    this.blog_list = response.data.results;
                    this.blog_count = response.data.count;
                }).catch(error=>{
                    console.log('fail')
                })
                }

            },
            "tag_id":function () {
                this.$axios.get(settings.base_url+'/user/blog/',
                    {
                        params:{
                            page:this.current_page,
                            tag:this.tag_id,
                        }
                }).then(response=>{
                    console.log('ok')
                    this.blog_list = response.data.results;
                    this.blog_count = response.data.count;

                }).catch(error=>{
                    console.log('fail')
                })

            },
            "active":function () {

            }
        }
    }
</script>

<style scoped>
    .beitou {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        margin-bottom: 10px;
        /*z-index: -1;*/
        /*opacity: 50%;*/
    }




</style>