<script>
    import '$styles/global.scss';
    import Header from '$routes/Header.svelte';
    import Footer from '$routes/Footer.svelte';
</script>

<Header />

<div class="container">
    <!-- Pages will be inside here -->
    <slot></slot>
</div>

<Footer />