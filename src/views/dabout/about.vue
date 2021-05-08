<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>emit:
      <span>{{emit}}</span>
    </p>
    <p>aboutStore:
      <span>{{aboutStore.storeInfo}}</span>
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
// import { rxevent } from '@gsafety/rx-eventbus';
// import { stringHelper } from '@gsafety/cad-gutil';
@Component({
  components: {}
})
export default class Props extends Vue {
  @State((state: any) => state.about)
  aboutStore: any;
  private emit = '0000';
  mounted() {
  //   rxevent.subscribe('sendInfoToTable', 'e1-03', (str: any) => {
  //     console.log('about table: ' + str);
  //   });
  //   console.log(stringHelper.stringFormat('http://xx/{username}/xxx/{userid}', 'yourname', '123'));
  // }
}
}
</script>

