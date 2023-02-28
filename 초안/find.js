var sideBars=[
	{text:'홈', link:'index.html'},
	{text:'로그인', link:'login.html'},
	{text:'회원가입', link:'register.html'},
	{text:'내 정보', link:'info.html'},
	{text:'둘러보기', link:'find.html'},
	{text:'등록하기', link:'upload.html'}
];



$(document).ready(function(){
	if(window.innerWidth<=960){
		$('.content-main').css('padding-left','10px')
		.css('padding-right','10px');
	}
});
$(window).resize(function(){
	if(window.innerWidth<=960){
		$('.content-main').css('padding-left','10px')
		.css('padding-right','10px');
	}else{
		$('.content-main').css('padding-left','450px')
		.css('padding-right','400px');
	}
});

function toggleMenu(){
	var sideBar=$("#side-bar");
	if(sideBar.hasClass("open")){
		sideBar.animate({width:'280px', 'padding-left':'10px', 'padding-right':'10px'},450);
	}else{
		sideBar.animate({width:'0px', 'padding-left':'0px', 'padding-right':'0px'},450);
	}
	sideBar.toggleClass('open');
}

var side_bar=new Vue({
	el:'#side-bar',
	data:{
		sideBar:sideBars
	}
})

$(function(){
	$('#select-subject').on('mousewheel', function(e){
		var left=$(this).scrollLeft();
		var scollSize=(e.originalEvent.wheelDelta>0? -100:100);
		$('#select-subject').scrollLeft(left+scollSize);
    	e.preventDefault();
	});
});
$(function(){
	$('#select-subject-detail').on('mousewheel', function(e){
		var left=$(this).scrollLeft();
		var scollSize=(e.originalEvent.wheelDelta>0? -100:100);
		$('#select-subject-detail').scrollLeft(left+scollSize);
    	e.preventDefault();
	});
});
$('#select-subject-detail').css('display','none');
function selectSubject(sub){
	if(sub=="공학"){
		$('#select-subject-detail').toggleClass('show');
	}
	if($('#select-subject-detail').hasClass("show")){
		//$('#select-subject-detail').animate({display:'block', margin-top:'50px'},250);
	}else{
		//$('#select-subject-detail').animate({display:'none', margin-top:'50px;'},250);
	}
}

var select_subject=new Vue({
	el:'#select-subject',
	data:{
		subjects:[
			{subjectName:'subject-lit', subjectImage:'img/lit.png', subjectFullName:'인문'},
			{subjectName:'subject-eng', subjectImage:'img/eng.png', subjectFullName:'공학'},
			{subjectName:'subject-sci', subjectImage:'img/sci.png', subjectFullName:'과학'},
			{subjectName:'subject-art', subjectImage:'img/art.png', subjectFullName:'디자인'},
			{subjectName:'subject-mus', subjectImage:'img/mus.png', subjectFullName:'음악'},
			{subjectName:'subject-ide', subjectImage:'img/ide.png', subjectFullName:'기획/아이디어'},
			{subjectName:'subject-mar', subjectImage:'img/mar.png', subjectFullName:'광고/마케팅'},
			{subjectName:'subject-vol', subjectImage:'img/vol.png', subjectFullName:'봉사'},
			{subjectName:'subject-oth', subjectImage:'img/oth.png', subjectFullName:'기타'}
		]
	}
});

var select_subject_detail=new Vue({
	el:'#select-subject-detail',
	data:{
		subjects:[
			{subjectName:'subject-eng', subjectImage:'img/eng_arc.png', subjectFullName:'건축'},
			{subjectName:'subject-eng', subjectImage:'img/eng_com.png', subjectFullName:'컴퓨터'},
			{subjectName:'subject-eng', subjectImage:'img/eng_mec.png', subjectFullName:'기계'},
			{subjectName:'subject-eng', subjectImage:'img/eng_ele.png', subjectFullName:'전기'},
			{subjectName:'subject-eng', subjectImage:'img/eng_env.png', subjectFullName:'환경'},
			{subjectName:'subject-eng', subjectImage:'img/eng_med.png', subjectFullName:'의료'},
			{subjectName:'subject-eng', subjectImage:'img/oth.png', subjectFullName:'기타'}
		]
	}
});