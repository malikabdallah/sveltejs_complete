<script>

    import longpress from './action/longpress';
    
    let showButton = true;
    let duration = 1000;
</script>
<label>
    <input type="checkbox" bind:checked={showButton}>
    toggle
</label>
<label>
    <input type="range" bind:value={duration} max={4000} step={100}/>{duration}
</label>
{#if showButton}
    <button use:longpress={{duration}} on:longpress={()=>{alert('pressed')}}>hello</button>
{/if}
<style>

</style>