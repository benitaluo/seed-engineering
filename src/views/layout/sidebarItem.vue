<template>
  <div>
    <template v-for="item in routes">
      <router-link v-bind:key="item.path" v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <i :class="item.icon" />{{item.children[0].name}}
        </el-menu-item>
      </router-link>
      <el-submenu v-bind:key="item.name" :index="item.name" v-if="!item.noDropdown&&!item.hidden">
        <template slot="title">
          <i :class="item.icon" /> {{item.name}}
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
          <sidebar-item v-bind:key="child.name" class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
          <router-link v-bind:key="child.path" v-else class="menu-indent" :to="item.path+'/'+child.path">
            <el-menu-item :index="item.path+'/'+child.path">
              {{child.name}}
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class SidebarItem extends Vue {
  @Prop(Array)
  routes: any;
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './scss/sidebaritem.scss';
</style>

