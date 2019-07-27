// ����ͼ�� �Ѽ����� www.lanrentuku.com
$(function(){
	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a title=\"���߿ͷ�\" onClick=\"window.open(\'/Contact.html\', \'_blank\', \'toolbar=no,scrollbars=yes,menubar=no,status=no,resizable=yes,location=no,width=780,height=550,top=100,left=200\');return false;\" class=\"btn btn-qq\"></a><div id=\"izl_rmenu1\" class=\"izl-rmenu1\"><a title=\"΢����ѯ\" href=\"/\" target=\"_blank\" class=\"btn btn-wx\"><img class=\"pic\" src=\"/img/wx.jpg\"/></a><a title=\"�绰��ѯ\" href=\"/ping.html\" target=\"_blank\"><div class=\"btn btn-phone\"><di130-7223-0298ne\">Tel:151-2267-5404</div></div></a><div class=\"btn btn-top\"></div></div>";
	$("#top").html(tophtml);
	$("#izl_rmenu").each(function(){
		$(this).find(".btn-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btn-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btn-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("fast");
		});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").slideDown();
			}else{
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});
var _hmt = _hmt || []; (function() { var hm = document.createElement("script"); hm.src = "https://hm.baidu.com/hm.js?232a8eb7fde0d11286287422599bedb2"; 
var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); })(); 

document.writeln("<form method=\"post\" action=\"/guest/?action=save\"><div class=\"quikPub\" id=\"gg\" style=\"right: -1903px;\"><a class=\"pubClose\" href=\"#\"></a><SPAN>����仧ָ������&n130-7223-0298�ѯ:151-2267-5404&nbsp;&nbsp;����ԤԼ:</SPAN><input class=\"guestinput\" type=\"text\" name=\"yourname\" onFocus=\"if (value ==\'��������\'){value =\'\'}\" onBlur=\"if (value ==\'\'){value=\'��������\'}\" value=\"��������\"><input class=\"guestinput\" type=\"text\" name=\"phone\" onFocus=\"if (value ==\'��ϵ�绰\'){value =\'\'}\" onBlur=\"if (value ==\'\'){value=\'��ϵ�绰\'}\" value=\"��ϵ�绰\"> <button>�� ��</button>");
document.writeln("</div>");
document.writeln("<a class=\"quikPubB\" style=\"right: 0px;\" href=\"#\"></a></form>");
$(function(){

	$('.onlineService .ico_pp').hover(function(){
		$(this).stop().animate({width:'132px'},'fast');
		},function(){
		$(this).stop().animate({width:'47px'},'fast');
		}
	);
	$('.onlineService .ico_gt').hover(function(){
		$(this).stop().animate({width:'132px'},'fast');
		},function(){
		$(this).stop().animate({width:'47px'},'fast');
		}
	);
	
	$('.ico_gt').click(function(){
		$("html, body").animate({scrollTop:0}, 1);
	})
	
	
	//�ֱ���
	if ( $(window).width()<1200 || screen.width<1200) 
    { 
    	$('.hydp950,.w_950,.sdmain,.main').css('overflow','hidden');
		$('.top_bg').css({'overflow':'hidden','width':'950px','margin':'0 auto'});
		$('.db_bg2').addClass('db_bg2_s');
		$('.jstd_c .bg_l,.jstd_c .bg_r').css('display','none');
		$('#js_play .prev').css('left','0');
		$('#js_play .next').css('right','0');
		$('#videoplay .prev, #videoplay2 .prev').addClass('prev_s');
		$('#videoplay .next, #videoplay2 .next').addClass('next_s');
    }else{
    	$('.hydp950,.w_950,.sdmain,.main').removeAttr('style');
		$('.top_bg').removeAttr('style');
		$('.db_bg2').removeClass('db_bg2_s');
		$('.jstd_c .bg_l,.jstd_c .bg_r').removeAttr('style');
		$('#js_play .prev').removeAttr('style');
		$('#js_play .next').removeAttr('style');
		$('#videoplay .prev, #videoplay2 .prev').removeClass('prev_s');
		$('#videoplay .next, #videoplay2 .next').removeClass('next_s');
    }

});

    $(function($) {
        var quikPubWid = $('div.quikPub').width();
        var quikPubBWid = $('a.quikPubB').width();
        $('div.quikPub').css('right', -quikPubWid);
        $('a.quikPubB').css('right', -quikPubBWid);
        $('a.pubClose').click(function(event) {
            $('div.quikPub').animate({
                right: -quikPubWid
            }, 'fast');
            $('a.quikPubB').animate({
                right: 0
            }, 'fast');
            return false;
        });
        $('a.quikPubB').click(function(event) {
            $(this).animate({
                right: -quikPubBWid
            }, 'fast');
            $('div.quikPub').animate({
                right: 0
            }, 'fast');
            return false;
        });
        var kg = true;
        $(window).scroll(function(event) {
            var scrolltop = $(window).scrollTop();
            var bannerTop;
            if ($('#banner').length > 0) {
                bannerTop = $('#banner').offset().top;
            } else {
                bannerTop = 0;
            }
            if (kg && scrolltop > bannerTop) {
                $('div.quikPub').animate({
                    right: 0
                }, 'fast');
                kg = false;
            }
        });
    });