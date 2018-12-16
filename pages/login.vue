<template>
  <div class="container mx-auto p-10">
    <div class="w-full max-w-sm mx-auto">
      <div class="relative h-12 mb-10 overflow-x-hidden">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
          <h1
            v-show="showLoginForm"
            class="top-0 left-0 absolute">Log In</h1>
        </transition>
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
          <h1
            v-show="showForgotPassword"
            class="top-0 left-0 absolute">Reset Password</h1>
        </transition>
      </div>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="w-full">
          <form
            v-if="showLoginForm && !passwordResetSuccess"
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
                v-model.trim="loginForm.password"
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
                href="#"
                class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker no-underline"
                @click="togglePasswordReset">
                Forgot Password?
              </a>
            </div>
          </form>
          <form
            v-if="showForgotPassword && !passwordResetSuccess"
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
          <div
            v-if="passwordResetSuccess"
            class="text-center">
            <h2>Email Sent</h2>
            <span class="text-green-light">Check your email for a link to reset your password</span>
          </div>
        </div>
      </div>
      <p
        :class="[
          'text-center',
          'text-xs',
          { 'text-blue-darker': darkMode },
          { 'text-primary': !darkMode }
      ]">
        <strong>
          <span
            v-if="showForgotPassword"
            class="inline-block">
            <a
              href="#"
              class="text-blue hover:text-blue-darker no-underline"
              @click="togglePasswordReset">Back to Log In</a> |
          </span>
          Sign in with <a
            href="#"
            class="text-blue hover:text-blue-darker no-underline"
            @click="googleSignIn">Google</a>
        </strong>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
      performingRequest: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      errorMsg: ''
    }
  },
  computed: mapState([
    'darkMode'
  ]),
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
      }).then((data) => {
        this.performingRequest = false
        this.$router.push('/')
      }).catch(err => {
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
        this.resetForm.email = ''
      }).catch(err => {
        this.performingRequest = false
        this.errorMsg = err.message
      })
    }
  }
}
</script>

<style>
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */
</style>
