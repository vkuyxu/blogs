(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{458:function(t,e,a){"use strict";a.r(e);var v=a(2),s=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-vue-的基本原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-的基本原理"}},[t._v("#")]),t._v(" 1.vue 的基本原理")]),t._v(" "),e("p",[t._v("当一个 Vue 实例创建时，Vue 会遍历 data 中的属性，用 Object.defineProperty（Vue3 中使用 proxy）将它们转为 getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。")]),t._v(" "),e("h2",{attrs:{id:"_2-双向数据绑定的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-双向数据绑定的原理"}},[t._v("#")]),t._v(" 2.双向数据绑定的原理")]),t._v(" "),e("p",[t._v("Vue 采用的是数据劫持结合发布者-订阅者模式的方式来实现的。当我们对数据进行操作时，会触发数据的 setter，setter 会通知所有订阅了该数据的订阅者，订阅者就会根据最新的数据去更新视图，这就实现了数据到视图的绑定；而当我们操作视图改变数据时，Vue 会监听到视图的变化，然后去更新数据，这就实现了视图到数据的绑定。")]),t._v(" "),e("h2",{attrs:{id:"_3-使用-object-defineproperty-来进行数据劫持有什么缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用-object-defineproperty-来进行数据劫持有什么缺点"}},[t._v("#")]),t._v(" 3.使用 Object.defineProperty（） 来进行数据劫持有什么缺点？")]),t._v(" "),e("p",[t._v("使用 Object.defineProperty 劫持时，是对对象的属性进行的劫持，当对象的一个属性的值也是一个对象时，需要进行深度遍历，造成了性能的浪费。无法监听数组的变化。")]),t._v(" "),e("h2",{attrs:{id:"_4-mvvm、mvc-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-mvvm、mvc-的区别"}},[t._v("#")]),t._v(" 4.MVVM、MVC 的区别")]),t._v(" "),e("p",[e("strong",[t._v("MVC: Model-View-Controller")])]),t._v(" "),e("p",[t._v("MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。其中 View 负责页面的显示逻辑，Model 负责存储页面的业务数据，以及对相应数据的操作，并且 View 和 Model 应用了观察者模式，当 Model 层发生改变的时候它会通知有关 View 层更新页面，Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，听你刚刚调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。")]),t._v(" "),e("p",[e("strong",[t._v("MVVM：Model-View-ViewModel")])]),t._v(" "),e("p",[t._v("MVVM 中的 Model 代表数据模型，数据和业务逻辑都在 Model 层中定义；View 代表 UI 视图，负责数据的展示；VIewModel 负责监听 Model 中数据的改变并且控制视图的更新，处理用户交互操作。Model 和 View 并无直接关联，而是通过 VIewModel 来进行联系的，Model 和和 VIewModel 之间有着双向数据绑定的联系，因此当 Model 中的数据改变时会触发 View 层的刷新，View 最终由于用户交互操作而改变的数据也会在 Model 中同步。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("优点:\n分离视图和模型，降低代码耦合，提高视图或者逻辑的重用性；提高可测试性；自动更新 dom")])]),t._v(" "),e("li",[e("p",[t._v("缺点:\nbug 很难被调试，一个大的模块中的 model 也会很大，虽然方便了也很容易保证数据的一致性，但当时长期持有，不释放内存就造成了话费更多的内存；对于大型的图形应用程序，视图状态较多，VIewModel 的构建和维护的成本都会比较高")])])]),t._v(" "),e("h2",{attrs:{id:"_5-computed-和-watch-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-computed-和-watch-的区别"}},[t._v("#")]),t._v(" 5.computed 和 watch 的区别")]),t._v(" "),e("p",[e("strong",[t._v("对于 computed")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("他支持缓存，只有依赖的数据发生了变化，才会重新计算")])]),t._v(" "),e("li",[e("p",[t._v("不支持异步，当 computed 中有异步操作时，无法监听数据的变化")])]),t._v(" "),e("li",[e("p",[t._v("computed 的值默认会走缓存，计算属性是基于他们的响应式依赖进行缓存的，也就是基于 data 声明过 或者父组件传递过来的 props 中的数据进行计算的")])]),t._v(" "),e("li",[e("p",[t._v("如果一个属性是由其他属性计算而来的，这个属性依赖其他的属性，一般会使用 computed")])]),t._v(" "),e("li",[e("p",[t._v("如果 computed 属性的属性值是函数，那么默认使用 get 方法，函数返回值就是属性的属性值，在 computed 中，属性有一个 get 方法 和一个 set 方法，当数据发生变化时会调用 set 方法")])])]),t._v(" "),e("p",[e("strong",[t._v("对于 watch")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("它不支持缓存，数据变化时，它就会触发相应的操作")])]),t._v(" "),e("li",[e("p",[t._v("支持异步监听")])]),t._v(" "),e("li",[e("p",[t._v("监听的函数接收两个参数，第一个 参数是最新的值，第二个事变化之前的值")])]),t._v(" "),e("li",[e("p",[t._v("监听数据必须时 data 中声明的或者父组件传递过来的 props 中的数据，当发生变化时，会触发其他操作，函数有两个参数：immediate：组件加载立即触发回调函数。deep 深度监听，用于监听对象或数组内部的变化")])])]),t._v(" "),e("p",[e("strong",[t._v("总结：")])]),t._v(" "),e("p",[e("strong",[t._v("computed 计算属性")]),t._v("：依赖其他属性值，并且 computed 的值有缓存，只有他依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值")]),t._v(" "),e("p",[e("strong",[t._v("watch 侦听器")]),t._v("：更多的是观察的作用，无缓存，类似与某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作")]),t._v(" "),e("h2",{attrs:{id:"_6-computed-和-methods-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-computed-和-methods-的区别"}},[t._v("#")]),t._v(" 6.computed 和 methods 的区别")]),t._v(" "),e("p",[t._v("可以将同一个函数定义为一个 method 或者一个计算属性，对于最终的结果，两种方式是相同的")]),t._v(" "),e("p",[t._v("不同点：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("computed：计算属性是基于它的依赖进行缓存的，只有在它的依赖发生改变时才会重新求值")])]),t._v(" "),e("li",[e("p",[t._v("method 调用总会执行该函数")])])]),t._v(" "),e("h2",{attrs:{id:"_7-slot-是什么-有什么作用-原理是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-slot-是什么-有什么作用-原理是什么"}},[t._v("#")]),t._v(" 7.slot 是什么？有什么作用？原理是什么？")]),t._v(" "),e("p",[t._v("slot 又名插槽，是 Vue 的内容分发机制，组件内部的模版引擎使用 slot 元素作为承载分发内容的出口，插槽 slot 是子组件的一个模版标签元素，而这一个标签元素是否显示，以及怎么显示是由父组件决定的。插槽的分类：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("默认插槽：又名匿名插槽，当 slot 没有指定 name 属性值的时候一个默认显示插槽，一个组件内只能有一个匿名插槽")])]),t._v(" "),e("li",[e("p",[t._v("具名插槽：带有具体名字的插槽，也就是带有 name 属性的 slot，一个组件可以出现多个具名插槽")])]),t._v(" "),e("li",[e("p",[t._v("作用域插槽：是一种特殊类型的插槽，允许子组件将数据“传递”回父组件的插槽内容中。通过使用作用域插槽，可以创建更加灵活和可重用的组件。")])])]),t._v(" "),e("h2",{attrs:{id:"_8-过滤器是什么-怎样实现一个过滤器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-过滤器是什么-怎样实现一个过滤器"}},[t._v("#")]),t._v(" 8.过滤器是什么？怎样实现一个过滤器？")]),t._v(" "),e("p",[t._v("过滤器是一个特殊的函数，用于在特定的数据格式化或处理过程中对数据进行转换。过滤器可以在{{}}差值表达式或 v-bind 中使用，使用 "),e("code",[t._v("|")]),t._v("标识，filters 不会修改数据，而是过滤数据，改变用户看到的输出。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("商品价格："),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" filterPrice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filters")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("filterPrice")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("price")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" price "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'￥'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" price"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拼接一个￥ 或 展示 --")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("h2",{attrs:{id:"_9-如何保存页面的当前的状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-如何保存页面的当前的状态"}},[t._v("#")]),t._v(" 9.如何保存页面的当前的状态")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用 localStorage、sessionStrorage 来保存页面的状态。通过将状态数据以键值对的形式存储在本地，可以在用户重新加载页面时恢复")])]),t._v(" "),e("li",[e("p",[t._v("利用 Vuex 的持久化功能来保存页面的状态。通过将状态存储在 Vuex 的存储中，并在需要时进行持久化，可以在用户重新加载页面时恢复")])])]),t._v(" "),e("h2",{attrs:{id:"_10-常见的事件修饰符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-常见的事件修饰符"}},[t._v("#")]),t._v(" 10.常见的事件修饰符")]),t._v(" "),e("ul",[e("li",[e("p",[t._v(".stop :等同于 JavaScript 中的 event.stopPropagetion() ,防止事件冒泡")])]),t._v(" "),e("li",[e("p",[t._v(".prevent :等同于 JavaScript 中的 event.preventDefault() ,防止执行预设的行为（默认行为）")])]),t._v(" "),e("li",[e("p",[t._v(".capture :与事件冒泡的方向相反，事件捕获由外到内")])]),t._v(" "),e("li",[e("p",[t._v(".self :只会触发自己范围内的事件，不包含子元素")])]),t._v(" "),e("li",[e("p",[t._v(".once :只会触发一次")])])]),t._v(" "),e("h2",{attrs:{id:"_11-v-if、v-show、v-html-的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-v-if、v-show、v-html-的原理"}},[t._v("#")]),t._v(" 11.v-if、v-show、v-html 的原理")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("v-if 会调用 addifCondition 方法，当条件为假时就会在生成 vnode 的时候会忽略对应节点，render 的时候就不会渲染")])]),t._v(" "),e("li",[e("p",[t._v("v-show 会生成 vnode，在 render 时也会渲染成真实节点，只是在 render 过程中会在节点的属性中修改 show 的值，也就是常说的 display")])]),t._v(" "),e("li",[e("p",[t._v("v-html 会先移除节点下的所有节点，调用 html 方法，通过 addProp 添加 innerHTML 属性，归根结底还是设置 innerHTML 为 v-html 的值")])])]),t._v(" "),e("h2",{attrs:{id:"_12-v-if-和-v-show-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-v-if-和-v-show-的区别"}},[t._v("#")]),t._v(" 12.v-if 和 v-show 的区别？")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("手段：v-if 是动态的向 DOM 树内添加或者删除 DOM 元素；v-show 是通过设置 DOM 元素的 display 样式属性控制显隐")])]),t._v(" "),e("li",[e("p",[t._v("编译过程：v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show 只是简单的基于 css 切换")])]),t._v(" "),e("li",[e("p",[t._v("编译条件：v-if 是惰性的，如果初始条件为假，则什么也不做，只有在条件第一次变为真时才开始局部编译；v-show 是在任何条件下，无论首次条件是否为真，都被编译，然后被缓存，而且 DOM 元素保留")])]),t._v(" "),e("li",[e("p",[t._v("性能消耗：v-if 有更高的切换消耗；v-show 有更高的初始渲染消耗")])]),t._v(" "),e("li",[e("p",[t._v("使用场景：v-if 适合运营条件不大可能改变；；v-show 适合频繁切换")])])]),t._v(" "),e("h2",{attrs:{id:"_13-v-model-是怎么实现的-语法糖实际是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-v-model-是怎么实现的-语法糖实际是什么"}},[t._v("#")]),t._v(" 13.v-model 是怎么实现的，语法糖实际是什么？")]),t._v(" "),e("p",[t._v("作用在表单上")]),t._v(" "),e("p",[t._v("动态绑定了 input 的 value 指向了 message 变量，并且在触发 input 事件的时候去动态的吧 message 社遏制为目标值")]),t._v(" "),e("p",[t._v("作用在组件上")]),t._v(" "),e("p",[t._v("在自定义组件中，，v-model 默认会利用名为 value 的 props 的 prop 和名为 input 的事件")]),t._v(" "),e("p",[t._v("本质上是一个父子组件通信的语法糖，通过 prop 和$emit 实现")]),t._v(" "),e("h2",{attrs:{id:"_14-data-为什么是一个函数而不是对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-data-为什么是一个函数而不是对象"}},[t._v("#")]),t._v(" 14.data 为什么是一个函数而不是对象？")]),t._v(" "),e("p",[t._v("vue 组件可能存在多个实例，如果使用对象形式定义 data，则会导致他们公用一个 data 对象，那么状态变更将会影响所有组件实例，这是不合理的，采用函数定义，在 initData 时会将其作为工厂函数返回全新的 data 对象，有效规避了多实例之间状态污染问题，而 vue 根实例创建过程中则不存在该限制，也是因为根实例只能有一个")]),t._v(" "),e("h2",{attrs:{id:"_15-对-keep-alive-的理解-它是如何实现的-具体缓存的是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15-对-keep-alive-的理解-它是如何实现的-具体缓存的是什么"}},[t._v("#")]),t._v(" 15.对 keep-alive 的理解？它是如何实现的，具体缓存的是什么？")]),t._v(" "),e("p",[e("code",[t._v("keep-alive")]),t._v("  是一个内置的抽象组件，用于缓存不活跃的组件实例。如果需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 keep-alive 组件包裹需要保存的组件")]),t._v(" "),e("p",[t._v("keep-alive 有三个属性：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("include：字符串或者正则表达式，只有名称匹配的组件会被缓存")])]),t._v(" "),e("li",[e("p",[t._v("exclude：字符串或者正则表达式，任何名称匹配的组件都不会被缓存")])]),t._v(" "),e("li",[e("p",[t._v("max：数字，最多可以缓存多少组件实例")])])]),t._v(" "),e("p",[t._v("主要流程：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("判断组件 name，不在 include 或者在 exclude 中，直接返回 vnode，说明该组件不被缓存")])]),t._v(" "),e("li",[e("p",[t._v("获取组件实例 key，如果有获取实例的 key，否则重新生成")])]),t._v(" "),e("li",[e("p",[t._v("如果缓存对象内存在，则直接从缓存对象中获取组件实例给 vnode，不存在则添加到缓存对象中")])]),t._v(" "),e("li",[e("p",[t._v("最大缓存数量，当缓存组件数量超过 max 值时，清除 keys 数组内的第一个组件")])])]),t._v(" "),e("p",[t._v("两个生命周期：")]),t._v(" "),e("p",[t._v("当组件被换掉时，会被缓存到内存中、触发 deactivated 生命周期")]),t._v(" "),e("p",[t._v("当组件被切回来时，再去缓存里找这个组件、触发 activated 生命周期")]),t._v(" "),e("h2",{attrs:{id:"_16-nexttick-原理及作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-nexttick-原理及作用"}},[t._v("#")]),t._v(" 16.$nextTick 原理及作用")]),t._v(" "),e("p",[t._v("vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种引用，就是将传入的回调函数包装成宏微任务加入到 vue 异步队列")]),t._v(" "),e("p",[t._v("用于在下一个 DOM 更新循环结束之后执行延时回调，他主要用于在数据更新后立即获取更新后的 DOM")]),t._v(" "),e("h2",{attrs:{id:"_17-vue2-中给-data-中的对象属性添加一个新的属性时会发生什么-如何解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17-vue2-中给-data-中的对象属性添加一个新的属性时会发生什么-如何解决"}},[t._v("#")]),t._v(" 17.Vue2 中给 data 中的对象属性添加一个新的属性时会发生什么？如何解决？")]),t._v(" "),e("p",[t._v("在 vue2 中直接给 data 中的对象属性添加一个新的属性时，可以成功添加，但是不会触发页面的重新渲染，这是因为在 Vue 实例创建时，新加的属性没有声明，所以没有被 Vue 转换为响应式的属性。可以使用$set() 来手动的将新增的属性处理为响应式属性。")]),t._v(" "),e("h2",{attrs:{id:"_18-vue-中模版编译过程-也就是-template-到-render-的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18-vue-中模版编译过程-也就是-template-到-render-的过程"}},[t._v("#")]),t._v(" 18.Vue 中模版编译过程？也就是 template 到 render 的过程！")]),t._v(" "),e("p",[t._v("vue 的模版编译过程主要是 "),e("strong",[t._v("template")]),t._v(" --\x3e "),e("strong",[t._v("ast")]),t._v(" --\x3e "),e("strong",[t._v("render")]),t._v(" 函数")]),t._v(" "),e("p",[t._v("vue 中有个独特的编译器模块，称为 compiler,他的主要作用就是将用户编写的 template 编译为 js 中可执行的 render 函数")]),t._v(" "),e("p",[t._v("模版编译又分为三个阶段，解析 parse，优化 optimize，生成 generate，最终生成可执行函数 render")]),t._v(" "),e("p",[t._v("解析阶段：使用大量的正则表达式对 template 字符串进行解析，将标签、指令、属性等转化为抽象语法树 AST")]),t._v(" "),e("p",[t._v("优化阶段：遍历 AST，找到其中的一些静态节点并进行标记，方便在页面重渲染的时候进行 diff 比较时，直接跳过这一些静态节点，优化 runtime 的性能")]),t._v(" "),e("p",[t._v("生成阶段：将最终的 AST 转化为 render 函数字符串")]),t._v(" "),e("h2",{attrs:{id:"_19-vue-中的视图是在值改变后立即同步执行重新渲染吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_19-vue-中的视图是在值改变后立即同步执行重新渲染吗"}},[t._v("#")]),t._v(" 19.Vue 中的视图是在值改变后立即同步执行重新渲染吗？")]),t._v(" "),e("p",[t._v("不会立即同步执行重新渲染，Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新，Vue 会将所有的数据变化放入一个队列中，并在当前的事件循环结束之后，在下一个事件循环中统一进行 DOM 的更新。这种策略可以避免不必要的重新渲染和性能消耗。")]),t._v(" "),e("h2",{attrs:{id:"_20-mixin-和-extends"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-mixin-和-extends"}},[t._v("#")]),t._v(" 20.mixin 和 extends")]),t._v(" "),e("p",[e("strong",[t._v("mixins")]),t._v(" 接收一个混入对象的数组，其中混入对象可以像正常的实例对象一样包含实例选项，这些选项会被合并到最终的选项中。Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。但在使用中，由于混入的数据和方法不能明确判断来源且可能与组件内变量发生命名冲突，vue3 中不再建议使用，而是引入了 composition api，利用独立出来的响应式模块可以很方便的编写独立逻辑并提供响应式的数据，然后在 setup 选项中组合使用，增强代码的可读性和维护性")]),t._v(" "),e("p",[e("strong",[t._v("extends")]),t._v("不太常用：使一个组件可以继承另一个组件的组件选项，与 mixins 不同的是 extends 只能扩展单个选项，与同一组件的 mixins 发生命名冲突时它的优先级更高；")]),t._v(" "),e("h2",{attrs:{id:"_21-自定义指令的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21-自定义指令的理解"}},[t._v("#")]),t._v(" 21.自定义指令的理解")]),t._v(" "),e("p",[t._v("自定义一般建议用于对 DOM 的操作或者样式的修改，比如说按钮权限的显隐、防抖节流等等。")]),t._v(" "),e("p",[t._v("全局定义："),e("code",[t._v('Vue.directive("focus",{})')])]),t._v(" "),e("p",[t._v("局部定义："),e("code",[t._v("directives:{focus:{}}")])]),t._v(" "),e("p",[t._v("指令的对象提供钩子函数")]),t._v(" "),e("p",[t._v("bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置")]),t._v(" "),e("p",[t._v("inserted：被绑定元素插入父节点时调用")]),t._v(" "),e("p",[t._v("update：所有组件的 VNode 更新时调用但是可能发生在其子 VNode 更新之前调用。指令的值可能发生了改变，也可能没有。但是可以通过比较更新前后的值来忽略不必要的模板更新。")]),t._v(" "),e("p",[t._v("ComponentUpdate：指令所在组件的 VNode 及其子 VNode 全部更新后调用。")]),t._v(" "),e("p",[t._v("unbind：只调用一次，指令与元素解绑时调用。")]),t._v(" "),e("p",[t._v("钩子函数的参数："),e("code",[t._v("el")]),t._v(" 绑定的元素；"),e("code",[t._v("binding")]),t._v(" 指令核心对象，描述指令全部信息属性 "),e("code",[t._v("name")]),t._v(" "),e("code",[t._v("value")]),t._v(" "),e("code",[t._v("oldValue")]),t._v("......")]),t._v(" "),e("h2",{attrs:{id:"_22-子组件可以直接改变父组件的数据吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_22-子组件可以直接改变父组件的数据吗"}},[t._v("#")]),t._v(" 22.子组件可以直接改变父组件的数据吗？")]),t._v(" "),e("p",[t._v("子组件中不可以直接改变父组件的数据。这样做主要是为了维护父子组件的单向数据流。每次父组件发生更新时，子组件的所有 prop 都将会刷新为最新的值。如果这样做了，vue 会在浏览器的控制台中发出警告。")]),t._v(" "),e("p",[t._v("可以使用$emit 来派发一个自定义事件，父组件接受到后，由父组件修改")]),t._v(" "),e("h2",{attrs:{id:"_23-对-react-和-vue-的理解-他们的异同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_23-对-react-和-vue-的理解-他们的异同"}},[t._v("#")]),t._v(" 23.对 React 和 Vue 的理解，他们的异同")]),t._v(" "),e("p",[t._v("相似之处;")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("都将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库")])]),t._v(" "),e("li",[e("p",[t._v("都有自己的构建工具，能让你得到一个根据最佳实践设置的项目模版")])]),t._v(" "),e("li",[e("p",[t._v("都使用了虚拟 DOM 提高重绘性能")])]),t._v(" "),e("li",[e("p",[t._v("都有 props 的概念，允许组件间的数据传递")])]),t._v(" "),e("li",[e("p",[t._v("都鼓励组件化应用，将应用分拆成一个个功能明确的模块，提高复用性")])])]),t._v(" "),e("p",[t._v("不同之处：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("数据流：vue 默认支持数据双向绑定，而 React 一致提倡单项数据流")])]),t._v(" "),e("li",[e("p",[t._v("虚拟 DOM：v2 开始引入虚拟 dom，vue 在渲染的过程中，会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。对于 React 而言，每当应用的状态被改变时，全部子组件都会重新渲染，当然，可以通过 PureComponent/shouldComponentUpdate 生命周期方法来进行控制，但 vue 将此视为默认的优化")])]),t._v(" "),e("li",[e("p",[t._v("组件化：vue 鼓励写近似常规 HTML 的模版，React 推荐你所有的模版统用 JavaScript 的语法扩展--jsx 语法。React 的 render 函数是支持闭包特性的，所以 import 的组件在 render 中可以直接调用，但在 vue 中，由于模版中使用的数据都必须挂在 this 上进行一次中转，所以 import 一个组件后，还需要在 components 中声明，vue3 会自动声明")])]),t._v(" "),e("li",[e("p",[t._v("监听数据变化的原理不同：vue 通过 getter/setter 以及一些函数的劫持，能精准知道数据变化，不需要特别的优化就能达到很好的性能；React 默认是通过比较引用的方式进行的，如果不优化，可能导致大量不必要的 VNode 的重新渲染，这是因为 vue 使用的是可变数据，而 React 更强调数据的不可变")])]),t._v(" "),e("li",[e("p",[t._v("高阶组件：React 可以通过高阶组件来扩展。vue 不能采用高阶组件")]),t._v(" "),e("blockquote",[e("p",[t._v("高阶组件：接受一个组件，返回一个新的组件，基于装饰者模式，可以在不改变原组件的情况下添加一个属性和方法\nvue 可以使用 mixins 来实现")])])])]),t._v(" "),e("h2",{attrs:{id:"_24-vue-的优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_24-vue-的优点"}},[t._v("#")]),t._v(" 24.Vue 的优点？")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十 kb")])]),t._v(" "),e("li",[e("p",[t._v("简单易学：国人开发，中文文档，不存在语言障碍，易于理解和学习")])]),t._v(" "),e("li",[e("p",[t._v("双向数据绑定，保留了 angular 的特点，在数据操作方面更为简单")])]),t._v(" "),e("li",[e("p",[t._v("组件化：保留了 React 的有点，实现了 html 的封装和重用，在构建单页面应用方面有着独特的优势")])]),t._v(" "),e("li",[e("p",[t._v("视图、数据、结构相分离：使是数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作")])]),t._v(" "),e("li",[e("p",[t._v("虚拟 dom：dom 操作是非常耗费性能的，不再使用原生的 dom 操作节点，极大解放 dom 操作，但具体操作的还是 dom 不过是换了另一种方式")])]),t._v(" "),e("li",[e("p",[t._v("运行速度更快：相比较于 React 而言，同样是操作虚拟 dom,就性能而言，vue 存在很大的优势")])])]),t._v(" "),e("h2",{attrs:{id:"_25-delete-和-vue-delete-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_25-delete-和-vue-delete-的区别"}},[t._v("#")]),t._v(" 25.delete 和 Vue.delete 的区别？")]),t._v(" "),e("p",[t._v("delete 操作只会将数组中被删除的元素设为 undefined，而不会真正从数组中移除")]),t._v(" "),e("p",[t._v("Vue.delete 则是 Vue.js 中的全局方法，用于删除对象的属性或数组元素，当用在数组上时，它会真正从数组中移除元素，而不仅仅将其设为 undefined。此外，还能被 Vue 的响应系统观察到，因此在删除操作后会触发视图的更新。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//delete")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" arr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1, undefined, 3]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Vue.delete")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1, 3]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h2",{attrs:{id:"_26-vue-的性能优化有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_26-vue-的性能优化有哪些"}},[t._v("#")]),t._v(" 26.Vue 的性能优化有哪些？")]),t._v(" "),e("p",[e("strong",[t._v("编码阶段")]),t._v("：")]),t._v(" "),e("p",[t._v("尽量减少 data 中的数据，data 中的数据都会增加 getter 和 setter，会收集对应的 watcher")]),t._v(" "),e("p",[t._v("根据场景合适的选择 v-if 和 v-show")]),t._v(" "),e("p",[t._v("如果需要使用 v-for 给每项元素绑定事件时使用事件代理")]),t._v(" "),e("p",[t._v("SPA 页面采用 keep-alive 缓存组件")]),t._v(" "),e("p",[t._v("v-if 和 v-for 不在同一个元素上使用")]),t._v(" "),e("p",[t._v("使用路由懒加载、异步组件")]),t._v(" "),e("p",[t._v("防抖节流")]),t._v(" "),e("p",[t._v("第三方模块按需导入")]),t._v(" "),e("p",[t._v("长列表滚动到可视区域动态加载")]),t._v(" "),e("p",[t._v("图片懒加载")]),t._v(" "),e("p",[e("strong",[t._v("SEO 优化")]),t._v("：")]),t._v(" "),e("p",[t._v("预渲染")]),t._v(" "),e("p",[t._v("服务端渲染 SSR")]),t._v(" "),e("p",[e("strong",[t._v("打包优化")]),t._v("：")]),t._v(" "),e("p",[t._v("压缩代码")]),t._v(" "),e("p",[t._v("Tree Shaking/Scope Hoisting")]),t._v(" "),e("p",[t._v("使用 CDN 加载第三方模块")]),t._v(" "),e("p",[t._v("多线程打包 happypack")]),t._v(" "),e("p",[t._v("splitChunks 抽离公共文件")]),t._v(" "),e("p",[t._v("sourceMap 优化")]),t._v(" "),e("p",[e("strong",[t._v("用户体验")]),t._v(":")]),t._v(" "),e("p",[t._v("骨架屏")]),t._v(" "),e("p",[t._v("PWA")]),t._v(" "),e("p",[t._v("还可以使用缓存（客户端缓存、服务端缓存）优化、服务端开启 gzip 压缩等")]),t._v(" "),e("h2",{attrs:{id:"_27-spa-优点和缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_27-spa-优点和缺点"}},[t._v("#")]),t._v(" 27.SPA 优点和缺点")]),t._v(" "),e("p",[t._v("优点：前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理")]),t._v(" "),e("p",[t._v("缺点：不利于 SEO")]),t._v(" "),e("h2",{attrs:{id:"_28-template-和-jsx-的有什么分别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_28-template-和-jsx-的有什么分别"}},[t._v("#")]),t._v(" 28. template 和 jsx 的有什么分别？")]),t._v(" "),e("p",[t._v("模板（Template）和 JSX（JavaScript XML）都是用于描述用户界面的语法，但它们在使用方式和功能上有一些区别。")]),t._v(" "),e("p",[t._v("JSX 相对于 template 而言，具有更高的灵活性，在复杂的组件中，更具有优势，")]),t._v(" "),e("p",[t._v("而 template 虽然显得有些呆滞。但是 template 在代码结构上更符合视图与逻辑分离的习惯，更简单、更直观、更好维护。")]),t._v(" "),e("h2",{attrs:{id:"_29-vue-初始化页面闪动问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_29-vue-初始化页面闪动问题"}},[t._v("#")]),t._v(" 29.vue 初始化页面闪动问题")]),t._v(" "),e("p",[t._v("使用 vue 开发时，在 vue 初始化之前，由于 div 是不归 vue 管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于"+t._s(t.message)+"的字样，虽然一般情况下这个时间很短暂，但是还是有必要解决的")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cloak"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"_30-v-if-和-v-for-哪个优先级更高-如果同时出现-应该如何优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_30-v-if-和-v-for-哪个优先级更高-如果同时出现-应该如何优化"}},[t._v("#")]),t._v(" 30.v-if 和 v-for 哪个优先级更高？如果同时出现，应该如何优化？")]),t._v(" "),e("p",[t._v("v-if 是用于条件渲染元素；v-for 用于循环渲染元素")]),t._v(" "),e("p",[t._v("在 vue2 中，v-for 的优先级比 v-if 高，这意味着当它们同时出现正在同一个元素上时，v-for 会先执行，然后才对每一个循环的元素执行 v-if 判断，可能会导致不必要的渲染和性能问题")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用computed先对数据进行处理之后再执行v-for")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("在 vue3 中，v-if 的优先级比 v-for 高；如果在一个元素上同时使用了  "),e("code",[t._v("v-for")]),t._v("  和  "),e("code",[t._v("v-if")]),t._v("，这意味着  "),e("code",[t._v("v-if")]),t._v("  的条件将无法访问到  "),e("code",[t._v("v-for")]),t._v("  作用域内定义的变量别名")]),t._v(" "),e("h2",{attrs:{id:"_31-对-vue-组件化的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_31-对-vue-组件化的理解"}},[t._v("#")]),t._v(" 31.对 Vue 组件化的理解")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("组件是独立和可复用的代码组织单元。组件系统是 Vue 核心特性之一，他使开发者使用小型、独立和通常可复用的组件构建大型应用")])]),t._v(" "),e("li",[e("p",[t._v("组件化开发能大幅提高应用开发效率、测试性、复用性等")])]),t._v(" "),e("li",[e("p",[t._v("组件使用按分类有：页面组件、业务组件、通用组件")])]),t._v(" "),e("li",[e("p",[t._v("vue 的组件是基于配置，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，他们基于 VueComponent，扩展于 Vue")])]),t._v(" "),e("li",[e("p",[t._v("Vue 中常见组件化技术有：属性 props，自定义事件，插槽等，他们主要用于组件通信、扩展等")])]),t._v(" "),e("li",[e("p",[t._v("合理的划分组件，有助于提升应用性能")])]),t._v(" "),e("li",[e("p",[t._v("组件应该时高内聚、低耦合的")])]),t._v(" "),e("li",[e("p",[t._v("遵循单向数据流的原则")])])]),t._v(" "),e("h2",{attrs:{id:"_32-对-vue-设计原则的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_32-对-vue-设计原则的理解"}},[t._v("#")]),t._v(" 32.对 vue 设计原则的理解？")]),t._v(" "),e("p",[t._v("vue 的设计原则是渐进式 的，核心库只关注视图层，方便与其他库或已有项目整合，另外 Vue 还有易用灵活高效的设计目标")]),t._v(" "),e("h2",{attrs:{id:"_33-v-model-的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_33-v-model-的实现原理"}},[t._v("#")]),t._v(" 33.v-model 的实现原理？")]),t._v(" "),e("p",[t._v("v-bind 绑定响应式数据 触发 Input 事件并传递数据")]),t._v(" "),e("h2",{attrs:{id:"_34-vue-的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_34-vue-的生命周期"}},[t._v("#")]),t._v(" 34.Vue 的生命周期")]),t._v(" "),e("p",[t._v("beforeCreate 创建前 created 创建后")]),t._v(" "),e("p",[t._v("beforeMount 挂载前 mounted 挂载后")]),t._v(" "),e("p",[t._v("beforeUpdate 更新前 updated 更新后")]),t._v(" "),e("p",[t._v("beforeDestoy 销毁前 destroyed 销毁后")]),t._v(" "),e("h2",{attrs:{id:"_35-created-和-mounted-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_35-created-和-mounted-的区别"}},[t._v("#")]),t._v(" 35.created 和 mounted 的区别？")]),t._v(" "),e("p",[t._v("created 是在模版编译成 HTML 前调用，此时 dom 还为生成")]),t._v(" "),e("p",[t._v("mounted 是在模版编译成 HTML 之后调用，此时 dom 已经生成")]),t._v(" "),e("h2",{attrs:{id:"_36-一般在那个生命周期请求异步数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_36-一般在那个生命周期请求异步数据"}},[t._v("#")]),t._v(" 36.一般在那个生命周期请求异步数据")]),t._v(" "),e("p",[t._v("一般在 created 和 mounted 生命周期请求异步数据，如果需要在服务器渲染时也能获取数据，那么在 created。如果需要访问或者操作 dom 那么在 mounted 中 请求")]),t._v(" "),e("h2",{attrs:{id:"_37-如何获取页面的-hash-变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_37-如何获取页面的-hash-变化"}},[t._v("#")]),t._v(" 37.如何获取页面的 hash 变化？")]),t._v(" "),e("p",[t._v("可以通过 window.location.hash 来获取当前页面的 hash，然后通过 window.onhashchange 事件来监听 hash 变化")]),t._v(" "),e("h2",{attrs:{id:"_38-router-和-route-之间的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_38-router-和-route-之间的区别"}},[t._v("#")]),t._v(" 38.router 和 route 之间的区别？")]),t._v(" "),e("p",[t._v("route 是获取路由信息对象")]),t._v(" "),e("p",[t._v("router 是获取路由实例，如路由跳转方法、全局守卫")]),t._v(" "),e("h2",{attrs:{id:"_39-vue-router-有哪些导航钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_39-vue-router-有哪些导航钩子"}},[t._v("#")]),t._v(" 39.vue-router 有哪些导航钩子？")]),t._v(" "),e("p",[t._v("全局导航守卫：beforeEach beforeResolve afterEach")]),t._v(" "),e("p",[t._v("路由独享守卫：beforeEnter")]),t._v(" "),e("p",[t._v("组件内守卫：beforeRouteEnter beforeRouteUpdate beforeRouteLeave")]),t._v(" "),e("h2",{attrs:{id:"_40-vue-router-跳转和-location-href-有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_40-vue-router-跳转和-location-href-有什么区别"}},[t._v("#")]),t._v(" 40.vue-router 跳转和 location.href 有什么区别？")]),t._v(" "),e("p",[t._v("vue-router 使用 pushState 更新路由，不会刷新页面；location.href 会触发浏览器页面刷新")]),t._v(" "),e("p",[t._v("vue-router 是路由跳转或同一页面跳转；location.herf 是不用页面间跳转")]),t._v(" "),e("p",[t._v("vue-router 是异步加载；location.href 是同步加载")]),t._v(" "),e("h2",{attrs:{id:"_41-params-和-query-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_41-params-和-query-的区别"}},[t._v("#")]),t._v(" 41.params 和 query 的区别？")]),t._v(" "),e("p",[t._v("query 要用 path 来引入；params 要用 name 来引入")]),t._v(" "),e("p",[t._v("query 类似于 get 传参，可以在浏览器中显示参数。params 类似于 post，传参参数不会在 url 上显示")]),t._v(" "),e("p",[t._v("query 刷新不会丢失；params 刷新会丢失")]),t._v(" "),e("h2",{attrs:{id:"_42-vuex-的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_42-vuex-的原理"}},[t._v("#")]),t._v(" 42.vuex 的原理")]),t._v(" "),e("p",[t._v("组件中某个行为会触发 dispatch 一个 action")]),t._v(" "),e("p",[t._v("action 里面可能会进行异步操作，会提交 commit 一个 mutation")]),t._v(" "),e("p",[t._v("mutation 会直接更改 state 状态")]),t._v(" "),e("p",[t._v("state 的更改会触发视图层的更新")]),t._v(" "),e("h2",{attrs:{id:"_43-vuex-中-action-和-mutation-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_43-vuex-中-action-和-mutation-的区别"}},[t._v("#")]),t._v(" 43.vuex 中 action 和 mutation 的区别？")]),t._v(" "),e("p",[t._v("mutation 是更改 vuex 的 store 中状态的唯一方法，他是同步的")]),t._v(" "),e("p",[t._v("action 类似于 mutation，不同在于 action 是异步的，如果需要异步操作必须通过 action 然后再 action 中提交 mutation")]),t._v(" "),e("h2",{attrs:{id:"_44-vuex-和-localstorage-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_44-vuex-和-localstorage-的区别"}},[t._v("#")]),t._v(" 44.vuex 和 localStorage 的区别？")]),t._v(" "),e("p",[t._v("vuex 存储在内存中，localStorage 则以文件的方式存储在本地，只能存储字符串类型的数据")]),t._v(" "),e("p",[t._v("vuex 是一个专门为 vue.js 应用程序开发的状态管理模式；localStorage 是本地存储，是将数据存储在浏览器的方法")]),t._v(" "),e("p",[t._v("vuex 能够做到数据响应式，localStorage 不能")]),t._v(" "),e("p",[t._v("刷新页面 vuex 存储的值会丢失，localStorage 不会丢失")]),t._v(" "),e("h2",{attrs:{id:"_45-redux-和-vuex-之间有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_45-redux-和-vuex-之间有什么区别"}},[t._v("#")]),t._v(" 45.redux 和 vuex 之间有什么区别？")]),t._v(" "),e("p",[t._v("redux;是 JavaScript 状态容器，提供可预测变化的状态管理，可以用于 JavaScript 不同的框架")]),t._v(" "),e("p",[t._v("vuex：是 vue.js 的状态管理模式和库。他采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化")]),t._v(" "),e("p",[t._v("共同思想：集中管理应用的状态，并且状态的变化是可预测的")]),t._v(" "),e("h2",{attrs:{id:"_46-vuex-有几种属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_46-vuex-有几种属性"}},[t._v("#")]),t._v(" 46.vuex 有几种属性？")]),t._v(" "),e("p",[t._v("vuex 主要有五种属性：state、getters、mutations、actions、modules")]),t._v(" "),e("p",[t._v("state：存储状态（数据）")]),t._v(" "),e("p",[t._v("getters：计算属性，用于过滤或计算 state")]),t._v(" "),e("p",[t._v("mutations：更改 state 的唯一方式，但只能进行同步操作")]),t._v(" "),e("p",[t._v("actions：可以包含异步操作，用于提交 mutation")]),t._v(" "),e("h2",{attrs:{id:"_47-vuex-和单纯的全局对象有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_47-vuex-和单纯的全局对象有什么区别"}},[t._v("#")]),t._v(" 47.vuex 和单纯的全局对象有什么区别？")]),t._v(" "),e("p",[t._v("vuex：不仅提供了一个集中管理应用状态的仓库。还提供了一种机制来过呢跟踪状态的变化，使得状态的变化时可预测和可追踪的")]),t._v(" "),e("p",[t._v("全局对象：虽然也可以用来存储和共享状态，但是没有提供跟踪状态变化的机制，状态的变化是不可预测和不可追踪的")]),t._v(" "),e("h2",{attrs:{id:"_48-为什么-vuex-的-mutation-中不能做异步操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_48-为什么-vuex-的-mutation-中不能做异步操作"}},[t._v("#")]),t._v(" 48.为什么 vuex 的 mutation 中不能做异步操作？")]),t._v(" "),e("p",[t._v("如果 mutation 支持异步操作，就没有办法知道状态何时更新的，无法很好的进行状态的追踪，给调试带来困难")]),t._v(" "),e("h2",{attrs:{id:"_49-vuex-中的严格模式怎么开启-有什么用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_49-vuex-中的严格模式怎么开启-有什么用"}},[t._v("#")]),t._v(" 49.vuex 中的严格模式怎么开启，有什么用？")]),t._v(" "),e("p",[t._v("vuex 的严格模式下，无论何时发生了状态变化且不是有 mutation 函数引起的，将会抛出错误。这确保了所有的状态变化都能被追踪到")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("strict")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"_50-如何在组件中批量使用-vuex-中的-getter-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_50-如何在组件中批量使用-vuex-中的-getter-属性"}},[t._v("#")]),t._v(" 50.如何在组件中批量使用 vuex 中的 getter 属性？")]),t._v(" "),e("p",[t._v("mapGetters 函数辅助")]),t._v(" "),e("h2",{attrs:{id:"_51-v3-有那些更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_51-v3-有那些更新"}},[t._v("#")]),t._v(" 51.v3 有那些更新？")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("性能提升：更快的渲染速度和更小的包大小")])]),t._v(" "),e("li",[e("p",[t._v("Composition Api：引入了新的 Composition Api，提供了一种更灵活的逻辑复用和代码组织方式")])]),t._v(" "),e("li",[e("p",[t._v("更好的 TypeScript 支持：vue3.0 提供了更好的 TypeScript 集成")])]),t._v(" "),e("li",[e("p",[t._v("自定义 render API：v3 允许你使用自定义渲染器，这意味着你可以在不同的平台上使用 vue")])]),t._v(" "),e("li",[e("p",[t._v("Fragment、Suspense：v3 引入了新的内置组件，如 Fragment（允许一个组件有多个根节点）和 Suspense（用于处理异步组件）")])])]),t._v(" "),e("h2",{attrs:{id:"_52-defineproperty-和-proxy-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_52-defineproperty-和-proxy-的区别"}},[t._v("#")]),t._v(" 52.defineProperty 和 proxy 的区别？")]),t._v(" "),e("p",[t._v("数据监听方式：Object.defineProperty 只能劫持对象的属性，因此需要遍历每个对象的每个属性进行劫持，如果属性值也是对象，那么需要深度遍历；proxy 可以直接劫持整个对象，并返回一个新的对象")]),t._v(" "),e("p",[t._v("兼容性：proxy 的兼容性不如 Object.defineProperty，后者可以运行在 IE9 及以上版本，而 proxy 只支持到 IE11")]),t._v(" "),e("p",[t._v("监听数组变化：Object.defineProperty 无法监听到数组变化，而 proxy 可以直接监听数组和对象的变化")]),t._v(" "),e("h2",{attrs:{id:"_53-v3-为什么要用-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_53-v3-为什么要用-proxy"}},[t._v("#")]),t._v(" 53.v3 为什么要用 proxy？")]),t._v(" "),e("p",[t._v("v3 选择使用 proxy 的原因主要是因为 proxy 可以直接监听对象和数组的变化，而 Object.defineProperty 无法监听数组的变化，只能通过特殊的方法来监听，这在一定程度上增加了使用的复杂性，此外，proxy 可以直接劫持整个对象，而不需要像 Object.defineProperty 那样需要遍历对象的每个属性，这使得性能更好")]),t._v(" "),e("h2",{attrs:{id:"_54-v3-中的-vue-composition-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_54-v3-中的-vue-composition-api"}},[t._v("#")]),t._v(" 54.v3 中的 vue Composition API？")]),t._v(" "),e("p",[t._v("是 v3 中的新特性，他是一组基于函数的 API，允许我们在组件中更灵活地复用和组织逻辑，与 v2 中的 options API 相比，Composition API 提功了更好的逻辑复和代码的组织能力")]),t._v(" "),e("h2",{attrs:{id:"_55-composition-api-和-react-hook-很像-区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_55-composition-api-和-react-hook-很像-区别是什么"}},[t._v("#")]),t._v(" 55.Composition API 和 React Hook 很像，区别是什么？")]),t._v(" "),e("p",[t._v("调用时机：React Hook 只能在函数组件的最顶层调用，不能在循环、条件判断或者子函数中调用。而 vue 的 Composition API 没有这样的限制，可以在 setup 函数中的任何地方调用")]),t._v(" "),e("p",[t._v("组件状态：React Hook 通过 useState 来创建组件的状态，而 vue 的 Composition API 使用 reactive 或者 ref 来创建响应式数据")]),t._v(" "),e("p",[t._v("副作用处理：React Hook 使用 useEffect 来处理副作用，而 vue 使用的是 lifecycle hooks（如 onMounted、onUpdated 等）")]),t._v(" "),e("h2",{attrs:{id:"_56-对虚拟-dom-的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_56-对虚拟-dom-的理解"}},[t._v("#")]),t._v(" 56.对虚拟 dom 的理解？")]),t._v(" "),e("p",[t._v("虚拟 dom 其实就是用一个 js 对象描述一个 dom 节点，他是对真实 dom 的一层抽象，最终可以通过一系列操作使其映射到真实环境上，相当于在 js 和 dom 之间做了一个缓存，利用 diff 算法对比新旧虚拟 dom 记录到一个对象中按需更新，最后创建真实 dom")]),t._v(" "),e("h2",{attrs:{id:"_57-为什么要用虚拟-dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_57-为什么要用虚拟-dom"}},[t._v("#")]),t._v(" 57.为什么要用虚拟 dom？")]),t._v(" "),e("p",[t._v("虚拟 dom 的主要优点是提高了页面的更新效率。由于直接操作真实 dom 的成本很高，而虚拟 dom 可以通过批量、延迟的方式来更新 dom，从而减少了 dom 操作的次数，提高了性能")]),t._v(" "),e("h2",{attrs:{id:"_58-虚拟-dom-真的比真实-dom-性能好吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_58-虚拟-dom-真的比真实-dom-性能好吗"}},[t._v("#")]),t._v(" 58.虚拟 dom 真的比真实 dom 性能好吗？")]),t._v(" "),e("p",[t._v("虚拟 dom 并不一定比真实 dom 性能好，他的优势在于处理大量、频繁的 dom 操作时能够提供更好的性能。对于简单的页面，直接操作真实 dom 可能会更快")]),t._v(" "),e("h2",{attrs:{id:"_59-diff-算法的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_59-diff-算法的原理"}},[t._v("#")]),t._v(" 59.diff 算法的原理？")]),t._v(" "),e("p",[t._v("diff 算法是虚拟 dom 中用来对比新旧虚拟节点差异的算法。他通过同层的树节点进行比较，而不是跨层比较，从而提高了性能。diff 算法会比较新旧虚拟节点的类型和 key，通过这两个维度来判断节点是否相同，如果不同则直接替换，如果相同则继续比较节点的属性和子节点")])])}),[],!1,null,null,null);e.default=s.exports}}]);