<template>
    <div class="footer">
        <ul>
            <li><el-link @click="about_me">关于我</el-link></li>
            <li><el-link @click="Cooperation">商务合作</el-link></li>
            <li><el-link @click="help">帮助中心</el-link></li>
            <li><el-link @click="Feedback">意见反馈</el-link></li>
            <li><el-link @click="Welfare">福利资源</el-link></li>
            <li>本站已运行{{time}}天</li>
        </ul>


    </div>

</template>

<script>
    export default {
        name: "Footer",
        data(){
          return{
              time:0
          }
        },
        methods:{
            about_me(){
                 this.$alert('你有得选?', '我很帅对吗?', {
          confirmButtonText: '是的非常帅',
                     showClose:false,
        });
            },
            Cooperation(){
                 this.$alert('16639821093', '加微信!', {
          confirmButtonText: '确定',
                     showClose:false,

        });
            },
            help(){
                this.$alert('https://gitee.com/smallmq/my_blog', '访问gitee|github的readme.md', {
          confirmButtonText: '确定',
                     showClose:false,

        });
            },
            Feedback(){
         this.$alert('不,你没有意见', '有意见?', {
          confirmButtonText: '确定',
         showClose:false,

        });
            },
            Welfare(){
                 this.$alert('你想看?', '什么?', {
          confirmButtonText: '确定',
         showClose:false,
          callback: action => {
            this.$message({
              type: 'info',
              message: `给我介绍个女朋友先!`,
            })          }
        });
            },
            get_time(){

                var rantime = '2021/8/20 00:00:00:000'
                var startTime = new Date(rantime);
                var nowTime = new Date();
                var timestamp = (nowTime.getTime() - startTime.getTime());
                var oneDayMilliseconds = 24 * 60 * 60 * 1000;
                var totalDaysTmp = timestamp / oneDayMilliseconds;
                var totalDays = Math.floor(totalDaysTmp);
                this.time = totalDays;
            }
        },
        mounted() {
            this.get_time();
        }
    }
</script>

<style scoped>
    .footer {
        float: left;
    }

    .footer ul {
        margin: 0 auto 16px;
        padding-top: 10px;
        width: 810px;
    }

    .footer ul li {
        float: left;
        width: 112px;
        margin: 0 10px;
        text-align: center;
        font-size: 14px;
    }

    .footer ul::after {
        content: "";
        display: block;
        clear: both;
    }

    .footer p {
        text-align: center;
        font-size: 12px;
    }
</style>