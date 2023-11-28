import React from 'react';

const DeleteButton = ({ id, onDelete }) => (
  <button onClick={() => onDelete(id)}>Delete</button>
);

  export default DeleteButton;