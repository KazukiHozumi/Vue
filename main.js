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
    ],
    name: "キマイラ",
    id: "1",
    id_2: "1",
    text: "Vue",
    list3: [],
    url: "https://www.google.com",
    message_2: 'Hello <strong>Vue.js!</strong>',
    show_2: true,
    fileList: [],
    val: true,
    val_2: 'yes',
    val_3: ['A', 'C'],
    val_4: 'a',
    val_5: '',
    val_6: ['a', 'c'],
    preview: ''
  },
  created: function() {
    axios.get('list.json').then(function(response) {
      this.list3 = response.data
    }.bind(this)).catch(function(e) {
      console.error(e)
    })
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    },
    increment: function() {
      this.count += 1
    },
    listPush() {
      this.list.push('めろん')
    },
    doAdd: function() {
      var max = this.list2.reduce(function(a, b) {
        return a.id > b.id ? a.id : b.id
      }, 0)
      this.list2.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    },
    doRemove: function(index) {
      this.list2.splice(index, 1)
    },
    doChangeS: function() {
      this.$set(this.list2, this.id-1, {id: this.id, name: 'スライム', hp: 100})
    },
    doChangeKS: function() {
      this.$set(this.list2, this.id_2-1, {id: this.id_2, name: 'キングスライム', hp: 700})
    },
    doAttack: function(index) {
      this.list2[index].hp -= 10
    },
    handleRemove: function(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview: function(file) {
      console.log(file);
    },
    handleAdd: function (file, fileList) {
      this.fileList = fileList
    },
    handler: function(comment) {
      console.log(comment)
    },
    handleChange: function(event) {
      var file = event.target.files[0]
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file)
      }
    }
  }
})
