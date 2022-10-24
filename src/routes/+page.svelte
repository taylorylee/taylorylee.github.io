<!-- Index - Main Home -->
<script>
    //import 'src/styles/global.scss';
    import Box from "../components/Box.svelte";
</script>

<svelte:head>
    <title>Taylor Lee</title>
    <link rel='stylesheet' href='styles/global.scss'>
</svelte:head>

<container>
    <h1> 
        Taylor Lee 
    </h1>

    <p>

        Hello. Welcome to my internet home!
    </p>

    <p>
        I care about:
        Mindful and accessible tech for learning, human-computer interaction, human-AI interaction, nurtured curiosity and collaboration, sustainability, and pedagogy
    </p>

    <p>
        I like to study how people learn how to interact with technology and how we can make it more accessible, building tools or finding observations to help people foster better connections and leverage technology.
    </p>

    <p>
        <mark>Plorking</mark> at Google PAIR and Better Streets AI. A first year honours undergraduate studying computer science and psychology at the University of Auckland. 
    </p>

    <p>
        Most likely outdoors reading, writing, rock climbing, listening to music, on a train, taking naps, or doing random challenges
    </p>

<section>
    <h4> Experiments </h4>

    <Box
        title="Testing",
        bg="hsla(48, 33%, 97%, 1)",
        category="Work",
        link="",
        icon=""
    />    
</section>

<section>
    <h4> Notes </h4>
</section>

</container>

<svelte:fragment slot="footer">
    <p> Design and code by Taylor Lee </p>
</svelte:fragment>