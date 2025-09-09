<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAllDataStore } from '@/stores'
const store = useAllDataStore()
const tags = computed(() => store.state.tags)
const route = useRoute()
</script>

<template>
  <div class="tags">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<style lang="less" scoped>
.tags {
  margin: 20px 0 0 20px;
}
.el-tag {
  margin-right: 10px;
}
</style>
