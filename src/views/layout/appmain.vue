<template>
    <section class="app-main">
        <transition name="fade" mode="out-in">
            <router-view :key="key"></router-view>
        </transition>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
@Component
export default class AppMain extends Vue {
  get key() {
    return this.$route.name ? this.$route.name + +new Date() : String(this.$route) + +new Date();
  }
}
</script>
