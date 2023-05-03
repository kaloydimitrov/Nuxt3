<template>
    <div>
        <Header />
        <main>
            <slot />
        </main>

    </div>
</template>

<script>
    import Header from '@/components/Header.vue'

    export default {
    components: {
        Header,
    }
    }
</script>

<style>
* {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
