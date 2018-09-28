<template>
  <div>
    <div class="title">
      <span>Vuex简介</span>
      <span>
              Jeckhenry发布于2018/09/25
          </span>
    </div>
    <div class="review">
      Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。 至此它便作为一个“唯一数据源 (SSOT)”而存在。
      这也意味着，每个应用 将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定
      的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
    </div>
    <div class="article">
      Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。 至此它便作为一个“唯一数据源 (SSOT)”而存在。
      这也意味着，每个应用 将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定
      的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
      Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。 至此它便作为一个“唯一数据源 (SSOT)”而存在。
      这也意味着，每个应用 将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定
      的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
      Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。 至此它便作为一个“唯一数据源 (SSOT)”而存在。
      这也意味着，每个应用 将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定
      的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog",
    computed: {
      articleid() {
        return this.$route.query.articleid;
      }
    }
  }
</script>

<style scoped lang="scss">
  $blue: #409EFF;
.title{
  padding: 1rem 0;
  display: flex;
  border-bottom: 1px solid $blue;
  span{
    display: inline-block;
    &:first-child{
      flex: 1;
      font-size: 1.5rem;
    }
    &:nth-child(2){
      width: 300px;
      text-align: right;
    }
  }
}
  .review{
    padding: 1rem;
    margin-top: .5rem;
    background: #F2F6FC;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }
  .article{
    padding: 1rem;
  }
</style>
