<template>
<div> 
    <!-- 顶部     -->
    <div class="top">
    <div class="nav">
        <img @click="back" class="nav-return" src="../../assets/image/返回.png" alt="">
        <p class="nav-title">PU客服</p>
    </div>
   <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

    <div class="contact">
        <p class="contact-title">客服联系方式</p>
        <div class="contact-conment">
            <p class="contact-conment1">官方QQ公众号</p>
            <p class="contact-conment2">4008788593</p>
            <div class="border">
                <p class="border-title">联系我们</p>
            </div>
        </div>
    </div>

    <div class="bg">
        <p class="bg-title">常见问题</p>
    </div>

     <div class="set1">
        <div class="person">
            <p class="person-left">聚裂商城相关问题?</p>
            <img class="person-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
         <div class="password">
            <p class="password-left">如何申请实践学分?</p>
            <img class="password-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
         <div class="phone">
            <p class="phone-left">如何查看学校活动?</p>
            <img class="phone-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
        <div class="other">
            <p class="other-left">如何查看积分、学分和诚信度？</p>
            <img class="other-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
         <div class="other1">
            <p class="other1-left">签到方法，发起人如何设置签到员？</p>
            <img class="other1-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
         <div class="other2">
            <p class="other2-left">如何在客户端取消活动报名？</p>
            <img class="other2-more" src="../../assets/image/更多1.png" alt="">
        </div>
        <van-divider />
    </div>

     <div class="bottom">
        <div> <img class="button-icon" src="../../assets/image/机构介绍.png" alt=""></div>
        <p class="button-title">我的反馈</p>
        <div> <img class="button1-icon" src="../../assets/image/课程咨询.png" alt=""></div>
        <p class="button1-title">我要反馈</p>
    </div>
    </div>      
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('/my')
        }
    },
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
    margin-left: 130px;
    font-weight: bold;
}
.contact{
    width: 100%;
    height: 60px;
}
.contact-title{
    font-size: 13px;
    margin-left: -260px;
    font-weight: bold;
}
.contact-conment{
    width: 100%;
    display: flex;
}
.contact-conment1{
    font-size: 11px;
    margin-left: 18px;
}
.contact-conment2{
    font-size: 13px;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 10px;
}
.border{
    width: 50px;
    height: 20px;
    margin-left: 130px;
    border: 1px solid #cecece;
}
.border-title{
    font-size: 12px;
    margin-top: 0px;
}
.bg{
    width: 100%;
    height: 30px;
    background-color: #efefef;
}
.bg-title{
    font-size: 12px;
    margin-left: -290px;
    padding-top: 5px;
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
    margin-left: 20px;
    font-size: 13px;
    margin-top: 10px;
}
.person-more{
    color: #bfbfbf;
    margin-left: 220px;
    margin-top: 10px;
}
.password{
    display: flex;
    width: 100%;
    height: 30px;
}
.password-left{
    margin-left: 20px;
    font-size: 13px;
    margin-top: 10px;
}
.password-more{
    color: #bfbfbf;
    margin-left: 220px;
    margin-top: 10px;
}
.phone{
    display: flex;
    width: 100%;
    height: 30px;
}
.phone-left{
    margin-left: 20px;
    font-size: 13px;
    margin-top: 10px;
}
.phone-more{
    color: #bfbfbf;
    margin-left: 220px;
    margin-top: 10px;
}
.other{
    display: flex;
    width: 100%;
    height: 30px;
}
.other-left{
    margin-left: 20px;
    font-size: 13px;
    margin-top: 10px;
}
.other-more{
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 150px;
}
.other1{
    display: flex;
    width: 100%;
    height: 30px;
}
.other1-left{
    margin-left: 20px;
    font-size: 13px;
    margin-top: 10px;
}
.other1-more{
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 125px;
}
.other2{
    display: flex;
    width: 100%;
    height: 30px;
}
.other2-left{
    margin-left: 20px;
    font-size: 13px;
    margin-top: 10px;
}
.other2-more{
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 165px;
}
.bottom{
     width: 100%;
     height: 40px;
     margin-top: 210px;
     display: flex;
     background-color: #f8f8f6;
 }
 .button-icon{
     margin-top: 18px;
     margin-left: 60px;
 }
 .button-title{
     font-size: 15px;
     margin-left: 5px;
 }
.button1-icon{
     margin-top: 18px;
     margin-left: 100px;
 }
 .button1-title{
     font-size: 15px;
     margin-left: 5px;
 }
</style>