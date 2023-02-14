import React, { useState, useContext } from 'react';
import { AppContext } from './context/AppContext';


const ExpenseItem = (props) => {
  const [value, setValue] = useState(props.cost);
  const [editMode, setEditMode] = useState(false);

  const { dispatch } = useContext(AppContext);
  document.title = "Budget.r"

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const handleEditExpense = () => {
    setEditMode(true);
  };

  const handleSaveExpense = () => {
    dispatch({
      type: 'EDIT_EXPENSE',
      payload: { id: props.id, cost: value },
    });
    setEditMode(false);
  };

  return (
    <li class='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        {editMode ? (
          <>
            <input
              required='required'
              type='number'
              class='form-control mr-3'
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <button
              type='button'
              class='btn btn-primary mr-2'
              onClick={handleSaveExpense}
            >
              Save
            </button>
            <button
              type='button'
              class='btn btn-secondary'
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <span class='btn btn-primary m-1' onClick={handleEditExpense}>
              ${props.cost}
            </span>
            <button className='btn btn-danger' onClick={handleDeleteExpense}>
              X
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default ExpenseItem;
