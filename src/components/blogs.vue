<template>
    <div class="blog_ele">
        <div class="chapter">
            <div>
                Vuex简介
            </div>
            <div>
                Jeckhenry发布于2018年8月6日
            </div>
        </div>
        <div class="blog_head">
            Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。
            至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用
            将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定
            的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
        </div>
        <p class="go_next"><router-link to="">阅读全文</router-link>></p>
    </div>
</template>

<script>
export default {
    name: 'blogs'
};
</script>

<style scoped lang='scss'>
.blog_ele {
    font-size: .16rem;
    padding: 0.2rem 0;
    border-top: 1px solid #ccc;
    .chapter{
        width: 100%;
        display: flex;
        padding: 0.1rem 0;
        div:nth-of-type(2){
            width: 300px;
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
        margin-top: .1rem;
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