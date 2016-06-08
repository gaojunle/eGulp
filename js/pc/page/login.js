require(['jquery', 'base', 'jqmask'], function ($, Base) {
	$('.js-login-btn').click(function(){
		$('document').mask('<h1>Welcome to eGulp...</h1>');
	})
});
