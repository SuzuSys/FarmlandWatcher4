<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        class="pl-0 pl-sm-2"
      >
        FarmlandWatcher
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="goSignIn"
        style="text-transform: none"
      >
        Sign In
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: null
  }),
  methods: {
    goSignIn: function() {
      this.$router.push({ path: '/signin' });
    }
  }
};
</script>
