<template>
<div>  
      <!-- 顶部     -->
    <div class="top">
        <img class="top-return" @click="back" src="../../assets/image/返回.png" alt="">
        <p class="top-title">动态详情</p>
        <p class="top-title1">举报</p>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <div @click="dynamic" class="forum">
        <div class="forum1">
        <div><van-image class="forum-image" round src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>
        <div class="forum-information">
            <p class="forum-information-name">吕浩_20171120</p>
            <p class="forum-information-school">江苏农牧科技职业技术学院</p>
        </div>
        <div>
            <img class="button" src="../../assets/image/关注它.png" alt="">
        </div>
        </div>
        <div class="forum2"><p class="forum-content">真想问一下 这么大的蚊子咬人一口 起多大的包</p></div>
        <div class="forum3">
            <img class="img1" src="../../assets/image/1.png" alt="">
            <img class="img2" src="../../assets/image/2.png" alt="">
            <img class="img3" src="../../assets/image/3.png" alt="">
        </div>
        <div class="forum4">
            <img class="forum4-image" src="../../assets/image/点赞.png" alt="">
            <p class="forum4-title">482</p>
            <img class="forum4-image1" src="../../assets/image/讨论.png" alt="">
            <p class="forum4-title1">617</p>
            <img class="forum4-image2" src="../../assets/image/星星.png" alt="">
            <p class="forum4-title2">3周前</p>
        </div>
    </div> 

    <div class="title">
        <p class="title1">评论322</p>
        <p class="title2">赞456</p>
    </div>  
    <div class="border"></div>

    <div class="comment">
        <div class="forum1">
        <div><van-image class="forum-image" round src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>
        <div class="forum-information">
            <p class="forum-information-name">王明_20171524</p>
            <p class="forum-information-school">江苏农牧科技职业技术学院</p>
            <p class="forum-information-comment">1</p>
        </div>
        <div>
            <img class="button1" src="../../assets/image/点赞1.png" alt="">
        </div>
        </div>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <div class="comment">
        <div class="forum1">
        <div><van-image class="forum-image" round src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>
        <div class="forum-information">
            <p class="forum-information-name">李四_20171254</p>
            <p class="forum-information-school">江苏农牧科技职业技术学院</p>
            <p class="forum-information-comment">1</p>
        </div>
        <div>
            <img class="button1" src="../../assets/image/点赞1.png" alt="">
        </div>
        </div>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <div class="comment">
        <div class="forum1">
        <div><van-image class="forum-image" round src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>
        <div class="forum-information">
            <p class="forum-information-name">王五_20171114</p>
            <p class="forum-information-school">江苏农牧科技职业技术学院</p>
            <p class="forum-information-comment">1</p>
        </div>
        <div>
            <img class="button1" src="../../assets/image/点赞1.png" alt="">
        </div>
        </div>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

    <div class="comment">
        <div class="forum1">
        <div><van-image class="forum-image" round src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>
        <div class="forum-information">
            <p class="forum-information-name">陈二_20171117</p>
            <p class="forum-information-school">江苏农牧科技职业技术学院</p>
            <p class="forum-information-comment">1</p>
        </div>
        <div>
            <img class="button1" src="../../assets/image/点赞1.png" alt="">
        </div>
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
            this.$router.push('/square')
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
     margin-left: 110px;
     margin-top: 15px;
 }
 .top-title1{
     margin-left: 100px;
     margin-top: 15px;
 }  
 .forum{
    width: 330px;
    height: 270px;
    margin-left: 15px;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.forum1{
    display: flex;
    width: 330px;
    height: 50px;
}
.forum-image{
    margin-left: 5px;
    margin-top: 5px;    
    width: 40px;
    height: 40px;
}
.forum-information-name{
    font-size: 10px;
    margin-left: 5px;  
    float: left;
}
.forum-information-school{
    font-size: 8px;
    color: #bfbfbf;
    float: left;
    margin-top: -10px;
    margin-left: 5px;
}
.forum-information-comment{
    font-size: 12px;
    float: left;
    margin-left: 20px;
}
.forum2{
    width: 330px;
    height: 30px;
}
.forum-content{
    margin-left: -30px;
    font-size: 14px;
}
.forum3{
    display: flex;
}
.img1{
    width:100px;
    height:100px;
    margin-top: 15px;

}
.img2{
    width: 100px;
    height:100px;
    margin-left: 10px;
    margin-top: 15px;

}
.img3{
    width: 100px;
    height: 100px;
    margin-left: 10px;
    margin-top: 15px;

}
.button{
    width: 30px;
    height: 15px;
    margin-top: 10px;
    margin-left: 120px;
}
.button1{
    margin-top: 10px;
    margin-left: 90px;
}
.forum4{
    display: flex;
    width: 100%;
    height: 30px;
    margin-top: 10px;
}
.forum4-image{
    margin-top: 10px;
}
.forum4-title{
    margin-left: 5px;
    font-size: 10px;
    color: #bfbfbf;
    margin-top: 15px;
}
.forum4-image1{
    margin-top: 10px;
    margin-left: 20px;
}
.forum4-title1{
    margin-left: 5px;
    font-size: 10px;
    margin-top: 15px;
    color: #bfbfbf;
}
.forum4-image2{
    margin-top: 10px;
    margin-left: 20px;
}
.forum4-title2{
    margin-left: 160px;
    font-size: 10px;
    margin-top: 15px;
    color: #bfbfbf;
}  
.title{
    width: 100%;
    height: 40px;
    margin-top: 30px;
    display: flex;
}
.title1{
    margin-left: 15px;
    font-size: 15px;
}
.title2{
    margin-left: 20px;
    font-size: 15px;
}
.border{
    width: 50px;
    height: 2px;
    margin-left: 15px;
    background-color: black;
}
.comment{
    width: 100%;
    height: 70px;
    margin-left: 15px;
    margin-top: 10px;
}
</style>