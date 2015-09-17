# angular-webpack-101

Learning Webpack with an Angular project with [egghead.io](https://egghead.io/series/angular-and-webpack-for-modular-applications).

## random notes taken

- this is my 1st trial on
  - `webpack` (of course)
  - writing an angular app in module style (even though it has only 1 directive)
  - live a day with WebStorm
- webpack keeps config in `webpack.config.js` which is a CommonJS module. `entry` and `output.filename` are minimum requirement of the module's props.
- webpack takes things as "modules": everything is a module in webpack world. webpack's job is basically "bundle" or connect all modules together with correct dependency list.
- `loaders` are webpack's real magic. they are like `tasks` in gulp or grunt.
- in a nutshell: modules → loaders & plugins → `bundle.js` (or whatever the name is)
- structuring an angular app in modules is kinda fun. it was confusing at the beginning to pass app's module around.
but then it becomes more clear and will be more if i work on many modules.
- what i like about webpack is that it can replace gulp easily (at least my `gulpfile.js` 's tasks). it doesn't require too many config to get things done.
- also (i think) webpack kinda forces me to write my app in modules. i like that a module is self-contained. everything is included: even styles and tests.

## aside: webstorm

- i heard many good things about webstorm for quite a while. i actually tried for full day for a couple times. it didn't work out for me: things are too slow.
- then today (2015.09.17) i give it another try by doing a fresh install of webstorm 11 EAP. this is what i customize webstorm so far.
  - disable *most* of the plugins. (i was a bit surprised by number of plugins that were enabled by default. i don't use most of them.)
  - map `⌘ + p` to `⌘ + o` (sublime text's "go to anything")
  - map `⌘ + r` to `go to symbol` (sublime-ish again)
  - i feel IDEAVim (vim emulation for webstorm) really slow the ide down. don't know why but i had to disable this too. meaning i have no vim mode :(
  - another bug i had with IDEAVim: it adds an extra closing curly brackets. `function() {}` will be `function(){}}` which is super annoying.
