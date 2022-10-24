<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 导航栏 -->


    <van-tabs v-model="activeName">
      <van-tab title="我的收藏" name="a">
        我的收藏
        <Collect></Collect>
      </van-tab>
      <van-tab title="我的历史" name="b">
        我的历史
        <History></History>
      </van-tab>
      <van-tab title="我的作品" name="c">
        我的作品
        <Article></Article>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Article from './components/article'
import History from './components/article'
import Collect from './components/article'

export default {
  name: 'UserArticles',
  data(){
    return{
      activeName:0
    }
  },
  components:{
    Article,
    History,
    Collect
  }
}
</script>

<style lang="less" scoped>

</style>