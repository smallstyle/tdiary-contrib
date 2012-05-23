if /\A(form|edit|preview|showcomment)\z/ === @mode
	enable_js( 'category_autocomplete.js' )
	add_js_setting( '$tDiary.plugin.category_autocomplete' )
	add_js_setting( '$tDiary.plugin.category_autocomplete.label', %Q|'#{@category_conf_label}'| )
	add_js_setting( '$tDiary.plugin.category_autocomplete.available_categories', %Q|["#{@categories.sort_by{|e| e.downcase}.join('","')}"]| )
end
