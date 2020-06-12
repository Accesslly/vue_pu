<template>
<div> 
    <!-- 顶部     -->
    <div class="hot">
        <div class="hot-title"><p>热门话题</p></div>
        <div class="hot-more">MORE</div>
    </div>

    <!-- 话题 -->
    <div class="topic">
        <div class="topic-left">
            <img class="topic-left-image" src="../../assets/image/壁纸.png" alt="壁纸">
            <p class="topic-left-size">好看的手机壁纸推荐</p>
            <img class="topic-left-people" src="../../assets/image/人数1.png" alt="">
        </div>
        <div class="topic-right">
            <img src="../../assets/image/壁纸2.png" alt="壁纸">
            <p class="topic-right-size">返校封闭后管理</p>
            <img class="topic-right-people" src="../../assets/image/人数1.png" alt="">
        </div>
    </div>
    <div class="topic1">
        <div class="topic-left1">
            <img class="topic-left-image1" src="../../assets/image/壁纸3.png" alt="壁纸">
            <p class="topic-left-size1">安全复学计划</p>
            <img class="topic-left-people1" src="../../assets/image/人数1.png" alt="">
        </div>
        <div class="topic-right1">
            <img src="../../assets/image/壁纸4.png" alt="壁纸">
            <p class="topic-right-size1">延迟开学退住宿费吗？</p>
            <img class="topic-right-people1" src="../../assets/image/人数1.png" alt="">
        </div>
    </div>

    <!-- 导航栏 -->
    <div class="nav">
        <div class="nav-title"><p>推荐</p></div>
        <div class="nav-title1"><p>最新</p></div>
        <div class="nav-title2"><p>同校</p></div>
    </div>

    <!-- 论坛 -->
    <div class="forum">
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

    <div class="forum5">
        <div class="forum1">
        <div><van-image class="forum-image" round src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>
        <div class="forum-information">
            <p class="forum-information-name">李四_20171150</p>
            <p class="forum-information-school">江苏农牧科技职业技术学院</p>
        </div>
        <div>
            <img class="button" src="../../assets/image/关注它.png" alt="">
        </div>
        </div>
        <div class="forum2"><p class="forum-content1">想变成和你一样特别特别优秀的人</p></div>
        <div class="forum4">
            <img class="forum4-image" src="../../assets/image/点赞.png" alt="">
            <p class="forum4-title">482</p>
            <img class="forum4-image1" src="../../assets/image/讨论.png" alt="">
            <p class="forum4-title1">617</p>
            <img class="forum4-image2" src="../../assets/image/星星.png" alt="">
            <p class="forum4-title2">3周前</p>
        </div>
    </div>

</div>
</template>

<script>
export default {
    
}
</script>

<style>
.hot{
    width: 330px;
    height: 50px;
    margin-left: 15px;
    display: flex;
}
.hot-title{
    font-weight: bold;
}
.hot-more{
    margin-top: 20px;
    margin-left: 220px;
    font-size: 10px;
    color: #bfbfbf;
}
.topic{
    display: flex;
    width: 330px;
    height: 200px;
    margin-left: 15px;
}
.topic-left{
    width: 150px;
    height: 180px;
    margin-left: 15px;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.topic-left-image{
    margin-top: 5px;
}
.topic-left-size{
    font-size: 10px;
    margin-left: -40px;
    margin-top: 0px;
}
.topic-left-people{
    margin-left: -70px;
}
.topic-right{
    width: 150px;
    height: 180px;
    margin-left: 5px;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.topic-right-image{
    margin-top: 5px;
}
.topic-right-size{
    font-size: 10px;
    margin-left: -55px;
    margin-top: 2px;
}
.topic-right-people{
    margin-left: -70px;
}
.topic1{
    display: flex;
    width: 330px;
    height: 200px;
    margin-left: 15px;
}
.topic-left1{
    width: 150px;
    height: 180px;
    margin-left: 15px;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.topic-left-image1{
    margin-top: 5px;
}
.topic-left-size1{
    font-size: 10px;
    margin-left: -70px;
    margin-top: 0px;
}
.topic-left-people1{
    margin-left: -70px;
}
.topic-right1{
    width: 150px;
    height: 180px;
    margin-left: 5px;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.topic-right-image1{
    margin-top: 5px;
}
.topic-right-size1{
    font-size: 10px;
    margin-left: -30px;
    margin-top: 2px;
}
.topic-right-people1{
    margin-left: -70px;
}
.nav{
    width: 330px;
    height: 30px;
    margin-left: 15px;
    display: flex;
}
.nav-title{
    margin-left: 15px;
    margin-top: -10px;
}
.nav-title1{
    font-size: 15px;
    margin-top: -10px;
    margin-left: 20px;
    color: #bfbfbf;
}
.nav-title2{
    font-size: 15px;
    margin-top: -10px;
    margin-left: 20px;
    color: #bfbfbf;
}
.forum{
    width: 330px;
    height: 310px;
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
    margin-left: -45px;  
}
.forum-information-school{
    font-size: 8px;
    color: #bfbfbf;
    margin-top: -10px;
    margin-left: 5px;
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
.forum5{
    width: 330px;
    height: 200px;
    margin-left: 15px;
    margin-top: 10px;
    box-shadow:rgba(0,0,0,.1) 0px 0px 2px;
}
.forum-content1{
    margin-left: -105px;
    font-size: 14px;
}
</style>