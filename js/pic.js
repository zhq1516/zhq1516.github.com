$(init)

var i=2;

$('.ui-hide').hide();

$('.ui-page2-select:eq(0)').css('background','rgb(192,192,192)');

$('.ui-page2-show').text('1');

$('.ui-page3-bar-p3').on('click',function(){$('.ui-page3-bar').eq(i).remove();i=i-1})

function init(){

	$('.ui-page1-pic').click(function(){
		$('.ui-hide').show();
	});

	$('.ui-hide').click(function(){
		$('.ui-hide').hide();
	});

	$('.ui-page2-select').click(function(){

		$('.ui-page2-select').css('background','white'),
		$(this).css('background','rgb(192,192,192)'),
		$('.ui-page2-show').text($('.ui-page2-select').index($(this))+1)
	});

	$('.ui-page3-button').click(function(){
		i=i+1;
		$('.ui-page3-p1').append("<div class='ui-page3-bar'><div class='ui-page3-bar-p1'></div><div class='ui-page3-bar-p2'></div><div class='ui-page3-bar-p3'>Delete</div></div>");
		$('.ui-page3-bar-p1').eq(i).text(i+1);
		$('.ui-page3-bar-p3').off('click');
		$('.ui-page3-bar-p3').on('click',function(){$('.ui-page3-bar').eq(i).remove();i=i-1})
	})

}

