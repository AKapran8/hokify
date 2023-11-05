import { IUserData } from '~/models/user-data.model';

export const state = () => ({
  user: {
    name: '',
    lastName: '',
    email: '',
    gender: '',
    note: '',
  } as IUserData,
});

export const mutations = {
  setUser(state: { user: IUserData; } , data: IUserData) {
    console.log('data ', data)
    state.user = data;
  }
}

export const getters = {
  getUser(state: { user: IUserData; }) {
    return state.user
  }

}

export const actions = {
  createUser({commit}: any, userData: IUserData) {
    console.log('userData ', userData)
    commit('setUser', userData)
  }
}