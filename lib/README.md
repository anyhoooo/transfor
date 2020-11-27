# transfor [![NPM Version][npm-image]][npm-url] [![NPM Downloads][downloads-image]][npm-url] [![size-image]][size-url]

[size-image]: https://badgen.net/bundlephobia/min/transfor
[size-url]: https://bundlephobia.com/result?p=transfor
[npm-image]: https://badgen.net/npm/v/transfor
[npm-url]: https://npmjs.org/package/transfor
[downloads-image]: https://badgen.net/npm/dt/transfor

## Install

```js
npm install transfor

or

yarn add transfor
```

## Usage

```js
import { checkPhone, checkBankCard } from "transfor";

console.log(checkPhone); // Function
console.log(checkBankCard); // Function
```

Can also import like

```js
import transfor from "transfor";

console.log(transfor.checkPhone); // Function
console.log(transfor.checkBankCard); // Function
```

or like this

```js
import checkPhone from "transfor/checkPhone";
import checkBankCard from "transfor/checkBankCard";

console.log(checkPhone); // Function
console.log(checkBankCard); // Function
```
