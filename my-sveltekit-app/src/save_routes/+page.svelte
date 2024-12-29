<script>
	import { goto, beforeNavigate, afterNavigate } from "$app/navigation";
    import Button from "$lib/Button.svelte";

    beforeNavigate((navigation)=>{
        console.log("before navigation "+JSON.stringify(navigation));
    })

    afterNavigate((navigation)=>{
        console.log("after navigation "+JSON.stringify(navigation));
    })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button on:click={()=>{
    goto('/about')
}}>Go to About</button>


<Button/>
<a href="/about">About</a>