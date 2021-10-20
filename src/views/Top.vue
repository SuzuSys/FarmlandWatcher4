<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/icon.svg')"
          class="my-3 mx-auto"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="text-h4 mb-3">
          FarmlandWatcher
        </h1>
        <p class="subheading font-weight-regular">
          農地管理をリーズナブルに！
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn
          color="primary"
          elevation="2"
          @click="goSignUp"
        >
          Get Started
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Top',

    data: () => ({
    }),
    methods: {
      goSignUp: function() {
        this.$router.push({ path: '/signup' });
      }
    }
  };
</script>
