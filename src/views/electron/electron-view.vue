<template>
  <div class="electron-view">
    <h1>This is an electron-view page</h1>
    <p> electron value: <span>{{emit}}</span></p>
    <el-button @click="sendMsgToElectron" type="primary">发送到electron</el-button>

    <p>  我来自于electron主进程： <span> {{fromElectronValue}} </span> </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import Event from '../../utils/event';
import { IpcRenderer } from '../../utils/ipc/ipc-renderer';
import { EventType } from '../../utils/ipc/ipc-event-type';

@Component({
  components: {
  }
})
export default class ElectronView extends Vue {
  private emit = 'electron-view';
  private count = 0;
  private fromElectronValue: any;
  constructor() {
     super();
     this.fromElectronValue = 0;
  }

  sendMsgToElectron() {
    // 发送
    IpcRenderer.send(EventType.TEST, this.count++);
    console.log(EventType.TEST + ':' + this.count);
  }

  created() {

    // 订阅electron主进程事件
    IpcRenderer.on(EventType.ONTEST).subscribe((r: any) => {
      if (r.args[0]) {
        this.fromElectronValue = r.args[0];
      }
    });
  }
}
</script>

