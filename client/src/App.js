import React, { useState, useEffect } from 'react';
// import './App.css';

import { fetchComments, fetchUser, createComment } from "./api";

import Grid from '@material-ui/core/Grid';
import CommentList from './components/CommentList';
import UserDialog from './components/UserDialog';
import CommentForm from './components/CommentForm';
import FilterForm from './components/FilterForm';


function App() {
  const [comments, setComments] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    async function getComments() {
      const comments = await fetchComments(filterInput);
      setComments(comments);
    }
    getComments();
  }, [filterInput]);

  async function selectUser(id) {
    const user = await fetchUser(id);
    setSelectedUser(user);
    setIsDialogOpen(true);
  }

  function handleCloseDialog() {
    setIsDialogOpen(false);
  }

  async function addComment(message, email) {
    await createComment(message, email);
    const comments = await fetchComments(filterInput);

    setComments(comments);
  }

  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>

          <CommentForm addComment={addComment} />
          <FilterForm setComments={setComments} filterInput={filterInput} setFilterInput={setFilterInput} />

          <CommentList comments={comments} selectUser={selectUser} />

          {selectedUser && <UserDialog selectedUser={selectedUser} handleClose={handleCloseDialog} isDialogOpen={isDialogOpen} />}

        </Grid>

      </Grid>

    </div>
  );
}

export default App;
