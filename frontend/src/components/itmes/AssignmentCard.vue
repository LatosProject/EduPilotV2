      <template>
        <mdui-card clickable :class="selected ? 'card-selected' : 'card-default'" @click="$emit('click')">
            <div style="min-height: 72px;">
                <div
                    style="height: 48px; width: 300px; padding-left: 16px; padding-top: 18px; display: flex; align-items: center;">
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
              "> {{ subject ? subject.charAt(0).toUpperCase() : '' }}</div>

                    <div style="flex: 1; display: flex; flex-direction: column; padding-left: 8px;">
                        <p
                            style="font-family: 'Roboto', sans-serif; font-weight: 600; font-size: 16px; line-height: 24px; letter-spacing: 0.15px; color: #1d1b20; margin: 0; padding-top: 2px;">
                            {{ subject }}</p>
                        <p
                            style="font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: 0.25px; color: #1d1b20; margin: 0; padding-bottom: 2px;">
                            {{ deadline }}</p>
                    </div>
                </div>
            </div>

            <div style="flex: 1; display: flex; flex-direction: column;">
                <div style="height: 40px; padding: 8px 16px 0 24px;">
                    <p style="font-size: 14px; color: rgb(var(--mdui-color-on-surface-variant)); margin: 0;">
                        {{ description }}
                    </p>
                </div>
                <div
                    style="flex: 1; display: flex; justify-content: flex-end; align-items: flex-end; padding: 0 16px 16px 0;">
                    <mdui-button class="on-surface-variant" variant="outlined"
                        style="margin-right: 8px;">忽略</mdui-button>
                    <mdui-button variant="filled">查看</mdui-button>
                </div>
            </div>
        </mdui-card>
    </template>
<script setup>
const props = defineProps({
    selected: Boolean,
    subject: String,
    deadline: String,
    description: String
});
</script>
<style scoped>
.card-default {
    border-radius: var(--mdui-shape-corner-medium);
    height: 200px;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 16px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.20);
    background-color: rgb(var(--mdui-color-surface));
}

.card-selected {
    border-radius: var(--mdui-shape-corner-medium);
    height: 200px;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 16px;
    box-shadow: none;
    background-color: rgb(var(--mdui-color-on-primary));
}
</style>

