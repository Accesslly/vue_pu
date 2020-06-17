<template>
<div> 
     <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <img class="top-close" src="../../assets/image/关闭.png" alt="">
        <p class="top-title">PU有万门课程列表</p>
        <img class="top-refresh" src="../../assets/image/刷新.png" alt="">
    </div>     
    <img src="../../assets/image/万门课程.png" alt=""> 
    <div class="bg"></div>

    <div class="message3">
        <div class="title3">
            <p class="title3-left">怎样管理好你的时间</p>
            <p class="title3-center">￥18.00</p>
            <p class="title3-right">18.00</p>
        </div>
        <div>
            <p class="title3-text">老师介绍：周旭帆：北京大学传播学硕士，资深老书虫。曾在《第一财经周刊》、36氪等媒体工作过，负责信息输入与输出的记者工作。举办过线上和线下数百人分享会。课程详情：时间毫无疑问是人最宝贵的财富与资源，管理好时间才能管理好人生。想有所改变，那你需要学习一下时间管理的知识。课程将分享时间管理方法的基本知识，让你管理好时间和生活</p>
        </div>
    </div> 

    <div class="bg1"></div>

    <div class="bottom">
        <div> <img class="button-icon" src="../../assets/image/机构介绍.png" alt=""></div>
        <p class="button-title">机构介绍</p>
        <div> <img class="button1-icon" src="../../assets/image/课程咨询.png" alt=""></div>
        <p class="button1-title">课程咨询</p>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('/training')
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
     margin-left: 60px;
     margin-top: 15px;
 }
 .top-refresh{
     margin-left: 80px;
     margin-top: 20px;
 }  
 .bg{
     width: 100%;
     height: 20px;
     background-color: #f2f1ed;
 } 
 .message3{
     width: 100%;
     height: 90px;
 }
 .title3{
     width: 100%;
     height: 30px;
     display: flex;
 }
 .title3-left{
     font-size: 13px;
     margin-top: 3px;
     margin-left: 10px;
 }
 .title3-center{
     font-size: 12px;
     color: #f35b00;
     margin-left: 150px;
     margin-top: 3px;
 }
 .title3-right{
     font-size: 10px;
     margin-top: 7px;
     margin-left: 10px;
     color: #bfbfbf;
     text-decoration: line-through;
 }
 .title3-text{
     font-size: 13px;
     margin-left: 10px; 
     text-align: left;
     color: #bfbfbf;
 }
 .bg1{
     width: 100%;
     height: 300px;
     background-color: #f2f1ed;
     margin-top: 60px;
 }
 .bottom{
     width: 100%;
     height: 60px;
     display: flex;
     background-color: #f8f8f6;
 }
 .button-icon{
     margin-top: 18px;
     margin-left: 60px;
 }
 .button-title{
     font-size: 15px;
     margin-left: 5px;
 }
.button1-icon{
     margin-top: 18px;
     margin-left: 100px;
 }
 .button1-title{
     font-size: 15px;
     margin-left: 5px;
 }
</style>