<template>
    <div>
        <navbar-component></navbar-component>
        <div class="container py-3 mt-4 bg-main-color">
        <router-view></router-view>

        </div>
    </div>
</template>
<script>
import NavbarComponent from './components/NavbarComponent.vue'
export default {
    name: 'app',
    components: {NavbarComponent}
    }
</script>
