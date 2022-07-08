// Button.stories.ts
// @ts-ignore
import Button from '~/components/Button.vue';
// @ts-ignore
import CustomMDXDocumentation from '~/stories/Custom-MDX-Documentation.mdx';
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  argTypes: {
    label:{
      control: {
      type:'text'}
    },
    backgroundColor:{
      control: {
      type: 'text'}
    },
    color:{
      control: {
      type: 'text'}
    },click: { action: 'eiei' }
    },
    parameters: {
      docs: {
        page: CustomMDXDocumentation,
      },
    },
} 

const Template = (args : any, { argTypes } : any) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button @AAA="click" v-bind="$props"  />'
})

export const button1:any = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
button1.args = {
  label: 'Test',
  backgroundColor:'black',
  color:'white'
};

export const Primary:any = Template.bind({});
Primary.args = {
  label: 'Test',
  backgroundColor: 'primary',
  color:'white'
};

export const Blue:any = Template.bind({});
Blue.args = {
  label: 'Test',
  backgroundColor:'Blue',
  color:'white'
};
