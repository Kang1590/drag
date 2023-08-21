$(document).ready(function(){	
	
	//이륙허가
	$("#rice").draggable();
	
	//착륙허가
	$("#area2").droppable({drop: function(){
			$(".arr").css("opacity" , 1 );
			$("#pop").fadeIn(); //이미지 슬라이드
		} 
	});
	
	//오른쪽 화살표
	let i = 1;
	$("#arrRight").click(function(){
		i++;
		if( i < 5){			
			$("#pop").attr("src" , "images/pop" + i + ".png");
		} else {			
			alert("마지막 페이지입니다.");
			i = 4;
		}		
	});

	//왼쪽 화살표
	$("#arrLeft").click(function(){
		i--;
		if( i > 0 ){			
			$("#pop").attr("src" , "images/pop" + i + ".png");
		} else {			
			alert("첫 페이지입니다.");
			i = 1;
		}		
	});	
	
	//기부금 적립하기 버튼 (초록버튼)
	$('img[src="images/pop1.png"]').click(function(){
		if(i == 4 ){
			$("#black").fadeIn();
		}
	});
	
	//검정 팝업모달 닫기
	$("#black>button").click(function(){
		$("#black").fadeOut();
	});
	
});////////////all end