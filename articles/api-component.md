# vue 组件

## 使用组件

在大型项目中全局注册组件慎用，如果开了这个口剩下的逻辑基本是任何一个 UI 库都的所有组件可以全局注册，但是这些组件不可能被用在一个页面中，全局组件会在首屏被加载，整个 UI 库的体积会很影响首屏渲染速度。所以我推荐组件注册都采用局部注册的方式来使用。

.vue 组件是我们最常用的形式，所以 `is` 关键字也可以不用管，其实还得框架和开发流程就是让开发者忽略一些细节绕过一些坑，最好这些优势都不让开发者感觉到。

data 必须是函数。组件通信：父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。下面先看 props。

## props

子组件引用父组件的数据：

    Vue.component('child', {
      // 声明 props
      props: ['message'],
      // 就像 data 一样，prop 可以用在模板内
      // 同样也可以在 vm 实例中像 “this.message” 这样使用
      template: '<span>{{ message }}</span>'
    })
    
    <child message="hello!"></child>

上面是静态数据传递，动态数据可以向下面这样写：

    <child :message="message"></child>

这里有几个需要注意的地方：

- props 只有在子组件中定义过，父组件的数据才能传到子组件中；
- props 中的字段和 data 中的字段不可以冲突；
- props 传进来的值不可以直接修改，间接修改的方法和影响查看 demo/component-props.vue。

props 定义和验证的几种方式：

    props: {
        // 基础类型检测 （`null` 意思是任何类型都可以）
        propA: Number,
        // 多种类型
        propB: [String, Number],
        // 必传且是字符串
        propC: {
          type: String,
          required: true
        },
        // 数字，有默认值
        propD: {
          type: Number,
          default: 100
        },
        // 数组／对象的默认值应当由一个工厂函数返回
        propE: {
          type: Object,
          default: function () {
            return { message: 'hello' }
          }
        },
        // 自定义验证函数
        propF: {
          validator: function (value) {
            return value > 10
          }
        }
    }

type 的集合：String Number Boolean Function Object Array

## 自定义事件



