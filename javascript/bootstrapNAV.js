function bootstrapNav(options){
	var NAVDOM = 'ul.nav'
	$(document).on("click",NAVDOM,function(){
		$(NAVDOM).removeClass("active")
		$(this).addClass("active")
	})
}()
