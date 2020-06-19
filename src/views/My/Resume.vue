<template>
<div> 
      <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <img class="top-close" src="../../assets/image/关闭.png" alt="">
        <p class="top-title">兼职实习</p>
        <img class="top-refresh" src="../../assets/image/刷新.png" alt="">
    </div> 

    <div class="bg"></div>   
    
    <div class="information" @click="create">
        <div class="information1">
            <p class="information1-title">15195924611</p>
            <p class="information1-title1">修改账户资料></p>
        </div>
        <div class="information2">
            <p class="information2-title">我的简历</p>
            <p class="information2-title1">完善简历信息，让更多人发现你</p>
        </div>
        <div class="information3">
            <p class="information3-title">简历完成度</p>
            <p class="information3-title1">11%</p>
        </div>
        <div class="information4">
            <div class="information4-title"></div>
        </div>
    </div>

    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

    <div class="title1">
        <div class="title1-image"><img src="../../assets/image/我的投递.png" alt=""></div>
        <p class="title1-text">我的投递</p>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <div class="title1">
        <div class="title1-image"><img src="../../assets/image/面试记录.png" alt=""></div>
        <p class="title1-text">面试记录</p>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <div class="title1">
        <div class="title1-image"><img src="../../assets/image/兼职报名表.png" alt=""></div>
        <p class="title1-text">兼职报名表</p>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <div class="title1">
        <div class="title1-image"><img src="../../assets/image/简历收藏.png" alt=""></div>
        <p class="title1-text">收藏</p>
    </div>

    <div class="bg1"></div>

    
     <div class="title1">
        <div class="title1-image"><img src="../../assets/image/反馈与帮助.png" alt=""></div>
        <p class="title1-text">反馈与帮助</p>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

    
     <div class="title1">
        <div class="title1-image"><img src="../../assets/image/简历设置.png" alt=""></div>
        <p class="title1-text">设置</p>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

    
     <div class="title1">
        <div class="title1-image"><img src="../../assets/image/关于我们.png" alt=""></div>
        <p class="title1-text">关于我们</p>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('/my')
        },
        create(){
            this.$router.push('/createresume')
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
 .bg{
     width: 100%;
     height: 150px;
     margin-top: 10px;
     background-color: #5272e3;
 } 
 .information{
     width: 330px;
     height: 150px;
     margin-left: 20px;
     margin-top: -120px;
     border-radius: 10px;
     background-color: #36c2cf;
 }
 .information1{
     width: 330px;
     height: 30px;
     display: flex;
 }
 .information1-title{
     color: #FFFFFF;
     margin-left: 90px;
     margin-top: 10px;
 }
 .information1-title1{
     font-size: 13px;
     color: #FFFFFF;
     margin-top: 10px;
     margin-left: 50px;
 }
 .information2{
     width: 330px;
     height: 30px;
     display: flex;
     margin-top: 30px;
 }
 .information2-title{
     color: #FFFFFF;
     font-size: 15px;
     margin-left: 20px;
     margin-top: 10px
 }
 .information2-title1{
     font-size: 11px;
     margin-top: 15px;
     margin-left: 5px;
     color: #FFFFFF;
 }
 .information3{
     width: 330px;
     height: 30px;
     display: flex;
 }
 .information3-title{
     font-size: 15px;
     color: #FFFFFF;
     margin-left: 20px;
     margin-top: 10px;
 }
 .information3-title1{
     font-size: 15px;
     margin-left: 200px;
     color: #FFFFFF;
 }
 .information4{
     width: 300px;
     height: 3px;
     margin-top: 5px;
     border-radius: 10px;
     margin-left: 20px;
     background-color: #77d2e5;
 }
 .information4-title{
     width: 40px;
     height: 3px;
     margin-left: 0px;
     border-radius: 10px;
     background-color: #FFFFFF;
 }
 .title1{
     width: 100%;
     height: 30px;
     display: flex;
 }
 .title1-image{
     margin-top: 5px;
     margin-left: 20px;
 }
 .title1-text{
     margin-left: 20px;
     margin-top: 5px;
 }
 .bg1{
     width: 100%;
     height: 20px;
     background-color: #f8faf9;
 }
</style>