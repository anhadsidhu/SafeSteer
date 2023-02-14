import React, { useState } from 'react';

const EditComponent = ({ initialValue, onSave }) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave(value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{value}</span>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EditComponent;
