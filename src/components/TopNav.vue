<script setup>
import { CaretDownFilled,StarFilled,UploadOutlined,DownloadOutlined } from '@ant-design/icons-vue';
import {defineProps} from 'vue'
const onClick = function(key){
    console.log(key)
}

defineProps({
  showBanner:{
    type: Boolean,
    required: true
  },
  bannerText:{
    type: String,
    required: true
  }
})
</script>
<template>
  <a-row class='top_nav'>
    <a-col :span="8" class='top_nav_left'>
      <router-link to='/'><h1>换卟岛</h1></router-link>
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          全部
          <CaretDownFilled />
        </a>
        <template #overlay>
          <a-menu @click="onClick">
            <a-menu-item>
              <a href="javascript:;">中国</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">德国</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-col>
    <a-col :span="16" class='top_nav_right'>
      <span><a href='/collect'><StarFilled />已收藏</a></span>
      <span><a href='/collect'><UploadOutlined />已发出</a></span>
      <span><a href='/collect'><DownloadOutlined />已收到</a></span>
<!--      <span><a href='/collect'><StarFilled />用户123123</a></span>-->
      <span><a-button @click="$router.push('/home/post')" type="primary">发布房源</a-button></span>
    </a-col>
  </a-row>
  <a-row class='top_nav_links'>
    <a-col :span="16" class='top_nav_links_left'>
      <a href='/'>换卟</a>
      <a href='/'>推荐</a>
      <a href='/'>找搭子</a>
      <a href='/'>日常分享</a>
      <a href='/'>二手换物</a>
      <a href='/'>探店分享</a>
      <a href='/'>技能交换</a>
    </a-col>
    <a-col :span="8" class='top_nav_links_right'>
        <a href='/'>FAQ</a>
    </a-col>
  </a-row>
  <div v-show='showBanner' class='top_nav_banner'>
    <img src='../assets/index/banner.png' style='width: 100%' alt=''>
    <div class='top_nav_banner_text'>{{bannerText}}</div>
  </div>
</template>
<style scoped>
    .top_nav_banner{
      width: 100%;
      position: relative;
    }
    .top_nav_banner_text{
      position: absolute;
      left: 100px;
      bottom: 50px;
      color: #fff;
      font-size: 32px;
    }
    .top_nav_links{
      background: #6B6B6B;
      padding: 10px 20px;
    }
    .top_nav_links a{
      color: #ffffff;
      text-decoration: none;
    }
    .top_nav{
      background: #000;
      padding: 20px 40px;
      color: #fff;
      display: flex;
      flex-wrap: nowrap;
    }
    .top_nav h1{
      padding: 0;
      font-size: 18px;
      display: inline;
      margin: 0 20px 0 0;
      color: #E2E2E2;
    }
    .top_nav_left{
      display: flex;
      align-items: center;
    }
    .top_nav_links_left a{
      margin-right: 20px;
    }
    .top_nav_right,.top_nav_links_right{
      display: flex;
      justify-content: end;
    }
    .top_nav_right span{
      margin-left: 10px;

      display: flex;
      align-items: center;
      justify-content: start;
      flex-wrap: nowrap;
    }
    .top_nav_right span:last-child{
      margin-left: 20px;
    }
    .top_nav_right span:first-child{
      margin-right: 5px;
      font-size: 14px;
    }
    .top_nav_right span a{
      color: #fff;
      text-decoration: none;
      display: flex;
      flex-wrap: nowrap;
    }
</style>
