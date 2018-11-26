<template>
  <div>
    <div class="labelhead">站内搜索</div>
    <div class="lookup">
      <input type="text" v-model="keyval">
      <i @click="clear" v-show="showClear">X</i>
      <button @click="lookup">搜索</button>
    </div>
    <div class="result">
      本次查询到&nbsp;&nbsp;<span style="color:#409EFF ">{{res.length}}</span>&nbsp;&nbsp;条！
    </div>
    <div class="article">
        <ul>
          <li v-for="(item,index) in res" :key="index">
            {{index+1}}、<a @click="goblog(item)">{{item.articleTitle}}</a> 
          </li>
        </ul>
    </div>
    <footerEl></footerEl>
  </div>
</template>

<script>
  //查找
  import footerEl from '../components/footerEl'

  export default {
    name: "lookup",
    data() {
      return {
        keyval: '',
        showClear: false,
        res: []
      }
    },
    watch: {
      keyval:function(newval){
        if(!newval){
          this.showClear = false;
          return false;
        }
        this.showClear = true;
      }
    },
    components: {footerEl},
    methods:{
      clear(){
        this.keyval = '';
      },
      goblog(item){
            this.$router.push({path: "/blog",query:{article: item}})
      },
      lookup(){
        this.remote({
          url: "/search",
          method: "post",
          data: {
            title: this.keyval
          }
        })
        .then(res=>{
          this.res = res.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .labelhead {
    font-size: 2rem;
    color: #666;
    padding: 1rem 0;
  }
  .article{
    min-height: 200px;
    padding: 0 0 0 2rem;
    ul{
      list-style: none;
      font-size: 1.3rem;
      li{
        padding: .5rem 0;
      }
      a{
        text-decoration: none;
        &:hover{
          color: #409EFF;
          cursor: pointer;
        }
      }
    }
  }
  .result{
    margin: .2rem 0 .2rem 0;
  }
  .lookup {
    font-size: 1.6rem;
    padding: .2rem 0;
    width: 100%;
    position: relative;

    i{
      font-style: normal;
      position: absolute;
      top: 10px;
      left: calc(100% - 130px);
      z-index: 3;
      color: #409EFF;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      height: 40px;
      border: 1px solid #ccc;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      padding: 0 100px 0 10px;
      outline: none;
    }
    button {
      height: 40px;
      width: 100px;
      position: absolute;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      font-size: 1.3rem;
      letter-spacing: 5px;
      border: 1px solid #ccc;
      z-index: 2;
      top: 3px;
      left: calc(100% - 99px);
      outline: none;
      &:active {
        opacity: .5;
      }
    }
  }
</style>
