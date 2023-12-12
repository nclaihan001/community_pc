<script setup>
import {defineProps} from 'vue'

defineProps({
  data:{
    type: Object,
    required: true
  },
})
</script>
<template>
  <a-row style='width: 200px;'>
    <a-col :span='6'><img :src='data.user.avatar' class='box_info_avatar' width='100%'></a-col>
    <a-col :span='18' style='padding-left: 10px;'><div>{{data.user.username}}</div><div>{{data.create}}</div></a-col>
  </a-row>
  <div class='squareText'>{{data.text}}</div>
  <a-row>
    <a-col v-for='image in data.image' :key='image' style='padding: 5px'>
      <a-image
        :width="200"
        :height='200'
        :src="image"
      />
    </a-col>
  </a-row>
  <hr />
</template>
<style scoped>
.squareText{
  font-size: 24px;
  word-wrap:break-word;
  word-break:break-all;
}
</style>
