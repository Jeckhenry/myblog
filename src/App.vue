<template>
  <div id="app">
    <headerEle></headerEle>
    <router-view class="viewEle" />
  </div>
</template>

<script>
  import  headerEle from './components/headerEle'
export default {
  name: 'App',
  components: { headerEle }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.viewEle{
  word-break: break-all;
}
  @media screen and (max-width: 770px) {
    .viewEle{
      padding: 80px 50px 0 50px;
    }
  }
  @media screen and (min-width: 770px) and (max-width: 1024px) {
    .viewEle{
      padding: 30px 50px 0 125px;
    }
  }
  @media screen and (min-width: 1024px) {
    .viewEle{
      padding: 30px 50px 0 300px;
      max-width: 1080px;
    }
  }
</style>
