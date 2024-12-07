<script>
    import ProductList from './ProductList.svelte';

    let products = [{name:"malik"}];
</script>

<ProductList {products}>
    <div slot="product" let:product>
        <h3>{product.name}</h3>

    </div>
    <p slot="footer">mon footer</p>


</ProductList>