<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="/sjswaimai/Public/js/uni_armorwidget_wrapper.js"></script>
    <meta charset="utf-8">
    <title>石景山外卖</title>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/main_5d1e2f0.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/common_12dc87d.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/landing_dc1f971.css"/>
    <link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/shoplist_a774a9c.css"/>

    <script type="text/javascript" src="/sjswaimai/Public/js/main_d338062.js"></script>
    <script type="text/javascript" src="/sjswaimai/Public/js/lib_fcbc5e7.js"></script>
    <script type="text/javascript" src="/sjswaimai/Public/js/landing_cb95d02.js"></script>
    <script type="text/javascript" src="/sjswaimai/Public/js/shoplist_03c450c.js"></script>
</head>
<body>
    <header class="header">
        <div class="ui-width header-wrap">
            <figure>
                <a href="<?php echo U(Index/index);?>" class="wm-logo">石景山外卖</a>
            </figure>
            <div id="nav-search-section" class="nav-search-section">
                <div class="s-first">
                <i class="addr-icon"></i>
                <input type="text" placeholder="请输入送餐地址" class="s-con"/>
                </div>
                <div class="s-second s-shoplist">
                <div class="s-citybar"></div>
                <div class="s-input">
                <input type="text" placeholder="请输入送餐地址" id="s-con" class="s-con"/>
                <img src="/sjswaimai/Public/picture/loading_min_b0eaadb.gif" class="s-loading mod-search-hide" />
                </div>
                <div class="s-search-container1"></div>
                </div>
                <div id="muti-aois">
                </div>
            </div>
            <div class="filter-search">
                <input type="text" id="f-input" class="f-input placeholder-con" placeholder="搜索商户或商品" value="">
                <a href="/waimai/shoplist/c63ab3051c9a6892" id="f-close-btn" title="重新搜索" class="f-close-btn hide">×</a>
                <button id="f-search" class="f-search"></button>
                <div class="f-search-list"></div>
            </div>
            <nav>
                <ul class="nav">
                <li class="nav-item nav-item-active" id="find">
                <a href="<?php echo U('Index/index');?>" class="nav-item-link">外卖</a>
                </li>
                <li class="nav-item " id="order">
                <a id="myorder" class="nav-item-link">我的订单</a>
                </li>
                <li class="nav-item " id="contact">
                <a href="/waimai?qt=contact" class="nav-item-link">联系我们</a>
                </li>
                <li style="display:none;" class="nav-item " id="medicine">
                <a href="/waimai?qt=medicine" class="nav-item-link">药品信息</a>
                </li>
                </ul>
            </nav>
            <div id="user_info" class="user-info-widget" style="1px solid blue;">
                <div id="login_user_info"  >
                    <ul class="login_info">
                        <li class='uname mn-lk-w'>
                            <a href="<?php echo U('User/setting');?>">
                            </a>
                            <a id="logout">注销</a>

                        </li>
                    </ul>
                </div>
                <div id="logout_user_info">
                    <ul class="logout_info">
                        <li>
                            <a id="login" href="<?php echo U('User/log');?>" >&nbsp;登录</a>
                        </li>
                        <li>
                            <a id="logout_user_register" href="<?php echo U('User/register');?>" target="_blank">注册</a>
                        </li>
                    </ul>
                </div>
            </div>
            <script type="text/javascript" src="/sjswaimai/Public/js/d72620c3622f409cbbaf5128c91f3772.js"></script>
        </div>
    </header>

    <script type="text/javascript">

        token = localStorage.getItem('token');
       data = {
            token:token
       }
        $.ajax({url:"<?php echo U('User/checklog');?>",type:'POST',data:data,success:
                function(succ){
                        result = JSON.parse(succ);
                        //console.log(succ);
                        if(result.result=='ok'){

                              $('#login_user_info')[0].style.display="block";
                              $('#login_user_info')[0].children[0].children[0].children[0].text='你好,'+result.nick;
                              $('#logout_user_info')[0].style.display="none";
                                    
                        }else{
                            $('#login_user_info')[0].style.display="none";
                              $('#logout_user_info')[0].style.display="block";
                        }
                            
                }
            })
        $('#myorder').click(function(){
            //console.log(token);
             data = {
            token:token
            }
            $.ajax({url:"<?php echo U('User/gotoinfo');?>",type:"POST",data:data,success:
                function(succ){
                    result = JSON.parse(succ);
                    if(result.result=='login'){
                        location.href = "<?php echo U('User/order');?>";
                    }else{
                        alert("请登录");
                    }
                }})
        })
        $('#logout').click(function(){
            localStorage.setItem('token','');
            SetCookie('token','');
            window.location.href="<?php echo U('User/order');?>"; 
        })
    </script>

