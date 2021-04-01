import firebase from 'firebase/app'

export default {
  actions: {
    async fetchProducts () {
      try {
        const records = (await firebase.database().ref('products').once('value')).val() || {}
        return Object.keys(records).map(key => ({ ...records[key], id: key }))
      } catch (e) {}
    },
    async fetchProductById ({ dispatch, commit }, id) {
      try {
        const product = (await firebase.database().ref(`products/${id}`).once('value')).val() || {}
        return { ...product }
      } catch (e) {}
    }
  }
}
