
var o = {
  name: 'milkmidi',
  myFunES5: function(){
    setTimeout(function() {
      // 這裡會 error, 因為 this 指向錯誤
      this.name = 'value'; 
    }, 1000);
  },
  // es6 可以不用寫 function 這個字
  myFunES6(){
    // 解法 1, 先宣告一個變數，把 this 存起來
    var me = this;
    setTimeout(function() {
      // 這時就可以用 me 取得 this
      me.name = 'value'; 
    }, 1000);
  },
  myFunArrow(){
    // 最佳解法，用 arrow function
    // 會自動的將 this 指向到目前的物件
    // 其實轉成 ES5 的格式就是上方解法 1 的寫法
    setTimeout(() => {
      this.name = 'value';
    }, 1000);
  }
}