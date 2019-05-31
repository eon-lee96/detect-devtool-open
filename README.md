# detect-devtool-open

Find out whether Chrome console is open

This project is just for study.

Here is a better options for work
* [devtools-detector](https://github.com/AEPKILL/devtools-detector)

## demo

## install

``` sh
npm install @eonlee/detect-devtool-open -S
```

## usage

``` javascript
import detector from '@eonlee/detect-devtool-open'

detector.setup(cb) // cb will be fire when devtool is open

const isOpen = detector.getIsOpen() // get devtool isOpen
```

## reference

* [判断控制台是否开启(chrome)](https://medium.com/@eon_lee/%E5%88%A4%E6%96%AD%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%98%AF%E5%90%A6%E5%BC%80%E5%90%AF-chrome-3d2279e0a405)
