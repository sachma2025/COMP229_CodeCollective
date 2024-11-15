import { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../api/userApi';
import styles from './UserPage.module.css';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  const handleCreate = async () => {
    await createUser(newUser);
    fetchUsers();
    setNewUser({ username: '', email: '' });
  };

  const handleUpdate = async (id) => {
    const updatedUser = prompt("Enter new username");
    await updateUser(id, { username: updatedUser });
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className={styles.userPage}>
      <h2>User Management</h2>
      <div className={styles.createUser}>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleCreate}>Create User</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleUpdate(user._id)}>Update</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
