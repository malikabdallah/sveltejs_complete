<script lang="ts">
    import type { PageData } from "./$types";

    export let data:PageData;

    $:product = data.product;
</script>



<img src={product?.thumbnail} alt={product?.title} />

<h1>{product?.title}</h1>

<h1>{product?.description}</h1>

<style>
    img{
        width:100%;
    }
</style>