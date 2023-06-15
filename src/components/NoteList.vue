<template>
    <div>
        <h2>Hello NoteList List</h2>
        <RouterLink to="/"><button class="return__button">Powrót</button></RouterLink>
    </div>
</template>
<script lang="ts">
export default {

}
</script>
<style scoped lang="scss">
@import '../assets/variables.scss';

.return__button {
    font-weight: bold;
    width: 100px;
    line-height: 20px;
    padding: 8px;
    border: 0;
    border-radius: 8px;
    background: $color-orange;
    color: $color-white;
    cursor: pointer;
}
</style>