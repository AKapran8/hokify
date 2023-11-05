import { IUserData } from '~/models/user-data.model';

export const state = () => ({
  user: {
    name: '',
    lastName: '',
    email: '',
    gender: '',
    note: '',
  } as IUserData,
  emptyUser: {
    name: '',
    lastName: '',
    email: '',
    gender: '',
    note: '',
  } as IUserData,
});

export const mutations = {
  setUser(state: { user: IUserData; } , data: IUserData) {
    state.user = data;
  },
  resetUser(state: { user: IUserData; }) {
    state.user = {
      name: '',
      lastName: '',
      email: '',
      gender: '',
      note: '',
    };
  },
}

export const getters = {
  getUser(state: { user: IUserData; }) {
    return state.user
  },
  getEmptyUser(state: { user: IUserData; emptyUser: IUserData }) {
    return state.emptyUser
  }
}

export const actions = {
  createUser({commit}: any, userData: IUserData) {
    commit('setUser', userData)
  }
}