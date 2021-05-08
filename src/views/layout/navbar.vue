<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <levelbar></levelbar>
        <el-dropdown @command="handleCommandSkin" trigger="click" class="avatar-container skin">
            <div class="avatar-wrapper">
                <span  class="avatar-wrapper">切换主题</span>
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in skins" :key="index" :command="item.name">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" :src="userInfo.avatar">
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link class='inlineBlock' to="/">
                    <el-dropdown-item>
                        Home
                    </el-dropdown-item>
                </router-link>
        <el-dropdown-item divided>
                <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
        </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script lang="ts">
import Levelbar from './levelbar.vue';
import Hamburger from '@/components/hamburger/hamburger.vue';
import { Skin } from '@/skin/skin';
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
// import { rxevent } from '@gsafety/rx-eventbus/dist/eventaggregator.service';

@Component({
  components: {
    Levelbar,
    Hamburger
  }
})
export default class Navbar extends Vue {
  private skins: any[] = [{ name: 'white', label: 'white' }, { name: 'black', label: 'black' }];
  @Getter('userInfo') userInfo: any;
  @Getter('sidebar') sidebar: any;
  @Action('ToggleSideBar') toggleSideBarAction: any;
  @Action('LogOut') logOutAction: any;

  mounted() {
    //   rxevent.subscribe('sendInfoToTable', 'e1-02', (str) => {
    //   console.log('Navbar: ' + str);
    // });
  }
  public handleCommandSkin(command: string) {
    Skin.changeTheme(command);
  }
  public toggleSideBar() {
    this.toggleSideBarAction();
    // this.$store.dispatch("ToggleSideBar");
  }
  public logout() {
    this.logOutAction().then(() => {
      location.reload(); // 为了重新实例化vue-router对象 避免bug
    });
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import './scss/navbar.scss';
</style>