<!DOCTYPE html>
<!-- saved from url=(0053)http://waimai.baidu.com/waimai?qt=orderlist&type=wait -->
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


<script type="text/javascript" src="/sjswaimai/Public//uni_armorwidget_wrapper.js"></script>





<title>石景山外卖</title>

<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/main_5d1e2f0.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/common_12dc87d.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/landing_dc1f971.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/menu_4e4a7c2.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/order_23df2f5.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/usercenter_1e040d1.css">
</head>
<style type="text/css">
  div h3{
  	margin: 20px 0;
  	border-left: 2px solid #f6c;
  	padding-left: 10px;

  }

</style>
<body>






<div id="content" class="clearfix" style="min-height: 36px;">
<div class="main">
<section class="order-menu">
<div class="order-menu-pos">
<div class="order-menu-header">
<span>个人中心</span>
</div>
<div class="splitter"></div>
<div class="order-menu-body">
<div class="menu-item">
<div id="menu-order" >
<span class="menu-icon order-icon"></span>
<a href="<?php echo U('User/order');?>" class="menu-title order"><span>我的订单</span></a>
</div>
</div>
<div class="menu-item">
<div id="menu-address">
<span class="menu-icon address-icon"></span>
<a href="<?php echo U('User/address');?>" class="menu-title address"><span>送餐地址</span></a>
</div>
</div>
<div class="menu-item">
<div id="menu-favorite">
<span class="menu-icon favorite-icon"></span>
<a href="<?php echo U('User/collect');?>" class="menu-title favorite"><span>收藏夹</span></a>
</div>
</div>

<div class="menu-item">
<div id="menu-left">
<span class="menu-icon left-icon"></span>
<a href="<?php echo U('User/count');?>" class="menu-title left"><span>我的余额</span></a>
</div>
</div>
<div class="menu-item">
<div id="menu-account" class="selected">
<span class="menu-icon account-icon"></span>
<a href="<?php echo U('User/setting');?>" class="menu-title account"><span>账户设置</span></a>
</div>
</div>
</div>
</div>
</section>

<section class="usercenter-detail" id="user-order"style="background-color:#fafafa">
	<div style="margin:60px 30px ; width:200px;height:220px; float:left; border:2px solid #f6c">
		<form id="uploadform" type="post" enctype="multipart/form-data">
			<img style=" margin:15px 30px ;width:140px;height:140px;" src="<?php echo ($avatar); ?>" class="" id="insertintoimage" >
			<div>
				<input name="token" type="hidden" value="<?php echo ($value); ?>">
				<input name="file" type="file" style="margin:0 30px" onchange="previewimage()">
				<a style="color:#f6c;margin:0 70px" onclick="saveadvatar()">修改头像</a>
			</div>
			
		</form>
		
	</div>
	
	<div style="margin:60px 30px ;width:200px; float:left;">
		<h3 >用户名：<span id="username"></span></h3>
		<h3 >姓名：<span id="nick"></span></h3>
		 <div id="checkname"style="visibility:hidden;color:#f6c">六个汉字以内</div>
		<h3 >联系方式：<span id="telephone"></span></h3>
		 <div id="checkphone"style="visibility:hidden; color:#f6c">请填写正确的手机号</div>
		<div class="summary">
			<div class="summary-info">
			<a class="ft-blk ft-medium header-selected" id="modifyinfo" data-type="list" data-node="summary-anchor">修改信息</a>
		</div>
	</div>
</section>

<!--[if IE]>
<style type="text/css">
	#my_addr .my_addr_edit .addr_edit_item input {
		line-height: 30px;
	}
