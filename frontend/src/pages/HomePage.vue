<template>
  <!-- 页面整体横向布局 -->
  <div style="display: flex; height: 100vh;">
    <!-- 左侧导航栏 -->
    <NavigationRail />
    <!-- 右侧内容区域 -->
    <div style="flex-grow: 1; display: flex; padding-left: 8px; padding-top: 24px;">
      <!-- 左侧固定宽度区域 -->
      <div style="width: 480px;">
        <!-- 顶部搜索卡片 -->
        <search-card />
        <!-- 搜索框下方按钮组 -->
        <TaskButtonGroup />
        <OverlayScrollbarsComponent :options="options" style="height: 100%; width: 100%;margin-top: 16px">
          <div style="margin-left: 4px;margin-right: 4px ;margin-top: 4px">
            <AssignmentCard style="margin-bottom: 16px;" v-for="assignment in assignments" :key="assignment.uuid"
              :title="assignment.title" @click="goDetail(assignment.uuid)"
              :deadline="formatDeadline(assignment.deadline)" :content="assignment.content"
              :selected="assignment.uuid !== selectedId" />
          </div>
        </OverlayScrollbarsComponent>
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
        <p v-if="currentAssignment">{{ currentAssignment.title }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavigationRail from '../components/common/NavigationRail.vue'
import SearchCard from '../components/common/SearchCard.vue'
import TaskButtonGroup from '../components/common/TaskButtonGroup.vue'
import AssignmentCard from '../components/itmes/AssignmentCard.vue'
import { getAssignments } from '../api/assignment.js'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
import "overlayscrollbars/styles/overlayscrollbars.css"
const route = useRoute()
const router = useRouter()
const assignments = ref([])
const selectedId = ref(null)
const classUuid = "e0453e99-a7e4-43fa-a480-5272add34867"

const options = ref({
  scrollbars: {
    autoHide: 'leave',  // 鼠标离开时自动隐藏
    autoHideDelay: 500, // 隐藏延迟时间，单位毫秒
  }
})

const currentAssignment = computed(() => {
  return assignments.value.find(a => a.uuid === selectedId.value)
})
function goDetail(id) {
  selectedId.value = id
  router.push({ name: 'AssignmentDetail', params: { id } })
}
function formatDeadline(deadline) {
  if (!deadline) return '无截止日期'
  return new Date(deadline).toLocaleString()
}
async function fetchAssignments() {
  try {
    const res = await getAssignments(classUuid)
    console.log('接口返回的数据:', res)
    assignments.value = res.items
    if (route.params.id) {
      selectedId.value = route.params.id
    } else if (assignments.value.length > 0 && !selectedId.value) {
      selectedId.value = assignments.value[0].uuid
    }
  } catch (e) {
    console.error('获取任务失败', e)
  }
}
let intervalId = null
onMounted(() => {
  fetchAssignments()
  intervalId = setInterval(fetchAssignments, 15000)
})
onUnmounted(() => {
  clearInterval(intervalId)
})
watch(() => route.params.id, (newId) => {
  if (newId) {
    selectedId.value = newId
  }
})
</script>
