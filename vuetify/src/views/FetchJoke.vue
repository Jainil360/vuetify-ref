<template>
  <div>
    <v-row justify="center" align="center" class="mt-2">
      <v-col cols="12"  justify="center" align="center">
        <h2>Jokes API</h2>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-2">
    <v-col cols="12"  justify="center" align="center">
      <v-btn class="primary" rounded v-on:click="FetchJoke()">
        <v-icon left>mdi-download</v-icon>
        
Fetch Joke
      </v-btn>
    </v-col>
    <v-col  cols="12"  justify="center" align="center" v-if="joke == ''">
      Press Fetch Joke Button
    </v-col>
      <v-col  cols="12"  justify="center" align="center">
      {{joke}}
    </v-col>
     <v-col  cols="12"  justify="center" align="start" class="ml-2">
       <v-btn class="primary" rounded v-on:click="GoBack()" >
        <v-icon left>mdi-arrow-left</v-icon>
Go Back
      </v-btn>
   
    </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      joke: '',
    };
  },
 
methods: {
  FetchJoke() {
    axios.get('https://api.jokes.one/jod?category=animal')
    .then(response => {
      this.joke = response.data.contents.jokes[0].joke.text;
    })
    .catch(error => {
      console.log(error);
    });
  }
  ,
    GoBack() {
        this.$router.push('/');
    }
}
}
</script>

<style>

</style>