<script>
  import TodoList from './todoList/TodoList.svelte';
  import { onMount } from 'svelte';
  import { v4 as uuid } from "uuid";
  import { fade, fly } from 'svelte/transition';
  let todoListComponent;
  let showList=true;

 /*  let todos = [
        {
            id:uuid(),
            title:'Todo 1',
            completed: true
        },
        {
            id:uuid(),
            title:'Todo 2',
            completed: true
        },
        {
            id:uuid(),
            title:'Todo 3',
            completed: false
        }
    ]; */

    onMount(()=>{
        loadTodos();
    });

    let error = null;
    let todos = null;
    let isLoading = false;
    let disableAdding = false;

    async function loadTodos(){
        isLoading = true;
        await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(async(response)=>{
                if(response.ok){
                    //return response.json();
                    todos = await response.json();
                }else{
                    error = "An error has occured";
                    //throw new Error("error fetching data");
                }
            })
        isLoading = false;    
    }

    
    $:{
      console.log("test");
      if(todos){
        console.log("todos "+todos);
      }
    }
      

    async function handleAddTodo(event){
        console.log(event.detail);
        //event.preventDefault();
        disableAdding = true;
        await fetch('https://jsonplaceholder.typicode.com/todos',
            {method:"POST",
             body: JSON.stringify({
                title:event.detail.title,
                completed:false
             }),
             headers:{
                'Content-type':'application/json;charset=UTF-8'
             }   
            })
            .then(async(response)=>{
                if(response.ok){
                    //return response.json();
                    const todo = await response.json();
                    todo.id = uuid();
                    todos = [...todos,todo];
                    console.log(todo);
                }else{
                    error = "An error has occured";
                    //throw new Error("error fetching data");
                }
        })
/* 
        setTimeout(() => {
            todos = [...todos,{id:uuid(),title:event.detail.title,completed:false }];
            todoListComponent.clearInput();
            //todoListComponent.focusInput();
        }, (1000)); */
        console.log("prevent default");
        disableAdding = false;
    }

    function handleRemoveTodo(event){

        const id = event.detail.id;
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:"DELETE"
        }).then(response=>{
            if (response.ok){
                todos = todos.filter(t=> t.id !== event.detail.id);
            }else{
                error = "An error has occured"; 

            }
        })
        
        //todos = todos.filter(t=> t.id !== event.detail.id);
    }

    function handleUpdated(event){
        
        todos = todos.map(t=>{
            if(t.id === event.detail.id){
                console.log("completed "+event.detail.completed);
                return {id:event.detail.id,title:t.title,completed:event.detail.completed};
            }else{
                return t;
            }
        });
        /*
        todos = [...todos];
        */
    }

    function handleFocus(){
        todoListComponent.focusInput();
    }

    function hideOrShow(){
        showList = !showList;
    }

   
</script>

<!-- mon composant {todoListComponent && todoListComponent.readOnly}
 -->
<label>
    display list:
    <input type="checkbox" bind:checked={showList}/>
</label>
<!-- {#await loadTodos() then todos}
 -->    {#if showList}
        <div transition:fly={{y:400 }} style:max-width="400px">
                <TodoList {disableAdding} bind:this={todoListComponent}
                        {isLoading} {error}
                        {todos} on:addTodo={handleAddTodo} on:removeTodo={handleRemoveTodo}
                        on:updateStatus={handleUpdated}
                    >

                </TodoList>
                <button on:click={()=>handleFocus(5)}>getFocus</button>

        </div>
    
    <!--     <button on:click={hideOrShow}>{showList ? 'Cacher':'Montre'}</button>
    -->
    {/if} 

    {#if todos}
     nombre de todos {#key todos.lenght} <span style="display: inline-block;" in:fly|local={{y:-10}}>{todos.length}</span> {/key}

    {/if}
    {#if todos}
     nombre de todos <span style="display: inline-block;" >{todos.length}</span>

    {/if}
  <!--   {:catch error}
    <p>An error occured</p>
{/await}    -->    
<br/>

<!-- <TodoList bind:todos>

</TodoList> -->


<style>
    :global(body){
        background-color: aqua;
    }

</style>