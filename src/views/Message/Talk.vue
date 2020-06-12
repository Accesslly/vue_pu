<template>
<div> 
    <!-- 返回   -->
    <div class="talk">
        <div class="talk-return">
            <img @click="back" src="../../assets/image/返回.png" alt="返回">
        </div>
        <div class="talk-title">
            <p>私信</p>
        </div>
    </div>

    <!-- 聊天内容 -->
    <div class="chat">
        <div>
        <div class="chat-author">
            <div class="chat-title"><p>张三_1802783112</p></div>
            <div><van-image class="chat-image" round src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>
        </div>
        <div class="chat-content">
            <p class="font-content">请问什么时候下课？</p>
            <p class="font-time">2020-3-27</p>
        </div>
        </div>
        <div>
        <div class="chat-author1">
            <div><van-image class="chat-image1" round src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>
            <div class="chat-title1"><p>李四_1802783113</p></div>
        </div>
        <div class="chat-content1">
            <p class="font-content1">应该还有十分钟左右下课吧！</p>
            <p class="font-time1">2020-3-27</p>
        </div>
        </div>
    </div>
    
    <!-- 发送信息 -->
    <div class="send">
        <div class="send-input"><input type="text"></div>
        <div class="send-text"><p>发送</p></div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push("/message")
        }
    },
}
</script>

<style>
.talk{
    width: 330px;
    height: 50px;
    margin-left: 15px;
    display: flex;
}
.talk-return{
    margin-left: -10px;
    margin-top: 6px;
}
.talk-title{
    margin-top: -4px;
    margin-left: 125px;
}
.chat{
    width: 100%;
    height: 550px;
    background-image: url('../../assets/image/聊天背景.png');
}
.chat-author{
    margin-left: 200px;
    display: flex;
}
.chat-title{
    font-size: 12px;
    margin-top: 20px;
}
.chat-image{
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 25px;
}
.chat-content{
    height: 50px;
    width: 120px;
    margin-top: -15px;
    margin-left: 170px;
    background-color: #eaf3f8;
}
.font-content{
    font-size: 12px;
}
.font-time{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 40px;
}
.chat-author1{
    margin-left: 10px;
    display: flex;
}
.chat-title1{
    font-size: 12px;
    margin-left: 5px;
    margin-top: 20px;
}
.chat-image1{
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 25px;
}
.chat-content1{
    height: 50px;
    width: 160px;
    margin-top: -15px;
    margin-left: 50px;
    background-color: #eaf3f8;
}
.font-content1{
    font-size: 12px;
    margin-left: 0px;
}
.font-time1{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 90px;
}
.send{
    width: 100%;
    height: 40px;
    display: flex;
}
.send-input{
    margin-left: 5px;
    margin-top: 5px;
}
.send-text{
    color: #fd9d3e;
    margin-left: 15px;
    margin-top: -10px;
}
</style>