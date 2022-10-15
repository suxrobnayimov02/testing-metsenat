/* eslint-disable no-unused-vars */
import { login } from '@/api/sponsor'
export const actions = {
  login({ commit }, query) {
    return new Promise((resolve, reject) => {
      login(query).then(res => {
        commit('SET_LOGIN', res.data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  
}
