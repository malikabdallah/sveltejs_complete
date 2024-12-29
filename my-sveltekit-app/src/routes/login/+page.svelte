<script lang="ts">
	import { goto } from "$app/navigation";


    let username = '';
    let password = '';

    const login = async()=>{
        const response = await fetch('/api/login',{
            method: 'POST',
            body: JSON.stringify({username,password})
        });
        const respJSON = await response.json();
        console.log("res json "+JSON.stringify(respJSON));
        if(response.ok){
            goto('/products');
        }else{
            alert(respJSON.message);
        }
    };
</script>    

<form on:submit|preventDefault={login}>

    <label for="username">username</label>
    <input type="text" bind:value={username} id="username" name="usename" placeholder="username"/>
    <br/><br/>
    <label for="password">password</label>
    <input bind:value={password} id="password" name="password" placeholder="password"/>

    <br/>

    <button type="submit">submit</button>
</form>    