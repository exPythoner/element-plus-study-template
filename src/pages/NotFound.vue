<script setup>

</script>


<template>
    <div class="not-found">
    <div class="content">
        <h2>404 page</h2>
        <el-button type="warning" @click="$router.push('/')">返回首页</el-button>
    </div>

    </div>
</template>

<style lang="less" scoped>
.not-found {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    background-color: #fff;
}

h2 {
    font-size: 120px;
    text-align: center;
    color: #999;
    margin-bottom: 40px;
}
.content {
    border: 1px dotted #424242;
}
.el-button {
    width: 100%;
    // width: 400px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

</style>