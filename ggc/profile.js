/*
사이드바

function toggleMenu(){
	var sideBar=$("#side-bar");
	if(sideBar.hasClass("open")){
		sideBar.animate({width:'280px', 'padding-left':'10px', 'padding-right':'10px'},450);
	}else{
		sideBar.animate({width:'0px', 'padding-left':'0px', 'padding-right':'0px'},450);
	}
	sideBar.toggleClass('open');
}

var sideBars=[
	{text:'홈', link:'index.html'},
	{text:'로그인', link:'login.html'},
	{text:'회원가입', link:'register.html'},
	{text:'내 정보', link:'info.html'},
	{text:'둘러보기', link:'find.html'},
	{text:'등록하기', link:'upload.html'}
];

var side_bar=new Vue({
	el:'#side-bar',
	data:{
		sideBar:sideBars
	}
});
*/

//스크롤 위치에 따라 헤더바 투명도가 바뀜
$(window).scroll(function(event){ 
	var scrollLocation=$('html').scrollTop();
	$('header').css('background-color','rgba(28, 28, 28, '+Math.min(1, scrollLocation*0.003)+')');
});

/*
css로 대체됨

$("#profile-img").animate({
  	opacity: 1
},300,function(){
	$("#profile-header").animate({
  		opacity: 1
	},200,function(){
		$("#profile-main").animate({
  			opacity: 1
		},300);
	});
});
*/

//새로운 글 작성폼에서 자유롭게 쓰는 칸의 글자 수 제한(꼭 필요한것은 아님)
$(document).ready(function(){
	$('#card-input').on('keyup', function(){
		if($('#card-input').val().length>100){
			alert("100글자를 초과할 수 없습니다.");
			$('#card-input').val($(this).val().substring(0, 100));
		}
	});
});

