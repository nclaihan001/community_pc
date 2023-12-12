<script setup>
import TopNav from '@/components/TopNav.vue'
import SquareCard from '@/components/SquareCard.vue'
let data_1 = [
  {
    "user": {
      "username":"用户名1",
      "avatar":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    },
    "create":"2023-12-12 12:00",
    "text":"asdasdasdasdasdasdasdsssssssssssssssssssssssssssssssssssssssssssss",
    "image":[
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    ]
  },
  {
    "user": {
      "username":"用户名1",
      "avatar":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    },
    "create":"2023-12-12 12:00",
    "text":"asdasdasdasdasdasdasdsssssssssssssssssssssssssssssssssssssssssssss",
    "image":[
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    ]
  },
  {
    "user": {
      "username":"用户名1",
      "avatar":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    },
    "create":"2023-12-12 12:00",
    "text":"asdasdasdasdasdasdasdsssssssssssssssssssssssssssssssssssssssssssss",
    "image":[
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    ]
  }
]
let data_2 = data_1
let data_3 = data_1
let data_4 = data_1
let data_5 = data_1
let data_6 = data_1
</script>
<template>
  <main>
    <div id='page_warp'>
      <TopNav banner-text='' :show-banner='false'/>
      <div class='content_wrap'>
        <h1 class='post_title'>岛内公示栏</h1>
        <a-tabs v-model:activeKey="$route.params.type">
          <a-tab-pane key="1" tab="推荐">
            <SquareCard v-for='data in data_1' :key='data.id' :data='data'/>
          </a-tab-pane>
          <a-tab-pane key="2" tab="找搭子">
            <SquareCard v-for='data in data_2' :key='data.id' :data='data'/>
          </a-tab-pane>
          <a-tab-pane key="3" tab="日常分享">
            <SquareCard v-for='data in data_3' :key='data.id' :data='data'/>
          </a-tab-pane>
          <a-tab-pane key="5" tab="本地探店">
            <SquareCard v-for='data in data_4' :key='data.id' :data='data'/>
          </a-tab-pane>
          <a-tab-pane key="6" tab="技能交换">
            <SquareCard v-for='data in data_5' :key='data.id' :data='data'/>
          </a-tab-pane>
          <a-tab-pane key="4" tab="二手换物">
            <SquareCard v-for='data in data_6' :key='data.id' :data='data'/>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </main>
</template>
<style scoped>
.content_wrap{
  max-width: 1000px;
  margin: 0 auto;
}
.post_title{
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: 42px;
}
</style>