<script>
  import Counter from './lib/Counter.svelte'
  
  
  const data = {
    initialCount:0,
    maxCount:10
  };
</script>

<Counter {...data}  />
