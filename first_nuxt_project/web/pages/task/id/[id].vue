<template>
    <h1>Task details for ID: {{ id }}</h1>
</template>

<script>
export default {
  setup() {
    const { id } = useRoute().params
    return {
      id
    }
  }
}
</script>
