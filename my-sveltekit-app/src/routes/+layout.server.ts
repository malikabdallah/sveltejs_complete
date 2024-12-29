import type {LayoutServerLoad} from './$types';


export const load:LayoutServerLoad = ({cookies}) =>{

    const token = cookies.get('token');

    const user = {username:'malik',name:'abdallah'};
    return {user,token};
}