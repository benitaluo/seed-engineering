<template>
  <div class="dashboard-container">
    <div class="dashboard-content">
      <h2 class='dashboard-text'>{{$t('Dashboard.Welcome')}} {{userInfo.name}}</h2>
          <!-- 切换语言 -->
         <lang-select/>
      <div class="content-placeholer">
      
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import LangSelect from '@/components/langselect/index.vue';


// import { mapGetters } from 'vuex';
@Component({
  components: {
    LangSelect
  }
})
export default class Dashboard extends Vue {
  @Getter('userInfo') userInfo: any;
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import './dashboard.scss';

</style>
