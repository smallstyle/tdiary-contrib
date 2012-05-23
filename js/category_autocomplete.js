$(function(){
	$('<input tpye="text" id="plugin_autocomplete_category">')
		.css({
			width: '20em',
			display: 'inline'
		})
		.autocomplete({
			delay: 0,
			minLength: 1,
			source: $tDiary.plugin.category_autocomplete.available_categories,
			select: function(event, ui) {
				$('#body').insertAtCaret('[' + ui.item.value + ']');
			},
			close: function(event, ui) {
				$(this)
					.val('')
					.focus();
				$('#plugin_autocomplete_category').data('autocomplete').term = '';
			}
		})
		.insertAfter("#body");
	$("<label>")
		.text($tDiary.plugin.category_autocomplete.label + ': ')
		.attr('for', 'plugin_autocomplete_category')
		.insertAfter("#body");
});
