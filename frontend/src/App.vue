<style>
/* 字体样式 */
.label-large::part(label) {
  font-size: 14px;
  letter-spacing: 0.1px;
  font-weight: 400;
}

.label-medium::part(label) {
  font-size: 12px;
  letter-spacing: 0.1px;
  font-weight: 400;
}

/* 字体颜色样式 */
.on-secondary-container::part(label) {
  color: #4a4459;
}

.secondary::part(label) {
  color: #625b71;
}

.on-surface-variant::part(label) {
  color: #49454f;
}

.on-primary-container::part(label) {
  color: #4f378a;
}

.fab-purple::part(icon) {
  color: #4f378a;
}

/* 导航图标颜色 */
mdui-navigation-rail-item::part(icon) {
  color: #49454f;
}

mdui-navigation-rail-item::part(active-icon) {
  color: #4a4459;
}
</style>

<template>
  <!-- 页面整体横向布局 -->
  <div style="display: flex; height: 100vh;">
    <!-- 左侧导航栏 -->
    <mdui-navigation-rail style="padding-top: 8px" contained>
      <mdui-button-icon icon="menu" slot="top"></mdui-button-icon>
      <mdui-fab class="fab-purple" lowered icon="edit--rounded" slot="top"></mdui-fab>

      <mdui-navigation-rail-item class="label-medium secondary" icon="inbox--rounded">
        主页
      </mdui-navigation-rail-item>
      <mdui-navigation-rail-item class="label-medium secondary" icon="book--rounded">
        学习
      </mdui-navigation-rail-item>
      <mdui-navigation-rail-item class="label-medium secondary" icon="settings--rounded">
        设置
      </mdui-navigation-rail-item>
    </mdui-navigation-rail>

    <!-- 右侧内容区域 -->
    <div style="flex-grow: 1; display: flex; padding-left: 12px; padding-top: 24px;">
      <!-- 左侧固定宽度区域 -->
      <div style="width: 480px;">
        <!-- 顶部搜索卡片 -->
<!-- 顶部搜索卡片 -->
<mdui-card clickable style="
    border-radius: var(--mdui-shape-corner-extra-large);
    height: 56px;
    display: flex;
    align-items: center;
    padding: 0;
    gap: 0;
    box-shadow: none;
    background-color: rgb(var(--mdui-color-surface-container-high));
">
  <mdui-icon name="search" style=" 
      font-size: 24px;
      color: rgb(var(--mdui-color-on-surface-variant));
      margin: 0 16px;
          user-select: none;   /* 禁用文本选中效果 */
    "></mdui-icon>

  <div style="
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.5px;
      font-weight: 400;
      font-family: 'Roboto';
        user-select: none;   /* 禁用文本选中效果 */
      color: rgb(var(--mdui-color-on-surface-variant
      ));
    ">
    搜索
  </div>

  <!-- 右侧按钮图标，使用 mdui-button-icon 类型并保持右侧间距 -->
  <mdui-button-icon icon="account_circle" style=" 
      margin-left: auto; /* 推动到最右侧 */
      margin-right: 8px; /* 保持右侧间距 */
    "></mdui-button-icon>
</mdui-card>


        <!-- 搜索框下方按钮组 -->
        <div style="
            width: 480px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2px;
            margin-top: 16px;
          ">
          <mdui-button class="label-large" icon="star" variant="filled" style="flex: 1;">
            总作业
          </mdui-button>
          <mdui-button class="on-secondary-container label-large" variant="tonal" style="flex: 1;">
            待完成
          </mdui-button>
          <mdui-button class="on-secondary-container label-large" variant="tonal" style="flex: 1;">
            已完成
          </mdui-button>
          <mdui-button class="on-secondary-container label-large" variant="tonal" style="flex: 1;">
            已过期
          </mdui-button>
        </div>


 <mdui-card clickable style="
    border-radius: var(--mdui-shape-corner-medium);
    height: 200px;
    display: flex;
    flex-direction: column; /* 使子元素垂直排列 */
    padding: 0;
    margin-top: 16px;
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.20);
    background-color: rgb(var(--mdui-color-surface));">
  
    <!-- 第一个子布局 -->
    <div style="min-height: 72px;">
        <div style="height: 48px; width: 300px; padding-left: 16px; padding-top: 18px; display: flex; align-items: center;">
