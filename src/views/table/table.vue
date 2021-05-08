<template>
  <div class="app-container">
    <el-table :data="list" v-loading.body="listLoading" :element-loading-text="$t('table.listLoading')" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column prop="date" :label="$t('table.date')" width="180">
      </el-table-column>
      <el-table-column prop="name" :label="$t('table.username')" width="180">
      </el-table-column>
      <el-table-column prop="address" :label="$t('table.address')">
      </el-table-column>
    </el-table>
    <div class="test-box"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import tableService from '@/api/table-service';
@Component
export default class Index extends Vue {
  list = null;
  listLoading = true;
  created() {
    this.fetchData();
  }
  public async fetchData() {
    this.listLoading = true;
    const response: any = await tableService.getList();

    this.list = response.data;
    this.listLoading = false;
  }
}
</script>

<style lang="scss" scoped>
.test-box {
  width: 160px;
  height: 160px;
}
</style>
