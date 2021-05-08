 <template>
  <div class="step">
    <div v-for="(item,index) in logs" :key="index" class="step-item">
      <div class="step-item-show">
        <div class="step-excircle">
          <div class="step-incircle"></div>
        </div>
        <div class="step-line"></div>
      </div>
      <div class="step-item-case">
        <div class="step-item-trigon"></div>
        {{item.text}}
      </div>
    </div>
    <div class="step-axis"></div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
@Component
export default class ActionLog extends Vue {
  private logs: any[] = [{ name: '小王', text: '123' }, { name: '小王', text: '123' }];
}
</script>

<style lang="scss" scoped>
.step {
  position: relative;
  height: 100%;
  background-color: #ccc;
  .step-axis {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 6px;
    background-color: #fff;
    margin-left: 30px;
  }
  .step-item {
    box-sizing: border-box;
    padding: 9px 9px 0px 0px;
    display: flex;
    flex-direction: row;
    .step-item-show {
      flex-basis: 66px;
      display: flex;
      z-index: 10;
      .step-excircle {
        margin: auto;
        display: flex;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #0099cc;
        .step-incircle {
          margin: auto;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #fff;
        }
      }
    }
    &:last-child {
      padding-bottom: 9px;
    }
    .step-item-case {
      flex: 1;
      min-height: 75px;
      box-sizing: border-box;
      background-color: #0099cc;
      position: relative;
      .step-item-trigon {
        position: absolute;
        top: 0;
        left: -20px;
        bottom: 0;
        margin: auto 0 auto 0;
        z-index: 40;
        border-style: solid;
        border-width: 10px 10px 10px 10px;
        border-color: transparent #0099cc transparent transparent;
        width: 0;
        height: 0;
      }
    }
  }
}
</style>




