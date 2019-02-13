var app = new Vue({
  el: '#app',
  data: {
    message: '初期メッセージ',
    list: ['りんご', 'ばなな', 'いちご']
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
})
