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
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/menucommon_1f2eceb.css"/>
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css/menu_934e59e.css"/>
<style type="text/css">

</style>
</head>
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
<div id="menu-favorite" class="selected">
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
<div id="menu-account">
<span class="menu-icon account-icon"></span>
<a href="<?php echo U('User/setting');?>" class="menu-title account"><span>账户设置</span></a>
</div>
</div>
</div>
</div>
</section>

<section class="usercenter-detail" id="user-order">
	<?php if(is_array($collect)): $i = 0; $__LIST__ = $collect;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><div class="collectfunction" style="width:180px;height:280px;margin:0 9px;background-color:#fafafa;float:left;">
			
			<img style="width:180px;height:110px;"src="<?php echo ($vo["log_url"]); ?>">
			<h1 style="margin:0 10px;"><?php echo ($vo["sname"]); ?></h1>
			<center >
				<h1>
						   <?php if(($vo["star"]) == "1"): ?>&hearts;&deg;&deg;&deg;&deg;<?php endif; ?>
						   <?php if(($vo["star"]) == "2"): ?>&hearts;&hearts;&deg;&deg;&deg;<?php endif; ?>
						   <?php if(($vo["star"]) == "3"): ?>&hearts;&hearts;&hearts;&deg;&deg;<?php endif; ?>
						   <?php if(($vo["star"]) == "4"): ?>&hearts;&hearts;&hearts;&hearts;&deg;<?php endif; ?>
						   <?php if(($vo["star"]) == "5"): ?>&hearts;&hearts;&hearts;&hearts;&hearts;<?php endif; ?>
						</h1>
			</center>
						
			<h3 style="margin:12px">电话:<?php echo ($vo["telephone"]); ?></h3>
			<center>
				起送金额<span style="color:#666;font-size:24px"><?php echo ($vo["least"]); ?></span>元<br>配送费<span style="color:#666;font-size:24px"><?php echo ($vo["distribute"]); ?></span>元
			</center>
			<div class="canclecollect"style="position:relative;bottom:250px;left:110px;background:#f6c;width:60px;padding:6px;display:none;">
				<a class='deletecollect' style="color:white">取消收藏</a>
				<div style="display:none"><?php echo ($vo["collect_id"]); ?></div> 
			</div>
		</div><?php endforeach; endif; else: echo "" ;endif; ?>
	
</section>


<div class="clearfix" style="_height:0px;_overflow:hidden;"></div>
</div>
<div class="knightCover hide" data-node="knightCover"></div>
<div class="knightDisplay hide" data-node="knightDisplay" style="left: 161.5px; top: -109px;">
<div class="knightTitle">
<p>查看骑士位置</p>
<span data-node="knightClose">×</span>
</div>
<div class="knightLocationBig">
<a class="knightRefresh" data-node="knightRefresh" orderid="">刷新</a>
<div class="knightBigMap" id="knightBigMap"></div>
</div>
</div>
<!--[if IE]>
<style type="text/css">
	#my_addr .my_addr_edit .addr_edit_item input {
		line-height: 30px;
	}
</style>
<![endif]-->
<input type="hidden" id="bdstoken" name="bdstoken" value="2ecfaeee3e0b8290d57434e1189554c4">
<input type="hidden" id="bindstoken" name="bindstoken" value="6a38KT72IEzpFpikE+wlUatGbWqgK75oF69s0QWk19NeGikVUCb3orNV1JaeepecvPk8qEC/9JopELQXtRJyovJFvxEbTXkkrVdX9sUGS+tZ5C7jkHSjB481j4WUKtUpT5cjF65iyGtKRaDfjv0yr72xMPUZfoRzE9tkE3wx9lbBlhpgzOJ84O3tFv7AEqAP0O1cfz5txNoEbCzg3jAPnckGDKeSWHNOQ7mNCUZxQm9mvTp5Mc81UAF5yZOlMVIx">
</div>

<div class="mask"></div>


<script>
   ( $('.collectfunction')).mouseover(function(){
    	$(this).children().eq(5)[0].style.display='block';
    })
    $('.collectfunction').mouseout(function(){
    	$(this).children().eq(5)[0].style.display='none';
    })
    $('.deletecollect').click(function(){
    	sid=$(this).next().text();
    	data = {
    		sid:sid
    	}
    	$.ajax({url:"<?php echo U('User/delete_collect');?>",type:'POST',data:data,success:function(succ){
	            		
	                    result = JSON.parse(succ);
	                    console.log(result);
	                    if(result.result=='ok'){
	                          alert('删除成功');
	                          
	                          $(this).remove();
	                         
	                    }else{alert('删除失败！');}
	            }
	        })
    })

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