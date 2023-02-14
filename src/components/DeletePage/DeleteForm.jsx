import React, { useState } from 'react';

const DeleteStudentForm = ({ student, onDelete }) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsConfirming(true);
  };

  const handleConfirm = () => {
    setIsConfirming(false);
    onDelete(student.id);
  };

  const handleCancel = () => {
    setIsConfirming(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {isConfirming ? (
        <div>
          Are you sure you want to delete student "{student.name}"?
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      ) : (
        <button type="submit">Delete</button>
      )}
    </form>
  );
};

export default DeleteStudentForm;
