<template>
<div>
    <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <img class="top-close" src="../../assets/image/关闭.png" alt="">
        <p class="top-title">兼职实习</p>
        <img class="top-refresh" src="../../assets/image/刷新.png" alt="">
    </div>
    <hr>

    <!-- 资料 -->
    <div class="information">
        <van-image class="information-image" round src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        <div class="information-left">
            <p class="information-left1">张三</p>
            <p class="information-left2">年级：18级</p>
            <p class="information-left3">学号：180283112</p>
        </div>
        <div class="information-right">
            <p class="information-right1">院系：计算机与软件学院</p>
            <p class="information-right2">专业：3移动应用开发</p>
        </div>
    </div>

    <div class="title">
        <p class="title1">第二课堂</p>
        <p class="title2">积分</p>
        <p class="title2">诚信度</p>
        <p class="title2">预警值</p>
    </div>
    <div class="line"></div>

    <!-- 分数 -->
    <div class="number">
        <img src="../../assets/image/我的学分1.png" alt="">
    </div>

    <!-- 详情 -->
    <div class="activity">
        <div class="activity1">
            <p class="activity1-left">活动类</p>
            <p class="activity1-right">总计140></p>
        </div>
        <van-divider />
         <div class="activity2">
            <p class="activity2-left">青年大学习</p>
            <p class="activity2-right">14></p>
        </div>
        <van-divider />
         <div class="activity3">
            <p class="activity3-left">公益活动</p>
            <p class="activity3-right">29></p>
        </div>
        <van-divider />
         <div class="activity4">
            <p class="activity4-left">文体类活动</p>
            <p class="activity4-right">37></p>
        </div>
        <van-divider />
         <div class="activity5">
            <p class="activity5-left">活动工作人员</p>
            <p class="activity5-right">80></p>
        </div>
        <van-divider />
         <div class="activity6">
            <p class="activity6-left">主题团日活动</p>
            <p class="activity6-right">40></p>
        </div>
        <van-divider />
    </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('home')
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
     margin-left: 80px;
     margin-top: 15px;
 }
 .top-refresh{
     margin-left: 120px;
     margin-top: 20px;
 }  
 .information{
     width: 330px;
     margin-left: 15px;
     height: 70px;
     display: flex;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .information-image{
     width: 45px;
     padding-top: 10px;
     padding-left: 10px;
     height: 45px;
 }  
 .information-left1{
     font-size: 12px;
     margin-left: -35px;
     font-weight: bold;
 }
 .information-left2{
     font-size: 12px;
     margin-top: -10px;
 }
 .information-left3{
     margin-top: -10px;
     font-size: 12px;
 }
 .information-right1{
     font-size: 12px;
     padding-top: 17px;
     margin-left: 20px;
 }
 .information-right2{
     font-size: 12px;
     margin-top: -10px;
 }
 .title{
     display: flex;
 }
 .title1{
     margin-left: 30px;
     font-size: 14px;
     font-weight: bold;
 }
 .title2{
     margin-left: 40px;
     font-size: 13px;
     margin-top: 17px;
     font-weight: bold;
 }
 .line{
     width: 50px;
     height: 2px;
     margin-left: 30px;
     background-color: black;
 }
 .number{
     margin-top: 10px;
 }
 .activity{
     width: 330px;
     height: 300px;
     margin-left: 15px;
     margin-top: 10px;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .activity1{
     height: 30px;
     display: flex;
 }
 .activity1-left{
     font-weight: bold;
     margin-left: 10px;
 }
 .activity1-right{
     font-weight: bold;
     margin-left: 190px;
 }
  .activity2{
     height: 10px;
     display: flex;
 }
 .activity2-left{
     margin-top: -5px;
     color: #bfbfbf;
     font-size: 12px;
     margin-left: 10px;
 }
 .activity2-right{
     margin-top: -5px;
     font-size: 12px;
     margin-left: 225px;
 }
  .activity3{
     height: 10px;
     display: flex;
 }
 .activity3-left{
     margin-top: -5px;
     color: #bfbfbf;
     font-size: 12px;
     margin-left: 10px;
 }
 .activity3-right{
     margin-top: -5px;
     font-size: 12px;
     margin-left: 237px;
 }
  .activity4{
     height: 10px;
     display: flex;
 }
 .activity4-left{
     margin-top: -5px;
     color: #bfbfbf;
     font-size: 12px;
     margin-left: 10px;
 }
 .activity4-right{
     margin-top: -5px;
     font-size: 12px;
     margin-left: 223px;
 }
 .activity5{
     height: 10px;
     display: flex;
 }
 .activity5-left{
     margin-top: -5px;
     color: #bfbfbf;
     font-size: 12px;
     margin-left: 10px;
 }
 .activity5-right{
     margin-top: -5px;
     font-size: 12px;
     margin-left: 210px;
 }
 .activity6{
     height: 10px;
     display: flex;
 }
 .activity6-left{
     margin-top: -5px;
     color: #bfbfbf;
     font-size: 12px;
     margin-left: 10px;
 }
 .activity6-right{
     margin-top: -5px;
     font-size: 12px;
     margin-left: 210px;
 }
</style>