/**
 * [foo description] one question 
 * @type {Object} return undefined
 */
var foo = {
	bar: function() {
		return this.baz;
	},
	baz: 1
};
(function() {
	return typeof arguments[0]();
})(foo.bar);