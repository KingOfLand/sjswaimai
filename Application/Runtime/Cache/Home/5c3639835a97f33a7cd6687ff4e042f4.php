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
                <a href="<?php echo U('User/order');?>" class="nav-item-link">我的订单</a>
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
                        console.log(succ);
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
    </script>

<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css3/menucommon_1f2eceb.css"/>
<link rel="stylesheet" type="text/css" href="/sjswaimai/Public/css3/menu_934e59e.css"/>
<body>
<div id="content" class="clearfix">
    <div class="main">
        <section class="breadcrumb">
            <a href="/waimai">首页</a>
            <i>></i>
            <span>国都烤鸭</span>
        </section>
        <section class="basicinfo">
            <div class="b-img fl">
                <img width="198" height="120" src="/sjswaimai/Public/picture/kaoya.jpg"  onerror="this.src='/static/waimai//sjswaimai/Public/images/forapp/shopcard_loading.png'"/>
            </div>
            <div class="b-info fl">
                <div class="one-line">
                    <h2>国都烤鸭</h2>
                </div>
                <div class="all-show">
                    <h2>国都烤鸭</h2>
                </div>
                <span class="cert-icon"><img src="/sjswaimai/Public/picture/certificated_s.png"/></span>
                <dl>
                    <dt>餐饮</dt>
                    <dd class="rate-con">
                        <span class="rate">
                            <span class="rate-inner" style="width:0px"></span>
                        </span>
                    </dd>
                </dl>
                <dl>
                    <dt><i class="icon icon-time"></i>接单时间:&nbsp;</dt>
                    <dd class="bussinessStatus">
                        <span>09:00-23:59</span>
                        <strong class="doing">营业中</strong>
                    </dd>
                </dl>
                <dl>
                    <dt><i class="icon icon-address"></i>商户地址:&nbsp;</dt>
                    <dd>高碑店乡高碑店村医药物流区1525号6-2号楼105室</dd>
                </dl>
                <div class="overall">
                    <h3 class="title">总体评分</h3>
                    <div class="rate-info">
                        <p class="pos"><span>评价人数不足</span></p>
                    </div>
                    <table class="rate-table">
                        <tr>
                            <td width="30px">5分</td>
                            <td width="150px">
                                <span class="pnum">
                                    <span class="pnum-inner" style="width:140px"></span>
                                </span>
                            </td>
                            <td>2人</td>
                        </tr>
                        <tr>
                            <td>4分</td>
                            <td>
                                <span class="pnum">
                                    <span class="pnum-inner" style="width:0px"></span>
                                </span>
                            </td>
                            <td>0人</td>
                        </tr>
                        <tr>
                            <td>3分</td>
                            <td>
                                <span class="pnum">
                                    <span class="pnum-inner" style="width:0px"></span>
                                </span>
                            </td>
                            <td>0人</td>
                        </tr>
                        <tr>
                            <td>2分</td>
                            <td>
                                <span class="pnum">
                                    <span class="pnum-inner" style="width:0px"></span>
                                </span>
                            </td>
                            <td>0人</td>
                        </tr>
                        <tr>
                            <td>1分</td>
                            <td>
                                <span class="pnum">
                                    <span class="pnum-inner" style="width:0px"></span>
                                </span>
                            </td>
                            <td>0人</td>
                            </tr>
                    </table>
                </div>
            </div>
            <div class="b-cost fr">
                <div class="b-value">&#165;<strong class="b-num">15</strong></div>
                <p class="b-label">配送费</p>
            </div>
            <div class="b-divider fr"></div>
            <div class="b-price fr">
                <div class="b-value">&#165;<strong class="b-num">0</strong></div>
                <p class="b-label">起送价</p>
            </div>
            <div class="b-divider fr"></div>
            <div class="b-totime fr">
                <div class="b-value">
                    <strong class="b-num">1小时</strong>
                    <span class="num-unit"></span>
                </div>
                <p class="b-label">平均送达时间</p>
            </div>
        </section>

        <div class="main-l">
            <section class="menu-tab clearfix" >
                <ul>
                    <li class="txt  curr"><a href="/waimai/shop/1776708535">菜单</a></li>
                    <li class="txt "><a href="/shopui/?qt=shopcomment&shop_id=1776708535">评价</a></li>
                    <li class="txt "><a href="/shopui/shopcertificate?shop_id=1776708535">资质</a></li>
                </ul>
            </section>
            <section class="menu-filter-wrapper">
                <section class="menu-filter clearfix" >
                    <div>
                        
                        <?php if(is_array($data_title)): $i = 0; $__LIST__ = $data_title;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><a class="filter-item" category_id="1779145478" href="javascript:void(0)" data=0>
                                <span class="item-name" title="<?php echo ($vo["content"]); ?>">
                                    &nbsp;&nbsp;&nbsp;<?php echo ($vo["content"]); ?>&nbsp;&nbsp;&nbsp;
                                </span>
                                <!-- <em class="item-num">(5)</em> -->
                            </a><?php endforeach; endif; else: echo "" ;endif; ?>
                    </div>
                    <!-- <div class="bottomArr" data-node="bottomArr"></div> -->
                </section>
                <section class="menu-filter-fix clearfix hide" id="menuFilter">
                    <div class="menu-filter clearfix menu-filter-fix-list"  >
                        <div>
                            <?php if(is_array($data_title)): $i = 0; $__LIST__ = $data_title;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><a class="filter-item" category_id="1779145478" href="javascript:void(0)" data=0>
                                    <span class="item-name" title="<?php echo ($vo["content"]); ?>">
                                        &nbsp;&nbsp;&nbsp;<?php echo ($vo["content"]); ?>&nbsp;&nbsp;&nbsp;
                                    </span>
                                </a><?php endforeach; endif; else: echo "" ;endif; ?>
                        </div>
                    </div>
                </section>
            </section>
            <section class="menu-list">
                <?php if(is_array($data_title)): $i = 0; $__LIST__ = $data_title;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><div class="list-wrap" id="menu_$i" >
                        <div class="list-status">
                            <span class="title"><?php echo ($vo["content"]); ?></span>
                        </div>
                        <div class="list clearfix">
                            <ul>
                                <?php if(is_array($vo['goodsdata'])): $i = 0; $__LIST__ = $vo['goodsdata'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$voo): $mod = ($i % 2 );++$i;?><li class="list-item" data="1779167183$<?php echo ($voo["goods_name"]); ?>$4$1$1$1$8888888$$1779145478$0$1779167183" data-sid="item_1779167183"   orderlimit=""  >
                                        <figure class="headimg fl">
                                            <div class="bg-img" style="background: url(<?php echo ($voo["goods_url"]); ?>) center center no-repeat;background-size:cover;-webkit-background-size:cover;-o-background-size:cover;-moz-background-size:cover;-ms-background-size:cover;">
                                            </div>
                                        </figure>
                                        <div class="info fl">
                                            <h3   data-title="<?php echo ($voo["goods_name"]); ?>" data-content="<?php echo ($voo["goods_reminder"]); ?>"><?php echo ($voo["goods_name"]); ?></h3>
                                            <div class="info-desc">
                                                <p class="m-hot-value">
                                                    <span class="sales-count"><?php echo ($voo["recommend"]); ?>人推荐</span><span class="divider"></span>
                                                    <span class="sales-count">月售<?php echo ($voo["goods_number"]); ?>份</span>
                                                </p>
                                                <p class="m-hot-value">
                                                </p>
                                            </div>
                                            <div class="m-price"><strong>&#165;<?php echo ($voo["goods_price"]); ?></strong>
                                            </div>
                                        </div>
                                        <div class="m-sel-icon" unselectable="on">
                                            <div class="select-con">
                                                <strong class="minusfrcart" data-node="minusfrcart"></strong>
                                                <strong class="select_count">0</strong>
                                                <strong class="addtocart dishSelectElem" data-node="addtocart"></strong>
                                            </div>
                                        </div>
                                    </li><?php endforeach; endif; else: echo "" ;endif; ?>
                            </ul>
                        </div>
                    </div><?php endforeach; endif; else: echo "" ;endif; ?>
            </section>
        </div>


        <div class="side">
            <section class="menu-collect clearfix" id="widget-menu-collect" >
                <div class="collect-btn " data-node="collectBtn" from="menu">
                    <i></i>
                    <span data-node="collectTxt">收藏商户</span>
                </div>
            </section>
            <ul id="premium-notice" class="clearfix">
                <li class="premium-item pay-li">
                    <div class="premium-icon pay-max-icon">
                        <img src="/sjswaimai/Public/picture/pay_b.png" />
                    </div>
                    <span class="reduce-msg">支持在线支付</span>
                </li>
                <li class="premium-item xin-li">
                    <div class="premium-icon xin-max-icon">
                        <img src="/sjswaimai/Public/picture/xin_b.png" />
                    </div>
                    <span class="reduce-msg">(手机app专享)新用户在线支付立减24元，使用百度钱包立减34元</span>
                </li>
                <li class="premium-item jian-li">
                    <div class="premium-icon jian-max-icon">
                        <img src="/sjswaimai/Public/picture/jian_b.png" />
                    </div>
                    <span class="reduce-msg">在线支付满100元减30元,满150元减40元,满200元减60元</span>
                </li>
                <li class="premium-item mian-li">
                    <div class="premium-icon mian-max-icon">
                        <img src="/sjswaimai/Public/picture/mian_b.png" />
                    </div>
                    <span class="reduce-msg">下单满300免配送费</span>
                </li>
                <li class="premium-item certification-li">
                    <div class="premium-icon certification-max-icon">
                        <img src="/sjswaimai/Public/picture/certification_b.png" />
                    </div>
                    <span class="reduce-msg">资质证照</span>
                </li>
                <li class="premium-item coupon-li">
                    <div class="premium-icon coupon-max-icon">
                        <img src="/sjswaimai/Public/picture/coupon_b.png" />
                    </div>
                    <span class="reduce-msg">(手机app专享)支持使用代金券抵付现金</span>
                </li>
            </ul>
            <section id="shop-notice" class="notice clearfix">
                <p class="warp"></p>
                    <h2>商家公告</h2>
                <p  class="notice-desc" data-node="shop-notice">
                </p>
                <textarea data-node="hiddenText" style="display:none">本店欢迎您下单，用餐高峰请提前下单，谢谢！</textarea>
            </section>
            <section  class="notice-float" style="display:none">
                <p class="warp"></p>
                    <h2>商家公告</h2>
                <p  class="notice-desc" data-node="shop-notice-2">
                </p>
            </section>
            <div class="map">
                <div id="MapHolder" class="mapHolder" ></div>
                <div id="mapLoading"><img src="/sjswaimai/Public/picture/loading_50c5e3e.gif"></div>
            </div>
            <section node-data="sourceinfo" class="sourceinfo-mode">
                <div>
                    <p class="icon_infop">配送服务由<span>&nbsp;国都烤鸭&nbsp;</span>提供</p>
                </div>
            </section>
            <section id="fill_diff-section" state="non-trigger">
                <div id="fill_diff_bear" status='left'></div>
                <div id="fill_diff_table"></div>
            </section>
            <section class="cart-section cart-fix"id="cart-section">
                <div class="menu-cart menu-cart-box-shadow">
                    <div class="cc-warp hide">
                        <div class="title">
                            <span class="txt">购物车</span>
                            <span class="clear-cart">清空</span>
                        </div>
                        <div class="cart-panel">
                            <table>
                            <thead class="cart-head">
                                <tr>
                                    <td class="item-name">菜品</td>
                                    <td class="item-count">份数</td>
                                    <td class="item-price">单价</td>
                                    <td class="item-delete"></td>
                                </tr>
                            </thead>
                            <tbody class="item-list" data-node="item-list">
                            </tbody>
                            </table>
                        </div>
                        <div class="tip-bar">
                        <span>优惠活动手机App专享，网页下单不再享受</span>
                        </div>
                    </div>
                    <div class="cart-bar">
                        <span class="cart-logo fl"></span>
                        <span class="cart-desc "  id="cartIsEmpty">购物车是空的</span>
                        <span class="cart-desc fl" id="cartAmout" style="display: none;"></span>
                        <span class="cart-desc cart-cha fr"  id="cartCha" style="display: none;">还差&#165;5元起送</span>
                        <span class="cart-desc submit fr" id="cartSubmit"  style="display: none;">选好了</span>
                    </div>
                </div>
            </section>
        </div>
        <div class="backtop-section" id="backtop-section">
            <div class="appdown" data-node="appdown">
                <a id="backTop" class="back-top-action v-hide" href="javascript:;"></a>
                <i data-node="appdown-img" class="appdown-img"  usemap="#planetmap" style="display:block;"></i>
                <a id="feedback" class="feedback" href="javascript:;"></a>
                <map name="planetmap" id="planetmap">
                    <area shape="rect" coords="88,35,100,45"  id="appdownClose" href="javascript:;" />
                </map>
            </div>
        </div>
    </div>

    <input type="hidden" id="bdstoken" name="bdstoken" value="5ffe1e1101edcc65b9f9bf5bd716c0c4">
    <input type="hidden" id="bindstoken" name="bindstoken" value="">
