$(function(){
	var AsyncPreview = function(){
	};
	AsyncPreview.prototype = {
		preview: function(){
				$.ajax({
					type: 'post',
					url: $('form.update').attr('action'),
					data: $('form.update').serialize() + '&appendpreview=p',
					beforeSend: function(){
						$('#plugin_async_preview_view').empty().append($('<div>', {text: 'プレビューの取得中...'}));
					},
					success: function(data){
						$('#plugin_async_preview_view').empty().append($(data).find('div.body').get(0));
					},
					error: function(){
						$('#plugin_async_preview_view').empty().append($('<span>', {text: 'プレビューの読み込みに失敗しました．'}));
					}
			});
		}
	};

	var preview = new AsyncPreview();
	$('#body')
		.wrap($('<div>').attr('id', 'plugin_async_preview'))
		.before(
			$('<ul>')
				.append($('<li>', {text: '編集'}).attr({
					'id': 'plugin_async_preview_write_btn',
					'class' : 'selected'
				}).click(function(){
					if(!$(this).hasClass('selected')){
						$('#body, #plugin_async_preview_view').toggle();
						$('#plugin_async_preview_preview_btn, #plugin_async_preview_write_btn').toggleClass('selected');
					}
				}))
				.append($('<li>', {text: 'プレビュー'}).attr({
					'id': 'plugin_async_preview_preview_btn'
				}).click(function(){
					if(!$(this).hasClass('selected')){
						$('#body, #plugin_async_preview_view').toggle();
						preview.preview();
						$('#plugin_async_preview_preview_btn, #plugin_async_preview_write_btn').toggleClass('selected');
					}
				}))
		)
		.after($('<div>').attr('id', 'plugin_async_preview_view').hide());
});
