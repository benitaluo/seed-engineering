<template>
  <el-menu mode="vertical" theme="dark" :default-active="$route.path">
    <sidebar-item :routes='permission_routers'></sidebar-item>
  </el-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
// import { mapGetters } from 'vuex';
import SidebarItem from './sidebarItem.vue';
import { constantRouterMap } from '@/router';
@Component({
  components: {
    SidebarItem
  }
})
export default class Sidebar extends Vue {
  permission_routers: any = constantRouterMap;
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './scss/sidebar.scss';
</style>
