<template>
<div>   
     <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <img class="top-close" src="../../assets/image/关闭.png" alt="">
        <p class="top-title">健康打卡</p>
        <img class="top-refresh" src="../../assets/image/刷新.png" alt="">
    </div>
    <hr>

    <p class="time">2020-06-15</p>   
    <div class="status">
        <p class="status-title">正常</p>
    </div> 
    <div class="temperature">
        <img src="../../assets/image/温度.png" alt="">
    </div>
    <div class="tip">
        <p class="tip-title">看起来一切正常，记得明天坚持打卡哦~</p>
    </div>
    <div class="city">
        <div> <img class="city1" src="../../assets/image/定位1.png" alt=""></div>
        <p class="city2">江苏省南京市</p>
        <div class="city3">
            <p class="city4">重新定位</p>
        </div>
    </div>
    <div class="punch">
        <p class="punch-title">立即打卡</p>
    </div>
    <div class="history">
        <div class="history1">
            <p class="history-title">打卡记录</p>
            <p class="history-title1">累计</p>
            <div class="history-border">
                <p class="history-title2">0</p>
            </div>
            <p class="history-title3">天</p>
        </div>
        <van-divider />
    </div>
    <img class="bottom" src="../../assets/image/打卡图.png" alt="">
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
 .status{
     width: 40px;
     height: 20px;
     margin-left: 280px;
     border-radius: 25px;
     background-color: #6eb2fa;
 }
 .status-title{
     font-size: 12px;
     color: #FFFFFF;
 }
 .temperature{
     width: 300px;
     height: 70px;
     margin-left: 40px;
 }
 .tip{
     width: 270px;
     height: 20px;
     margin-left: 45px;
     border-radius: 25px;
     background-color:  #6eb2fa;
 }
 .tip-title{
     font-size: 12px;
     color: #FFFFFF;
 }
 .city{
     width: 100%;
     height: 30px;
     display: flex;
     margin-top: 15px;
 }
 .city1{
     margin-left: 100px;
     margin-top: 10px;
 }
 .city2{
     font-size: 12px;
     margin-top: 10px;
     margin-left: 5px;
 }
 .city3{
     width: 60px;
     height: 15px;
     margin-top: 10px;
     margin-left: 10px;
     border-radius: 25px;
     border: 1px solid #bfbfbf;
 }
 .city4{
     font-size: 12px;
     color: #bfbfbf;
     margin-top: -2px;
 }
 .punch{
     width: 330px;
     height: 40px;
     border-radius: 15px;
     margin-left: 15px;
     margin-top: 10px;
     background-color: #01a7f7;
 }
 .punch-title{
     color: #FFFFFF;
     padding-top: 10px;
 }
 .history{
     width: 330px;
     height: 300px;
     margin-left: 15px;
     margin-top: 10px;
     border-radius: 10px;
     box-shadow:rgba(0,0,0,0.5) 0px 0px 2px;
 }
 .history1{
     display: flex;
     width: 330px;
     height: 50px;
 }
 .history-title{
     font-weight: bold;
     margin-left: 5px;
 }
 .history-title1{
     font-size: 12px;
     padding-top: 5px;
     margin-left: 190px;
 }
 .history-border{
     width: 20px;
     height: 20px;
     border-radius: 50%;
     margin-top: 12px;
     background-color: #01a7f7;
 }
 .history-title2{
     color: #FFFFFF;
     margin-top: 0px;
 }
 .history-title3{
     font-size: 12px;
     padding-top: 5px;
 }
 .bottom{
     margin-top: 15px;
 }
</style>