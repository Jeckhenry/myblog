<template>
    <div>
        {{articleid}}
    </div>
</template>

<script>
    export default {
        name: "blog",
        computed: {
          articleid(){
            return this.$route.query.articleid;
          }
        }
    }
</script>

<style scoped>

</style>
