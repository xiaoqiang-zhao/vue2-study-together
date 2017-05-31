<script>
  export default {
    functional: true,
    // data 不可以有自己的 data
    render (createElement, context) {
      let text = context.props.text || '可以用正常的模板吗？不能！'
      return createElement('div', text)
    },
    // props: ['text'], // 可以不明确指定 props 的字段
    methods: {}
  }
</script>
