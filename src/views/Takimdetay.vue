<template>
  <h1>Takım Detay Sayfası</h1>
  <p>Takım Id: {{route.params.id}}</p>
  <p>{{$route.params.id}}</p>
  <p>Props ile id : {{ id }}</p>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            route:this.$route
        }
    }
}
</script>

<style>

</style>