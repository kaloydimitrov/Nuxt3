<template>
    <header>
        <MegaMenu :model="menuItems" />
    </header>
</template>

<script setup>
import MegaMenu from 'primevue/megamenu';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const items = ref([
{
    label: 'Прочети Карта',
    icon: 'pi pi-book',
    link: '/read-card'
},
{
    label: 'Добави Меню',
    icon: 'pi pi-arrow-circle-up',
    link: '/add-menu'
},
{
    label: 'Добави Храна',
    icon: 'pi pi-arrow-up',
    link: '/add-food'
}
]);

const menuItems = items.value.map(item => {
return {
    ...item,
    command: () => router.push(item.link)
};
});
</script>

<MegaMenu :model="menuItems" />
