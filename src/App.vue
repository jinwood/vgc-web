<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <span v-if="isLoggedIn">
        <router-link to="/my-vehicle"> My Vehicle </router-link> |
        <button @click="signOut">Logout</button></span
      >
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link> |
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(true);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
});

const signOut = () => {
  firebase.auth().signOut();
  router.push("/");
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
