var scroll = new SmoothScroll()

Vue.component('my-component', {
  template: '<button v-on:click="handleClick">{{ val }}! {{ name }}!</button>',
  props: {
    'val': String,
    'name': {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick: function() {
      this.$emit('childs-event')
    }
  }
})

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
    preview: '',
    val_7: 50,
    val_8: '#ff0000',
    scrollY: 0,
    timer: null,
    width: 800,
    height: 600,
    list_2: [],
    current: '',
    topics: [
      {value: 'vue', name: 'Vue.js' },
      {value: 'jQuery', name: 'jQuery'}
    ],
    price: 12345,
    list_3: [],
    show_3: true,
    count_2: 0
  },
  computed: {
    halfRadius: function() {
      return this.radius/2
    },
    halfWidth: {
      get: function() {
        return this.width/2
      },
      set: function(val) {
        this.width = val*2
      }
    },
    halfHeight: function() {
      return this.height/2
    },
    halfPoint: function() {
      return {
        x: this.halfWidth,
        y: this.halfHeight
      }
    },
    computedData: function() {
      return Math.random()
    }
  },
  created: function() {
    axios.get('list.json').then(function(response) {
      this.list3 = response.data
    }.bind(this)).catch(function(e) {
      console.error(e)
    }),
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    message: _.debounce(function(newVal) {
      console.log(newVal)
    }, 500),
    current: function(val) {
      axios.get('https://api.github.com/search/repositories', {
        params: {q: 'topic:' + val }
      }).then(function(response) {
        this.list_2 = response.data.items
      }.bind(this))
    },
    list_3: function() {
      console.log('通常:', this.$refs.list_3.offsetHeight)
      this.$nextTick(function() {
        console.log('nextTick:', this.$refs.list_3.offsetHeight)
      })
    }
  },
  filters: {
    localeNum: function(val) {
      return val.toLocaleString()
    }
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
    },
    handleScroll: function() {
      if (this.timer === null) {
        this.timer = setTimeout(function() {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this), 200)
      }
    },
    scrollTop: function() {
      scroll.animateScroll(0)
    },
    methodsData: function() {
      return Math.random()
    },
    parentsMethod: function() {
      alert('イベントをキャッチ！')
    }
  }
})
