<template>
  <div>
    <h1>Test UI</h1>
  <b-button  type="button" @click="click" :style="style">{{ label }}</b-button>
  </div>
</template>
<script>
export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    // size: {
    //   type: String,
    //   default: 'medium',
    //   validator: function (value) {
    //     return ['small', 'medium', 'large'].indexOf(value) !== -1;
    //   },
    // },
    backgroundColor: {
      type: String,
    },
    color: {
      type: String,
    },
  },

  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color:this.color,
      };
    },
  },

  methods: {
    click() {
      this.$emit('AAA', 'test');
    },
  },
};
</script>
