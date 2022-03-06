<template style="opacity: 90%">
    <div style="opacity:100%;border-color: aqua;border-width: 10px;margin-top: 100px; ">
        <div style="margin-top: 20px;opacity:100%;">
            <img src="https://portrait.gitee.com/uploads/avatars/user/3184/9554949_smallmq_1629284283.png!avatar200"
                 alt="作者图片" style="border-radius: 50%">
        </div>
        <div>
            <h2>{{author_info.name}}</h2>
            <p>{{author_info.personal_signature}}</p>
                <h3>今日访问量:{{today_number}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总访问量:{{total_number}}</h3>
                <pre class="el-icon-message">邮箱:{{author_info.email}}</pre>
            <br>
            <pre class="el-icon-s-promotion">微信:{{author_info.we_chat}}</pre>
            <br>
            <pre class="el-icon-phone">电话:{{author_info.telephone}}</pre>
            <hr/>
        </div>

    </div>
</template>

<script>
    import settings from "../assets/js/settings";
    export default {
        name: "author",
        data(){
            return{
                author_info:[],
                today_number:'',
                total_number:'',
            }
        },

        methods:{
            get_author_info(){
                this.$axios.get(settings.base_url+'/user/author/').then(response=>{
                    this.author_info = response.data[0];
                }).catch(error=> {
                    console.log(error)

                })
            },
            get_num(){
                this.$axios.get(settings.base_url+'/user/viewnum/').then(response=>{
                    this.today_number = response.data.today_num;
                    this.total_number = response.data.total_num;
                }).catch(error=>{
                    console.log(er)

                })
            }
        },
        created() {
            this.get_author_info();
            this.get_num();
        },


    }
</script>

<style scoped>

</style>