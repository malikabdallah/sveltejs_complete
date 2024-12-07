<script>
  import Counter from './Counter.svelte'
  alert("loader counter");
  
  const data = {
    initialCount:0,
    maxCount:10
  };
</script>

<Counter {...data}  />
