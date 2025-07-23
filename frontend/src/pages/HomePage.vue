<template>
  <!-- 页面整体横向布局 -->
  <div style="display: flex; height: 100vh;">
    <!-- 左侧导航栏 -->
    <NavigationRail/>
    <!-- 右侧内容区域 -->
    <div style="flex-grow: 1; display: flex; padding-left: 12px; padding-top: 24px;">
      <!-- 左侧固定宽度区域 -->
      <div style="width: 480px;">
        <!-- 顶部搜索卡片 -->
         <search-card/>
        <!-- 搜索框下方按钮组 -->
         <TaskButtonGroup/>
        <!-- 作业卡片（示例1） -->
        <mdui-card clickable style="
          border-radius: var(--mdui-shape-corner-medium);
          height: 200px;
          display: flex;
          flex-direction: column;
          padding: 0;
          margin-top: 16px;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.20);
          background-color: rgb(var(--mdui-color-surface));
        ">
          <div style="min-height: 72px;">
            <div style="height: 48px; width: 300px; padding-left: 16px; padding-top: 18px; display: flex; align-items: center;">
              <div style="
                width: 40px;
                height: 40px;
                background-color: #eaddff;
                border-radius: 50%;
                margin: 4px 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.1px;
                color: #4f378a;
              ">C</div>

              <div style="flex: 1; display: flex; flex-direction: column; padding-left: 8px;">
                <p style="font-family: 'Roboto', sans-serif; font-weight: 600; font-size: 16px; line-height: 24px; letter-spacing: 0.15px; color: #1d1b20; margin: 0; padding-top: 2px;">Chemistry</p>
                <p style="font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: 0.25px; color: #1d1b20; margin: 0; padding-bottom: 2px;">2天后截至</p>
              </div>
            </div>
          </div>

          <div style="flex: 1; display: flex; flex-direction: column;">
            <div style="height: 40px; padding: 8px 16px 0 24px;">
              <p style="font-size: 14px; color: rgb(var(--mdui-color-on-surface-variant)); margin: 0;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
            <div style="flex: 1; display: flex; justify-content: flex-end; align-items: flex-end; padding: 0 16px 16px 0;">
              <mdui-button class="on-surface-variant" variant="outlined" style="margin-right: 8px;">忽略</mdui-button>
              <mdui-button variant="filled">查看</mdui-button>
            </div>
          </div>
        </mdui-card>

        <!-- 作业卡片（示例2） -->
        <mdui-card clickable style="
          border-radius: var(--mdui-shape-corner-medium);
          height: 200px;
          display: flex;
          flex-direction: column;
          padding: 0;
          margin-top: 16px;
          box-shadow: none;
          background-color: rgb(var(--mdui-color-on-primary));
        ">
          <div style="min-height: 72px;">
            <div style="height: 48px; width: 300px; padding-left: 16px; padding-top: 18px; display: flex; align-items: center;">
              <div style="
                width: 40px;
                height: 40px;
                background-color: #eaddff;
                border-radius: 50%;
                margin: 4px 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.1px;
                color: #4f378a;
              ">C</div>

              <div style="flex: 1; display: flex; flex-direction: column; padding-left: 8px;">
                <p style="font-family: 'Roboto', sans-serif; font-weight: 600; font-size: 16px; line-height: 24px; letter-spacing: 0.15px; color: #1d1b20; margin: 0; padding-top: 2px;">Math</p>
                <p style="font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: 0.25px; color: #1d1b20; margin: 0; padding-bottom: 2px;">1天后截至</p>
              </div>
            </div>
          </div>

          <div style="flex: 1; display: flex; flex-direction: column;">
            <div style="height: 40px; padding: 8px 16px 0 24px;">
              <p style="font-size: 14px; color: rgb(var(--mdui-color-on-surface-variant)); margin: 0;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
            <div style="flex: 1; display: flex; justify-content: flex-end; align-items: flex-end; padding: 0 16px 16px 0;">
              <mdui-button class="on-surface-variant" variant="outlined" style="margin-right: 8px;">忽略</mdui-button>
              <mdui-button variant="filled">查看</mdui-button>
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
import NavigationRail from '../components/common/NavigationRail.vue';
import SearchCard from '../components/common/SearchCard.vue';
import TaskButtonGroup from '../components/common/TaskButtonGroup.vue';
</script>
