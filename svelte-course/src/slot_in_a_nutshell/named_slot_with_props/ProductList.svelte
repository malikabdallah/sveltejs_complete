<script>
    export let products = [];

</script>

<ul>
    {#each products as product}
        <li>
            <slot name="product" {product}></slot>
        </li>
    {/each}
    <li>
        <slot name="footer"></slot>
    </li>
</ul>