# test

## Notes
This is a PoC of an issue with Vue Test Utils:
- naming a component prop 'child' causes an error when it attempt to mount:

```
TypeError: Cannot read property 'elm' of undefined
```

This project was generated from Vue CLI
- basic default option for Vue
- Vue Test Utils added via `vue add unit-jest`
- `HelloWorld` component prop '`msg`' changed to '`child`', test case altered to match


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
