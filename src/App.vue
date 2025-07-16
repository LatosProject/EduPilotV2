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
      <mdui-fab class="fab-purple" lowered icon="edit--outlined" slot="top"></mdui-fab>

      <mdui-navigation-rail-item class="label-medium secondary" icon="home--outlined">
        主页
      </mdui-navigation-rail-item>
      <mdui-navigation-rail-item class="label-medium secondary" icon="book--outlined">
        学习
      </mdui-navigation-rail-item>
      <mdui-navigation-rail-item class="label-medium secondary" icon="settings--outlined">
        设置
      </mdui-navigation-rail-item>
    </mdui-navigation-rail>

    <!-- 右侧内容区域 -->
    <div style="flex-grow: 1; display: flex; padding-left: 0; padding-top: 24px;">
      <!-- 左侧固定宽度区域 -->
      <div style="width: 480px;">
        <!-- 顶部搜索卡片 -->
        <mdui-card
          style="
            border-radius: var(--mdui-shape-corner-extra-large);
            height: 56px;
            display: flex;
            align-items: center;
            padding: 0;
            gap: 0;
            box-shadow: none;
            background-color: rgb(var(--mdui-color-surface-container-high));
          "
        >
          <mdui-icon
            name="search"
            style="
              font-size: 24px;
              color: rgb(var(--mdui-color-on-surface-variant));
              margin: 0 16px;
            "
          ></mdui-icon>

          <div
            style="
              font-size: 16px;
              line-height: 24px;
              letter-spacing: 0.5px;
              font-weight: 400;
              font-family: 'Roboto Flex', 'Noto Sans SC', 'Roboto', 'Noto Sans', sans-serif;
              color: rgb(var(--mdui-color-on-surface-variant));
            "
          >
            搜索
          </div>
        </mdui-card>

        <!-- 搜索框下方按钮组 -->
        <div
          style="
            width: 480px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2px;
            margin-top: 16px;
          "
        >
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
        
      </div>

      <!-- 主体内容卡片容器 -->
      <div
        style="
          flex-grow: 1;
          margin-left: 16px;
          margin-right: 24px;
          background-color: rgb(var(--mdui-color-surface-container-lowest));
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
          border-radius: var(--mdui-shape-corner-extra-large);
        "
      >
        <!-- 内容 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import 'mdui/components/button.js'
import { snackbar } from 'mdui/functions/snackbar.js'

function showToast() {
  snackbar({ message: '你好，Latos！' })
}
</script>
