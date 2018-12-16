export default function ({ store, redirect }) {
  if (!store.state.userProfile) {
    return redirect('/login')
  }
}
