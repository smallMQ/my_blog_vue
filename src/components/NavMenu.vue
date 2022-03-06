<template>
    <div class="freeze" style="width: 24%">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
            <el-menu-item index="2">关于作者</el-menu-item>
            <el-menu-item index="3">留言</el-menu-item>



        </el-menu>


    </div>
</template>

<script>
    export default {
        name: "NavMenu",
        data() {
            return {
                activeIndex: '1',
            };
        },

        methods: {
            handleSelect(key, keyPath) {
                this.$emit('change',key)
            },

        },


    }
</script>

<style scoped>
.freeze{
    position: fixed;
    top:8px;
    z-index: 99;
}
</style>