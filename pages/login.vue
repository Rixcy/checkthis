<template>
  <div class="container mx-auto p-10">
    <transition name="fade">
      <div
        v-if="performingRequest"
        class="loading">
        <p>Loading...</p>
      </div>
    </transition>
    <div class="w-full max-w-sm mx-auto">
      <h1 class="pb-10">Log In</h1>
      <transition name="fades">
        <form
          v-if="showLoginForm"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          @submit.prevent>
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="emailLogin">
              Email
            </label>
            <input
              id="emailLogin"
              v-model.trim="loginForm.email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="you@email.com"
              autocomplete="email">
          </div>
          <div class="mb-6">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="passwordLogin">
              Password
            </label>
            <input
              id="passwordLogin"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="**********">
            <transition name="fade">
              <div v-if="errorMsg !== ''">
                <p class="text-red text-xs italic">{{ errorMsg }}</p>
              </div>
            </transition>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="emailLogin">
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              @click="togglePasswordReset">
              Forgot Password?
            </a>
          </div>
        </form>
      </transition>
      <transition name="fades">
        <form
          v-if="showForgotPassword"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          @submit.prevent>
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="emailReset">
              Email
            </label>
            <input
              id="emailReset"
              v-model.trim="resetForm.email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="you@email.com"
              autocomplete="email">
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="resetPassword">
              Submit
            </button>
          </div>
        </form>
      </transition>
      <p class="text-center text-grey text-xs">
        <a @click="togglePasswordReset">Back to Log In</a> |
        Sign in with <a @click="googleSignIn">Google</a>
      </p>
    </div>
  </div>
</template>

<style>
.fades-enter-active,
.fades-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fades-enter,
.fades-leave-active {
  opacity: 0
}
</style>

<script>
export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        email: '',
        password: ''
      },
      resetForm: {
        email: ''
      },
      showLoginForm: true,
      performingRequest: false,
      showForgotPassword: false,
      passwordResetSuccess: false,
      errorMsg: ''
    }
  },
  methods: {
    toggleForm () {
      this.errorMsg = ''
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset () {
      if (this.showForgotPassword) {
        this.showLoginForm = true
        this.showForgotPassword = false
        this.passwordResetSuccess = false
      } else {
        this.showLoginForm = false
        this.showForgotPassword = true
      }
    },
    emailLogin () {
      this.performingRequest = true

      this.$store.dispatch('signInWithEmail', {
        email: this.loginForm.email,
        password: this.loginForm.password
      }).then(() => {
        this.performingRequest = false
        this.$router.push('/')
      }).catch(err => {
        console.log(err)
        this.performingRequest = false
        this.errorMsg = err.message
      })
    },
    googleSignIn () {
      this.performingRequest = true

      this.$store.dispatch('signInWithGoogle').then(() => {
        this.performingRequest = false
        this.$router.push('/')
      }).catch(err => {
        console.log(err)
        this.performingRequest = false
        this.errorMsg = err.message
      })
    },
    // signup () {
    //   this.performingRequest = true

    //   fb.auth.createUserWithEmailAndPassword(
    //     this.signupForm.email,
    //     this.signupForm.password
    //   ).then(user => {
    //     this.$store.commit('setCurrentUser', user.user)
    //     fb.usersCollection.doc(user.user.uid).set({
    //       name: this.signupForm.name,
    //       avatar: `https://api.adorable.io/avatars/300/${user.user.uid}@adorable.io.png`,
    //       email: this.signupForm.email,
    //       createdAt: fb.timestamp,
    //       updatedAt: fb.timestamp
    //     }).then(() => {
    //       this.$store.dispatch('fetchUserProfile')
    //       this.performingRequest = false
    //       this.$router.push('/dash')
    //     }).catch(err => {
    //       console.log(err)
    //       this.performingRequest = false
    //       this.errorMsg = err.message
    //     })
    //   }).catch(err => {
    //     console.log(err)
    //     this.performingRequest = false
    //     this.errorMsg = err.message
    //   })
    // },
    resetPassword () {
      this.performingRequest = true

      this.$store.dispatch('sendPasswordResetEmail', this.resetForm.email).then(() => {
        this.performingRequest = false
        this.passwordResetSuccess = true
        this.passwordForm.email = ''
      }).catch(err => {
        console.log(err)
        this.performingRequest = false
        this.errorMsg = err.message
      })
    }
  }
}
</script>
