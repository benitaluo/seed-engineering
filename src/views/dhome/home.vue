<template>
  <div class="home">
    <div class="logo-box">

    </div>
    <!-- <img alt="Vue logo" src="/images/logo.png"> -->
    <div class="logo-box"></div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <el-button type="primary">按钮</el-button>
    <el-button type="primary" class="icon-Patrol-control-plan-management">angu</el-button>
    <i class="icon-Patrol-control-plan-management" style="font-size:25px"></i>
    <el-button type="primary" class="icon-Patrol-control-plan-management">图标改变</el-button>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/helloworld/helloworld.vue'; // @ is an alias to /src
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

}
</script>
<style lang="scss" scoped>
.logo-box{
  width: 160px;
  height: 160px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>


