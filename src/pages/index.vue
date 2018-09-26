<template>
  <div class="indexpage">
    <div class="mytroduce">
          我是前端小白，出于对前端的热爱，奋不顾身的入了‘坑’。一年多的开发中，遇到了很多的问题，走了很多弯路，
        于是想将自己遇到的问题整理一下，方便以后查阅。
    </div>
    <div class="blogs">
      <blogs :blogarr="blogarr"></blogs>
    </div>
    <goNext :nextname='nextname' :nexturl='nexturl'></goNext>
    <footerEl></footerEl>
   
  </div>
</template>

<script>
  //首页
import blogs from '../components/blogs.vue'
import footerEl from '../components/footerEl.vue'
import goNext from '../components/goNext.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      nextname: '博客归档',
      nexturl: '/fileDir',
      blogarr: [{title:'Vuex简介',review: 'Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。\n' +
          '            至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用\n' +
          '            将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定\n' +
          '            的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。',article:'',author: 'Jeckhenry',writetime:'2018/09/25'},{title:'Vuex简介',review: 'Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。\n' +
          '            至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用\n' +
          '            将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定\n' +
          '            的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。',article:'',author: 'Jeckhenry',writetime:'2018/09/25'},{title:'Vuex简介',review: 'Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。\n' +
          '            至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用\n' +
          '            将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定\n' +
          '            的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。',article:'',author: 'Jeckhenry',writetime:'2018/09/25'},{title:'Vuex简介',review: 'Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。\n' +
          '            至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用\n' +
          '            将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定\n' +
          '            的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。',article:'',author: 'Jeckhenry',writetime:'2018/09/25'},{title:'Vuex简介',review: 'Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。\n' +
          '            至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用\n' +
          '            将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定\n' +
          '            的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。',article:'',author: 'Jeckhenry',writetime:'2018/09/25'},{title:'Vuex简介',review: 'Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。\n' +
          '            至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用\n' +
          '            将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定\n' +
          '            的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。',article:'',author: 'Jeckhenry',writetime:'2018/09/25'},{title:'Vuex简介',review: 'Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。\n' +
          '            至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用\n' +
          '            将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定\n' +
          '            的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。',article:'',author: 'Jeckhenry',writetime:'2018/09/25'},{title:'Vuex简介',review: 'Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。\n' +
          '            至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用\n' +
          '            将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定\n' +
          '            的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。',article:'',author: 'Jeckhenry',writetime:'2018/09/25'},]
    }
  },
  components: { blogs,footerEl,goNext }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.indexpage{
  font-size: .16rem;
  .mytroduce{
    font-size: .18rem;
    text-indent: 2em;
    line-height: .4rem;
    padding: .1rem;
    background: #F2F6FC;
    border-radius: 10px;
  }
  .blogs{
    padding: .2rem .1rem;
  }
}

</style>
