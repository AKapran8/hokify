import { IUserData } from '~/models/user-data.model'

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
  } as IUserData, // Not sure, I think it useless
  isSubmitted: false,
})

export const mutations = {
  setUser(state: { user: IUserData; isSubmitted: boolean }, data: IUserData) {
    state.user = data
    state.isSubmitted = true
  },
  resetUser(state: { user: IUserData }) {
    state.user = {
      name: '',
      lastName: '',
      email: '',
      gender: '',
      note: '',
    }
  },
}

export const getters = {
  getUser(state: { user: IUserData }) {
    return state.user
  },
  getEmptyUser(state: { user: IUserData; emptyUser: IUserData }) {
    return state.emptyUser
  },
  getSubmitStatus(state: { user: IUserData; isSubmitted: boolean }) {
    return state.isSubmitted
  },
}

export const actions = {
  createUser({ commit }: any, userData: IUserData) {
    commit('setUser', userData)
  },
  resetUser({ commit }: any) {
    commit('resetUser')
  },
}
