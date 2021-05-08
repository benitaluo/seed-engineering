<template>
  <div>
    <el-table :data="tabelList" @row-click="rowClick">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年纪"></el-table-column>
    </el-table>
    <!-- 同级组件传值 -->
    <p>{{detailInfo}}</p>
  </div>

</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import Event from '../../utils/event';
// import { rxevent } from '@gsafety/rx-eventbus';
// import glog from '../../utils/log';
// import { InjectLog, Logger } from '../../utils/logger';

@Component({
  props: {
    // 由父组件传值过来
    tabelList: Array
  }
})
export default class Table extends Vue {
  private detailInfo = '';
  // @InjectLog() logger!: Logger;
  rowClick(row: any, event: any, column: any) {
    // 通过emit 传递到父组件中
    this.$emit('sendRow', row);
  }
  mounted() {
    // 监听事件 同级组件传值
    // rxevent.subscribe('sendInfoToTable', 'e1-01', (str: any) => {
    //   console.log('table: ' + str);
    // });
    // this.logger.info('table vue mounted 123');
  }
}
</script>