<div style="
    width: 40px; /* 圆形的宽度 */
    height: 40px; /* 圆形的高度 */
    background-color: #eaddff;
    border-radius: 50%;
    margin: 4px 8px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    font-family: 'Roboto', sans-serif; /* 使用Roboto字体 */
    font-weight: 500; /* Medium字体 */
    font-size: 16px; /* 字体大小 */
    line-height: 24px; /* 行高 */
    letter-spacing: 0.1px; /* 字母间距 */
    color: #4f378a; /* 设置字体颜色 */
">
    C
</div>



<!-- 新增的垂直文本布局 -->
<div style="flex: 1; display: flex; flex-direction: column; padding-left: 8px;">
    <p style="font-family: 'Roboto', sans-serif; font-weight: 600; font-size: 16px; line-height: 24px; letter-spacing: 0.15px; color: #1d1b20; margin: 0; padding-top: 2px;">Chemistry</p>
    <p style="font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: 0.25px; color: #1d1b20; margin: 0; padding-bottom: 2px;">2天后截至</p>
</div>


        </div>
    </div>

    <!-- 第二个子布局，新增文本 -->
    <div style="flex: 1; display: flex; flex-direction: column;">
        <div style="height: 40px; padding-left: 16px; padding-top: 8px; padding-left: 24px; padding-right: 16px;">
            <p style="font-size: 14px; color: rgb(var(--mdui-color-on-surface-variant)); margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>

        <!-- 新增的占满剩余空间的布局，右下角排列 -->
        <div style="flex: 1; display: flex; justify-content: flex-end; align-items: flex-end; padding-right: 16px; padding-bottom: 16px;">
            <!-- 两个按钮 -->
            <mdui-button class="on-surface-variant" variant="outlined" style="margin-right: 8px;">忽略</mdui-button>
            <mdui-button  variant="filled" >查看</mdui-button>
        </div>
    </div>
</mdui-card>



<mdui-card clickable style="
    border-radius: var(--mdui-shape-corner-medium);
    height: 200px;
    display: flex;
    flex-direction: column; /* 使子元素垂直排列 */
    padding: 0;
    margin-top: 16px;
               box-shadow: none;
              background-color: rgb(var(--mdui-color-on-primary));">
    <div style="min-height: 72px;">
        <div style="height: 48px; width: 300px; padding-left: 16px; padding-top: 18px; display: flex; align-items: center;">
<div style="
    width: 40px; /* 圆形的宽度 */
    height: 40px; /* 圆形的高度 */
    background-color: #eaddff;
    border-radius: 50%;
    margin: 4px 8px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    font-family: 'Roboto', sans-serif; /* 使用Roboto字体 */
    font-weight: 500; /* Medium字体 */
    font-size: 16px; /* 字体大小 */
    line-height: 24px; /* 行高 */
    letter-spacing: 0.1px; /* 字母间距 */
    color: #4f378a; /* 设置字体颜色 */
">
    C
</div>



<!-- 新增的垂直文本布局 -->
<div style="flex: 1; display: flex; flex-direction: column; padding-left: 8px;">
    <p style="font-family: 'Roboto', sans-serif; font-weight: 600; font-size: 16px; line-height: 24px; letter-spacing: 0.15px; color: #1d1b20; margin: 0; padding-top: 2px;">Math</p>
    <p style="font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: 0.25px; color: #1d1b20; margin: 0; padding-bottom: 2px;">1天后截至</p>
</div>


        </div>
    </div>

    <!-- 第二个子布局，新增文本 -->
    <div style="flex: 1; display: flex; flex-direction: column;">
        <div style="height: 40px; padding-left: 16px; padding-top: 8px; padding-left: 24px; padding-right: 16px;">
            <p style="font-size: 14px; color: rgb(var(--mdui-color-on-surface-variant)); margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>

        <!-- 新增的占满剩余空间的布局，右下角排列 -->
        <div style="flex: 1; display: flex; justify-content: flex-end; align-items: flex-end; padding-right: 16px; padding-bottom: 16px;">
            <!-- 两个按钮 -->
            <mdui-button class="on-surface-variant" variant="outlined" style="margin-right: 8px;">忽略</mdui-button>
            <mdui-button  variant="filled" >查看</mdui-button>
        </div>
    </div>
</mdui-card>




      </div>

      <!-- 主体内容卡片容器 -->
      <div style="
          flex-grow: 1;
          margin-left: 16px;
          margin-right: 24px;
          background-color: rgb(var(--mdui-color-surface-container-lowest));
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.20);
          border-radius: var(--mdui-shape-corner-extra-large);
        ">
        <!-- 内容 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import 'mdui/components/button'
import { snackbar } from 'mdui/functions/snackbar'

function showToast() {
  snackbar({ message: '你好，Latos！' })
}
</script>
