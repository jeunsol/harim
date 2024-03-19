$(document).ready(function(){

$("#fullpage").fullpage({
	navigation:true,
	navigationPosition:"left",
	showActiveTooltip:true
});


$("#btn3").on("click",function(){
	$(this).toggleClass("change");
	$("#gnb_div").toggleClass("on");
});

$("#gnb_div").on("mouseover",function(){
	$(".dp2").stop().slideDown(300);
	$(".bg_box").stop().slideDown(300);
});

$("#gnb_div").on("mouseout",function(){
	$(".dp2").stop().slideUp(10);
	$(".bg_box").stop().slideUp(10);
});


var $slides=$("#slide-container .slide-group"); 
var total = $slides.length;
//alert(total);
var $controls; 
var current=0;
var timer; //자동실행아이디를 저장. 자동실행이 멈춰있는 상태를 0으로 정함
$slides.css("left","100%");
$slides.eq(0).css("left","0px");

//슬라이드당 컨트롤러 하나씩 만들기
for(var i=0; i<total; i++){
	$controls = $("<button class='control-btn'></button>");
	$(".control-group").append($controls);
	$(".control-btn").eq(0).addClass("active2");
}

//슬라이드 번호를 받아서 보여주는 함수
function fnMove(idx){
	$slides.eq(current).animate({
		left:"-100%" //동시에 현재 슬라이드는 왼쪽으로 이동
	},{
		duration:1000,
		start:function(){
			$slides.eq(idx).css("left","100%"); //다음번 슬라이드를 오른쪽에 준비
			$slides.eq(idx).animate({ //다음번 슬라이드를 가운데로 애니메이션
				left:"0px"
			},1000);
		}
	});
	current = idx; //현재 슬라이드 번호를 갱신
	$(".control-btn").removeClass("active2");
	$(".control-btn").eq(idx).addClass("active2");
}

//슬라이드에 번호를 주는 함수
function setSlide(){
	if(current ==2){
		fnMove(0);
	}else{
		fnMove(current+1);
	}
}

$(".control-btn").on("click",function(){
	var idx = $(this).index();
	fnMove(idx);
	fnTog();
});

timer = setInterval(setSlide,5000);


var num = 0;
var a=0;
$(".bx-prev").on("click",function(){
	if(a%2==0){
		$(".products_slide > li").eq(1).fadeOut(1000);
	}else{
		$(".products_slide > li").eq(1).fadeIn(1000);
	}
	a++;
});
$(".bx-next").on("click",function(){
	if(a%2==0){
		$(".products_slide > li").eq(1).fadeOut(1000);
	}else{
		$(".products_slide > li").eq(1).fadeIn(1000);
	}
	a++;
});
	
	
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


$(".news-slider").slick({
	autoplay:true, //자동전환여부
	dots:false, //컨트롤 버튼여부
	arrows:true, //이전이후버튼
	speed:500, //이동에 걸리는 시간
	autoplaySpeed:2000, //전환시간
	infinite:true, //무한반복여부
	vertical:true
});


});