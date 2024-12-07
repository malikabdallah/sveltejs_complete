<script>
  import Button from "./lib/Button.svelte";
  import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte';
  import FaAllergies from 'svelte-icons/fa/FaAllergies.svelte'; 

  function changeSize(newSize) {
      size = newSize;
  }
</script>

<Button let:isLeftHovered size="small" shadow>
  <div style="width:20px" slot="leftContent">
      {#if isLeftHovered}
          <FaAngellist />
      {:else}
          <FaAllergies />
      {/if}
      Button text
  </div>
</Button>

<br />
<button on:click="{() => changeSize('large')}">large</button>
<button on:click="{() => changeSize('small')}">small</button>

<style>
</style>
