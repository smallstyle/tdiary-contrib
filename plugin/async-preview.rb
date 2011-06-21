enable_js( "async-preview.js" )

add_header_proc do
	<<-STYLE
<style>
#plugin_async_preview > ul {
	list-style: none;
	margin: 0 0 5px 0;
	font-size: 90%;
	font-weight: bold;
}
#plugin_async_preview > ul li {
	display: inline-block;
	padding: 2px 8px;
	margin-right: 3px;
	border: 1px solid transparent;
	cursor: pointer;
	color: #666;
}
#plugin_async_preview > ul li:hover {
	color: #333;
	background-color: #eee;
	border: 1px solid #ddd;
}
#plugin_async_preview > ul li.selected {
	color: #333;
	background-color: #eee;
	border-color: #bbb;
	border-right-color: #ddd;
	border-bottom-color: #ddd;
}
</style>
	STYLE
end
