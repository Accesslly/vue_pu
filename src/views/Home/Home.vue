<template>
<div>
    <!-- 搜索框 -->
    <div class="top">
    <div class="search">
        <van-search shape="round" v-model="value" placeholder="搜索活动、部落" right-icon="scan"/>
    </div>
    <div class="code">
        <img src="../../assets/image/二维码.png" alt="二维码">
    </div>
    </div>

    <!-- 图片 -->
    <div class="image">
       <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../../assets/image/轮播.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/image/轮播1.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/image/轮播2.png" alt=""></van-swipe-item>
        </van-swipe>
    </div>

    <!-- 功能 -->
    <div class="feature">
        <!-- 兼职实习 -->
        <div class="practice">
            <div class="practice-logo">
                <img class="practice-image" src="../../assets/image/兼职学习.png" alt="兼职实习"><br>
            </div>
            <div class="practice-title">
                <p>兼职实习</p>
            </div>
        </div>

        <!-- 学分申请 -->
        <div class="application">
            <div class="application-logo">
                <img class="application-image" src="../../assets/image/学分申请.png" alt="学分申请"><br>
            </div>
            <div class="application-title">
                <p>学分申请</p>
            </div>
        </div>

        <!-- 我的学分 -->
        <div class="credit">
            <div class="credit-logo">
                <img class="credit-image" src="../../assets/image/我的学分.png" alt="我的学分"><br>
            </div>
            <div class="credit-title">
                <p>我的学分</p>
            </div>
        </div>

        <!-- 活动日历 -->
        <div class="activity">
            <div class="activity-logo">
                <img class="activity-image" src="../../assets/image/活动日历.png" alt="活动日历"><br>
            </div>
            <div class="activity-title">
                <p>活动日历</p>
            </div>
        </div>

        <!-- 部落 -->
        <div class="tribe">
            <div class="tribe-logo">
                <img class="tribe-image" src="../../assets/image/部落 .png" alt="部落"><br>
            </div>
            <div class="tribe-title">
                <p>部落</p>
            </div>
        </div>
    </div>
    <div class="feature1">
        <!-- 福利中心 -->
        <div class="welfare">
            <div class="welfare-logo">
                <img class="welfare-image" src="../../assets/image/福利中心.png" alt="福利中心"><br>
            </div>
            <div class="welfare-title">
                <p>福利中心</p>
            </div>
        </div>

        <!-- 聚裂商城 -->
        <div class="mall">
            <div class="mall-logo">
                <img class="mall-image" src="../../assets/image/聚裂商城.png" alt="聚裂商城"><br>
            </div>
            <div class="mall-title">
                <p>聚裂商城</p>
            </div>
        </div>

         <!-- 更多应用 -->
        <div class="more">
            <div class="more-logo">
                <img class="more-image" src="../../assets/image/更多应用.png" alt="更多应用"><br>
            </div>
            <div class="more-title">
                <p>更多应用</p>
            </div>
        </div>
    </div>

    <!-- 通知 -->
    <div class="notice">
        <div class="notice-color"><p class="tip">通知</p></div>
        <div class="notice-title"><p>PU6.7.3版本更新说明</p></div>
        <div class="notice-more"><img src="../../assets/image/更多.png" alt="更多"></div>
    </div>

    <!-- 本校活动 -->
    <div class="organization">
        <div class="organization-top">
            <div class="organization-title"><p>本校活动</p></div>
            <div class="organization-more"><img src="../../assets/image/更多.png" alt="更多"></div>
        </div>
        <div class="bigd">
        <div class="organization-bottom">
            <img src="../../assets/image/ac1.png" alt="">
            <img src="../../assets/image/ac2.png" alt="">
            <img src="../../assets/image/ac3.png" alt="">
        </div>
        </div>
    </div>

    <!-- 兼职学习 -->
    <div class="job">
         <div class="job-top">
            <div class="job-title"><p>兼职实习</p></div>
            <div class="job-more"><img @click="more" src="../../assets/image/更多.png" alt="更多"></div>
        </div>
        <div class="job-bottom">
            <div class="job1">
                <p class="job1-title">新东方招线上数据资...</p>
                <div class="job1-information">
                    <p class="job1-money">60元/天</p>
                    <img class="job1-image" src="../../assets/image/定位.png" alt="定位"><p class="job1-city">南京</p>
                </div>
            </div>
            <div class="job2">
                <p class="job2-title">招募尤克里里在线作...</p>
                <div class="job2-information">
                    <p class="job2-money">90元/天</p>
                    <img class="job2-image" src="../../assets/image/定位.png" alt="定位"><p class="job1-city">广州</p>
                </div>
            </div>
        </div>
        <div class="job-bottom1">
            <div class="job3">
                <p class="job3-title">招募在家办公电商平...</p>
                <div class="job3-information">
                    <p class="job3-money">90元/天</p>
                    <img class="job3-image" src="../../assets/image/定位.png" alt="定位"><p class="job1-city">成都</p>
                </div>
            </div>
            <div class="job4">
                <p class="job4-title">新东方兼职助教，春...</p>
                <div class="job4-information">
                    <p class="job4-money">90元/天</p>
                    <img class="job4-image" src="../../assets/image/定位.png" alt="定位"><p class="job1-city">上海</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 高校头条 -->
    <div class="headlines">
        <div class="headlines-top">
            <div class="headlines-titles"><p>高校头条</p></div>
            <div class="headlines-more"><img src="../../assets/image/更多.png" alt="更多"></div>
        </div>
        <div class="headlines-information">
            <div>
                <p class="headlines-title">爱喝奶茶女孩注意了！</p>
                <p class="headlines-author">PU口袋校园-PU君              06-08</p>
            </div>
            <div class="headlines-image">
                <img src="../../assets/image/奶茶.png" alt="奶茶">
            </div>
        </div>

        <van-divider />

        <div class="headlines-information1">
            <div>
                <p class="headlines-title1">超短暑假，6天</p>
                <p class="headlines-author1">PU口袋校园-PU君              06-08</p>
            </div>
            <div class="headlines-image1">
                <img src="../../assets/image/时间.png" alt="时间">
            </div>
        </div>

        <van-divider />

        <div class="headlines-information2">
            <div>
                <p class="headlines-title2">微信号终于能改了？</p>
                <p class="headlines-author2">PU口袋校园-PU君              06-08</p>
            </div>
            <div class="headlines-image2">
                <img src="../../assets/image/微信号.png" alt="微信号">
            </div>
        </div>

        <van-divider>我是有底线的</van-divider>
    </div>

