function setLocale(lang) {
	if (lang=="id") {
		$("#searchRegion").attr("placeholder",lang_id.search);
		$("#explan").attr("href",lang_id.explan);
		$("#home").html(lang_id.home);
		$("#grid").html(lang_id.grid);
		$("#map").html(lang_id.map);
		$("#about").html(lang_id.about);
		$("#prev").html(lang_id.prev);
		$("#next").html(lang_id.next);
	}else {
		$("#searchRegion").attr("placeholder",lang_en.search);
		$("#explan").attr("href",lang_en.explan);
		$("#home").html(lang_en.home);
		$("#grid").html(lang_en.grid);
		$("#map").html(lang_en.map);
		$("#about").html(lang_en.about);
		$("#prev").html(lang_en.prev);
		$("#next").html(lang_en.next);
	}
}
