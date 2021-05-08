 <template>
 <div>
  <el-dropdown trigger="click" class="international" :plain="true" @command="handleSetLanguage">
     <span class="el-dropdown-link">{{$t('language')}}<i></i></span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item  command="zh">中文</el-dropdown-item>
      <el-dropdown-item  command="en">English</el-dropdown-item>
      <el-dropdown-item  command="es">Español</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
 </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
@Component
export default class Language extends Vue {
  @Getter('language') language: any;
  @Action('setLanguage') setLanguage: any;
  // language = this.$store.getters.language;

  public handleSetLanguage(command: any) {
    if (command === 'zh') {
      this.$i18n.locale = 'zh';
    } else if (command === 'en') {
      this.$i18n.locale = 'en';
    }
    this.setLanguage(command);
    const messagConf: any = {
      // 是否有关闭窗口
      // showClose: true,
      // script 中i18n多语言
      message: this.$t('languageSucess'),
      type: 'success',
      duration: 2000
    };
    this.$message(messagConf);
  }
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  margin-left: 800px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px !important;
}
</style>




