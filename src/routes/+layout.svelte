<script>
    //import '$styles/global.scss';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
</script>

<main class="container">
    <Header />

    <!-- Pages will be inside here -->
    <slot />

    <Footer />
</main>

<style lang="scss" global>
    @import "styles/global.scss";
</style>
