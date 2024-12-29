<script>
    import settings from '../settings.js'
	import { onDestroy } from 'svelte';


    let colorScheme;

    const unsubscribe = settings.subscribe((settings)=>{
        console.log("settings subscribe:"+JSON.stringify(settings));
        //colorScheme = settings.colorScheme;
    });

    $:{
        ///Settings.set({})
       // settings.update((prevSettings)=>({...prevSettings,colorScheme}));
    }

    onDestroy(unsubscribe);
</script>

<h2>Settings</h2>
{colorScheme}

<label>
    <input type="radio" bind:group={$settings.colorScheme} name="colorScheme" value="dark"/> dark

</label>

<label>
    <input type="radio" bind:group={$settings.colorScheme} name="colorScheme" value="light"/> light

</label>