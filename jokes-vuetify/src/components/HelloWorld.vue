<template>
  <v-container>
    <h1 class="primary--text mb-5">Counter Application</h1>
    <h2>Counter Value : {{ CounterValue }}</h2>
    <v-btn
      class="primary mb-5"
      v-on:click="startCounter(CounterValue)"
      v-if="!counterRunning"
      >Start Counter</v-btn
    >
    <v-btn
      class="primary mb-5"
      v-on:click="startCounter(CounterValue)"
      v-if="counterRunning"
      >Stop Counter</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    btnText: "Start Counter",
    CounterValue: 0,
    counterRunning: false,
    intervalId: null,
  }),
  methods: {
    startCounter() {
      if (this.counterRunning) {
        this.counterRunning = false;
        clearInterval(this.intervalId);
      } else {
        this.counterRunning = true;
        this.intervalId = setInterval(() => {
          this.CounterValue = this.CounterValue + 1;
          // CounterValue++;
        }, 1000);
      }
    },
  },
};
</script>
