<script>
    import settings from '../settings'
</script>  


<button on:click={()=>{
    $settings.colorScheme = $settings.colorScheme === 'light' ? 'dark':'light';
}}>toggle scheme </button>