<template>
<div> 
     <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <p class="top-title">我的部落</p>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div> 

    <div class="organization-bottom">
            <div class="organization-information">
                <p class="class">南工院志愿者联合会</p>
                <div class="left">
                    <img class="icon" src="../../assets/image/火.png" alt="">
                    <p class="time">4144.3         社会服务</p>
                </div>
                <p class="people">校级部落</p>
            </div>
            <div class="organization-image">
                <img src="../../assets/image/志愿者联合会.png" alt="校内活动">
            </div>
    </div>

   <div class="organization-bottom1">
            <div class="organization-information1">
                <p class="class1">移动1813</p>
                <div class="left1">
                    <img class="icon1" src="../../assets/image/火.png" alt="">
                    <p class="time1">3971.9  理论学习类</p>
                </div>
                <p class="people1">计算机与软件学院</p>
            </div>
            <div class="organization-image1">
                <img class="image" src="../../assets/image/商务.png" alt="校内活动">
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
     height: 40px;
     display: flex;
 } 
 .top-return{
     margin-left: 0px;
     margin-top: 15px;
 } 
 .top-title{
     font-weight: bold;
     margin-left: 120px;
     margin-top: 15px;
 }  
 .organization-bottom{
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
    width: 300px;
    height: 80px;
    margin-left: 26px;
    margin-top: 10px;
    display: flex;
}
.organization-information{
    margin-left: 10px;
}
.class{
    font-size: 10px;
}
.left{
    display: flex;
}
.icon{
    margin-top: -3px;
}
.time{
    font-size: 7px;
    margin-top: -2px;
    color: #bfbfbf;
}
.people{
    font-size: 7px;
    margin-top: 0px;
    margin-left: -50px;
    color: #bfbfbf;
}
.organization-image{
    width: 70px;
    height: 70px;
    margin-top: 5px;
    margin-left: 120px;
}
.organization-fraction{
    width: 80px;
    height: 13px;
    margin-top: 0px;
    background-color: #f94d05;
}
.organization-fraction-title{
    color: #FFFFFF;
    font-size: 10px;
}
.organization-bottom1{
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
    width: 300px;
    height: 80px;
    margin-left: 26px;
    margin-top: 10px;
    display: flex;
}
.organization-information1{
    margin-left: 10px;
}
.class1{
    font-size: 10px;
    margin-left: -50px;
}
.left1{
    display: flex;
}
.icon1{
    margin-top: -3px;
}
.time1{
    font-size: 7px;
    margin-top: -2px;
    color: #bfbfbf;
}
.people1{
    font-size: 7px;
    margin-top: 0px;
    margin-left: -20px;
    color: #bfbfbf;
}
.organization-image1{
    width: 70px;
    height: 70px;
    margin-top: 5px;
    margin-left: 120px;
}
.image{
    margin-left: -10px;
}
.organization-fraction1{
    width: 80px;
    height: 13px;
    margin-top: 0px;
    background-color: #f94d05;
}
.organization-fraction-title1{
    color: #FFFFFF;
    font-size: 10px;
}
</style>