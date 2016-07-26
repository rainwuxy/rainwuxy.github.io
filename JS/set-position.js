/**
 * Created by hp on 2016/7/10.
 */
$(document).ready(function(){
    var w=document.documentElement.clientWidth;
    imgwidth = (w*0.63-22)+"px";
	panelwidth = w*0.7;
	panelmargin = (w-panelwidth)/2;
	menuwidth=panelwidth/4;
    $(".work-img").css("width",imgwidth);
	$(".st-panel").css("width",panelwidth);
	$(".st-panel").css({"margin-left":panelmargin,"margin-right":panelmargin});
	$(".st-container>input,.st-container>a").css("width",menuwidth);
	$("#st-control-1,#st-control-1+a").css("left",w*0.15);
	$("#st-control-2,#st-control-2+a").css("left",w*0.15+menuwidth);
	$("#st-control-3,#st-control-3+a").css("left",w*0.15+menuwidth*2);
	$("#st-control-4,#st-control-4+a").css("left",w*0.15+menuwidth*3);
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