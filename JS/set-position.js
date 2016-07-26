/**
 * Created by hp on 2016/7/10.
 */
$(document).ready(function(){
    var w=document.documentElement.clientWidth;
    var imgwidth = (w*0.63-22)+"px";
    $(".work-img").css("width",imgwidth);
	setH();
	$(".st-container>input").click(function(){
		setH();
	});
});

function setH(){
		var curpage = "#st-panel-"+$("input[name='radio-set']:checked").attr('data-page');
		var pheight = $(curpage).height();
		var ftop = pheight + 300;
		$(".st-scroll").css("height",pheight+30);
		$(".foot").css("top",ftop);
		$("body").height(ftop+$(".foot").height());
}