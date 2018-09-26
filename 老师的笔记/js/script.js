Vue.component('note',{
    props:["todo"],
    template:`
    <div class="boxx clearfix">
          <span>{{getTime}}</span>
          <h5>{{getTitle || "笔记标题"}}</h5>
          <textarea rows="2" cols="120" v-model="todo.title" @keyup="key"></textarea>
           <span class="text-right">{{todo.title.length}}字</span>
           <img @click="del" src="laji.jpg">
     </div>
    `,
    computed:{
       getTitle:function(){
           return _.truncate(this.todo.tit, {'length': 10});
       },
       getTime:function(){
           return moment(this.todo.time).fromNow()
       }
    },
    methods:{
        del:function(){
            //删除笔记
            app.lists.splice(this._uid-1,1);
            localStorage.setItem('lists',JSON.stringify(app.lists))
        },
        key:function(){
            app.lists[this._uid-1].value = this.todo.value;

            app.lists[this._uid-1].time = Date.parse(new Date());

            localStorage.setItem('lists',JSON.stringify(app.lists))
        }
    }
})
var app=new Vue({
    el:"#app",
    data:{
        text:"",
        texts:"",
        lists:[
            {
                time:1537778713000,
                tit:"春花秋月何时了？往事知多少。小楼昨夜又东风",
                title:"春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流"
            }
        ]
    },
    methods:{
       fun:function(){
            if(this.texts!==""||this.text!==""){
                this.lists.unshift({time:Date.parse(new Date()),tit:this.text,title:this.texts});
                localStorage.setItem('lists',JSON.stringify(this.lists))
            }
        }
    },
    created: function () {
        if (localStorage.getItem('lists') !== null) {
            this.lists = JSON.parse(localStorage.getItem('lists'));
        }
    }
})

autosize(document.querySelectorAll('textarea'));