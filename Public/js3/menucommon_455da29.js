define("waimai:widget/common/menucommon/cart/cart.js", function(t, i, e) {
    function a(t) {
        var i = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
            e = window.location.search.substr(1).match(i);
        return null != e ? unescape(e[2]) : null
    }
    function s() {
        for (var t = 0, i = w.find("input.item-count"), e = 0; e < i.length; e++) t += 1 * i.eq(e).val();
        return t
    }
    function n(t) {
        var i = $(t).closest(".item"),
            e = i.find("input.item-count"),
            a = {};
        return a.itemId = i.find("input:hidden").val(), a.itemCount = e.val() ? e.val() : 0, a
    }
    function r() {
        try {
            var t = p.getCarInfo(m);
            if (!t) return !1;
            if (!f.isInit()) return !1;
            if (!f.isRequireIdInCategory()) return !1;
            for (var e = !0, a = 0, s = 0; s < t.length; s++) {
                var n = f.getReguireId(t[s].uniqId);
                if (void 0 != n && 0 != n && (a = n, 0 != a && !f.haveCategory(t, a))) {
                    e = !1;
                    break
                }
            }
            return 1 == e ? !1 : ($(i).trigger("filter.requireSelect", a), !0)
        } catch (r) {
            return !1
        }
    }
    function c() {
        $("#cartSubmit").click(function(i) {
            var e = a("hotdishid"),
                s = a("searchdishid"),
                n = a("dish"),
                c = $(this);
            if (addNStat({
                da_src: "cartBk.nowCartBtn",
                da_act: "click",
                da_trd: "waimai"
            }), c.hasClass("fillDiffClick") && addNStat({
                da_src: "fillDiffBk.submitCartBtn",
                da_act: "click",
                da_trd: "waimai"
            }), i.preventDefault(), i.stopPropagation(), !r()) {
                var o = $.map(_, function(t, i) {
                    return i + "=" + (t || "")
                });
                t.async("waimai:widget/common/userinfo/UserMgr.js", function(t) {
                    try {
                        l.setRaw("PMS_JT", '({"s":' + +new Date + ',"r":"' + document.URL.replace(/#.*/, "") + '"})')
                    } catch (i) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: i.message || i.description,
                            path: "waimai:widget/common/menucommon/cart/cart.js",
                            ln: 99
                        })
                    }
                    addNStat({
                        da_src: "cartBk.loginLayer",
                        da_act: "click",
                        da_trd: "waimai"
                    });
                    try {
                        t.login({
                            url: window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + "/waimai?qt=confirmorder&shop_id=" + m + (o.length ? "&" + o.join("&") : "") + (e ? "&hotdish_id=" + e : "") + (s ? "&searchdishid=" + s : "") + (n ? "&dish=" + n : ""),
                            sucessCB: function() {
                                addNStat({
                                    da_src: "cartBk.loginSuccess",
                                    da_act: "click",
                                    da_trd: "waimai"
                                })
                            }
                        })
                    } catch (i) {
                        "undefined" != typeof alog && alog("exception.fire", "catch", {
                            msg: i.message || i.description,
                            path: "waimai:widget/common/menucommon/cart/cart.js",
                            ln: 115
                        }), u.tip("登陆有误，请刷新页面重试")
                    }
                })
            }
        }), $("#cartCha").click(function(t) {
            t.stopPropagation()
        }), $(".cart-panel .item-list").delegate(".item-minus", "click", function(t) {
            $("#fill_diff-section").attr("state", "non-trigger");
            var e = n(this),
                a = $("[data-sid=item_" + e.itemId + "]"),
                s = a.attr("dishactflag"),
                r = a.attr("dishlimit"),
                c = a.attr("orderlimit"),
                o = a.attr("dishActivityId");
            e.itemCount--, $.extend(e, {
                dishactflag: s,
                dishlimit: r,
                orderlimit: c,
                elem: this,
                dishactid: o
            }), $(i).trigger("update.cart", e), t.stopPropagation()
        }), $(".cart-panel .item-list").delegate(".item-plus", "click", function(t) {
            if (s() + 1 > 999) return void u.tip("所点菜品数量过多");
            $("#fill_diff-section").attr("state", "non-trigger");
            var e = n(this),
                a = $("[data-sid=item_" + e.itemId + "]"),
                r = a.attr("dishactflag"),
                c = a.attr("dishlimit"),
                o = a.attr("orderlimit"),
                d = a.attr("dishActivityId");
            e.itemCount++, $.extend(e, {
                dishactflag: r,
                dishlimit: c,
                orderlimit: o,
                elem: this,
                dishactid: d
            }), $(i).trigger("update.cart", e), t.stopPropagation()
        }), $(".cart-panel .item-list").delegate(".item-count .item-count", "focusout", function() {
            if (s() > 999) return void u.tip("所点菜品数量过多");
            var t = n(this),
                e = $("[data-sid=item_" + t.itemId + "]"),
                a = (e.attr("dishactflag"), e.attr("dishlimit"), e.attr("orderlimit"), e.attr("dishActivityId"));
            $.extend(t, {
                dishactflag: e.attr("dishactflag"),
                dishlimit: e.attr("dishlimit"),
                orderlimit: e.attr("orderlimit"),
                elem: this,
                dishactid: a
            }), $(i).trigger("update.cart", t)
        }), $(".cart-panel .item-list").delegate(".item-count .item-count", "keypress", function(t) {
            var i = t.which;
            return i >= 48 && 57 >= i || 8 == i || 46 == i ? !0 : !1
        }), $(".cart-panel .item-list").delegate(".item-delete", "click", function(t) {
            $("#fill_diff-section").attr("state", "non-trigger");
            var e = n(this);
            e.itemCount = 0, $(i).trigger("update.cart", e), t.stopPropagation()
        }), $(".clear-cart").click(function(t) {
            $("#fill_diff-section").attr("state", "non-trigger"), $(i).trigger("clear.cart"), t.stopPropagation()
        }), g.delegate(".pointer", "click", function(t) {
            g.hasClass("cart-hide") ? (I.css("height", "auto"), I.css("visibility", "hidden"), I.css("data-height", I.height()), I.css("height", 0), I.css("visibility", "visible"), I.css("overflow", "hidden"), setTimeout(function() {
                I.css("height", I.attr("data-height")), setTimeout(function() {
                    I.css("height", "auto"), I.css("overflow", "auto")
                }, 150)
            }, 0)) : "right" == $("#fill_diff_bear").attr("status") ? (t.stopPropagation(), $("#fill_diff_bear").trigger("click"), setTimeout(function() {
                I.css("overflow", "hidden"), I.css("height", I.height()), I.attr("data-height", I.height()), I.css("height", 0), setTimeout(function() {
                    I.css("overflow", "auto")
                }, 500)
            }, 1e3)) : (I.css("overflow", "hidden"), I.css("height", I.height()), I.attr("data-height", I.height()), I.css("height", 0), setTimeout(function() {
                I.css("overflow", "auto")
            }, 500)), g.toggleClass("cart-hide")
        }), v.resize(function() {
            $(".cart-panel").css("max-height", .6 * v.height())
        })
    }
    function o() {
        I.show(), $("#cartIsEmpty").hide(), $("#cartAmout").show()
    }
    function d() {
        I.hide(), $(".cart-panel .item-list .item").remove(), $("#cartIsEmpty").show(), $("#cartAmout").hide(), $("#cartCha").hide(), $("#cartSubmit").hide(), $(".cart-bar").removeClass("pointer")
    }
    var i, m, l = t("wcommon:static/util/Cookie.js"),
        u = t("waimai:static/utils/GlobalTips.js"),
        h = t("wcommon:static/util.js"),
        p = t("waimai:static/utils/CartDataCenter.js"),
        f = (t("waimai:static/utils/store.js"), t("waimai:widget/common/mustbuy/mustbuy.js")),
        g = $(".menu-cart"),
        v = $(window),
        _ = {},
        I = $(".menu-cart .cc-warp"),
        w = $("[data-node=item-list]"),
        C = {
            COOKIE_LNG_KEY: "wm_callbacklng",
            COOKIE_LAT_KEY: "wm_callbacklat",
            COOKIE_ADDR_KEY: "wm_callbackaddr"
        };
    console.log(1), i = e.exports = {
        init: function(t) {
            $(".cart-panel").css("max-height", .6 * v.height()), m = t, _.lng = decodeURIComponent(l.getRaw(C.COOKIE_LNG_KEY)), _.lat = decodeURIComponent(l.getRaw(C.COOKIE_LAT_KEY)), _.address = decodeURIComponent(l.getRaw(C.COOKIE_ADDR_KEY)), c()
        },
        addItem: function(t) {
            $.isArray(t) || (t = [t]), t.length > 0 && o(), $.each(t, function(t, i) {
                if ($("#cartItem_" + i.itemId).length <= 0) {
                    var e = [],
                        a = i.itemName;
                    i.itemName.length > 18 && (a = i.itemName.substring(0, 16) + "..."), e.push('<tr class="item normal-item hide" data-stockId="' + i.itemStockId + '" id="cartItem_' + i.itemId + '">'), e.push('<td class="item-name">' + h.encodeHTML(a) + "</td>"), e.push('<td class="item-count">'), e.push('<input type="hidden" value="' + i.itemId + '" />'), e.push('<span class="item-minus" value="" type="button"></span>'), e.push('<input class="item-count" type="input" value="' + i.itemCount + '" />'), e.push('<span class="item-plus" value="" type="button"></span>'), e.push("</td>"), e.push('<td class="item-price">&#165;' + i.itemPrice + "</td>"), e.push('<td class="item-delete"><span class="item-delete-icon">×</span></td>'), e.push("</tr>");
                    var s = $(e.join("")),
                        n = $(".cart-panel .item-list"),
                        r = n.find(".normal-item");
                    r.length ? r.last().after(s) : n.append(s), s.show()
                }
            })
        },
        updateItem: function(t) {
            $("#cartItem_" + t.itemId).find(".item-count").val(t.itemCount)
        },
        delItem: function(t) {
            $("#cartItem_" + t.itemId).remove()
        },
        clearCart: function() {
            d()
        },
        setAmount: function(t) {
            return t.isEmpty ? void $(".cart-bar").removeClass("pointer") : ($(".cart-bar").addClass("pointer"), void(t.cha > 0 ? ($("#cartCha").show().html("差&nbsp;&#165;" + t.cha + "起送"), $("#cartSubmit").hide()) : ($("#cartCha").hide(), $("#cartSubmit").show())))
        },
        setLocalPrice: function(t) {
            this.resetPremium(), $("#cartAmout").html("共&nbsp;&#165;" + t + " 元")
        },
        setItemStockStatus: function(t) {
            var i = this;
            $.isArray(t) || (t = [t]), $.each(t, function(t, e) {
                e.itemDishType || (parseInt(e.itemCount) >= parseInt(e.itemStock) ? i.addItemStockTight(e) : i.removeItemStockTight(e))
            })
        },
        addItemStockTight: function(t) {
            $.isArray(t) || (t = [t]), $.each(t, function(t, i) {
                $("#cartItem_" + i.itemId).not(".notify").find("td.item-count").append("<span class='item-notify'>库存" + i.itemCount + "份</span>"), $("#cartItem_" + i.itemId).addClass("notify"), $("#cartItem_" + i.itemId).find(".item-plus").attr("disabled", "disabled")
            })
        },
        setFeatureStockTight: function(t) {
            $("[data-stockId=" + t.sid + "]").not(".notify").find("td.item-count").append("<span class='item-notify'>库存" + t.num + "份</span>"), $("[data-stockId=" + t.sid + "]").addClass("notify"), $("[data-stockId=" + t.sid + "]").find(".item-plus").attr("disabled", "disabled")
        },
        setFeatureStockNormal: function(t) {
            $("[data-stockId=" + t + "]").removeClass("notify"), $("[data-stockId=" + t + "]").find(".item-notify").remove(), $("[data-stockId=" + t + "]").find(".item-plus").removeAttr("disabled")
        },
        removeItemStockTight: function(t) {
            $.isArray(t) || (t = [t]), $.each(t, function(t, i) {
                $("#cartItem_" + i.itemId).removeClass("notify"), $("#cartItem_" + i.itemId).find(".item-notify").remove(), $("#cartItem_" + i.itemId).find(".item-plus").removeAttr("disabled")
            })
        },
        addBoxPrice: function(t, i) {
            i = i || "餐盒费";
            var e = t.prices.box_price,
                a = t.prices.orig_send_price || 0,
                s = [];
            parseFloat(e) && (s.push('<tr class="item box-price">'), s.push('<td class="item-name">' + i + "</td>"), s.push('<td class="item-count"></td>'), s.push('<td class="item-price">&#165;' + parseFloat(e).toFixed(2) + "</td>"), s.push('<td class="item-delete"></td>'), s.push("</tr>")), s.push('<tr class="item send-price">'), s.push('<td class="item-name" colspan="2">配送费(不计入起送价)</td>'), s.push('<td class="item-price">&#165;' + parseFloat(a).toFixed(2) + "</td>"), s.push('<td class="item-delete"></td>'), s.push("</tr>"), this.resetBoxPrice(s.join(""))
        },
        resetBoxPrice: function(t) {
            var i = $(".cart-panel .item-list"),
                e = i.find(".normal-item"),
                a = i.find(".box-price");
            sendP = i.find(".send-price"), a.remove(), sendP.remove(), e.length ? e.last().after(t) : i.append(t)
        },
        addPremium: function(t) {
            var i = t.prices,
                e = t.discounts.discount_list,
                a = [];
            for (var s in e) {
                var n = e[s].type,
                    r = e[s].desc,
                    c = (e[s].amount, e[s].discount);
                (e[s].is_show_desc || e[s].is_show_amount || e[s].is_show_discount) && (a.push('<tr class="premium-item item ' + n + '">'), a.push(e[s].is_show_desc ? '<td colspan="2" class="item-name">' + r + ' <span class="' + n + '-min-icon premium-icon"><img src="https://static.waimai.baidu.com/static/forpc/' + n + '_s.png" /></span></td>' : '<td colspan="2" class="item-name"></td>'), a.push(e[s].is_show_discount ? '<td class="item-price">- &#165;' + parseFloat(c).toFixed(2) + "</td>" : '<td class="item-price"></td>'), a.push('<td class="item-delete"></td>'), a.push("</tr>"))
            }
            var o = parseFloat(i.total_price, 10),
                d = parseFloat(i.total_order_price, 10);
            o = 0 > o ? 0 : o, d != o ? $("#cartAmout").addClass("lh-normal").html('<span class="premium-price">共&nbsp;&#165;' + o.toFixed(2) + ' 元</span><br /><span class="premium-origin">原价&nbsp;<del>&#165;' + d.toFixed(2) + "</del> 元</span>") : $("#cartAmout").removeClass("lh-normal").html("共&nbsp;&#165;" + o.toFixed(2) + " 元");
            var m = $(a.join(""));
            this.resetPremium();
            var l = $(".cart-panel .item-list"),
                u = l.find(".normal-item");
            u.length ? u.last().after(m) : l.append(m)
        },
        resetPremium: function() {
            $(".cart-panel .premium-item").remove()
        }
    }
});;
define("waimai:widget/common/menucommon/cart/AddToCartAnim.js", function(t, i, e) {
    var n = t("wcommon:static/util/Browser.js");
    e.exports = {
        addAnim: function(t, i, e) {
            var o = {
                zIndex: 0,
                width: "120px",
                height: "120px"
            };
            $.extend(o, e), n.msie && /6\.0|7\.0|8\.0|9\.0/g.test(n.version) || !t;
            var a, d, s;
            a = t.clone(), d = $('<div class="anim-wrap"></div>').append(a), s = t.offset(), a.css({
                width: o.width,
                height: o.height,
                "z-index": 1e3
            }), d.css({
                position: "absolute",
                left: s.left,
                top: s.top,
                "z-index": o.zIndex
            }), d.appendTo($(document.body)), d.animate({
                left: i.left,
                top: i.top - 15,
                height: "20px",
                width: "20px"
            }, "5000", function() {
                d.remove(), $(".cart-logo").addClass("cart-logo-animate");
                var t = setTimeout(function() {
                    clearTimeout(t), $(".cart-logo").removeClass("cart-logo-animate")
                }, 500)
            })
        },
        addAnim_fill_diff: function(t, i) {
            (0 == i.left || 0 == i.top) && (i = $(".cart-section .cart-bar").offset());
            var e, n, o = t.find(".fill_diff_name").find("span"),
                a = t.find(".fill_diff_price").find("span"),
                d = "";
            o.each(function() {
                d += $(this).text()
            });
            var s = "<div class='addAnim_fill_diff'><span>" + d + "&nbsp;&nbsp;" + a.text() + "</span></div>";
            e = $('<div class="anim-wrap"></div>').append(s), n = t.offset(), e.css({
                position: "absolute",
                left: n.left,
                top: n.top
            }), e.appendTo($(document.body)), e.animate({
                left: i.left,
                top: i.top - 15,
                height: "20px",
                width: "20px"
            }, "5000", function() {
                e.remove()
            })
        }
    }
});;
define("waimai:widget/common/menucommon/cert/cert.js", function(require, exports, module) {
    var noresult = require("waimai:widget/common/ui/noresult/noresult.js"),
        popCarousel = require("waimai:widget/common/ui/popCarousel/popCarousel.js"),
        GlobalTips = require("waimai:static/utils/GlobalTips.js"),
        Dialog = require("jsmod/ui/dialog"),
        dialogTpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="jubao-detail">    <div class="jb-title">        <button class="closeBtn">╳</button>        举报商户资质    </div>    <form class="jb-form">        <input type="hidden" name="shop_id" value="', "undefined" == typeof shopId ? "" : baidu.template._encodeHTML(shopId), '"/>        <table class="jb-table">            <tr>                <td width="80" align="right"><span class="red-text">*</span>举报类型：</td>                <td>                    <p><label><input name="zizhi" type="checkbox" value="商家从业资质照片"> 商家从业资质照片</label></p>                    <p class="jb-type"><label><input name="zizhi" type="checkbox" value="商家实景照片"> 商家实景照片</label></p>                </td>            </tr>            <tr>                <td align="right"><span class="red-text">*</span>信息描述：</td>                <td>                    <textarea name="message" rows="3" placeholder="您的举报很重要！商户资质证照有问题？商户实景图与实际不符？"></textarea>                </td>            </tr>            <tr>                <td align="right">联系电话：</td>                <td>                    <input name="telphone" type="text" placeholder="请输入手机号">                    <p class="tip-text">如果方便，请留下您的联系方式，我们将严格保密</p>                </td>            </tr>            <tr>                <td></td>                <td>                    <span class="submit-btn" data-node="submit">提交</span>                </td>            </tr>        </table>    </form></div>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        POST_AJAX = "/shopui/shopcomplain",
        popDialog, cert = function() {};
    cert.prototype.init = function(e, t, a) {
        console.log(a), this.$el = $("#cert-list"), this.isLogin = 2 == e ? 0 : 1, this.shopId = t, this.initContent(), this.initAptitude(a)
    }, cert.prototype.initContent = function() {
        this.bindEvent()
    }, cert.prototype.initAptitude = function(wdata) {
        if ("131" === wdata.city_id) {
            var $certShopSafetyInfoContainer = $(".cert-shop-safety-info-container");
            if ($certShopSafetyInfoContainer.attr("class")) {
                var beijingAptitudeTpl = [function(_template_object) {
                    var _template_fun_array = [],
                        fn = function(__data__) {
                            var _template_varName = "";
                            for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                            eval(_template_varName), _template_fun_array.push('<div class="cert-shop-safety-info clearfix">    <div class="check_result">        ');
                            var aptitudeImgClass = "beijingAptitude" + level;
                            _template_fun_array.push("        ");
                            var placeLevel = "";
                            _template_fun_array.push("        ");
                            var manageLevel = "";
                            switch (_template_fun_array.push("        "), level.substring(0, 1)) {
                            case "A":
                                placeLevel = "优秀";
                                break;
                            case "B":
                                placeLevel = "良好";
                                break;
                            case "C":
                                placeLevel = "一般"
                            }
                            switch (_template_fun_array.push("        "), level.substring(1, 2)) {
                            case "1":
                                manageLevel = "一般";
                                break;
                            case "2":
                                manageLevel = "良好";
                                break;
                            case "3":
                                manageLevel = "优秀"
                            }
                            _template_fun_array.push('        <div class="', "undefined" == typeof aptitudeImgClass ? "" : baidu.template._encodeHTML(aptitudeImgClass), ' beijingAptitudeImg"> </div>    </div>    <div class="info-content">        <div class="info-content-title">监督检查结果：        </div>        <div class="info-content-item">        场所等级&nbsp:&nbsp        <span  style="color: red">            ', "undefined" == typeof placeLevel ? "" : baidu.template._encodeHTML(placeLevel), '        </span>        &nbsp&nbsp&nbsp&nbsp        管理等级&nbsp:&nbsp        <span  style="color: red">            ', "undefined" == typeof manageLevel ? "" : baidu.template._encodeHTML(manageLevel), "        </span>        </div>        "), last_evaluation_date && (_template_fun_array.push("            "), last_evaluation_date = last_evaluation_date.replace(/\//g, "-"), _template_fun_array.push('            <div class="info-content-item">检查日期：', "undefined" == typeof last_evaluation_date ? "" : baidu.template._encodeHTML(last_evaluation_date), "</div>        ")), _template_fun_array.push("        "), license_id && _template_fun_array.push('            <div class="info-content-item">许可证号：', "undefined" == typeof license_id ? "" : baidu.template._encodeHTML(license_id), "</div>        "), _template_fun_array.push("        "), shop_name && _template_fun_array.push('            <div class="info-content-item">单位名称：', "undefined" == typeof shop_name ? "" : baidu.template._encodeHTML(shop_name), "</div>        "), _template_fun_array.push("        "), shop_addr && _template_fun_array.push('            <div class="info-content-item">单位地址：', "undefined" == typeof shop_addr ? "" : baidu.template._encodeHTML(shop_addr), "</div>        "), _template_fun_array.push('        <div class="info-content-item">数据来源：北京市食品药品监督管理局</div>    </div></div>'), _template_varName = null
                        }(_template_object);
                    return fn = null, _template_fun_array.join("")
                }][0];
                $certShopSafetyInfoContainer.append(beijingAptitudeTpl(wdata.shop_safety_info))
            }
        }
        "233" === wdata.city_id && $(".btm-section").append("。如有食品安全问题，请向西安市食品药监局投诉，举报电话 ：029-12331")
    }, cert.prototype.renderNull = function() {
        noresult.show("此商户暂无认证信息", this.$commCon)
    }, cert.prototype.checkForm = function(e) {
        for (var t = ["zizhi", "message"], a = {
            zizhi: "请选择举报类型~",
            message: "请填写信息描述~"
        }, n = e.find("form"), i = n.serialize(), o = !0, l = 0, r = t.length; r > l; l++) {
            if (-1 == i.indexOf(t[l])) return o = !1, void GlobalTips.tip(a[t[l]]);
            n.find("[name=" + t[l] + "]").val() || (o = !1, GlobalTips.tip(a[t[l]]))
        }
        return o
    }, cert.prototype.submitDialog = function(e) {
        for (var t = e.find("form"), a = t.serializeArray(), n = {}, i = 0, o = a.length; o > i; i++) n[a[i].name] = n[a[i].name] ? n[a[i].name] + "," + a[i].value : a[i].value;
        $.ajax({
            url: POST_AJAX,
            type: "post",
            dataType: "json",
            data: n,
            success: function(e) {
                0 == e.error_no ? (GlobalTips.tip("举报成功，谢谢您的举报！"), popDialog.hide()) : GlobalTips.tip(e.error_msg || "网络错误")
            }
        })
    }, cert.prototype.bindEvent = function() {
        var e = this;
        $('[data-node="imgList"]').on("click", function(e) {
            var t, a, n = [];
            "img" === e.target.tagName.toLowerCase() && (t = $(e.target).data("index"), a = $(e.target).parents('[data-node="imgList"]'), n = a.find("img").map(function() {
                return {
                    src: $(this).attr("src"),
                    rsrc: $(this).attr("data-real-src")
                }
            }), new popCarousel({
                data: n,
                index: t
            }))
        }), e.$el.find('[data-node="jubao"]').on("click", function() {
            if (e.isLogin) {
                var t = dialogTpl({
                    shopId: e.shopId
                });
                popDialog = new Dialog({
                    html: t
                }), popDialog.show();
                var a = popDialog.getElement();
                a.on("click", "[data-node=submit]", function() {
                    e.checkForm(a) && e.submitDialog(a)
                })
            } else require.async("waimai:widget/common/userinfo/UserMgr.js", function(e) {
                e.login({
                    url: window.location.href
                })
            })
        })
    }, exports = module.exports = new cert
});;
define("waimai:widget/common/menucommon/collect/collect.js", function(t, o, i) {
    var n = "/waimai/user/favorite/add?display=json",
        a = "/waimai/user/favorite/del?display=json",
        e = t("waimai:static/utils/GlobalTips.js"),
        s = function() {};
    s.prototype.init = function(t, o) {
        this.$el = $("#widget-menu-collect"), this.shopId = t, this.favLabel = o, this.$colBtn = this.$el.find('[data-node="collectBtn"]'), this.$colTxt = this.$el.find('[data-node="collectTxt"]'), this.bindEvent()
    }, s.prototype.bindEvent = function() {
        var o = this;
        $("[data-node=loginImmediate]").on("click", function() {
            window.location = "https://passport.baidu.com/v2/?login&u=" + window.location.href
        }), this.$el.on("click", '[data-node="collectBtn"]', function(i) {
            var s = $(this).attr("from");
            addNStat({
                da_trd: "waimai",
                da_src: "pageMarketBk.collection" + s,
                da_act: "click"
            });
            var c = $(i.currentTarget);
            if (2 == o.favLabel) t.async("waimai:widget/common/userinfo/UserMgr.js", function(t) {
                t.login({
                    url: window.location.href
                })
            });
            else {
                var l = $("#bdstoken").val();
                $.ajax(c.hasClass("select") ? {
                    url: a,
                    dataType: "json",
                    data: {
                        shop_id: o.shopId,
                        bdstoken: l
                    },
                    success: function(t) {
                        0 == t.error_no ? (o.$colBtn.removeClass("select"), o.$colTxt.html("收藏商户"), e.tip("取消收藏成功")) : e.tip("取消收藏失败")
                    },
                    error: function() {
                        e.tip("取消收藏失败")
                    }
                } : {
                    url: n,
                    dataType: "json",
                    data: {
                        shop_id: o.shopId,
                        bdstoken: l
                    },
                    success: function(i) {
                        0 == i.error_no ? (o.$colBtn.addClass("select"), o.$colTxt.html("已收藏"), e.tip("收藏成功")) : 1102 == i.error_no ? t.async("waimai:widget/common/userinfo/UserMgr.js", function(t) {
                            t.login({
                                url: window.location.href
                            })
                        }) : e.tip("收藏失败")
                    },
                    error: function() {
                        e.tip("收藏失败")
                    }
                })
            }
        })
    }, o = i.exports = new s
});;
define("waimai:widget/common/menucommon/comment/comment.js", function(require, exports, module) {
    var COMMENT_AJAX = "/waimai/comment/getshop?display=json",
        util = require("wcommon:static/util.js"),
        commTpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push("");
                    for (var i = fromIdx, len = Math.min(fromIdx + 20, commentCon.length); len > i; i++) {
                        var item = commentCon[i];
                        if (_template_fun_array.push('    <div class="list clearfix">        <div class="top-section">                <span class="user-name">', "undefined" == typeof item.pass_name ? "" : baidu.template._encodeHTML(item.pass_name), '</span>                <span class="rate">                    <span class="rate-inner" style="width:', "undefined" == typeof(14.4 * item.score) ? "" : baidu.template._encodeHTML(14.4 * item.score), 'px"></span>                </span>                ', "undefined" == typeof item.score ? "" : baidu.template._encodeHTML(item.score), '分                <span class="delivery-time">                    送餐时间：', "undefined" == typeof item.cost_time ? "" : baidu.template._encodeHTML(item.cost_time), '分钟                </span>                <span class="fr">', "undefined" == typeof item.create_time ? "" : baidu.template._encodeHTML(item.create_time), '</span>        </div>        <div class="mid-section">            <p>', "undefined" == typeof item.content ? "" : baidu.template._encodeHTML(item.content), "</p>        </div>        "), item.recommend_dishes && item.recommend_dishes.length) {
                            _template_fun_array.push('            <div class="btm-section">                推荐商品：                ');
                            for (var j = 0, lenDish = item.recommend_dishes.length; lenDish > j; j++) _template_fun_array.push('                <span class="rec-dish">', "undefined" == typeof item.recommend_dishes[j] ? "" : baidu.template._encodeHTML(item.recommend_dishes[j]), "</span>                ");
                            _template_fun_array.push("            </div>        ")
                        }
                        _template_fun_array.push("    </div>")
                    }
                    _template_fun_array.push(""), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        Pagination = require("jsmod/ui/pagination"),
        noresult = require("waimai:widget/common/ui/noresult/noresult.js"),
        comment = function() {};
    comment.prototype.init = function(t) {
        this.data = t || {}, this.$el = $("#comment-list"), this.$commCon = this.$el.find("[data-node=commCon]"), this.$moreCom = this.$el.find("[data-node=moreCom]"), this.$pagination = this.$el.find("[data-node=pagination]"), this.initContent(), this.initPagination()
    }, comment.prototype.initOpt = function() {
        return {
            page: 1,
            count: 60,
            currIndex: 0
        }
    }, comment.prototype.initContent = function() {
        return this.data.content && this.data.content.length ? (this.opt = this.initOpt(), this.$commCon.html(commTpl({
            commentCon: this.data.content,
            fromIdx: 0
        })), this.opt.currIndex += 20, void this.bindEvent()) : void this.renderNull()
    }, comment.prototype.renderContent = function() {
        0 == this.opt.currIndex ? ($("body").scrollTop(0), this.$commCon.html(commTpl({
            commentCon: this.data.content,
            fromIdx: this.opt.currIndex
        }))) : this.$commCon.append(commTpl({
            commentCon: this.data.content,
            fromIdx: this.opt.currIndex
        })), this.opt.currIndex += 20
    }, comment.prototype.renderNull = function() {
        noresult.show("此商户暂无评论数据", this.$commCon)
    }, comment.prototype.initPagination = function() {
        var t = parseInt(this.data.comment_num, 10),
            e = this,
            n = this.opt.count,
            o = Math.ceil(t / n);
        this.pagin || o >= 2 && (this.pagin = new Pagination(this.$pagination[0], {
            pageCount: Math.ceil(t / n),
            maxShowPage: 10,
            preventInitEvent: !0,
            textLabel: ["", "&nbsp;", "&nbsp;", ""]
        }), $(this.pagin).on("page", function(t, n) {
            e.loadNew(n.page + 1)
        }))
    }, comment.prototype.loadNew = function(t) {
        var e = this.opt.count,
            n = this;
        $.ajax({
            url: COMMENT_AJAX,
            dataType: "json",
            data: {
                shop_id: n.data.release_id,
                page: t || 0,
                count: e
            },
            success: function(t) {
                0 == t.error_no ? (n.data.content = t.result.content, n.opt.currIndex = 0, n.renderContent()) : GlobalTips.topTip(t.error_msg, !0)
            },
            error: function() {
                GlobalTips.topTip("网络错误！", !0)
            }
        })
    }, comment.prototype.bindEvent = function() {
        var t = this;
        $(window).on("scroll", function() {
            setTimeout(function() {
                var e = $("body").height(),
                    n = $(window).height();
                $(window).scrollTop() + n >= e - 300 && t.opt.currIndex < t.data.content.length && t.renderContent(), t.opt.currIndex >= t.data.content.length - 1 && t.$pagination.show()
            }, 500)
        })
    }, exports = module.exports = new comment
});;
define("waimai:widget/common/menucommon/fill_diff/fill_diff.js", function(require, exports, module) {
    function bear_to_left() {
        var e = 1 * cartDC.getAmount().productAmount,
            t = 1 * cartDC.getAmount().packFee,
            a = 1 * cartDC.getAmount().takeOutPrice,
            i = (e + t) / a,
            d = 0;
        $(".menu-cart").hasClass("cart-hide") && ($(".menu-cart").find(".pointer").trigger("click"), d = 200), setTimeout(function() {
            i >= N && 1 > i && (0 != settime_picker && (clearTimeout(settime_picker), settime_picker = 0), $fill_diff_table.css("display", "inline-block"), $fill_diff_bear.css("background-image", "url(" + bear_right_img + ")"), $fill_diff_bear.attr("status", "right"), $fill_diff.css("left", fill_diff_left - 225 + "px"))
        }, d)
    }
    function bear_to_right() {
        var e = 1 * cartDC.getAmount().productAmount,
            t = 1 * cartDC.getAmount().packFee,
            a = 1 * cartDC.getAmount().takeOutPrice,
            i = (e + t) / a;
        $fill_diff_bear.css("background-image", "url(" + bear_left_img + ")"), $fill_diff_bear.attr("status", "left"), $fill_diff.css("left", fill_diff_left + "px"), 0 == e ? ($fill_diff_table.css("display", "none"), $fill_diff.css("display", "none")) : settime_picker = setTimeout(function() {
            if ($fill_diff_table.css("display", "none"), N > i || i > 1) $fill_diff.css("display", "none");
            else {
                var e = cartDC.getAmount(),
                    t = cartDC.fetchItems();
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: "/shopui?qt=supplementary",
                    data: {
                        priceDifference: e.cha,
                        wid: t.shop_id,
                        products: t.products
                    },
                    success: function(e) {
                        0 == e.error_no && 0 != e.result.length ? ($fill_diff_table.html(fill_diff_table_data({
                            data: e.result
                        })), new Tip({
                            targets: ".fill_diff_name",
                            className: "fill_diff_name_hover",
                            trigger: "hover",
                            targetType: "top",
                            offset: {
                                top: 0,
                                left: 0
                            }
                        })) : $fill_diff.css("display", "none")
                    }
                })
            }
        }, 1e3)
    }
    function moveToCart(e, t) {
        var a = e.find(t),
            i = 1 * a.attr("haveAttr"),
            d = a.attr("itemid"),
            f = "[data-sid=item_" + d + "]";
        if ($(".list-item").filter(f).find(".addtocart").eq(0).trigger("click", !0), 1 == i) {
            var r = a.attr("attrid"),
                n = d + "_" + r,
                l = "[data-id=" + n + "]",
                k = $(".s-item").filter(l).eq(0);
            k.siblings().removeClass("sec"), k.addClass("sec"), k.closest(".list-item").find(".submit-btn").eq(0).trigger("click", !0), setTimeout(function() {
                $(".list-item").filter(f).find(".list-item-overlay").css("display", "none")
            }, 100)
        }
    }
    function bindEvent() {
        $("body").delegate(".addAnim_fill_diff", "click", function(e) {
            e.stopPropagation()
        }), $fill_diff_bear.on("click", function(e) {
            var t = $fill_diff_bear.attr("status");
            "left" == t ? (addNStat({
                da_trd: "waimai",
                da_src: "bearBk",
                da_act: "click"
            }), bear_to_left()) : "right" == t && bear_to_right(), e.stopPropagation()
        }), $fill_diff.on("click", function(e) {
            e.stopPropagation()
        }), $("body").on("click", function() {
            var e = $fill_diff_bear.attr("status");
            "right" == e && bear_to_right()
        }), $window.on("resize", function() {
            var e = (document.body.offsetWidth - 980) / 2 + 130;
            $(".imageText").css("left", e), $(".cart-panel").css("max-height", .6 * $(window).height());
            var t = $fill_diff_bear.attr("status");
            cart_offset = 1 * $cart.offset().left, fill_diff_left = cart_offset - 86, "left" == t ? $fill_diff.css("left", fill_diff_left + "px") : "right" == t && $fill_diff.css("left", fill_diff_left - 225 + "px")
        }), $fill_diff.delegate(".fill_diff_add span", "click", function() {
            addNStat({
                da_trd: "waimai",
                da_src: "addToCartBk",
                da_act: "click"
            }), $("#cartSubmit").addClass("fillDiffClick");
            var e = 1 * $(this).parent().attr("item"),
                t = $(".cart-section .cart-bar").offset(),
                a = $(this).parent().parent();
            1 == e ? moveToCart(a, ".fill_diff_item") : 2 == e && (moveToCart(a, ".fill_diff_item_1"), moveToCart(a, ".fill_diff_item_2")), AddToCartAnim.addAnim_fill_diff($(this).parent().parent(), t)
        })
    }
    var util = require("wcommon:static/util.js"),
        exports, settime_picker = 0,
        $window = $(window),
        $fill_diff = $("#fill_diff-section"),
        $cart = $("#cart-section"),
        $menu_cart = $(".menu-cart"),
        $fill_diff_bear = $("#fill_diff_bear"),
        $fill_diff_table = $("#fill_diff_table"),
        $fill_diff_add = $(".fill_diff_add").find("span"),
        cart_offset = 1 * $cart.offset().left,
        fill_diff_left = cart_offset - 87,
        bear_right_img = "data:image/png;base64,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",
        bear_left_img = "data:image/png;base64,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",
        AddToCartAnim = require("waimai:widget/common/menucommon/cart/AddToCartAnim.js"),
        cartDC = require("waimai:static/utils/CartDataCenter.js"),
        Tip = require("jsmod/ui/fixElement/tip"),
        N = .6,
        fill_diff_table_data = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push("<table>    ");
                    for (var i = 0; i < data.length; i++) _template_fun_array.push("    "), 1 == data[i].length ? _template_fun_array.push('    <tr>        <td class="fill_diff_name" data-content="', "undefined" == typeof data[i][0].name ? "" : baidu.template._encodeHTML(data[i][0].name), '">            <span class="fill_diff_item" haveAttr="', "undefined" == typeof data[i][0].have_attr ? "" : baidu.template._encodeHTML(data[i][0].have_attr), '" itemid="', "undefined" == typeof data[i][0].id ? "" : baidu.template._encodeHTML(data[i][0].id), '" attrid="', "undefined" == typeof data[i][0].attr_id ? "" : baidu.template._encodeHTML(data[i][0].attr_id), '">', "undefined" == typeof data[i][0].name ? "" : baidu.template._encodeHTML(data[i][0].name), '</span>        </td>        <td class="fill_diff_price">            <span>¥', "undefined" == typeof data[i][0].current_price.toFixed(1) ? "" : baidu.template._encodeHTML(data[i][0].current_price.toFixed(1)), '</span>        </td>        <td class="fill_diff_add" item="1">            <span></span>        </td>    </tr>        ') : 2 == data[i].length && _template_fun_array.push('    <tr>        <td class="fill_diff_name" data-content="', "undefined" == typeof data[i][0].name ? "" : baidu.template._encodeHTML(data[i][0].name), "+", "undefined" == typeof data[i][1].name ? "" : baidu.template._encodeHTML(data[i][1].name), '">            <span class="fill_diff_item_1" haveAttr="', "undefined" == typeof data[i][0].have_attr ? "" : baidu.template._encodeHTML(data[i][0].have_attr), '" itemid="', "undefined" == typeof data[i][0].id ? "" : baidu.template._encodeHTML(data[i][0].id), '" attrid="', "undefined" == typeof data[i][0].attr_id ? "" : baidu.template._encodeHTML(data[i][0].attr_id), '">', "undefined" == typeof data[i][0].name ? "" : baidu.template._encodeHTML(data[i][0].name), '</span>            <span class="fill_diff_item_plus">+</span>            <span class="fill_diff_item_2" haveAttr="', "undefined" == typeof data[i][1].have_attr ? "" : baidu.template._encodeHTML(data[i][1].have_attr), '" itemid="', "undefined" == typeof data[i][1].id ? "" : baidu.template._encodeHTML(data[i][1].id), '" attrid="', "undefined" == typeof data[i][1].attr_id ? "" : baidu.template._encodeHTML(data[i][1].attr_id), '">', "undefined" == typeof data[i][1].name ? "" : baidu.template._encodeHTML(data[i][1].name), '</span>        </td>        <td class="fill_diff_price">            <span>¥', "undefined" == typeof(1 * data[i][0].current_price + 1 * data[i][1].current_price).toFixed(1) ? "" : baidu.template._encodeHTML((1 * data[i][0].current_price + 1 * data[i][1].current_price).toFixed(1)), '</span>        </td>        <td class="fill_diff_add" item="2">            <span></span>        </td>    </tr>    '), _template_fun_array.push("    ");
                    _template_fun_array.push("</table>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0];
    exports = module.exports = {
        init: function() {
            $fill_diff.css("left", fill_diff_left + "px"), bindEvent()
        }
    }
});;
define("waimai:widget/common/menucommon/map/map.js", function(a, e) {
    function n() {
        var a = {};
        a.lng = decodeURIComponent(C.getRaw(M.COOKIE_LNG_KEY)), a.lat = decodeURIComponent(C.getRaw(M.COOKIE_LAT_KEY)), a.address = decodeURIComponent(C.getRaw(M.COOKIE_ADDR_KEY)), w = a
    }
    function o(a, e) {
        if (a) {
            if ("mypos" == e) var n = new BMap.Icon(f, new BMap.Size(32, 32));
            else var n = new BMap.Icon(_, new BMap.Size(26, 26));
            var o = new BMap.Marker(a, {
                icon: n
            });
            u.addOverlay(o), h.push(a)
        }
    }
    function t() {
        h.length > 1 && u.setViewport(h)
    }
    function i() {
        if (shop_lng && shop_lat) {
            var a = u.getMapType().getProjection(),
                e = new BMap.Pixel(shop_lng, shop_lat);
            d = a.pointToLngLat(e)
        } else d = new BMap.Point(116.395645, 39.929986)
    }
    function p() {
        if (w.lat && w.lng && "null" != w.lat && "null" != w.lng) {
            var a = u.getMapType().getProjection(),
                e = new BMap.Pixel(w.lng, w.lat);
            r = a.pointToLngLat(e)
        }
    }
    function c() {
        if (d && r) {
            var a = new BMap.Polyline([d, r], {
                strokeColor: "red",
                strokeWeight: 4,
                strokeOpacity: .5
            });
            u.addOverlay(a), l()
        }
    }
    function l() {
        function a() {
            this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT, this.defaultOffset = new BMap.Size(10, 10)
        }
        var e = u.getDistance(d, r).toFixed(0);
        "NaN" == e && (e = 0), a.prototype = new BMap.Control, a.prototype.initialize = function(a) {
            var n = document.createElement("div");
            return n.appendChild(document.createTextNode("距离 " + e + " 米")), n.className = "mapTopCtrl", a.getContainer().appendChild(n), n
        };
        var n = new a;
        u.addControl(n)
    }
    function m() {
        u = new BMap.Map("MapHolder", {
            enableMapClick: !1
        }), i(), o(d, "shoppos"), u.centerAndZoom(d, 15), p(), o(r, "mypos"), c(), t(), u.enableScrollWheelZoom(), u.enableContinuousZoom()
    }
    function s() {
        function a() {
            $("#MapHolder").show(), $(".map .max").show(), $(".map #mapLoading").hide(), m()
        }!
        function() {
            window.BMap ? a() : setTimeout(s, 10)
        }()
    }
    var d, r, u, w, g = (a("wcommon:static/util/DataHelper.js"), a("wcommon:static/util.js")),
        f = "https://static.waimai.baidu.com/static/waimai/widget/common/menucommon/map/mypos_8f78acd.png",
        _ = "https://static.waimai.baidu.com/static/waimai/widget/common/menucommon/map/target_be87464.png",
        h = [],
        C = a("wcommon:static/util/Cookie.js"),
        M = {
            COOKIE_LNG_KEY: "wm_callbacklng",
            COOKIE_LAT_KEY: "wm_callbacklat",
            COOKIE_ADDR_KEY: "wm_callbackaddr"
        };
    e.init = function(a, e) {
        shop_lat = a, shop_lng = e, n(), s(), g.loadCss("https://api.map.baidu.com/res/13/bmap.css")
    }
});;
define("waimai:widget/common/menucommon/notice/notice.js", function(o, t, e) {
    var a = !0,
        i = {
            cacheData: "",
            showFlag: !0,
            shopNotice: "",
            limitLen: 200,
            init: function() {
                var o = this;
                o.cacheData = "", o.$el = $("#shop-notice");
                var t = o.$el.find('[data-node="hiddenText"]').text();
                t = t ? t : "本店欢迎您下单，用餐高峰请提前下单，谢谢！", t = t.length > 300 ? t.substr(0, 296) + "..." : t, o.$el2 = $(".notice-float"), o.shopNotice2 = o.$el2.find('[data-node="shop-notice-2"]'), o.shopNotice = o.$el.find('[data-node="shop-notice"]');
                o.$el.find('[data-node="shop-noticeEvt"]');
                o.$el.on("click", '[data-node="shop-noticeEvt"]', $.proxy(o.shopNoticeEvt, o)), o.$el2.on("click", '[data-node="shop-noticeEvt"]', $.proxy(o.shopNoticeEvt, o)), "" != t ? t.length < o.limitLen ? (o.shopNotice.html(t), o.shopNotice2.html(t)) : (o.cacheData = t, t = t.replace(" ", "*"), t = t.substr(0, o.limitLen), t = t.replace("*", ""), o.shopNotice.html(t + '<br/><a class="notice-a" data-node="shop-noticeEvt">查看更多</a>'), o.shopNotice2.html(t + '<br/><a class="notice-a" data-node="shop-noticeEvt">查看更多</a>'), o.showFlag = !1) : o.shopNotice.html("本店欢迎您下单，用餐高峰请提前下单，谢谢！"), $(window).bind("scroll", function() {
                    {
                        var t = $(window).scrollTop();
                        $("body").height(), $(window).height()
                    }
                    o.$sourceinfo = $('[node-data="sourceinfo"]');
                    var e = o.$sourceinfo.offset().top;
                    t > e ? (a = !1, o.$el2.fadeIn("slow")) : a || (o.$el2.fadeOut("slow"), a = !0)
                })
            },
            shopNoticeEvt: function() {
                var o = this;
                if (0 == o.showFlag) o.shopNotice.html(o.cacheData + '<br/><a class="notice-a" data-node="shop-noticeEvt">收起</a>'), o.shopNotice2.html(o.cacheData + '<br/><a class="notice-a" data-node="shop-noticeEvt">收起</a>'), o.showFlag = !0;
                else {
                    var t = o.cacheData.substr(0, i.limitLen);
                    o.shopNotice.html(t + '<br/><a class="notice-a" data-node="shop-noticeEvt">查看更多</a>'), o.shopNotice2.html(t + '<br/><a class="notice-a" data-node="shop-noticeEvt">查看更多</a>'), o.showFlag = !1
                }
            }
        };
    e.exports = {
        init: function() {
            i.init()
        }
    }
});;
define("waimai:widget/common/menucommon/premiumnotice/premiumnotice.js", function() {});