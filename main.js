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
    ok: false,
    list2: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 }
    ]
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
