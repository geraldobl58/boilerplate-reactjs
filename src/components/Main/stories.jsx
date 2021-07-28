import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Boilerplate Reactjs',
    description: 'ReactJS, Javascript, Jest, Styled Components e StoryBook'
  }
}

export const Basic = (args) => <Main {...args} />

export const Default = (args) => <Main {...args} />

Default.args = {
  title: 'Storybook',
  description: 'React é show de bola!'
}
