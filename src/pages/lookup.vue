<template>
    <div>
      <div class="labelhead">站内搜索</div>
      <div class="lookup">
        <input type="text">
        <button>搜索</button>
      </div>
      <footerEl></footerEl>
    </div>
</template>

<script>
  //查找
  import footerEl from '../components/footerEl'
    export default {
        name: "lookup",
        components: { footerEl }
    }
</script>

<style scoped lang="scss">
  .labelhead{
    font-size: 2rem;
    color: #666;
    padding: 1rem 0;
  }
  .lookup{
    font-size: 1.6rem;
    padding: .2rem 0;
    width: 100%;
    position: relative;
    input{
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
    button{
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
      &:active{
        opacity: .5;
      }
    }
  }
</style>
