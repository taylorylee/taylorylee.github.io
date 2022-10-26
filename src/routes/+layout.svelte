<script>
    //import '$styles/global.scss';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
</script>

<div class="container">
    <Header />

    <!-- Pages will be inside here -->
    <slot />

    <Footer />
</div>

<style lang="scss" global>
    @import "styles/global.scss";
</style>
