<template>
<div>    
    <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <img class="top-close" src="../../assets/image/关闭.png" alt="">
        <p class="top-title">兼职实习</p>
        <img class="top-refresh" src="../../assets/image/刷新.png" alt="">
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <!-- 选择 -->
    <div class="choose">
        <p class="choose-title">选择城市</p>
        <img @click="close" class="choose-image" src="../../assets/image/关闭.png" alt="">
    </div>

    <!-- 北京 -->
    <div class="beijing">
        <p class="beijing-title">北京</p>
    </div>
    <div class="city">
        <div class="beijing1">
            <p class="beijing1-title">北京</p>
        </div>
    </div>

    <!-- 宁夏 -->
    <div class="ningxia">
        <p class="ningxia-title">宁夏</p>
    </div>
    <div class="ningxia-city1">
        <div class="ningxia-city2">
        <div class="yinchuan">
            <p class="yinchuan-title">银川</p>
        </div>
        <div class="yinchuan">
            <p class="yinchuan-title">固原</p>
        </div>
        <div class="yinchuan">
            <p class="yinchuan-title">石嘴山</p>
        </div>
        </div>
        <div class="ningxia-city3">
            <div class="yinchuan">
            <p class="yinchuan-title">吴忠</p>
        </div>
        <div class="yinchuan">
            <p class="yinchuan-title">中卫</p>
        </div>
        </div>
    </div>

    <!-- xizang -->
    <div class="xizang">
        <p class="xizang-title">西藏</p>
    </div>
    <div class="xizang-city1">
        <div class="xizang-city2">
        <div class="yinchuan">
            <p class="yinchuan-title">拉萨</p>
        </div>
        <div class="yinchuan">
            <p class="yinchuan-title">阿里</p>
        </div>
        <div class="yinchuan">
            <p class="yinchuan-title">昌都</p>
        </div>
        </div>
        <div class="xizang-city3">
            <div class="yinchuan">
            <p class="yinchuan-title">林芝</p>
        </div>
        <div class="yinchuan">
            <p class="yinchuan-title">那曲</p>
        </div><div class="yinchuan">
            <p class="yinchuan-title">日喀则</p>
        </div>
        </div>
        <div class="xizang-city3">
            <div class="yinchuan">
            <p class="yinchuan-title">山南</p>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        close(){
            this.$router.push('/practice')
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
 .choose{
     width: 100%;
     height: 30px;
     display: flex;
 } 
 .choose-title{
     margin-left: 150px;
     margin-top: 5px;
 }
 .choose-image{
     margin-left: 120px;
     margin-top: 10px;
 }
 .beijing{
     width: 100%;
     height: 25px;
     margin-top: 8px;
     background-color: #f6f6f6;
 }
 .beijing-title{
     margin-left: -300px;
     font-size: 15px;
     color: #bfbfbf;
     font-weight: bold;
 }
 .city{
     width: 100%;
     height: 40px;
 }
 .beijing1{
     width: 70px;
     height: 25px;
     border-radius: 25px;
     margin-left: 40px;
     margin-top: 5px;
     border: 1px solid #ecebeb;
 }
 .beijing1-title{
     font-size: 15px;
     margin-top: 0px;
     color: #bfbfbf;
 }
 .ningxia{
     width: 100%;
     height: 25px;
     margin-top: 8px;
     background-color: #f6f6f6;
 }
 .ningxia-title{
     margin-left: -300px;
     font-size: 15px;
     color: #bfbfbf;
     font-weight: bold;
 }
 .ningxia-city1{
     width: 100%;
     height: 80px;
 }
 .ningxia-city2{
     width: 100%px;
     height: 30px;
     display: flex;
 }
 .ningxia-city3{
     width: 100%px;
     height: 30px;
     margin-top: 10px;
     display: flex;
 }
 .yinchuan{
     width: 70px;
     height: 25px;
     border-radius: 25px;
     margin-left: 40px;
     margin-top: 5px;
     border: 1px solid #ecebeb;
 }
 .yinchuan-title{
     font-size: 15px;
     margin-top: 0px;
     color: #bfbfbf;
 }
 .xizang{
     width: 100%;
     height: 25px;
     margin-top: 8px;
     background-color: #f6f6f6;
 }
 .xizang-title{
     margin-left: -300px;
     font-size: 15px;
     color: #bfbfbf;
     font-weight: bold;
 }
 .xizang-city1{
     width: 100%;
     height: 80px;
 }
 .xizang-city2{
     width: 100%px;
     height: 30px;
     display: flex;
 }
 .xizang-city3{
     width: 100%px;
     height: 30px;
     margin-top: 10px;
     display: flex;
 }
 .yinchuan{
     width: 70px;
     height: 25px;
     border-radius: 25px;
     margin-left: 40px;
     margin-top: 5px;
     border: 1px solid #ecebeb;
 }
 .yinchuan-title{
     font-size: 15px;
     margin-top: 0px;
     color: #bfbfbf;
 }
</style>