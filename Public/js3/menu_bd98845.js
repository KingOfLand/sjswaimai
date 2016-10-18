define("waimai:widget/menu/filter/filter.js", function(e, t, i) {
    var n = $("#menuFilter"),
        r = $(".menu-filter"),
        a = n.find(".menu-filter"),
        s = a.find("a"),
        o = n.find(".curMenu"),
        m = e("waimai:static/utils/GlobalTips.js"),
        u = -1,
        l = e("waimai:widget/common/menucommon/cart/cart.js"),
        d = {},
        f = [];
    $(".menu-filter a").click(function(e) {
        e.preventDefault();
        var i = $(this).attr("data");
        $(t).trigger("click.filter", {
            index: i,
            offset: 15
        }), addNStat({
            da_src: "filterBk.itemlnk",
            da_act: "click",
            da_trd: "waimai"
        });
        var n = $(this).find(".item-name");
        n.hasClass("menu-hover") && n.removeClass("menu-hover")
    }).mouseenter(function() {
        var e = $(this).find(".item-name");
        e.hasClass("cur") || e.addClass("menu-hover")
    }).mouseleave(function() {
        $(this).find(".item-name").removeClass("menu-hover")
    });
    var c = $(".menu-filter a").height(),
        h = parseInt($(".menu-filter a").css("marginTop")) || 0,
        g = parseInt($(".menu-filter a").css("marginBottom")) || 0,
        v = c + h + g,
        p = r.height(),
        C = parseInt(r.css("paddingTop")) || 0,
        w = parseInt(r.css("paddingBottom")) || 0,
        T = p - C - w;
    if (T > 3 * v) {
        r.height(3 * v), r.addClass("hasArr overHidden");
        var A = null;
        r.hover(function() {
            clearTimeout(A);
            var e = $(this),
                t = e.height(),
                i = e.css("height", "auto").height();
            e.height(t).animate({
                height: i
            }, "slow"), e.toggleClass("upArr"), $(".bottomArr").addClass("upArr")
        }, function() {
            var e = $(this);
            clearTimeout(A), A = setTimeout(function() {
                e.animate({
                    height: 3 * v + "px"
                }, "slow"), e.toggleClass("upArr"), $(".bottomArr").removeClass("upArr")
            }, 500)
        })
    }
    t = i.exports = {
        init: function(e) {
            for (var t = e, i = 1, n = 0, r = t.length; r > n; n++) i = t[n].category_id ? t[n].category_id : 1, d[i] = t[n].catalog, f.push(i);
            this.initBindEvent()
        },
        setCurMenu: function(e) {
            if (e != u) {
                if (-1 == e) return u = e, void n.hide();
                s.find(".item-name").removeClass("cur"), u = e, s.eq(u).find(".item-name").removeClass("menu-hover").addClass("cur"), n.show();
                var t = s.eq(u);
                o.html("<strong>" + t.find(".item-name").html() + "</strong>" + t.find(".item-num").html())
            }
        },
        initBindEvent: function() {
            $(l).bind("filter.requireSelect", function(e, i) {
                t.setCurCategory(i)
            })
        },
        setCurCategory: function(e) {
            var t = f.indexOf(e);
            return -1 == t ? !1 : d[e] ? ($('[category_id="' + e + '"]').click(), void setTimeout(function() {
                m.tip("您还有" + d[e] + "分类的菜品未选择,请选择后再下单", "offTop")
            }, 100)) : ""
        }
    }
});;
define("waimai:widget/menu/list/list.js", function(require, exports, module) {
    function setMenuListTop() {
        menuListTop || (menuListTop = [], $(".list-wrap").each(function(t, e) {
            menuListTop.push($(e).offset().top - filterHight - 10)
        }))
    }
    function getSubmitRes(t) {
        var e = t.find("[data-key]"),
            a = {};
        a.select = {};
        for (var i = 0, d = e.length; d > i; i++) {
            var n = $(e[i]),
                r = n.data("key"),
                s = n.find("span.sec");
            a.select[r] = {
                value: s.data("value"),
                id: s.data("id")
            }, 1 == n.data("maink") && (a.itemId = s.data("id"), a.itemStock = s.data("leftn"), a.itemPrice = s.data("price"))
        }
        a.itemId || (a.itemId = t.find("[name=itemId]").val()), a.itemStock || (a.itemStock = t.find("[name=itemStock]").val()), a.itemPrice || (a.itemPrice = t.find("[name=itemPrice]").val());
        var o = parseInt(t.find("[data-node=selCount]").text());
        return a.itemCount = o, a
    }
    function addObjToCart(t, e) {
        var a = [];
        if (t.itemCount && t.itemId) {
            for (var i in t.select) a.push(t.select[i].id);
            var d = {
                itemId: e[0] + a.sort().join("__"),
                orignItemId: e[0],
                selectFeatures: t,
                itemCount: t.itemCount,
                itemName: e[1],
                itemPrice: t.itemPrice,
                packCount: e[3],
                packPrice: e[4],
                minOrderNumber: e[5],
                itemStock: t.itemStock,
                itemDishType: "attr",
                type: "append",
                category_id: e[8],
                require_category_id: e[9],
                uniqId: e[10]
            };
            $(exports).trigger("addItem", d)
        }
    }
    function bindEvent() {
        $(window).bind("resize.menulist scroll.menulist", function() {
            scrollY = $(window).scrollTop(), setMenuListTop();
            for (var t = -1, e = 0, a = menuListTop.length; a > e; e++) menuListTop[e] < scrollY && (t = e);
            $(exports).trigger("scroll", t)
        }), $el.on("click", "[data-node=sizeTable] .s-item", function(t) {
            var e = $(t.currentTarget),
                a = e.data("price"),
                i = e.data("leftn"),
                d = e.parents(".list-item"),
                n = e.parents("tr");
            n.find(".s-item").removeClass("sec"), e.addClass("sec"), a && d.find("[data-node=guigePrice]").html(a), void 0 != i && parseInt(i) < 50 ? (d.find("[data-node=itemStock]").html("库存" + i).show(), d.find("[data-node=itemDivider]").show()) : void 0 != i && parseInt(i) > 50 && (d.find("[data-node=itemStock]").hide(), d.find("[data-node=itemDivider]").hide())
        }), $el.on("click", "[data-node=selBtn]", function(t) {
            var e = $(t.target),
                a = $(this).closest(".list-item"),
                i = a.find("[data-maink=1]");
            _countDom = a.find("[data-node=selCount]"), _num = parseInt(_countDom.data("value")) || 0, _type = e.data("action"), _stock = parseInt(i.find(".sec").data("leftn")) || a.find("[name=itemStock]").val();
            var d = parseInt(_countDom.data("minordernumber")) || 1;
            if ("add" == _type) {
                var n = _num + 1;
                if (n > _stock) return;
                n == _stock && e.addClass("disable"), d > n && (n = d), _countDom.data("value", n), _countDom.html(n)
            } else if ("minus" == _type && _num >= 1) {
                var n = _num - 1;
                a.find("[data-action=add]").removeClass("disable"), d > n && (n = 0), _countDom.data("value", n), _countDom.html(n)
            }
        }), $el.on("click", "[data-node=submitBtn]", function(t, e) {
            t.stopPropagation(), $("#fill_diff-section").attr("state", "non-trigger"), e && $("#fill_diff-section").attr("state", "trigger");
            var a = ($(t.currentTarget), $(this).parents(".list-item"));
            if (!a.hasClass("disableAdd")) {
                var i = getSubmitRes(a),
                    d = a.attr("data").split("$");
                addObjToCart(i, d), listTip.hide(a.find('[data-tag="mutiple"]')[0])
            }
        }), $el.on("click", "[data-node=closeTip]", function(t) {
            var e = ($(t.currentTarget), $(this).parents(".list-item"));
            listTip.hide(e.find('[data-tag="mutiple"]')[0])
        }), $(".menu-list .list-item [data-tag=mutiple]").click(function(t, e) {
            e && t.stopPropagation();
            var a = this,
                i = $(this).data("content") || [],
                d = !1,
                n = $(this).data("features"),
                r = $(this).closest(".list-item"),
                s = r.attr("data").split("$");
            for (var o in i) i[o].mainK = 1, d = 1;
            data = $.extend(n, i);
            var l = {
                defaultp: d ? "0" : s[2],
                defaultstock: d ? 0 : s[6],
                packCount: s[3],
                minOrderNumber: s[5],
                itemName: s[1],
                itemId: s[0],
                category_id: s[8],
                require_category_id: s[9],
                uniqId: s[10]
            };
            listTip.resetTip(a, {
                content: tipTpl({
                    data: data,
                    defaultD: l
                })
            }), t.preventDefault()
        }), $(".menu-list .list-item [data-tag=setmeal]").click(function(t) {
            var e = $(this).closest(".list-item"),
                a = e.attr("data").split("$"),
                i = {
                    itemId: a[0],
                    itemName: a[1],
                    itemPrice: a[2],
                    packCount: a[3],
                    packPrice: a[4],
                    minOrderNumber: a[5],
                    itemStock: a[6],
                    isFixedPrice: a[7],
                    itemDishType: 2,
                    category_id: a[8],
                    require_category_id: a[9],
                    uniqId: a[10]
                },
                d = $(t.currentTarget).find("[data-node=setmealdata]").val(),
                n = JSON.parse(d) || [],
                r = new Dialog({
                    html: "<span>loading</span>"
                }),
                s = r.getElement();
            setMealIns = new setMeal({
                data: {
                    groups: n,
                    basics: i
                },
                $el: s,
                onSubmitBtn: function(t) {
                    $(exports).trigger("addItem", t), r.hide()
                }
            }), r.show()
        }), $(".menu-list .list-item [data-node=addtocart]").click(function(t, e) {
            $("#fill_diff-section").attr("state", "non-trigger"), e && ($("#fill_diff-section").attr("state", "trigger"), t.stopPropagation());
            t.preventDefault();
            var a, i = $(this).closest(".list-item"),
                d = i.attr("data").split("$"),
                n = parseInt(i.find(".select_count").html()),
                r = n >= d[5] ? 1 : d[5] - n,
                s = i.attr("orderlimit"),
                o = i.attr("dishlimit"),
                l = (i.attr("leftnum"), i.attr("dishactflag") || 0),
                m = i.find(".dishSelectElem"),
                u = i.attr("dishActivityId");
            i.hasClass("disableAdd") || (n += r, a = {
                itemId: d[0],
                itemCount: n,
                itemName: d[1],
                itemPrice: d[2],
                packCount: d[3],
                packPrice: d[4],
                minOrderNumber: d[5],
                itemStock: d[6],
                dishactflag: l,
                dishactid: u,
                dishlimit: o,
                orderlimit: s,
                elem: m,
                category_id: d[8] || u,
                require_category_id: d[9],
                uniqId: d[10]
            }, $(exports).trigger("addItem", a), addNStat({
                da_src: "menuListBk.menuBtn",
                da_act: "click",
                da_trd: "waimai"
            }))
        }), $(".menu-list .list-item [data-node=minusfrcart]").click(function(t, e) {
            $("#fill_diff-section").attr("state", "non-trigger"), e && $("#fill_diff-section").attr("state", "trigger");
            t.preventDefault(), t.stopPropagation();
            var a, i = $(this).closest(".list-item"),
                d = i.attr("data").split("$"),
                n = i.attr("dishactflag") || !1,
                r = i.attr("orderlimit"),
                s = i.attr("dishlimit"),
                o = (i.attr("leftnum"), parseInt(i.find(".select_count").html())),
                l = o > d[5] ? 1 : o,
                m = i.attr("dishActivityId");
            o -= l, a = {
                itemId: d[0],
                itemCount: o,
                itemName: d[1],
                itemPrice: d[2],
                packCount: d[3],
                packPrice: d[4],
                minOrderNumber: d[5],
                itemStock: d[6],
                dishactflag: n,
                dishactid: m,
                dishlimit: s,
                orderlimit: r,
                category_id: d[8],
                require_category_id: d[9],
                uniqId: d[10]
            }, $(exports).trigger("minusItem", a), addNStat({
                da_src: "menuListBk.menuBtnmin",
                da_act: "click",
                da_trd: "waimai"
            })
        }), new Tip({
            targets: ".list-item h3",
            className: "desc-float",
            trigger: "hover",
            targetType: "bottom,right,left",
            offset: {
                top: 0,
                left: 0
            }
        }), $(".list-item .have_attr").length && (listTip = new Tip({
            targets: ".list-item .have_attr",
            content: "",
            trigger: "click",
            offset: {
                top: -30
            },
            className: "list-item-overlay",
            targetType: "bottom,right,left"
        }))
    }
    function getQueryString(t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
            a = window.location.search.substr(1).match(e);
        return null != a ? unescape(a[2]) : null
    }
    var exports, menuListTop, listTip, setMealIns, filterHight = $(".menu-filter").outerHeight(!0) || 55,
        Tip = require("jsmod/ui/fixElement/tip"),
        Dialog = require("jsmod/ui/dialog"),
        tipTpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="add-overlay">    <div class="close" data-node="closeTip"></div>    <div class="content">        <input type="hidden" name="itemName" value="', "undefined" == typeof defaultD.itemName ? "" : baidu.template._encodeHTML(defaultD.itemName), '" />        <input type="hidden" name="packCount" value="', "undefined" == typeof defaultD.packCount ? "" : baidu.template._encodeHTML(defaultD.packCount), '" />        <input type="hidden" name="minOrderNumber" value="', "undefined" == typeof defaultD.minOrderNumber ? "" : baidu.template._encodeHTML(defaultD.minOrderNumber), '" />        <input type="hidden" name="itemId" value="', "undefined" == typeof defaultD.itemId ? "" : baidu.template._encodeHTML(defaultD.itemId), '" />        <input type="hidden" name="itemStock" value="', "undefined" == typeof defaultD.defaultstock ? "" : baidu.template._encodeHTML(defaultD.defaultstock), '" />        <input type="hidden" name="itemPrice" value="', "undefined" == typeof defaultD.defaultp ? "" : baidu.template._encodeHTML(defaultD.defaultp), '" />        <table class="size-table" data-node="sizeTable">            ');
                    for (var i in data) {
                        _template_fun_array.push('            <tr data-key="', "undefined" == typeof i ? "" : baidu.template._encodeHTML(i), '" data-maink="'), _template_fun_array.push(data[i].mainK ? "1" : "0"), _template_fun_array.push('">                <td valign="top" class="attr-title">', "undefined" == typeof i ? "" : baidu.template._encodeHTML(i), "：</td>                <td>                    ");
                        for (var j = 0, len = data[i].length; len > j; j++) 0 == j && data[i].mainK && (defaultD.defaultp = data[i][j].price, defaultD.defaultstock = data[i][j].left_num), _template_fun_array.push('                        <span class="s-item ', "undefined" == typeof(0 == j ? "sec" : "") ? "" : baidu.template._encodeHTML(0 == j ? "sec" : ""), '" data-price="', "undefined" == typeof data[i][j].price ? "" : baidu.template._encodeHTML(data[i][j].price), '"  data-id="', "undefined" == typeof data[i][j].id ? "" : baidu.template._encodeHTML(data[i][j].id), '" data-leftn="', "undefined" == typeof data[i][j].left_num ? "" : baidu.template._encodeHTML(data[i][j].left_num), '" data-value="', "undefined" == typeof data[i][j].name ? "" : baidu.template._encodeHTML(data[i][j].name), '">', "undefined" == typeof data[i][j].name ? "" : baidu.template._encodeHTML(data[i][j].name), "</span>                    ");
                        _template_fun_array.push("                </td>            </tr>            ")
                    }
                    _template_fun_array.push('            <tr>                <td  valign="middle" width="40px">单价：</td>                <td>                    <span>￥<span data-node="guigePrice">', "undefined" == typeof defaultD.defaultp ? "" : baidu.template._encodeHTML(defaultD.defaultp), '</span></span>                </td>            </tr>            <tr>                <td valign="middle">数量：</td>                <td>                    <div class="m-sel-icon" data-node="selBtn" unselectable="on" style="width:auto;">                        <strong class="minusfrcart" data-action="minus"></strong>                        <strong class="select_count" data-node="selCount" data-minordernumber="', "undefined" == typeof defaultD.minOrderNumber ? "" : baidu.template._encodeHTML(defaultD.minOrderNumber), '" data-value="', "undefined" == typeof defaultD.minOrderNumber ? "" : baidu.template._encodeHTML(defaultD.minOrderNumber), '">', "undefined" == typeof defaultD.minOrderNumber ? "" : baidu.template._encodeHTML(defaultD.minOrderNumber), '</strong>                        <strong class="addtocart" data-action="add"></strong>                        '), defaultD.defaultstock && defaultD.defaultstock < 50 ? _template_fun_array.push('                            <span class="stockcon" data-node="itemStock">库存', "undefined" == typeof defaultD.defaultstock ? "" : baidu.template._encodeHTML(defaultD.defaultstock), "</span>                        ") : _template_fun_array.push('                            <span class="stockcon" data-node="itemStock" style="display:none;"></span>                        '), _template_fun_array.push("                        "), defaultD.defaultstock && defaultD.defaultstock < 50 && defaultD.minOrderNumber > 1 && _template_fun_array.push('                            <span class="divider" data-node="itemDivider">|</span>                        '), _template_fun_array.push("                        "), defaultD.minOrderNumber > 1 && _template_fun_array.push('                            <span class="stockcon"><span  data-node="itemMin">', "undefined" == typeof defaultD.minOrderNumber ? "" : baidu.template._encodeHTML(defaultD.minOrderNumber), "</span>份起订</span>                        "), _template_fun_array.push('                    </div>                </td>            </tr>        </table>        <div class="btn-con">                <span class="submit-btn" data-node="submitBtn">加入到购物车</span>        </div>    </div></div>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        $el = $(".menu-list"),
        setMeal = require("waimai:widget/common/ui/setmeal/setmeal.js");
    exports = module.exports = {
        init: function() {
            bindEvent(), setMenuListTop();
            var t = getQueryString("hotdishid"),
                e = getQueryString("searchdishid"),
                a = getQueryString("buy"),
                i = getQueryString("dish"),
                d = t || e || i,
                n = e && !a;
            if (d) {
                var r = "[data-sid=item_" + d + "]",
                    s = $(".list-item").filter(r);
                if (s.length) {
                    var o = s.eq(0);
                    o.addClass("list-item-box-shadow"), $("body").on("click", function() {
                        o.removeClass("list-item-box-shadow")
                    });
                    var l = o.offset().top,
                        m = 0;
                    if (l - $(window).height() > 0 ? m = l - $(window).height() / 2 + 160 : l - $(window).height() / 2 > 0 && (m = l - $(window).height() / 2 + 160), $(window).scrollTop(m), n) return;
                    setTimeout(function() {
                        o.find(".dishSelectElem").trigger("click", !0)
                    }, 200)
                }
            }
        },
        jumpToMenu: function(t, e) {
            $(window).scrollTop(menuListTop[t] + e)
        },
        setItemStatus: function(t) {
            $.isArray(t) || (t = [t]), $.each(t, function(t, e) {
                $("[data-sid='item_" + e.itemId + "']").addClass("on").find(".select_count").html(e.itemCount)
            })
        },
        clearItemStatus: function(t) {
            return t ? ($.isArray(t) || (t = [t]), void $.each(t, function(t, e) {
                $("[data-sid='item_" + e.itemId + "']").removeClass("on"), $("[data-sid='item_" + e.itemId + "']").find(".select_count").html(0)
            })) : ($(".menu-list .on").removeClass("on").find(".select_count").html(0), void $(".menu-list .disableAdd").removeClass("disableAdd"))
        },
        setItemStockStatus: function(t) {
            $.isArray(t) || (t = [t]), $.each(t, function(t, e) {
                parseInt(e.itemCount) >= parseInt(e.itemStock) ? ($("[data-sid='item_" + e.itemId + "']").find(".info .m-price").addClass("hide").hide(), $("[data-sid='item_" + e.itemId + "']").find(".info .m-break").removeClass("hide").show(), $("[data-sid='item_" + e.itemId + "']").addClass("disableAdd")) : e.dishactflag || ($("[data-sid='item_" + e.itemId + "']").find(".info .m-break").addClass("hide").hide(), $("[data-sid='item_" + e.itemId + "']").find(".info .m-price").removeClass("hide").show(), $("[data-sid='item_" + e.itemId + "']").removeClass("disableAdd"))
            })
        },
        removeItemStockTight: function(t) {
            $.isArray(t) || (t = [t]), $.each(t, function(t, e) {
                $("[data-sid='item_" + e.itemId + "']").find(".info .m-break").addClass("hide").hide(), $("[data-sid='item_" + e.itemId + "']").find(".info .m-price").removeClass("hide").show()
            })
        },
        addItemStockTight: function(t) {
            $.isArray(t) || (t = [t]), $.each(t, function(t, e) {
                $("[data-sid='item_" + e.itemId + "']").find(".info .m-price").addClass("hide").hide(), $("[data-sid='item_" + e.itemId + "']").find(".info .m-break").removeClass("hide").show()
            })
        },
        checkCarItem: function(t) {
            var e = [];
            return $.isArray(t) || (t = [t]), $.each(t, function(a, i) {
                var d = $("[data-sid='item_" + i.itemId + "']"),
                    n = {};
                if (d.length) {
                    var r = d.attr("data").split("$");
                    if (n = {
                        itemCount: parseInt(i.itemCount),
                        itemName: r[1],
                        itemPrice: r[2],
                        packCount: r[3],
                        packPrice: r[4],
                        minOrderNumber: parseInt(r[5]) || 0,
                        itemStock: parseInt(r[6])
                    }, "0" == n.itemStock || n.minOrderNumber > n.itemStock) return t[a] = {}, !0;
                    n.itemCount >= n.itemStock && (n.itemCount = n.itemStock)
                }
                $.extend(t[a], n), e.push(t[a])
            }), e
        }
    }
});;
define("waimai:widget/menu/basicinfo/basicinfo.js", function(i, a, n) {
    n.exports = {
        init: function(i) {
            var a = i.shop_logo;
            if (a) {
                var n = $(".b-img img");
                n.attr("src", n.data("src"))
            }
        }
    }
});;
define("waimai:widget/menu/comside/comside.js", function() {});;
define("waimai:widget/menu/tab/tab.js", function() {});;
define("waimai:page/menu.js", function(require, exports, module) {
    function changeBear() {
        var t = 1 * cartDC.getAmount().productAmount,
            e = 1 * cartDC.getAmount().packFee,
            a = 1 * cartDC.getAmount().takeOutPrice,
            i = (t + e) / a,
            r = "block" == $fill_diff.css("display") ? !0 : !1;
        if (r) if ("right" == $fill_diff_bear.attr("status")) {
            var d = $fill_diff.attr("state");
            "non-trigger" == d && $fill_diff_bear.trigger("click")
        } else if (N > i || i > 1) $fill_diff.css("display", "none");
        else {
            var n = cartDC.getAmount(),
                f = cartDC.fetchItems();
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "/shopui?qt=supplementary",
                data: {
                    priceDifference: n.cha,
                    wid: f.shop_id,
                    products: f.products
                },
                success: function(t) {
                    0 == t.error_no && 0 != t.result.length ? ($fill_diff_table_menu.html(fill_diff_table_data_menu({
                        data: t.result
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
        } else if (i >= N && 1 > i) {
            var n = cartDC.getAmount(),
                f = cartDC.fetchItems();
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "/shopui?qt=supplementary",
                data: {
                    priceDifference: n.cha,
                    wid: f.shop_id,
                    products: f.products
                },
                success: function(t) {
                    0 == t.error_no && 0 != t.result.length && ($fill_diff_table_menu.html(fill_diff_table_data_menu({
                        data: t.result
                    })), $fill_diff.css("display", "block"), addNStat({
                        da_src: "displayBk",
                        da_act: "show"
                    }), new Tip({
                        targets: ".fill_diff_name",
                        className: "fill_diff_name_hover",
                        trigger: "hover",
                        targetType: "top",
                        offset: {
                            top: 0,
                            left: 0
                        }
                    }))
                }
            })
        }
    }
    function itemTotal() {
        for (var t = 0, e = 0; e < $("input.item-count").length; e++) t += 1 * $("input.item-count").eq(e).val();
        return t
    }
    var cartDC = require("waimai:static/utils/CartDataCenter.js"),
        filter = require("waimai:widget/menu/filter/filter.js"),
        list = require("waimai:widget/menu/list/list.js"),
        cart = require("waimai:widget/common/menucommon/cart/cart.js"),
        Browser = require("wcommon:static/util/Browser.js"),
        AddToCartAnim = require("waimai:widget/common/menucommon/cart/AddToCartAnim.js"),
        Tip = require("jsmod/ui/fixElement/tip"),
        cookie = require("wcommon:static/util/Cookie.js"),
        GlobalTips = require("waimai:static/utils/GlobalTips.js"),
        $fill_diff = $("#fill_diff-section"),
        $fill_diff_bear = $("#fill_diff_bear"),
        $fill_diff_table_menu = $("#fill_diff_table"),
        fill_diff_table_data_menu = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push("<table>    ");
                    for (var i = 0; i < data.length; i++) _template_fun_array.push("    "), 1 == data[i].length ? _template_fun_array.push('    <tr>        <td class="fill_diff_name" data-content="', "undefined" == typeof data[i][0].name ? "" : baidu.template._encodeHTML(data[i][0].name), '">            <span class="fill_diff_item" haveAttr="', "undefined" == typeof data[i][0].have_attr ? "" : baidu.template._encodeHTML(data[i][0].have_attr), '" itemid="', "undefined" == typeof data[i][0].id ? "" : baidu.template._encodeHTML(data[i][0].id), '" attrid="', "undefined" == typeof data[i][0].attr_id ? "" : baidu.template._encodeHTML(data[i][0].attr_id), '">', "undefined" == typeof data[i][0].name ? "" : baidu.template._encodeHTML(data[i][0].name), '</span>        </td>        <td class="fill_diff_price">            <span>¥', "undefined" == typeof data[i][0].current_price.toFixed(1) ? "" : baidu.template._encodeHTML(data[i][0].current_price.toFixed(1)), '</span>        </td>        <td class="fill_diff_add" item="1">            <span></span>        </td>    </tr>        ') : 2 == data[i].length && _template_fun_array.push('    <tr>        <td class="fill_diff_name" data-content="', "undefined" == typeof data[i][0].name ? "" : baidu.template._encodeHTML(data[i][0].name), "+", "undefined" == typeof data[i][1].name ? "" : baidu.template._encodeHTML(data[i][1].name), '">            <span class="fill_diff_item_1" haveAttr="', "undefined" == typeof data[i][0].have_attr ? "" : baidu.template._encodeHTML(data[i][0].have_attr), '" itemid="', "undefined" == typeof data[i][0].id ? "" : baidu.template._encodeHTML(data[i][0].id), '" attrid="', "undefined" == typeof data[i][0].attr_id ? "" : baidu.template._encodeHTML(data[i][0].attr_id), '">', "undefined" == typeof data[i][0].name ? "" : baidu.template._encodeHTML(data[i][0].name), '</span>            <span class="fill_diff_item_plus">+</span>            <span class="fill_diff_item_2" haveAttr="', "undefined" == typeof data[i][1].have_attr ? "" : baidu.template._encodeHTML(data[i][1].have_attr), '" itemid="', "undefined" == typeof data[i][1].id ? "" : baidu.template._encodeHTML(data[i][1].id), '" attrid="', "undefined" == typeof data[i][1].attr_id ? "" : baidu.template._encodeHTML(data[i][1].attr_id), '">', "undefined" == typeof data[i][1].name ? "" : baidu.template._encodeHTML(data[i][1].name), '</span>        </td>        <td class="fill_diff_price">            <span>¥', "undefined" == typeof(1 * data[i][0].current_price + 1 * data[i][1].current_price).toFixed(1) ? "" : baidu.template._encodeHTML((1 * data[i][0].current_price + 1 * data[i][1].current_price).toFixed(1)), '</span>        </td>        <td class="fill_diff_add" item="2">            <span></span>        </td>    </tr>    '), _template_fun_array.push("    ");
                    _template_fun_array.push("</table>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        N = .6;
    $(filter).bind("click.filter", function(t, e) {
        list.jumpToMenu(e.index, e.offset)
    }), $(list).bind("scroll", function(t, e) {
        Browser.msie && "6.0" == Browser.version || filter.setCurMenu(e)
    }), $(list).bind("addItem", function(t, e) {
        if (itemTotal() + 1 > 999) return void GlobalTips.tip("所点菜品数量过多");
        var a, i;
        cartDC.setCarItem(e), cartDC.fetchPremium(), a = $("[data-sid='item_" + e.itemId + "']").find("figure div"), i = $(".cart-section .cart-bar").offset();
        var r = "none" == $("#fill_diff_table").css("display") ? !0 : !1;
        a.length && i && r && AddToCartAnim.addAnim(a.eq(0), i, {
            width: "210px",
            height: "210px",
            zIndex: 801
        }), changeBear()
    }), $(list).bind("minusItem", function(t, e) {
        cartDC.setCarItem(e), cartDC.fetchPremium(), changeBear()
    }), $(cartDC).bind("premium.shopCar", function(t, e) {
        cart.addPremium(e), cart.addBoxPrice(e)
    }), $(cartDC).bind("failpremium.shopCar", function() {
        cart.setLocalPrice(cartDC.getAmount().productAmount)
    }), $(cartDC).bind("delete.shopCar", function(t, e) {
        list.setItemStockStatus(e), list.clearItemStatus(e), cart.delItem(e), cart.setAmount(cartDC.getAmount())
    }), $(cartDC).bind("update.shopCar", function(t, e) {
        list.setItemStockStatus(e), list.setItemStatus(e), cart.updateItem(e), cart.setItemStockStatus(e), cart.setAmount(cartDC.getAmount())
    }), $(cartDC).bind("add.shopCar", function(t, e) {
        list.setItemStockStatus(e), list.setItemStatus(e), cart.addItem(e), cart.setItemStockStatus(e), cart.setAmount(cartDC.getAmount())
    }), $(cartDC).bind("clear.shopCar", function() {
        list.clearItemStatus(), cart.clearCart()
    }), $(cartDC).bind("features.stockTight", function(t, e) {
        cart.setFeatureStockTight(e)
    }), $(cartDC).bind("features.stockNormal", function(t, e) {
        cart.setFeatureStockNormal(e)
    }), $(cartDC).bind("inited.shopCar", function(t, e) {
        cartDC.resetCar(list.checkCarItem(e.shopItem)), list.setItemStockStatus(e.shopItem), list.setItemStatus(e.shopItem), cart.addItem(e.shopItem), cart.setItemStockStatus(e.shopItem), cart.setAmount(cartDC.getAmount())
    }), $(cart).bind("update.cart", function(t, e) {
        cartDC.setCarItem(e), cartDC.fetchPremium(), changeBear()
    }), $(cart).bind("clear.cart", function() {
        list.removeItemStockTight(cartDC.getCarItems()), cartDC.clearCar(), changeBear()
    }), module.exports = {
        init: function(t) {
            cartDC.init(t)
        },
        setCurShopInfo: function(t, e, a, i, r) {
            1 != r && 4 != r && (cartDC.init(t), cartDC.setCurShopInfo(t, e, a, i), cartDC.fetchPremium(), this.initFillDiff())
        },
        initFillDiff: function() {
            var t = (1 * cartDC.getAmount().productAmount + 1 * cartDC.getAmount().packFee) / cartDC.getAmount().takeOutPrice * 1;
            if (t >= N && 1 > t) {
                var e = cartDC.getAmount(),
                    a = cartDC.fetchItems();
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: "/shopui?qt=supplementary",
                    data: {
                        priceDifference: e.cha,
                        wid: a.shop_id,
                        products: a.products
                    },
                    success: function(t) {
                        0 == t.error_no && 0 != t.result.length && ($fill_diff_table_menu.html(fill_diff_table_data_menu({
                            data: t.result
                        })), $fill_diff.css("display", "block"), addNStat({
                            da_src: "displayBk",
                            da_act: "show"
                        }), new Tip({
                            targets: ".fill_diff_name",
                            className: "fill_diff_name_hover",
                            trigger: "hover",
                            targetType: "top",
                            offset: {
                                top: 0,
                                left: 0
                            }
                        }))
                    }
                })
            }
        }
    }
});