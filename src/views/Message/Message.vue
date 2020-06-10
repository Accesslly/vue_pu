<template>
<div> 
    <!-- 顶部 -->
    <van-tabs v-model="active">
        <van-tab title="消息">
            <!-- 通知 -->
    <div class="notice">
        <div class="notice-image">
            <img src="../../assets/image/通知.png" alt="">
        </div>
        <div class="notice-information">
            <p class="notice-title">系统通知</p>
            <p class="notice-content">您没有消息!</p>
        </div>
    </div>
    <div class="school">
        <div class="school-image">
            <img src="../../assets/image/喇叭.png" alt="">
        </div>
        <div class="school-information">
            <p class="school-title">校园通知</p>
            <p class="school-content">2017届省级魅力团支书投票</p>
        </div>
        <div class="school-time">
            <p>2017-11-29  11:29</p>
        </div>
    </div>
    <div class="announcement">
        <div class="announcement-image">
            <img src="../../assets/image/公告.png" alt="">
        </div>
        <div class="announcement-information">
            <p class="announcement-title">PU公告</p>
            <p class="announcement-content">PU6.7.3版本更新说明</p>
        </div>
        <div class="announcement-time">
            <p>2020-04-01  00:00</p>
        </div>
    </div>
    <div class="game">
        <div class="game-image">
            <img src="../../assets/image/奖杯.png" alt="">
        </div>
        <div class="game-information">
            <p class="game-title">斯坦福CGCP学生写作竞赛</p>
        </div>
    </div>
    <div class="talk">
        <div class="talk-image">
            <img src="../../assets/image/人物.png" alt="">
        </div>
        <div class="talk-information">
            <p class="talk-title">超管niit</p>
            <p class="talk-content">你好！</p>
        </div>
        <div class="talk-time">
            <p>2019-03-25  09:50</p>
        </div>
    </div>
        </van-tab>
        <van-tab title="待办">内容 2</van-tab>
        <van-tab title="动态">内容 3</van-tab>
    </van-tabs>
    
     <!-- 底部导航栏 -->
    <div>
       <van-tabbar v-model="active" active-color="#f86807" inactive-color="#dfdfdf">
            <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="aim">活动</van-tabbar-item>
            <van-tabbar-item icon="comment-o">消息</van-tabbar-item>
            <van-tabbar-item icon="apps-o">广场</van-tabbar-item>
            <van-tabbar-item icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
.nav{
    width: 330px;
    height: 50px;
    display: flex;
    margin-left: 15px;
}
.notice{
    width: 330px;
    height: 70px;
    margin-left: 15px;
    margin-top: 10px;
    display: flex;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.notice-image{
    width: 40px;
    height: 40px;
    background-color: #bce4f9;
    margin-left: 10px;
    margin-top: 12px;
    border-radius: 50%;
}
.notice-information{
    margin-top: -3px;
    margin-left: 10px;
}
.notice-title{
    font-size: 13px;
}
.notice-content{
    font-size: 10px;
    color: #bfbfbf;
}
.school{
    width: 330px;
    height: 70px;
    margin-left: 15px;
    margin-top: 10px;
    display: flex;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.school-image{
    width: 40px;
    height: 40px;
    background-color: #fae8c7;
    margin-left: 10px;
    margin-top: 12px;
    border-radius: 50%;
}
.school-information{
    margin-top: -3px;
    margin-left: 10px;
}
.school-title{
    font-size: 13px;
    margin-left: -70px;
}
.school-content{
    font-size: 10px;
    color: #bfbfbf;
}
.school-time{
    font-size: 10px;
    margin-top: 3px;
    margin-left: 65px;
    color: #bfbfbf;
}
.announcement{
    width: 330px;
    height: 70px;
    margin-left: 15px;
    display: flex;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.announcement-image{
    width: 40px;
    height: 40px;
    background-color: #fce1de;
    margin-left: 10px;
    margin-top: 12px;
    border-radius: 50%;
}
.announcement-information{
    margin-top: -3px;
    margin-left: 10px;
}
.announcement-title{
    font-size: 13px;
    margin-left: -50px;
}
.announcement-content{
    font-size: 10px;
    color: #bfbfbf;
}
.announcement-time{
    font-size: 10px;
    margin-top: 3px;
    margin-left: 90px;
    color: #bfbfbf;
}
.game{
    margin-top: 10px;
    width: 330px;
    height: 70px;
    margin-left: 15px;
    display: flex;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.game-image{
    width: 40px;
    height: 40px;
    background-color: #fcfccc;
    margin-left: 10px;
    margin-top: 12px;
    border-radius: 50%;
}
.game-information{
    margin-top: -3px;
    margin-left: 10px;
}
.game-title{
    font-size: 13px;
}
.talk{
    width: 330px;
    height: 70px;
    margin-left: 15px;
    margin-top: 10px;
    display: flex;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.talk-image{
    width: 40px;
    height: 40px;
    background-color: #f2dbe6;
    margin-left: 10px;
    margin-top: 12px;
    border-radius: 50%;
}
.talk-information{
    margin-top: -3px;
    margin-left: 10px;
}
.talk-title{
    font-size: 13px;
    margin-left: 0px;
}
.talk-content{
    font-size: 10px;
    margin-left: -10px;
    color: #bfbfbf;
}
.talk-time{
    font-size: 10px;
    margin-top: 3px;
    margin-left: 145px;
    color: #bfbfbf;
}
</style>