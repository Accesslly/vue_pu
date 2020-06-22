<template>
<div>
    <!-- 顶部     -->
    <div class="top">
        <div><img class="top-return" @click="back" src="../../assets/image/实习返回.png" alt=""></div>
        <div><img class="top-close" src="../../assets/image/实习关闭.png" alt=""></div> 
        <p class="top-title">学分申请</p>
        <div><img class="top-refresh" src="../../assets/image/实习刷新.png" alt=""></div>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

    <!-- 申请学分记录     -->
    <div class="record">
        <img src="../../assets/image/申请学分记录.png" alt="">
    </div>

    <!-- 申请活动学分 -->
    <div class="activity">
        <p class="activity-title">申请活动学分</p>
    </div>
    <div class="grow">
        <p class="grow-title">思想成长</p>
    </div>
    <div class="project1">
        <p class="project1-title">【项目1】青马工厂女工、学生干部培训班</p>
    </div>
    <div class="project2">
        <p class="project2-title">【项目2】思想引领讲座、活动</p>
    </div>
    <div class="practice">
        <p class="practice-title">社会实践</p>
    </div>
    <div class="project3">
        <p class="project3-title">【项目1】学生干部任职</p>
    </div>
    <div class="project4">
        <p class="project4-title">【项目2】寒暑假社会实践</p>
    </div>
     <div class="project5">
        <p class="project5-title">【项目3】参加社团协会</p>
    </div>
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
 .record{
     width: 330px;
     height: 70px;
     margin-left: 15px;
      box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .activity{
     width: 330px;
     height: 40px;
     margin-top: 15px;
     margin-left: 15px;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .activity-title{
    font-weight: bold;
    margin-left: -200px;
    padding-top: 10px;
 }
 .grow{
     width: 330px;
     height: 40px;
     margin-top: -12px;
     margin-left: 15px;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .grow-title{
    margin-left: -240px;
    padding-top: 13px;
    font-size: 13px;
 }
 .project1{
     width: 330px;
     height: 40px;
     margin-top: -15px;
     margin-left: 15px;
     background-color: #fafafa;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .project1-title{
    margin-left: -60px;
    font-size: 13px;
    padding-top: 13px;
 }
  .project2{
     width: 330px;
     height: 40px;
     margin-top: -15px;
     margin-left: 15px;
     background-color: #fafafa;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .project2-title{
    margin-left: -125px;
    font-size: 13px;
    padding-top: 13px;
 }
 .practice{
     width: 330px;
     height: 40px;
     margin-top: -12px;
     margin-left: 15px;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .practice-title{
    margin-left: -240px;
    padding-top: 13px;
    font-size: 13px;
 }
 .project3{
     width: 330px;
     height: 40px;
     margin-top: -15px;
     margin-left: 15px;
     background-color: #fafafa;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .project3-title{
    margin-left: -165px;
    font-size: 13px;
    padding-top: 13px;
 }
 .project4{
     width: 330px;
     height: 40px;
     margin-top: -15px;
     margin-left: 15px;
     background-color: #fafafa;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .project4-title{
    margin-left: -150px;
    font-size: 13px;
    padding-top: 13px;
 }
 .project5{
     width: 330px;
     height: 40px;
     margin-top: -15px;
     margin-left: 15px;
     background-color: #fafafa;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .project5-title{
    margin-left: -165px;
    font-size: 13px;
    padding-top: 13px;
 }
</style>