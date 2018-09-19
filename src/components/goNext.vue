<template>
    <div class="filedir">
        <span>{{nextname}}</span> 
        <span><router-link :to='nexturl'>下一页>></router-link></span>
    </div>
</template>

<script>
    export default {
        name: 'goNext',
        props: ['nextname', 'nexturl']
    }
</script>

<style scoped lang='scss'>
.filedir{
    width: 100%;
    height: 60px;
    font-size: .16rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    line-height: 60px;
    position: relative;
    span{
        display: inline-block;
    }
    span:first-child{
        width: 100%;
        text-align: center;
        color: #409EFF;
    }
    span:nth-of-type(2){
        position: absolute;
        top: 0;
        right: .2rem;
        a{
            text-decoration: none;
        }
    }
}
</style>