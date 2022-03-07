<template>
    <div style="height: 100%">
        <el-container>
            <NavMenu v-on:change="change"></NavMenu>

                <el-aside width="25%">
                <author></author>
                <category v-on:filter_tag="filter_tag" v-on:goto_detail="detail">
                </category>
            </el-aside>
            <el-container >

                <el-main style="opacity: 90%; margin-top: 15px">

                    <blog v-if="active==1" v-on:goto_detail="detail" :tag_id="tag_id"></blog>
                    <about_me v-else-if="active==2"></about_me>
                    <mymessages v-else-if="active==3"></mymessages>
                    <articles v-else-if="active==4" :aid="article_id" ></articles>


                </el-main>
                <my_music></my_music>
                <el-footer>
                    <Footer/>
                </el-footer>
            </el-container>



        </el-container>

    </div>
</template>

<script>

    import NavMenu from "../components/NavMenu";
    import author from "../components/author";
    import Footer from "../components/Footer";
    import blog from "../components/blog";
    import category from "../components/category";
    import mymessages from "../components/mymessages";
    import my_music from "../components/my_music";
    import about_me from "../components/about_me";
    import articles from "../components/articles";

    export default {
        name: 'Home',
        components: {
            NavMenu,
            author,
            Footer,
            blog,
            category,
            mymessages,
            my_music,
            about_me,
            articles,


        },
        data() {
            return {
                active: 1,
                article_id:0,
                tag_id:'',
            }
        },
        methods: {
            change(key) {
                this.active = key;


            },
            detail(key,blog_id){

                this.active = key;
                this.article_id = blog_id;
               console.log('在home中id是',this.article_id)


            },
            filter_tag(tag_id){
                this.active = 1;
                console.log('传过来的tagid是:',tag_id);
                this.tag_id = tag_id;
            }

        },


    }
</script>
<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;

    }

    .el-main {
        background-color: #E9EEF3;

        text-align: left;

    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
