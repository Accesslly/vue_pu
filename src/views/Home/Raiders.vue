<template>
<div> 
    <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <img class="top-close" src="../../assets/image/关闭.png" alt="">
        <p class="top-title">兼职实习</p>
        <img class="top-refresh" src="../../assets/image/刷新.png" alt="">
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

    <!-- 求职攻略     -->
    <div class="choose">
        <img @click="back" src="../../assets/image/返回.png" alt="">
        <p class="choose-title">求职攻略</p>
        <img class="choose-image" src="../../assets/image/更多资料.png" alt="">
    </div>

    <!-- 图片 -->
    <div class="image">
        <img src="../../assets/image/程序员.png" alt="">
    </div>

    <!-- 攻略 -->
    <div class="message">
        <div class="message-left">
            <p class="message-title">职场进阶|996就像一座围城，有人...</p>
            <div class="message-left1">
            <p class="message-time">09-05  17:57</p>
            <img class="message-icon" src="../../assets/image/查看.png" alt="">
            <p class="message-num">1577</p>
            </div>
        </div>
        <div class="message-right">
            <img class="message-image" src="../../assets/image/进阶.png" alt="">
        </div>
    </div>
    <van-divider />
    <div class="message">
        <div class="message-left">
            <p class="message-title">职场进阶|刻舟求剑，小故事，大道...</p>
            <div class="message-left1">
            <p class="message-time">08-15  12:57</p>
            <img class="message-icon" src="../../assets/image/查看.png" alt="">
            <p class="message-num">256</p>
            </div>
        </div>
        <div class="message-right">
            <img class="message-image" src="../../assets/image/进阶1.png" alt="">
        </div>
    </div>
    <van-divider />
      <div class="message">
        <div class="message-left">
            <p class="message-title">职场干货|第一次工作，该如何选择</p>
            <div class="message-left1">
            <p class="message-time">02-13  16:27</p>
            <img class="message-icon" src="../../assets/image/查看.png" alt="">
            <p class="message-num">1523</p>
            </div>
        </div>
        <div class="message-right">
            <img class="message-image" src="../../assets/image/进阶2.png" alt="">
        </div>
    </div>
    <van-divider />
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
 .image{
     width: 100%;
     height: 120px;
 }
 .message{
     width: 100%px;
     height: 90px;
     display: flex;
 }
 .message-title{
     font-size: 14px;
     margin-left: 15px;
 }
 .message-time{
     margin-top: 25px;
     font-size: 12px;
     margin-left: 15px;
     color: #bfbfbf;
 }
 .message-icon{
     margin-top: 30px;
     margin-left: 20px;
 }
 .message-num{
     font-size: 12px;
     color: #bfbfbf;
     margin-top: 25px;
     margin-left: 20px;
 }
 .message-left1{
     display: flex;
 }
 .message-image{
     margin-left: 30px;
     margin-top: 5px;
 }
</style>