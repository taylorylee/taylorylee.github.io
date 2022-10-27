<script>
    import navlinks from 'src/data/NavLinks.svelte';
    
    import volume_1 from "assets/volume_1.svg";
    import no_volume from "assets/no_volume.svg";
    import zap from "assets/zap.svg";
    import zap_filled from "assets/zap_filled.svg";

    export let audio; 

    function toggleVolume() {
      audio.play();  
    }

</script>

<slot name="header"></slot>

<header>
      <a href="/Experiments">Experiments</a>
      <a href="/Writing">Writing</a>
      <Button {no_volume} on:click={() => {toggleVolume()}}>
        <img src={volume_1} alt="volume on" />
      <button href="/static/volume_1.svg" alt="Volume">Music</button> 
      <button href="/static/zap.svg" alt="Theme Changer">Theme</button>  
</header>

<style lang="scss" global>
    @import "styles/global.scss";

    header {
        display: flex;
        box-shadow: #{$header-shadow}; 
        position: relative;
        justify-content: space-between;
        align-items: center; 
        padding: 0.75em 1em;
        padding-right: 3em; 
    }
</style>