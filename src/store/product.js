import firebase from 'firebase/app'

export default {
  actions: {
    async fetchProductById ({ dispatch, commit }, id) {
      try {
        const product = (await firebase.database().ref(`products/${id}`).once('value')).val() || {}
        return { ...product }
      } catch (e) {}
    }
  }
}
