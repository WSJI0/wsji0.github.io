AOS.init();

var sideBars=[
	{text:'홈', link:'index.html'},
	{text:'로그인', link:'login.html'},
	{text:'회원가입', link:'register.html'},
	{text:'내 정보', link:'info.html'},
	{text:'둘러보기', link:'find.html'},
	{text:'등록하기', link:'upload.html'}
];

$(".intro").animate({
  opacity: 1
},
600,
function() {
    $(".title").animate({
  		opacity: 1
	},
	500,
	function() {
    	$(".register-form").animate({
  			opacity: 1
		},
		500);
	});
});

function scrollDown(){
	$('html').stop().animate( { scrollTop : '700' },500 );
}

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
/*
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
});*/

var info_section=new Vue({
	el:'.info-section',
	data:{
		text:''
	}
});

var searchBar=document.querySelector('#search-bar');
var recommend=document.querySelector('#search-recommend');
searchBar.addEventListener("keyup", function(e) {
	if(e.target.value.length>0){
		recommend.classList.remove('invisible');
		//document.querySelector('.recommend').innerText=searchBar.value;
	}
	else{
		recommend.classList.add('invisible');
	}
});


var select_form=new Vue({
	el:'#select-form',
	data:{
		subjects:[
			{name:'웹', class:'sub1'},
			{name:'모바일', class:'sub2'},
			{name:'연구', class:'sub3'},
			{name:'Ai', class:'sub4'},
			{name:'빅데이터', class:'sub5'},
			{name:'게임', class:'sub6'},
			{name:'임베디드/IoT', class:'sub7'},
			{name:'보안', class:'sub8'},
			{name:'기타', class:'sub9'}
		],
		roles:[
			{name:'프론트엔드', class:'web-role1'},
			{name:'백엔드', class:'web-role2'},
			{name:'풀스택', class:'web-role3'},
			{name:'DB개발자', class:'web-role4'},
			{name:'서버 관리자', class:'web-role5'},
			{name:'웹 디자이너', class:'web-role6'},
			{name:'웹 퍼블리셔', class:'web-role7'},
			{name:'UI/UX', class:'web-role8'},
			{name:'기획자', class:'web-role9'}
		],
		subC:[],
		roleC:[]
	},
	computed:{
		selectedAll:function(){
			var result=[];
			result=result.concat(this.subC, this.roleC);
			return result;
		}
	}
})

function deleteTag(t){
	if(select_form.subC.indexOf(t)!=-1)
		select_form.subC.splice(select_form.subC.indexOf(t),1);
	if(select_form.roleC.indexOf(t)!=-1)
		select_form.roleC.splice(select_form.roleC.indexOf(t),1);
}