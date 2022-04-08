<template>
  <div>
    <v-row justify="center" align="center" class="mt-2">
      <v-col cols="12"  justify="center" align="center">
<v-btn class="primary" outlined v-on:click="goToJokePage()">
  <v-icon left>mdi-arrow-right</v-icon>
  
  Fetch Joke Page
</v-btn>
      </v-col>
    </v-row>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      joke: '',
    };
  },
 
methods: {
  goToJokePage() {
    this.$router.push('/fetchJoke');
  }
  

  
}
}
</script>

<style>

</style>