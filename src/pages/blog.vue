<template>
  <div>
    <div class="title">
      <span>{{article.article.articleTitle}}</span>
      <span>
              Jeckhenry发布于&nbsp;{{article.article.subDate}}
          </span>
    </div>
    <div class="article" v-html="articleinfo">
     
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog",
    computed: {
      article() {
        return this.$route.query;
      },
      articleinfo(){
        return this.marked(this.$route.query.article.articleInfo)
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
