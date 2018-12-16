<template>
  <main-content>
    <div class="bg-white p-8 rounded">
      <h1>Colours</h1>
      <div
        v-for="(colour, key) in colours"
        :key="key"
        class="relative my-8 overflow-hidden rounded shadow-md1">

        <div
          :class="[
            'relative',
            `shadow bg-${colour.base}`,
            'text-white',
            'px-3',
            'py-4',
            'md:py-1',
            'text-sm',
            'font-semibold',
            'flex',
            'justify-between'
        ]">
          <div class="uppercase">{{ colour.base.toUpperCase() }}</div>
          <div class="flex justify-between">
            <span class="mr-2">Base</span>
            <span class="font-normal opacity-75">{{ colour.base }}</span>
          </div>
        </div>
        <div class="md:flex md:flex-row">
          <div
            v-for="(variant, key) in colour.variant"
            :key="key"
            :class="[
              `text-${lightColours.includes(key) ? 'white' : colour.base + '-' + colour.reversedVariant[key]}`,
              `bg-${variant == 'white' || variant == 'black' ? variant : colour.base}${variant == 'base' || variant == 'white' || variant == 'black' ? '' : '-' + variant}`,
              'px-3',
              'py-4',
              'text-sm',
              'flex-1',
              'font-semibold',
              'leading-tight'
          ]">
            <div class="mb-2">{{ variant }}</div>
            <div class="font-normal opacity-75">#FCEBEA</div>
          </div>
        </div>
      </div>
    </div>
  </main-content>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'

const variants = {
  standard: [
    'darkest',
    'darker',
    'dark',
    'base',
    'light',
    'lighter',
    'lightest'
  ],
  blackToWhite: [
    'black',
    'darkest',
    'darker',
    'dark',
    'base',
    'light',
    'lighter',
    'lightest',
    'white'
  ]
}

const variantsReversed = {
  standard: variants.standard.slice().reverse(),
  blackToWhite: variants.blackToWhite.slice().reverse()
}

export default {
  data() {
    return {
      lightColours: _.range(5),
      colours: [
        {
          base: 'primary',
          variant: variants.standard,
          reversedVariant: variantsReversed.standard
        },
        {
          base: 'red',
          variant: variants.standard,
          reversedVariant: variantsReversed.standard
        },
        {
          base: 'yellow',
          variant: variants.standard,
          reversedVariant: variantsReversed.standard
        },
        {
          base: 'green',
          variant: variants.standard,
          reversedVariant: variantsReversed.standard
        },
        {
          base: 'blue',
          variant: variants.standard,
          reversedVariant: variantsReversed.standard
        },
        {
          base: 'purple',
          variant: variants.standard,
          reversedVariant: variantsReversed.standard
        },
        {
          base: 'grey',
          variant: variants.blackToWhite,
          reversedVariant: variantsReversed.blackToWhite
        },
      ]
    }
  },
  computed: {
    ...mapState([
      'tailwind'
    ])
  },
  created () {
    this.$store.commit('setTailwindConfig', require('~/tailwind.js'))
  },
  middleware: [
    'authenticated'
  ],
}
</script>

