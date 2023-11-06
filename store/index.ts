import { IUserData } from '~/models/user-data.model'

export const state = () => ({
  user: {
    name: '',
    lastName: '',
    email: '',
    gender: '',
    note: '',
  } as IUserData,
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
  getEmptyUser() {
    return {
      name: '',
      lastName: '',
      email: '',
      gender: '',
      note: '',
    }
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
