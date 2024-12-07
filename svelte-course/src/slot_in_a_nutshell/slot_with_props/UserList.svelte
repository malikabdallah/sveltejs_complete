<script>
    export let users;
  </script>
  
  <ul>
    {#each users as user}
      <li>
        <slot {user}>
          <p>User: {user.name}</p>
        </slot>
      </li>
    {/each}
</ul>
   