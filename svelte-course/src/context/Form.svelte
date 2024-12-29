<script>
	import { writable } from 'svelte/store';
    import { setContext, createEventDispatcher } from 'svelte';

    export let initialValue;
    const form = writable({values:initialValue,errors:{}});
    setContext('form',form);

    const dispatch = createEventDispatcher();

    function sendData(){

    }
</script>

<pre>
    {JSON.stringify($form,null,2)}
</pre>

<form on:submit|preventDefault={()=>{
    console.log("submit "+JSON.stringify($form.values));
    dispatch('submit',$form.values);
}}>
    <slot/>

</form>