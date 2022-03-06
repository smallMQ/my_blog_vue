<template>
<el-tabs v-model="activeName" @tab-click="handleClick" style="color:blueviolet" stretch>
    <el-tab-pane label="文章分类" name="first">
        <ul style="text-align: left">
            <li style="margin-top: 20px" v-for="tag in tags">
                  <el-link :underline="false" @click="filter_tag(tag.id)">{{tag.name}}</el-link>
                </li>


        </ul>
    </el-tab-pane>
    <el-tab-pane label="文章排行" name="second">
         <ul style="text-align: left">
            <li style="margin-top: 20px" v-for="i in order">
                <el-link :underline="false" @click="goto_detail(i.id)">{{i.theme}}({{i.view_number}})</el-link>
                </li>

        </ul>

    </el-tab-pane>

  </el-tabs>
</template>
<script>
    import settings from "../assets/js/settings";
    export default {
        name: "category",
          data() {
      return {
        activeName: 'first',
          tags:[],
          order:[],
      };
    },
    methods: {
      handleClick(tab, event) {
      },
        get_tags(){
          this.$axios.get(settings.base_url+'/user/tags/').then(response=>{
              this.tags = response.data;
          }).catch(error=>{

          })
        },
        get_order(){
          this.$axios.get(settings.base_url+'/user/blog/',{
              params:{
                  ordering:"-view_number"
              }
          }).then(response=>{
              this.order = response.data.results;
          }).catch(error=>{

          })
          //
        },
        filter_tag(tag_id){
            this.$emit('filter_tag',tag_id);

        },
        goto_detail(id){
          console.log('传过去的id是',id)
          this.$emit('goto_detail',4,id)

        }


    },
        created() {
            this.get_tags();
            this.get_order();
        }

    }
</script>

<style scoped>

</style>