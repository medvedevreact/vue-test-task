<template>
  <div id="app">
    <header class="app-header">
      <h1>
        <router-link class="app-logo" to="/"> Note-manager </router-link>
      </h1>
      <router-link to="/addNote" class="add-note-button"> + </router-link>
    </header>
    <div class="app-container">
      <router-view :notes="notes" :addNote="addNote"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.app-header {
  height: 150px;
  background-color: rgb(26, 36, 63);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}

.add-note-button {
  background-color: orange;
  color: black;
  padding: 15px;
  width: 40px;
  height: 40px;
  font-size: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.add-note-button:hover {
  background-color: rgb(214, 139, 0);
}

.app-logo {
  text-decoration: none;
  color: white;
}

.app-container {
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1310px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
}

#app {
  height: calc(100% - 150px);
}
</style>
