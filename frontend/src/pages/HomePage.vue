<template>
  <!-- 页面整体横向布局 -->
  <div style="display: flex; height: 100vh;">
    <!-- 左侧导航栏 -->
    <NavigationRail />
    <!-- 右侧内容区域 -->
    <div style="flex-grow: 1; display: flex; padding-left: 12px; padding-top: 24px;">
      <!-- 左侧固定宽度区域 -->
      <div style="width: 480px;">
        <!-- 顶部搜索卡片 -->
        <search-card />
        <!-- 搜索框下方按钮组 -->
        <TaskButtonGroup />
        <!-- 作业卡片-->
        <AssignmentCard v-for="assignment in assignments" :key="assignment.uuid" :title="assignment.title"
          :deadline="formatDeadline(assignment.deadline)" :content="assignment.content" :selected="false" />

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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavigationRail from '../components/common/NavigationRail.vue';
import SearchCard from '../components/common/SearchCard.vue';
import TaskButtonGroup from '../components/common/TaskButtonGroup.vue';
import AssignmentCard from '../components/itmes/AssignmentCard.vue'
import { getAssignments } from '../apis/assignment.js'  // 关键：导入这里
// 其他导入...

const assignments = ref([])

function formatDeadline(deadline) {
  if (!deadline) return '无截止日期'
  const date = new Date(deadline)
  return date.toLocaleString()  // 你可以改成自己喜欢的格式
}
const classUuid = "e0453e99-a7e4-43fa-a480-5272add34867"
onMounted(async () => {
  try {
    const res = await getAssignments(classUuid)
    console.log('接口返回的数据:', res)

    assignments.value = res.items // ✅ 这才是真正的作业列表
  } catch (e) {
    console.error('获取任务失败', e)
  }
})
</script>
