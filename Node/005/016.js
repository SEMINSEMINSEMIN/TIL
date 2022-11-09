// import a from './015.js'

// a()
// 실행시 d가 나옴

// import {a, b, c} from './015.js'
// a()
// b()
// c()
// import d from './015.js'
// d()

// import d, {a, b, c} from './015.js'
// a()
// b()
// c()
// d()

import * as all from './015.js'
console.log(all);
all.default();
all.a();