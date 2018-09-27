<template>
    <div>
      <div class="labelhead">关于我</div>
      <div class="myself">自我介绍</div>
      <div class="myintroduce">
          关于自己，好像没什么可说的，以后有了再说吧！
      </div>
      <footerEl></footerEl>
    </div>
</template>

<script>
  //关于
    import footerEl from '../components/footerEl'
    export default {
        name: "about",
      components: {footerEl}
    }
</script>

<style scoped lang="scss">
  .labelhead {
    font-size: 2rem;
    color: #666;
    padding: 1rem 0;
  }
  .myself{
    font-size: 1.8rem;
    padding: .5rem 0;
    border-bottom: 2px solid #409EFF;
  }
  .myintroduce{
    padding: .7rem;
  }
</style>
