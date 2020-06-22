<template>
<div>   
     <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/实习返回.png" alt="">
        <p class="top-title">部落</p>
        <img class="top-refresh" src="../../assets/image/部落搜索.png" alt="">
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

    <!-- 明星部落榜 -->
    <p class="star">明星部落榜</p>
    <div class="bigd">
    <div class="star-image">
        <img src="../../assets/image/top1.png" alt="">
        <img src="../../assets/image/top2.png" alt="">
        <img src="../../assets/image/top3.png" alt="">
    </div>
    </div>

    <!-- 明星部落榜 -->
    <div class="schoolactivity">
        <p class="schoolactivity-title">本校活动</p>
        <van-dropdown-menu class="schoolactivity-drop">
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
            <van-dropdown-item v-model="value4" :options="option4" />
        </van-dropdown-menu>
    </div>

     <div class="organization-bottom">
            <div class="organization-information">
                <p class="class">航空工程学院学生会</p>
                <div class="left">
                    <img class="icon" src="../../assets/image/火.png" alt="">
                    <p class="time">4144.3         其他</p>
                </div>
                <p class="people">航空工程学院</p>
            </div>
            <div class="organization-image">
                <img src="../../assets/image/航空.png" alt="校内活动">
            </div>
    </div>

     <div class="organization-bottom1">
            <div class="organization-information1">
                <p class="class1">商务贸易学院</p>
                <div class="left1">
                    <img class="icon1" src="../../assets/image/火.png" alt="">
                    <p class="time1">3971.9  文化艺术类</p>
                </div>
                <p class="people1">商务贸易学院</p>
            </div>
            <div class="organization-image1">
                <img class="image" src="../../assets/image/商务.png" alt="校内活动">
            </div>
    </div>

     <div class="organization-bottom2">
            <div class="organization-information2">
                <p class="class2">电气工程学院学生会</p>
                <div class="left2">
                    <img class="icon2" src="../../assets/image/火.png" alt="">
                    <p class="time2">5486.5  其他</p>
                </div>
                <p class="people2">电气工程学院</p>
            </div>
            <div class="organization-image2">
                <img src="../../assets/image/商务.png" alt="校内活动">
            </div>
    </div>

     <div class="organization-bottom3">
            <div class="organization-information3">
                <p class="class3">电气工程学院志愿者</p>
                <div class="left3">
                    <img class="icon3" src="../../assets/image/火.png" alt="">
                    <p class="time3">1648.5  其他</p>
                </div>
                <p class="people3">电气工程学院</p>
            </div>
            <div class="organization-image3">
                <img src="../../assets/image/志愿者.png" alt="校内活动">
            </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'A',
      value4: '0',
      option1: [
        { text: '归属', value: 0 },
        { text: '学生部门', value: 1 },
        { text: '团支书', value: 2 },
        { text: '团支部', value: 3 },
        { text: '学生社团', value: 4 },
      ],
      option2: [
        { text: '分类', value: 'a' },
        { text: '人文社科类', value: 'b' },
        { text: '文化艺术类', value: 'c' },
        { text: '摄影类', value: 'd' },
        { text: '群众体育类', value: 'e' },
        { text: '学术科技类', value: 'f' },
        { text: '社会服务类', value: 'g' },
      ],
      option3: [
        { text: '院系', value: 'A' },
        { text: '校级', value: 'B' },
        { text: '电气工程学院', value: 'C' },
        { text: '国际教育学院', value: 'D' },
        { text: '航空工程学院', value: 'E' },
        { text: '机械工程学院', value: 'F' },
        { text: '经济管理学院', value: 'G' },
      ],
      option4: [
        { text: '活力', value: '0' },
        { text: '最新的', value: '1' },
        { text: '最热的', value: '2' },
      ],
    };
  },
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
     margin-left: 130px;
     margin-top: 15px;
 }
 .top-refresh{
     margin-left: 130px;
     margin-top: 20px;
 }   
 .star{
     font-weight: bold;
     margin-left: -250px;
 }
 .bigd{
     overflow-x: scroll;
     width: 300px;
     height: 150px;
 }
 .star-image{
    height: 150px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
    width: 300px;
    margin-left: 10px;
    float: left;
    display: flex;
 }
 .schoolactivity{
    width: 330px;
    height: 70px;
    margin-top: -15px;
    margin-left: 15px;
}
.schoolactivity-title{
    margin-left: -260px;
    font-weight: bold;
}
.schoolactivity-drop{
    margin-top: -18px;
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
    margin-left: -30px;
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
    margin-left: -30px;
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
.left2{
    display: flex;
}
.icon2{
    margin-top: -3px;
}
.time2{
    font-size: 7px;
    margin-top: -2px;
    color: #bfbfbf;
}
.people2{
    font-size: 7px;
    margin-top: 0px;
    margin-left: -30px;
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
}
.left3{
    display: flex;
}
.icon3{
    margin-top: -3px;
}
.time3{
    font-size: 7px;
    margin-top: -2px;
    color: #bfbfbf;
}
.people3{
    font-size: 7px;
    margin-top: 0px;
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