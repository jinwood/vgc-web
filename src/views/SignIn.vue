<template>
  <h1>Login</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errorMessage">{{ errorMessage }}</p>
  <p><button @click="signIn">Submit</button></p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const signIn = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((data: firebase.auth.UserCredential) => {
      console.log("registered");
      router.push("/my-vehicle");
    })
    .catch((error: { code: string; message: string }) => {
      const { code } = error;
      errorMessage.value = code;
    });
};
</script>
