<template>
<div>  
     <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <p class="top-title">活动日历</p>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>
    <img src="../../assets/image/日历.png" alt="">

    <div class="organization-bottom">
            <div class="organization-information">
                <p class="class">机设1913校内运动</p>
                <p class="time">2020.06.09  篮球场</p>
                <p class="people">55参与人数</p>
                <div class="organization-fraction"><p class="organization-fraction-title">5第二课堂学时</p></div>
            </div>
            <div class="organization-image">
                <img src="../../assets/image/校内活动.png" alt="校内活动">
            </div>
    </div>

    <div class="organization-bottom1">
            <div class="organization-information1">
                <p class="class1">软件1913泥塑手工课</p>
                <p class="time1">2020.06.10  QQ线上</p>
                <p class="people1">8参与人数</p>
                <div class="organization-fraction1"><p class="organization-fraction-title1">5第二课堂学时</p></div>
            </div>
            <div class="organization-image1">
                <img src="../../assets/image/泥巴.png" alt="泥巴">
            </div>
    </div>

    <div class="organization-bottom2">
            <div class="organization-information2">
                <p class="class2">天道酬勤，早课督察</p>
                <p class="time2">2020.06.10  教学楼</p>
                <p class="people2">31参与人数</p>
                <div class="organization-fraction2"><p class="organization-fraction-title2">1第二课堂学时</p></div>
            </div>
            <div class="organization-image2">
                <img src="../../assets/image/早课.png" alt="早课">
            </div>
    </div>

    <div class="organization-bottom3">
            <div class="organization-information3">
                <p class="class3">“好久不见”</p>
                <p class="time3">2020.06.08  线上</p>
                <p class="people3">39参与人数</p>
                <div class="organization-fraction3"><p class="organization-fraction-title3">2第二课堂学时</p></div>
            </div>
            <div class="organization-image3">
                <img src="../../assets/image/好久不见.png" alt="好久不见">
            </div>
    </div>
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
.time{
    font-size: 7px;
    margin-top:-7px;
    color: #bfbfbf;
}
.people{
    font-size: 7px;
    margin-top: -7px;
    margin-left: -30px;
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
}
.time1{
    font-size: 7px;
    margin-top:-7px;
    margin-left: -8px;
    color: #bfbfbf;
}
.people1{
    font-size: 7px;
    margin-top: -7px;
    margin-left: -45px;
    color: #bfbfbf;
}
.organization-image1{
    width: 70px;
    height: 70px;
    margin-top: 5px;
    margin-left: 110px;
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
.organization-bottom2{
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
    width: 300px;
    height: 80px;
    margin-left: 26px;
    margin-top: 10px;
    display: flex;
}
.organization-information2{
    margin-left: 10px;
}
.class2{
    font-size: 10px;
}
.time2{
    font-size: 7px;
    margin-top:-7px;
    margin-left: -12px;
    color: #bfbfbf;
}
.people2{
    font-size: 7px;
    margin-top: -7px;
    margin-left: -30px;
    margin-left: -40px;
    color: #bfbfbf;
}
.organization-image2{
    width: 70px;
    height: 70px;
    margin-top: 5px;
    margin-left: 120px;
}
.organization-fraction2{
    width: 80px;
    height: 13px;
    margin-top: 0px;
    background-color: #f94d05;
}
.organization-fraction-title2{
    color: #FFFFFF;
    font-size: 10px;
}
.organization-bottom3{
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
    width: 300px;
    height: 80px;
    margin-left: 26px;
    margin-top: 10px;
    display: flex;
}
.organization-information3{
    margin-left: 10px;
}
.class3{
    font-size: 10px;
    margin-left: -30px;
}
.time3{
    font-size: 7px;
    margin-top:-7px;
    color: #bfbfbf;
    margin-left: -10px;
}
.people3{
    font-size: 7px;
    margin-top: -7px;
    margin-left: -30px;
    color: #bfbfbf;
}
.organization-image3{
    width: 70px;
    height: 70px;
    margin-top: 5px;
    margin-left: 120px;
}
.organization-fraction3{
    width: 80px;
    height: 13px;
    margin-top: 0px;
    background-color: #f94d05;
}
.organization-fraction-title3{
    color: #FFFFFF;
    font-size: 10px;
}
</style>