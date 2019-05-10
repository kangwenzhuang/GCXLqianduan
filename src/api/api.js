import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
////////////////////////////////////////////////////////////////////////////////////////////////////

export const getClassesList = params => { return axios.get(`${base}/classes/list`, { params: params }); };

export const getClassesListPage = params => { return axios.get(`${base}/classes/listpage`, { params: params }); };

export const removeClasses = params => { return axios.get(`${base}/classes/remove`, { params: params }); };

export const batchRemoveClasses = params => { return axios.get(`${base}/classes/batchremove`, { params: params }); };

export const editClasses = params => { return axios.get(`${base}/classes/edit`, { params: params }); };

export const addClasses = params => { return axios.get(`${base}/classes/add`, { params: params }); };
