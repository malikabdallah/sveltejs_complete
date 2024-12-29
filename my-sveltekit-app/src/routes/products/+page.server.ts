export const load = async ({ parent }) =>{
    console.log("parent call");
    const parentData = await parent();
    console.log("parent data "+parentData);
    const products =await (await import('$lib/dummy-products.json')).default;
    //console.log("products "+JSON.stringify(products));
    return products;
}