</div>

<div class="mask"></div>

<!-- </body><script type="text/javascript" src="/sjswaimai/Public/js3/main_d338062.js"></script> -->
<!-- <script type="text/javascript" src="/sjswaimai/Public/js3/lib_fcbc5e7.js"></script> -->
<!-- <script type="text/javascript" src="/sjswaimai/Public/js3/landing_cb95d02.js"></script> -->
<script type="text/javascript" src="/sjswaimai/Public/js3/menucommon_455da29.js"></script>
<script type="text/javascript" src="/sjswaimai/Public/js3/menu_bd98845.js"></script>
<script type="text/javascript">
!function(){    require('waimai:widget/landing/muti/muti.js').init();
}();
!function(){  
$(function(){
    require.async('waimai:widget/common/userinfo/UserMgr.js', function(user) {
        user.init();
    });
});
}();
!function(){    var nav = require("waimai:widget/common/nav/nav.js");
    nav.init({hashKey: null, recall_info: {"lat":null,"lng":null,"address":null}});
            nav.initSwitchaddr();
    }();
!function(){    require("waimai:widget/menu/basicinfo/basicinfo.js").init({"bussiness_status_reason":"","release_id":"1776708535","shop_logo":"http://img.waimai.baidu.com/pb/b15b90557941609798cb26192281bb698b","average_time":60,"resource_shop_id":"1776708535","logistics_id":"0","saled":99,"create_time":"1476263703","bussiness_status_msg":"","advance_need_order_day":0,"average_service_score":5,"comment_service_num":1,"average_dish_score":5,"comment_dish_num":1,"recommend_dishes":{"u70e4u9e2du5c0fu6599/u5957":1,"u79d8u5236u9165u9999u70e4u9e2d":1},"bad_dishes":"","shop_background_url":"http:\/\/waimai.baidu.com\/static\/forapp\/shop_category0.png","shop_background_category":"0","takeout_overtime_payment":"0","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u6211u603bu662fu5fc3u592au8f6fu5fc3u592au8f6fuff0cu628au6240u6709u559cu7231u7684u90fdu5206u4eabu7ed9u4f60uff1au56fdu90fdu70e4u9e2d","icon":"http://img.waimai.baidu.com/pb/b15b90557941609798cb26192281bb698b","title":"u56fdu90fdu70e4u9e2d","url":"http://waimai.baidu.com/shopui/mobile/appshare?shop_id=1776708535&type=shop"}},"status_text":"","start_time":"09:00","end_time":"01:00","start_dispatch_text":"09:00\u5f00\u59cb\u914d\u9001","baidu_support":1,"shop_id":"1776708535","shop_name":"\u56fd\u90fd\u70e4\u9e2d","logo_url":"http:\/\/img.waimai.baidu.com\/pb\/b15b90557941609798cb26192281bb698b","category":"\u9910\u996e","shop_phone":"15110099015","shop_lng":"12972317.07","shop_lat":"4824834.29","city_id":"131","bussiness_status":3,"saled_month":99,"bussiness_hours":[{"start":"09:00","end":"23:59"}],"address":"\u9ad8\u7891\u5e97\u4e61\u9ad8\u7891\u5e97\u6751\u533b\u836f\u7269\u6d41\u533a1525\u53f76-2\u53f7\u697c105\u5ba4","takeout_price":"0","takeout_cost":15,"delivery_time":60,"specialmarkchain":0,"bussiness_time":"09:00-23:59","source_info":{"source_name":"baidu","source_logo_url":"","source_url":"","source_cn_name":"u56fdu90fdu70e4u9e2d"},"score_detail":{"5":2,"1":0,"2":0,"3":0,"4":0},"average_score":5,"comment_num":2,"is_favorited":0,"front_logistics_text":"","front_logistics_type":"self","welfare_info":[{"type":"pay","msg":"u652fu6301u5728u7ebfu652fu4ed8"},{"aid":"291218","start_time":"1460995200","end_time":"1609344000","adesc":"u66f4u591au4f18u60e0u6d3bu52a8u7b49u4f60u6765~~","type":"xin","msg":"(u624bu673aappu4e13u4eab)u65b0u7528u6237u5728u7ebfu652fu4ed8u7acbu51cf24u5143uff0cu4f7fu7528u767eu5ea6u94b1u5305u7acbu51cf34u5143","smart":"1","app_zhuanxiang":0},{"aid":"972389","start_time":"1476374400","end_time":"1479052799","adesc":"u66f4u591au4f18u60e0u6d3bu52a8u7b49u4f60u6765","type":"jian","msg":"u5728u7ebfu652fu4ed8u6ee1100u5143u51cf30u5143,u6ee1150u5143u51cf40u5143,u6ee1200u5143u51cf60u5143","smart":"0","available_times":[{"start_time":"00:00:00","end_time":"23:59:59","available_day":"1,2,3,4,5","msg":"u5728u7ebfu652fu4ed8u6ee1100u5143u51cf30u5143,u6ee1150u5143u51cf40u5143,u6ee1200u5143u51cf60u5143","discount_rate":30},{"start_time":"00:00:00","end_time":"23:59:59","available_day":"6,0","msg":"u5728u7ebfu652fu4ed8u6ee1100u5143u51cf30u5143,u6ee1150u5143u51cf40u5143,u6ee1200u5143u51cf60u5143","discount_rate":30}],"msg_origin":"\u5728\u7ebf\u652f\u4ed8\u6ee1100\u5143\u51cf30\u5143,\u6ee1150\u5143\u51cf40\u5143,\u6ee1200\u5143\u51cf60\u5143","app_zhuanxiang":0},{"type":"mian","msg":"u4e0bu5355u6ee1300u514du914du9001u8d39","msg_brief":"u6ee1300u514d","app_zhuanxiang":0},{"type":"certification","msg":"u8d44u8d28u8bc1u7167"},{"type":"coupon","msg":"(u624bu673aappu4e13u4eab)u652fu6301u4f7fu7528u4ee3u91d1u5238u62b5u4ed8u73b0u91d1","app_zhuanxiang":0}],"welfare_basic_info":[{"type":"bright_kitchen","msg":"u5802u98dfu5b9eu666f"},{"type":"certification","msg":"u8d44u8d28u8bc1u7167"},{"type":"pay","msg":"u652fu6301u5728u7ebfu652fu4ed8"}],"welfare_act_info":[{"aid":"291218","start_time":"1460995200","end_time":"1609344000","adesc":"u66f4u591au4f18u60e0u6d3bu52a8u7b49u4f60u6765~~","type":"xin","msg":"(u624bu673aappu4e13u4eab)u65b0u7528u6237u5728u7ebfu652fu4ed8u7acbu51cf24u5143uff0cu4f7fu7528u767eu5ea6u94b1u5305u7acbu51cf34u5143","smart":"1","app_zhuanxiang":0},{"aid":"972389","start_time":"1476374400","end_time":"1479052799","adesc":"u66f4u591au4f18u60e0u6d3bu52a8u7b49u4f60u6765","type":"jian","msg":"u5728u7ebfu652fu4ed8u6ee1100u5143u51cf30u5143,u6ee1150u5143u51cf40u5143,u6ee1200u5143u51cf60u5143","smart":"0","available_times":[{"start_time":"00:00:00","end_time":"23:59:59","available_day":"1,2,3,4,5","msg":"u5728u7ebfu652fu4ed8u6ee1100u5143u51cf30u5143,u6ee1150u5143u51cf40u5143,u6ee1200u5143u51cf60u5143","discount_rate":30},{"start_time":"00:00:00","end_time":"23:59:59","available_day":"6,0","msg":"u5728u7ebfu652fu4ed8u6ee1100u5143u51cf30u5143,u6ee1150u5143u51cf40u5143,u6ee1200u5143u51cf60u5143","discount_rate":30}],"msg_origin":"\u5728\u7ebf\u652f\u4ed8\u6ee1100\u5143\u51cf30\u5143,\u6ee1150\u5143\u51cf40\u5143,\u6ee1200\u5143\u51cf60\u5143","app_zhuanxiang":0},{"type":"mian","msg":"u4e0bu5355u6ee1300u514du914du9001u8d39","msg_brief":"u6ee1300u514d","app_zhuanxiang":0},{"type":"coupon","msg":"(u624bu673aappu4e13u4eab)u652fu6301u4f7fu7528u4ee3u91d1u5238u62b5u4ed8u73b0u91d1","app_zhuanxiang":0}],"welfare_couponamout_info":[],"allzhe_discount_info":{"discount_percent":100,"toast_msg":"","used":0,"cart_msg":"","discount_msg":"","show_discount":0},"is_certificated":1,"discount_info":{"is_discount_send":1,"is_discount_first_order":1,"discount_send_show":"u4e0bu5355u6ee1300u514du914du9001u8d39","discount_first_order_show":"u5728u7ebfu652fu4ed8u6ee1100u5143u51cf30u5143,u6ee1150u5143u51cf40u5143,u6ee1200u5143u51cf60u5143"},"coupon_info":{"support_coupon":1,"coupon_msg":"(u624bu673aappu4e13u4eab)u652fu6301u4f7fu7528u4ee3u91d1u5238u62b5u4ed8u73b0u91d1"},"invoice_info":{"is_support_invoice":0,"support_invoice_show":""},"shop_certification_info":["http:\/\/img.waimai.baidu.com\/pb\/7a073d006680f9d8048326152affae35cb"],"shop_certification_url":"http:\/\/waimai.baidu.com\/static\/forapp\/certification.png","shop_photo_info":["http:\/\/img.waimai.baidu.com\/pb\/78d3f180eab91a20f075fdebed4d5bf385","http:\/\/img.waimai.baidu.com\/pb\/2c5f0f62711e753c9fa76d5969b5dd8fef"],"sub_title_name":"(\u624b\u673aapp\u4e13\u4eab)\u65b0\u7528\u6237\u5728\u7ebf\u652f\u4ed8\u7acb\u51cf24\u5143\uff0c\u4f7f\u7528\u767e\u5ea6\u94b1\u5305\u7acb\u51cf34\u5143;\u5728\u7ebf\u652f\u4ed8\u6ee1100\u5143\u51cf30\u5143,\u6ee1150\u5143\u51cf40\u5143,\u6ee1200\u5143\u51cf60\u5143;\u4e0b\u5355\u6ee1300\u514d\u914d\u9001\u8d39;(\u624b\u673aapp\u4e13\u4eab)\u652f\u6301\u4f7f\u7528\u4ee3\u91d1\u5238\u62b5\u4ed8\u73b0\u91d1;","is_online":1,"delivery_announcement":[],"takeout_cost_range":"\uffe515","takeout_cost_text":"","highcost_msg":"","category_flag":0,"shop_announcement":"\u672c\u5e97\u6b22\u8fce\u60a8\u4e0b\u5355\uff0c\u7528\u9910\u9ad8\u5cf0\u8bf7\u63d0\u524d\u4e0b\u5355\uff0c\u8c22\u8c22\uff01","shop_category":["\u5317\u4eac\u83dc","\u70e4\u4e32"],"is_store":0,"delivery_party":"self","takeout_box_price":"1","is_custom_catlist":0,"is_purchase_limit":0,"front_logistics_brand":{"brand":"","desc":"u5546u5bb6u63d0u4f9bu914du9001u670du52a1","tag":[],"message":"","url":"","web_url":"","icon":"http://img.waimai.baidu.com/pb/742020350b3ca86cf0d89dede4d25744ef@w_<wm[width]wm>,h_<wm[height]wm>,s_2,cf_1,l_1,q_60"},"shop_safety_url":"","is_in_region":null,"na_notice":"\u4e0b\u5355\u5fc5\u8bfb","takeout_menu":[{"data":[{"item_id":"1779167183","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u597du60f3u597du60f3~u597du60f3u597du60f3~u597du60f3u597du60f3u628au5b83u5206u4eabu7ed9u4f60uff1au8471u4e1d","icon":"http://img.waimai.baidu.com/pb/b204f0d7b7b610125596c663940645418c","title":"u8471u4e1d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779167183&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u8471\u4e1d","url":"http:\/\/img.waimai.baidu.com\/pb\/b204f0d7b7b610125596c663940645418c","origin_price":4,"current_price":4,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"9","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779164976","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u7ed9u4f60u5206u4eabu8fd9u4e48u591auff0cu4f60u6709u6ca1u6709u611fu52a8u8fc7uff1au9ec4u74dcu6761","icon":"http://img.waimai.baidu.com/pb/59894e38951596c83b7327bb2dbb8f7c7b","title":"u9ec4u74dcu6761","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779164976&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u9ec4\u74dc\u6761","url":"http:\/\/img.waimai.baidu.com\/pb\/59894e38951596c83b7327bb2dbb8f7c7b","origin_price":4,"current_price":4,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":1,"left_num":8888888,"rank":"8","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779163882","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u539fu6765u4f60u5176u4ed6u7684u90fdu4e0du60f3u8981uff0cu53eau60f3u8981u6211u6700u559cu6b22u7684uff1au9171","icon":"http://img.waimai.baidu.com/pb/a971e39e13d6827290c3abfa7d26abe8dd","title":"u9171","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779163882&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u9171","url":"http:\/\/img.waimai.baidu.com\/pb\/a971e39e13d6827290c3abfa7d26abe8dd","origin_price":6,"current_price":6,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"7","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779150869","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u5b83u5c06u662fu6240u6709u5e78u798fu7684u7406u7531uff0cforever loveuff1au9e2du997cuff0820u5f20uff09","icon":"http://img.waimai.baidu.com/pb/e956868ddee0d4410ca25b59280c438d47","title":"u9e2du997cuff0820u5f20uff09","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779150869&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u9e2d\u997c\uff0820\u5f20\uff09","url":"http:\/\/img.waimai.baidu.com\/pb\/e956868ddee0d4410ca25b59280c438d47","origin_price":10,"current_price":10,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"6","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779148175","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u7f8eu597du7684u4e8bu7269u8981u5206u4eabu7ed9u6700u7231u7684u4f60uff1au70e4u9e2du5c0fu6599/u5957","icon":"https://img.waimai.baidu.com/pb/68ef6f8131f45d8ce69557cb08f480a7fe","title":"u70e4u9e2du5c0fu6599/u5957","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779148175&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u70e4\u9e2d\u5c0f\u6599\/\u5957","url":"https:\/\/img.waimai.baidu.com\/pb\/68ef6f8131f45d8ce69557cb08f480a7fe","origin_price":18,"current_price":18,"display_desc":1,"description":"\u5305\u62ec \u997c \u9171 \u9ec4\u74dc\u6761 \u8471\u4e1d","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":3,"left_num":8888888,"rank":"5","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]}],"catalog":"\u70e4\u9e2d\u5c0f\u6599","category_id":"1779145478","dish_activity_id":0,"order_limit":0,"dish_activity_rule_form":""},{"data":[{"item_id":"1779140937","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u6211u613fu610fu4e3au4f60u5fd8u8bb0u6211u59d3u540duff0cu6211u613fu610fu628au7231u7684u5206u4eabu7ed9u4f60uff1au79d8u5236u82b1u9999u70e4u9e2d","icon":"https://img.waimai.baidu.com/pb/a26635c2e60adc0d6e55dd1e7971d939c4","title":"u79d8u5236u82b1u9999u70e4u9e2d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779140937&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u79d8\u5236\u82b1\u9999\u70e4\u9e2d","url":"https:\/\/img.waimai.baidu.com\/pb\/a26635c2e60adc0d6e55dd1e7971d939c4","origin_price":158,"current_price":158,"display_desc":1,"description":"\u7ecf\u8fc7\u814c\u5236\u5403\u7740\u6709\u70b9\u82b1\u9999\u7684\u5473\u9053\u76ae\u8089\u5206\u5f00\u5207\u7247\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779129022","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"4","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779138359","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u6211u5c31u8fd9u6837u88abu5b83u5f81u670duff0cu6240u4ee5u51b3u5b9au628au5b83u5206u4eabu7ed9u4f60uff1au79d8u5236u9165u9999u70e4u9e2d","icon":"https://img.waimai.baidu.com/pb/9829c20739bf01f367175683fd16519c6a","title":"u79d8u5236u9165u9999u70e4u9e2d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779138359&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u79d8\u5236\u9165\u9999\u70e4\u9e2d","url":"https:\/\/img.waimai.baidu.com\/pb\/9829c20739bf01f367175683fd16519c6a","origin_price":128,"current_price":128,"display_desc":1,"description":"\u7ecf\u8fc7\u814c\u5236\u76ae\u8089\u5206\u5f00\u5207\u7247\u7684\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779129022","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":5,"left_num":8888888,"rank":"2","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779134357","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u6211u603bu662fu5fc3u592au8f6fu5fc3u592au8f6fuff0cu628au6240u6709u559cu7231u7684u90fdu5206u4eabu7ed9u4f60uff1au7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","icon":"https://img.waimai.baidu.com/pb/c4e4410fde489b3d197f03e608b954d4d4","title":"u7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779134357&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u7cbe\u54c1\u70e4\u9e2d\uff08\u4e0d\u542b\u9e2d\u5934\uff09","url":"https:\/\/img.waimai.baidu.com\/pb\/c4e4410fde489b3d197f03e608b954d4d4","origin_price":98,"current_price":98,"display_desc":1,"description":"\u5317\u4eac\u6700\u4f20\u7edf\u7684\u70e4\u9e2d\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779129022","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":2,"left_num":8888888,"rank":"1","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]}],"catalog":"\u5317\u4eac\u70e4\u9e2d","category_id":"1779129022","dish_activity_id":0,"order_limit":0,"dish_activity_rule_form":""},{"data":[{"item_id":"1779148175","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u5929u5929u90fdu9700u8981u4f60u7231uff0cu4f60u7684u5fc3u601du6211u6765u731cuff0cu731cu4f60u559cu6b22uff1au70e4u9e2du5c0fu6599/u5957","icon":"https://img.waimai.baidu.com/pb/68ef6f8131f45d8ce69557cb08f480a7fe","title":"u70e4u9e2du5c0fu6599/u5957","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779148175&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u70e4\u9e2d\u5c0f\u6599\/\u5957","url":"https:\/\/img.waimai.baidu.com\/pb\/68ef6f8131f45d8ce69557cb08f480a7fe","origin_price":18,"current_price":18,"display_desc":1,"description":"\u5305\u62ec \u997c \u9171 \u9ec4\u74dc\u6761 \u8471\u4e1d","category_id":"1779128575","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":3,"left_num":8888888,"rank":"12","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779134357","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u539fu6765u4f60u5176u4ed6u7684u90fdu4e0du60f3u8981uff0cu53eau60f3u8981u6211u6700u559cu6b22u7684uff1au7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","icon":"https://img.waimai.baidu.com/pb/c4e4410fde489b3d197f03e608b954d4d4","title":"u7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779134357&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u7cbe\u54c1\u70e4\u9e2d\uff08\u4e0d\u542b\u9e2d\u5934\uff09","url":"https:\/\/img.waimai.baidu.com\/pb\/c4e4410fde489b3d197f03e608b954d4d4","origin_price":98,"current_price":98,"display_desc":1,"description":"\u5317\u4eac\u6700\u4f20\u7edf\u7684\u70e4\u9e2d\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779128575","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":2,"left_num":8888888,"rank":"11","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779138359","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u7ed9u4f60u5206u4eabu8fd9u4e48u591auff0cu4f60u6709u6ca1u6709u611fu52a8u8fc7uff1au79d8u5236u9165u9999u70e4u9e2d","icon":"https://img.waimai.baidu.com/pb/9829c20739bf01f367175683fd16519c6a","title":"u79d8u5236u9165u9999u70e4u9e2d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779138359&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u79d8\u5236\u9165\u9999\u70e4\u9e2d","url":"https:\/\/img.waimai.baidu.com\/pb\/9829c20739bf01f367175683fd16519c6a","origin_price":128,"current_price":128,"display_desc":1,"description":"\u7ecf\u8fc7\u814c\u5236\u76ae\u8089\u5206\u5f00\u5207\u7247\u7684\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779128575","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":5,"left_num":8888888,"rank":"10","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]}],"catalog":"\u70ed\u5356\u83dc\u54c1","category_id":"1779128575","dish_activity_id":0,"order_limit":0,"dish_activity_rule_form":""}],"shop_safety_info":[],"recall_info":{"lat":null,"lng":null,"address":null}});
}();
!function(){    require('waimai:widget/menu/filter/filter.js').init([{"data":[{"item_id":"1779167183","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u597du60f3u597du60f3~u597du60f3u597du60f3~u597du60f3u597du60f3u628au5b83u5206u4eabu7ed9u4f60uff1au8471u4e1d","icon":"http://img.waimai.baidu.com/pb/b204f0d7b7b610125596c663940645418c","title":"u8471u4e1d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779167183&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u8471\u4e1d","url":"http:\/\/img.waimai.baidu.com\/pb\/b204f0d7b7b610125596c663940645418c","origin_price":4,"current_price":4,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"9","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779164976","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u7ed9u4f60u5206u4eabu8fd9u4e48u591auff0cu4f60u6709u6ca1u6709u611fu52a8u8fc7uff1au9ec4u74dcu6761","icon":"http://img.waimai.baidu.com/pb/59894e38951596c83b7327bb2dbb8f7c7b","title":"u9ec4u74dcu6761","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779164976&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u9ec4\u74dc\u6761","url":"http:\/\/img.waimai.baidu.com\/pb\/59894e38951596c83b7327bb2dbb8f7c7b","origin_price":4,"current_price":4,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":1,"left_num":8888888,"rank":"8","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779163882","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u539fu6765u4f60u5176u4ed6u7684u90fdu4e0du60f3u8981uff0cu53eau60f3u8981u6211u6700u559cu6b22u7684uff1au9171","icon":"http://img.waimai.baidu.com/pb/a971e39e13d6827290c3abfa7d26abe8dd","title":"u9171","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779163882&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u9171","url":"http:\/\/img.waimai.baidu.com\/pb\/a971e39e13d6827290c3abfa7d26abe8dd","origin_price":6,"current_price":6,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"7","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779150869","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u5b83u5c06u662fu6240u6709u5e78u798fu7684u7406u7531uff0cforever loveuff1au9e2du997cuff0820u5f20uff09","icon":"http://img.waimai.baidu.com/pb/e956868ddee0d4410ca25b59280c438d47","title":"u9e2du997cuff0820u5f20uff09","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779150869&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u9e2d\u997c\uff0820\u5f20\uff09","url":"http:\/\/img.waimai.baidu.com\/pb\/e956868ddee0d4410ca25b59280c438d47","origin_price":10,"current_price":10,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"6","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779148175","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u7f8eu597du7684u4e8bu7269u8981u5206u4eabu7ed9u6700u7231u7684u4f60uff1au70e4u9e2du5c0fu6599/u5957","icon":"https://img.waimai.baidu.com/pb/68ef6f8131f45d8ce69557cb08f480a7fe","title":"u70e4u9e2du5c0fu6599/u5957","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779148175&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u70e4\u9e2d\u5c0f\u6599\/\u5957","url":"https:\/\/img.waimai.baidu.com\/pb\/68ef6f8131f45d8ce69557cb08f480a7fe","origin_price":18,"current_price":18,"display_desc":1,"description":"\u5305\u62ec \u997c \u9171 \u9ec4\u74dc\u6761 \u8471\u4e1d","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":3,"left_num":8888888,"rank":"5","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]}],"catalog":"\u70e4\u9e2d\u5c0f\u6599","category_id":"1779145478","dish_activity_id":0,"order_limit":0,"dish_activity_rule_form":""},{"data":[{"item_id":"1779140937","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u6211u613fu610fu4e3au4f60u5fd8u8bb0u6211u59d3u540duff0cu6211u613fu610fu628au7231u7684u5206u4eabu7ed9u4f60uff1au79d8u5236u82b1u9999u70e4u9e2d","icon":"https://img.waimai.baidu.com/pb/a26635c2e60adc0d6e55dd1e7971d939c4","title":"u79d8u5236u82b1u9999u70e4u9e2d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779140937&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u79d8\u5236\u82b1\u9999\u70e4\u9e2d","url":"https:\/\/img.waimai.baidu.com\/pb\/a26635c2e60adc0d6e55dd1e7971d939c4","origin_price":158,"current_price":158,"display_desc":1,"description":"\u7ecf\u8fc7\u814c\u5236\u5403\u7740\u6709\u70b9\u82b1\u9999\u7684\u5473\u9053\u76ae\u8089\u5206\u5f00\u5207\u7247\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779129022","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"4","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779138359","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u6211u5c31u8fd9u6837u88abu5b83u5f81u670duff0cu6240u4ee5u51b3u5b9au628au5b83u5206u4eabu7ed9u4f60uff1au79d8u5236u9165u9999u70e4u9e2d","icon":"https://img.waimai.baidu.com/pb/9829c20739bf01f367175683fd16519c6a","title":"u79d8u5236u9165u9999u70e4u9e2d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779138359&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u79d8\u5236\u9165\u9999\u70e4\u9e2d","url":"https:\/\/img.waimai.baidu.com\/pb\/9829c20739bf01f367175683fd16519c6a","origin_price":128,"current_price":128,"display_desc":1,"description":"\u7ecf\u8fc7\u814c\u5236\u76ae\u8089\u5206\u5f00\u5207\u7247\u7684\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779129022","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":5,"left_num":8888888,"rank":"2","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779134357","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u6211u603bu662fu5fc3u592au8f6fu5fc3u592au8f6fuff0cu628au6240u6709u559cu7231u7684u90fdu5206u4eabu7ed9u4f60uff1au7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","icon":"https://img.waimai.baidu.com/pb/c4e4410fde489b3d197f03e608b954d4d4","title":"u7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779134357&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u7cbe\u54c1\u70e4\u9e2d\uff08\u4e0d\u542b\u9e2d\u5934\uff09","url":"https:\/\/img.waimai.baidu.com\/pb\/c4e4410fde489b3d197f03e608b954d4d4","origin_price":98,"current_price":98,"display_desc":1,"description":"\u5317\u4eac\u6700\u4f20\u7edf\u7684\u70e4\u9e2d\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779129022","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":2,"left_num":8888888,"rank":"1","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]}],"catalog":"\u5317\u4eac\u70e4\u9e2d","category_id":"1779129022","dish_activity_id":0,"order_limit":0,"dish_activity_rule_form":""},{"data":[{"item_id":"1779148175","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u5929u5929u90fdu9700u8981u4f60u7231uff0cu4f60u7684u5fc3u601du6211u6765u731cuff0cu731cu4f60u559cu6b22uff1au70e4u9e2du5c0fu6599/u5957","icon":"https://img.waimai.baidu.com/pb/68ef6f8131f45d8ce69557cb08f480a7fe","title":"u70e4u9e2du5c0fu6599/u5957","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779148175&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u70e4\u9e2d\u5c0f\u6599\/\u5957","url":"https:\/\/img.waimai.baidu.com\/pb\/68ef6f8131f45d8ce69557cb08f480a7fe","origin_price":18,"current_price":18,"display_desc":1,"description":"\u5305\u62ec \u997c \u9171 \u9ec4\u74dc\u6761 \u8471\u4e1d","category_id":"1779128575","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":3,"left_num":8888888,"rank":"12","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779134357","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u539fu6765u4f60u5176u4ed6u7684u90fdu4e0du60f3u8981uff0cu53eau60f3u8981u6211u6700u559cu6b22u7684uff1au7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","icon":"https://img.waimai.baidu.com/pb/c4e4410fde489b3d197f03e608b954d4d4","title":"u7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779134357&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u7cbe\u54c1\u70e4\u9e2d\uff08\u4e0d\u542b\u9e2d\u5934\uff09","url":"https:\/\/img.waimai.baidu.com\/pb\/c4e4410fde489b3d197f03e608b954d4d4","origin_price":98,"current_price":98,"display_desc":1,"description":"\u5317\u4eac\u6700\u4f20\u7edf\u7684\u70e4\u9e2d\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779128575","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":2,"left_num":8888888,"rank":"11","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779138359","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u7ed9u4f60u5206u4eabu8fd9u4e48u591auff0cu4f60u6709u6ca1u6709u611fu52a8u8fc7uff1au79d8u5236u9165u9999u70e4u9e2d","icon":"https://img.waimai.baidu.com/pb/9829c20739bf01f367175683fd16519c6a","title":"u79d8u5236u9165u9999u70e4u9e2d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779138359&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u79d8\u5236\u9165\u9999\u70e4\u9e2d","url":"https:\/\/img.waimai.baidu.com\/pb\/9829c20739bf01f367175683fd16519c6a","origin_price":128,"current_price":128,"display_desc":1,"description":"\u7ecf\u8fc7\u814c\u5236\u76ae\u8089\u5206\u5f00\u5207\u7247\u7684\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779128575","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":5,"left_num":8888888,"rank":"10","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]}],"catalog":"\u70ed\u5356\u83dc\u54c1","category_id":"1779128575","dish_activity_id":0,"order_limit":0,"dish_activity_rule_form":""}]);
}();
!function(){    require("waimai:widget/menu/list/list.js").init();
}();
!function(){    require("waimai:widget/common/menucommon/collect/collect.js").init("1776708535","0");
}();
!function(){    require('waimai:widget/common/menucommon/notice/notice.js').init();
}();
!function(){    $(document).ready(function() {
        var script;

        window.mapInit = function () {
            $(document).trigger("map-init");
            require.async("waimai:widget/common/menucommon/map/map.js", function(SmallMap) {
                SmallMap.init("4824834.29","12972317.07");
            });
        }

        script = document.createElement("script");
        script.src = "https://api.map.baidu.com/api?v=2.0&ak=4704ca18dbdc3ec1510576ba2aa4797e&callback=mapInit&s=1";
        document.body.appendChild(script);
    });
}();
!function(){    require('waimai:widget/common/menucommon/fill_diff/fill_diff.js').init();
}();
!function(){        require("waimai:widget/common/mustbuy/mustbuy.js").init([{"data":[{"item_id":"1779167183","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u597du60f3u597du60f3~u597du60f3u597du60f3~u597du60f3u597du60f3u628au5b83u5206u4eabu7ed9u4f60uff1au8471u4e1d","icon":"http://img.waimai.baidu.com/pb/b204f0d7b7b610125596c663940645418c","title":"u8471u4e1d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779167183&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u8471\u4e1d","url":"http:\/\/img.waimai.baidu.com\/pb\/b204f0d7b7b610125596c663940645418c","origin_price":4,"current_price":4,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"9","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779164976","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u7ed9u4f60u5206u4eabu8fd9u4e48u591auff0cu4f60u6709u6ca1u6709u611fu52a8u8fc7uff1au9ec4u74dcu6761","icon":"http://img.waimai.baidu.com/pb/59894e38951596c83b7327bb2dbb8f7c7b","title":"u9ec4u74dcu6761","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779164976&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u9ec4\u74dc\u6761","url":"http:\/\/img.waimai.baidu.com\/pb\/59894e38951596c83b7327bb2dbb8f7c7b","origin_price":4,"current_price":4,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":1,"left_num":8888888,"rank":"8","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779163882","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u539fu6765u4f60u5176u4ed6u7684u90fdu4e0du60f3u8981uff0cu53eau60f3u8981u6211u6700u559cu6b22u7684uff1au9171","icon":"http://img.waimai.baidu.com/pb/a971e39e13d6827290c3abfa7d26abe8dd","title":"u9171","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779163882&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u9171","url":"http:\/\/img.waimai.baidu.com\/pb\/a971e39e13d6827290c3abfa7d26abe8dd","origin_price":6,"current_price":6,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"7","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779150869","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u5b83u5c06u662fu6240u6709u5e78u798fu7684u7406u7531uff0cforever loveuff1au9e2du997cuff0820u5f20uff09","icon":"http://img.waimai.baidu.com/pb/e956868ddee0d4410ca25b59280c438d47","title":"u9e2du997cuff0820u5f20uff09","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779150869&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u9e2d\u997c\uff0820\u5f20\uff09","url":"http:\/\/img.waimai.baidu.com\/pb\/e956868ddee0d4410ca25b59280c438d47","origin_price":10,"current_price":10,"display_desc":0,"description":"\u6e29\u99a8\u63d0\u793a\uff1a\u56fe\u7247\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b\u9ad8\u5cf0\u65f6\u6bb5\u53ca\u6076\u52a3\u5929\u6c14\uff0c\u8bf7\u63d0\u524d\u4e0b\u5355\u3002","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"6","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779148175","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u7f8eu597du7684u4e8bu7269u8981u5206u4eabu7ed9u6700u7231u7684u4f60uff1au70e4u9e2du5c0fu6599/u5957","icon":"https://img.waimai.baidu.com/pb/68ef6f8131f45d8ce69557cb08f480a7fe","title":"u70e4u9e2du5c0fu6599/u5957","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779148175&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u70e4\u9e2d\u5c0f\u6599\/\u5957","url":"https:\/\/img.waimai.baidu.com\/pb\/68ef6f8131f45d8ce69557cb08f480a7fe","origin_price":18,"current_price":18,"display_desc":1,"description":"\u5305\u62ec \u997c \u9171 \u9ec4\u74dc\u6761 \u8471\u4e1d","category_id":"1779145478","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":3,"left_num":8888888,"rank":"5","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]}],"catalog":"\u70e4\u9e2d\u5c0f\u6599","category_id":"1779145478","dish_activity_id":0,"order_limit":0,"dish_activity_rule_form":""},{"data":[{"item_id":"1779140937","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u6211u613fu610fu4e3au4f60u5fd8u8bb0u6211u59d3u540duff0cu6211u613fu610fu628au7231u7684u5206u4eabu7ed9u4f60uff1au79d8u5236u82b1u9999u70e4u9e2d","icon":"https://img.waimai.baidu.com/pb/a26635c2e60adc0d6e55dd1e7971d939c4","title":"u79d8u5236u82b1u9999u70e4u9e2d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779140937&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u79d8\u5236\u82b1\u9999\u70e4\u9e2d","url":"https:\/\/img.waimai.baidu.com\/pb\/a26635c2e60adc0d6e55dd1e7971d939c4","origin_price":158,"current_price":158,"display_desc":1,"description":"\u7ecf\u8fc7\u814c\u5236\u5403\u7740\u6709\u70b9\u82b1\u9999\u7684\u5473\u9053\u76ae\u8089\u5206\u5f00\u5207\u7247\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779129022","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":0,"left_num":8888888,"rank":"4","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779138359","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u6211u5c31u8fd9u6837u88abu5b83u5f81u670duff0cu6240u4ee5u51b3u5b9au628au5b83u5206u4eabu7ed9u4f60uff1au79d8u5236u9165u9999u70e4u9e2d","icon":"https://img.waimai.baidu.com/pb/9829c20739bf01f367175683fd16519c6a","title":"u79d8u5236u9165u9999u70e4u9e2d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779138359&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u79d8\u5236\u9165\u9999\u70e4\u9e2d","url":"https:\/\/img.waimai.baidu.com\/pb\/9829c20739bf01f367175683fd16519c6a","origin_price":128,"current_price":128,"display_desc":1,"description":"\u7ecf\u8fc7\u814c\u5236\u76ae\u8089\u5206\u5f00\u5207\u7247\u7684\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779129022","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":5,"left_num":8888888,"rank":"2","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779134357","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u6211u603bu662fu5fc3u592au8f6fu5fc3u592au8f6fuff0cu628au6240u6709u559cu7231u7684u90fdu5206u4eabu7ed9u4f60uff1au7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","icon":"https://img.waimai.baidu.com/pb/c4e4410fde489b3d197f03e608b954d4d4","title":"u7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779134357&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u7cbe\u54c1\u70e4\u9e2d\uff08\u4e0d\u542b\u9e2d\u5934\uff09","url":"https:\/\/img.waimai.baidu.com\/pb\/c4e4410fde489b3d197f03e608b954d4d4","origin_price":98,"current_price":98,"display_desc":1,"description":"\u5317\u4eac\u6700\u4f20\u7edf\u7684\u70e4\u9e2d\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779129022","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":2,"left_num":8888888,"rank":"1","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]}],"catalog":"\u5317\u4eac\u70e4\u9e2d","category_id":"1779129022","dish_activity_id":0,"order_limit":0,"dish_activity_rule_form":""},{"data":[{"item_id":"1779148175","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u5929u5929u90fdu9700u8981u4f60u7231uff0cu4f60u7684u5fc3u601du6211u6765u731cuff0cu731cu4f60u559cu6b22uff1au70e4u9e2du5c0fu6599/u5957","icon":"https://img.waimai.baidu.com/pb/68ef6f8131f45d8ce69557cb08f480a7fe","title":"u70e4u9e2du5c0fu6599/u5957","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779148175&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u70e4\u9e2d\u5c0f\u6599\/\u5957","url":"https:\/\/img.waimai.baidu.com\/pb\/68ef6f8131f45d8ce69557cb08f480a7fe","origin_price":18,"current_price":18,"display_desc":1,"description":"\u5305\u62ec \u997c \u9171 \u9ec4\u74dc\u6761 \u8471\u4e1d","category_id":"1779128575","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":3,"left_num":8888888,"rank":"12","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779134357","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u539fu6765u4f60u5176u4ed6u7684u90fdu4e0du60f3u8981uff0cu53eau60f3u8981u6211u6700u559cu6b22u7684uff1au7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","icon":"https://img.waimai.baidu.com/pb/c4e4410fde489b3d197f03e608b954d4d4","title":"u7cbeu54c1u70e4u9e2duff08u4e0du542bu9e2du5934uff09","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779134357&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u7cbe\u54c1\u70e4\u9e2d\uff08\u4e0d\u542b\u9e2d\u5934\uff09","url":"https:\/\/img.waimai.baidu.com\/pb\/c4e4410fde489b3d197f03e608b954d4d4","origin_price":98,"current_price":98,"display_desc":1,"description":"\u5317\u4eac\u6700\u4f20\u7edf\u7684\u70e4\u9e2d\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779128575","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":0,"good_comment_num":0,"bad_comment_num":0,"total_comment_num":0,"good_comment_ratio":0,"saled":2,"left_num":8888888,"rank":"11","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]},{"item_id":"1779138359","share_tip":{"channel":["1","2","3","4"],"description":"u5546u5bb6u914du9001u8303u56f4u6709u9650uff0cu5efau8baeu5206u4eabu7ed9u60a8u9644u8fd1u7684u670bu53cb","share_info":{"content":"u7ed9u4f60u5206u4eabu8fd9u4e48u591auff0cu4f60u6709u6ca1u6709u611fu52a8u8fc7uff1au79d8u5236u9165u9999u70e4u9e2d","icon":"https://img.waimai.baidu.com/pb/9829c20739bf01f367175683fd16519c6a","title":"u79d8u5236u9165u9999u70e4u9e2d","url":"http://waimai.baidu.com/shopui/mobile/appshare?dish_id=1779138359&shop_id=1776708535&type=dish"}},"other_dish_id":"","name":"\u79d8\u5236\u9165\u9999\u70e4\u9e2d","url":"https:\/\/img.waimai.baidu.com\/pb\/9829c20739bf01f367175683fd16519c6a","origin_price":128,"current_price":128,"display_desc":1,"description":"\u7ecf\u8fc7\u814c\u5236\u76ae\u8089\u5206\u5f00\u5207\u7247\u7684\u5305\u542b\u70e4\u9e2d\u5c0f\u6599","category_id":"1779128575","min_order_number":1,"packge_box_number":"1","packge_box_price":1,"on_sale":1,"dish_type":1,"have_attr":0,"dish_attr":[],"have_feature":0,"dish_features":[],"require_category_id":0,"dish_tags":[],"recommend_num":1,"good_comment_num":1,"bad_comment_num":0,"total_comment_num":1,"good_comment_ratio":"1.00","saled":5,"left_num":8888888,"rank":"10","insert_time":0,"same_open_time":"1","saled_out":1,"dish_available_tip":[],"dish_act_notice":"","dish_activity":[]}],"catalog":"\u70ed\u5356\u83dc\u54c1","category_id":"1779128575","dish_activity_id":0,"order_limit":0,"dish_activity_rule_form":""}]);
    }();
!function(){    require('waimai:widget/common/menucommon/cart/cart.js').init("1776708535");
}();
!function(){    require("waimai:widget/common/backtop/backtop.js").init();
}();
!function(){    require("waimai:page/menu.js").setCurShopInfo("1776708535","国都烤鸭","15","0","3");
    }();
!function(){require("waimai:widget/common/footer/footer.js").init();
}();
!function(){        require("wcommon:static/util/stat.js").init({
            da_trd:'waimai',
            page:'shopMenuPg'
        });
        addNStat({
            da_trd:'waimai',
            da_src:'pageBk',
            da_act:'show'
        });
    }();
!function(){        require("waimai:page/layout.js");
    }();</script>
</html>


 <footer id="baiducopy">
        <div class="footer-items">
            <div class="footer-items-snippet footer-item help">
                <h3>帮助</h3>
                <div class="text">
                    <a href="<?php echo U('Qt/contact');?>">建议与反馈</a>
                    <a href="<?php echo U('Qt/helpusage');?>">使用帮助</a>
                    <a href="<?php echo U('Qt/helpqa');?>">常见问题</a>
                    <a href="<?php echo U('Qt/agreement');?>">用户协议</a>
                    <a href="<?php echo U('Qt/rightone');?>">权利声明</a>
                </div>
            </div>
            <div class="footer-items-snippet footer-item followus">
                <h3>关注我们</h3>
                <div class="text">
                    <a href="http://tieba.baidu.com/f?kw=%B0%D9%B6%C8%CD%E2%C2%F4&fr=ala0" target="_blank">官方论坛</a>
                    <a href="http://weibo.com/waimai" target="_blank">新浪微博</a>
                    <a href="<?php echo U('Qt/about');?>" target="_blank">关于我们</a>
                    <a data-node="wechat" href="javascript:void(0);" class="wechat">微信公众号</a>
                    <a href="/waimai?qt=agreement&right=2" target="_blank">平台制度</a>
                </div>
            </div>
            <div class="footer-items-snippet footer-item">
                <h3>商务合作</h3>
                <div class="text">
                    <a href="http://waimai.baidu.com/biz" target="_blank">商户入驻</a>
                    <a href="https://waimai.baidu.com/waimai?qt=agent" target="_blank">代理商合作</a>
                </div>
            </div>
            <div class="footer-items-contact footer-item">
                <h3>
                    <img src="/sjswaimai/Public/picture/contact_25be17c.png" alt="图标">客服热线
                </h3>
                <em>400-011-7777</em>
                <div class="text no-hover">
                 <span>周一至周日9:00-22:00</span>
                </div>
            </div>
        </div>
        <p class="footer-copy">
            舌尖上的石景山科技有限公司，石景山信息科技有限公司
            <a href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action" target="_blank" style="margin-left:15px;">京ICP备xxxxxxxx-1号
            </a>
            <!-- <span>合作伙伴&nbsp;:&nbsp;</span>
            <img src="/sjswaimai/Public/picture/nuomi_logo.png" class="footer_nuomi_logo" onclick="javascript:window.location='http://www.nuomi.com/?cid=bdwm';addNStat({da_trd:'waimai',da_src:'nuomilogoBk.click',da_act:'click'});" />
            <img src="/sjswaimai/Public/picture/qianbao_logo.png" class="footer_qianbao_logo" onclick="javascript:window.location='https://www.baifubao.com?from=waimai';addNStat({da_trd:'waimai',da_src:'qianbaologoBk.click',da_act:'click'});" /> -->
        </p>
    </footer>
    <div class="mask"></div>
</body>
</html>