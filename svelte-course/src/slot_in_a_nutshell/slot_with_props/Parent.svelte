<!-- Parent component -->

<script>
    import UserList from './UserList.svelte';
  
    let users = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 }
    ];
  </script>
  
  <UserList {users} let:user>
    <div class="user-card">
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
    </div>
  </UserList>