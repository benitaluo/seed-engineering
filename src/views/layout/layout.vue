<template>
  <div class="app-wrapper body" :class="{hideSidebar:!sidebar.opened}">
    <div class="sidebar-wrapper sider">
      <sidebar class="sidebar-container"></sidebar>
    </div>
    <div class="main-container main">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { Navbar, Sidebar, AppMain } from '@/views/layout';

@Component({
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
})
export default class Layout extends Vue {
  @Getter('sidebar') sidebar: any;
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './scss/layout.scss';
</style>
