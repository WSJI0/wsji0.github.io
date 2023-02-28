var sideBars=[
	{text:'홈', link:'index.html'},
	{text:'로그인', link:'login.html'},
	{text:'회원가입', link:'register.html'},
	{text:'내 정보', link:'info.html'},
	{text:'둘러보기', link:'find.html'},
	{text:'등록하기', link:'upload.html'}
];

var contests=[
	{name:"일자리 창출 사업 아이디어 공모전", image:"in1.png", date:"20XX.XX.XX ~ 20XX.XX.XX", place:"금융노사"},
	{name:"지진 바로알기! 영상 공모전", image:"in2.png", date:"20XX.XX.XX ~ 20XX.XX.XX", place:"기상청"}
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
		$('.content-main').css('padding-left','250px')
		.css('padding-right','250px');
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

var contest=new Vue({
	el:'#contest-info',
	data:{
		contest:contests
	}
})