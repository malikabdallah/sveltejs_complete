<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data:LayoutData;

    console.log("data layout "+JSON.stringify(data));

</script>


<nav>
    <a href="/">Home</a>
    <a href="/products">Products</a>

</nav>


<slot/>