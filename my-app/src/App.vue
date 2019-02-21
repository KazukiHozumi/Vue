<template>
  <div id="app">
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
import EditForm from './components/EditForm.vue'

export default {
  name: 'app',
  components: {
    EditForm
  },
  computed: {
    message() {
      return this.$store.getters.message
    }
  }
}
</script>
