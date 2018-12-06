<template>
  <div class="container mx-auto p-10">
    <h1>Colours</h1>
    <div
      class="relative my-8 overflow-hidden rounded shadow-md1">
      <div
        class="relative shadow bg-primary text-white px-3 py-4 md:py-1 text-sm font-semibold flex justify-between z-10"
        @click="togglePrimary">
        <div class="uppercase">Primary</div>
        <div class="flex justify-between">
          <span class="mr-2">Base</span>
          <span class="font-normal opacity-75">#E3342F</span>
        </div>
      </div>
      <transition
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp">
        <div
          v-show="showPrimary"
          class="md:flex md:flex-row-reverse">
          <div class="text-primary-darkest bg-primary-lightest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
            <div class="mb-2">Lightest</div>
            <div class="font-normal opacity-75">#FCEBEA</div>
          </div>
          <div class="text-primary-darkest bg-primary-lighter px-3 py-4 text-sm flex-1 font-semibold leading-tight">
            <div class="mb-2">Lighter</div>
            <div class="font-normal opacity-75">#F9ACAA</div>
          </div>
          <div class="text-white bg-primary-light px-3 py-4 text-sm flex-1 font-semibold leading-tight">
            <div class="mb-2">Light</div>
            <div class="font-normal opacity-75">#EF5753</div>
          </div>
          <div class="text-white bg-primary px-3 py-4 text-sm flex-1 font-semibold leading-tight">
            <div class="mb-2">Base</div>
            <div class="font-normal opacity-75">#E3342F</div>
          </div>
          <div class="text-white bg-primary-dark px-3 py-4 text-sm flex-1 font-semibold leading-tight">
            <div class="mb-2">Dark</div>
            <div class="font-normal opacity-75">#CC1F1A</div>
          </div>
          <div class="text-white bg-primary-darker px-3 py-4 text-sm flex-1 font-semibold leading-tight">
            <div class="mb-2">Darker</div>
            <div class="font-normal opacity-75">#621B18</div>
          </div>
          <div class="text-white bg-primary-darkest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
            <div class="mb-2">Darkest</div>
            <div class="font-normal opacity-75">#3B0D0C</div>
          </div>
        </div>
      </transition>
    </div>
    <div
      class="relative my-8 overflow-hidden rounded shadow-md1">
      <div
        class="relative shadow bg-red text-white px-3 py-4 md:py-1 text-sm font-semibold flex justify-between"
        @click="toggleRed">
        <div class="uppercase">Red</div>
        <div class="flex justify-between">
          <span class="mr-2">Base</span>
          <span class="font-normal opacity-75">#E3342F</span>
        </div>
      </div>
      <div
        v-show="showRed"
        class="md:flex md:flex-row-reverse">
        <div class="text-red-darkest bg-red-lightest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lightest</div>
          <div class="font-normal opacity-75">#FCEBEA</div>
        </div>
        <div class="text-red-darkest bg-red-lighter px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lighter</div>
          <div class="font-normal opacity-75">#F9ACAA</div>
        </div>
        <div class="text-white bg-red-light px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Light</div>
          <div class="font-normal opacity-75">#EF5753</div>
        </div>
        <div class="text-white bg-red px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Base</div>
          <div class="font-normal opacity-75">#E3342F</div>
        </div>
        <div class="text-white bg-red-dark px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Dark</div>
          <div class="font-normal opacity-75">#CC1F1A</div>
        </div>
        <div class="text-white bg-red-darker px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darker</div>
          <div class="font-normal opacity-75">#621B18</div>
        </div>
        <div class="text-white bg-red-darkest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darkest</div>
          <div class="font-normal opacity-75">#3B0D0C</div>
        </div>
      </div>
    </div>
    <div
      class="relative my-8 overflow-hidden rounded shadow-md1">
      <div
        class="relative shadow bg-orange text-orange-darkest px-3 py-4 md:py-1 text-sm font-semibold flex justify-between"
        @click="toggleOrange">
        <div class="uppercase">Orange</div>
        <div class="flex justify-between">
          <span class="mr-2">Base</span>
          <span class="font-normal opacity-75">#F6993F</span>
        </div>
      </div>
      <div
        v-show="showOrange"
        class="md:flex md:flex-row-reverse">
        <div class="text-orange-darkest bg-orange-lightest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lightest</div>
          <div class="font-normal opacity-75">#FFF5EB</div>
        </div>
        <div class="text-orange-darkest bg-orange-lighter px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lighter</div>
          <div class="font-normal opacity-75">#FCD9B6</div>
        </div>
        <div class="text-orange-darkest bg-orange-light px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Light</div>
          <div class="font-normal opacity-75">#FAAD63</div>
        </div>
        <div class="text-orange-darkest bg-orange px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Base</div>
          <div class="font-normal opacity-75">#F6993F</div>
        </div>
        <div class="text-white bg-orange-dark px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Dark</div>
          <div class="font-normal opacity-75">#DE751F</div>
        </div>
        <div class="text-white bg-orange-darker px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darker</div>
          <div class="font-normal opacity-75">#613B1F</div>
        </div>
        <div class="text-white bg-orange-darkest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darkest</div>
          <div class="font-normal opacity-75">#462A16</div>
        </div>
      </div>
    </div>
    <div
      class="relative my-8 overflow-hidden rounded shadow-md1">
      <div
        class="relative shadow bg-yellow text-yellow-darkest px-3 py-4 md:py-1 text-sm font-semibold flex justify-between"
        @click="toggleYellow">
        <div class="uppercase">Yellow</div>
        <div class="flex justify-between">
          <span class="mr-2">Base</span>
          <span class="font-normal opacity-75">#FFED4A</span>
        </div>
      </div>
      <div
        v-show="showYellow"
        class="md:flex md:flex-row-reverse">
        <div class="text-yellow-darkest bg-yellow-lightest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lightest</div>
          <div class="font-normal opacity-75">#FCFBEB</div>
        </div>
        <div class="text-yellow-darkest bg-yellow-lighter px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lighter</div>
          <div class="font-normal opacity-75">#FFF9C2</div>
        </div>
        <div class="text-yellow-darkest bg-yellow-light px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Light</div>
          <div class="font-normal opacity-75">#FFF382</div>
        </div>
        <div class="text-yellow-darkest bg-yellow px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Base</div>
          <div class="font-normal opacity-75">#FFED4A</div>
        </div>
        <div class="text-yellow-darkest bg-yellow-dark px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Dark</div>
          <div class="font-normal opacity-75">#F2D024</div>
        </div>
        <div class="text-white bg-yellow-darker px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darker</div>
          <div class="font-normal opacity-75">#684F1D</div>
        </div>
        <div class="text-white bg-yellow-darkest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darkest</div>
          <div class="font-normal opacity-75">#453411</div>
        </div>
      </div>
    </div>
    <div
      class="relative my-8 overflow-hidden rounded shadow-md1">
      <div
        class="relative shadow bg-green text-white px-3 py-4 md:py-1 text-sm font-semibold flex justify-between"
        @click="toggleGreen">
        <div class="uppercase">Green</div>
        <div class="flex justify-between">
          <span class="mr-2">Base</span>
          <span class="font-normal opacity-75">#38C172</span>
        </div>
      </div>
      <div
        v-show="showGreen"
        class="md:flex md:flex-row-reverse">
        <div class="text-green-darkest bg-green-lightest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lightest</div>
          <div class="font-normal opacity-75">#E3FCEC</div>
        </div>
        <div class="text-green-darkest bg-green-lighter px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lighter</div>
          <div class="font-normal opacity-75">#A2F5BF</div>
        </div>
        <div class="text-green-darkest bg-green-light px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Light</div>
          <div class="font-normal opacity-75">#51D88A</div>
        </div>
        <div class="text-white bg-green px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Base</div>
          <div class="font-normal opacity-75">#38C172</div>
        </div>
        <div class="text-white bg-green-dark px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Dark</div>
          <div class="font-normal opacity-75">#1F9D55</div>
        </div>
        <div class="text-white bg-green-darker px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darker</div>
          <div class="font-normal opacity-75">#1A4731</div>
        </div>
        <div class="text-white bg-green-darkest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darkest</div>
          <div class="font-normal opacity-75">#0F2F21</div>
        </div>
      </div>
    </div>
    <div
      class="relative my-8 overflow-hidden rounded shadow-md1">
      <div
        class="relative shadow bg-blue text-white px-3 py-4 md:py-1 text-sm font-semibold flex justify-between"
        @click="toggleBlue">
        <div class="uppercase">Blue</div>
        <div class="flex justify-between">
          <span class="mr-2">Base</span>
          <span class="font-normal opacity-75">#3490DC</span>
        </div>
      </div>
      <div
        v-show="showBlue"
        class="md:flex md:flex-row-reverse">
        <div class="text-blue-darkest bg-blue-lightest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lightest</div>
          <div class="font-normal opacity-75">#EFF8FF</div>
        </div>
        <div class="text-blue-darkest bg-blue-lighter px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lighter</div>
          <div class="font-normal opacity-75">#BCDEFA</div>
        </div>
        <div class="text-blue-darkest bg-blue-light px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Light</div>
          <div class="font-normal opacity-75">#6CB2EB</div>
        </div>
        <div class="text-white bg-blue px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Base</div>
          <div class="font-normal opacity-75">#3490DC</div>
        </div>
        <div class="text-white bg-blue-dark px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Dark</div>
          <div class="font-normal opacity-75">#2779BD</div>
        </div>
        <div class="text-white bg-blue-darker px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darker</div>
          <div class="font-normal opacity-75">#1C3D5A</div>
        </div>
        <div class="text-white bg-blue-darkest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darkest</div>
          <div class="font-normal opacity-75">#12283A</div>
        </div>
      </div>
    </div>
    <div
      class="relative my-8 overflow-hidden rounded shadow-md1">
      <div
        class="relative shadow bg-purple text-white px-3 py-4 md:py-1 text-sm font-semibold flex justify-between"
        @click="togglePurple">
        <div class="uppercase">Purple</div>
        <div class="flex justify-between">
          <span class="mr-2">Base</span>
          <span class="font-normal opacity-75">#9561E2</span>
        </div>
      </div>
      <div
        v-show="showPurple"
        class="md:flex md:flex-row-reverse">
        <div class="text-purple-darkest bg-purple-lightest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lightest</div>
          <div class="font-normal opacity-75">#F3EBFF</div>
        </div>
        <div class="text-purple-darkest bg-purple-lighter px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lighter</div>
          <div class="font-normal opacity-75">#D6BBFC</div>
        </div>
        <div class="text-white bg-purple-light px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Light</div>
          <div class="font-normal opacity-75">#A779E9</div>
        </div>
        <div class="text-white bg-purple px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Base</div>
          <div class="font-normal opacity-75">#9561E2</div>
        </div>
        <div class="text-white bg-purple-dark px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Dark</div>
          <div class="font-normal opacity-75">#794ACF</div>
        </div>
        <div class="text-white bg-purple-darker px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darker</div>
          <div class="font-normal opacity-75">#382B5F</div>
        </div>
        <div class="text-white bg-purple-darkest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darkest</div>
          <div class="font-normal opacity-75">#21183C</div>
        </div>
      </div>
    </div>
    <div
      class="relative my-8 overflow-hidden rounded shadow-md1">
      <div
        class="relative shadow bg-grey text-black px-3 py-4 md:py-1 text-sm font-semibold flex justify-between"
        @click="toggleGrey">
        <div class="uppercase">Grey</div>
        <div class="flex justify-between">
          <span class="mr-2">Base</span>
          <span class="font-normal opacity-75">#B8C2CC</span>
        </div>
      </div>
      <div
        v-show="showGrey"
        class="md:flex md:flex-row-reverse">
        <div class="text-black bg-white px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">White</div>
          <div class="font-normal opacity-75">#FFFFFF</div>
        </div>
        <div class="text-black bg-grey-lightest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lightest</div>
          <div class="font-normal opacity-75">#F8FAFC</div>
        </div>
        <div class="text-black bg-grey-lighter px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Lighter</div>
          <div class="font-normal opacity-75">#F1F5F8</div>
        </div>
        <div class="text-black bg-grey-light px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Light</div>
          <div class="font-normal opacity-75">#DAE1E7</div>
        </div>
        <div class="text-black bg-grey px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Base</div>
          <div class="font-normal opacity-75">#B8C2CC</div>
        </div>
        <div class="text-white bg-grey-dark px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Dark</div>
          <div class="font-normal opacity-75">#8795A1</div>
        </div>
        <div class="text-white bg-grey-darker px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darker</div>
          <div class="font-normal opacity-75">#606F7B</div>
        </div>
        <div class="text-white bg-grey-darkest px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Darkest</div>
          <div class="font-normal opacity-75">#3D4852</div>
        </div>
        <div class="text-white bg-black px-3 py-4 text-sm flex-1 font-semibold leading-tight">
          <div class="mb-2">Black</div>
          <div class="font-normal opacity-75">#22292F</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showPrimary: false,
      showGrey: false,
      showRed: false,
      showOrange: false,
      showYellow: false,
      showGreen: false,
      showBlue: false,
      showPurple: false
    }
  },
  methods: {
    togglePrimary() {
      this.showPrimary = !this.showPrimary
    },
    toggleGrey() {
      this.showGrey = !this.showGrey
    },
    toggleRed() {
      this.showRed = !this.showRed
    },
    toggleOrange() {
      this.showOrange = !this.showOrange
    },
    toggleYellow() {
      this.showYellow = !this.showYellow
    },
    toggleGreen() {
      this.showGreen = !this.showGreen
    },
    toggleBlue() {
      this.showBlue = !this.showBlue
    },
    togglePurple() {
      this.showPurple = !this.showPurple
    },
  },
}
</script>

<style>
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
}
</style>
