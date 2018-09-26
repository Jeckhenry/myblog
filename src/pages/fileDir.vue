<template>
    <div>
      <div class="labelhead">归档</div>
      <alonefile :filearr="filearr"></alonefile>
      <goNext :nextname='nextname' :nexturl='nexturl'></goNext>
      <footerEl></footerEl>
    </div>
</template>

<script>
  //归档
    import footerEl from '../components/footerEl'
    import goNext from '../components/goNext'
    import alonefile from '../components/alonefile'
    export default {
        name: "fileDir",
        data(){
          return {
            nextname: '标签',
            nexturl: '/labelpage',
            filearr: [{time: '2018/02/06',data:[{title: 'vue入门学习',id: '2018/02/06/vue',time: '2018/03/06'},{title: 'vue入门学习',id: '2018/02/06/vue',time: '2018/03/06'}]},
              {time: '2018/02/06',data:[{title: 'vue入门学习',id: '2018/02/06/vue',time: '2018/03/06'},{title: 'vue入门学习',id: '2018/02/06/vue',time: '2018/03/06'}]}], //课程列表
          }
        },
      components: { footerEl, goNext, alonefile }
    }
</script>

<style scoped lang="scss">
  .labelhead{
    font-size: .2rem;
    color: #666;
    padding: .1rem 0;
  }
</style>
