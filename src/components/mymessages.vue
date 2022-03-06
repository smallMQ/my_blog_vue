<template>


    <div>

        <h1 style="text-align: center;font-size: 25px;color:deepskyblue">留言墙(懒得回复0.0)</h1>
        <div class="infinite-list-wrapper" style="overflow:auto">

            <dl
                    class="list"
                    v-infinite-scroll="load"
                    infinite-scroll-disabled="disabled"
                    style="text-align: center">
                <dt v-for="i in message" class="list-item " style="line-height: 30px">
                    <div style="width: 100%;height: 100px" class="ok">
                    <p style="text-align: left;color:skyblue">{{i.user}}:({{i.create_time}})</p>
                    <p style="text-align: left;color:mediumturquoise">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{i.content}}</p>
                </div></dt>
            </dl>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>

            <el-input
  type="text"
  placeholder="昵称"
  v-model="name"
  maxlength="10"
  show-word-limit
>
</el-input>
<div style="margin: 20px 0;"></div>
            <div class="el-col-20"><el-input
  type="textarea"
  placeholder="在这里写留言吧!"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input></div>
            <div class="el-col-4">
                <el-button type="primary" style="float:right" @click="send_message">提交</el-button>
            </div>

        </div>

    </div>

</template>

<script>
    import settings from "../assets/js/settings";
    export default {
        name: "mymessages",
        data() {
            return {
                count: 10,
                loading: false,
                message:[],
                name: '',
                textarea: ''
            }
        },
        created() {
          this.get_message();
        },
        computed: {
            noMore() {
                return this.count >= 10
            },
            disabled() {
                return this.loading || this.noMore
            }
        },
        methods: {
            load() {
                this.loading = true
                setTimeout(() => {
                    this.count += 2
                    this.loading = false
                }, 2000)
            },
            get_message(){
                this.$axios.get(settings.base_url+'/user/message/').then(response=>{
                    this.message = response.data;
                }).catch(error=>{

                })
            },
            send_message(){
                if(this.name == ''||this.message==''){
                    this.$message({
                        message:'缺一不可哦,小笨蛋!',
                        type:'warning'
                    })
                }
                else{
                    this.$axios.post(settings.base_url+'/user/message/',{
                    "user":this.name,
                    "content":this.textarea
                }).then(response=>{
                    console.log('success');

                    this.get_message()
                    this.open();

                }).catch(error=>{     this.$message({
                        message:'怎么?想刷爆我的数据库?',
                        type:'error'
                    })
})



                }

            },
                  open() {
        const h = this.$createElement;

        this.$notify({
          title: '小梦琦告诉你:',
          message: h('i', { style: 'color: teal'}, '留言成功')
        });
      },
        }
    };


</script>

<style scoped>
.ok{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>