<template>
  <v-container>
    <v-card
      class="mx-auto fill-width"
      max-width="300"
      elevation="2"
    >
      <v-card-title class="justify-center">
        Create your account
      </v-card-title>
      <v-divider></v-divider>
      <v-container>
        <v-text-field
          v-model="username"
          :rules="[usernameRules.required, usernameRules.regex]"
          outlined
          dense
          autofocus
          label="username"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[emailRules.required, emailRules.regex]"
          outlined
          dense
          label="e-mail"
        ></v-text-field>
      <v-text-field 
          v-model="password"
          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.regex]"
          :type="passwordShow ? 'text' : 'password'"
          dense
          name="input-password"
          outlined
          placeholder="password"
          @click:append="passwordShow = !passwordShow"
        ></v-text-field>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-3 mb-2">
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'SignUp',

    data: () => ({
      username: null,
      usernameRules: {
        required: value =>
          !!value || 'ユーザー名は必須です',
        regex: value =>
          /^[A-Za-z0-9][A-Za-z0-9._-]{3,16}$/.test(value) 
          || '半角英小文字大文字数字と特殊文字(_-.)を含むことができます。特殊文字は先頭につけられません。'
      },
      email: null,
      emailRules: {
        required: value =>
          !!value || 'メールアドレスは必須です',
        regex: value =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || 'メールアドレスの形式が違います'
      },
      password: null,
      passwordShow: false,
      passwordRules: {
        required: value =>
          !!value || 'パスワードは必須です',
        regex: value =>
          /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,128}$/.test(value) ||
          '半角英小文字大文字数字をそれぞれ1種類以上含む7文字以上128文字以下で入力してください'
      }
    })
  };
</script>