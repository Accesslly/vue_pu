<template>
<div> 
    <!-- 顶部      -->
    <div class="top">
        <div class="click">
            <div class="set" @click="set"><img class="set-image" src="../../assets/image/设置.png" alt=""></div>
            <div class="code"><img class="set-image" src="../../assets/image/二维码1.png" alt=""></div>
        </div>

        <div class="person">
            <van-image @click="person" round width="60px" height="60px" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <p class="person-name">张三_1802783112</p>
            <p class="person-number">UID:9147786</p>
            <img src="../../assets/image/fen.png" alt="">
        </div>
    </div>  

    <!-- 我的财富 -->
    <div class="wealth">
        <p class="wealth-title">我的财富</p>
        <van-divider />
        <div class="wealth-features">
            <div class="wealth-center">
                <div class="wealth-bg">
                    <img class="wealth-image" src="../../assets/image/礼盒.png" alt="">
                </div>
                <p class="wealth-text">福利中心</p>
            </div>
            <div class="wealth-careful">
                <div class="wealth-bg1">
                    <img class="wealth-image1" src="../../assets/image/说明.png" alt="">
                </div>
                <p class="wealth-text1">兑换明细</p>
            </div>
        </div>
    </div>

    <!-- 我的PU -->
    <div class="pu">
        <p class="pu-title">我的PU</p>
        <van-divider />
        <div class="pu-features">
            <div class="pu-collect">
                <div class="pu-collect-bg">
                    <img class="pu-collect-image" src="../../assets/image/收藏.png" alt="">
                </div>
                <p class="pu-collect-text">收藏</p>
            </div>
            <div class="pu-tribe" @click="join">
                <div class="pu-tribe-bg">
                    <img class="pu-tribe-image" src="../../assets/image/30创建部落.png" alt="">
                </div>
                <p class="pu-tribe-text">部落</p>
            </div>
            <div class="pu-activity">
                <div class="pu-activity-bg">
                    <img class="pu-activity-image" src="../../assets/image/活动.png" alt="">
                </div>
                <p class="pu-activity-text">活动</p>
            </div>
            <div class="pu-application">
                <div class="pu-application-bg">
                    <img class="pu-application-image" src="../../assets/image/申请单.png" alt="">
                </div>
                <p class="pu-application-text">申请</p>
            </div>
        </div>
        <div class="pu-features1">
             <div class="pu-appeal">
                <div class="pu-appeal-bg">
                    <img class="pu-appeal-image" src="../../assets/image/单据申请.png" alt="">
                </div>
                <p class="pu-appeal-text">申诉</p>
            </div>
            <div class="pu-credit">
                <div class="pu-credit-bg">
                    <img class="pu-credit-image" src="../../assets/image/学分.png" alt="">
                </div>
                <p class="pu-credit-text">我的学分</p>
            </div>
            <div class="pu-label">
                <div class="pu-label-bg">
                    <img class="pu-label-image" src="../../assets/image/符号-标签.png" alt="">
                </div>
                <p class="pu-label-text">标签</p>
            </div>
            <div class="pu-service" @click="service">
                <div class="pu-service-bg">
                    <img class="pu-service-image" src="../../assets/image/客服.png" alt="">
                </div>
                <p class="pu-service-text">pu客服</p>
            </div>
        </div>
    </div>

    <!-- 我的职场 -->
    <div class="work">
        <p class="work-title">我的职场</p>
        <van-divider />
        <div class="work-features">
            <div class="work-train" @click="train">
                <div class="work-bg">
                    <img class="work-image" src="../../assets/image/培训考试.png" alt="">
                </div>
                <p class="work-text">培训</p>
            </div>
            <div class="work-test">
                <div class="work-bg1">
                    <img class="work-image1" src="../../assets/image/测试.png" alt="">
                </div>
                <p class="work-text1">测评</p>
            </div>
             <div class="work-resume" @click="resume">
                <div class="work-bg2">
                    <img class="work-image2" src="../../assets/image/简历.png" alt="">
                </div>
                <p class="work-text2">简历</p>
            </div>
        </div>
    </div>

    <!-- 我的U值 -->
    <div class="value">
        <div class="value-top">
            <p class="value-title">我的U值</p>
            <img class="value-icon" src="../../assets/image/问号.png" alt="">
        </div>
        <hr>    
        <img src="../../assets/image/雷达.png" alt="">
        <img src="../../assets/image/综合.png" alt="">
    </div>

    
</div>
</template>

<script>
export default {
   data() {
  },
  methods: {
      set(){
          this.$router.push("/set")
      },
      person(){
          this.$router.push("/person")
      },
      train(){
          this.$router.push('/training')
      },
      service(){
          this.$router.push('/service')
      },
      resume(){
          this.$router.push('/resume')
      },
      join(){
          this.$router.push('/join')
      }
  }
}
</script>

