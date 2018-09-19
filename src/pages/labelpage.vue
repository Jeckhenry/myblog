<template>
    <div>
        <div class="labelhead">标签</div>
        <div class="pageBtn">
            <button>Vue</button><button>Vue</button><button>Vue</button>
        </div>
        <goNext :nextname='nextname' :nexturl='nexturl'></goNext>
        <footerEl></footerEl>
    </div>
</template>

<script>
  //标签
  import  footerEl from '../components/footerEl'
  import goNext from '../components/goNext'
    export default {
        name: "labelpage",
        data(){
          return{
            nextname: '关于',
            nexturl: '/about'
          }
        },
        components: { footerEl,goNext }
    }
</script>

<style scoped lang='scss'>
$blue:rgb(64, 158, 255);
.labelhead{
  font-size: .2rem;
  color: #666;
}
.pageBtn{
  padding: .1rem;
  line-height: 0;
  word-break: break-all;
  button{
    min-width: .8rem;
    padding: .05rem;
    margin: 0 .2rem .2rem 0;
    background: #ffffff;
    border: 1px solid $blue;
    color: $blue;
    border-radius: 5px;
  }
}
</style>
