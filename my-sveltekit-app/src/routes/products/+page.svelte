
<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;

    $:products = data.products;

   // $:console.log("product detail "+JSON.stringify(products));
</script>
<p>test layout data {data.user.username}</p>
<h1>titre:{data.title}</h1>

{#if products && products.length>0}
    <ul>
        {#each products as product}
            <li>
                <h3><a href="/product/{product.id}">{product.title}</a></h3>
                <img src={product.thumbnail} alt="thumbnail"/>
                <p>{product.description}</p>
            </li>
        {/each}
    </ul>
{/if}


<style>
    ul{
        padding: 0;
        margin:0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap:30px;
    }

    img{
        width: 100%;
    }
</style>