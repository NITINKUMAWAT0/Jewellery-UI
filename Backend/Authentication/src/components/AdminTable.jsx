import React, { useState, useEffect, useCallback } from 'react';
import { Dropdown, Table, Form, Spinner } from 'react-bootstrap';
import { FaEllipsisV } from 'react-icons/fa';
import './AdminTable.css';
import axios from 'axios';

const AdminTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/home/adminMember');
      const usersData = response.data.result;
      setUsers(usersData);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRoleChange = useCallback((userId, role) => async (e) => {
    const isChecked = e.target.checked;

    

    try {
      await axios.post('http://localhost:5000/api/home/updateJobRole', {
        userId: userId,
        role: role,
        isChecked: isChecked
      });

      // Optimistic UI update
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId
          ? { ...user, job_role: isChecked ? role : null }
          : user
      )
    );
    } catch (error) {
      setError('Error updating role');
      console.log(error);
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === userId
            ? { ...user, job_role: !isChecked ? role : null }
            : user
        )
      );
    }
  }, []);

  const roles = ['productManager', 'adminManager', 'customerManager', 'orderManager', 'customReportsManager'];

  return (
    <div className="admin-table-container">
      {loading && <Spinner animation="border" />}
      {error && <p className="error-message">{error}</p>}
      <Table striped bordered hover className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id={`dropdown-basic-${user.id}`} className="action-btn">
                    <FaEllipsisV />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Header>Manage Roles</Dropdown.Header>
                    {roles.map(role => (
                      <Dropdown.Item key={role}>
                        <div className="role-item">
                          <span className="role-name">{role.replace(/([A-Z])/g, ' $1')}</span>
                          <Form.Check
                            type="switch"
                            id={`${user.id}-${role}`}
                            className="float-end role-switch"
                            checked={user.job_role === role} // Check if the user's job_role matches the current role
                            disabled={loading} // Disable while loading
                            onChange={handleRoleChange(user.id, role)}
                          />
                        </div>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminTable;
