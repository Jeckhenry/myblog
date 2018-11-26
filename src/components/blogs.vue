<template>
    <div class="blog_ele">
        <div v-for="item in blogarr">
          <div class="chapter">
              <div>
                  {{item.articleTitle}}
              </div>
              <div>
                  发布于：{{item.subDate}}
              </div>
          </div>
          <div class="blog_head" v-html="marked(item.articleInfo)">
              
          </div>
          <p class="go_next"><a @click="goblog(item)">阅读全文</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blogs',
    props: ['blogarr'],
    methods: {
        goblog(item){
            this.$router.push({path: "/blog",query:{article: item}})
        }
    }
};
</script>

<style scoped lang='scss'>
.blog_ele {
    padding: 2rem 0;
    .chapter{
        width: 100%;
        display: flex;
        padding: 1rem 0;
        border-top: 1px solid #ccc;
      div:nth-of-type(2){
            text-align: right;
        }
        div:first-child{
            flex: 1;
            font-size: 2rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: bold;
        }
    }
    .blog_head{
        height: 6rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .go_next{
        margin: 1rem 0;
        a{
            text-decoration: none;
            color: #409EFF;
            &:active{
                color: rgb(99, 64, 254);
            }
            &:hover{
                cursor: pointer;
            }
        }
    }
}
</style>
