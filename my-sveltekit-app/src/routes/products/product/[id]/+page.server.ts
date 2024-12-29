import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load:PageServerLoad = async ({params})=>{
    const products =await (await import('$lib/dummy-products.json')).default;
    console.log("id "+params.id);
   // console.log("products "+JSON.stringify(products));
    const product = products.products.find((p)=>p.id=== +params.id);
    console.log(product);

    if(!product){
        throw error   (404,'Product not found');
    }

    return {product}
}