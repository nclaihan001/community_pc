<script setup>
  import TopNav from '@/components/TopNav.vue'
  let info = {
    "title":"巴塞罗那市中心的公寓",
    "sub_title":["独立公寓","可住2人","Studio"],
    "cover":[],
    "user":{
      "username":"呵呵呵呵",
      "avatar":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    },
    "start":"5月20",
    "end":"5月30",
    "peoples":2,
    "info_tr":"这是一段有点长的交通描述，我也不知道为什么这么长这是一段有点长的交通描述，我也不知道为什么这么长这是一段有点长的交通描述，我也不知道为什么这么长这是一段有点长的交通描述，我也不知道为什么这么长",
    "type":"常驻",
    "address":"asdasdasdasdasdasdasdasd",
    "message":"我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道我什么都不知道"
  }
</script>

<template>
  <main>
    <div id='page_warp'>
      <TopNav banner-text='' :show-banner='false'/>
      <div class='content_wrap'>
        <a-carousel style='margin-top: 40px'>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </a-carousel>
        <a-row style='margin-top: 40px'>
          <a-col :span='14' style='position: relative'>
            <h1 style='font-size: 24px'>{{info.title}}</h1>
            <small>{{info.sub_title.join(" - ")}}</small>
            <div style='position: absolute;top: 0;right: 0'>
              <img :src='info.user.avatar' style='width: 42px;height: 42px;border-radius: 50%'>
              <div>{{info.user.username}}</div>
            </div>
            <hr style='margin-top: 5px;margin-bottom: 5px' />
            <a-row class='des_line'>
              <a-col :span='4'>日期</a-col>
              <a-col :span='20'>{{info.start}} - {{info.end}}</a-col>
            </a-row>
            <a-row class='des_line'>
              <a-col :span='4'>接受人数</a-col>
              <a-col :span='20'>{{info.peoples}}</a-col>
            </a-row>
            <a-row class='des_line'>
              <a-col :span='4'>交通情况</a-col>
              <a-col :span='20'>{{info.info_tr}}</a-col>
            </a-row>
            <a-row class='des_line'>
              <a-col :span='4'>接待类型</a-col>
              <a-col :span='20'>{{info.type}}</a-col>
            </a-row>
            <a-row class='des_line'>
              <a-col :span='4'>地址</a-col>
              <a-col :span='20'>{{info.address}}</a-col>
            </a-row>
            <a-row class='des_line'>
              <a-col :span='4'>房主留言</a-col>
              <a-col :span='20'>{{info.message}}</a-col>
            </a-row>
          </a-col>
          <a-col :span='10'>
            <div style='width: 95%;margin-left: 5%'>
              <a-card style="width: 100%">
                <div>居住时间</div>
                <a-range-picker />
                <div>申请人数</div>
                <a-input-number  :min="1" :max="10" />
                <a-textarea placeholder="Basic usage" :rows="4" style='margin-top: 5px'/>
              </a-card>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </main>
</template>
<style scoped>
.content_wrap{
  max-width: 800px;
  margin: 0 auto;
}
:deep(.slick-slide) {
  text-align: center;
  height: 480px;
  line-height: 480px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
.des_line{
  margin-bottom: 20px;
}
</style>