# wirf

** ⚠️ This lib depends on es6 proxy support ⚠️ **

Please check your browser/node matrix before using it.

Create an object that throws whenever it is accessed in any way.

```js
import wirf from 'wirf';
const willThrow = wirf('please do not use');

willThrow.foo; // throws please do not use
willThrow.foo = 1; // throws please do not use

willThrow(); // throws please do not use
willThrow[0]; // throws please do not use
```

# why?

Can be used instead of https://github.com/robin-drexler/react-ensure-provider to create a default value for react contexts that provides a meaningful error when `Context.Consumer` is rendered outside `Context.Provider`.
