<template>
<div>  
    <!-- 顶部     -->
    <div class="top">
    <div class="nav">
        <img @click="back" class="nav-return" src="../../assets/image/返回.png" alt="">
        <p class="nav-title">设置</p>
    </div>
   <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>
    </div>

    <!-- 设置 -->
    <div class="set1">
        <div class="person">
            <p class="person-left">个人资料</p>
            <p class="person-right">编辑</p>
            <img class="person-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
         <div class="password">
            <p class="password-left">密码修改</p>
            <p class="password-right">修改</p>
            <img class="password-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
         <div class="phone">
            <p class="phone-left">手机号绑定</p>
            <p class="phone-right">更换手机号</p>
            <img class="phone-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
        <div class="other">
            <p class="other-left">第三方绑定</p>
            <p class="other-right">绑定/解除绑定</p>
            <img class="other-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
    </div>

    <div class="set2"></div>

    <div class="set3">
        <div class="privacy">
            <p class="privacy-left">隐私设置</p>
            <p class="privacy-right">设置</p>
            <img class="privacy-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
        <div class="clear">
            <p class="clear-left">清除缓存</p>
            <p class="clear-right">3.2M</p>
            <img class="clear-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
        <div class="about">
            <p class="about-left">关于</p>
            <p class="about-right">查看</p>
            <img class="about-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
        <div class="update">
            <p class="update-left">更新说明</p>
            <p class="update-right">查看</p>
            <img class="update-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
    </div>

    <!-- 退出 -->
    <div class="button">
        <p class="button-title">退出当前账号</p>
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
    height: 60px;
}
.nav{
    width: 100%;
    height: 40px;
    display: flex;
}
.nav-return{
    margin-left: 0px;
    margin-top: 10px;
}
.nav-title{
    margin-left: 140px;
    font-weight: bold;
}
.line{
    border: none;
    background-color: #bfbfbf;
    height: 1px;
}
.set1{
    width: 100%;
    height: 240px;
}
.person{
    display: flex;
    width: 100%;
    height: 30px;
}
.person-left{
    margin-left: 5px;
    font-size: 13px;
    margin-top: 10px;
}
.person-right{
    font-size: 13px;
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 220px;
}
.person-more{
    color: #bfbfbf;
    margin-top: 10px;
}
.password{
    display: flex;
    width: 100%;
    height: 30px;
}
.password-left{
    margin-left: 5px;
    font-size: 13px;
    margin-top: 10px;
}
.password-right{
    font-size: 13px;
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 220px;
}
.password-more{
    color: #bfbfbf;
    margin-top: 10px;
}
.phone{
    display: flex;
    width: 100%;
    height: 30px;
}
.phone-left{
    margin-left: 3px;
    font-size: 13px;
    margin-top: 10px;
}
.phone-right{
    font-size: 13px;
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 170px;
}
.phone-more{
    color: #bfbfbf;
    margin-top: 10px;
}
.other{
    display: flex;
    width: 100%;
    height: 30px;
}
.other-left{
    margin-left: 3px;
    font-size: 13px;
    margin-top: 10px;
}
.other-right{
    font-size: 13px;
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 150px;
}
.other-more{
    color: #bfbfbf;
    margin-top: 10px;
}
.set2{
    height: 10px;
    width: 100%;
    background-color: #e6e6e6;
}
.set3{
    width: 100%;
    height: 240px;
}
.privacy{
    display: flex;
    width: 100%;
    height: 30px;
}
.privacy-left{
    margin-left: 5px;
    font-size: 13px;
    margin-top: 10px;
}
.privacy-right{
    font-size: 13px;
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 220px;
}
.privacy-more{
    color: #bfbfbf;
    margin-top: 10px;
}
.clear{
    display: flex;
    width: 100%;
    height: 30px;
}
.clear-left{
    margin-left: 5px;
    font-size: 13px;
    margin-top: 10px;
}
.clear-right{
    font-size: 13px;
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 220px;
}
.clear-more{
    color: #bfbfbf;
    margin-top: 10px;
}
.about{
    display: flex;
    width: 100%;
    height: 30px;
}
.about-left{
    margin-left: 5px;
    font-size: 13px;
    margin-top: 10px;
}
.about-right{
    font-size: 13px;
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 250px;
}
.about-more{
    color: #bfbfbf;
    margin-top: 10px;
}
.update{
    display: flex;
    width: 100%;
    height: 30px;
}
.update-left{
    margin-left: 5px;
    font-size: 13px;
    margin-top: 10px;
}
.update-right{
    font-size: 13px;
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 225px;
}
.update-more{
    color: #bfbfbf;
    margin-top: 10px;
}
.button{
    width: 300px;
    height: 30px;
    margin-top: 10px;
    margin-left: 30px;
    border: 1px solid #bfbfbf;
}
.button-title{
    margin-top: 3px;
}
</style>