<script>
  import TodoList from './todoList/TodoList.svelte';
  import { v4 as uuid } from "uuid";
  
  const todos = [
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
    ]
</script>

<TodoList {todos}>

</TodoList>