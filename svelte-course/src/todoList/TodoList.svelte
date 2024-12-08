
<script>
    import { createEventDispatcher } from 'svelte';
    import Button from './Button.svelte';  
    import { v4 as uuid } from "uuid";
    export let todos = [];  
    export const readOnly = 'read only';


    export function clearInput(){
        inputText='';
    }

    export function focusInput(){
        input.focus();
    }

    let input;
    let inputText = '';
    let debugEvent; 

    const dispatcher = createEventDispatcher();

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

<ul>
    {#each todos as {id, title, completed}, index (id)}
        {@const number = index + 1}
        <li>
            <label>
<!--                 {@debug id, title};
 -->                <input type="checkbox" checked={completed} on:input={(event)=>{
                    debugEvent = event;
                    //event.currentTarget.checked = completed;
                    //handleCompleted(id,completed);
                }} />
                {title}
            </label>
            <button on:click={()=>handleRemove(id)}>remove</button>

        </li>
    {/each}

    <!--
        si on veut destructure l object 
        todos as {id,title} index (id)
    -->
</ul>    
value : {inputText}

<!-- {@debug x }
 -->
<form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    
    <input bind:this={input} bind:value={inputText}/>
    <Button disabled={!inputText}>Add</Button>
</form>
