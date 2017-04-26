node ./node_modules/eslint/bin/eslint 'src/**/*.js'
node ./node_modules/eslint/bin/eslint 'test/**/*.js'
istanbul cover --include-all-sources --root ./src ./node_modules/mocha/bin/_mocha './test/**/*.spec.js'