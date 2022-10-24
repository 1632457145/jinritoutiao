<template>
  <div>
    <van-nav-bar title="编辑资料" left-arrow />

    <van-cell-group>
      <van-cell is-link title="头像" @click="onAvatarClick">
        <!-- :src="user.photo" -->
        <van-image class="avatar" round height="30px" width="30px" :src="img"></van-image>
      </van-cell>


      <input ref="file" type="file" hidden @change="onFileChange"/>
      <!-- :value="user.name" -->
      <van-cell is-link title="昵称" @click="isNameShow=true" :value="value"></van-cell>
      <van-cell is-link title="介绍" value="内容"></van-cell>
      <!-- :value="user.gender === 0 ? '男' : '女'" -->
      <van-cell
        is-link
        title="性别"
        :value="sex"
        @click="sexShow=true"
      ></van-cell>
      <!-- :value="user.birthday" -->
      <van-cell is-link title="生日" @click="birthShow=true" :value="birth"></van-cell>
    </van-cell-group>

    <!-- 头像预览 -->
    <van-image-preview v-model="isShow" :images="images"  @close="$refs.file.value= ''">
      <van-nav-bar
        slot="cover"
        left-text="取消"
        right-text="确定"
        @click-left="isShow = false"
        @click-right="onUpdateAvatar"
      />
    </van-image-preview>
    <!-- 头像预览 -->

    <!-- 昵称 -->
    <!-- 点击弹出层 -->
    <van-popup v-model="isNameShow" position="bottom">
      <van-nav-bar
        title="编辑昵称"
        left-text="取消"
        right-text="确定"
        @click-left="isNameShow = false"
        @click-right="onUpdateName"
      />

      <!-- 弹出层输入框 -->
      <div>
        <van-cell-group inset>
          <van-field
            :value="value"
            @input="inputName = $event"
            rows="2"
            autosize
            type="textarea"
            maxlength="20"
            placeholder="请输入昵称"
            show-word-limit
          />
        </van-cell-group>
      </div>
    </van-popup>
    <!-- 昵称 -->

    <!-- 性别 -->
    <van-action-sheet
      v-model="sexShow"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @select="select1"
      @cancel="sexShow=false"
    />
    <!-- 性别 -->

    <!-- 生日 -->
    <van-popup 
      v-model="birthShow" 
      position="bottom">
      <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      @cancel="birthShow=false"
      @confirm="confirmClick"
    />
    </van-popup>
    <!-- 生日 -->

  </div>
</template>

<script>
var img = document.querySelector('van-image')

import { updateUserPhoto, updateUserProfile } from "@/api/user";
// 引入components/date下封装的日期函数
import {date1} from '../../components/date/date的封装'

export default {
  name: "Mine",
  data() {
    return {
      // user: {},
      isShow:false,
      img:'https://cn.bing.com/th?id=OVFT.wmF7HNBF12MhFjk2BtCici&pid=News&w=197&h=112&c=14&rs=2&qlt=90&dpr=1.3',
      images: [], // 预览的图片列表
      isNameShow:false,
      value:'你好ooo', // 输入框的数据
      sexShow:false,
      sex:'女',
      actions:[
        { name: '男'},
        { name: '女'},
      ],
      birthShow:false,
      minDate: new Date(1977, 0, 1),
      maxDate: new Date(),
      currentDate:new Date(),
      birth:'2000-4-14'
    };
  },
  computed: {
    file() {
      return this.$refs["file"];
    },
  },
  // watch: {},
  // created() {
  //   this.loadMine();
  // },
  methods: {
  //   async loadMine() {
  //     try {
  //       const { data } = await getMine();
  //       this.user = data.data;
  //     } catch (err) {
  //       console.log(err);
  //       this.$toast.fail("获取数据失败");
  //     }
  //   },
    onAvatarClick() {
      this.file.click();
    },
    onFileChange() {
      // 1. 拿到 file 类型 input 选择的文件对象
      const fileObj = this.file.files[0];
      // 2. 使用 window.URL.createObjectURL(file) 得到文件数据
      const fileData = window.URL.createObjectURL(fileObj);
      // 3. 将 img.src = 第2步的结果
      this.images = [fileData]
      this.isShow = true
      // ImagePreview({
      //   images: [
      //     fileData
      //   ],
      // });
    },

    // 点击之后更换头像
    onUpdateAvatar(){
      this.img = 'http://pic.bizhi360.com/litimg/10965.jpg'
      this.isShow = false
    },
    onNameClick(){
      console.log('确定');
    },

    async updateUserProfile (field, value) {
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '更新中...',
        forbidClick: true // 是否禁止背景点击
      })
      try {
        await updateUserProfile({
          [field]: value 
        })
        this.$toast.success('更新成功')
      } catch (err) {
        console.log(err);
        this.$toast.success('更新成功')
      }
      },
      onUpdateName(){
        // 请求提交表单
        this.updateUserProfile('name', this.inputName)
        // 更新识图
        this.value = this.inputName
        // 关闭弹层
        this.isNameShow = false
      },
      // 点击性别之后赋值给input
      select1(data){
        this.sex = data.name
      },
      // 点击后赋值生日
      confirmClick(value){
        // date1(date) 引入components/date下封装的日期函数 直接调用
        var birthDate = date1(value)
        this.birth = birthDate
        this.birthShow = false
      }
  },
};
</script>

<style lang="less" scoped>
  /deep/ .van-image-preview__cover{
    top: unset;
    left: 0;
    right: 0;
    bottom: 0;
    .van-nav-bar {
      background-color: #000;
    }
  }
</style>>

