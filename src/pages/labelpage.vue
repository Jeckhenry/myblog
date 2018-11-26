<template>
    <div>
        <div class="labelhead">标签</div>
        <div class="pageBtn">
            <button v-for="item in labelarr">{{item.labelname}}</button>
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
            nexturl: '/about',
            labelarr: []
          }
        },
        components: { footerEl,goNext },
        created(){
          this.initdata()
        },
        methods: {
          initdata(){
            this.remote({
              url: "/labels"
            })
            .then(res=>{
              this.labelarr = res.data
            },err=>{

            })
          }
        }
    }
</script>

<style scoped lang='scss'>
$blue:rgb(64, 158, 255);
.labelhead{
  font-size: 2rem;
  color: #666;
}
.pageBtn{
  padding: 1.5rem;
  line-height: 0;
  word-break: break-all;
  button{
    min-width: 4rem;
    padding: .5rem;
    margin: 0 1rem 1rem 0;
    background: #ffffff;
    border: 1px solid $blue;
    color: $blue;
    border-radius: 5px;
    &:active{
      outline: none;
    }
  }
}
</style>
