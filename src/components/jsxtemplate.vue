<script>
export default {
  name: 'jsxtemplate',
  data() {
    return {
      testa:'abcdefthijklm'
    }
  },
// render: function (createElement, context) {
//     // 完全透传任何 attribute、事件监听器、子节点等。
//     return createElement('button', 'aa', 'bb')
//   }
  render: (h) => {
    return (<h2>abcdefgh</h2>)
  }
}
</script>