<template>
    <div style="
          width: 480px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2px;
          margin-top: 16px;
        ">
        <mdui-button 
            v-for="(btn, i) in buttons" 
            :key="i" 
            :variant="btn.selected ? 'filled' : 'tonal'"
            :icon="btn.selected ? 'star' : ''"
            style="flex: 1" 
            @click="selectButton(i)">
            {{ btn.label }}
        </mdui-button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const buttons = reactive([
    { label: '总作业', icon: '', variant: 'tonal' },
    { label: '待完成', icon: '', variant: 'tonal' },
    { label: '已完成', icon: '', variant: 'tonal' },
    { label: '已过期', icon: '', variant: 'tonal' }
]);
buttons[0].selected = true; // 默认选中第一个按钮

function selectButton(index) {
    // bth 元素 i 索引
    buttons.forEach((btn, i) => {
        btn.selected = i === index;
    })
}
</script>