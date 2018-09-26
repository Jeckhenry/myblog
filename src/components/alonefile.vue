<template>
    <div class="alonefile">
        <ul v-for="file in filearr">
          <li class="lititle">
            {{file.time}} ({{filearr.length}})
            <ul>
              <li v-for="filemsg in file.data">
                  <router-link :to="{path: '/blog',query:{articleid: filemsg.id}}">{{filemsg.title}}&nbsp; <span>{{filemsg.time}}</span></router-link>
              </li>
            </ul>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "alonefile",
        props: ['filearr']
    }
</script>

<style scoped lang="scss">
.alonefile{
  font-size: .16rem;
  margin-bottom: .3rem;
  .lititle{
    margin-top: .1rem;
    font-size: .20rem;
    font-weight: bold;
    list-style: none;
    ul{
      list-style: disc;
      font-weight: normal;
      font-size: .16rem;
      padding: 0 .15rem;
      li{
        padding: .1rem;
        span{
          color: #ccc;
          font-style: italic;
        }
      }
      a{
        color: #409EFF;
        text-decoration: none;
      }
    }
  }
}
</style>
