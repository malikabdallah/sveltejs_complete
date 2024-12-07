<script>
    export let todos = [];  
    import Button from './Button.svelte';  

    let input;
    let inputText = '';

    function handleAddTodo(){
        console.log("input "+input.value);
    }

</script>

<ul>
    {#each todos as todo, index (todo.id)}
        {@const number = index + 1}
        <li>{number} - {todo.title}</li>
    {/each}

    <!--
        si on veut destructure l object 
        todos as {id,title} index (id)
    -->
</ul>    
value : {inputText}

<form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    
    <input bind:this={input} />
     <input
        on:input={(e) =>{
            console.log("e "+e.currentTarget.value);
            inputText = e.currentTarget.value;
        }}
    />    

    <input bind:value={inputText}/>
    <Button>add</Button>
</form>
