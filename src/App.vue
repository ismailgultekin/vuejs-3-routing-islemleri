<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name:'Takimlar'}">Takımlar</router-link>
  </div>
  <router-view/>

  <div id="nav">
    <ul>
      <li><button @click="anasayfa">Anasayfa</button></li>
      <li><button @click="geri">Geri</button></li>
      <li><button @click="ileri">Ileri</button></li>
    </ul>
  </div>
</template>

<script>

export default {
  methods:{
    anasayfa(){
      this.$router.push({name:'Home'});
    },
    geri(){
      this.$router.go(-1);
    },
    ileri(){
      this.$router.go(+1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
ul{width: 200px; margin:0 auto;}
li{float: left;margin-right: 10px;list-style-type: none;}
</style>
