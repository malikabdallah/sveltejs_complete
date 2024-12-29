<script>
    import {page} from '$app/stores';
</script>


{#if $page.url.pathname.startsWith('/settings')}
    <slot/>
{:else}
<div>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/settings">Settings</a>

    </nav>

    <slot/>


    <footer>
        All right reserved
    </footer>
</div>        

{/if}


<style>
    div{
        background-color: #f03;
        padding:10px;
    }
</style>    