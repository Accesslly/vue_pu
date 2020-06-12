<template>
<div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#e0620d" inactive-color="#bfbfbf">
        <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/activity" icon="aim">活动</van-tabbar-item>
        <van-tabbar-item to="/message" icon="chat-o">消息</van-tabbar-item>
        <van-tabbar-item to="/square" icon="hot-o">广场</van-tabbar-item>
        <van-tabbar-item to="my" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar> 
</div>
</template>

<script>
export default {
     data() {
    return {
      active: 0,
    };
  },
}
</script>

<style lang="">
    
</style>