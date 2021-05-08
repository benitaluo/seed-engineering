<template>
  <el-breadcrumb class="app-levelbar" separator="/">
    <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
      <router-link v-if='item.redirect==="noredirect"||index==levelList.length-1' to="" class="no-redirect">{{item.name}}</router-link>
      <router-link v-else :to="item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
@Component
export default class Levelbar extends Vue {
  levelList = null;
  created() {
    this.getBreadcrumb();
  }

  public getBreadcrumb() {
    let matched: any = this.$route.matched.filter((item: any) => item.name);
    const first = matched[0];
    if (first && (first.name !== '首页' || first.path !== '')) {
      matched = [{ name: '首页', path: '/' }].concat(matched);
    }
    this.levelList = matched;
  }

  @Watch('$route')
  onRouteChanged(to: string, from: string) {
    this.getBreadcrumb();
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './scss/levelbar.scss';
</style>
