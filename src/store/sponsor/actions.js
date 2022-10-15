/* eslint-disable no-unused-vars */
import { show, index, globalSearch } from '@/api/sponsor'
export const actions = {
  index({ commit }, query) {
    return new Promise((resolve, reject) => {
      index(query).then(res => {
        commit('SET_LIST', res.data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  show({ commit }, id) {
    return new Promise((resolve, reject) => {
      show(id).then(res => {
        commit('SET_ITEM', res.data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  globalSearch({ commit }, query) {
    return new Promise((resolve, reject) => {
      globalSearch(query)
        .then(res => {
          resolve(res)
        })
        .catch((res) => {
          reject(res)
        })
    })
  }
}
