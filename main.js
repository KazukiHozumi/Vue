var app = new Vue({
  el: '#app',
  data: {
    message: '初期メッセージ',
    list: ['りんご', 'ばなな', 'いちご'],
    show: true,
    count: 0,
    classObject: {
      child: true,
      'is-active': false
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    },
    radius: 50,
    ok: false
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    },
    increment: function() {
      this.count += 1
    }
  }
})
