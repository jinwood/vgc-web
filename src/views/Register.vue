<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const register = () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((data: firebase.auth.UserCredential) => {
      console.log("registered");
      router.push("/my-vehicle");
    })
    .catch((error: { code: string; message: string }) => {
      console.log(error.code);
      console.log(error.message);
    });
};
</script>
