
<script>
    import { createEventDispatcher, onMount, onDestroy, beforeUpdate, af../Button.sveltem 'svelte';  
    import FaRegTrashAlt from   "svelte-icons/fa/FaRegTrashAlt.svelte";
    import Button from './Button.svelte';  
    import { v4 as uuid } from "uuid";
    import { scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    export const readOnly = 'read only';
    export let todos = null;  
    export let isLoading; 
    export let error;

    let listDiv;
    let listDivScrollHeight;
    let inputText = '';
    let input = '';

    let prevTodos=[];
    let autoScroll=false;
    let dispatcher = createEventDispatcher();
    export let disableAdding;

    onMount(()=>{
        console.log("mounted");
    });

    onDestroy(()=>{
        console.log("destroy");
    })

    beforeUpdate(()=>{
        if(listDiv){
            console.log("before update "+listDiv.offsetHeight);
        }
    });

    afterUpdate(()=>{
        if(listDiv){
            console.log("before update "+listDiv.offsetHeight);
            if(autoScroll){
                listDiv.scrollTo(0,listDiv.scrollHeight);
            }   
        }
       
    });

    
    $:{
        autoScroll = todos && prevTodos && todos.length > prevTodos.length;
        prevTodos = todos;
    }
    

    export function clearInput(){
        inputText='';
    }

    export function focusInput(){
        input.focus();
    }


    function deleteTodo(id){
        console.log("id "+id);
        dispatcher('deleteTodo',{id:id});
    }

    function handleAddTodo(){
       const isNotCancelable =  dispatcher('addTodo',{title:inputText},{cancelable:true});
       if(isNotCancelable){
        console.log("not prevent default");
        inputText = '';
       }
     

        /*
        if(!inputText) return;
        todos = [...todos,{
            id:uuid(),
            title:inputText,
            completed:false
        }];
        inputText = '';
        console.log("added todo");
        */
    }

    function handleRemove(id){
        console.log("id:"+id);
        dispatcher("removeTodo",{id:id});
    }

    function handleCompleted(id,completed){
        console.log("id "+id+" completed "+completed);
        dispatcher("updateStatus",{id:id,completed:!completed});
    }

</script>

<div class="todo-list-wrapper">
    {#if isLoading}
        <p>data is loading ...</p>
    {:else if error}
        {error}
    {:else if todos}
    <div class="todo-list" bind:this={listDiv}>
        <div bind:offsetHeight={listDivScrollHeight}>
            {#if todos.length === 0}
                <p class="no-items-exist">No todos yet</p>
            {:else}
                <ul>
                    {#each todos as {id, title, completed}, index (id)}
                        {@const number = index + 1}
                        <li animate:flip class:completed transition:scale={{start:0}}>
                            <label>
                            <input placeholder="New Todo" type="checkbox" checked={completed} on:input={(event)=>{
                                    handleCompleted(id,completed);
                            
                                }} />
                                {title}
                            </label>
                            <button class="remove-todo-button" aria-label="Remove Todo: {title}" on:click={()=>handleRemove(id)}>
                                <span style:width="10px" style:height="10px" style:dispay="inline-block">
                                    <FaRegTrashAlt style="width: 10px; height: 10px;" />
                                </span> 
                            </button>    
                            

                        </li>
                    {/each}

                </ul>    
            {/if}

        </div>

    </div>
    {/if}

       
    <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    
        <input bind:this={input} bind:value={inputText}/>
        <Button disabled={!inputText && disableAdding}>Add</Button>
    </form>
</div>
    



<style lang="scss">
    .todo-list {
        max-height: 150px;
        overflow: auto;
        ul {
            margin: 0;
            padding: 10px;
            list-style: none;
            li {
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                background-color: #303030;
                border-radius: 5px;
                padding:10px;
                position: relative;
                label{
                    cursor:pointer;
                    font-size: 18px;
                    display: flex;
                    align-items: baseline;
                    input[type='checkbox']{
                        margin: 0 10px 0 0;
                        cursor:pointer;
                    }
                };
                &.completed > label {
                    opacity: 0.5;
                    text-decoration: line-through;
                };
                &:hover{
                    .remove-todo-button{
                        display:block;
                    }
                }
            }
        }
    }

    .remove-todo-button {
        height:30px;
        width: 30px;
        border:none;
        background:none;
        padding:5px;
        position:absolute;
        right:10px;
        cursor:pointer;
        display:none;
        :global(svg) {
            fill: #bd1414;
        };
        
    }

    .todo-list-wrapper{
        background-color: #424242;
        border: 1px solid #4b4b4b;
        .no-items-exist{
                margin:0;
                padding:15px;
                text-align: center;
        }
    };

    .add-todo-form{
        padding:15px;
        background-color: #303030;
        display: flex;
        flex-wrap: wrap;
        border-top:1px solid #4b4b4b;
        input {
            flex:1;
            background-color: #424242;
            border: 1px solid #4b4b4b;
            padding:10px;
            color: #fff;
            border-radius: 5px;
            margin-right: 10px;
        }
    }


</style>