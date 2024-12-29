import type {RequestHandler} from './$types';

export const GET:RequestHandler =async  ()=>{
    const products =await (await import('$lib/dummy-products.json')).default;

    return new Response(JSON.stringify(products),{
        status:200
    })

}