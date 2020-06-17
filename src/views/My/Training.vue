<template>
<div> 
     <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <img class="top-close" src="../../assets/image/关闭.png" alt="">
        <p class="top-title">培训首页</p>
        <img class="top-refresh" src="../../assets/image/刷新.png" alt="">
    </div>
    
    <div class="search-border">
        <van-search v-model="value" show-action placeholder="请输入课程名称" @search="onSearch"><template #action><div @click="onSearch">搜索</div></template></van-search>
    </div>

    <div class="image">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img @click="list" src="../../assets/image/培训轮播1.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/image/培训轮播2.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="../../assets/image/培训轮播3.png" alt=""></van-swipe-item>
        </van-swipe>
    </div>

    <div class="border">
        <div class="border-left" @click="discount">
            <div>
                <p class="discount-title">折扣专区</p>
                <p class="discount-title1">Discount of charge</p>
            </div>
            <div><img class="discount-image" src="../../assets/image/折扣.png" alt=""></div>
        </div>
        <div class="border-right">
             <div>
                <p class="activity-title">活动专区</p>
                <p class="activity-title1">Activity zone</p>
            </div>
            <div><img class="activity-image" src="../../assets/image/活动专区.png" alt=""></div>
        </div>
    </div>

    <!-- 课程 -->
    <div class="course">
        <div class="course-title">
            <p class="course-sing">唱歌入门技巧</p>
            <p class="course-money">￥2.99</p>
        </div>
        <div class="course-title1">
            <p class="course-information">一起学唱歌吧 客服电话：4002545874</p>
            <p class="course-money1">￥10.00</p>
        </div>  
        <img src="../../assets/image/唱歌.png" alt="">
        <div class="course-bottom">
            <p class="course-buy">6499人购买</p>
            <p class="course-look">15245人浏览</p>
            <img class="course-icon" src="../../assets/image/分享.png" alt="">
        </div>
    </div>

    <div class="course1">
        <div class="course1-title">
            <p class="course1-sing">素描基础课程</p>
            <p class="course1-money">￥4.99</p>
        </div>
        <div class="course1-title1">
            <p class="course1-information">用手中的画笔记录每一瞬美好</p>
            <p class="course1-money1">￥19.00</p>
        </div>  
        <img src="../../assets/image/素描.png" alt="">
        <div class="course1-bottom">
            <p class="course1-buy">5423人购买</p>
            <p class="course1-look">54265人浏览</p>
            <img class="course1-icon" src="../../assets/image/分享.png" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('/my')
        },
        discount(){
            this.$router.push('/discount')
        },
        list(){
            this.$router.push('/list')
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
 .search-border{
     width: 100%;
     height: 50px;
     background-color: #f2f2ee;
 }
 .image{
     width: 100%;
     height: 150px;
 }
 .border{
     width: 100%;
     height: 80px;
     display: flex;
     background-color: #f2f1ed;
 }
 .border-left{
     width: 150px;
     height: 60px;
     display: flex;
     background-color: #FFFFFF;
     margin-left: 15px;
     margin-top: 10px;
 }  
 .border-right{
     width: 150px;
     height: 60px;
     display: flex;
     background-color: #FFFFFF;
     margin-left: 30px;
     margin-top: 10px;
 }
 .discount-title{
    font-size: 13px;
    margin-left: -20px;
}
.discount-title1{
    font-size: 10px;
    color: #bfbfbf;
    margin-left: 0px;
}
.discount-image{
    margin-left: 30px;
    margin-top: 20px;
}
.activity-title{
    font-size: 13px;
    margin-left: 5px;
}
.activity-title1{
    font-size: 10px;
    color: #bfbfbf;
}
.activity-image{
    margin-left: 60px;
    margin-top: 20px;
}
.course{
    width: 100%;
    height: 300px;
}
.course-title{
    width: 100%;
    height: 30px;
    display: flex;
}
.course-sing{
    margin-top: 3px;
    font-size: 13px;
    margin-left: 5px;
}
.course-money{
    font-size: 13px;
    margin-left: 240px;
    margin-top: 3px;
    color: #ea363a;
}
.course-title1{
    width: 100%;
    height: 30px;
    display: flex;
}
.course-information{
    color: #bfbfbf;
    font-size: 12px;
    margin-top: 3px;
    margin-left: 5px;
}
.course-money1{
    font-size: 12px;
    margin-left: 110px;
    margin-top: 3px;
    color: #bfbfbf;
    text-decoration: line-through;
}
.course-bottom{
    width: 100%;
    height: 30px;
    display: flex;
}
.course-buy{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 5px;
    margin-top: 3px;
}
.course-look{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 15px;
    margin-top: 3px;
}
.course-icon{
    margin-left: 100px;
    height: 20px;
}
.course1{
    width: 100%;
    height: 300px;
}
.course1-title{
    width: 100%;
    height: 30px;
    display: flex;
}
.course1-sing{
    margin-top: 3px;
    font-size: 13px;
    margin-left: 5px;
}
.course1-money{
    font-size: 13px;
    margin-left: 240px;
    margin-top: 3px;
    color: #ea363a;
}
.course1-title1{
    width: 100%;
    height: 30px;
    display: flex;
}
.course1-information{
    color: #bfbfbf;
    font-size: 12px;
    margin-top: 3px;
    margin-left: 5px;
}
.course1-money1{
    font-size: 12px;
    margin-left: 155px;
    margin-top: 3px;
    color: #bfbfbf;
    text-decoration: line-through;
}
.course1-bottom{
    width: 100%;
    height: 30px;
    display: flex;
}
.course1-buy{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 5px;
    margin-top: 3px;
}
.course1-look{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 15px;
    margin-top: 3px;
}
.course1-icon{
    margin-left: 100px;
    height: 20px;
}
</style>