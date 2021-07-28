module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.jsx',
        templateFile: 'templates/index.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.jsx',
        templateFile: 'templates/stories.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.jsx',
        templateFile: 'templates/test.jsx.hbs'
      }
    ]
  })
}
