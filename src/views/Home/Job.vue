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
    <!-- 职位详情 -->
    <div class="choose">
        <img @click="back" src="../../assets/image/实习返回.png" alt="">
        <p class="choose-title">职位详情</p>
        <img class="choose-image" src="../../assets/image/更多资料.png" alt="">
    </div>

    <div class="bg"></div>

    <!-- 南京家教兼职 -->
    <div class="job">
        <div class="job-left">
            <p class="job-title">南京家教兼职</p>
            <p class="job-title1">招聘人数：若干人</p>
            <p class="job-title2">南京   鼓楼区   学校周边就近安排</p>
        </div>
        <div class="job-right">
            <div class="job-border">
                <p class="job-title3">元/</p>
            </div>
        </div>
    </div>

    <div class="bg1"></div>

    <!-- 工作流程 -->
    <div class="work">
        <p class="work-title">工作流程</p>
        <img src="../../assets/image/流程图.png" alt="">
    </div>

    <div class="bg2"></div>

    <!-- 公司 -->
    <div class="company">
        <div class="company-image"> <img src="../../assets/image/公司.png" alt=""></div>
        <p class="company-title">广州学求易教育咨询有限公司</p>
    </div>

    <div class="bg3"></div>

    <!-- 职位描述 -->
    <div class="description">
        <div class="description1">
            <img class="description1-icon" src="../../assets/image/行程描述.png" alt="">
            <p class="description1-title">职位描述</p>
        </div>
        <div class="description2">
            <div class="description2-left">
                <p class="description2-left1">薪资水平：/</p>
                <p class="description2-left2">招聘人数：若干</p>
            </div>
            <div class="description2-right">
                <p class="description2-right1">性别要求：</p>
                <p class="description2-right2">已报名数：</p>
            </div>
        </div>
        <div class="task">
            <p class="task-title">工作职责：</p>
            <p class="task-title1">工作职责：</p>
            <p class="task-title2">1、按照公司指定的教案辅导学生，进行课程讲授</p>
            <p class="task-title3">2、督促学生完成作业，及时回答学生对作业的提问</p>
            <p class="task-title4">3、根据要求将辅导情况反馈给教研老师备案</p>
        </div>
    </div>

     <div class="bg"></div>

     <div class="bottom">
         <div class="bottom1">
             <img class="bottom1-icon" src="../../assets/image/收藏1.png" alt="">
             <p class="bottom1-title">收藏</p>
         </div>
         <div class="bottom2">
             <img class="bottom2-icon" src="../../assets/image/分享1.png" alt="">
             <p class="bottom2-title">分享</p>
         </div>
         <div class="bottom3"></div>
         <p class="send">立即投递</p>
     </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('practice')
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
     margin-left: 127px;
     margin-top: 5px;
     font-weight: bold;
 }
 .choose-image{
     margin-left: 120px;
     margin-top: 10px;
 }  
 .bg{
     width: 100%;
     height: 1px;
     margin-top: 5px;
     background-color: #f0f0f0;
 } 
 .job{
     width: 100%;
     height: 120px;
     display: flex;
 }
 .job-left{
     margin-left: 15px;
 }
 .job-title{
     margin-left: -70px;
 }
 .job-title1{
     margin-left: -70px;
     color: #bfbfbf;
     font-size: 12px;
 }
 .job-title2{
     font-size: 12px;
     color: #bfbfbf;
 }
 .job-border{
     width: 80px;
     height: 100px;
     border: 1px solid #bfbfbf;
     margin-left: 80px;
     margin-top: 5px;
 }
 .job-title3{
     font-size: 12px;
     color: #bfbfbf;
     margin-top: 75px;
 }
 .bg1{
     width: 100%;
     height: 10px;
     background-color: #f8faf9;
 }
 .work{
     width: 100%;
     height: 180px;
     margin-top: -15px;
     background-color: #f9fdfe;
 }
 .work-title{
     margin-left: -270px;
 }
 .bg2{
     width: 100%;
     height: 10px;
     background-color: #f8faf9;
 }
 .company{
     width: 100%;
     height: 90px;
     display: flex;
 }
 .company-image{
     width: 70px;
     height: 70px;
     margin-top: 10px;
     margin-left: 15px;
 }
 .company-title{
     margin-top: 35px;
     margin-left: 10px;
 }
 .bg3{
     width: 100%;
     height: 10px;
     background-color: #f8faf9;
 }
 .description{
     width: 100%;
     height: 270px;
 }
 .description1{
     width: 100%;
     height: 40px;
     display: flex;
 }
 .description1-icon{
     margin-top: 20px;
     margin-left: 15px;
 }
 .description1-title{
     font-weight: bold;
     margin-left: 5px;
     margin-top: 20px;
 }
 .description2{
     width: 100%;
     height: 70px;
     display: flex;
 }
 .description2-left{
     margin-left: 0px;
 }
 .description2-left1{
     font-size: 12px;
 }
 .description2-left2{
     font-size: 12px;
     margin-left: 20px;
 }
 .description2-right1{
     font-size: 12px;
     margin-left: 90px;
 }
 .description2-right2{
     font-size: 12px;
     margin-left: 90px;
 }
 .time{
     font-size: 12px;
 }
 .task{
     width: 100%;
     height: 150px;
 }
 .task-title{
     margin-left: -250px;
     font-weight: bold;
 }
 .task-title1{
     font-size: 12px;
     margin-left: -250px;
 }
 .task-title2{
     font-size: 12px;
     margin-left: -50px;
 }
 .task-title3{
     font-size: 12px;
     margin-left: -40px;
 }
 .task-title4{
     font-size: 12px;
     margin-left: -80px;
 }
 .bottom{
     width: 100%;
     height: 60px;
     display: flex;
 }
 .bottom1{
     margin-left: 30px;
 }
 .bottom1-icon{
     margin-top: 10px;
 }
 .bottom1-title{
     margin-top: -10px;
     font-size: 12px;
     color: #bfbfbf;
 }
 .bottom2{
     margin-left: 30px;
     margin-top: 5px;
 }
 .bottom2-icon{
     margin-top: 10px;
 }
 .bottom2-title{
     margin-top: -7px;
     font-size: 12px;
     color: #bfbfbf;
 }
 .bottom3{
     width: 170px;
     height: 30px;
     border-radius: 5px;
     margin-left: 35px;
     margin-top: 10px;
     background-color: #fd7837;
 }
 .send{
     font-size: 12px;
     color: #FFFFFF;
     margin-left: -110px;
     margin-top: 15px;
 }
</style>