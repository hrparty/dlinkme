(function ($) {

	$('#url').focus().on('keyup', function() {
		var val = dlname = this.value;

		if (dlname.lastIndexOf('/') != -1 && dlname.lastIndexOf('/') != dlname.length - 1) {
			dlname = dlname.substr(dlname.lastIndexOf('/') + 1);
		}

		$('#dlink').empty().html('<a href="'+ val +'" download="'+ dlname +'">'+ val +'</a>');
	});

})(jQuery);