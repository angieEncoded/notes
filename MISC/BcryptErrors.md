# npm install throws this error

```Cannot find module '...../bcrypt/lib/binding/napi-v3/bcrypt_lib.node'```

- delete node_modules / rename node_modules to something else
- then run these:

```npm cache clean --force```
```npm i```