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

var select_form=new Vue({
	el:'#select-form',
	data:{
		ageCheck:[]
	},
	computed:{
		ageChecked:function(){ return this.ageCheck.sort(); },
		ageVisualized:function(){ 
			var age=this.ageChecked.sort();
			var result=[];
			if(age.indexOf("10")!=-1) {result.push({text:"10대", class:"10"});}
			if(age.indexOf("20.1")!=-1) {result.push({text:"20초", class:"20.1"});}
			if(age.indexOf("20.2")!=-1) {result.push({text:"20중", class:"20.2"});}
			if(age.indexOf("20.3")!=-1) {result.push({text:"20후", class:"20.3"});}
			if(age.indexOf("30")!=-1) {result.push({text:"30대", class:"30"});}
			if(age.indexOf("40")!=-1) {result.push({text:"40대", class:"40"});}
			return result;
		}
	}
})

function deleteTag(t){
	select_form.ageCheck.splice(select_form.ageCheck.indexOf(t),1);
}