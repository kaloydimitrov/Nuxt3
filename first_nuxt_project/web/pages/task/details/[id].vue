<template>
    <div>
      <Details />
      <p>Result: {{ dynamicSegment }}</p>
    </div>
</template>
  
<script>
    import Details from '@/components/Details.vue'

    export default {
    components: {
        Details,
    },

    data() {
        return {
        dynamicSegment: null
        }
    },
    mounted() {
        this.dynamicSegment = this.$route.params.id;
    }
    }
</script>
