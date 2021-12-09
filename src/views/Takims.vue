<template>
  <h1>Takımlar</h1>
  <div v-for="takim in takimlar" :key="takim.id">
      <router-link :to="{name:'TakimDetay', params:{id:takim.id}}">
          <p>{{takim.ad}}</p>
      </router-link>
  </div>
  
</template>

<script>
export default {
    data(){
        return{
            takimlar:[
                {id:1, ad:"Galatasaray", no:1},
                {id:2, ad:"Fenerbahce", no:2},
                {id:3, ad:'Beşiktaş', no:3}
            ]
        }
    }
}
</script>

<style>

</style>