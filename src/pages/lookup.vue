<template>
  <div>
    <div class="labelhead">站内搜索</div>
    <div class="lookup">
      <input type="text" v-model="keyval">
      <i @click="clear" v-show="showClear">X</i>
      <button>搜索</button>
    </div>
    <div class="article">

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
        showClear: false
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
