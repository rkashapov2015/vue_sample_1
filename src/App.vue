<template>
  <div class="layout">
    <div id="app">
      <div id="nav" class="routers-list">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/users">Users</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
.text-left {
  text-align: left;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.layout {
  margin: auto;
  max-width: 700px;
}

#nav {
    padding: 30px;
    position: relative;
    a {
        font-weight: bold;
        color: #2c3e50;
        padding: 0 5px;
        position: relative;
        &.router-link-exact-active {
            color: #42b983;
        }
    }

    & > a + a:before {
        content: '';
        left: 0px;
        top: 0;
        position: absolute;
        border-left: 1px solid #000;
        height: 100%;
    }
}
</style>
