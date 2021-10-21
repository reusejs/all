### Reusejs

Right now we are in a phase as a project which moves quickly - So, we take lot of shortcuts, not write tests. We might not break all logic into renderless components. So, that it being a learning resource, treat it as bank of components of React and React Native to build project quickly.

As we these components in production apps, it's important to remember that we would strive for stability.

Components are styled using Tailwind, so tailwind by default is a dependency. 

Many of the "molecular" level components are in conjunction with Nobe. You might not be able to use these components directly, but you can just copy/extend these and use them. 


### How to Contribute?

This section assumes that the library is already created, and you are looking to contribute.

1. All the libraries sit inside libs folders


Creating publishable libraries

`nx g @nrwl/workspace:lib vanilla-dates --publishable --js --importPath="reusejs/vanilla-dates" --tags="scope:public,type:util,target:all"`

`nx g @nrwl/node:library vanilla-dates --publishable --js --importPath="@reusejs/vanilla-dates" --tags="scope:public,type:util,target:all"`

`nx g @nrwl/react:library react-form-hook --publishable --js --importPath="@reusejs/react-form-hook" --tags="scope:public,type:util,target:all"`

Remove

`nx generate remove vanilla-dates`

Publish

`nx run vanilla-dates:build && cp `

First Time: `npm publish dist/libs/react-form-hook --access public`

Next Time: `npm publish npm publish dist/libs/vanilla-dates`

`./publish.sh vanilla-dates`
