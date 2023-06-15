<template>
  <div class="wrapper">
    <nav class="wrapper__nav">
      <img src="./components/icons/apps-add.png" alt="nav_logo">
      <h2 class="wrapper__nav-header">Appka.</h2>
    </nav>
    <section class="container">
      <router-view></router-view>
    </section>
  </div>
</template>

<script lang="ts">

</script>
<style scoped lang="scss">
@import './assets/breakpoints.scss';
@import './assets/variables.scss';

.wrapper {
  width: 100%;

  &__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    min-width: 320px;
    background: $color-blue;
    color: $color-white;
    padding: 10px;
    text-align: left;

    @include lg {
      width: 100%;
    }

    &-header {
      font-weight: 800;
      letter-spacing: 1px;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }
}
</style>
