<script>
	//import { onDestroy } from 'svelte';
    import settings from '../settings.js'

/*
    let colorScheme;

    const unsubscribe = settings.subscribe((settings)=>{
        console.log("home subscribe:"+JSON.stringify(settings));
        colorScheme = settings.colorScheme;
    });

    onDestroy(unsubscribe);
    */
</script>


{$settings.colorScheme}