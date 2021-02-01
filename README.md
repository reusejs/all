Creating publishable libraries

`nx g @nrwl/workspace:lib vanilla-dates --publishable --js --importPath="reusejs/vanilla-dates" --tags="scope:public,type:util,target:all"`
`nx g @nrwl/node:library vanilla-dates --publishable --js --importPath="@reusejs/vanilla-dates" --tags="scope:public,type:util,target:all"`
`nx g @nrwl/react:library react-form-hook --publishable --js --importPath="@reusejs/react-form-hook" --tags="scope:public,type:util,target:all"`

Remove

`nx generate remove vanilla-dates`

Publish

`nx run vanilla-dates:build`

First Time: `npm publish dist/libs/react-form-hook --access public`

Next Time: `npm publish npm publish dist/libs/vanilla-dates`
