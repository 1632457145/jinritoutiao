<template>
  <div>
    <van-grid clickable :column-num="3">
      <van-grid-item icon="home-o" text="我的作品" to="/my-article" />
      <van-grid-item icon="home-o" text="我的收藏" to="/my-article/collect" />
      <van-grid-item icon="home-o" text="我的历史" to="/my-article/history" />
    </van-grid>

    <van-button type="primary" to="/Mine">修改资料</van-button>

    <van-cell-group :border="false">
      <van-cell title="消息通知" is-link  />
      <van-cell title="小智同学" is-link  to="/user-chat" />
    </van-cell-group>
  </div>
</template>

<script>

export default {
  name: 'UserProfile',
}
</script>

<style>

</style>