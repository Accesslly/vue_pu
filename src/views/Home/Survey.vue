<template>
<div>  
     <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <img class="top-close" src="../../assets/image/关闭.png" alt="">
        <p class="top-title">问卷网_网络...</p>
        <img class="top-refresh" src="../../assets/image/刷新.png" alt="">
    </div> 

    <!-- 轮播图  -->
    <div class="image">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item> <img src="../../assets/image/问卷轮播.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/image/问卷轮播1.png" alt=""></van-swipe-item>
        </van-swipe>  
    </div>

    <!-- 搜索 -->
    <div class="search">
        <div class="border"></div>
        <p class="title">全部</p>
        <div class="border1"></div>
        <div class="border2"></div>
        <img class="search-icon" src="../../assets/image/搜索.png" alt="">
        <p class="title1">搜索</p>
    </div>

    <!-- 测试 -->
    <img src="../../assets/image/问卷1.png" alt="">
    <img src="../../assets/image/问卷2.png" alt="">
    <img src="../../assets/image/问卷3.png" alt="">
    <img src="../../assets/image/问卷4.png" alt="">
    <img src="../../assets/image/问卷5.png" alt="">
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('/home')
        }
    },
}
</script>

<style>
 .top{
     width: 100%;
     height: 40px;
     display: flex;
 } 
 .top-return{
     margin-left: 0px;
     margin-top: 15px;
 } 
 .top-close{
     margin-left: 20px;
     margin-top: 20px;
 } 
 .top-title{
     font-weight: bold;
     margin-left: 50px;
     margin-top: 15px;
 }
 .top-refresh{
     margin-left: 120px;
     margin-top: 20px;
 } 
 .image{
     width: 100%;
     height: 130px;
     margin-top: 10px;
 }
 .search{
     display: flex;
 }
 .border{
     width: 10px;
     height: 2px;
     margin-top: 35px;
     margin-left: 20px;
     background-color: blue;
 }
 .title{
     font-weight: bold;
     margin-left: 10px;
     margin-top: 22px;
 }
 .border1{
     width: 10px;
     height: 2px;
     margin-left: 10px;
     margin-top: 35px;
     background-color: blue;
 }
 .border2{
     width: 100px;
     height: 28px;
     border-radius: 25px;
     margin-left: 150px;
     margin-top: 20px;
     border: 1px solid #bfbfbf;
 }
 .search-icon{
     margin-top: 20px;
     margin-left: -90px;
 }
 .title1{
     margin-top: 25px;
     margin-left: 10px;
     color: #bfbfbf;
 }
</style>