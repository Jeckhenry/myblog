<template>
    <div id="headerGroups">
      <!--小于770-->
        <div class="headerTop">
            <span>
                <i class="iconfont icon-xiangqing"></i>
            </span>
            <span>Jeckhenry的博客</span>
            <span></span>
        </div>

        <!--大于1024(770-1024)-->
        <div class="headerMain behavior">
            <div class="headerMainImg">
                  <span></span>
                  <span>Jeckhenry的博客</span>
            </div>
            <ul class="menuList">
              <li>
                <router-link to="/" title="首页">
                  <i class="iconfont icon-shouye"></i>
                  <i>首页</i>
                </router-link>
              </li>
              <li>
                <router-link to="/fileDir" title="归档">
                  <i class="iconfont icon-guidang"></i>
                  <i>归档</i>
                </router-link>
              </li>
              <li>
                <router-link to="/labelpage" title="标签">
                  <i class="iconfont icon-biaoqian"></i>
                  <i>标签</i>
                </router-link>
              </li>
              <li>
                <router-link to="/about" title="关于">
                  <i class="iconfont icon-guanyu"></i>
                  <i>关于</i>
                </router-link>
              </li>
              <li>
                <router-link to="/lookup" title="查找">
                  <i class="iconfont icon-chazhao"></i>
                  <i>查找</i>
                </router-link>
              </li>
              <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
  
  export default {
        name: "headerEle",
        mounted(){
          var topSpan = document.querySelector('.headerTop span:first-child');
          var headerTop = document.querySelector('.headerTop');
          var headerMain = document.querySelector('.headerMain');
          var documentEle = document.documentElement;
          var viewEle = document.querySelector('#headerGroups').nextElementSibling;
          window.onresize = function(){
            if(documentEle.clientWidth <= 770){
              headerMain.classList.remove('behavior_1');
              headerTop.classList.remove('behavior_2');
            }
          }
          var paddingL =  documentEle.style.paddingLeft;
          topSpan.onclick = function (event) {
            if(headerMain.classList.contains('behavior_1')){
              headerMain.classList.remove('behavior_1');
              headerTop.classList.remove('behavior_2');
              setTimeout(function () {
                documentEle.style.paddingLeft = paddingL;
              },100)
            }else {
              headerMain.classList.add('behavior_1');
              headerTop.classList.add('behavior_2');
              setTimeout(function () {
                documentEle.style.paddingLeft = paddingL + 250 + 'px';
              },100)
            }
            event.cancelBubble = true;
            event.stopPropagation();
          }
          documentEle.onclick = function () {
            headerMain.classList.remove('behavior_1');
            headerTop.classList.remove('behavior_2');
            documentEle.style.paddingLeft = paddingL;
          }
        }
    }
</script>
<style scoped lang="scss">
  @import '../assets/font-css/iconfont.css';

  @media screen and (min-width: 1024px) {
    .headerMain{
      width: 250px;
      .headerMainImg span:nth-of-type(1){
        width: 160px;
        height: 160px;
      }
      .headerMainImg span:nth-of-type(2){
        margin-top: 20px;
      }
      .menuList{
        li{
          padding-left: 60px;
          a i:nth-of-type(2){
            display: inline-block;
          }
        }
      }
    }
    .headerTop{
      display: none;
    }
  }
  @media screen and (max-width: 1024px) and (min-width: 770px) {
    .headerTop{
      display: none;
    }
    .behavior{
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0px, 0, 0);
      -ms-transform: translate3d(0px, 0, 0);
      -o-transform: translate3d(0px, 0, 0);
      transform: translate3d(00px, 0, 0);
    }
    .headerMain{
      width: 75px;
      .headerMainImg span:nth-of-type(1){
        width: 60px;
        height: 60px;
      }
      .headerMainImg span:nth-of-type(2){
        display: none;
      }
      .menuList{
        li{
          padding-left: 30px;
          a i:nth-of-type(2){
            display: none;
          }
        }

      }
    }
  }
  @media screen and (max-width: 770px) {
    body, .headerTop, .headerMain{
      -webkit-transition: all .2s;
      -moz-transition: all .2s;
      -ms-transition: all .2s;
      -o-transition: all .2s;
      transition: all .2s;
    }
    .behavior{
      -webkit-transform: translate3d(-250px, 0, 0);
      -moz-transform: translate3d(-250px, 0, 0);
      -ms-transform: translate3d(-250px, 0, 0);
      -o-transform: translate3d(-250px, 0, 0);
      transform: translate3d(-250px, 0, 0);
    }
    .behavior_1, .side_1{
      -webkit-transform: translate3d(0px, 0, 0);
      -moz-transform: translate3d(0px, 0, 0);
      -ms-transform: translate3d(0px, 0, 0);
      -o-transform: translate3d(0px, 0, 0);
      transform: translate3d(0px, 0, 0);
    }
    .behavior_2,.side_2{
      -webkit-transform: translate3d(250px, 0, 0);
      -moz-transform: translate3d(250px, 0, 0);
      -ms-transform: translate3d(250px, 0, 0);
      -o-transform: translate3d(250px, 0, 0);
      transform: translate3d(250px, 0, 0);
    }
    .headerTop{
      width: 100%;
      display: block;
    }

    .headerMain{
      width: 250px;
      .headerMainImg span:nth-of-type(1){
        width: 160px;
        height: 160px;
      }
      .headerMainImg span:nth-of-type(2){
        margin-top: 20px;
      }
      .menuList{
        li{
          padding-left: 60px;
          a i:nth-of-type(2){
            display: inline-block;
          }
        }
      }
    }
  }
  a{
    text-decoration: none;
    color: #9b9b9b;
    display: block;
  }
  .headerMain{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

    background: #4a4a4a;
    color: #9b9b9b;
    .headerMainImg{
      width: 100%;
      text-align: center;
      margin-top: 50px;
      span {
        display: block;
        margin: 0 auto;
        font-size: .18rem;
        text-space: .05rem;
      }
      span:nth-of-type(1){
        background: url("../assets/image/header.jpg") no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }

    }
    .menuList{
      width: 100%;
      margin-top: 20px;
      list-style-type: none;
      text-align: left;
      font-size: .16rem;
      li{
        height: 50px;
        line-height: 50px;
      }
      li:last-child{
        margin-top: 5px;
      }

      a i{
        margin-right: 20px;
      }
      a i:nth-of-type(2){
        font-style: normal;
      }
    }
  }
.headerTop{
  position: fixed;
  background: #323436;
  top: 0;
  left: 0;
  width: 100%;
  color: #666;
  height: 50px;
  span:nth-of-type(1),
  span:nth-of-type(3){
    position: absolute;
    width: 60px;
    height: 60px;
    line-height: 0;
    z-index: 22;
    text-align: center;
    i{
      font-size: .18rem;
      line-height: 50px;
    }
  }
  span:nth-of-type(3){
    height: 30px;
    width: 30px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: url("../assets/image/header.jpg") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    right: 22px;
    top: 10px;
  }
  span:nth-of-type(2){
    display: block;
    height: 50px;
    line-height: 50px;
    width: 100%;
    font-weight: bold;
    font-size: .18rem;
    text-align: center;
  }
}
</style>