</style>
<![endif]-->
<script type="text/javascript">
		

        token = localStorage.getItem('token');
       data = {
            token:token
       }

        $.ajax({url:"<?php echo U('User/setting_info');?>",type:'POST',data:data,success:
        	function(succ){
                     result = JSON.parse(succ);
                     console.log(result.info.id);
                     $('#username').text(result.info.uname);
                     $('#nick').text(result.info.nick);
                     $('#telephone').text(result.info.telephone);
                     $('#insertintoimage')[0].src=result.info.avatar;

                            
                }
            })
        $('#modifyinfo').click(function(){
        	if($(this).text()=='修改信息'){
        		$(this).text('保存信息');
        		nick = $('#nick').text();
        		telephone = $('#telephone').text();
        		$('#nick').html("<input type='text' placeholder='"+nick+"'>");
        		$('#telephone').html("<input type='text' placeholder='"+telephone+"'>");
        	}else{
        		
	        		nick = $('#nick').children().val();
	        		telephone = $('#telephone').children().val();
	        		if(isPhone(telephone)&&rep(nick)){
	        			$('#nick').html(nick);
	        			$('#telephone').html(telephone);
	        			$(this).text('修改信息');
	        			$('#checkphone')[0].style.visibility="hidden";
	        			$('#checkname')[0].style.visibility="hidden";
	        			data = {
	        				nick:nick,
	        				telephone:telephone,
	        				token:token
	        			}
	        			$.ajax({url:"<?php echo U('User/setting_modifyinfo');?>",type:'POST',data:data,success:
        					function(succ){
        						console.log('888');
                     			result = JSON.parse(succ);
                    			alert(result.result);
                    		}
           				 })

                        
	        		} else{
	        			if(!isPhone(telephone)){
	        				$('#checkphone')[0].style.visibility="visible";
	        			}else{
	        				$('#checkname')[0].style.visibility="visible";
	        			}
	        		}

        		}
        	})
        		

        	
        	function isPhone(name) {
	            var pattern = /^1[34578]\d{9}$/;
	            return pattern.test(name);
            }
             function rep(name) {
		 	var pattern = /^[\u4e00-\u9fa5a\w]{2,6}$/;
 			return pattern.test(name);
		}
        	
        
    	function previewimage(imgFile)
		{
				var frm = document.forms[0];
				var imgFile = frm['file'];
			    var filextension=imgFile.value.substring(imgFile.value.lastIndexOf("."),imgFile.value.length);
			    filextension=filextension.toLowerCase();
			    if ((filextension!='.jpg')&&(filextension!='.gif')&&(filextension!='.jpeg')&&(filextension!='.png')&&(filextension!='.bmp'))
			    {
			    alert("对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢 !");
			    imgFile.focus();
			    }
			    else
			    {  

	// 文件上传formData
					var frm = document.forms[0];
					console.log(frm);
			    	var formData = new FormData(frm);
			    	console.log(formData);
		 			$.ajax({  
				          url: "http://up.qiniu.com",  
				          type: 'POST', 
				          data: formData,  
				          async: true,  
				          cache: false,  
				          contentType: false,  
				          processData: false,  
				    
				          success: function (succ) {  
				              
				              console.log(succ.key);
				              newpath = 'http://oe72gh812.bkt.clouddn.com/'+succ.key;
			    				$('#insertintoimage')[0].src=newpath;
				          },  
				          error: function (returndata){  
				              alert(returndata);  
				          }  
		     		});  
			    	
			    }	
		}

		function saveadvatar(){
			 token = localStorage.getItem('token');
			data={
				newpath:newpath,
				token:token
			}
			$.ajax({url:"<?php echo U('User/saveadvatar');?>",type:'POST',data:data,success:
        	function(succ){
                    result = JSON.parse(succ);
                     console.log(succ);
                    if(result.result=='ok'){
                    	alert('修改成功');
                    }
                            
                }
            })

		}
		
</script>
<script type="text/javascript" src="/sjswaimai/Public/user/main_d338062.js"></script>
<script type="text/javascript" src="/sjswaimai/Public/user/lib_fcbc5e7.js"></script>
<script type="text/javascript" src="/sjswaimai/Public/user/landing_cb95d02.js"></script>
<script type="text/javascript" src="/sjswaimai/Public/user/menu_e669814.js"></script>
<script type="text/javascript" src="/sjswaimai/Public/user/commonDialog_4f5d8bf.js"></script>
<script type="text/javascript" src="/sjswaimai/Public/user/completeDialog_cad21c3.js"></script>
<script type="text/javascript" src="/sjswaimai/Public/user/commentDialog_6ef1148.js"></script>
<script type="text/javascript" src="/sjswaimai/Public/user/txtLinkExpand_91a8f27.js"></script>
<script type="text/javascript" src="/sjswaimai/Public/user/order_d05513d.js"></script>


</body></html>