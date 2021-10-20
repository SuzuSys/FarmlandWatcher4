<template>
  <v-container>
    <v-card
      class="mx-auto fill-width"
      max-width="300"
      elevation="2"
    >
      <v-card-title class="justify-center">
        Sign Up
      </v-card-title>
      <v-divider></v-divider>
      <v-container>
        <v-text-field
          v-model="email"
          :rules="[emailRules.required, emailRules.regex]"
          outlined
          dense
          autofocus
          label="E-mail"
        ></v-text-field>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'SignUp',

    data: () => ({
      email: null,
      emailRules: {
        required: value =>
          !!value || 'メールアドレスは必須です',
        regex: value =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || 'メールアドレスの形式が違います'
      }
    })
  };
</script>