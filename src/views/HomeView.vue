<script setup>
  import TopNav from '@/components/TopNav.vue'
  import { ref } from 'vue';
  const current = ref(2);
</script>

<template>
  <main>
    <div id='page_warp'>
      <TopNav />
      <div class='content_wrap'>
        <div class='index_tag_warp'>
          <div class='index_tag'><a href='#'><img src='@/assets/index/tag_1.png' alt=''></a></div>
          <div class='index_tag'><a href='#'><img src='@/assets/index/tag_1.png' alt=''></a></div>
          <div class='index_tag'><a href='#'><img src='@/assets/index/tag_1.png' alt=''></a></div>
          <div class='index_tag'><a href='#'><img src='@/assets/index/tag_1.png' alt=''></a></div>
          <div class='index_tag'><a href='#'><img src='@/assets/index/tag_1.png' alt=''></a></div>
          <div class='index_tag'><a href='#'><img src='@/assets/index/tag_1.png' alt=''></a></div>
        </div>
        <hr style='margin-top: 10px;margin-bottom: 10px'/>
        <h2 style='font-weight: bold'>推荐</h2>
        <a-row class='recommend_list' :gutter="16">
          <a-col :span="8" class='recommend_item gutter-row'>
            <div class='gutter-box'>
              <div class='box_wrap'>
                <div class='box_cover'>
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div class='box_info'>
                  <a-row>
                    <a-col :span="16">
                      <div class='box_info_wrap'>
                        <h3>巴塞罗纳出租屋</h3>
                        <small>哥德堡 - 维修 - 免费</small>
                      </div>
                    </a-col>
                    <a-col :span="8" class='box_info_right'>
                      <div class='box_info_wrap'>
                        <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' class='box_info_avatar'>
                        <div class='box_info_user'>呵呵呵呵</div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8" class='recommend_item gutter-row'>
            <div class='gutter-box'>
              <div class='box_wrap'>
                <div class='box_cover'>
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div class='box_info'>
                  <a-row>
                    <a-col :span="16">
                      <div class='box_info_wrap'>
                        <h3>巴塞罗纳出租屋</h3>
                        <small>哥德堡 - 维修 - 免费</small>
                      </div>
                    </a-col>
                    <a-col :span="8" class='box_info_right'>
                      <div class='box_info_wrap'>
                        <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' class='box_info_avatar'>
                        <div class='box_info_user'>呵呵呵呵</div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8" class='recommend_item gutter-row'>
            <div class='gutter-box'>
              <div class='box_wrap'>
                <div class='box_cover'>
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div class='box_info'>
                  <a-row>
                    <a-col :span="16">
                      <div class='box_info_wrap'>
                        <h3>巴塞罗纳出租屋</h3>
                        <small>哥德堡 - 维修 - 免费</small>
                      </div>
                    </a-col>
                    <a-col :span="8" class='box_info_right'>
                      <div class='box_info_wrap'>
                        <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' class='box_info_avatar'>
                        <div class='box_info_user'>呵呵呵呵</div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8" class='recommend_item gutter-row'>
            <div class='gutter-box'>
              <div class='box_wrap'>
                <div class='box_cover'>
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div class='box_info'>
                  <a-row>
                    <a-col :span="16">
                      <div class='box_info_wrap'>
                        <h3>巴塞罗纳出租屋</h3>
                        <small>哥德堡 - 维修 - 免费</small>
                      </div>
                    </a-col>
                    <a-col :span="8" class='box_info_right'>
                      <div class='box_info_wrap'>
                        <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' class='box_info_avatar'>
                        <div class='box_info_user'>呵呵呵呵</div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8" class='recommend_item gutter-row'>
            <div class='gutter-box'>
              <div class='box_wrap'>
                <div class='box_cover'>
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div class='box_info'>
                  <a-row>
                    <a-col :span="16">
                      <div class='box_info_wrap'>
                        <h3>巴塞罗纳出租屋</h3>
                        <small>哥德堡 - 维修 - 免费</small>
                      </div>
                    </a-col>
                    <a-col :span="8" class='box_info_right'>
                      <div class='box_info_wrap'>
                        <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' class='box_info_avatar'>
                        <div class='box_info_user'>呵呵呵呵</div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8" class='recommend_item gutter-row'>
            <div class='gutter-box'>
              <div class='box_wrap'>
                <div class='box_cover'>
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div class='box_info'>
                  <a-row>
                    <a-col :span="16">
                      <div class='box_info_wrap'>
                        <h3>巴塞罗纳出租屋</h3>
                        <small>哥德堡 - 维修 - 免费</small>
                      </div>
                    </a-col>
                    <a-col :span="8" class='box_info_right'>
                      <div class='box_info_wrap'>
                        <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' class='box_info_avatar'>
                        <div class='box_info_user'>呵呵呵呵</div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8" class='recommend_item gutter-row'>
            <div class='gutter-box'>
              <div class='box_wrap'>
                <div class='box_cover'>
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div class='box_info'>
                  <a-row>
                    <a-col :span="16">
                      <div class='box_info_wrap'>
                        <h3>巴塞罗纳出租屋</h3>
                        <small>哥德堡 - 维修 - 免费</small>
                      </div>
                    </a-col>
                    <a-col :span="8" class='box_info_right'>
                      <div class='box_info_wrap'>
                        <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' class='box_info_avatar'>
                        <div class='box_info_user'>呵呵呵呵</div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8" class='recommend_item gutter-row'>
            <div class='gutter-box'>
              <div class='box_wrap'>
                <div class='box_cover'>
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div class='box_info'>
                  <a-row>
                    <a-col :span="16">
                      <div class='box_info_wrap'>
                        <h3>巴塞罗纳出租屋</h3>
                        <small>哥德堡 - 维修 - 免费</small>
                      </div>
                    </a-col>
                    <a-col :span="8" class='box_info_right'>
                      <div class='box_info_wrap'>
                        <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' class='box_info_avatar'>
                        <div class='box_info_user'>呵呵呵呵</div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8" class='recommend_item gutter-row'>
            <div class='gutter-box'>
              <div class='box_wrap'>
                <div class='box_cover'>
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div class='box_info'>
                  <a-row>
                    <a-col :span="16">
                      <div class='box_info_wrap'>
                        <h3>巴塞罗纳出租屋</h3>
                        <small>哥德堡 - 维修 - 免费</small>
                      </div>
                    </a-col>
                    <a-col :span="8" class='box_info_right'>
                      <div class='box_info_wrap'>
                        <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' class='box_info_avatar'>
                        <div class='box_info_user'>呵呵呵呵</div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="8" class='recommend_item gutter-row'>
            <div class='gutter-box'>
              <div class='box_wrap'>
                <div class='box_cover'>
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div class='box_info'>
                  <a-row>
                    <a-col :span="16">
                      <div class='box_info_wrap'>
                        <h3>巴塞罗纳出租屋</h3>
                        <small>哥德堡 - 维修 - 免费</small>
                      </div>
                    </a-col>
                    <a-col :span="8" class='box_info_right'>
                      <div class='box_info_wrap'>
                        <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' class='box_info_avatar'>
                        <div class='box_info_user'>呵呵呵呵</div>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
        <div style='justify-content: center;display: flex;padding-top: 20px;padding-bottom: 20px'>
          <a-pagination v-model:current="current" :total="50" show-less-items />
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
 .content_wrap{
   padding-left: 10px;
   padding-right: 10px;
 }
 .recommend_list .recommend_item{
   margin-top: 10px;
   margin-bottom: 10px;
 }
  #page_warp{
    min-width: 1366px;
    max-width: 1920px;
    margin: 0 auto;
  }
  .index_tag_warp{
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-direction:row;
  }
  .index_tag_warp .index_tag{
    flex-grow: 1;
    margin-right: 10px;
    overflow: hidden;
    transition: width 2s ease-in-out;
  }
  .index_tag_warp:hover .index_tag:not(:hover){
    overflow: hidden;
    transition: width 2s ease-in-out;
  }
  .index_tag_warp .index_tag:hover{
    overflow: visible;
  }
  .index_tag_warp .index_tag:last-child{
    flex-grow: 1;
    margin-right: 0;
  }
  .index_tag_warp .index_tag:first-child{
    overflow: visible;
  }
  .index_tag_warp img{
    height: 180px;
    float: right;
  }
</style>