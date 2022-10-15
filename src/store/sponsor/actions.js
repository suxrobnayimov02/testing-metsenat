/* eslint-disable no-unused-vars */
import { show, index } from '@/api/sponsor'
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
  totalCount({ commit }, query) {
    const filter = { ...query }
    filter.kodp_keys = JSON.stringify(filter.kodp_keys)
    return new Promise((resolve, reject) => {
      index(filter).then(res => {
        commit('SET_TOTAL_COUNT', res.data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
}
