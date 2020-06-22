<template>
<div>  
      <!-- 顶部     -->
    <div class="top">
        <div><img class="top-return" @click="back" src="../../assets/image/实习返回.png" alt=""></div>
        <div><img class="top-close" src="../../assets/image/实习关闭.png" alt=""></div> 
        <p class="top-title">兼职实习</p>
        <div><img class="top-refresh" src="../../assets/image/实习刷新.png" alt=""></div>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <div class="choose">
        <img @click="back" src="../../assets/image/返回.png" alt="">
        <p class="choose-title">创建简历</p>
        <img class="choose-image" src="../../assets/image/更多资料.png" alt="">
    </div>

    <div class="bg">
        <div class="bg-title">完善简历信息</div>
        <div class="bg-title1">有助于HR更了解你，面试率更高哦！</div>
    </div>

    <div class="title1"><p class="title1-text">+添加基本信息</p></div>
    <div class="title2"><p class="title2-text">+添加实习经历</p></div>
    <div class="title3"><p class="title3-text">+添加教育经历</p></div>
    <div class="title4"><p class="title4-text">+添加期望工作</p></div>
    <div class="title5"><p class="title5-text">+添加校园实践经验</p></div>
    <div class="title6"><p class="title6-text">+添加德智美发展经历</p></div>
    <div class="title7"><p class="title7-text">+添加技能证书</p></div>
    <div class="title8"><p class="title8-text">+添加身份证信息</p></div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('/resume')
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
     margin-top: 15px;
 } 
 .top-title{
     font-weight: bold;
     margin-left: 80px;
     margin-top: 15px;
 }
 .top-refresh{
     margin-left: 120px;
     margin-top: 15px;
 }
  .choose{
     width: 100%;
     height: 30px;
     display: flex;
 } 
 .choose-title{
     margin-left: 115px;
     margin-top: 5px;
     font-weight: bold;
 }
 .choose-image{
     margin-left: 120px;
     margin-top: 10px;
 }   
 .bg{
     width: 100%;
     height: 70px;
     margin-top: 10px;
     display: flex;
     background-color: #49cdc2;
 } 
 .bg-title{
     color: #FFFFFF;
     margin-left: 10px;
     margin-top: 10px;
 }
 .bg-title1{
     color: #FFFFFF;
     font-size: 11px;
     margin-left: 20px;
     margin-top: 12px;
 }
 .title1{
     width: 330px;
     height: 40px;
     margin-top: -40px;
     background-color: #FFFFFF;
     margin-left: 20px;
     border-radius: 5px;
     box-shadow:rgba(0,0,0,.3) 0px 0px 2px;
 }
 .title1-text{
     color: #74c7b2;
     padding-top: 8px;
 }
 .title2{
     width: 330px;
     height: 40px;
     background-color: #FFFFFF;
     margin-left: 20px;
     border-radius: 5px;
     box-shadow:rgba(0,0,0,.3) 0px 0px 2px;
 }
 .title2-text{
     color: #74c7b2;
     padding-top: 8px;
 }
 .title3{
     width: 330px;
     height: 40px;
     background-color: #FFFFFF;
     margin-left: 20px;
     border-radius: 5px;
     box-shadow:rgba(0,0,0,.3) 0px 0px 2px;
 }
 .title3-text{
     color: #74c7b2;
     padding-top: 8px;
 }
 .title4{
     width: 330px;
     height: 40px;
     background-color: #FFFFFF;
     margin-left: 20px;
     border-radius: 5px;
     box-shadow:rgba(0,0,0,.3) 0px 0px 2px;
 }
 .title4-text{
     color: #74c7b2;
     padding-top: 8px;
 }
 .title5{
     width: 330px;
     height: 40px;
     background-color: #FFFFFF;
     margin-left: 20px;
     border-radius: 5px;
     box-shadow:rgba(0,0,0,.3) 0px 0px 2px;
 }
 .title5-text{
     color: #74c7b2;
     margin-left: 30px;
     padding-top: 8px;
 }
 .title6{
     width: 330px;
     height: 40px;
     background-color: #FFFFFF;
     margin-left: 20px;
     border-radius: 5px;
     box-shadow:rgba(0,0,0,.3) 0px 0px 2px;
 }
 .title6-text{
     color: #74c7b2;
     padding-top: 8px;
     margin-left: 40px;
 }
 .title7{
     width: 330px;
     height: 40px;
     background-color: #FFFFFF;
     margin-left: 20px;
     border-radius: 5px;
     box-shadow:rgba(0,0,0,.3) 0px 0px 2px;
 }
 .title7-text{
     color: #74c7b2;
     padding-top: 8px;
 }
 .title8{
     width: 330px;
     height: 40px;
     background-color: #FFFFFF;
     margin-left: 20px;
     border-radius: 5px;
     box-shadow:rgba(0,0,0,.3) 0px 0px 2px;
 }
 .title8-text{
     color: #74c7b2;
     padding-top: 8px;
     margin-left: 15px;
 }
</style>