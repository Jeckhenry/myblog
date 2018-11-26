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
      blogarr: []
    }
  },
  components: { blogs,footerEl,goNext },
  created(){
    this.inidata()
  },
  methods: {
    //初始化数据
    inidata(){
      this.remote({
        url: "/articles",
        method: "post"
      })
      .then(res=>{
        this.blogarr = res.data;
      },err=>{
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.indexpage{
  font-size: 1rem;
  .mytroduce{
    font-size: 1rem;
    text-indent: 2em;
    line-height: 2rem;
    padding: 1rem;
    background: #F2F6FC;
    border-radius: 10px;
  }
  .blogs{
    padding: 1rem;
  }
}

</style>
