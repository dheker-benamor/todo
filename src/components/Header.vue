<template>
  <div id="current-todos">
    <div>
      <h3>My todo's ({{todos.filter(t=>!t.completed).length}})</h3>
    </div>
  </div>
</template>
<script>
export default{
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
}
</script>

