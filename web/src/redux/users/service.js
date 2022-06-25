const addUser = async user => {
    const response = await fetch('http://localhost:5000/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }
  
    return data;
  };
  
  const getUsers = async () => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'GET',
    });
    return response.json();
  };
  
  const removeUser = async userId => {
    const response = await fetch(
      `http://localhost:5000/users/remove/${userId}`,
      {
        method: 'DELETE',
      }
    );
  
    if (!response.ok) {
      throw new Error(response.errorMsg);
    }
  };

  const getUserById = async userId => {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: 'GET',
    });
    return response.json();
  }
  
  const updateUser = async user => {
    const response = await fetch(
      `http://localhost:5000/users/update/${user.userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    );
  
    if (!response.ok) {
      throw new Error(response.errorMsg);
    }
  };
  
  export { addUser, getUsers, getUserById, removeUser, updateUser };
  