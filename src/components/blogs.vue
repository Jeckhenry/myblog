<template>
    <div class="blog_ele">
        <div v-for="item in blogarr">
          <div class="chapter">
              <div>
                  {{item.title}}
              </div>
              <div>
                  {{item.author}}发布于{{item.writetime}}
              </div>
          </div>
          <div class="blog_head">
              {{item.review}}
          </div>
          <p class="go_next"><router-link to="">阅读全文</router-link>></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blogs',
    props: ['blogarr']
};
</script>

<style scoped lang='scss'>
.blog_ele {
    font-size: .16rem;
    padding: 0.2rem 0;
    .chapter{
        width: 100%;
        display: flex;
        padding: 0.1rem 0;
        border-top: 1px solid #ccc;
      div:nth-of-type(2){
            text-align: right;
        }
        div:first-child{
            flex: 1;
            font-size: .25rem;
            font-weight: bold;
        }
    }
    .blog_head{
        line-height: .35rem;
    }
    .go_next{
        margin: .1rem 0;
        a{
            text-decoration: none;
            color: #409EFF;
            &:active{
                color: rgb(99, 64, 254);
            }
        }
    }
}
</style>
