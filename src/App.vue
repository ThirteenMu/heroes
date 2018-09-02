<template>
    <div id="myapp">
        <app-header></app-header>
        <div class="container-fluid">
            <div class="row">
                <app-sidebar></app-sidebar>
                <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader.vue';
    import AppSidebar from './components/AppSidebar.vue';
    export default {
        name: 'app',
        components: {
            AppHeader,
            AppSidebar
        },
        data() {
            return {

            }
        }
    }
</script>

<style>
</style>