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

    <div class="tip-section">
        <div class="tip-image"></div>
        <i class="tip-close" data-node="tipClose"></i>
    </div>

    <div id="content" class="clearfix">
        <div class="main">
            <div class="filter-category clearfix">
                <div class="acrossLine"></div>
                <ul class="clearfix">
                        <li class="active" onclick="javascript:window.location='/waimai'">附近的餐厅</li>
                        <li class="supermarket "  onclick="javascript:window.location=
                        '/shopui/convenientlist?lat=4822336.04&lng =12975165.32&address=北京百度外卖'">超市购</li>
                        <li class="hide" data-node="tabPreferentialInfo">优惠信息</li>
                </ul>
            </div>
            <section id="f_panel" class="filter-section clearfix">
                <div class="filter-up clearfix">
                    <ul class="filter-cates clearfix">
                        <li class="cate-item  item-index-0" data-id="0" data-name="全部" nstat="ready|{da_src:cateBk.0}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-all" style="background-image:url(/sjswaimai/Public/images/3acd33ada9ef45d69b564ec874c47e49.gif);"></div>
                            <div class="img-show cate-hover cate-hover-all" style="background-image:url(/sjswaimai/Public/images/3acd33ada9ef45d69b564ec874c47e49.gif);"></div>
                            </div>
                            <div class="item-text">全部</div>
                        </li>
                        <li class="cate-item  item-index-1" data-id="9" data-name="新店特惠" nstat="ready|{da_src:cateBk.9}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-新店特惠" style="background-image:url(/sjswaimai/Public/images/fb569c87d72f4c7fbfaae16f4158a257.gif);"></div>
                            <div class="img-show cate-hover cate-hover-新店特惠" style="background-image:url(/sjswaimai/Public/images/fb569c87d72f4c7fbfaae16f4158a257.gif);"></div>
                            </div>
                            <div class="item-text">新店特惠</div>
                        </li>
                        <li class="cate-item  item-index-2" data-id="16" data-name="品牌连锁" nstat="ready|{da_src:cateBk.16}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-品牌连锁" style="background-image:url(/sjswaimai/Public/images/9fce508f948b4cf9a785ccb5aa9024f8.gif);"></div>
                            <div class="img-show cate-hover cate-hover-品牌连锁" style="background-image:url(/sjswaimai/Public/images/9fce508f948b4cf9a785ccb5aa9024f8.gif);"></div>
                            </div>
                            <div class="item-text">品牌连锁</div>
                        </li>
                        <li class="cate-item  item-index-3" data-id="17" data-name="小吃快餐" nstat="ready|{da_src:cateBk.17}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-小吃快餐" style="background-image:url(/sjswaimai/Public/images/f328c7bb9fee4198a22e78694eae292a.gif);"></div>
                            <div class="img-show cate-hover cate-hover-小吃快餐" style="background-image:url(/sjswaimai/Public/images/f328c7bb9fee4198a22e78694eae292a.gif);"></div>
                            </div>
                            <div class="item-text">小吃快餐</div>
                        </li>
                        <li class="cate-item  item-index-4" data-id="24" data-name="地方菜" nstat="ready|{da_src:cateBk.24}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-地方菜" style="background-image:url(/sjswaimai/Public/images/49298b7ec8284017ac2fa9951775edc9.gif);"></div>
                            <div class="img-show cate-hover cate-hover-地方菜" style="background-image:url(/sjswaimai/Public/images/49298b7ec8284017ac2fa9951775edc9.gif);"></div>
                            </div>
                            <div class="item-text">地方菜</div>
                        </li>
                        <li class="cate-item  item-index-5" data-id="22" data-name="西式快餐" nstat="ready|{da_src:cateBk.22}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-西式快餐" style="background-image:url(/sjswaimai/Public/images/80274f83ac9f415dbcf41cba6b5e19ef.gif);"></div>
                            <div class="img-show cate-hover cate-hover-西式快餐" style="background-image:url(/sjswaimai/Public/images/80274f83ac9f415dbcf41cba6b5e19ef.gif);"></div>
                            </div>
                            <div class="item-text">西式快餐</div>
                        </li>
                        <li class="cate-item  item-index-6" data-id="121" data-name="异国风味" nstat="ready|{da_src:cateBk.121}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-异国风味" style="background-image:url(/sjswaimai/Public/images/7eedf30a2fa6453cb240dcc747622e6c.gif);"></div>
                            <div class="img-show cate-hover cate-hover-异国风味" style="background-image:url(/sjswaimai/Public/images/7eedf30a2fa6453cb240dcc747622e6c.gif);"></div>
                            </div>
                            <div class="item-text">异国风味</div>
                        </li>
                        <li class="cate-item  item-index-7" data-id="68" data-name="中式正餐" nstat="ready|{da_src:cateBk.68}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-中式正餐" style="background-image:url(/sjswaimai/Public/images/f349098a8372467aa6a7dad508ab49bb.gif);"></div>
                            <div class="img-show cate-hover cate-hover-中式正餐" style="background-image:url(/sjswaimai/Public/images/f349098a8372467aa6a7dad508ab49bb.gif);"></div>
                            </div>
                            <div class="item-text">中式正餐</div>
                        </li>
                        <li class="cate-item  item-index-8" data-id="23" data-name="烧烤海鲜" nstat="ready|{da_src:cateBk.23}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-烧烤海鲜" style="background-image:url(/sjswaimai/Public/images/485a2d7424ed4d2caaf8927c2ba7f109.gif);"></div>
                            <div class="img-show cate-hover cate-hover-烧烤海鲜" style="background-image:url(/sjswaimai/Public/images/485a2d7424ed4d2caaf8927c2ba7f109.gif);"></div>
                            </div>
                            <div class="item-text">烧烤海鲜</div>
                        </li>
                        <li class="cate-item  item-index-9" data-id="104" data-name="甜点饮品" nstat="ready|{da_src:cateBk.104}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-甜点饮品" style="background-image:url(/sjswaimai/Public/images/cada5a492e744b049d3caf23d7b8fa44.gif);"></div>
                            <div class="img-show cate-hover cate-hover-甜点饮品" style="background-image:url(/sjswaimai/Public/images/cada5a492e744b049d3caf23d7b8fa44.gif);"></div>
                            </div>
                            <div class="item-text">甜点饮品</div>
                        </li>
                        <li class="cate-item  item-index-10" data-id="13" data-name="水果生鲜" nstat="ready|{da_src:cateBk.13}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-水果生鲜" style="background-image:url(/sjswaimai/Public/images/b80bd65c811f4787a8ae85bb16b23dd5.gif);"></div>
                            <div class="img-show cate-hover cate-hover-水果生鲜" style="background-image:url(/sjswaimai/Public/images/b80bd65c811f4787a8ae85bb16b23dd5.gif);"></div>
                            </div>
                            <div class="item-text">水果生鲜</div>
                        </li>
                        <li class="cate-item  item-index-11" data-id="20" data-name="下午茶" nstat="ready|{da_src:cateBk.20}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-下午茶" style="background-image:url(/sjswaimai/Public/images/cada5a492e744b049d3caf23d7b8fa44.gif);"></div>
                            <div class="img-show cate-hover cate-hover-下午茶" style="background-image:url(/sjswaimai/Public/images/cada5a492e744b049d3caf23d7b8fa44.gif);"></div>
                            </div>
                            <div class="item-text">下午茶</div>
                        </li>
                        <li class="cate-item  item-index-12" data-id="12" data-name="鲜花蛋糕" nstat="ready|{da_src:cateBk.12}">
                            <div class="item-img">
                            <div class="img-show cate-start cate-鲜花蛋糕" style="background-image:url(/sjswaimai/Public/images/a156412d2fd34178ae05ee32c7899530.gif);"></div>
                            <div class="img-show cate-hover cate-hover-鲜花蛋糕" style="background-image:url(/sjswaimai/Public/images/a156412d2fd34178ae05ee32c7899530.gif);"></div>
                            </div>
                            <div class="item-text">鲜花蛋糕</div>
                        </li>
                        <li class="cate-item  item-index-13" data-id="10" data-name="超市购" nstat="ready|{da_src:cateBk.10}">
                            <div class="item-img">
                                <div class="img-show cate-start cate-超市购" style="background-image:url(/sjswaimai/Public/images/67eb4154c14f42d281e0d4e3b655d1cf.gif);"></div>
                                <div class="img-show cate-hover cate-hover-超市购" style="background-image:url(/sjswaimai/Public/images/67eb4154c14f42d281e0d4e3b655d1cf.gif);"></div>
                                </div>
                            <div class="item-text">超市购</div>
                        </li>
                        <li class="cate-item  item-index-14" data-id="21" data-name="夜宵" nstat="ready|{da_src:cateBk.21}">
                            <div class="item-img">
                                <div class="img-show cate-start cate-夜宵" style="background-image:url(/sjswaimai/Public/images/f95c465e16b3490abdbaf651e1bdfd8f.gif);"></div>
                                <div class="img-show cate-hover cate-hover-夜宵" style="background-image:url(/sjswaimai/Public/images/f95c465e16b3490abdbaf651e1bdfd8f.gif);"></div>
                                </div>
                            <div class="item-text">夜宵</div>
                        </li>
                        <li class="cate-item  item-index-15" data-id="25" data-name="送药上门" nstat="ready|{da_src:cateBk.25}">
                            <div class="item-img">
                                <div class="img-show cate-start cate-送药上门" style="background-image:url(/sjswaimai/Public/images/f4bce6105c8248039e13ab223cdd49ad.gif);">
                                </div>
                                <div class="img-show cate-hover cate-hover-送药上门" style="background-image:url(/sjswaimai/Public/images/f4bce6105c8248039e13ab223cdd49ad.gif);"></div>
                                </div>
                            <div class="item-text">送药上门</div>
                        </li>
                        <li class="cate-item  item-index-16" data-id="28" data-name="清真" nstat="ready|{da_src:cateBk.28}">
                            <div class="item-img">
                                <div class="img-show cate-start cate-清真" style="background-image:url(/sjswaimai/Public/images/4b25f27670a94130a5dae1b44b910f72.gif);">
                                </div>
                                <div class="img-show cate-hover cate-hover-清真" style="background-image:url(/sjswaimai/Public/images/4b25f27670a94130a5dae1b44b910f72.gif);">
                                </div>
                            </div>
                            <div class="item-text">清真</div>
                        </li>
                    </ul>
                </div>

                <div class="filter-bottom clearfix" id="filter-bottom">
                    <div class="outline-left">
                        <ul class="option-left">
                            <li>
                                <span class="sort-item" data-node="" style="padding-right: 10px">默认</span></i><span class="item-interval">|</span>
                            </li>
                            <li class="item-left">
                            <span class="sort-item" data-node="month_sales">销量</span><i class="down"></i><span class="item-interval">|</span></li >
                            <li>
                            <span class="sort-item" data-node="distance">餐厅距离</span><i></i><span class="item-interval">|</span></li>
                            <li>
                            <span  class="sort-item" data-node="comment">评分</span><i class="down"></i><span class="item-interval">|</span></li>
                            <li>
                            <span class="sort-item" data-node="takeout_price">起送价</span><i></i><span class="item-interval last">|</span>
                            </li>
                            <li>
                            <span class="sort-item" data-node="dtime">送餐速度</span><i></i><span class="item-interval">|</span></li>
                        </ul>
                    </div>
                    <div class="filter-outline">
                        <ul class="filter-option" data-node="filter-cates">
                        <li class="option-item f-selected" data-msg="资质证照" data-type="certification">
                        <i></i>
                        <span>资质证照</span>
                        </li>
                        <li class="option-item" data-msg="支持在线支付" data-type="pay">
                        <i></i>
                        <span>支持在线支付</span>
                        </li>
                        <li class="option-item" data-msg="新用户立减" data-type="xin">
                        <i></i>
                        <span>新用户立减</span>
                        </li>
                        <li class="option-item" data-msg="立减优惠" data-type="jian">
                        <i></i>
                        <span>立减优惠</span>
                        </li>
                        <li class="option-item" data-msg="下单返券" data-type="fan">
                        <i></i>
                        <span>下单返券</span>
                        </li>
                        <li class="option-item" data-msg="预定优惠" data-type="preorder">
                        <i></i>
                        <span>预定优惠</span>
                        </li>
                        <li class="option-item" data-msg="特价优惠" data-type="te">
                        <i></i>
                        <span>特价优惠</span>
                        </li>
                        <li class="option-item" data-msg="进店领券" data-type="shop_coupon">
                        <i></i>
                        <span>进店领券</span>
                        </li>
                        <li class="option-item" data-msg="免配送费" data-type="mian">
                        <i></i>
                        <span>免配送费</span>
                        </li>
                        <li class="option-item" data-msg="下单满赠" data-type="zeng">
                        <i></i>
                        <span>下单满赠</span>
                        </li>
                        <li class="option-item" data-msg="支持代金券" data-type="coupon">
                        <i></i>
                        <span>支持代金券</span>
                        </li>
                        <li class="option-item" data-msg="支持开发票" data-type="invoice">
                        <i></i>
                        <span>支持开发票</span>
                        </li>
                        <li class="option-item" data-msg="百度专送" data-type="express">
                        <i></i>
                        <span>百度专送</span>
                        </li>
                        <li class="option-item" data-msg="超时赔付" data-type="overtimepayment">
                        <i></i>
                        <span>超时赔付</span>
                        </li>
                        <img class="arrow" src="/sjswaimai/Public/picture/arrow_eec16bc.png" width="10px" height="10px">
                        </ul>
                    </div>
                </div>
            </section>


            <section id="f_panelfixed" class="filterfixed-section clearfix">
                <div class="filter-bottom clearfix">
                <div class="outline-left">
                    <ul class="option-left">
                        <li>
                            <span class="sort-item" data-node="" style="padding-right: 10px">默认</span></i><span class="item-interval">|</span>
                        </li>
                        <li class="item-left">
                            <span class="sort-item" data-node="month_sales">销量</span><i class="down"></i><span class="item-interval">|</span>
                        </li>
                        <li>
                            <span class="sort-item" data-node="distance">餐厅距离</span><i></i><span class="item-interval">|</span></li>
                        <li>
                            <span  class="sort-item" data-node="comment">评分</span><i class="down"></i><span class="item-interval">|</span>
                        </li>
                        <li>
                            <span class="sort-item" data-node="takeout_price">起送价</span><i></i><span class="item-interval last">|</span>
                        </li>
                        <li>
                            <span class="sort-item" data-node="dtime">送餐速度</span><i></i><span class="item-interval">|</span>
                        </li>
                    </ul>
                </div>
                <div class="filter-outline">
                    <ul class="filter-option" data-node="filter-cates">
                    <li class="option-item f-selected" data-msg="资质证照" data-type="certification">
                    <i></i>
                    <span>资质证照</span>
                    </li>
                    <li class="option-item" data-msg="支持在线支付" data-type="pay">
                    <i></i>
                    <span>支持在线支付</span>
                    </li>
                    <li class="option-item" data-msg="新用户立减" data-type="xin">
                    <i></i>
                    <span>新用户立减</span>
                    </li>
                    <li class="option-item" data-msg="立减优惠" data-type="jian">
                    <i></i>
                    <span>立减优惠</span>
                    </li>
                    <li class="option-item" data-msg="下单返券" data-type="fan">
                    <i></i>
                    <span>下单返券</span>
                    </li>
                    <li class="option-item" data-msg="预定优惠" data-type="preorder">
                    <i></i>
                    <span>预定优惠</span>
                    </li>
                    <li class="option-item" data-msg="特价优惠" data-type="te">
                    <i></i>
                    <span>特价优惠</span>
                    </li>
                    <li class="option-item" data-msg="进店领券" data-type="shop_coupon">
                    <i></i>
                    <span>进店领券</span>
                    </li>
                    <li class="option-item" data-msg="免配送费" data-type="mian">
                    <i></i>
                    <span>免配送费</span>
                    </li>
                    <li class="option-item" data-msg="下单满赠" data-type="zeng">
                    <i></i>
                    <span>下单满赠</span>
                    </li>
                    <li class="option-item" data-msg="支持代金券" data-type="coupon">
                    <i></i>
                    <span>支持代金券</span>
                    </li>
                    <li class="option-item" data-msg="支持开发票" data-type="invoice">
                    <i></i>
                    <span>支持开发票</span>
                    </li>
                    <li class="option-item" data-msg="百度专送" data-type="express">
                    <i></i>
                    <span>百度专送</span>
                    </li>
                    <li class="option-item" data-msg="超时赔付" data-type="overtimepayment">
                    <i></i>
                    <span>超时赔付</span>
                    </li>
                    <img class="arrow" src="/sjswaimai/Public/picture/arrow_eec16bc.png" width="10px" height="10px">
                    </ul>
                </div>
                <div class="filter-search">
                <input type="text" id="f-input" class="f-input placeholder-con" placeholder="搜索商户或商品" value="">
                <a href="/waimai/shoplist/c63ab3051c9a6892" id="f-close-btn" title="重新搜索" class="f-close-btn hide">×</a>
                <button id="f-search" class="f-search"></button>
                <div class="f-search-list"></div>
                </div>
                </div>
            </section>
            <section class="shop-list" id="shop-list">
                <div class="list-wrap">
                    <div class="list clearfix" style="color:red">
                        <ul class="shopcards-list">
                            <li class="list-item shopcard data172960235 online" ismarket="0" data="172960235">
                                <div class="shopimg">                                                    
                                    <img width="228" height="140" data-src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100" alt="壹多滋（龙眠西路店）" onerror="this.src='https://static.waimai.baidu.com/static/waimai/images/shopcard_loading_84603da.png'" src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100">                    
                                </div>
                                <div class="title" title="壹多滋（龙眠西路店）">            
                                    壹多滋（龙眠西路店）
                                    <span class="cert-icon">
                                        <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                    </span>        
                                </div>
                                <div class="info s-info clearfix">            
                                    <div class="f-col f-star star-control" data-star="5">                
                                        <span class="rate">                    
                                            <span class="rate-inner" style="width:72px"></span>                
                                        </span>            
                                    </div>            
                                    <div class="f-col f-sale">月售<span>99</span>份                            
                                    </div>        
                                </div>

                                <div class="info f-info clearfix">            
                                    <div class="f-col f-price">                
                                        <span class="item-label">起送:</span>                
                                        <span class="item-value">¥0</span>            
                                    </div>           
                                    <div class="f-col f-cost">                
                                        <span class="item-label">配送:</span>                
                                        <span class="item-value">¥0</span>     
                                    </div>    
                                    <div class="f-col f-time">
                                        30分钟                                    
                                    </div> 
                                </div> 

                                <div class="feature">                            
                                    <em class="pay-min-icon premium-icon" data-msg="支持在线支付">
                                            <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                    </em>                            
                                    <em class="xin-min-icon premium-icon" data-msg="(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元">
                                         <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                    </em>                            
                                    <em class="jian-min-icon premium-icon" data-msg="在线支付满15元减1元">
                                            <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                    </em>                            
                                    <em class="certification-min-icon premium-icon" data-msg="资质证照">
                                            <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                    </em>                    
                                </div>


                                <div class="overlay">            
                                    <div class="o-con">                
                                        <div class="shop-title">                    
                                            <p>壹多滋（龙眠西路店）
                                                <span class="cert-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                                </span>
                                            </p>                    
                                            <p class="cert-pah">支持查看政府认可的资质证照</p>                
                                        </div>                                
                                        <div class="shop-feature">                    
                                            <ul>                                                    
                                                <li>                                
                                                    <em class="pay-min-icon premium-icon">
                                                        <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                                    </em>                                
                                                    <p style="width:150px;">支持在线支付</p>                            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="xin-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                                    </em>                                
                                                    <p>(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元</p>            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="jian-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                                    </em>                                
                                                    <p>在线支付满15元减1元</p>                           
                                                </li>                                                    
                                                <li>                                
                                                    <em class="certification-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                                    </em>                                
                                                    <p>资质证照</p>                            
                                                </li>                                            
                                            </ul>                
                                        </div>                                
                                        <div class="shop-notice">                    
                                            <h2>商家公告</h2>                    
                                            <p>                                                    百度外卖请你吃霸王餐&nbsp;&nbsp;全城免配送费！！！                                            
                                            </p>                
                                        </div>            
                                    </div>            
                                    <div class="o-arrow">
                                         
                                    </div>        
                                 </div>
                            </li>
                            <li class="list-item shopcard data172960235 online" ismarket="0" data="172960235">
                                <div class="shopimg">                                                    
                                    <img width="228" height="140" data-src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100" alt="壹多滋（龙眠西路店）" onerror="this.src='https://static.waimai.baidu.com/static/waimai/images/shopcard_loading_84603da.png'" src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100">                    
                                </div>
                                <div class="title" title="壹多滋（龙眠西路店）">            
                                    壹多滋（龙眠西路店）
                                    <span class="cert-icon">
                                        <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                    </span>        
                                </div>
                                <div class="info s-info clearfix">            
                                    <div class="f-col f-star star-control" data-star="5">                
                                        <span class="rate">                    
                                            <span class="rate-inner" style="width:72px"></span>                
                                        </span>            
                                    </div>            
                                    <div class="f-col f-sale">月售<span>99</span>份                            
                                    </div>        
                                </div>

                                <div class="info f-info clearfix">            
                                    <div class="f-col f-price">                
                                        <span class="item-label">起送:</span>                
                                        <span class="item-value">¥0</span>            
                                    </div>           
                                    <div class="f-col f-cost">                
                                        <span class="item-label">配送:</span>                
                                        <span class="item-value">¥0</span>     
                                    </div>    
                                    <div class="f-col f-time">
                                        30分钟                                    
                                    </div> 
                                </div> 

                                <div class="feature">                            
                                    <em class="pay-min-icon premium-icon" data-msg="支持在线支付">
                                            <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                    </em>                            
                                    <em class="xin-min-icon premium-icon" data-msg="(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元">
                                         <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                    </em>                            
                                    <em class="jian-min-icon premium-icon" data-msg="在线支付满15元减1元">
                                            <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                    </em>                            
                                    <em class="certification-min-icon premium-icon" data-msg="资质证照">
                                            <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                    </em>                    
                                </div>


                                <div class="overlay">            
                                    <div class="o-con">                
                                        <div class="shop-title">                    
                                            <p>壹多滋（龙眠西路店）
                                                <span class="cert-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                                </span>
                                            </p>                    
                                            <p class="cert-pah">支持查看政府认可的资质证照</p>                
                                        </div>                                
                                        <div class="shop-feature">                    
                                            <ul>                                                    
                                                <li>                                
                                                    <em class="pay-min-icon premium-icon">
                                                        <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                                    </em>                                
                                                    <p style="width:150px;">支持在线支付</p>                            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="xin-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                                    </em>                                
                                                    <p>(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元</p>            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="jian-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                                    </em>                                
                                                    <p>在线支付满15元减1元</p>                           
                                                </li>                                                    
                                                <li>                                
                                                    <em class="certification-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                                    </em>                                
                                                    <p>资质证照</p>                            
                                                </li>                                            
                                            </ul>                
                                        </div>                                
                                        <div class="shop-notice">                    
                                            <h2>商家公告</h2>                    
                                            <p>                                                    百度外卖请你吃霸王餐&nbsp;&nbsp;全城免配送费！！！                                            
                                            </p>                
                                        </div>            
                                    </div>            
                                    <div class="o-arrow">
                                         
                                    </div>        
                                 </div>
                            </li>
                            <li class="list-item shopcard data172960235 online" ismarket="0" data="172960235">
                                <div class="shopimg">                                                    
                                    <img width="228" height="140" data-src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100" alt="壹多滋（龙眠西路店）" onerror="this.src='https://static.waimai.baidu.com/static/waimai/images/shopcard_loading_84603da.png'" src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100">                    
                                </div>
                                <div class="title" title="壹多滋（龙眠西路店）">            
                                    壹多滋（龙眠西路店）
                                    <span class="cert-icon">
                                        <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                    </span>        
                                </div>
                                <div class="info s-info clearfix">            
                                    <div class="f-col f-star star-control" data-star="5">                
                                        <span class="rate">                    
                                            <span class="rate-inner" style="width:72px"></span>                
                                        </span>            
                                    </div>            
                                    <div class="f-col f-sale">月售<span>99</span>份                            
                                    </div>        
                                </div>

                                <div class="info f-info clearfix">            
                                    <div class="f-col f-price">                
                                        <span class="item-label">起送:</span>                
                                        <span class="item-value">¥0</span>            
                                    </div>           
                                    <div class="f-col f-cost">                
                                        <span class="item-label">配送:</span>                
                                        <span class="item-value">¥0</span>     
                                    </div>    
                                    <div class="f-col f-time">
                                        30分钟                                    
                                    </div> 
                                </div> 

                                <div class="feature">                            
                                    <em class="pay-min-icon premium-icon" data-msg="支持在线支付">
                                            <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                    </em>                            
                                    <em class="xin-min-icon premium-icon" data-msg="(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元">
                                         <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                    </em>                            
                                    <em class="jian-min-icon premium-icon" data-msg="在线支付满15元减1元">
                                            <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                    </em>                            
                                    <em class="certification-min-icon premium-icon" data-msg="资质证照">
                                            <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                    </em>                    
                                </div>


                                <div class="overlay">            
                                    <div class="o-con">                
                                        <div class="shop-title">                    
                                            <p>壹多滋（龙眠西路店）
                                                <span class="cert-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                                </span>
                                            </p>                    
                                            <p class="cert-pah">支持查看政府认可的资质证照</p>                
                                        </div>                                
                                        <div class="shop-feature">                    
                                            <ul>                                                    
                                                <li>                                
                                                    <em class="pay-min-icon premium-icon">
                                                        <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                                    </em>                                
                                                    <p style="width:150px;">支持在线支付</p>                            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="xin-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                                    </em>                                
                                                    <p>(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元</p>            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="jian-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                                    </em>                                
                                                    <p>在线支付满15元减1元</p>                           
                                                </li>                                                    
                                                <li>                                
                                                    <em class="certification-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                                    </em>                                
                                                    <p>资质证照</p>                            
                                                </li>                                            
                                            </ul>                
                                        </div>                                
                                        <div class="shop-notice">                    
                                            <h2>商家公告</h2>                    
                                            <p>                                                    百度外卖请你吃霸王餐&nbsp;&nbsp;全城免配送费！！！                                            
                                            </p>                
                                        </div>            
                                    </div>            
                                    <div class="o-arrow">
                                         
                                    </div>        
                                 </div>
                            </li>
                            <li class="list-item shopcard data172960235 online" ismarket="0" data="172960235">
                                <div class="shopimg">                                                    
                                    <img width="228" height="140" data-src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100" alt="壹多滋（龙眠西路店）" onerror="this.src='https://static.waimai.baidu.com/static/waimai/images/shopcard_loading_84603da.png'" src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100">                    
                                </div>
                                <div class="title" title="壹多滋（龙眠西路店）">            
                                    壹多滋（龙眠西路店）
                                    <span class="cert-icon">
                                        <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                    </span>        
                                </div>
                                <div class="info s-info clearfix">            
                                    <div class="f-col f-star star-control" data-star="5">                
                                        <span class="rate">                    
                                            <span class="rate-inner" style="width:72px"></span>                
                                        </span>            
                                    </div>            
                                    <div class="f-col f-sale">月售<span>99</span>份                            
                                    </div>        
                                </div>

                                <div class="info f-info clearfix">            
                                    <div class="f-col f-price">                
                                        <span class="item-label">起送:</span>                
                                        <span class="item-value">¥0</span>            
                                    </div>           
                                    <div class="f-col f-cost">                
                                        <span class="item-label">配送:</span>                
                                        <span class="item-value">¥0</span>     
                                    </div>    
                                    <div class="f-col f-time">
                                        30分钟                                    
                                    </div> 
                                </div> 

                                <div class="feature">                            
                                    <em class="pay-min-icon premium-icon" data-msg="支持在线支付">
                                            <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                    </em>                            
                                    <em class="xin-min-icon premium-icon" data-msg="(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元">
                                         <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                    </em>                            
                                    <em class="jian-min-icon premium-icon" data-msg="在线支付满15元减1元">
                                            <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                    </em>                            
                                    <em class="certification-min-icon premium-icon" data-msg="资质证照">
                                            <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                    </em>                    
                                </div>


                                <div class="overlay">            
                                    <div class="o-con">                
                                        <div class="shop-title">                    
                                            <p>壹多滋（龙眠西路店）
                                                <span class="cert-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                                </span>
                                            </p>                    
                                            <p class="cert-pah">支持查看政府认可的资质证照</p>                
                                        </div>                                
                                        <div class="shop-feature">                    
                                            <ul>                                                    
                                                <li>                                
                                                    <em class="pay-min-icon premium-icon">
                                                        <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                                    </em>                                
                                                    <p style="width:150px;">支持在线支付</p>                            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="xin-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                                    </em>                                
                                                    <p>(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元</p>            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="jian-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                                    </em>                                
                                                    <p>在线支付满15元减1元</p>                           
                                                </li>                                                    
                                                <li>                                
                                                    <em class="certification-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                                    </em>                                
                                                    <p>资质证照</p>                            
                                                </li>                                            
                                            </ul>                
                                        </div>                                
                                        <div class="shop-notice">                    
                                            <h2>商家公告</h2>                    
                                            <p>                                                    百度外卖请你吃霸王餐&nbsp;&nbsp;全城免配送费！！！                                            
                                            </p>                
                                        </div>            
                                    </div>            
                                    <div class="o-arrow">
                                         
                                    </div>        
                                 </div>
                            </li>
                            <li class="list-item shopcard data172960235 online" ismarket="0" data="172960235">
                                <div class="shopimg">                                                    
                                    <img width="228" height="140" data-src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100" alt="壹多滋（龙眠西路店）" onerror="this.src='https://static.waimai.baidu.com/static/waimai/images/shopcard_loading_84603da.png'" src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100">                    
                                </div>
                                <div class="title" title="壹多滋（龙眠西路店）">            
                                    壹多滋（龙眠西路店）
                                    <span class="cert-icon">
                                        <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                    </span>        
                                </div>
                                <div class="info s-info clearfix">            
                                    <div class="f-col f-star star-control" data-star="5">                
                                        <span class="rate">                    
                                            <span class="rate-inner" style="width:72px"></span>                
                                        </span>            
                                    </div>            
                                    <div class="f-col f-sale">月售<span>99</span>份                            
                                    </div>        
                                </div>

                                <div class="info f-info clearfix">            
                                    <div class="f-col f-price">                
                                        <span class="item-label">起送:</span>                
                                        <span class="item-value">¥0</span>            
                                    </div>           
                                    <div class="f-col f-cost">                
                                        <span class="item-label">配送:</span>                
                                        <span class="item-value">¥0</span>     
                                    </div>    
                                    <div class="f-col f-time">
                                        30分钟                                    
                                    </div> 
                                </div> 

                                <div class="feature">                            
                                    <em class="pay-min-icon premium-icon" data-msg="支持在线支付">
                                            <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                    </em>                            
                                    <em class="xin-min-icon premium-icon" data-msg="(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元">
                                         <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                    </em>                            
                                    <em class="jian-min-icon premium-icon" data-msg="在线支付满15元减1元">
                                            <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                    </em>                            
                                    <em class="certification-min-icon premium-icon" data-msg="资质证照">
                                            <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                    </em>                    
                                </div>


                                <div class="overlay">            
                                    <div class="o-con">                
                                        <div class="shop-title">                    
                                            <p>壹多滋（龙眠西路店）
                                                <span class="cert-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                                </span>
                                            </p>                    
                                            <p class="cert-pah">支持查看政府认可的资质证照</p>                
                                        </div>                                
                                        <div class="shop-feature">                    
                                            <ul>                                                    
                                                <li>                                
                                                    <em class="pay-min-icon premium-icon">
                                                        <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                                    </em>                                
                                                    <p style="width:150px;">支持在线支付</p>                            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="xin-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                                    </em>                                
                                                    <p>(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元</p>            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="jian-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                                    </em>                                
                                                    <p>在线支付满15元减1元</p>                           
                                                </li>                                                    
                                                <li>                                
                                                    <em class="certification-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                                    </em>                                
                                                    <p>资质证照</p>                            
                                                </li>                                            
                                            </ul>                
                                        </div>                                
                                        <div class="shop-notice">                    
                                            <h2>商家公告</h2>                    
                                            <p>                                                    百度外卖请你吃霸王餐&nbsp;&nbsp;全城免配送费！！！                                            
                                            </p>                
                                        </div>            
                                    </div>            
                                    <div class="o-arrow">
                                         
                                    </div>        
                                 </div>
                            </li>
                            <li class="list-item shopcard data172960235 online" ismarket="0" data="172960235">
                                <div class="shopimg">                                                    
                                    <img width="228" height="140" data-src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100" alt="壹多滋（龙眠西路店）" onerror="this.src='https://static.waimai.baidu.com/static/waimai/images/shopcard_loading_84603da.png'" src="https://img.waimai.baidu.com/pb/4f15b88a95f91861bd2963fc5a6613c709@s_0,w_228,h_140,q_100">                    
                                </div>
                                <div class="title" title="壹多滋（龙眠西路店）">            
                                    壹多滋（龙眠西路店）
                                    <span class="cert-icon">
                                        <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                    </span>        
                                </div>
                                <div class="info s-info clearfix">            
                                    <div class="f-col f-star star-control" data-star="5">                
                                        <span class="rate">                    
                                            <span class="rate-inner" style="width:72px"></span>                
                                        </span>            
                                    </div>            
                                    <div class="f-col f-sale">月售<span>99</span>份                            
                                    </div>        
                                </div>

                                <div class="info f-info clearfix">            
                                    <div class="f-col f-price">                
                                        <span class="item-label">起送:</span>                
                                        <span class="item-value">¥0</span>            
                                    </div>           
                                    <div class="f-col f-cost">                
                                        <span class="item-label">配送:</span>                
                                        <span class="item-value">¥0</span>     
                                    </div>    
                                    <div class="f-col f-time">
                                        30分钟                                    
                                    </div> 
                                </div> 

                                <div class="feature">                            
                                    <em class="pay-min-icon premium-icon" data-msg="支持在线支付">
                                            <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                    </em>                            
                                    <em class="xin-min-icon premium-icon" data-msg="(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元">
                                         <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                    </em>                            
                                    <em class="jian-min-icon premium-icon" data-msg="在线支付满15元减1元">
                                            <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                    </em>                            
                                    <em class="certification-min-icon premium-icon" data-msg="资质证照">
                                            <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                    </em>                    
                                </div>


                                <div class="overlay">            
                                    <div class="o-con">                
                                        <div class="shop-title">                    
                                            <p>壹多滋（龙眠西路店）
                                                <span class="cert-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certificated_s.png">
                                                </span>
                                            </p>                    
                                            <p class="cert-pah">支持查看政府认可的资质证照</p>                
                                        </div>                                
                                        <div class="shop-feature">                    
                                            <ul>                                                    
                                                <li>                                
                                                    <em class="pay-min-icon premium-icon">
                                                        <img src="https://static.waimai.baidu.com/static/forpc/pay_s.png">
                                                    </em>                                
                                                    <p style="width:150px;">支持在线支付</p>                            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="xin-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/xin_s.png">
                                                    </em>                                
                                                    <p>(手机app专享)新用户在线支付满12减10元,使用百度钱包减20元</p>            
                                                </li>                                                    
                                                <li>                                
                                                    <em class="jian-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/jian_s.png">
                                                    </em>                                
                                                    <p>在线支付满15元减1元</p>                           
                                                </li>                                                    
                                                <li>                                
                                                    <em class="certification-min-icon premium-icon">
                                                    <img src="https://static.waimai.baidu.com/static/forpc/certification_s.png">
                                                    </em>                                
                                                    <p>资质证照</p>                            
                                                </li>                                            
                                            </ul>                
                                        </div>                                
                                        <div class="shop-notice">                    
                                            <h2>商家公告</h2>                    
                                            <p>                                                    百度外卖请你吃霸王餐&nbsp;&nbsp;全城免配送费！！！                                            
                                            </p>                
                                        </div>            
                                    </div>            
                                    <div class="o-arrow">
                                         
                                    </div>        
                                 </div>
                            </li>
                        </ul>
                    </div>
                    <div class="loading hide">
                        <img src="/sjswaimai/Public/picture/load-more_3e34c85.gif" width="32" height="32">
                    </div>
                </div>
            </section>


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
        <input type="hidden" id="bdstoken" name="bdstoken" value="">
        <input type="hidden" id="bindstoken" name="bindstoken" value="">
    </div>

    <footer id="baiducopy">
        <div class="footer-items">
            <div class="footer-items-snippet footer-item help">
                <h3>帮助</h3>
                <div class="text">
                    <a href="https://waimai.baidu.com/waimai?qt=contact">建议与反馈</a>
                    <a href="https://waimai.baidu.com/waimai?qt=helpusage">使用帮助</a>
                    <a href="https://waimai.baidu.com/waimai?qt=helpqa">常见问题</a>
                    <a href="https://waimai.baidu.com/waimai?qt=agreement">用户协议</a>
                    <a href="/waimai?qt=agreement&right=1">权利声明</a>
                </div>
            </div>
            <div class="footer-items-snippet footer-item followus">
                <h3>关注我们</h3>
                <div class="text">
                    <a href="http://tieba.baidu.com/f?kw=%B0%D9%B6%C8%CD%E2%C2%F4&fr=ala0" target="_blank">官方论坛</a>
                    <a href="http://weibo.com/waimai" target="_blank">新浪微博</a>
                    <a href="https://waimai.baidu.com/waimai?qt=about" target="_blank">关于我们</a>
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
            小度生活（北京）科技有限公司，北京小度信息科技有限公司
            <a href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action" target="_blank" style="margin-left:15px;">京ICP备16008577-1号
            </a>
            <span>合作伙伴&nbsp;:&nbsp;</span>
            <img src="/sjswaimai/Public/picture/nuomi_logo.png" class="footer_nuomi_logo" onclick="javascript:window.location='http://www.nuomi.com/?cid=bdwm';addNStat({da_trd:'waimai',da_src:'nuomilogoBk.click',da_act:'click'});" />
            <img src="/sjswaimai/Public/picture/qianbao_logo.png" class="footer_qianbao_logo" onclick="javascript:window.location='https://www.baifubao.com?from=waimai';addNStat({da_trd:'waimai',da_src:'qianbaologoBk.click',da_act:'click'});" />
        </p>
    </footer>
    <div class="mask"></div>
</body>
<script src="/sjswaimai/Public/js/jquery-3.1.0.js"></script>
<script type="text/javascript">
    $('.list-item').mouseenter(function() {
            var self = $(this); //当前对象     
            var div = $(self.children()[5]); //要浮动在这个元素旁边的层    
            var p = self.position(); //获取这个元素的left和top    
            var x = p.left + self.width();//获取这个浮动层的left    
            var docWidth = $(document).width();//获取网页的宽    
            if (x > docWidth - div.width() - 20) {    
                x = p.left - div.width();    
            }    
            console.log(self.width());
        // setTimeout(function(){
            div.css("position", "absolute");//让这个层可以绝对定位      
            div.css("display", "block");    
            div.css("left", self.width());    
            div.css("top", p);    
            div.show();  
        // },200);         
    })
    $('.list-item').mouseleave(function() {
        var self = $(this); //当前对象     
        var div = $(self.children()[5]); //要浮动在这个元素旁边的层
        setTimeout(function(){
            div.css("display","none");
        },300); 
    })


    //顶部导航js
    // $(function () { 
    //     //当滚动条的位置处于距顶部200像素以下时，顶部导航出现，否则消失 
    //     $(function () { 
    //         $(window).scroll(function () { 
    //             if ($(window).scrollTop() > 294) { 
    //                 $("#filter-bottom").fadeIn(); 
    //             } 
    //             else { 
    //                 $("#filter-bottom").fadeOut(); 
    //             } 
    //         }); 
    //     }); 
    // }); 


  </script>
</html>