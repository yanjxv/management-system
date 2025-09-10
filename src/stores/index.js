import { isCollapsible } from 'element-plus/es/components/splitter/src/hooks/usePanel.mjs'
import { defineStore } from 'pinia'
import { ref } from 'vue'
function initState() {
  return {
    isCollapse: false,
    tags: [
      {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'home',
      },
    ],
    currentMenu: null,
    menuList: [],
    token: '',
  }
}
export const useAllDataStore = defineStore('allData', () => {
  // ref state属性
  const state = ref(initState())
  function selectMenu(val) {
    if (val.name === 'home') {
      state.value.currentMenu = null
    } else {
      let index = state.value.tags.findIndex((item) => item.name === val.name)
      index === -1 ? state.value.tags.push(val) : ''
    }
  }
  function undateTags(tag) {
    let index = state.value.tags.findIndex((item) => item.name === tag.name)
    state.value.tags.splice(index, 1)
  }
  function updateMenuList(val) {
    state.value.menuList = val
  }
  return {
    state,
    selectMenu,
    undateTags,
    updateMenuList,
  }
})
