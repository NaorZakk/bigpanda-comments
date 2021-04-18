import axios from 'axios';

const { REACT_APP_API_URL } = process.env;


export const fetchComments = async (emailToFilterBy) => {
    const result = await axios.get(`${REACT_APP_API_URL}api/comments?ownerEmail=${emailToFilterBy}`);

    return result.data;
};

export const fetchUser = async (id) => {
    const result = await axios.get(`${REACT_APP_API_URL}api/users/${id}`);

    return result.data;
};

export const createComment = async (message, email ) => {
    await axios.post(`${REACT_APP_API_URL}api/comments`, { message, email });
};

