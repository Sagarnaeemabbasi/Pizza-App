import {createReducer} from '@reduxjs/toolkit';

const messageReducer = createReducer(
  {},
  {
    addTaskRequest: state => {
      state.loading = true;
    },
    addTaskSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addTaskFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    deleteTaskRequest: state => {
      state.loading = true;
    },
    deleteTaskSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteTaskFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    updateTaskRequest: state => {
      state.loading = true;
    },
    updateTaskSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateTaskFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    clearMessage: state => {
      state.message = null;
    },
    clearError: state => {
      state.error = null;
    },
  },
);

export default messageReducer;