//세부 지역 선택(value(val)에 값을 채워야됨)
var area_detail=new Vue({
	el:'.newcard-form',
	data:{
		seoul:[
			{val:'', name:'종로구'},
			{val:'', name:'중구'},
			{val:'', name:'용산구'},
			{val:'', name:'성동구'},
			{val:'', name:'광진구'},
			{val:'', name:'동대문구'},
			{val:'', name:'중랑구'},
			{val:'', name:'성북구'},
			{val:'', name:'강북구'},
			{val:'', name:'도봉구'},
			{val:'', name:'노원구'},
			{val:'', name:'은평구'},
			{val:'', name:'서대문구'},
			{val:'', name:'마포구'},
			{val:'', name:'양천구'},
			{val:'', name:'강서구'},
			{val:'', name:'구로구'},
			{val:'', name:'금천구'},
			{val:'', name:'영등포구'},
			{val:'', name:'동작구'},
			{val:'', name:'관악구'},
			{val:'', name:'서초구'},
			{val:'', name:'강남구'},
			{val:'', name:'송파구'},
			{val:'', name:'강동구'}
		],
		pusan:[
			{val:'', name:'중구'},
			{val:'', name:'서구'},
			{val:'', name:'동구'},
			{val:'', name:'영도구'},
			{val:'', name:'부산진구'},
			{val:'', name:'동래구'},
			{val:'', name:'남구'},
			{val:'', name:'북구'},
			{val:'', name:'강서구'},
			{val:'', name:'해운대구'},
			{val:'', name:'사하구'},
			{val:'', name:'금정구'},
			{val:'', name:'연제구'},
			{val:'', name:'수영구'},
			{val:'', name:'사상구'},
			{val:'', name:'기장군'}
		],
		daegu:[
			{val:'', name:'중구'},
			{val:'', name:'동구'},
			{val:'', name:'서구'},
			{val:'', name:'남구'},
			{val:'', name:'북구'},
			{val:'', name:'수성구'},
			{val:'', name:'달서구'},
			{val:'', name:'달성군'}
		],
		incheon:[
			{val:'', name:'중구'},
			{val:'', name:'동구'},
			{val:'', name:'미추홀구'},
			{val:'', name:'연수구'},
			{val:'', name:'남동구'},
			{val:'', name:'부평구'},
			{val:'', name:'계양구'},
			{val:'', name:'서구'},
			{val:'', name:'강화군'},
			{val:'', name:'옹진군'}
		],
		gwangju:[
			{val:'', name:'동구'},
			{val:'', name:'서구'},
			{val:'', name:'남구'},
			{val:'', name:'북구'},
			{val:'', name:'광산구'}
		],
		daejeon:[
			{val:'', name:'동구'},
			{val:'', name:'중구'},
			{val:'', name:'서구'},
			{val:'', name:'유성구'},
			{val:'', name:'대덕구'}
		],
		ulsan:[
			{val:'', name:'중구'},
			{val:'', name:'남구'},
			{val:'', name:'동구'},
			{val:'', name:'북구'},
			{val:'', name:'울주군'}
		],
		sejong:[
			{val:'', name:'조치원읍'},
			{val:'', name:'연기면'},
			{val:'', name:'연동면'},
			{val:'', name:'부강면'},
			{val:'', name:'금남면'},
			{val:'', name:'장군면'},
			{val:'', name:'연서면'},
			{val:'', name:'전의면'},
			{val:'', name:'전동면'},
			{val:'', name:'소정면'},
			{val:'', name:'한솔동'},
			{val:'', name:'새롬동'},
			{val:'', name:'도담동'},
			{val:'', name:'아름동'},
			{val:'', name:'종촌동'},
			{val:'', name:'고운동'},
			{val:'', name:'소담동'},
			{val:'', name:'보람동'},
			{val:'', name:'대평동'}
		],
		gyeonggi:[
			{val:'', name:'수원시'},
			{val:'', name:'고양시'},
			{val:'', name:'용인시'},
			{val:'', name:'성남시'},
			{val:'', name:'화성시'},
			{val:'', name:'부천시'},
			{val:'', name:'남양주시'},
			{val:'', name:'안산시'},
			{val:'', name:'안양시'},
			{val:'', name:'평택시'},
			{val:'', name:'시흥시'},
			{val:'', name:'파주시'},
			{val:'', name:'의정부시'},
			{val:'', name:'김포시'},
			{val:'', name:'광주시'},
			{val:'', name:'광명시'},
			{val:'', name:'하남시'},
			{val:'', name:'군포시'},
			{val:'', name:'오산시'},
			{val:'', name:'양주시'},
			{val:'', name:'이천시'},
			{val:'', name:'구리시'},
			{val:'', name:'안성시'},
			{val:'', name:'의왕시'},
			{val:'', name:'포천시'},
			{val:'', name:'양평군'},
			{val:'', name:'여주시'},
			{val:'', name:'동두천시'},
			{val:'', name:'가평군'},
			{val:'', name:'과천시'},
			{val:'', name:'연천군'}
		],
		kangwon:[
			{val:'', name:'춘천시'},
			{val:'', name:'원주시'},
			{val:'', name:'강릉시'},
			{val:'', name:'동해시'},
			{val:'', name:'태백시'},
			{val:'', name:'속초시'},
			{val:'', name:'삼척시'},
			{val:'', name:'홍천군'},
			{val:'', name:'횡성군'},
			{val:'', name:'영월군'},
			{val:'', name:'평창군'},
			{val:'', name:'정선군'},
			{val:'', name:'철원군'},
			{val:'', name:'화천군'},
			{val:'', name:'양구군'},
			{val:'', name:'인제군'},
			{val:'', name:'고성군'},
			{val:'', name:'양양군'}
		],
		chungbuk:[
			{val:'', name:'청주시'},
			{val:'', name:'충주시'},
			{val:'', name:'제천시'},
			{val:'', name:'보은군'},
			{val:'', name:'옥천군'},
			{val:'', name:'영동군'},
			{val:'', name:'증평군'},
			{val:'', name:'진천군'},
			{val:'', name:'괴산군'},
			{val:'', name:'음성군'},
			{val:'', name:'단양군'}
		],
		chungnam:[
			{val:'', name:'천안시'},
			{val:'', name:'공주시'},
			{val:'', name:'보령시'},
			{val:'', name:'아산시'},
			{val:'', name:'서산시'},
			{val:'', name:'논산시'},
			{val:'', name:'계룡시'},
			{val:'', name:'당진시'},
			{val:'', name:'금산군'},
			{val:'', name:'부여군'},
			{val:'', name:'서천군'},
			{val:'', name:'청양군'},
			{val:'', name:'홍성군'},
			{val:'', name:'예산군'},
			{val:'', name:'태안군'}
		],
		gyeongbuk:[
			{val:'', name:'대구부'},
			{val:'', name:'달성군'},
			{val:'', name:'경산군'},
			{val:'', name:'영천군'},
			{val:'', name:'경주군'},
			{val:'', name:'영일군'},
			{val:'', name:'영덕군'},
			{val:'', name:'영양군'},
			{val:'', name:'청송군'},
			{val:'', name:'안동군'},
			{val:'', name:'의성군'},
			{val:'', name:'군위군'},
			{val:'', name:'칠곡군'},
			{val:'', name:'김천군'},
			{val:'', name:'상주군'},
			{val:'', name:'예천군'},
			{val:'', name:'영주군'},
			{val:'', name:'봉화군'},
			{val:'', name:'문경군'},
			{val:'', name:'성주군'},
			{val:'', name:'고령군'},
			{val:'', name:'청도군'},
			{val:'', name:'선산군'},
			{val:'', name:'울도군'}
		],
		gyeongnam:[
			{val:'', name:'부산부'},
			{val:'', name:'마산부'},
			{val:'', name:'울산군'},
			{val:'', name:'동래군'},
			{val:'', name:'창녕군'},
			{val:'', name:'사천군'},
			{val:'', name:'하동군'},
			{val:'', name:'거창군'},
			{val:'', name:'고성군'},
			{val:'', name:'통영군'},
			{val:'', name:'함양군'},
			{val:'', name:'합천군'},
			{val:'', name:'의령군'},
			{val:'', name:'함안군'},
			{val:'', name:'산청군'},
			{val:'', name:'창원군'},
			{val:'', name:'진주군'},
			{val:'', name:'김해군'},
			{val:'', name:'밀양군'},
			{val:'', name:'양산군'},
			{val:'', name:'남해군'}
		],
		jeollabuk:[
			{val:'', name:'전주시'},
			{val:'', name:'익산시'},
			{val:'', name:'군산시'},
			{val:'', name:'정읍시'},
			{val:'', name:'남원시'},
			{val:'', name:'김제시'},
			{val:'', name:'완주군'},
			{val:'', name:'고창군'},
			{val:'', name:'부안군'},
			{val:'', name:'임실군'},
			{val:'', name:'순창군'},
			{val:'', name:'진안군'},
			{val:'', name:'무주군'},
			{val:'', name:'장수군'}
		],
		jeollanam:[
			{val:'', name:'목포시'},
			{val:'', name:'여수시'},
			{val:'', name:'순천시'},
			{val:'', name:'나주시'},
			{val:'', name:'광양시'},
			{val:'', name:'담양군'},
			{val:'', name:'곡성군'},
			{val:'', name:'구례군'},
			{val:'', name:'고흥군'},
			{val:'', name:'보성군'},
			{val:'', name:'화순군'},
			{val:'', name:'장흥군'},
			{val:'', name:'강진군'},
			{val:'', name:'해남군'},
			{val:'', name:'영암군'},
			{val:'', name:'무안군'},
			{val:'', name:'함평군'},
			{val:'', name:'영광군'},
			{val:'', name:'장성군'},
			{val:'', name:'완도군'},
			{val:'', name:'진도군'},
			{val:'', name:'신안군'}
		],
		jeju:[
			{val:'', name:'제주시'},
			{val:'', name:'서귀포시'}
		],
		areaSel:'none'
	},
	computed:{
		areas:function(){
			if(this.areaSel=="seoul") return this.seoul;
			else if(this.areaSel=="pusan") return this.pusan;
			else if(this.areaSel=="daegu") return this.daegu;
			else if(this.areaSel=="incheon") return this.incheon;
			else if(this.areaSel=="gwangju") return this.gwangju;
			else if(this.areaSel=="daejeon") return this.daejeon;
			else if(this.areaSel=="ulsan") return this.ulsan;
			else if(this.areaSel=="sejong") return this.sejong;
			else if(this.areaSel=="gyeonggi") return this.gyeonggi;
			else if(this.areaSel=="kangwon") return this.kangwon;
			else if(this.areaSel=="chungbuk") return this.chungbuk;
			else if(this.areaSel=="chungnam") return this.chungnam;
			else if(this.areaSel=="jeollabuk") return this.jeollabuk;
			else if(this.areaSel=="jeollanam") return this.jeollanam;
			else if(this.areaSel=="gyeongbuk") return this.gyeongbuk;
			else if(this.areaSel=="gyeongnam") return this.gyeongnam;
			else if(this.areaSel=="jeju") return this.jeju;
		}
	}
});

//수정모드
function modifyMode(){
	$('.modify').toggleClass('hide');
	$('.modify').toggleClass('modify-background');
	$('#menu-btn-modify').toggleClass('modify-mode');
}

//글 작성
function writeMode(){
	$('.newcard').toggleClass('popup');
	$('.newcard').toggleClass('hide');
}

//글 삭제(미완성)
function deleteCard(){
	alert("delete");
}
//글 수정(미완성)
function modifyCard(){
	alert("modify");
}

//팝업 닫기
function closePopup(t){
	//if($('#card-input').val()==''){
		//t.classList.remove('popup');
		//t.classList.add('hide');
		//return 0;
	//}
	//if(confirm("입력을 취소하시겠습니까?")){
		t.classList.remove('popup');
		t.classList.add('hide');
	//}
}