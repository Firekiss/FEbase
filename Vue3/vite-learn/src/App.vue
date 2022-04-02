<template>
  <input type="text" v-model="keyword" />
  <h3>{{keyword}}</h3>
</template>
  
<script lang="ts">
import { ref, customRef } from 'vue'

export default {

  setup() {
    // let keyword = ref('hello')
    function myRef(value) {
      console.log('--myRef--', value)
      return customRef((track, trigger) => {
        return {
          get() {
            track()
            return value
          },
          set(newValue) {
            value = newValue
            trigger()
          }
        }
      })
    }

    let keyword = myRef('hello')

    return {
      keyword
    }
  }
}
</script>