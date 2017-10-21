# TestSfc

This repo is an example to show of the attempt to introduce single file component where template and styles can be of any type.
You can see the source file of that POC here: https://github.com/ghetolay/angular-cli/tree/sfc.

The project can be run with cli or webpack. To play with custom type you need to use the webpack build and add custom loaders respectively.

## cli
To run cli you just need to use the usual command.

JIT :
```
ng serve
```
AOT :
```
ng serve --aot
```

## webpack
You can use the `start` script to run it with webpack.

JIT :
```
npm start
```
AOT :
```
npm start --env.aot
```

This project is meant for people to play with but you can also produce builds of course using `ng build` and `webpack`.
