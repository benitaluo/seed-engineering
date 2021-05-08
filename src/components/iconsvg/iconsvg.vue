<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Iconsvg extends Vue {
  @Prop() private iconClass!: string;
  get iconName() {
    return `#icon-${this.iconClass}`;
  }
}
</script>
