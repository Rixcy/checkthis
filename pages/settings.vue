<template>
  <main-content>
    <div class="container mx-auto p-10">
      <div class="w-full max-w-md mx-auto">
        <div class="relative h-12 mb-10 overflow-x-hidden">
          <h1>Settings</h1>
        </div>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full">
          <form @submit.prevent>
            <div class="-mx-3 md:flex">
              <div class="mb-4 inline-block md:w-1/4 px-3">
                <label
                  class="block text-grey-darker text-sm font-bold mb-2"
                  for="emailLogin">
                  Title
                </label>
                {{ userProfile.title }}
                <!-- <input
                  id="title"
                  class="shadow appearance-none block w-full border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Mr"
                  autocomplete="title"> -->
              </div>
              <div class="mb-4 inline-block md:w-3/4 px-3">
                <label
                  class="block text-grey-darker text-sm font-bold mb-2"
                  for="name">
                  Name
                </label>
                {{ userProfile.name }}
              </div>
            </div>
            <div class="mb-6">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="email">
                Email
              </label>
              {{ userProfile.email }}
              <!-- <input
                id="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="**********"> -->
            </div>
            <div class="mb-6">
              <label
                class="block text-grey-darker text-sm font-bold mb-2">
                Location
              </label>
              {{ userProfile.location }}
            </div>
            <div class="flex items-center justify-end">
              <button
                class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main-content>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'userProfile'
  ]),
  middleware: [
    'authenticated'
  ],
}
</script>
