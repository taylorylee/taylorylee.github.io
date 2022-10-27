<script>
    import experiments from 'src/data/Experiments.json';
    import Card from "src/components/Card.svelte";
</script>

<svelte:head>
    <title> Experiments </title>
</svelte:head>

<section>
    <h1> Experiments </h1>
    <p> 
        When I think about experiments, I think about the process of learning and discovery, which includes projects, work, and other things I've been working on.
    </p>
</section>

<div class="card">
    {#each experiments as experiment}
        <Card
            <h5>{experiment.title}</h5>
            bg={experiment.bg}
            category={experiment.category}
            link={experiment.link}
            icon={experiment.icon}
        />
    {/each}
</div>