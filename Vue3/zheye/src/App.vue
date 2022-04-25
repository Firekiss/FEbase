<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form action="">
      <div class="mb-3">
        <label class="form-label">邮件地址</label>
        <validate-input :rules="emailRules" v-model="emailVal"></validate-input>

        {{emailVal}}
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, { ColumnProps } from './components/ColumnList.vue';
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue';
import ValidateInput, { RulesProp } from './components/ValidateInput.vue';

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏',
    avatar: ''
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏',
    avatar: ''
  }
];

const currentUser: UserProps = {
  isLogin: true,
}

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup() {
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮件地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮件格式' },
    ];

    const emailVal = ref('valk');

    return {
      list: testData,
      currentUser,
      emailRules,
      emailVal,
    }
  }
});
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
