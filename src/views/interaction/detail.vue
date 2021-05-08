<template>
  <div>
    <p>age:
      <span>{{row.age}}</span>
    </p>
    <p>name:
      <span>{{row.name}}</span>
    </p>
    <el-button @click="sendInfoToTable" type="primary">发送到table</el-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { rxevent } from '@gsafety/rx-eventbus';
@Component({
  props: {
    row: Object
  }
})
export default class Detail extends Vue {
  sendInfoToTable() {
    // 派送事件 传递到 同级子组件
    console.log('detail：开始发布事件');
    // rxevent.publish('sendInfoToTable', '这是从detail传值过来的');
  }
}
</script>
