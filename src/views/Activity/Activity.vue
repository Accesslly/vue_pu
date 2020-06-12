<template>
<div>
    <!-- 活动  -->
    <div class="activity">
        <!-- 搜索框 -->
        <div class="activity-search">
            <p class="activity-title">活动</p>
            <img class="activity-icon" src="../../assets/image/搜索.png" alt="搜索">
        </div>
        <!-- 图片 -->
        <div class="activity-image">
            <img src="../../assets/image/活动图片.png" alt="活动图片">
        </div>
    </div>

    <!-- 本校活动 -->
    <div class="schoolactivity">
        <p class="schoolactivity-title">本校活动</p>
        <van-dropdown-menu class="schoolactivity-drop">
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
            <van-dropdown-item v-model="value4" :options="option4" />
        </van-dropdown-menu>
    </div>

    <!-- 课堂活动 -->
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
    data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'A',
      value4: '0',
      option1: [
        { text: '分类', value: 0 },
        { text: '思想成长类专题讲座', value: 1 },
        { text: '青年大学习', value: 2 },
        { text: '公益活动', value: 3 },
        { text: '创新创业类专题讲座', value: 4 },
        { text: '文体类活动', value: 5 },
        { text: '社会实践', value: 6 },
      ],
      option2: [
        { text: '归属组织', value: 'a' },
        { text: '校团委', value: 'b' },
        { text: '校学生会', value: 'c' },
        { text: '大学生社联', value: 'd' },
        { text: '校青年志愿者联合会', value: 'e' },
        { text: '电气工程学院', value: 'f' },
        { text: '国际教育学院', value: 'g' },
      ],
      option3: [
        { text: '状态', value: 'A' },
        { text: '未开始', value: 'B' },
        { text: '进行中', value: 'C' },
        { text: '已结束', value: 'D' },
      ],
      option4: [
        { text: '排序', value: '0' },
        { text: '即将开始', value: '1' },
        { text: '最热排序', value: '2' },
      ],
    };
  },
}   
</script>

<style>
.activity{
    width: 330px;
    height: 150px;
    margin-left: 15px;
}
.activity-search{
    width: 330px;
    height: 30px;
    display: flex;
}
.activity-title{
    margin-left: 15px;
    margin-top: 10px;
    font-weight: bold;
}
.activity-icon{
    margin-left: 250px;
    margin-top: 10px;
}
.activity-image{
    margin-top: 13px;
    width: 300px;
    height: 100px;
    margin-left: 15px;
}
.schoolactivity{
    width: 330px;
    height: 70px;
    margin-top: -15px;
    margin-left: 15px;
}
.schoolactivity-title{
    margin-left: -230px;
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