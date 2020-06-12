<template>
<div> 

    <!-- 顶部 -->
    <div class="top">
        <!-- 返回 -->
        <div class="top-return">
            <img @click="back" class="return" src="../../assets/image/返回.png" alt="">
        </div>
        <!-- 头像 -->
        <div class="top-avatar">
            <van-image class="top-image" round src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <p class="top-name">张三_1802783112</p>
            <p class="top-school">南京工业职业技术学院</p>
        </div>
    </div>   

    <!-- 个人信息 -->
    <div class="bottom">
        <div class="person">
            <p class="person-information">个人信息</p>
            <p class="person-name">姓名:张三</p>
            <p class="person-school">学校:南京工业职业技术学院</p>
            <p class="person-grade">年级:2018级</p>
        </div>

        <div class="dna">
            <p class="dna-title">标签DNA</p>
            <div class="dna-movie"></div>
            <p class="dna-movie-title">电影</p>
        </div>

        <div class="attention">
            <p class="attention-title">关注1</p>
            <div class="attention-bg"></div>
            <p class="attention-dian">...</p>
        </div>

        <div class="fans">
            <p class="fans-title">粉丝0</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push("/my")
        }
    }
}
</script>

<style>
.top{
    width: 100%;
    height: 190px;
    background-image: url('../../assets/image/个人背景.png');
}
.top-return{
    width: 100%;
    height: 30px;
}
.return{
    margin-left: -320px;
    margin-top: 10px;
}
.top-avatar{
    width: 100%;
    height: 150px;
}
.top-image{
    width: 45px;
    height: 45px;
    margin-top: 5px;
}
.top-name{
    color: #bfbfbf;
    font-size: 14px;
    margin-top: 0px;
}
.top-school{
    color: #bfbfbf;
    font-size: 12px;
    margin-top: -12px;
}
.bottom{
    width: 100%;
    height: 500px;
}
.person{
    width: 330px;
    height: 90px;
    margin-left: 15px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.person-information{
    font-size: 14px;
    margin-left: -260px;
}
.person-name{
    font-size: 12px;
    margin-top: -10px;
    margin-left: -260px;
}
.person-school{
    font-size: 12px;
    margin-top: -10px;
    margin-left: -165px;
}
.person-grade{
    font-size: 12px;
    margin-top: -10px;
    margin-left: -245px;
}
.dna{
    width: 330px;
    height: 60px;
    margin-left: 15px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.dna-title{
    font-size: 14px;
    margin-left: -260px;
}
.dna-movie{
    width: 30px;
    height: 15px;
    margin-left: 10px;
    background-color: #aee0fa;
}
.dna-movie-title{
    font-size: 12px;
    color: #FFFFFF;
    margin-top: -17px;
    margin-left: -280px;
}
.attention{
    width: 330px;
    height: 70px;
    margin-left: 15px;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.attention-title{
    font-size: 14px;
    margin-left: -280px;
}
.attention-bg{
    width: 25px;
    height: 25px;
    margin-left: 8px;
    border-radius: 50%;
    background-color: #f2f0f0;
}
.attention-dian{
    margin-left: -290px;
    margin-top: -26px;
}
.fans{
    width: 330px;
    height: 70px;
    margin-left: 15px;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.fans-title{
    font-size: 14px;
    margin-left: -280px;
}
</style>