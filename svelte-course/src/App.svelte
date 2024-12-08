<script>
  import TodoList from './todoList/TodoList.svelte';
  import { v4 as uuid } from "uuid";
  
  let todoListComponent;

  let todos = [
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
    ];

    $:{
      console.log("todos "+todos);
    }

    function handleAddTodo(event){
        console.log(event.detail);
        //event.preventDefault();

        setTimeout(() => {
            todos = [...todos,{id:uuid(),title:event.detail.title,completed:false }];
            todoListComponent.clearInput();
            //todoListComponent.focusInput();
        }, (1000));
        console.log("prevent default");
    }

    function handleRemoveTodo(event){
        todos = todos.filter(t=> t.id !== event.detail.id);
    }

    function handleUpdated(event){
        todos = todos.map(t=>{
            if(t.id === event.detail.id){
                return {id:event.detail.id,title:t.title,completed:event.detail.completed};
            }else{
                return t;
            }
        })
    }

    function handleFocus(){
        todoListComponent.focusInput();
    }

   
</script>

mon composant {todoListComponent && todoListComponent.readOnly}

<TodoList bind:this={todoListComponent}

    {todos} on:addTodo={handleAddTodo} on:removeTodo={handleRemoveTodo}
    on:updateStatus={handleUpdated}
>

</TodoList>
<button on:click={()=>handleFocus(5)}>getFocus</button>

<!-- <TodoList bind:todos>

</TodoList> -->

nombre de todos {todos.length}