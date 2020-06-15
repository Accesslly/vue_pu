<template>
<div>   
     <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <img class="top-close" src="../../assets/image/关闭.png" alt="">
        <p class="top-title">端午节小知识测试</p>
        <img class="top-refresh" src="../../assets/image/刷新.png" alt="">
    </div>  

    <!-- 图片  -->
    <img class="image" src="../../assets/image/端午节.png" alt="">

    <div class="bottom">
        <p class="bottom-title">屈原是我国春秋战国时期的哪国人？</p>
        <div class="bottom-choose">
            <van-checkbox v-model="checked" class="bottom1">魏国</van-checkbox>
        </div>
        <div class="bottom-choose1">
            <van-checkbox v-model="checked" class="bottom1">秦国</van-checkbox>
        </div>
        <div class="bottom-choose2">
            <van-checkbox v-model="checked" class="bottom1">赵国</van-checkbox>
        </div>
        <div class="bottom-choose3">
            <van-checkbox v-model="checked" class="bottom1">魏国</van-checkbox>
        </div>
        <div class="button">
            <p class="button-title">下一页</p>
        </div>
        <div class="introduction">
            <p class="introduction-title">举报</p>
            <p class="introduction-title1">问卷网提供支持</p>
            <p class="introduction-title2">关闭</p>
        </div>
        <hr>
        <div class="schdule">
            <div class="schdule-image"><img src="../../assets/image/学习进度条.png" alt=""></div>
            <p class="schdule-title">10%</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('survey')
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
     margin-left: 55px;
     margin-top: 15px;
 }
 .top-refresh{
     margin-left: 80px;
     margin-top: 20px;
 }    
 .image{
     margin-top: 10px;
 }
 .bottom{
     width: 330px;
     height: 420px;
     margin-left: 15px;
     text-align: left;
 }
 .bottom-title{
     font-weight: bold;
 }
 .bottom-choose{
     width: 300px;
     height: 30px;
     margin-left: 10px;
     border: 1px solid #e3e6eb;
 }
 .bottom1{
     margin-left: 10px;
     margin-top: 5px;
     font-size: 13px;
 }
 .bottom-choose1{
     width: 300px;
     height: 30px;
     margin-top: 5px;
     margin-left: 10px;
     border: 1px solid #e3e6eb;
 }
 .bottom-choose2{
     width: 300px;
     height: 30px;
     margin-top: 5px;
     margin-left: 10px;
     border: 1px solid #e3e6eb;
 }
 .bottom-choose3{
     width: 300px;
     height: 30px;
     margin-top: 5px;
     margin-left: 10px;
     border: 1px solid #e3e6eb;
 }
 .button{
     width: 300px;
     height: 50px;
     margin-left: 12px;
     margin-top: 15px;
     background-color: #019652;
 }
 .button-title{
     color: #FFFFFF;
     margin-left: 120px;
     padding-top: 15px;
 }
 .introduction{
     width: 330px;
     height: 30px;
     margin-top: 90px;
     display: flex;
 }
 .introduction-title{
     font-size: 12px;
     color: #bfbfbf;
     margin-left: 10px;
 }
 .introduction-title1{
     font-size: 13px;
     margin-left: 90px;
 }
 .introduction-title2{
     font-size: 12px;
     margin-left: 80px;
     color: #bfbfbf;
 }
 .schdule{
     display: flex;
     width: 330px;
     height: 30px;
 }
 .schdule-title{
     margin-left: 35px;
     font-size: 12px;
     margin-top:4px;
 }
</style>