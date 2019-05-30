let _fn = null;

const flag = {}

let privateFlag = false

function detectFn() { }

Object.defineProperty(flag, 'opened', {
  get() {
    return privateFlag
  },
  set(v) {
    privateFlag = v
    if (v) {
      setTimeout(() => {
        _fn && _fn()
      })
    }
  }
})

detectFn.toString = function () {
  flag['opened'] = true;
}

console.log('%c', detectFn)

export default {
  setup(callbackFn: () => any) {
    _fn = callbackFn
  },

  getIsOpen(): boolean {
    flag['opened'] = false;
    console.log('%c', detectFn)
    return flag['opened']
  }
}
