<template>
<div>  
     <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <img class="top-close" src="../../assets/image/关闭.png" alt="">
        <p class="top-title">举报</p>
        <img class="top-refresh" src="../../assets/image/刷新.png" alt="">
    </div> 

    <!-- 举报     -->
    <div class="title">
        <p class="title1">举报</p>
    </div>

    <p class="report-title">请选择举报原因：</p>
    <van-checkbox  v-model="checked" class="bottom1">包含虚假欺诈信息</van-checkbox>
     <van-checkbox v-model="checked" class="bottom2">包含色情信息</van-checkbox>
      <van-checkbox v-model="checked" class="bottom3">包含暴力恐怖信息</van-checkbox>
       <van-checkbox v-model="checked" class="bottom4">包含政治敏感信息</van-checkbox>
    <p class="report-title1">请填写举报内容：</p>
    <div class="report-border"></div>
    <p class="report-title2">联系方式：</p>
    <div class="report-border1"></div>
    <div class="button">
        <p class="button-title">提交</p>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('/Test')
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
     margin-left: 100px;
     margin-top: 15px;
 }
 .top-refresh{
     margin-left: 120px;
     margin-top: 20px;
 }   
 .title{
     width: 100%;
     height: 50px;
     background-color: #303030;
 }
 .title1{
     color: #FFFFFF;
     margin-left: 8px;
     padding-top: 10px;
 }
 .report-title{
     margin-left: -180px;
     font-size: 15px;
 }
 .bottom1{
     margin-left: 30px;
     font-size: 13px;
 }
 .bottom2{
     margin-left: 30px;
     font-size: 13px;
     margin-top: 15px;
 }
 .bottom3{
     margin-left: 30px;
     font-size: 13px;
     margin-top: 15px;
 }
 .bottom4{
     margin-left: 30px;
     font-size: 13px;
     margin-top: 15px;
 }
 .report-title1{
     margin-left: -180px;
     font-size: 15px;
 }
 .report-border{
     width: 300px;
     height: 150px;
     margin-left: 30px;
     border: 1px solid #e3e6eb;
 }
 .report-title2{
     margin-left: -220px;
     font-size: 15px;
 }
 .report-border1{
     width: 300px;
     height: 40px;
     margin-left: 30px;
     border: 1px solid #e3e6eb;
 }
 .button{
     width: 300px;
     height: 30px;
     margin-left: 30px;
     margin-top: 40px;
     background-color: #53a3fa;
 }
 .button-title{
     color: #FFFFFF;
     padding-top: 5px;
 }
</style>