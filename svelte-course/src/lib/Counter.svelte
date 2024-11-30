<script>
    let count = 0;

    function addCount(){
      count++;
    }
</script>

<button on:click={(e) => {count++}} > Clicks {count}</button>
<button on:click={addCount} > Clicks {count}</button>


<style>
  button{
    padding:15px;
  }
</style>