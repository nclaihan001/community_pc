<script setup>
import TopNav from '@/components/TopNav.vue'
</script>

<template>
  <main>
    <div id='page_warp'>
      <TopNav banner-text='' :show-banner='false'/>
      <div class='content_wrap'>
        <h1 class='post_title'>发布房源</h1>
        <a-space direction="vertical" style='width: 100%'>
          <div class='post_title_2'>标题*</div>
          <a-input  autofocus placeholder="请设置2-24个字符" />
        </a-space>
        <a-space direction="vertical" style='width: 100%'>
          <div class='post_title_2'>地区*</div>
          <a-row>
            <a-col :span="12" class='gutter-row'>
              <a-select
                ref="select"
                style='width: 90%'
              >
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="disabled" disabled>Disabled</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
            </a-col>
            <a-col :span="12" class='gutter-row'>
              <a-select
                ref="select"
                disabled
                style='width: 90%;margin-left: 10%'
              >
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="disabled" disabled>Disabled</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-space>
        <a-space direction="vertical" style='width: 100%'>
          <div class='post_title_2'>可用日期*</div>
          <a-range-picker style='width: 100%' />
        </a-space>
        <a-row>
          <a-col :span="12">
            <a-space direction="vertical" style='width: 90%'>
              <div class='post_title_2'>住宿类型*</div>
              <a-select
                ref="select"
                style='width: 100%'
              >
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="disabled" disabled>Disabled</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
            </a-space>
          </a-col>
          <a-col :span="12">
            <a-space direction="vertical" style='width: 90%;margin-left: 10%'>
              <div class='post_title_2'>人数限制*</div>
              <a-input-number  :min="1" :max="10" style='width: 100%'/>
            </a-space>
          </a-col>
        </a-row>
        <a-space direction="vertical" style='width: 100%'>
          <div class='post_title_2'>周边交通情况描述*</div>
          <a-textarea placeholder="描述一下房屋周边的交通情况吧" :rows="4" />
        </a-space>
        <a-space direction="vertical" style='width: 100%'>
          <div class='post_title_2'>接待类型*</div>
          <a-select
            ref="select"
            style='width: 100%'
          >
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </a-space>
        <a-space direction="vertical" style='width: 100%'>
          <div class='post_title_2'>给客人的留言*</div>
          <a-textarea placeholder="描述一下房屋周边的交通情况吧" :rows="4" />
        </a-space>
        <a-row>
          <a-col :span='12'>
            <a-button  style='width: 90%;margin-top: 20px;margin-bottom: 20px'>取消</a-button>
          </a-col>
          <a-col :span='12'>
            <a-button type="primary" style='width: 90%;margin-left: 10%;margin-top: 20px;margin-bottom: 20px'>确认发布</a-button>
          </a-col>
        </a-row>
      </div>
    </div>
  </main>
</template>
<style scoped>
  .content_wrap{
    max-width: 400px;
    margin: 0 auto;
  }
  .post_title{
    width: 100%;
    text-align: center;
    margin-top: 30px;
    font-size: 48px;
  }
  .post_title_2{
    font-size: 18px;
    margin-top: 30px;
  }
</style>