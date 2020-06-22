<template>
<div>  
   <!-- 顶部     -->
    <div class="top">
        <div><img class="top-return" @click="back" src="../../assets/image/实习返回.png" alt=""></div>
        <div><img class="top-close" src="../../assets/image/实习关闭.png" alt=""></div> 
        <div><img class="top-refresh" src="../../assets/image/实习刷新.png" alt=""></div>
    </div>
    <img src="../../assets/image/看书.png" alt="">   
    <div class="bg"></div> 

    <div class="message1">
        <div class="title1">
            <p class="title1-left">90分钟，教你如何打造千万级爆款产品</p>
            <p class="title1-right">限时免费</p>
        </div>
        <div>
            <p class="title1-text">整合14年为全球500强企业服务，洛可可打造爆款产品的核心策略</p>
        </div>
    </div> 
     <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <div class="message2">
        <div class="title2">
            <p class="title2-left">求职课程辅导</p>
            <p class="title2-right">限时免费</p>
        </div>
        <div>
            <p class="title2-text">为您求职提供帮助，欢迎关注更多培训课程哦</p>
        </div>
    </div> 
     <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <div class="message3">
        <div class="title3">
            <p class="title3-left">王者历史课</p>
            <p class="title3-center">￥0.00</p>
            <p class="title3-right">0.00</p>
        </div>
        <div>
            <p class="title3-text">历史很难吗？那可不一定！我们借王者说历史。没有死记硬背，拒绝枯燥乏味。你可以坐着看、躺着看、手机看、电视看 换个姿势听故事，王者历史课，现在开课！</p>
        </div>
    </div> 
     <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>
             
    <div class="message4">
        <div class="title4">
            <p class="title4-left">杨振宁主讲大学普通物理</p>
            <p class="title4-center">￥0.00</p>
            <p class="title4-right">0.00</p>
        </div>
        <div>
            <p class="title4-text">普通物理是基本课，不过在教学中常常存在服饰对最基本的定义和公式的讲解的情况。杨先生的讲授始终强调物理中最为基本的东西，强调教学和物理的关系，并且在教学中也讲述了物理历史发展上的一些关键事件，给了同学们在学习中更大的发挥的天地。</p>
        </div>
    </div> 
     <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>
</div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('/training')
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
     margin-top: 15px;
 } 
 .top-refresh{
     margin-left: 270px;
     margin-top: 15px;
 }
 .bg{
     width: 100%;
     height: 20px;
     background-color: #f2f1ed;
 }
 .message1{
     width: 100%;
     height: 90px;
 }
 .title1{
     width: 100%;
     height: 30px;
     display: flex;
 }
 .title1-left{
     font-size: 13px;
     margin-top: 3px;
     margin-left: 10px;
 }
 .title1-right{
     font-size: 12px;
     margin-left: 80px;
     margin-top: 3px;
     color: #f35b00;
 }
 .title1-text{
     font-size: 13px;
     margin-left: 10px; 
     text-align: left;
     color: #bfbfbf;
 }
 .message2{
     width: 100%;
     height: 90px;
 }
 .title2{
     width: 100%;
     height: 30px;
     display: flex;
 }
 .title2-left{
     font-size: 13px;
     margin-top: 3px;
     margin-left: 10px;
 }
 .title2-right{
     font-size: 12px;
     margin-left: 225px;
     margin-top: 3px;
     color: #f35b00;
 }
 .title2-text{
     font-size: 13px;
     margin-left: 10px; 
     text-align: left;
     color: #bfbfbf;
 }
 .message3{
     width: 100%;
     height: 90px;
 }
 .title3{
     width: 100%;
     height: 30px;
     display: flex;
 }
 .title3-left{
     font-size: 13px;
     margin-top: 3px;
     margin-left: 10px;
 }
 .title3-center{
     font-size: 12px;
     color: #f35b00;
     margin-left: 220px;
     margin-top: 3px;
 }
 .title3-right{
     font-size: 10px;
     margin-top: 7px;
     margin-left: 10px;
     color: #bfbfbf;
     text-decoration: line-through;
 }
 .title3-text{
     font-size: 13px;
     margin-left: 10px; 
     text-align: left;
     color: #bfbfbf;
 }
 .message3{
     width: 100%;
     height: 90px;
 }
 .title4{
     width: 100%;
     height: 30px;
     display: flex;
 }
 .title4-left{
     font-size: 13px;
     margin-top: 3px;
     margin-left: 10px;
 }
 .title4-center{
     font-size: 12px;
     color: #f35b00;
     margin-left: 145px;
     margin-top: 3px;
 }
 .title4-right{
     font-size: 10px;
     margin-top: 7px;
     margin-left: 10px;
     color: #bfbfbf;
     text-decoration: line-through;
 }
 .title4-text{
     font-size: 13px;
     margin-left: 10px; 
     text-align: left;
     color: #bfbfbf;
 }
</style>