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
                <a href="/waimai" class="wm-logo">石景山外卖</a>
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
                <a href="<?php echo U('User/address');?>" class="nav-item-link">我的订单</a>
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
                <div id="login_user_info" style="display:none;"></div>
                <div id="logout_user_info">
                    <ul class="logout_info">
                        <li>
                            <a id="login" href="javascript:void(0);" >&nbsp;登录</a>
                        </li>
                        <li>
                            <a id="logout_user_register" href="https://passport.baidu.com/v2/?reg&amp;regType=1&amp;tpl=ma" target="_blank">注册</a>
                        </li>
                    </ul>
                </div>
            </div>
            <script type="text/javascript" src="/sjswaimai/Public/js/d72620c3622f409cbbaf5128c91f3772.js"></script>
        </div>
    </header>

<!DOCTYPE html>
<!-- saved from url=(0053)http://waimai.baidu.com/waimai?qt=orderlist&type=wait -->
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


<script type="text/javascript" src="/sjswaimai/Public//uni_armorwidget_wrapper.js"></script>

<script type="text/javascript" src="/sjswaimai/Public/jquery-3.1.0.js"></script>



<title>石景山外卖</title>

<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/main_5d1e2f0.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/common_12dc87d.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/landing_dc1f971.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/menu_4e4a7c2.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/order_23df2f5.css">
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/user/usercenter_1e040d1.css">

<style type="text/css">
	.usercenter-detail .summary{
		height: 50px;
	}
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
<div id="menu-address" class="selected">
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
<div id="menu-account">
<span class="menu-icon account-icon"></span>
<a href="<?php echo U('User/setting');?>" class="menu-title account"><span>账户设置</span></a>
</div>
</div>
</div>
</div>
</section>

<section class="usercenter-detail" id="usercenter-address">
<div class="summary">
<h3 class="summary-header">送餐地址</h3>
</div>

<div class="content">
	
<ul class="addr-list" data-node="addrList">
	
		<?php if(is_array($address)): $i = 0; $__LIST__ = $address;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li class="addr-item addr-add"  data-node="addrAdd" >
				<div class="summary">
					<h3><?php echo ($vo['aname']); ?><span>|</span><?php echo ($vo['telephone']); ?>
						<?php if(($vo["ifdefault"]) == "1"): ?><span style="color:#999">默认地址</span><?php endif; ?>
					</h3>
					<h4 ><?php echo ($vo['address']); ?> </h4>		

				</div>
				<div style="display:none;color:#f6c;">
			        <a >设为默认地址</a><span>|</span>
					<a >修改</a>
					</a><span>|</span>
					<a >删除</a>
				</div>
		</li><?php endforeach; endif; else: echo "" ;endif; ?>
<li class="addr-item addr-add" data-node="addrAdd" >
<a id="writeAddress"><center class="summary"><img src="/sjswaimai/Public/picture/address_add_b66a4e5.png">
<p>新增送餐地址</p></center>

</a>
</li>
</ul>
</div>
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


<div class="mod-dialog-frame" style="overflow: auto; position: fixed; left: 0px; top: 0px; right: 0px; bottom: 0px; z-index: 1000; display: none; background-color: rgba(0, 0, 0, 0.54902);">
	<div style="overflow: hidden; position: absolute; width: 560px; height: 400px; top: 137px; left: 305px; background-color: rgb(255, 255, 255);" class="mod-dialog-wrap">
		<div class="addr-detail new-address-section"> 
		   <form>        
		   	<table class="addr-table" border="0">            
		   		<tbody>
		   			<tr>                
		   				<td valign="top">
		   					<span class="l-label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span></td>               
		   					 <td>                    
		   					 	<input type="hidden" value="" name="adrr_id">                    
		   					 	<div class="form-group">                        
		   					 		<div class="input-control">                            
		   					 			<input type="text" name="user_name"  value="" class="placeholder-con" placeholder="请填写您的姓名，不能超过7个字符" pattern="[n{0,7}" required="required">                            
		   					 			<span style="color:#f6c">*</span>                        </div>                        
		   					 		                    
		   					 		</div>                    
		   					 	                
		   					</td>            
		   				</tr>            
		   				<tr>                
		   					<td valign="top"><span class="l-label">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</span>
		   					</td>                
		   					<td>                    
		   						<div class="form-group">                        
		   							<div class="input-control">                            
		   								<input type="text" name="user_phone" placeholder="11位手机号" value="" class="placeholder-con">                            
		   								<span style="color:#f6c">*</span>                        
		   							</div>                        
		   							<div class="error-msg v-hide">请填写正确的手机号</div>                    
		   						</div>                
		   					</td>            
		   				</tr>            
		   				<tr>                
		   					<td valign="top"><span class="l-label">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span></td>                
		   					<td>                    
		   						<div class="form-group">                        
		   							<div class="input-control poi_address">                            
		   								<i class="addr-icon-input"></i>                            
		   								<input type="text" name="sug_address" placeholder="请输入小区、大厦或学校" value="" class="placeholder-con poi_address">                            
		   								<span style="color:#f6c">*</span>                                                        
		   								<input type="hidden" name="hide_sug_address" value="-" class="hide_poi_address" poi_id="">                        
		   							</div>                        
		   							<div class="error-msg v-hide">请输入地址并在下拉框中进行选择</div>                       
		   							<div class="s-search-container2 mod-search-hide mod-search-container"></div>                                            
		   						</div>                
		   					</td>            
		   				</tr>            
		   				<tr>                
		   					<td valign="top"><span class="l-label">详细地址</span></td>                
		   					<td>                    
		   						<div class="form-group">                        
		   							<div class="input-control">                                                        
		   								<input type="text" name="detail_address" placeholder="请输入门牌号等详细信息" value="" class="placeholder-con">                        
		   							</div>                        
		   							<div class="error-msg v-hide">请输入门牌号等详细信息</div>                    
		   						</div>                
		   					</td>            
		   				</tr>        
		   			</tbody>
		   		</table>        
		   		<div class="form-group form-submit">            
		   			<input type="button" style="background-color:#f6c"class="saveBtn" data-node="saveBtn" value="保存">                            
		   			<input type="button" class="escBtn versa" value="取消">                    
		   		</div>    
		   	</form>
		   </div>
		</div>
	</div>
<script type="text/javascript">
	$('#writeAddress').click(function(){
		$('.mod-dialog-frame')[0].style.display="block";
	})
	$('input[value=取消]').click(function(){
		$('.mod-dialog-frame')[0].style.display="none";
	})
	

			$('.addr-item').mouseover(function(){
				$(this).children()[1].style.display="block";

			})
			$('.addr-item').mouseout(function(){
				$(this).children()[1].style.display="none";
			})

			
</script>

</body></html>