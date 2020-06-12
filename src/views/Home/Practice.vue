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

    <!-- 搜索 -->
    <div class="search">
        <div class="city" @click="city">
            <p class="city-title">苏州</p>
            <img class="city-pull" src="../../assets/image/下拉1.png" alt="">
        </div>
        <van-search class="search-border" shape="round" v-model="value" placeholder="搜索职位"/>
    </div>

    <!-- 图片 -->
    <img class="image" src="../../assets/image/兼职岗位.png" alt="">

    <!-- 兼职 -->
    <div class="kind">
        <div class="money">
            <div class="money-title">
                 <p class="money-title1">高新兼职</p>
                 <p class="money-title2">海量岗位</p>
                 <p class="money-title3">极速结算</p>
            </div>
           <div class="money-image">
               <img src="../../assets/image/高薪兼职.png" alt="">
           </div>
        </div>
         <div class="holiday">
            <div class="holiday-title">
                 <p class="holiday-title1">假期实习</p>
                 <p class="holiday-title2">名企直聘</p>
                 <p class="holiday-title3">全国可选</p>
            </div>
           <div class="holiday-image">
               <img src="../../assets/image/假期实习.png" alt="">
           </div>
        </div>
    </div>
     <div class="kind">
        <div class="money" @click="raiders">
            <div class="money-title">
                 <p class="money-title1">求职攻略</p>
                 <p class="money-title2">最新干货</p>
                 <p class="money-title3">职场必备</p>
            </div>
           <div class="money-image">
               <img src="../../assets/image/求职攻略.png" alt="">
           </div>
        </div>
         <div class="holiday">
            <div class="holiday-title">
                 <p class="holiday-title1">我的消息</p>
                 <p class="holiday-title2">我的消息</p>
                 <p class="holiday-title3">及时知晓</p>
            </div>
           <div class="holiday-image">
               <img src="../../assets/image/我的消息.png" alt="">
           </div>
        </div>
    </div>

    <!-- 热门推荐 -->
    <div class="recommend">
        <div class="fire">
            <img class="fire-image" src="../../assets/image/火.png" alt="">
            <p class="fire-title">热门推荐</p>
        </div>
        <van-divider />
        <div class="job">
            <div class="job-left">
                <p class="job-title">南京家教兼职</p>
                <p class="job-company">广州学求易教育咨询有限公司</p>
                <div class="job-box"></div>
                <p class="job-education">本科</p>
            </div>
            <div class="job-right">
                <p class="job-money">2K-4K/月</p>
                <p class="job-address">南京  |  鼓楼区</p>
                <p class="job-time">2020-05-26</p>
            </div>
        </div>
        <div class="job1">
            <div class="job-left1">
                <p class="job-title1">闪电论文招募线上校园大使</p>
                <p class="job-company1">18824684876</p>
                <div class="job-box1"></div>
                <p class="job-education1">大专</p>
            </div>
            <div class="job-right1">
                <p class="job-money1">380元/天</p>
                <p class="job-address1">青岛</p>
                <p class="job-time1">2020-03-15</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push("/home")
        },
        city(){
            this.$router.push("/city")
        },
        raiders(){
            this.$router.push('/raiders')
        }
    }
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
     width: 100%;
     height: 40px;
     display: flex;
 }
 .city{
     display: flex;
 }
 .city-title{
     font-weight: bold;
     margin-left: 10px;
 }
 .city-pull{
     margin-left: 5px;
     margin-top: 15px;
 }
 .search-border{
     margin-left: 60px;
     height: 20px;
     width: 230px;
     margin-top: 10px;
 }
 .image{
     margin-top: 10px;
 }
 .kind{
     width: 100%;
     height: 110px;
     display: flex;
 }
 .money{
     width: 150px;
     height: 90px;
     margin-left: 15px;
     margin-top: 10px;
     display: flex;
 }
 .money-title1{
     margin-left: 5px;
 }
.money-title2{
     font-size: 12px;
     color: #bfbfbf;
     margin-top: -10px;
}
.money-title3{
     font-size: 12px;
     color: #bfbfbf;
     margin-top: -10px;
}
.money-image{
    margin-left: 30px;
    margin-top: 20px;
}
.holiday{
     width: 150px;
     height: 90px;
     margin-left: 15px;
     margin-top: 10px;
     display: flex;
 }
.holiday-title1{
     margin-left: 5px;
 }
.holiday-title2{
     font-size: 12px;
     color: #bfbfbf;
     margin-top: -10px;
}
.holiday-title3{
     font-size: 12px;
     color: #bfbfbf;
     margin-top: -10px;
}
.holiday-image{
    margin-left: 30px;
    margin-top: 20px;
}
.recommend{
    width: 100%;
    height: 180px;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.fire{
    width: 100%;
    height: 30px;
    display: flex;
}
.fire-image{
    margin-left:15px;
    margin-top: 5px; 
}
.fire-title{
    font-weight: bold;
    margin-top: 5px;
    margin-left: 10px;
}
.job{
    width: 100%;
    height: 120px;
    margin-top: -10px;
    display: flex;
}
.job-title{
    margin-left: -40px;
}
.job-company{
    font-size: 12px;
    color: #bfbfbf;
    margin-top: -10px;
    margin-left: 20px;
}
.job-box{
    width: 30px;
    height: 15px;
    margin-left: 20px;
    background-color: #ecebeb;
}
.job-education{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: -105px;
    margin-top: -15px;
}
.job-money{
    color: #f96a0a;
    margin-left: 90px;
}
.job-address{
    font-size: 12px;
    margin-top: -10px;
    color: #bfbfbf;
    margin-left: 80px;
}
.job-time{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 80px;
    margin-top: 0px;
}
.job1{
    width: 100%;
    height: 120px;
    margin-top: -10px;
    display: flex;
}
.job-title1{
    margin-left: 15px;
}
.job-company1{
    font-size: 12px;
    color: #bfbfbf;
    margin-top: -10px;
    margin-left: -88px;
}
.job-box1{
    width: 30px;
    height: 15px;
    margin-left: 25px;
    background-color: #ecebeb;
}
.job-education1{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: -128px;
    margin-top: -15px;
}
.job-money1{
    color: #f96a0a;
    margin-left: 65px;
}
.job-address1{
    font-size: 12px;
    margin-top: -10px;
    color: #bfbfbf;
    margin-left: 98px;
}
.job-time1{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 60px;
    margin-top: 0px;
}
</style>