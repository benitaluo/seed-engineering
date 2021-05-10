<template>
  <div>
    <!-- <el-button @click="maoPao">冒泡排序</el-button>
    <el-button @click="xuanze">选择排序</el-button>
    <el-button @click="charu">插入排序</el-button>
    <el-button @click="xier">希尔排序</el-button>
    <el-button @click="guibing">归并排序</el-button>
    <el-button @click="kuaisu">快速排序</el-button>
    <el-button @click="dui">堆排序</el-button>
    <el-button @click="jishu">计数排序</el-button>
    <el-button @click="tong">桶排序</el-button>
    <el-button @click="jishu">基数排序</el-button>
    <el-button @click="getParent">反向递归</el-button> -->
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { MonkeyHandler, SquirrelHandler, DogHandler, Handler } from './demo';
import { Rooter } from './root';
import lodash from 'lodash';
@Component({
  components: {}
})
export default class Props extends Vue {
  arr = [23, 3, 57, 1, 98, 3, 34, 65, 13, 65];

  findNumber(res: any) {
    const list2 = [
      {
        id: 'ab',
        children: [
          {
            id: 'cd',
            children: [
              {
                id: 'ef',
                children: []
              }
            ]
          }
        ]
      }
    ];
    let path = '';
    function findPath(list1: any) {
      if (Array.isArray(list1)) {
        list1.forEach((listItem) => {
          if (listItem.id === res) {
            path += listItem.id;
          } else if (Array.isArray(listItem.children)) {
            if (listItem.children.length === 0) {
              path = '';
            } else {
              path += listItem.id + '-->';
              findPath(listItem.children);
            }
          }
        });
      }
    }

    findPath(list2);

    return path;
  }

  getParent(res: any) {
    console.log(this.findNumber('11'));
  }
}
</script>
