<script>
	import Settings from './context/Settings.svelte';
	import Home from './context/Home.svelte';
    import StoreToggle from './store/pages/StoreToggle.svelte';
    import { onMount } from 'svelte';
    let page;

    function onRouteChange(){

        const path = window.location.hash.slice(1);
        console.log("path: ", path);

        if (path === '' || path === '/') {
            page = 'home';
        } else if (path === '/settings') {
            page = 'settings';
        } else if (path === '/toggle'){
            page = 'toggle';
        } else {
            page = 'home'; // Fallback for unknown routes
        }
    }

    onMount(onRouteChange);
</script>

<svelte:window on:hashchange={onRouteChange}/>

<nav>
    <a href="#/">Home</a>
    <a href="#/settings">Settings</a>
    <a href="#/toggle">toggle</a>

</nav>

{#if page === 'home'}
    <Home/>

{:else if page === 'settings'}
    <Settings/>

{:else if page === 'toggle'}
    <StoreToggle/>
{/if}


<style>

</style>