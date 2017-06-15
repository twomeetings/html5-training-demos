(function(define){
	define('umd', ['./amdModule'],function(amdModule){
		return { name:'umd', dep:amdModule}
	})
})(
	typeof define == 'function' ? define :
	function(ids, factory){
		var deps = ids.map(function(id ) { return require(id)})
		module.exports = factory.apply(null, deps)
	}
)