<style>
 .top{
     width: 100%;
     height: 200px;
     box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
 }
 .click{
     width: 330px;
     height: 40px;
     margin-left: 15px;
     display: flex;
 }
 .set{
     width: 30px;
     height: 30px;
     margin-top: 5px;
     border-radius: 50%;
 }
 .set-image{
     margin-top: 3px; 
 }
 .code{
     width: 30px;
     height: 30px;
     margin-top: 5px;
     border-radius: 50%;
     margin-left: 270px;
 }   
 .person-name{
     font-size: 12px;
     color: #bfbfbf;
 }
 .person-number{
     font-size: 12px;
     margin-top: -10px;
     color: #bfbfbf;
 }
 .wealth{
     width: 100%;
     height: 120px;
 }
 .wealth-title{
     font-weight: bold;
     margin-left: -220px;
     margin-top: 50px;
 }
 .wealth-features{
     display: flex;
 }
 .wealth-center{
     width: 60px;
     height: 60px;
     margin-top: -15px;
     margin-left: 40px;
 }
 .wealth-bg{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #fceff5;
 }
 .wealth-image{
     margin-top: 5px;
 }
 .wealth-text{
     margin-top: 3px;
     font-size: 10px; 
 }
 .wealth-careful{
     width: 60px;
     height: 60px;
     margin-top: -15px;
     margin-left: 20px;
 }
 .wealth-bg1{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #e8f4fa;
 }
 .wealth-image1{
     margin-top: 5px;
 }
 .wealth-text1{
     margin-top: 3px;
     font-size: 10px; 
 }
 .pu{
     width: 100%;
     height: 160px;
     margin-top: -30px;
 }
 .pu-title{
     font-weight: bold;
     margin-left: -220px;
     margin-top: 50px;
 }
 .pu-features{
     display: flex;
 }
 .pu-collect{
     width: 60px;
     height: 60px;
     margin-top: -20px;
     margin-left: 40px;
 }
 .pu-collect-bg{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .pu-collect-image{
     margin-top: 5px;
 }
 .pu-collect-text{
     margin-top: 3px;
     font-size: 10px; 
 }
 .pu-tribe{
     width: 60px;
     height: 60px;
     margin-top: -20px;
     margin-left: 20px;
 }
 .pu-tribe-bg{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .pu-tribe-image{
     margin-top: 5px;
 }
 .pu-tribe-text{
     margin-top: 3px;
     font-size: 10px; 
 }
 .pu-activity{
     width: 60px;
     height: 60px;
     margin-top: -20px;
     margin-left: 20px;
 }
 .pu-activity-bg{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .pu-activity-image{
     margin-top: 5px;
 }
 .pu-activity-text{
     margin-top: 3px;
     font-size: 10px; 
 }
 .pu-application{
     width: 60px;
     height: 60px;
     margin-top: -20px;
     margin-left: 20px;
 }
 .pu-application-bg{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .pu-application-image{
     margin-top: 5px;
 }
 .pu-application-text{
     margin-top: 3px;
     font-size: 10px; 
 }
 .pu-features1{
     display: flex;
 }
 .pu-appeal{
     width: 60px;
     height: 60px;
     margin-top: 3px;
     margin-left: 40px;
 }
 .pu-appeal-bg{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .pu-appeal-image{
     margin-top: 5px;
 }
 .pu-appeal-text{
     margin-top: 3px;
     font-size: 10px; 
 }
 .pu-credit{
     width: 60px;
     height: 60px;
     margin-top: 3px;
     margin-left: 20px;
 }
 .pu-credit-bg{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .pu-credit-image{
     margin-top: 5px;
 }
 .pu-credit-text{
     margin-top: 3px;
     font-size: 10px; 
 }
 .pu-label{
     width: 60px;
     height: 60px;
     margin-top: 3px;
     margin-left: 20px;
 }
 .pu-label-bg{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .pu-label-image{
     margin-top: 5px;
 }
 .pu-label-text{
     margin-top: 3px;
     font-size: 10px; 
 }
 .pu-service{
     width: 60px;
     height: 60px;
     margin-top: 3px;
     margin-left: 20px;
 }
 .pu-service-bg{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .pu-service-image{
     margin-top: 5px;
 }
 .pu-service-text{
     margin-top: 3px;
     font-size: 10px; 
 }
 .work{
     width: 100%;
     height: 120px;
     margin-top: -30px;
 }
 .work-title{
     font-weight: bold;
     margin-left: -220px;
     margin-top: 50px;
 }
 .work-features{
     display: flex;
 }
 .work-train{
     width: 60px;
     height: 60px;
     margin-top: -15px;
     margin-left: 40px;
 }
 .work-bg{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .work-image{
     margin-top: 5px;
 }
 .work-text{
     margin-top: 3px;
     font-size: 10px; 
 }
 .work-test{
     width: 60px;
     height: 60px;
     margin-top: -15px;
     margin-left: 20px;
 }
 .work-bg1{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .work-image1{
     margin-top: 5px;
 }
 .work-text1{
     margin-top: 3px;
     font-size: 10px; 
 }
 .work-resume{
     width: 60px;
     height: 60px;
     margin-top: -15px;
     margin-left: 20px;
 }
 .work-bg2{
     width: 25px;
     height: 25px;
     border-radius: 50%;
     margin-left: 18px;
     margin-top: 10px;
     background-color: #f5f5f5;
 }
 .work-image2{
     margin-top: 5px;
 }
 .work-text2{
     margin-top: 3px;
     font-size: 10px; 
 }
 .value{
     width: 100%;
     height: 420px;
 }
 .value-title{
     font-weight: bold;
     margin-left: 40px;
     margin-top: 10px;
 }
 .value-top{
     display: flex;
     width: 100%;
     height: 30px;
 }
 .value-icon{
     margin-left: 210px;
     margin-top: 12px;
 }
</style>