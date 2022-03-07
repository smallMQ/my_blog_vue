<template>
    <div>
        <div class="el-col-24">
            <div class="el-col-12"><p class="el-icon-user">姓名:{{author_info.name}}</p></div>
            <div class="el-col-12"><p class="el-icon-eleme">年龄:{{author_info.age}}</p></div>
            <div class="el-col-12"><p class="el-icon-phone">电话:{{author_info.telephone}}</p></div>
            <div class="el-col-12"><p class="el-icon-message">邮箱:{{author_info.email}}</p></div>
            <div class="el-col-24"><p class="el-icon-loading"></p>工作经验:{{author_info.simple_experience}}</div>
            <hr>
            <div class="el-col-4">
                <div style="height: 300px;">
                    <el-steps direction="vertical" :active="1">
                        <el-step title="求职意向">
                        </el-step>
                        <el-step title="教育背景"></el-step>
                        <el-step title="证书"></el-step>
                        <el-step title="工作经验"></el-step>
                    </el-steps>
                </div>
            </div>
            <div class="el-col-20">
                <div style="height: 90px">
                    <div class="el-col-12">岗位:{{author_info.expect_job}}</div>
                    <div class="el-col-12">期望薪资:{{author_info.expect_salary}}</div>
                </div>
                <div style="height: 90px">
                    <div class="el-col-12">毕业学校:{{author_info.graduation_school}}</div>
                    <div class="el-col-12">就读时间:{{author_info.graduation_time}}</div>
                </div>
                <div style="height: 90px">
                    <div class="el-col-12">证书:{{author_info.certificate}}</div>
                </div>
                   <div style="height:300px">
                    <div class="el-col-6">公司名称:</div>
                    <div class="el-col-6">职位名称:</div>
                    <div class="el-col-6">在职时间:</div>
                    <div class="el-col-6">工资:</div>
                       <br>
                       <br>


                    <div>工作内容:</div>

                </div>

            </div>

        </div>


    </div>

</template>

<script>
    import settings from "../assets/js/settings";
    export default {

        name: "about_me",
        data(){
            return{
                author_info:[]
            }

        },
        created(){
            this.get_author_info();
        },
        methods:{
           get_author_info(){
                this.$axios.get(settings.base_url+'/user/author/').then(response=>{
                    // console.log(response)
                    this.author_info = response.data[0];

                }).catch(error=> {
                    console.log(error)

                })
            }
        }
    }
</script>

<style scoped>

</style>