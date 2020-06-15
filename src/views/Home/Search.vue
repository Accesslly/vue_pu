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

    <!-- 搜索  -->
    <div class="search">
        <img class="search-icon" @click="back" src="../../assets/image/返回1.png" alt="">
        <p class="search-title">搜索职位名称</p>
        <img class="search-icon1" src="../../assets/image/搜索1.png" alt="">
    </div>

    <!-- 工资 -->
    <div class="limit">
        <p class="limit1">不限</p>
        <p class="limit2">0K-10K</p>
        <p class="limit3">学历要求</p>
    </div>

    <!-- 期待工作城市 -->
    <div class="city">
        <div class="city-left">
            <p class="city-work">期望工作城市</p>
            <div class="city-work2"></div>
            <p class="city-work1">不限</p>
        </div>
        <div class="city-modify">
            <p class="city-modify1">更改 ></p>
        </div>
    </div>

    <!-- 岗位类型 -->
     <div class="job">
         <div class="job-top">
             <p class="job-kind">岗位类型</p>
         </div>
         <div class="job1">
         <div class="job-bottom">
             <div class="job-border">
                 <p class="job-title">全部</p>
             </div>
         </div>
          <div class="job-bottom">
             <div class="job-border1">
                 <p class="job-title1">兼职</p>
             </div>
         </div>
          <div class="job-bottom">
             <div class="job-border2">
                 <p class="job-title2">全职</p>
             </div>
         </div>
         </div>
    </div>

    <!-- 月薪范围 -->
    <div class="money">
        <p class="money-title">月薪范围</p>
       <img src="../../assets/image/进度条.png" alt="">
    </div>

    <!-- 学历要求 -->
     <div class="job">
         <div class="job-top">
             <p class="job-kind">岗位类型</p>
         </div>
         <div class="job1">
         <div class="job-bottom">
             <div class="job-border">
                 <p class="job-title">中专</p>
             </div>
         </div>
          <div class="job-bottom">
             <div class="job-border1">
                 <p class="job-title1">大专</p>
             </div>
         </div>
          <div class="job-bottom">
             <div class="job-border2">
                 <p class="job-title2">本科</p>
             </div>
         </div>
         </div>
          <div class="job1">
         <div class="job-bottom">
             <div class="job-border">
                 <p class="job-title">硕士</p>
             </div>
         </div>
          <div class="job-bottom">
             <div class="job-border1">
                 <p class="job-title1">博士</p>
             </div>
         </div>
          <div class="job-bottom">
             <div class="job-border2">
                 <p class="job-title2">不限</p>
             </div>
         </div>
         </div>
    </div>

    <div class="button">
        <p class="title">确认筛选条件</p>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('/practice')
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
 .search{
     width: 100%px;
     height: 40px;
     display: flex;
 }
 .search-icon{
     margin-left: 10px;
     margin-top: 20px;
 }
 .search-title{
     font-size: 12px;
     color: #bfbfbf;
     margin-top: 20px;
     margin-left: 118px;
 }
 .search-icon1{
     margin-left: 118px;
     margin-top: 20px;
 }
 .limit{
     width: 100%;
     height: 40px;
     margin-top: 10px;
     display: flex;
 }
 .limit1{
     margin-left: 30px;
 }
 .limit2{
     margin-left: 80px;
     margin-top: 20px;
 }
 .limit3{
     margin-left: 80px;
 }
 .city{
     width: 100%;
     height: 80px;
     display: flex;
 }
 .city-work{
     margin-left: 15px;
 }
 .city-work1{
     margin-top: -22px;
     margin-left: 15px;
 }
 .city-work2{
     height: 20px;
     width: 50px;
     margin-left: 40px;
     border: 1px solid black;
 }
 .city-modify1{
     color: #f66140;
     margin-left: 190px;
     margin-top: 50px;
 }
 .job{
     width: 100%;
     margin-top: 40px;
     height: 80px;
 }
 .job-top{
     width: 100%px;
     height: 20px;
 }
 .job-kind{
     margin-left: -260px;
 }
 .job1{
     display: flex;
 }
 .job-bottom{
     display: flex;
 }
 .job-border{
     width: 70px;
     height: 20px;
     margin-top: 20px;  
     margin-left: 40px;
     border: 1px solid black;
 }
 .job-title{
     margin-top: 0px;
 }.job-border1{
     width: 70px;
     height: 20px;
     margin-top: 20px;  
     margin-left: 40px;
     border: 1px solid #bfbfbf;
 }
 .job-title1{
     margin-top: 0px;
     color: #bfbfbf;
 }
 .job-border2{
     width: 70px;
     height: 20px;
     margin-top: 20px;  
     margin-left: 40px;
     border: 1px solid #bfbfbf;
 }
 .job-title2{
     color: #bfbfbf;
     margin-top: 0px;
 }
 .money{
     width: 100%;
     height: 110px;
 }
 .money-title{
     margin-left: -260px;
 }
.button{
    height: 40px;
    width: 200px;
    margin-top: 80px;
    margin-left: 80px;
    border-radius: 10px;
    background-color: #f66140;
}
.title{
    color: #FFFFFF;
    padding-top: 10px;
    font-weight: bold;
}
</style>