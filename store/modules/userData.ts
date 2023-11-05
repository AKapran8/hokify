// import {
//   VuexModule,
//   Module,
//   action,
//   getter,
//   mutation,
// } from 'vuex-class-component'
// import { IUserData } from '~/models/user-data.model'

// interface IUserDataModule {
//   userData: IUserData | null
// }

// @Module({ namespacedPath: 'modules/counter/', target: 'nuxt' })
// export class UserDataStore extends VuexModule implements IUserDataModule {
//   @getter userData: IUserData | null = null

//   @mutation
//   public SET_USER_DATA(userData: IUserData | null = null) {
//     this.userData = userData as IUserData | null
//   }

//   // @action(): Promise<void> // Change the return type to Promise<void>
//   // public ADD_USER_DATA(payload: IUserData) {
//   //   this.SET_USER_DATA(payload)
//   //   return Promise.resolve();
//   // }
// }

// export default UserDataStore.ExtractVuexModule(UserDataStore);