</div>
</template>

<script>
export default {
    methods: {
        more(){
            this.$router.push("/practice")
        }
    }
}
</script>

<style>
.top{
    display:flex;
}
.search{
    width:90%;
    border-radius:90px;
}
.code{
    margin-top: 20px;
}
.image{
    width: 330px;
    height: 100px;
    margin-left: 10px;
}
.feature{
    width: 330px;
    height: 60px;
    margin-left: 5px;
    margin-top: 35px;
    display: flex;
}
.practice{
    width: 50px;
    height: 60px;
}
.practice-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#f4f2df;
}
.practice-image{
    margin-top: 7px;
}
.practice-title{
    font-size: 1px;
    margin-top: 5px;
}
.application{
    width: 50px;
    height: 60px;
    margin-left: 20px;
}
.application-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#c3e7fa;
}
.application-image{
    margin-top: 7px;
}
.application-title{
    font-size: 1px;
    margin-top: 5px;
}
.credit{
    width: 50px;
    height: 60px;
    margin-left: 20px;
}
.credit-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#f4f2df;
}
.credit-image{
    margin-top: 7px;
}
.credit-title{
    font-size: 1px;
    margin-top: 5px;
}
.activity{
    width: 50px;
    height: 60px;
    margin-left: 20px;
}
.activity-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#c3e7fa;
}
.activity-image{
    margin-top: 7px;
}
.activity-title{
    font-size: 1px;
    margin-top: 5px;
}
.tribe{
    width: 50px;
    height: 60px;
    margin-left: 20px;
}
.tribe-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#f4e9d6;
}
.tribe-image{
    margin-top: 7px;
}
.tribe-title{
    font-size: 1px;
    margin-top: 5px;
}
.feature1{
    width: 330px;
    height: 60px;
    margin-left: 5px;
    margin-top: 10px;
    display: flex;
}
.welfare{
    width: 50px;
    height: 60px;
}
.welfare-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#f9e7e9;
}
.welfare-image{
    margin-top: 7px;
}
.welfare-title{
    font-size: 1px;
    margin-top: 5px;
}
.mall{
    width: 50px;
    height: 60px;
    margin-left: 20px;
}
.mall-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#f9e7e9;
}
.mall-image{
    margin-top: 7px;
}
.mall-title{
    font-size: 1px;
    margin-top: 5px;
}
.more{
    width: 50px;
    height: 60px;
    margin-left: 20px;
}
.more-logo{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 4px;
    background-color:#f4f2df;
}
.more-image{
    margin-top: 7px;
}
.more-title{
    font-size: 1px;
    margin-top: 5px;
}
.notice{
    align-items: center;
    width: 330px;
    height: 30px;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
}
.notice-color{
    width: 35px;
    height: 15px;
    background-color: #e0620d;
    border-radius: 50px;
}
.tip{
    font-size: 10px;
    align-items: center;
    margin-top:0px; 
    color: #FFFFFF;
}
.notice-title{
    font-size: 10px;
}
.notice-more{
    margin-left: 165px;
}
.organization{
    height: 150px;
    margin-left: 5px;
    width: 330px;
}
.organization-top{
    display: flex;
}
.organization-title{
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
}
.organization-more{
    margin-left: 230px;
    margin-top: 15px;
}
.bigd{
    overflow-x: scroll;
    width: 300px;
    height: 80px;
}
.organization-bottom{
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
    width: 300px;
    height: 80px;
    margin-left: 10px;
    float: left;
    display: flex;
}
.organization-information{
    margin-left: 10px;
}
.class{
    font-size: 10px;
}
.time{
    font-size: 7px;
    color: #bfbfbf;
    margin-left: -10px;
    margin-top: -5px;
}
.people{
    margin-left: -40px;
    font-size: 7px;
    color: #bfbfbf;
}
.organization-image{
    width: 70px;
    height: 70px;
    margin-top: 5px;
    margin-left: 120px;
}
.job{
    height: 240px;
    margin-left: 5px;
    width: 330px;
}
.job-top{
    display: flex;
}
.job-title{
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
}
.job-more{
    margin-left: 230px;
    margin-top: 15px;
}
.job-bottom{
    width: 300px;
    height: 80px;
    margin-left: 10px;
    display: flex;
}
.job1{
    height: 60px;
    width: 140px;
    margin-left: 5px;
    margin-top: 5px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.job1-title{
    font-size: 13px;
}
.job1-information{
    display: flex;
    margin-top: -10px;
}
.job1-money{
    font-size: 8px;
    margin-left: 5px;
    color: #ea9518;
}
.job1-image{
    margin-left: 60px;
    margin-top: 7px;
    height: 15px;
}
.job1-city{
    font-size: 8px;
    color: #bfbfbf;
}
.job2{
    height: 60px;
    width: 140px;
    margin: 5px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.job2-title{
    font-size: 13px;
}
.job2-information{
    display: flex;
    margin-top: -10px;
}
.job2-money{
    font-size: 8px;
    margin-left: 5px;
    color: #ea9518;
}
.job2-image{
    margin-left: 60px;
    height: 15px;
    margin-top: 7px;
}
.job2-city{
    font-size: 8px;
    color: #bfbfbf;
}
.job-bottom1{
    width: 300px;
    height: 80px;
    margin-left: 10px;
    display: flex;
}
.job3{
    height: 60px;
    width: 140px;
    margin-left: 5px;
    margin-top: 5px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.job3-title{
    font-size: 13px;
}
.job3-information{
    display: flex;
    margin-top: -10px;
}
.job3-money{
    font-size: 8px;
    margin-left: 5px;
    color: #ea9518;
}
.job3-image{
    margin-left: 60px;
    height: 15px;
    margin-top: 7px;
}
.job3-city{
    font-size: 8px;
    color: #bfbfbf;
}
.job4{
    height: 60px;
    width: 140px;
    margin: 5px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.job4-title{
    font-size: 13px;
}
.job4-information{
    display: flex;
    margin-top: -10px;
}
.job4-money{
    font-size: 8px;
    margin-left: 5px;
    color: #ea9518;
}
.job4-image{
    margin-left: 60px;
    height: 15px;
    margin-top: 7px;
}
.job4-city{
    font-size: 8px;
    color: #bfbfbf;
}
.headlines{
    height: 150px;
    margin-left: 5px;
    width: 330px;
}
.headlines-top{
    display: flex;
}
.headlines-titles{
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
}
.headlines-more{
    margin-left: 230px;
    margin-top: 15px;
}
.headlines-information{
    width: 330px;
    height: 100px;
    display: flex;
}
.headlines-title{
    margin-left: 10px;
    font-size: 13px;
}
.headlines-author{
    font-size: 10px;
    color: #bfbfbf;
}
.headlines-image{
    width: 70px;
    height: 50px;
    margin-top: 15px;
    margin-left: 110px;
}
.headlines-information1{
    width: 330px;
    height: 100px;
    margin-top: -20px;
    display: flex;
}
.headlines-title1{
    font-size: 13px;
}
.headlines-author1{
    font-size: 10px;
    color: #bfbfbf;
    margin-left: 10px;
}
.headlines-image1{
    width: 70px;
    height: 50px;
    margin-top: 15px;
    margin-left: 130px;
}
.headlines-information2{
    margin-top: -20px;
    width: 330px;
    height: 100px;
    display: flex;
}
.headlines-title2{
    font-size: 13px;
    margin-left: 10px;
}
.headlines-author2{
    font-size: 10px;
    color: #bfbfbf;
    margin-left: 10px;
}
.headlines-image2{
    width: 70px;
    height: 69px;
    margin-top: 5px;
    margin-left: 130px;
}
</style>