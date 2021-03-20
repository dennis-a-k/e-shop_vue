import firebase from 'firebase/app'

export default {
  actions: {
    async fetchProducts () {
      try {
        const records = (await firebase.database().ref('products').once('value')).val() || {}
        return Object.keys(records).map(key => ({ ...records[key], id: key }))
      } catch (e) {}
    }
  }
}
