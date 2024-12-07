<script>
    export let initialCount;
    export let maxCount;
    
    let count = 0;
    
    function addCount(){
      if(count<maxCount){
        count++;
      }
    }

    $:{
      console.log("props "+ JSON.stringify($$props));
      console.log("restProps "+JSON.stringify($$restProps));
    }

    //let chaineDeCharactere = "";
    $:chaineDeCharactere = `Vous avez cliquez ${count} fois.`
 
    $: if(count >5 ){
      console.log(`vous avez cliquez ${count} fois`);
      console.log({initialCount})
    }
</script>

<button on:click={(e) => {count++}} > Clicks {count}</button>
<button on:click={addCount} > Clicks {count}</button>

<br/>
<h1>{chaineDeCharactere}</h1>
<style>
  button{
    padding:15px;
  }
</style>