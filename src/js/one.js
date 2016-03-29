/**
 * [foo description] one question 
 * @type {Object}
 */
var o = {
	x: 10,
	foo: function() {
		//A
		//B
		with(this) {
			//此处的函数声明 bar 因为是函数声明语句的关系，其声明会被提升到函数的顶部,所以与放在A处相同
			function bar() {
				console.log(x);
				console.log(this.x);
			}

			var x = 20; //也是涉及变量声明提升的问题，B处的代码为var x;此处的等价代码为x=20;因为with语句的关系，变为对this中的属性x赋值          
			(function() {
				bar(); //此时bar匿名函数外层函数foo中定义的函数对象，此时this为全局对象               
			})();
			bar.call(this); ////此时bar匿名函数外层函数foo中定义的函数对象 ，此时this为传入的对象o    
		}

		console.log(this.x);
		console.log(this.bar);


	}
}
o.foo();