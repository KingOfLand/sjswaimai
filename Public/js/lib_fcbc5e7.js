define("waimai:static/utils/store.js", function(e, t, n) {
    !
    function() {
        function e() {
            try {
                return l in u && u[l]
            } catch (e) {
                return !1
            }
        }
        function t() {
            try {
                return f in u && u[f] && u[f][u.location.hostname]
            } catch (e) {
                return !1
            }
        }
        function r(e) {
            return function() {
                var t = Array.prototype.slice.call(arguments, 0);
                t.unshift(o), s.appendChild(o), o.addBehavior("#default#userData"), o.load(l);
                var n = e.apply(a, t);
                return s.removeChild(o), n
            }
        }
        function i(e) {
            return e.replace(g, "___")
        }
        var o, a = {},
            u = window,
            c = u.document,
            l = "localStorage",
            f = "globalStorage",
            d = "__storejs__";
        if (a.disabled = !1, a.set = function() {}, a.get = function() {}, a.remove = function() {}, a.clear = function() {}, a.transact = function(e, t, n) {
            var r = a.get(e);
            null == n && (n = t, t = null), "undefined" == typeof r && (r = t || {}), n(r), a.set(e, r)
        }, a.getAll = function() {}, a.serialize = function(e) {
            return JSON.stringify(e)
        }, a.deserialize = function(e) {
            return "string" != typeof e ? void 0 : JSON.parse(e)
        }, e()) o = u[l], a.set = function(e, t) {
            return void 0 === t ? a.remove(e) : void o.setItem(e, a.serialize(t))
        }, a.get = function(e) {
            return a.deserialize(o.getItem(e))
        }, a.remove = function(e) {
            o.removeItem(e)
        }, a.clear = function() {
            o.clear()
        }, a.getAll = function() {
            for (var e = {}, t = 0; t < o.length; ++t) {
                var n = o.key(t);
                e[n] = a.get(n)
            }
            return e
        };
        else if (t()) o = u[f][u.location.hostname], a.set = function(e, t) {
            return void 0 === t ? a.remove(e) : void(o[e] = a.serialize(t))
        }, a.get = function(e) {
            return a.deserialize(o[e] && o[e].value)
        }, a.remove = function(e) {
            delete o[e]
        }, a.clear = function() {
            for (var e in o) delete o[e]
        }, a.getAll = function() {
            for (var e = {}, t = 0; t < o.length; ++t) {
                var n = o.key(t);
                e[n] = a.get(n)
            }
            return e
        };
        else if (c.documentElement.addBehavior) {
            var s, v;
            try {
                v = new ActiveXObject("htmlfile"), v.open(), v.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>'), v.close(), s = v.w.frames[0].document, o = s.createElement("div")
            } catch (m) {
                o = c.createElement("div"), s = c.body
            }
            var g = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
            a.set = r(function(e, t, n) {
                return t = i(t), void 0 === n ? a.remove(t) : (e.setAttribute(t, a.serialize(n)), void e.save(l))
            }), a.get = r(function(e, t) {
                return t = i(t), a.deserialize(e.getAttribute(t))
            }), a.remove = r(function(e, t) {
                t = i(t), e.removeAttribute(t), e.save(l)
            }), a.clear = r(function(e) {
                var t = e.XMLDocument.documentElement.attributes;
                e.load(l);
                for (var n, r = 0; n = t[r]; r++) e.removeAttribute(n.name);
                e.save(l)
            }), a.getAll = r(function(e) {
                var t = e.XMLDocument.documentElement.attributes;
                e.load(l);
                for (var n, r = {}, i = 0; n = t[i]; ++i) r[n] = a.get(n);
                return r
            })
        }
        try {
            a.set(d, d), a.get(d) != d && (a.disabled = !0), a.remove(d)
        } catch (m) {
            a.disabled = !0
        }
        a.enabled = !a.disabled, "undefined" != typeof n && "function" != typeof n ? n.exports = a : "function" == typeof define && define.amd ? define(a) : this.store = a
    }()
});;
define("waimai:static/utils/superTip.js", function(t, o, e) {
    !
    function() {
        var t = 8,
            i = {
                hostSelector: "",
                autoOpen: !0,
                autoClose: !1,
                showTime: 1e3,
                msg: "I'm a tip!",
                borderRadius: 5,
                position: {
                    my: "bottom center",
                    at: "top center"
                },
                offset: {
                    x: 0,
                    y: 0
                }
            },
            p = {
                display: "none",
                "background-color": "rgba(0, 0, 0, 0.7)",
                position: "absolute",
                "font-size": "12px",
                color: "#fff",
                "line-height": "1.4",
                "z-index": "1000"
            },
            n = {},
            r = {},
            s = function(t) {
                return t + (new Date).getTime()
            },
            l = function() {
                var t = {};
                return {
                    set: function(o, e) {
                        if ("function" == typeof o && e && "number" == typeof e) {
                            var i = s("sto_");
                            t[i] = setTimeout(function() {
                                o(), clearTimeout(i)
                            }, e)
                        }
                    }
                }
            }(),
            f = ["top left", "top right", "top center", "right top", "right bottom", "right middle", "bottom left", "bottom right", "bottom center", "left top", "left bottom", "left middle"],
            h = function(o, e, i, p, n) {
                var r = e && e.at,
                    s = e && e.my; - 1 == $.inArray(r, f) && (r = f[0]), -1 == $.inArray(s, f) && (s = f[0]);
                var l, h = r.split(" ")[0],
                    a = r.split(" ")[1],
                    m = s.split(" ")[0],
                    x = (s.split(" ")[1], t),
                    d = o.offset(),
                    c = d.left,
                    u = d.top,
                    g = o.outerWidth(),
                    b = o.outerHeight();
                return "top" == h ? "left" == a ? "top" == m ? l = {
                    left: c,
                    top: u + x
                } : "bottom" == m && (l = {
                    left: c,
                    top: u - p - x
                }) : "right" == a ? "top" == m ? l = {
                    left: c + g - i,
                    top: u + x
                } : "bottom" == m && (l = {
                    left: c + g - i,
                    top: u - p - x
                }) : "top" == m ? l = {
                    left: c + g / 2 - i / 2,
                    top: u + x
                } : "bottom" == m && (l = {
                    left: c + g / 2 - i / 2,
                    top: u - p - x
                }) : "right" == h ? "top" == a ? "left" == m ? l = {
                    left: c + g + x,
                    top: u
                } : "right" == m && (l = {
                    left: c + g - i - x,
                    top: u
                }) : "bottom" == a ? "left" == m ? l = {
                    left: c + g + x,
                    top: u + b - p
                } : "right" == m && (l = {
                    left: c + g - i - x,
                    top: u + b - p
                }) : "left" == m ? l = {
                    left: c + g + x,
                    top: u + b / 2 - p / 2
                } : "right" == m && (l = {
                    left: c + g - i - x,
                    top: u + b / 2 - p / 2
                }) : "bottom" == h ? "left" == a ? "top" == m ? l = {
                    left: c,
                    top: u + b + x
                } : "bottom" == m && (l = {
                    left: c,
                    top: u + b - p - x
                }) : "right" == a ? "top" == m ? l = {
                    left: c + g - i,
                    top: u + b + x
                } : "bottom" == m && (l = {
                    left: c + g - i,
                    top: u + b - p - x
                }) : "top" == m ? l = {
                    left: c + g / 2 - i / 2,
                    top: u + b + x
                } : "bottom" == m && (l = {
                    left: c + g / 2 - i / 2,
                    top: u + b - p - x
                }) : "top" == a ? "left" == m ? l = {
                    left: c + x,
                    top: u
                } : "right" == m && (l = {
                    left: c - i - x,
                    top: u
                }) : "bottom" == a ? "left" == m ? l = {
                    left: c + x,
                    top: u + b - p
                } : "right" == m && (l = {
                    left: c - i - x,
                    top: u + b - p
                }) : "left" == m ? l = {
                    left: c + x,
                    top: u + b / 2 - p / 2
                } : "right" == m && (l = {
                    left: c - i - x,
                    top: u + b / 2 - p / 2
                }), l || (l = {
                    top: u - p - x,
                    left: c + g / 2 - i / 2
                }), l.left += n.x, l.top += n.y, l.left += "px", l.top += "px", l
            },
            a = function(o, e, i) {
                -1 == $.inArray(o, f) && (o = f[0]), e = e || "#333", i = i || 0;
                var p, n, r, s = o.split(" ")[0],
                    l = o.split(" ")[1],
                    h = t;
                return "top" == s ? (p = "0 " + h / 2 + "px " + h + "px " + h / 2 + "px", n = "transparent transparent " + e + " transparent", r = "left" == l ? {
                    left: i + "px",
                    top: "-" + h + "px"
                } : "right" == o ? {
                    right: i + "px",
                    top: "-" + h + "px"
                } : {
                    left: "50%",
                    top: "-" + h + "px",
                    "margin-left": "-" + h / 2 + "px"
                }) : "right" == s ? (p = h / 2 + "px 0 " + h / 2 + "px " + h + "px", n = "transparent transparent transparent " + e, r = "top" == l ? {
                    top: i + "px",
                    right: "-" + h + "px"
                } : "bottom" == o ? {
                    bottom: i + "px",
                    right: "-" + h + "px"
                } : {
                    top: "50%",
                    right: "-" + h + "px",
                    "margin-top": "-" + h / 2 + "px"
                }) : "bottom" == s ? (p = h + "px " + h / 2 + "px 0 " + h / 2 + "px", n = e + " transparent transparent transparent", r = "left" == l ? {
                    left: i + "px",
                    bottom: "-" + h + "px"
                } : "right" == o ? {
                    right: i + "px",
                    bottom: "-" + h + "px"
                } : {
                    left: "50%",
                    bottom: "-" + h + "px",
                    "margin-left": "-" + h / 2 + "px"
                }) : (p = h / 2 + "px " + h + "px " + h / 2 + "px 0", n = "transparent " + e + " transparent transparent", r = "top" == l ? {
                    top: i + "px",
                    left: "-" + h + "px"
                } : "bottom" == o ? {
                    bottom: i + "px",
                    left: "-" + h + "px"
                } : {
                    top: "50%",
                    left: "-" + h + "px",
                    "margin-top": "-" + h / 2 + "px"
                }), $.extend({
                    position: "absolute",
                    height: "0",
                    width: "0",
                    "border-style": "solid",
                    "border-color": n,
                    "border-width": p
                }, r)
            },
            m = function(t, o) {
                var t = this.options = $.extend({}, i, n, t),
                    o = this.styles = $.extend({}, p, r, o, {
                        "border-radius": t.borderRadius + "px"
                    }),
                    e = this.key = s("dcTip"),
                    f = t.position.my,
                    h = t.triangleColor || o["background-color"],
                    m = t.borderRadius,
                    x = a(f, h, m),
                    d = this.elem = $("<div id=" + e + "><i></i><div><p>" + t.msg + "</p></div></div>").appendTo("body");
                if (d.css(o), d.children("i").css(x), d.children("div").css({
                    padding: "5px 15px",
                    "max-width": "300px"
                }), t.autoOpen && this.show(), t.autoClose && t.showTime > 0) {
                    var c = this;
                    l.set(function() {
                        c.hide()
                    }, t.showTime)
                }
            };
        m.prototype = {
            constructor: m,
            position: function() {
                var t, o = $(this.options.hostSelector);
                o.length && o.offset() && o.filter(":visible") ? t = h(o, this.options.position, this.elem.width(), this.elem.height(), this.options.offset) : (this.elem.children("i").hide(), t = {
                    left: "50%",
                    top: "200px",
                    "margin-left": "-" + this.elem.outerWidth() / 2 + "px"
                }), this.elem.css(t)
            },
            setMsg: function(t) {
                this.elem.find("p").html(t), this.position()
            },
            onEvent: function() {
                var t = this,
                    o = function() {
                        t.position()
                    };
                $(window).off("resize", o).off("scroll", o).on("resize", o).on("scroll", o)
            },
            show: function() {
                this.elem.show(), this.position(), this.onEvent()
            },
            hide: function() {
                this.remove()
            },
            remove: function() {
                this.elem.remove()
            }
        }, o = e.exports = {
            create: function(t, o) {
                return new m(t, o)
            },
            gSetStyles: function(t) {
                $.extend(r, t)
            },
            gSetOptions: function(t) {
                $.extend(n, t)
            }
        }
    }()
});;
define("waimai:static/utils/CartDataCenter.js", function(t, e, i) {
    function r(t) {
        return (Math.round(100 * t) / 100).toFixed(2)
    }
    function o(t, e) {
        _value = encodeURIComponent(e), S.setRaw("s" + t + "s", _value, {
            path: "/"
        }), F.set("s" + t + "s", e)
    }
    function n(t) {
        return F.get("s" + t + "s") || S.get("s" + t + "s")
    }
    function a(t, e, i, r, o) {
        var n = k,
            a = "activity_dishid_arr" + n,
            s = (F.get(a) || decodeURIComponent(S.get(a)) || "").split(","),
            u = $.inArray(t, s) > -1;
        if (-1 !== $.inArray("null", s) && s.splice($.inArray("null", s), 1), e) {
            if (u) {
                var m = $.inArray(t, s);
                s.splice(m, 1), S.setRaw(a, encodeURIComponent(s.join(",")), {
                    path: "/"
                }), F.set(a, s.join(","))
            }
        } else {
            if (i) return s.splice(0, s.length), S.setRaw(a, encodeURIComponent(s.join(",")), {
                path: "/"
            }), void F.set(a, s.join(","));
            if (u) {
                if (o) return "isin"
            } else {
                if (o) return "notin";
                s.push(t), S.setRaw(a, encodeURIComponent(s.join(",")), {
                    path: "/"
                }), F.set(a, s.join(","))
            }
        }
    }
    function s(t) {
        a(t, !0)
    }
    function u(t) {
        "1" === t.dishactflag ? a(t.itemId) : s(t.itemId)
    }
    function m() {
        a(null, !1, !0)
    }
    function c(t) {
        var e = _.shopItem,
            i = {
                total: 0,
                actTotal: 0,
                dishes: {}
            };
        return t && $.each(e, function(e, r) {
            r.dishactid == t && (i.dishes[r.itemId] = parseInt(r.activitynum || 0), i.total += parseInt(r.itemCount || 0), i.actTotal += parseInt(r.activitynum || 0))
        }), i
    }
    function d(t, e) {
        var i = t.elem,
            r = t.itemId,
            o = t.orderlimit,
            n = t.dishlimit,
            s = 1 * t.itemCount;
        if ("1" === t.dishactflag) {
            var u = c(t.dishactid),
                m = (a(r, !1, !1, o, !0), $("[data-sid=item_" + r + "]")),
                d = 1 * m.attr("leftnum");
            if ("minus" == e) return void(t.activitynum = u.dishes[r] > s ? s : u.dishes[r] || 0);
            if (t.activitynum = u.dishes[r] >= s ? s - 1 : u.dishes[r] || 0, u.actTotal >= o) return N.create({
                hostSelector: i,
                autoClose: !0,
                showTime: 3e3,
                borderRadius: 2,
                msg: "每单只能有" + o + "个菜品享受活动优惠，已超出限额~",
                position: {
                    at: "top center",
                    my: "bottom center"
                }
            }, {
                width: "176px",
                "text-align": "center"
            }), "beyond_orderlimit";
            if (s >= d + 1) return N.create({
                hostSelector: i,
                autoClose: !0,
                showTime: 3e3,
                borderRadius: 2,
                msg: "超出活动库存，按原价计算~",
                position: {
                    at: "top center",
                    my: "bottom center"
                }
            }, {
                width: "176px",
                "text-align": "center"
            }), "beyond_leftnum";
            if (s > +n) {
                var p = "";
                return p = 0 == n ? "您今天可享受的特价优惠份数已用完～" : "前" + n + "份可享受特价优惠<br />您已超出限额～", N.create({
                    hostSelector: i,
                    autoClose: !0,
                    showTime: 3e3,
                    borderRadius: 2,
                    msg: p,
                    position: {
                        at: "top center",
                        my: "bottom center"
                    }
                }, {
                    width: "176px",
                    "text-align": "center",
                    "z-index": "1000"
                }), "beyond_dishlimit"
            }
            var h = o - u.actTotal,
                l = s - t.activitynum;
            return t.activitynum += Math.min(h, l), "can_add_act"
        }
    }
    function p(t) {
        return a(t, !1, !1, null, !0)
    }
    function h(t) {
        f(n(t));
        S.remove("s" + t + "s"), F.remove("s" + t + "s"), F.clear()
    }
    function l(t) {
        var e, i = [];
        return $.each(t.shopItem, function(t, e) {
            i.push([e.itemId, e.itemCount, e.itemName, e.itemPrice, e.packCount, e.packPrice, e.minOrderNumber, e.itemStock, e.itemDishType, e.itemStockId, e.orderlimit, e.dishlimit, e.dishactflag, e.activitynum, e.category_id, e.require_category_id, e.uniqId, e.dishactid].join(T.item))
        }), e = [t.shopName, t.shopId, t.deliveryFee, t.takeOutPrice, i.join(T.itemToItem)].join(T.shopToItem)
    }
    function f(t) {
        if (!t) return {
            shopName: "",
            shopId: "",
            deliveryFee: 0,
            takeOutPrice: 0,
            shopItem: []
        };
        var e = t.split(T.shopToItem),
            i = {};
        return e.length >= 1 && (i.shopName = e[0]), e.length >= 2 && (i.shopId = e[1] + ""), e.length >= 3 && (i.deliveryFee = e[2]), e.length >= 4 && (i.takeOutPrice = e[3]), i.shopItem = [], e.length >= 5 && (e = e[4]) && (e = e.split(T.itemToItem), $.each(e, function(t, e) {
            var r = e.split(T.item);
            if (r[0] && 2 == r[8]) {
                var o = F.get("s" + r[0] + "s");
                if (!o) return
            }
            i.shopItem.push({
                itemId: r[0],
                itemCount: parseInt(r[1]),
                itemName: r[2],
                itemPrice: r[3],
                packCount: r[4],
                packPrice: r[5],
                minOrderNumber: r[6],
                itemStock: parseInt(r[7]),
                itemDishType: r[8],
                itemStockId: r[9],
                orderlimit: r[10],
                dishlimit: r[11],
                dishactflag: r[12],
                activitynum: r[13],
                category_id: r[14],
                require_category_id: r[15],
                uniqId: r[16],
                dishactid: r[17]
            })
        })), i
    }
    function I() {
        o(k, l(_))
    }
    function g() {
        _ = f(n(k)), _.shopId = k
    }
    function y(t, i, r, o) {
        var n = 0,
            a = !1;
        for (o = parseInt(o), r = parseInt(r), itemIdex = 0, len = _.shopItem.length; len > itemIdex; itemIdex++) _.shopItem[itemIdex].itemStockId == i && (_.shopItem[itemIdex].itemId == t ? (n += r, a = !0) : n += _.shopItem[itemIdex].itemCount);
        return a || (n += r), n >= o ? $(e).trigger("features.stockTight", {
            sid: i,
            num: o
        }) : o > n && $(e).trigger("features.stockNormal", i), n > o ? r + o - n : r
    }
    function v(t, e, i) {
        if (i) {
            var r = {
                product_id: i.itemId,
                product_quantity: e,
                feature_id: []
            };
            for (var o in i.select)"规格" != o ? r.feature_id.push(i.select[o].id) : r.product_id = i.select[o].id;
            return $.extend({}, r)
        }
    }
    function C(t, e, i) {
        if (i) {
            var r, o, n, a = {
                product_id: i.basic.id,
                product_quantity: e,
                groupons: []
            };
            for (var s in i.data) if (i.data[s].total && i.data[s].total.count) {
                r = {
                    dish_group_id: s,
                    ids: []
                };
                for (var u in i.data[s]) if ("total" != u && (n = i.data[s][u], n.count)) {
                    if (n.features && n.features.length) {
                        var m = $.extend([], n.features);
                        n.realId ? (m.splice($.inArray(n.realId, m), 1), o = {
                            product_id: n.realId,
                            product_quantity: n.count,
                            feature_id: m
                        }) : o = {
                            product_id: u,
                            product_quantity: n.count,
                            feature_id: m
                        }
                    } else o = {
                        product_id: u,
                        product_quantity: n.count
                    };
                    r.ids.push($.extend({}, o))
                }
                a.groupons.push($.extend({}, r))
            }
            return $.extend({}, a)
        }
    }
    var e, _, k, S = t("wcommon:static/util/Cookie.js"),
        T = (t("wcommon:static/util.js"), {
            shopToItem: "##",
            itemToItem: "$$",
            item: "^^"
        }),
        x = t("waimai:widget/common/ui/cartAlert/cartAlert.js"),
        F = t("waimai:static/utils/store.js"),
        N = t("waimai:static/utils/superTip.js"),
        P = {
            url: "/waimai/trade/getorderprice",
            timer: null,
            delay: 200,
            recount: 3,
            restore: function() {
                $(e).trigger("failpremium.shopCar")
            },
            retry: function(t) {
                var i = this;
                t = t || 0, t < i.recount ? (clearTimeout(i.timer), i.timer = setTimeout(function() {
                    $.ajax({
                        url: i.url,
                        data: i.params,
                        type: "post",
                        dataType: "json",
                        success: function(t) {
                            if (0 == t.error_no) {
                                var r = t.result.order_info,
                                    o = t.result.discount_info;
                                $(e).trigger("premium.shopCar", {
                                    prices: r,
                                    discounts: o
                                })
                            } else t.error_no ? (t.error_msg || (t.error_msg = "餐厅太忙，暂时不能接单"), x.alert(t), i.restore()) : i.restore()
                        },
                        error: function() {
                            i.retry(++t)
                        }
                    })
                }, i.delay)) : i.restore()
            },
            get: function(t) {
                var e = this;
                e.params = t, e.retry()
            },
            JSONStringify: function(t) {
                return JSON.stringify(t)
            },
            adaptParam: function(t, e) {
                var i = this,
                    r = [];
                for (var o in e) {
                    var n = e[o].itemId,
                        a = e[o].itemCount,
                        s = e[o].dishactflag;
                    if (!e[o].itemDishType || 2 != e[o].itemDishType && "attr" != e[o].itemDishType) r.push("1" === s ? {
                        product_id: n,
                        product_quantity: a,
                        dish_activity: s,
                        activity_num: e[o].activitynum
                    } : {
                        product_id: n,
                        product_quantity: a
                    });
                    else {
                        var u = F.get("s" + n + "s") || JSON.parse(S.get("s" + n + "s"));
                        r.push(2 == e[o].itemDishType ? C(n, a, u) : v(n, a, u))
                    }
                }
                return {
                    shop_id: t,
                    products: i.JSONStringify(r)
                }
            }
        };
    e = i.exports = {
        fetchPremium: function() {
            var t = P.adaptParam(this.getCurShopId(), this.getCarItems());
            P.get(t)
        },
        getCarInfo: function(t) {
            var e = n(t);
            if (!e) return !1;
            var i = f(e).shopItem;
            return i
        },
        fetchItems: function() {
            return P.adaptParam(this.getCurShopId(), this.getCarItems())
        },
        setCarItem: function(t) {
            var i, o;
            for (t.itemPrice && (t.itemPrice = r(t.itemPrice)), o = 0, len = _.shopItem.length; len > o; o++) if (_.shopItem[o].itemId == t.itemId) {
                i = _.shopItem[o];
                break
            }
            t.itemCount = parseInt(t.itemCount, 10), "append" == t.type && i && (t.itemCount += i.itemCount || 0), i && i.itemCount > t.itemCount ? d(t, "minus") : d(t, "add");
            try {
                if (t.selectFeatures || i && "attr" == i.itemDishType) {
                    if (t = $.extend(i || {}, t), t.itemStockId = t.itemStockId || t.selectFeatures.itemId, t.itemCount = y(t.itemId, t.itemStockId, t.itemCount, t.itemStock), t.itemCount < 0) return;
                    t.selectFeatures && F.set("s" + t.itemId + "s", t.selectFeatures)
                }
            } catch (n) {}
            if (("2" == t.itemDishType || i && "2" == i.itemDishType) && (t = $.extend(i || {}, t), t.itemStockId = t.itemStockId || t.orignItemId, t.itemCount = y(t.itemId, t.itemStockId, t.itemCount, t.itemStock)), i) if ($.extend(i, t), i.itemCount < i.minOrderNumber) {
                if (_.shopItem.splice(o, 1), $(e).trigger("delete.shopCar", i), 2 == i.itemDishType || i.selectFeatures) {
                    var a = new Date;
                    a.setFullYear(a.getFullYear() - 1), F.remove("s" + i.itemId + "s")
                }
            } else i.itemCount >= i.itemStock && (i.itemCount = i.itemStock), i.activitynum > i.itemCount && (i.activitynum = i.itemCount), $(e).trigger("update.shopCar", i);
            else {
                if (!t.itemName) return;
                if (!t.itemStock || !t.itemCount) return;
                if (parseInt(t.itemStock) < parseInt(t.minOrderNumber)) return void s(t.itemId);
                t.itemCount < t.minOrderNumber && (t.itemCount = t.minOrderNumber), t.itemCount > t.itemStock && (t.itemCount = t.itemStock), _.shopItem.push(t), $(e).trigger("add.shopCar", t)
            }
            m(), $.each(_.shopItem, function() {
                u(this)
            }), 0 == _.shopItem.length && $(e).trigger("clear.shopCar"), I()
        },
        setCurShopInfo: function(t, e, i, r) {
            _ || (_ = {}), _.shopId = t || _.shopId, _.shopName = e || _.shopName, _.deliveryFee = i || _.deliveryFee, _.takeOutPrice = r || _.takeOutPrice, I()
        },
        getCurShopName: function() {
            return _.shopName
        },
        getCurShopId: function() {
            return _.shopId
        },
        getCarItems: function() {
            return _.shopItem
        },
        clearCar: function(t) {
            m(), _.shopItem = [], I(), !t && $(e).trigger("clear.shopCar")
        },
        init: function(t) {
            k = t + "", m(), g(), $.each(_.shopItem, function() {
                u(this)
            }), $(e).trigger("inited.shopCar", _)
        },
        getAmount: function() {
            var t = 0,
                e = 0;
            return $.each(_.shopItem, function(i, r) {
                e += r.packCount * r.packPrice * r.itemCount, t += r.itemCount * r.itemPrice
            }), {
                deliveryFee: r(_.deliveryFee),
                packFee: r(e),
                productAmount: r(t),
                amount: r(t + e + parseFloat(_.deliveryFee)),
                takeOutPrice: r(_.takeOutPrice),
                cha: r(_.takeOutPrice - t - e),
                isEmpty: 0 == _.shopItem.length
            }
        },
        isEmpty: function() {
            return _ && _.shopItem.length > 0 ? !1 : !0
        },
        resetCar: function(t) {
            _.shopItem = t, I()
        },
        adaptSetMealForServer: C,
        adaptFeatureForServer: v,
        clearData: h,
        checkActdish: d,
        justCheckActdish: p
    }
});;
define("waimai:static/utils/GlobalTips.js", function(t, o, i) {
    function e() {
        c && clearTimeout(c), l.fixTo("#content", "top", {
            top: 0
        }), l.hide()
    }
    function n(t) {
        var o = $(window).scrollTop(),
            i = o > f ? o - f + SELF_HEIGHT + 20 : SELF_HEIGHT + 1,
            e = {
                top: i
            };
        "top" === t ? e = {
            top: o
        } : "offTop" === t && (e = {
            top: i + SELF_HEIGHT
        }), l.show(), l.fixTo("#content", "top", e)
    }
    var s, l, p, c, a = 3e3,
        f = 82;
    SELF_HEIGHT = 45, s = t("jsmod/ui/fixElement"), l = new s('<div class="global-tips"><span class="gt-msg"></span></div>', {
        targetType: "top",
        zIndex: 3e3,
        preventShow: !0
    }), p = l.getElement(), $(window).on("scroll.globaltips", function() {
        e()
    }), $(".global-tips .close-btn").on("click", function() {
        e()
    }), i.exports = {
        tip: function(t, o) {
            c && clearTimeout(c), p.find(".gt-msg").html(t), l.redraw(), n(o), c = setTimeout(function() {
                e()
            }, a)
        },
        topTip: function(t, o) {
            o ? p.addClass("reverse") : p.removeClass("reverse"), this.tip(t, "top")
        },
        hide: function() {
            e()
        }
    }
});;
define("waimai:static/utils/GlobalErrorMonitor.js", function(r, e, i) {
    function n(r) {
        var e, i = {};
        if ("object" == typeof r) {
            if (i.ua = window.navigator.userAgent, i.page_url = window.location.href, e = r.stack) i.stack = e;
            else for (var n in r) r.hasOwnProperty(n) && "string" == typeof r[n] && (i[n] = r[n]);
            (new Image).src = o + encodeURIComponent(JSON.stringify(i))
        }
    }
    var o = "/waimai?qt=feerror&msg=";
    i.exports = {
        error: function(r, e, i) {
            if (1 === arguments.length) return void n(r);
            if (e) {
                var o = {};
                o.message = r, o.url = e, o.line = i, n(o)
            }
        }
    }
});;
define("waimai:static/utils/statis.js", function(t, e, n) {
    {
        var e;
        window._hmt = window._hmt || [], t("wcommon:static/util.js")
    }
    $(function() {
        var t = document.createElement("script");
        t.src = "//hm.baidu.com/hm.js?e0401ea6bbde08becd704794fb788176";
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e)
    }), window.statis = e = n.exports = {
        trackPage: function(t) {
            window._hmt.push(["_trackPageview", t])
        },
        trackEvent: function(t, e, n, a) {
            window._hmt.push(["_trackEvent", t, e, n, a]);
            var i = ["/event"];
            $.each(arguments, function(t, e) {
                e && i.push(e)
            }), this.trackPage(i.join("/"))
        }
    }
});;
define("waimai:static/utils/AddressDataCenter.js", function(t, n, e) {
    function r(t) {
        for (; t && t.length > _;) t.pop();
        return t
    }
    function i(t, n) {
        return t && n && a(t) === a(n)
    }
    function a(t) {
        var n = "";
        for (var e in t) t.hasOwnProperty(e) && "shopnum" != e && "city_id" != e && (n += t[e]);
        return n
    }
    function s(t) {
        for (var n = !0, e = 0, r = l.length; r > e; e++)"address" != l[e] && (n = n && t[l[e]]);
        return n
    }
    var o, u = t("wcommon:static/util/Cookie.js"),
        d = (t("wcommon:static/util.js"), 864e5),
        c = (new Date).getTime(),
        _ = 5,
        l = ["name", "lat", "lng", "address", "shopnum", "city_id"];
    o = {
        COOKIE_ADDR_KEY: "wm_search_addr",
        COOKIE_ADDR_EXPIRES: c + 365 * d,
        DEFAULT_PATH: "/"
    }, e.exports = {
        add: function(t) {
            if (s(t)) {
                var n, e = {},
                    a = [],
                    d = this.getAll();
                e.name = encodeURIComponent(t.name), e.address = encodeURIComponent(t.address), e.lat = t.lat, e.lng = t.lng, e.shopnum = t.shopnum, e.city_id = t.city_id, e.uid = t.uid;
                for (var c = 0, _ = d.length; _ > c; c++) {
                    var l = d[c];
                    i(l, e) && d.splice(c, 1)
                }
                d.unshift(e), a = r(d), n = JSON.stringify(a), u.setRaw(o.COOKIE_ADDR_KEY, n, {
                    expires: o.COOKIE_ADDR_EXPIRES,
                    path: o.DEFAULT_PATH
                })
            }
        },
        getAll: function() {
            var t = u.getRaw(o.COOKIE_ADDR_KEY);
            return t ? JSON.parse(t) : []
        },
        clearAll: function() {
            return u.setRaw(o.COOKIE_ADDR_KEY, [], {
                expires: c,
                path: o.DEFAULT_PATH
            }), !0
        }
    }
});;
define("waimai:static/utils/CookieDataCenter.js", function(t, e, n) {
    var i, o = t("wcommon:static/util/Cookie.js"),
        C = t("wcommon:static/util.js"),
        E = 864e5,
        a = (new Date).getTime();
    i = {
        COOKIE_CITY_KEY: "wm_city",
        COOKIE_CITY_EXPIRES: a + 5e3 * E,
        COOKIE_ADDR_KEY: "wm_addr",
        COOKIE_ADDR_EXPIRES: a + 7 * E,
        DEFAULT_CITY: {
            code: 131,
            name: "北京"
        },
        CITY_SUPPORT: {
            131: 1,
            289: 1,
            179: 1,
            315: 1,
            224: 1
        },
        DEFAULT_PATH: "/"
    }, n.exports = {
        initCity: function() {
            var t = this.getCity(i.COOKIE_CITY_KEY);
            t && t.code || this.setCity(i.DEFAULT_CITY)
        },
        setCity: function(t) {
            if (t && t.name) {
                var e = encodeURIComponent(JSON.stringify(t));
                o.setRaw(i.COOKIE_CITY_KEY, e, {
                    expires: i.COOKIE_CITY_EXPIRES,
                    path: i.DEFAULT_PATH
                })
            }
        },
        getCity: function() {
            var t = decodeURIComponent(o.getRaw(i.COOKIE_CITY_KEY)),
                e = JSON.parse(t);
            return this.isEmpty(e) ? i.DEFAULT_CITY : e
        },
        setAddr: function(t) {
            if (t.address) {
                var e = {};
                e.address = C.encodeHTML(decodeURIComponent(t.address)), e.lat = t.lat, e.lng = t.lng;
                var n = encodeURIComponent(JSON.stringify(e));
                o.setRaw(i.COOKIE_ADDR_KEY, n, {
                    expires: i.COOKIE_ADDR_EXPIRES,
                    path: i.DEFAULT_PATH
                })
            }
        },
        getAddr: function() {
            var t = decodeURIComponent(o.getRaw(i.COOKIE_ADDR_KEY));
            return JSON.parse(t)
        },
        isEmpty: function(t) {
            for (var e in t) return !1;
            return !0
        }
    }
});;
define("waimai:static/utils/LocalDataCenter.js", function(t, e, i) {
    var a = t("waimai:static/utils/store.js"),
        n = t("wcommon:static/util.js");
    i.exports = {
        eLength: 5,
        schema: ["address", "lat", "lng"],
        key: "LocalDataCenter",
        add: function(t) {
            var e = this,
                i = a.get(e.key) || [];
            if (e._validate(t)) {
                t.address = encodeURIComponent(n.encodeHTML(decodeURIComponent(t.address)));
                for (var r in i) {
                    var s = i[r];
                    if (e._equal(t, s)) return
                }
                i.unshift(t), i = e._cut(i), a.set(e.key, i)
            }
        },
        getAll: function() {
            return this._cut(a.get(this.key))
        },
        _validate: function(t) {
            var e = !0;
            for (var i in this.schema) e = e && t[this.schema[i]];
            return e
        },
        _cut: function(t) {
            for (; t && t.length > this.eLength;) t.pop();
            return t
        },
        _equal: function(t, e) {
            return t && e && this._serialize(t) === this._serialize(e)
        },
        _serialize: function(t) {
            var e = "";
            for (var i in t) t.hasOwnProperty(i) && (e += t[i]);
            return e
        }
    }
});;
define("waimai:static/utils/SlidePlayer.js", function(t, i, n) {
    var o, a = {
        autoPlay: !0,
        current: 0,
        duration: 3e3,
        width: "100%",
        height: "100%",
        autoAdaptive: !1
    },
        e = function(t, i) {
            var n = this;
            0 != $(t).length && (n.$el = $(t), n.option = $.extend({}, a, i), n.init())
        };
    $.extend(e.prototype, {
        init: function() {
            var t = this;
            return t.$el.css({
                position: "relative",
                overflow: "hidden"
            }), t.$imgList = t.$el.find(".slide-container li"), t.$navContainer = t.$el.find(".slide-indicators"), t.imgCount = t.$imgList.size(), t.cur = t.option.current, 0 == t.imgCount ? void t.$el.hide() : (t.option.autoAdaptive && (t.option.height = "100%", t.option.width = "100%"), t.$imgList.css({
                position: "relative",
                "float": "left",
                "margin-right": "-100%"
            }), t.$imgList.find("img").css({
                height: t.option.height,
                width: t.option.width
            }), t.$imgList.hide(), t.$imgList.eq(t.cur).show(), t.imgCount > 1 && (t.addNav(), t.$navContainer.find("li").removeClass("active"), t.$navContainer.find("li").eq(t.cur).addClass("active")), void t.handleMouse(t.$imgList))
        },
        handleMouse: function(t) {
            var i = this;
            t.on("mouseenter", function() {
                clearInterval(o)
            }), t.on("mouseleave", function() {
                i.startAutoPlay()
            })
        },
        addNav: function() {
            for (var t = this, i = "", n = 0; n < t.imgCount; n++) i += n == t.cur ? "<li class='active'></li>" : "<li></li>";
            t.$navContainer.append(i), t.bindEvent(), t.option.autoPlay && t.startAutoPlay()
        },
        showCur: function() {
            var t = this;
            t.$imgList.fadeOut(1e3), t.$imgList.eq(t.cur).fadeIn(1e3), t.$navContainer.find("li").removeClass("active"), t.$navContainer.find("li").eq(t.cur).addClass("active")
        },
        autoPlay: function(t) {
            var i = t || this;
            i.cur >= i.imgCount - 1 ? i.cur = 0 : i.cur++, i.imgCount > 1 && i.showCur()
        },
        startAutoPlay: function() {
            var t = this;
            o = setInterval(function() {
                t.autoPlay(t)
            }, t.option.duration)
        },
        stopAutoPlay: function() {
            clearInterval(o)
        },
        bindEvent: function() {
            var t = this;
            t.option.autoPlay && t.$navContainer.hover(function() {
                t.stopAutoPlay()
            }, function() {
                t.startAutoPlay()
            }), t.$navContainer.on("click", "li", function(i) {
                i.stopPropagation(), i.preventDefault();
                var n = $(i.currentTarget);
                n.hasClass("active") || (t.stopAutoPlay(), t.cur = n.index(), t.showCur())
            })
        }
    }), n.exports = e
});;
define("waimai:static/utils/convertMC2LL.js", function(e, t, a) {
    !
    function() {
        function e(e, t) {
            if (e && t) {
                var a = t[0] + t[1] * Math.abs(e.lng),
                    n = Math.abs(e.lat / t[9]),
                    r = t[2] + t[3] * n + t[4] * n * n + t[5] * n * n * n + t[6] * n * n * n * n + t[7] * n * n * n * n * n + t[8] * n * n * n * n * n + n;
                return a *= e.lng < 0 ? -1 : 1, r *= e.lat < 0 ? -1 : 1, [a, r]
            }
        }
        var t = function(t) {
                for (var a, n = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0], r = [
                    [1.410526172116255e-8, 898305509648872e-20, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -.03801003308653, 17337981.2],
                    [-7.435856389565537e-9, 8983055097726239e-21, -.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86],
                    [-3.030883460898826e-8, 898305509983578e-20, .30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, .32710905363475, 6856817.37],
                    [-1.981981304930552e-8, 8983055099779535e-21, .03278182852591, 40.31678527705744, .65659298677277, -4.44255534477492, .85341911805263, .12923347998204, -.04625736007561, 4482777.06],
                    [3.09191371068437e-9, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -.00023663490511, -.6321817810242, -.00663494467273, .03430082397953, -.00466043876332, 2555164.4],
                    [2.890871144776878e-9, 8983055095805407e-21, -3.068298e-8, 7.47137025468032, -353937994e-14, -.02145144861037, -1234426596e-14, .00010322952773, -323890364e-14, 826088.5]
                ], i = [Math.abs(t.lng), Math.abs(t.lat)], o = n.length, u = 0; o > u; u++) if (i[1] >= n[u]) {
                    a = r[u];
                    break
                }
                var f = e(t, a),
                    l = new Number(f[0]).toFixed(6),
                    s = new Number(f[1]).toFixed(6);
                return [l, s]
            };
        a.exports = t
    }()
});;
define("waimai:static/utils/fingerprint.js", function(e, t, n) {
    !
    function(e, t, i) {
        "undefined" != typeof n && n.exports ? n.exports = i() : "function" == typeof define && define.amd ? define(i) : t[e] = i()
    }("Fingerprint", this, function() {
        "use strict";
        var e = function(e) {
                var t, n;
                t = Array.prototype.forEach, n = Array.prototype.map, this.each = function(e, n, i) {
                    if (null !== e) if (t && e.forEach === t) e.forEach(n, i);
                    else if (e.length === +e.length) {
                        for (var r = 0, a = e.length; a > r; r++) if (n.call(i, e[r], r, e) === {}) return
                    } else for (var o in e) if (e.hasOwnProperty(o) && n.call(i, e[o], o, e) === {}) return
                }, this.map = function(e, t, i) {
                    var r = [];
                    return null == e ? r : n && e.map === n ? e.map(t, i) : (this.each(e, function(e, n, a) {
                        r[r.length] = t.call(i, e, n, a)
                    }), r)
                }, "object" == typeof e ? (this.hasher = e.hasher, this.screen_resolution = e.screen_resolution, this.screen_orientation = e.screen_orientation, this.canvas = e.canvas, this.ie_activex = e.ie_activex) : "function" == typeof e && (this.hasher = e)
            };
        return e.prototype = {
            get: function() {
                var e = [];
                if (e.push(navigator.userAgent), e.push(navigator.language), e.push(screen.colorDepth), this.screen_resolution) {
                    var t = this.getScreenResolution();
                    "undefined" != typeof t && e.push(this.getScreenResolution().join("x"))
                }
                return e.push((new Date).getTimezoneOffset()), e.push(this.hasSessionStorage()), e.push(this.hasLocalStorage()), e.push( !! window.indexedDB), e.push(document.body ? typeof document.body.addBehavior : "undefined"), e.push(typeof window.openDatabase), e.push(navigator.cpuClass), e.push(navigator.platform), e.push(navigator.doNotTrack), e.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && e.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(e.join("###"), 31) : this.murmurhash3_32_gc(e.join("###"), 31)
            },
            getKey: function() {
                var e = {};
                e.language = navigator.language, e.colorDepth = screen.colorDepth;
                var t = this.getScreenResolution();
                return e.screen_resolution = "undefined" != typeof t ? this.getScreenResolution().join("x") : "", e.timezone = (new Date).getTimezoneOffset(), e.openDatabase = typeof window.openDatabase, e.sessionStorage = this.hasSessionStorage(), e.localStorage = this.hasLocalStorage(), e.indexedDB = !! window.indexedDB, e.addBehavior = document.body ? typeof document.body.addBehavior : "", e.cpuClass = navigator.cpuClass, e.platform = navigator.platform, e.doNotTrack = navigator.doNotTrack, e.plugins = this.murmurhash3_32_gc(this.getPluginsString(), 31), this.canvas && this.isCanvasSupported() && (e.canvas = this.murmurhash3_32_gc(this.getCanvasFingerprint(), 31)), e
            },
            murmurhash3_32_gc: function(e, t) {
                var n, i, r, a, o, s, c, h;
                for (n = 3 & e.length, i = e.length - n, r = t, o = 3432918353, s = 461845907, h = 0; i > h;) c = 255 & e.charCodeAt(h) | (255 & e.charCodeAt(++h)) << 8 | (255 & e.charCodeAt(++h)) << 16 | (255 & e.charCodeAt(++h)) << 24, ++h, c = (65535 & c) * o + (((c >>> 16) * o & 65535) << 16) & 4294967295, c = c << 15 | c >>> 17, c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295, r ^= c, r = r << 13 | r >>> 19, a = 5 * (65535 & r) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295, r = (65535 & a) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
                switch (c = 0, n) {
                case 3:
                    c ^= (255 & e.charCodeAt(h + 2)) << 16;
                case 2:
                    c ^= (255 & e.charCodeAt(h + 1)) << 8;
                case 1:
                    c ^= 255 & e.charCodeAt(h), c = (65535 & c) * o + (((c >>> 16) * o & 65535) << 16) & 4294967295, c = c << 15 | c >>> 17, c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295, r ^= c
                }
                return r ^= e.length, r ^= r >>> 16, r = 2246822507 * (65535 & r) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 13, r = 3266489909 * (65535 & r) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 16, r >>> 0
            },
            hasLocalStorage: function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !0
                }
            },
            hasSessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (e) {
                    return !0
                }
            },
            isCanvasSupported: function() {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            },
            isIE: function() {
                return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
            },
            getPluginsString: function() {
                return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
            },
            getRegularPluginsString: function() {
                return this.map(navigator.plugins, function(e) {
                    var t = this.map(e, function(e) {
                        return [e.type, e.suffixes].join("~")
                    }).join(",");
                    return [e.name, e.description, t].join("::")
                }, this).join(";")
            },
            getIEPluginsString: function() {
                if (window.ActiveXObject) {
                    var e = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                    return this.map(e, function(e) {
                        try {
                            return new ActiveXObject(e), e
                        } catch (t) {
                            return null
                        }
                    }).join(";")
                }
                return ""
            },
            getScreenResolution: function() {
                var e;
                return e = this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
            },
            getCanvasFingerprint: function() {
                var e = document.createElement("canvas"),
                    t = e.getContext("2d"),
                    n = "http://www.baidu.com";
                return t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(n, 4, 17), e.toDataURL()
            }
        }, e
    })
});;
define("waimai:static/utils/oop-base/aspect/aspect.js", function(t, r, i) {
    function e(t, r, i, e) {
        for (var o, c, f = r.split(n); o = f.shift();) c = s(this, o), c.__isAspected || a.call(this, o), this.on(t + ":" + o, i, e);
        return this
    }
    function s(t, r) {
        var i = t[r];
        if (!i) throw new Error("Invalid method name: " + r);
        return i
    }
    function a(t) {
        var r = this[t];
        this[t] = function() {
            var i = Array.prototype.slice.call(arguments),
                e = ["before:" + t].concat(i);
            if (this.trigger.apply(this, e) !== !1) {
                var s = r.apply(this, arguments),
                    a = ["after:" + t, s].concat(i);
                return this.trigger.apply(this, a), s
            }
        }, this[t].__isAspected = !0
    }
    i.exports = {
        before: function(t, r, i) {
            return e.call(this, "before", t, r, i)
        },
        after: function(t, r, i) {
            return e.call(this, "after", t, r, i)
        }
    };
    var n = /\s+/
});;
define("waimai:static/utils/oop-base/attribute/attribute.js", function(t, r) {
    function e(t) {
        return "[object String]" === w.call(t)
    }
    function n(t) {
        return "[object Function]" === w.call(t)
    }
    function i(t) {
        return null != t && t == t.window
    }
    function a(t) {
        if (!t || "[object Object]" !== w.call(t) || t.nodeType || i(t)) return !1;
        try {
            if (t.constructor && !A.call(t, "constructor") && !A.call(t.constructor.prototype, "isPrototypeOf")) return !1
        } catch (r) {
            return !1
        }
        var e;
        if (d) for (e in t) return A.call(t, e);
        for (e in t);
        return void 0 === e || A.call(t, e)
    }
    function o(t) {
        if (!t || "[object Object]" !== w.call(t) || t.nodeType || i(t) || !t.hasOwnProperty) return !1;
        for (var r in t) if (t.hasOwnProperty(r)) return !1;
        return !0
    }
    function c(t, r) {
        var e;
        for (e in r) r.hasOwnProperty(e) && (t[e] = u(r[e], t[e]));
        return t
    }
    function u(t, r) {
        return P(t) ? t = t.slice() : a(t) && (a(r) || (r = {}), t = c(r, t)), t
    }
    function s(t, r, e) {
        for (var n = [], i = r.constructor.prototype; i;) i.hasOwnProperty("attrs") || (i.attrs = {}), l(e, i.attrs, i), o(i.attrs) || n.unshift(i.attrs), i = i.constructor.superclass;
        for (var a = 0, c = n.length; c > a; a++) y(t, p(n[a]))
    }
    function f(t, r) {
        y(t, p(r, !0), !0)
    }
    function l(t, r, e, n) {
        for (var i = 0, a = t.length; a > i; i++) {
            var o = t[i];
            e.hasOwnProperty(o) && (r[o] = n ? r.get(o) : e[o])
        }
    }
    function h(t, r) {
        for (var e in r) if (r.hasOwnProperty(e)) {
            var i, a = r[e].value;
            n(a) && (i = e.match(m)) && (t[i[1]](v(i[2]), a), delete r[e])
        }
    }
    function v(t) {
        var r = t.match(S),
            e = r[1] ? "change:" : "";
        return e += r[2].toLowerCase() + r[3]
    }
    function g(t, r, e) {
        var n = {
            silent: !0
        };
        t.__initializingAttrs = !0;
        for (var i in e) e.hasOwnProperty(i) && r[i].setter && t.set(i, e[i], n);
        delete t.__initializingAttrs
    }
    function p(t, r) {
        var e = {};
        for (var n in t) {
            var i = t[n];
            e[n] = !r && a(i) && b(i, x) ? i : {
                value: i
            }
        }
        return e
    }
    function y(t, r, e) {
        var n, i, a;
        for (n in r) if (r.hasOwnProperty(n)) {
            if (i = r[n], a = t[n], a || (a = t[n] = {}), void 0 !== i.value && (a.value = u(i.value, a.value)), e) continue;
            for (var o in C) {
                var c = C[o];
                void 0 !== i[c] && (a[c] = i[c])
            }
        }
        return t
    }
    function b(t, r) {
        for (var e = 0, n = r.length; n > e; e++) if (t.hasOwnProperty(r[e])) return !0;
        return !1
    }
    function O(t) {
        return null == t || (e(t) || P(t)) && 0 === t.length || o(t)
    }
    function j(t, r) {
        if (t === r) return !0;
        if (O(t) && O(r)) return !0;
        var e = w.call(t);
        if (e != w.call(r)) return !1;
        switch (e) {
        case "[object String]":
            return t == String(r);
        case "[object Number]":
            return t != +t ? r != +r : 0 == t ? 1 / t == 1 / r : t == +r;
        case "[object Date]":
        case "[object Boolean]":
            return +t == +r;
        case "[object RegExp]":
            return t.source == r.source && t.global == r.global && t.multiline == r.multiline && t.ignoreCase == r.ignoreCase;
        case "[object Array]":
            var n = t.toString(),
                i = r.toString();
            return -1 === n.indexOf("[object") && -1 === i.indexOf("[object") && n === i
        }
        if ("object" != typeof t || "object" != typeof r) return !1;
        if (a(t) && a(r)) {
            if (!j(_(t), _(r))) return !1;
            for (var o in t) if (t[o] !== r[o]) return !1;
            return !0
        }
        return !1
    }
    r.initAttrs = function(t) {
        var r = this.attrs = {},
            e = this.propsInAttrs || [];
        s(r, this, e), t && f(r, t), g(this, r, t), h(this, r), l(e, this, r, !0)
    }, r.get = function(t) {
        var r = this.attrs[t] || {},
            e = r.value;
        return r.getter ? r.getter.call(this, e, t) : e
    }, r.set = function(t, r, n) {
        var i = {};
        e(t) ? i[t] = r : (i = t, n = r), n || (n = {});
        var o = n.silent,
            u = n.override,
            s = this.attrs,
            f = this.__changedAttrs || (this.__changedAttrs = {});
        for (t in i) if (i.hasOwnProperty(t)) {
            var l = s[t] || (s[t] = {});
            if (r = i[t], l.readOnly) throw new Error("This attribute is readOnly: " + t);
            l.setter && (r = l.setter.call(this, r, t));
            var h = this.get(t);
            !u && a(h) && a(r) && (r = c(c({}, h), r)), s[t].value = r, this.__initializingAttrs || j(h, r) || (o ? f[t] = [r, h] : this.trigger("change:" + t, r, h, t))
        }
        return this
    }, r.change = function() {
        var t = this.__changedAttrs;
        if (t) {
            for (var r in t) if (t.hasOwnProperty(r)) {
                var e = t[r];
                this.trigger("change:" + r, e[0], e[1], r)
            }
            delete this.__changedAttrs
        }
        return this
    }, r._isPlainObject = a;
    var d, w = Object.prototype.toString,
        A = Object.prototype.hasOwnProperty;
    !
    function() {
        function t() {
            this.x = 1
        }
        var r = [];
        t.prototype = {
            valueOf: 1,
            y: 1
        };
        for (var e in new t) r.push(e);
        d = "x" !== r[0]
    }();
    var P = Array.isArray ||
    function(t) {
        return "[object Array]" === w.call(t)
    }, _ = Object.keys;
    _ || (_ = function(t) {
        var r = [];
        for (var e in t) t.hasOwnProperty(e) && r.push(e);
        return r
    });
    var m = /^(on|before|after)([A-Z].*)$/,
        S = /^(Change)?([A-Z])(.*)/,
        x = ["value", "getter", "setter", "readOnly"],
        C = ["setter", "getter", "readOnly"]
});;
define("waimai:static/utils/oop-base/class/class.js", function(t, n, r) {
    function o(t) {
        return this instanceof o || !f(t) ? void 0 : e(t)
    }
    function i(t) {
        var n, r;
        for (n in t) r = t[n], o.Mutators.hasOwnProperty(n) ? o.Mutators[n].call(this, r) : this.prototype[n] = r
    }
    function e(t) {
        return t.extend = o.extend, t.implement = i, t
    }
    function s() {}
    function c(t, n, r) {
        for (var o in n) if (n.hasOwnProperty(o)) {
            if (r && -1 === l(r, o)) continue;
            "prototype" !== o && (t[o] = n[o])
        }
    }
    r.exports = o, o.create = function(t, n) {
        function r() {
            t.apply(this, arguments), this.constructor === r && this.initialize && this.initialize.apply(this, arguments)
        }
        return f(t) || (n = t, t = null), n || (n = {}), t || (t = n.Extends || o), n.Extends = t, t !== o && c(r, t, t.StaticsWhiteList), i.call(r, n), e(r)
    }, o.extend = function(t) {
        return t || (t = {}), t.Extends = this, o.create(t)
    }, o.Mutators = {
        Extends: function(t) {
            var n = this.prototype,
                r = u(t.prototype);
            c(r, n), r.constructor = this, this.prototype = r, this.superclass = t.prototype
        },
        Implements: function(t) {
            p(t) || (t = [t]);
            for (var n, r = this.prototype; n = t.shift();) c(r, n.prototype || n)
        },
        Statics: function(t) {
            c(this, t)
        }
    };
    var u = Object.__proto__ ?
    function(t) {
        return {
            __proto__: t
        }
    } : function(t) {
        return s.prototype = t, new s
    }, a = Object.prototype.toString, p = Array.isArray ||
    function(t) {
        return "[object Array]" === a.call(t)
    }, f = function(t) {
        return "[object Function]" === a.call(t)
    }, l = Array.prototype.indexOf ?
    function(t, n) {
        return t.indexOf(n)
    } : function(t, n) {
        for (var r = 0, o = t.length; o > r; r++) if (t[r] === n) return r;
        return -1
    }
});;
define("waimai:static/utils/oop-base/events/events.js", function(t, e, r) {
    function n() {}
    function o(t, e, r) {
        var n = !0;
        if (t) {
            var o = 0,
                i = t.length,
                s = e[0],
                a = e[1],
                f = e[2];
            switch (e.length) {
            case 0:
                for (; i > o; o += 2) n = t[o].call(t[o + 1] || r) !== !1 && n;
                break;
            case 1:
                for (; i > o; o += 2) n = t[o].call(t[o + 1] || r, s) !== !1 && n;
                break;
            case 2:
                for (; i > o; o += 2) n = t[o].call(t[o + 1] || r, s, a) !== !1 && n;
                break;
            case 3:
                for (; i > o; o += 2) n = t[o].call(t[o + 1] || r, s, a, f) !== !1 && n;
                break;
            default:
                for (; i > o; o += 2) n = t[o].apply(t[o + 1] || r, e) !== !1 && n
            }
        }
        return n
    }
    function i(t) {
        return "[object Function]" === Object.prototype.toString.call(t)
    }
    var s = /\s+/;
    n.prototype.on = function(t, e, r) {
        var n, o, i;
        if (!e) return this;
        for (n = this.__events || (this.__events = {}), t = t.split(s); o = t.shift();) i = n[o] || (n[o] = []), i.push(e, r);
        return this
    }, n.prototype.once = function(t, e, r) {
        var n = this,
            o = function() {
                n.off(t, o), e.apply(r || n, arguments)
            };
        return this.on(t, o, r)
    }, n.prototype.off = function(t, e, r) {
        var n, o, i, f;
        if (!(n = this.__events)) return this;
        if (!(t || e || r)) return delete this.__events, this;
        for (t = t ? t.split(s) : a(n); o = t.shift();) if (i = n[o]) if (e || r) for (f = i.length - 2; f >= 0; f -= 2) e && i[f] !== e || r && i[f + 1] !== r || i.splice(f, 2);
        else delete n[o];
        return this
    }, n.prototype.trigger = function(t) {
        var e, r, n, i, a, f, c = [],
            p = !0;
        if (!(e = this.__events)) return this;
        for (t = t.split(s), a = 1, f = arguments.length; f > a; a++) c[a - 1] = arguments[a];
        for (; r = t.shift();)(n = e.all) && (n = n.slice()), (i = e[r]) && (i = i.slice()), "all" !== r && (p = o(i, c, this) && p), p = o(n, [r].concat(c), this) && p;
        return p
    }, n.prototype.emit = n.prototype.trigger;
    var a = Object.keys;
    a || (a = function(t) {
        var e = [];
        for (var r in t) t.hasOwnProperty(r) && e.push(r);
        return e
    }), n.mixTo = function(t) {
        function e(e) {
            t[e] = function() {
                return r[e].apply(s, Array.prototype.slice.call(arguments)), this
            }
        }
        var r = n.prototype;
        if (i(t)) {
            for (var o in r) r.hasOwnProperty(o) && (t.prototype[o] = r[o]);
            Object.keys(r).forEach(function(e) {
                t.prototype[e] = r[e]
            })
        } else {
            var s = new n;
            for (var o in r) r.hasOwnProperty(o) && e(o)
        }
    }, r.exports = n
});;
define("waimai:static/utils/oop-base/base/base.js", function(t, s, i) {
    function a(t, s) {
        for (var i in s) if (s.hasOwnProperty(i)) {
            var a = "_onChange" + e(i);
            t[a] && t.on("change:" + i, t[a])
        }
    }
    function e(t) {
        return t.charAt(0).toUpperCase() + t.substring(1)
    }
    var n = t("waimai:static/utils/oop-base/class/class.js"),
        o = t("waimai:static/utils/oop-base/events/events.js"),
        r = t("waimai:static/utils/oop-base/aspect/aspect.js"),
        c = t("waimai:static/utils/oop-base/attribute/attribute.js");
    i.exports = n.create({
        Implements: [o, r, c],
        initialize: function(t) {
            this.initAttrs(t), a(this, this.attrs)
        },
        destroy: function() {
            this.off();
            for (var t in this) this.hasOwnProperty(t) && delete this[t];
            this.destroy = function() {}
        }
    })
});;
define("waimai:static/utils/stat.js", function(t, n, e) {
    function a(t, n, e) {
        return function() {
            t && t.apply(e, arguments), n && n.apply(e, arguments)
        }
    }
    e.exports.addNStat = function(t, n) {
        r.addStat(t, n)
    }, e.exports.init = function(t, n, e, a) {
        r.init(t, n, e, a)
    }, e.exports.open = function(t, n) {
        var e;
        n = $.extend({}, n, stat.opts), stat.opts.page && stat.opts.da_trd && "hotel" == stat.opts.da_trd && !/.*(stat_action_path).*/.test(t) && (e = util.getParam("stat_action_path") || "", e ? e += "," + stat.opts.page : e = stat.opts.page, n.stat_action_path = e), t += t.indexOf("?") > -1 ? "&" + $.param(n) : "?" + $.param(n), window.open(t)
    }, e.exports.getOption = function() {
        return $.extend({
            page: r.pagePre
        }, r.opts)
    };
    var i = {
        encode: function(t) {
            var n = [];
            return $.each(t, function(t, e) {
                n.push(t + "=" + encodeURIComponent(e))
            }), n.join("&")
        },
        decode: function(t) {
            if ("string" == typeof t) return decodeURIComponent(t);
            var n = [];
            return $.each(t, function(t, e) {
                n.push(t + "=" + (/%[A-Za-z0-9]{2}/.test(e) ? decodeURIComponent(e) : e))
            }), n.join("&")
        }
    },
        r = {
            opts: {
                resid: 61,
                func: "place",
                da_ver: "2.1.0"
            },
            init: function() {
                "object" == typeof arguments[0] && (this.opts = $.extend(this.opts, arguments[0]), this.pagePre = this.opts.page)
            },
            addStat: function(t, n, e) {
                try {
                    if (t.nodeType) {
                        var a = $(t).attr(s.statArr).split("|");
                        return void this.addStat(a[1], a.length > 2 ? a[2] : $(t).text(), a[0])
                    }
                    var i = $.extend({}, this.opts),
                        r = typeof t;
                    "string" == r ? (t = t.replace(/[\{\}'"]/g, ""), $.each(t.split(","), function(t, n) {
                        var e = n.split(":");
                        2 == e.length && (i[$.trim(e[0])] = $.trim(e[1]))
                    })) : "object" == r && $.extend(i, t), e && (i.da_act = $.trim(e)), i.t = (1e8 * Math.random()).toFixed(0), this.pagePre && (i.da_src = this.pagePre + (i.da_src ? "." + i.da_src : "")), this.sendStat(i)
                } catch (o) {}
            },
            sendStat: function(t) {
                var n = new Image;
                n.onload = n.onerror = function() {
                    n = null
                }, n.src = "http://map.baidu.com/img/transparent.gif?" + i.encode(t)
            }
        },
        o = {
            items: [],
            handle: null,
            addStat: function(t) {
                var n = $(t).attr(s.statArr),
                    e = n.match(/load\|\{?(.*)(da_src:([^,\}]+))(.*)/);
                e && e.length > 0 && (this.items.push(e[3]), this.send())
            },
            stop: function() {
                this.handle && clearTimeout(this.handle)
            },
            send: function() {
                this.stop();
                var t = this;
                t.items && t.items.length && (this.handle = setTimeout(function() {
                    r.addStat({
                        da_src: t.items.join(":"),
                        da_act: "load"
                    }), t.items = []
                }, 2e3))
            }
        },
        s = {
            statArr: "nstat",
            surpportEvent: ["ready", "load", "click", "one", "show", "showone", "hide", "hideone", "mousedown"],
            scanBindEvent: ["ready", "load", "click", "one", "mousedown"],
            handles: {
                mergeEvent: {
                    event: ["load"],
                    handle: function(t) {
                        var n = $(t).attr(s.statArr).split("|");
                        o.addStat(t), n[0] = n[0] + "ed", $(t).attr(s.statArr, n.join("|"))
                    }
                },
                customEvent: {
                    event: ["ready", "showone", "hideone"],
                    handle: function(t) {
                        var n = $(t).attr(s.statArr).split("|");
                        r.addStat(t), n[0] = n[0] + "ed", $(t).attr(s.statArr, n.join("|"))
                    }
                },
                jQueryEvent: {
                    event: ["click", "one"],
                    handle: function(t) {
                        var n = $(t).attr(s.statArr).split("|")[0],
                            e = n + ".nstat";
                        $(t).unbind(e).bind(e, function() {
                            r.addStat(t)
                        });
                        var a = $._data($(t)[0], "events")[n],
                            i = a.pop();
                        a.unshift(i)
                    }
                },
                statusEvent: {
                    event: ["show", "hide"],
                    handle: function(t) {
                        r.addStat(t)
                    }
                }
            },
            getHandle: function(t) {
                for (var n in this.handles) if ($.inArray(t, this.handles[n].event) > -1) return this.handles[n].handle
            },
            init: function(t, n) {
                var e = this.statArr,
                    a = this,
                    i = $(t || "body"),
                    r = function() {
                        var t = $(this).attr(e).split("|")[0];
                        (n || $.inArray(t, a.scanBindEvent) > -1) && $.inArray(t, a.surpportEvent) > -1 && a.getHandle(t)(this)
                    },
                    o = n ? "[" + e + "^='" + n + "']" : "[" + e + "]";
                i.is(o) && r.apply(i[0]), i.find("[" + e + "]").each(r)
            }
        },
        u = {
            fun_proxy: [{
                fun: ["append", "prepend", "before", "after"],
                proxy: function(t) {
                    return function() {
                        return $.each(arguments, function(t, n) {
                            var e = "string" == typeof n ? $.trim(n) : n,
                                a = $(e);
                            s.init(a)
                        }), t.apply(this, arguments)
                    }
                }
            }, {
                fun: ["html", "wrapAll"],
                proxy: function(t) {
                    return function() {
                        var n = t.apply(this, arguments);
                        return s.init($(this)), n
                    }
                }
            }, {
                fun: ["show", "hide"],
                proxy: function(t, n) {
                    return function() {
                        var e = t.apply(this, arguments);
                        return s.init($(this), n), e
                    }
                }
            }, {
                fun: ["attr"],
                proxy: function(t) {
                    return function() {
                        var n = t.apply(this, arguments);
                        return arguments.length >= 2 && s.init($(this)), n
                    }
                }
            }],
            $_fun_proxy: [{
                fun: ["ajax"],
                proxy: function(t) {
                    return function(n) {
                        return n = n || {}, n.beforeSend = a(n.beforeSend, function() {
                            o.stop()
                        }, n), n.complete = a(n.complete, function() {
                            o.send()
                        }, n), t.apply($, arguments)
                    }
                }
            }],
            init: function() {
                var t = this;
                $.each(t.fun_proxy, function(t, n) {
                    $.each(n.fun, function(t, e) {
                        $.fn[e] = n.proxy($.fn[e], e)
                    })
                })
            },
            __init: function() {
                var t = this;
                $.each(t.$_fun_proxy, function(t, n) {
                    $.each(n.fun, function(t, e) {
                        $[e] = n.proxy($[e], e)
                    })
                })
            }
        };
    u.__init(), $(function() {
        u.init(), s.init()
    })
});;
define("waimai:static/utils/timer.js", function(n, e, t) {
    !
    function() {
        var n = {
            tmpl: function(n, e) {
                var t = /\{([^\}]*)\}/g;
                return n.replace(t, function(n, t) {
                    return "undefined" != typeof e[t] ? e[t] : ""
                })
            }
        },
            e = function(n, t) {
                var o = this;
                if (o.nodeMapList = [], $.isPlainObject(n) ? (t = n, t.container = $(document.body)) : (t = t || {}, t.container = $(n)), o.options = $.extend({}, e.DEFAULTS, t), !o.paramsCheck()) throw new Error("参数配置有误");
                return o.init(), o
            };
        e.PRECISION = {
            day: "day",
            hour: "hour",
            minute: "minute",
            second: "second"
        }, e.DEFAULTS = {
            selector: "[data-role='timer']",
            step: 1,
            now: 0,
            end: null,
            precision: e.PRECISION.second,
            timingTpl: "{days}天{hours}小时{minutes}分{seconds}秒",
            endTpl: "已结束"
        }, e.prototype = {
            init: function() {
                var n, e = this,
                    t = e.options,
                    o = $(t.selector, t.container),
                    i = e.nodeMapList;
                o.each(function(e, o) {
                    n = o.getAttribute("data-end"), n || (n = t.end > 0 ? t.end : t.now), i.push({
                        node: o,
                        life: n - t.now
                    })
                }), e.loop()
            },
            paramsCheck: function() {
                var n = this,
                    e = n.options,
                    t = function() {};
                return e.now = e.now, e.end = e.end ? e.end : 0, e.step = parseInt(e.step), e.on = e.on || {}, e.on.end = $.isFunction(e.on.end) ? e.on.end : t, e.selector && e.now && !isNaN(e.step) ? (e.step = Math.max(1e3 * e.step, 1e3), !0) : !1
            },
            loop: function() {
                var n = this;
                clearTimeout(n.loopTimer), n.burn(), n.filter(), n.refresh(), n.nodeMapList.length > 0 && (n.loopTimer = setTimeout(function() {
                    n.loop()
                }, n.options.step))
            },
            refresh: function() {
                var e = this,
                    t = e.options.timingTpl,
                    o = (e.options.endTpl, e.nodeMapList);
                $.each(o, function(o, i) {
                    i.node.innerHTML = n.tmpl(t, e.convertDate(i.life))
                })
            },
            filter: function() {
                {
                    var n = this,
                        e = [],
                        t = [];
                    n.options, n.nodeMapList
                }
                $.each(n.nodeMapList, function(n, o) {
                    o.life <= 0 ? t.push(o) : e.push(o)
                }), t.length > 0 && n.onEnd(t), n.nodeMapList = e
            },
            burn: function() {
                var n = this,
                    e = n.options,
                    t = n.nodeMapList;
                $.each(t, function(n, t) {
                    t.life -= e.step
                })
            },
            convertDate: function(n) {
                var t = this.options.precision,
                    o = 1e3,
                    i = 60 * o,
                    s = 60 * i,
                    r = 24 * s,
                    a = 0,
                    p = 0,
                    c = 0,
                    d = 0;
                switch (t) {
                case e.PRECISION.day:
                    a = parseInt(n / r);
                    break;
                case e.PRECISION.hour:
                    a = parseInt(n / r), p = parseInt(n % r / s);
                    break;
                case e.PRECISION.minute:
                    a = parseInt(n / r), p = parseInt(n % r / s), c = parseInt(n % s / i);
                    break;
                case e.PRECISION.second:
                    a = parseInt(n / r), p = parseInt(n % r / s), c = parseInt(n % s / i), d = parseInt(n % i / o)
                }
                return {
                    days: a,
                    hours: p,
                    minutes: c,
                    seconds: d
                }
            },
            restart: function(n, e, t) {
                var o, i = this,
                    s = {},
                    r = i.nodeMapList;
                if (o = $(n, i.container)[0], e && t) if (s.node = o, s.life = t - e, s.life <= 0) i.onEnd([s]);
                else {
                    for (var a = 0; a < r.length; a++) if (r[a].node == o) {
                        r.splice(a, 1);
                        break
                    }
                    r.push(s), i.loop()
                }
            },
            onEnd: function(n) {
                var e = this,
                    t = e.options.on.end;
                $.each(n, function(n, t) {
                    t.node.innerHTML = e.options.endTpl
                }), t(n)
            }
        }, t.exports = e
    }()
});;
!
function() {
    var n = 50,
        t = 25,
        e = {},
        r = [].slice,
        a = {},
        c = function(n, t, r, c) {
            var o = a[n];
            o || (o = a[n] = {}), o[t] = o[t] || [], o[t].push({
                func: r,
                context: c || e
            })
        },
        o = function(n, t, r, a) {
            var o = function() {
                    return e.off(n, t, o), r.apply(a || e, arguments)
                };
            c(n, t, o, a)
        },
        f = function(e, c) {
            if (a[e] && a[e][c] && a[e][c].length) {
                for (var o = a[e][c], f = [], i = o.length; i--;) f.push({
                    handler: o[i],
                    args: r.call(arguments, 1)
                });
                !
                function() {
                    var e = +new Date;
                    do {
                        var r = f.shift(),
                            a = r.handler;
                        try {
                            a.func.apply(a.context, r.args)
                        } catch (c) {}
                    } while (f.length && +new Date - e < n);
                    f.length > 0 && setTimeout(arguments.callee, t)
                }()
            }
        },
        i = function(n, t, r, c) {
            if (c = c || e, a[n] && a[n][t] && a[n][t].length) for (var o, f = a[n][t], i = f.length; i--;) o = f[i], o.func === r && o.context === c && f.splice(i, 1)
        };
    e.on = c, e.once = o, e.trigger = f, e.off = i, window.listener = window.listener || e
}();;
!
function(e) {
    e.extend({
        href: function() {
            var e, n = window.location.href,
                t = new RegExp;
            return n = n.replace(/#.*/, ""), {
                getValue: function() {
                    return n
                },
                replace: function() {
                    return n = n.replace(arguments[0], arguments[1]), this
                },
                path: function(e) {
                    return n = -1 != n.indexOf("?") ? n.replace(/\/[^\/]*\?/, "/" + e + "?") : n.replace(/\/[^/]*$/, "/" + e + "?"), this
                },
                param: function() {
                    var r = arguments,
                        i = r.length;
                    if (0 === i) return n = n.replace(/\?(.)*/, "?"), this;
                    if (1 == i && "string" == typeof r[0]) return t.compile("[&?]" + r[0] + "=([^=&?#]*)"), n.match(t) ? n.match(t)[1] : "";
                    if (2 == i) return t.compile("[&?]" + r[0] + "=([^=&?#]*)"), e = n.match(t), n = e ? n.replace(r[0] + "=" + e[1], r[0] + "=" + r[1]) : n + (n.indexOf("?") == n.length - 1 ? "" : "&") + r[0] + "=" + r[1], this;
                    if ("object" == typeof r[0]) {
                        var c, a = r[0];
                        for (c in a) r.callee(c, a[c])
                    }
                    return this
                },
                exec: function() {
                    window.location.href = n
                }
            }
        }
    })
}(jQuery);;
!
function(e, t, o, n) {
    var i = e(t);
    e.fn.lazyload = function(r) {
        function f() {
            var t = 0;
            clearTimeout(a), a = setTimeout(function() {
                d.each(function() {
                    var o = e(this),
                        n = this;
                    if (!h.skip_invisible || o.is(":visible")) if (e.abovethetop(n, h) || e.leftofbegin(n, h));
                    else if (e.belowthefold(n, h) || e.rightoffold(n, h)) {
                        if (++t > h.failure_limit) return !1
                    } else o.trigger("appear"), t = 0
                })
            }, 500)
        }
        var l, a, d = this,
            h = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: t,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null
            };
        return r && (n !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), n !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), e.extend(h, r)), l = h.container === n || h.container === t ? i : e(h.container), 0 === h.event.indexOf("scroll") && l.bind(h.event, function() {
            return f()
        }), this.each(function() {
            var t = this,
                o = e(t);
            t.loaded = !1, o.one("appear", function() {
                if (!this.loaded) {
                    if (h.appear) {
                        var n = d.length;
                        h.appear.call(t, n, h)
                    }
                    e("<img />").bind("load", function() {
                        o.hide().attr("src", o.data(h.data_attribute))[h.effect](h.effect_speed), t.loaded = !0;
                        var n = e.grep(d, function(e) {
                            return !e.loaded
                        });
                        if (d = e(n), h.load) {
                            var i = d.length;
                            h.load.call(t, i, h)
                        }
                    }).attr("src", o.data(h.data_attribute))
                }
            }), 0 !== h.event.indexOf("scroll") && o.bind(h.event, function() {
                t.loaded || o.trigger("appear")
            })
        }), i.bind("resize", function() {
            f()
        }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && d.each(function() {
                e(this).trigger("appear")
            })
        }), e(o).ready(function() {
            f()
        }), this
    }, e.belowthefold = function(o, r) {
        var f;
        return f = r.container === n || r.container === t ? i.height() + i.scrollTop() : e(r.container).offset().top + e(r.container).height(), f <= e(o).offset().top - r.threshold
    }, e.rightoffold = function(o, r) {
        var f;
        return f = r.container === n || r.container === t ? i.width() + i.scrollLeft() : e(r.container).offset().left + e(r.container).width(), f <= e(o).offset().left - r.threshold
    }, e.abovethetop = function(o, r) {
        var f;
        return f = r.container === n || r.container === t ? i.scrollTop() : e(r.container).offset().top, f >= e(o).offset().top + r.threshold + e(o).height()
    }, e.leftofbegin = function(o, r) {
        var f;
        return f = r.container === n || r.container === t ? i.scrollLeft() : e(r.container).offset().left, f >= e(o).offset().left + r.threshold + e(o).width()
    }, e.inviewport = function(t, o) {
        return !(e.rightoffold(t, o) || e.leftofbegin(t, o) || e.belowthefold(t, o) || e.abovethetop(t, o))
    }, e.extend(e.expr[":"], {
        "below-the-fold": function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document);;
!
function(e, a, t) {
    function l(e) {
        var a = {},
            l = /^jQuery\d+$/;
        return t.each(e.attributes, function(e, t) {
            t.specified && !l.test(t.name) && (a[t.name] = t.value)
        }), a
    }
    function r(e, l) {
        var r = this,
            o = t(r);
        if (r.value == o.attr("placeholder") && o.hasClass("placeholder")) if (o.data("placeholder-password")) {
            if (o = o.hide().next().show().attr("id", o.removeAttr("id").data("placeholder-id")), e === !0) return o[0].value = l;
            o.focus()
        } else r.value = "", o.removeClass("placeholder"), r == a.activeElement && r.select()
    }
    function o() {
        var e, a = this,
            o = t(a),
            d = this.id;
        if ("" == a.value) {
            if ("password" == a.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        e = o.clone().attr({
                            type: "text"
                        })
                    } catch (c) {
                        e = t("<input>").attr(t.extend(l(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": o,
                        "placeholder-id": d
                    }).bind("focus.placeholder", r), o.data({
                        "placeholder-textinput": e,
                        "placeholder-id": d
                    }).before(e)
                }
                o = o.removeAttr("id").hide().prev().attr("id", d).show()
            }
            o.addClass("placeholder"), o[0].value = o.attr("placeholder")
        } else o.removeClass("placeholder")
    }
    var d, c, n = "placeholder" in a.createElement("input"),
        i = "placeholder" in a.createElement("textarea"),
        u = t.fn,
        h = t.valHooks,
        p = t.propHooks;
    n && i ? (c = u.placeholder = function() {
        return this
    }, c.input = c.textarea = !0) : (c = u.placeholder = function() {
        var e = this;
        return e.filter((n ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": r,
            "blur.placeholder": o
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, c.input = n, c.textarea = i, d = {
        get: function(e) {
            var a = t(e),
                l = a.data("placeholder-password");
            return l ? l[0].value : a.data("placeholder-enabled") && a.hasClass("placeholder") ? "" : e.value
        },
        set: function(e, l) {
            var d = t(e),
                c = d.data("placeholder-password");
            return c ? c[0].value = l : d.data("placeholder-enabled") ? ("" == l ? (e.value = l, e != a.activeElement && o.call(e)) : d.hasClass("placeholder") ? r.call(e, !0, l) || (e.value = l) : e.value = l, d) : e.value = l
        }
    }, n || (h.input = d, p.value = d), i || (h.textarea = d, p.value = d), t(function() {
        t(a).delegate("form", "submit.placeholder", function() {
            var e = t(".placeholder", this).each(r);
            setTimeout(function() {
                e.each(o)
            }, 10)
        })
    }), t(e).bind("beforeunload.placeholder", function() {
        t(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery);;
this.JSON || (this.JSON = {}), function() {
    function f(t) {
        return 10 > t ? "0" + t : t
    }
    function quote(t) {
        return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + t + '"'
    }
    function str(t, e) {
        var n, r, f, o, u, i = gap,
            a = e[t];
        switch (a && "object" == typeof a && "function" == typeof a.toJSON && (a = a.toJSON(t)), "function" == typeof rep && (a = rep.call(e, t, a)), typeof a) {
        case "string":
            return quote(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a) return "null";
            if (gap += indent, u = [], "[object Array]" === Object.prototype.toString.apply(a)) {
                for (o = a.length, n = 0; o > n; n += 1) u[n] = str(n, a) || "null";
                return f = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + i + "]" : "[" + u.join(",") + "]", gap = i, f
            }
            if (rep && "object" == typeof rep) for (o = rep.length, n = 0; o > n; n += 1) r = rep[n], "string" == typeof r && (f = str(r, a), f && u.push(quote(r) + (gap ? ": " : ":") + f));
            else for (r in a) Object.hasOwnProperty.call(a, r) && (f = str(r, a), f && u.push(quote(r) + (gap ? ": " : ":") + f));
            return f = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + i + "}" : "{" + u.join(",") + "}", gap = i, f
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "   ": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
        var r;
        if (gap = "", indent = "", "number" == typeof n) for (r = 0; n > r; r += 1) indent += " ";
        else "string" == typeof n && (indent = n);
        if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
        return str("", {
            "": t
        })
    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(t, e) {
            var n, r, f = t[e];
            if (f && "object" == typeof f) for (n in f) Object.hasOwnProperty.call(f, n) && (r = walk(f, n), void 0 !== r ? f[n] = r : delete f[n]);
            return reviver.call(t, e, f)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    }), $.toJSON = JSON.stringify, $.evalJSON = JSON.parse
}();;
window.baidu = window.baidu || {}, baidu.template = baidu.template || {}, baidu.template._encodeHTML = function(e) {
    return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
}, baidu.template._encodeEventHTML = function(e) {
    return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\\\\/g, "\\").replace(/\\\//g, "/").replace(/\\n/g, "\n").replace(/\\r/g, "\r")
};;
define("waimai:widget/common/ui/cartAlert/cartAlert.js", function(require, exports, module) {
    function dialogAlert(a) {
        var e = {};
        e.error_msg = "非常抱歉，" + a.error_msg;
        var t = alertTpl(e);
        if (alertDialog) {
            var r = alertDialog.getElement();
            r.html(t)
        } else {
            alertDialog = new Dialog({
                html: t,
                width: 250
            });
            var r = alertDialog.getElement();
            r.addClass("alertDialog")
        }
        clearTimeout(timerDialog), timerDialog = setTimeout(function() {
            alertDialog.show({
                fade: !0
            })
        }, 500)
    }
    var Dialog = require("jsmod/ui/dialog"),
        alertDialog, timerDialog, alertTpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<p class="mc-desc">', "undefined" == typeof error_msg ? "" : baidu.template._encodeHTML(error_msg), '</p><div class="submitBtns"><a class="mc-btn" href="http://waimai.baidu.com">看看其它餐厅</a><a class="mc-btn-dis closeBtn" href="javascript:;">取消</a></div>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0];
    module.exports = {
        alert: dialogAlert
    }
});;
define("waimai:widget/common/mustbuy/mustbuy.js", function(t, i, a) {
    var r = {},
        e = {},
        n = function(t) {
            if (t) for (var i = 0; i < t.length; i++) {
                var a = t[i];
                if (a) try {
                    for (var n = 0; n < a.data.length; n++) r[a.data[n].item_id] ? (r[a.data[n].item_id].push(a.data[n].category_id), e[a.data[n].item_id] = a.data[n].require_category_id) : (r[a.data[n].item_id] = [], r[a.data[n].item_id].push(a.data[n].category_id), e[a.data[n].item_id] = a.data[n].require_category_id)
                } catch (d) {}
            }
        },
        d = [],
        u = function(t) {
            for (var i = 0; i < t.length; i++) d.push(t[i].category_id)
        },
        o = !1;
    a.exports = {
        init: function(t) {
            o = !0, n(t), u(t)
        },
        haveCategory: function(t, i) {
            try {
                for (var a = 0; a < t.length; a++) {
                    var e = t[a].uniqId,
                        n = r[e];
                    if (n && -1 != n.indexOf(i)) return !0
                }
                return !1
            } catch (d) {}
        },
        getReguireId: function(t) {
            return e[t]
        },
        isInit: function() {
            return o
        },
        isRequireIdInCategory: function() {
            for (var t in e) if (e.hasOwnProperty(t) && 0 != e[t] && -1 == d.indexOf(e[t])) return !1;
            return !0
        }
    }
});;
define("waimai:widget/common/ui/setmeal/setmeal.js", function(require, exports, module) {
    function setMeal(e) {
        var t = {
            data: [],
            $el: null,
            selectData: {},
            curGrp: 0,
            selectBasic: {}
        };
        EventCenter = $({}), this.opt = $.extend(t, e), this.renderList(this.opt.data), this.bindEvent()
    }
    var stat = require("waimai:static/utils/statis.js"),
        cookie = require("wcommon:static/util/Cookie.js"),
        localStore = require("waimai:static/utils/store.js"),
        setMealTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="setMeal">    <div class="dish-title" data-node="setMeal-title">    </div>    <div class="content" data-node="setMeal-content">        <div class="groups" data-node="setMeal-content-groups">        </div>        <div class="dishes" data-node="setMeal-content-dishes">        </div>    </div>    <div class="bottom" data-node="setMeal-bottom">    </div></div>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        setMealTitleTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<span class="closeBtn"></span><h2>', "undefined" == typeof data.itemName ? "" : baidu.template._encodeHTML(data.itemName), "</h2>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        setMealDishTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    if (eval(_template_varName), _template_fun_array.push('<div class="list-title">    <div class="big-tip">        '), _template_fun_array.push(parseInt(data.min_num) >= 1 ? "            必选        " : "            可选        "), _template_fun_array.push("        "), parseInt(data.min_num) == parseInt(data.max_num) ? (_template_fun_array.push("            "), 1 == data.min_num ? _template_fun_array.push("            (单选)            ") : _template_fun_array.push("            (多选 ", "undefined" == typeof data.max_num ? "" : baidu.template._encodeHTML(data.max_num), "份)            "), _template_fun_array.push("        ")) : _template_fun_array.push("            (多选 ", "undefined" == typeof data.min_num ? "" : baidu.template._encodeHTML(data.min_num), "-", "undefined" == typeof data.max_num ? "" : baidu.template._encodeHTML(data.max_num), "份)        "), _template_fun_array.push('    </div>    <span class="select-msg" data-node="selectmsg">&nbsp;            </span></div><div class="dishes-list '), selected && selected.total && selected.total.count >= data.max_num && _template_fun_array.push(" enough"), _template_fun_array.push('">    '), data.ids.length > 0) {
                        var len = data.ids.length,
                            divider = Math.ceil(len / 2) - 1;
                        _template_fun_array.push("        ");
                        for (var i = 0, len = data.ids.length; len > i; i++) {
                            var item = data.ids[i];
                            if (_template_fun_array.push("            "), 0 == i && _template_fun_array.push('                <div class="dish-c">            '), _template_fun_array.push("            "), parseInt(item.have_attr) || parseInt(item.have_feature)) {
                                _template_fun_array.push('            <div class="dish-item mutiple" data-id="', "undefined" == typeof item.item_id ? "" : baidu.template._encodeHTML(item.item_id), '" data-name="', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '" data-price="', "undefined" == typeof item.current_price ? "" : baidu.template._encodeHTML(item.current_price), '">                <div class="mutiple-title" data-node="mutipletitle">                    <span class="dish-name">', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '</span>                    <span class="right-side">                        <span class="mutiple-box">                            多规格                        </span>                        <span class="dish-cost" data-node="dishCost">￥'), selected && selected[item.item_id] && selected[item.item_id].realPrice ? _template_fun_array.push("", "undefined" == typeof selected[item.item_id].realPrice ? "" : baidu.template._encodeHTML(selected[item.item_id].realPrice), "") : _template_fun_array.push("", "undefined" == typeof item.current_price ? "" : baidu.template._encodeHTML(item.current_price), ""), _template_fun_array.push('</span>                        <span class="select-icon"></span>                    </span>                </div>                <div class="mutiple-content">                    <table class="size-table" data-node="sizeTable">                        ');
                                for (var da in item.dish_attr) item.dish_attr[da].mainK = 1;
                                _template_fun_array.push("                        ");
                                var attrs = _.extend(item.dish_features, item.dish_attr);
                                for (var att in attrs) {
                                    _template_fun_array.push('                        <tr data-key="', "undefined" == typeof att ? "" : baidu.template._encodeHTML(att), '" data-maink="'), _template_fun_array.push(attrs[att].mainK ? "1" : "0"), _template_fun_array.push('">                            <td class="attr-title" valign="top">', "undefined" == typeof att ? "" : baidu.template._encodeHTML(att), "：</td>                            <td>                                ");
                                    for (var j = 0, attrlen = attrs[att].length; attrlen > j; j++) _template_fun_array.push('                                    <span class="s-item '), selected && selected[item.item_id] && -1 != _.indexOf(selected[item.item_id].features, attrs[att][j].id) && _template_fun_array.push(" sec"), _template_fun_array.push('" data-price="', "undefined" == typeof attrs[att][j].price ? "" : baidu.template._encodeHTML(attrs[att][j].price), '"  data-id="', "undefined" == typeof attrs[att][j].id ? "" : baidu.template._encodeHTML(attrs[att][j].id), '"  data-name="', "undefined" == typeof attrs[att][j].name ? "" : baidu.template._encodeHTML(attrs[att][j].name), '">', "undefined" == typeof attrs[att][j].name ? "" : baidu.template._encodeHTML(attrs[att][j].name), "</span>                                ");
                                    _template_fun_array.push("                            </td>                        </tr>                        ")
                                }
                                _template_fun_array.push('                        <tr>                            <td colspan="2">                                <span class="select-box">                                    '), selected && selected[item.item_id] && selected[item.item_id].count ? _template_fun_array.push('                                        <span class="minusicon" data-node="minusIcon"></span>                                        <span class="select_count">', "undefined" == typeof selected[item.item_id].count ? "" : baidu.template._encodeHTML(selected[item.item_id].count), '</span>                                        <span class="addicon" data-node="addIcon"></span>                                    ') : _template_fun_array.push('                                        <span class="minusicon v-hide" data-node="minusIcon"></span>                                        <span class="select_count v-hide">0</span>                                        <span class="addicon disable" data-node="addIcon"></span>                                    '), _template_fun_array.push("                                </span>                            </td>                        </tr>                    </table>                </div>            </div>            ")
                            } else _template_fun_array.push('            <div class="dish-item" data-id="', "undefined" == typeof item.item_id ? "" : baidu.template._encodeHTML(item.item_id), '" data-name="', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '" data-price="', "undefined" == typeof item.current_price ? "" : baidu.template._encodeHTML(item.current_price), '">                <span class="dish-name">', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '</span>                <span class="right-side">                    <span class="select-box">                        '), selected && selected[item.item_id] && selected[item.item_id].count ? _template_fun_array.push('                            <span class="minusicon" data-node="minusIcon"></span>                            <span class="select_count">', "undefined" == typeof selected[item.item_id].count ? "" : baidu.template._encodeHTML(selected[item.item_id].count), '</span>                            <span class="addicon" data-node="addIcon"></span>                        ') : _template_fun_array.push('                            <span class="minusicon v-hide" data-node="minusIcon"></span>                            <span class="select_count v-hide">0</span>                            <span class="addicon" data-node="addIcon"></span>                        '), _template_fun_array.push('                    </span>                    <span class="dish-cost">￥', "undefined" == typeof item.current_price ? "" : baidu.template._encodeHTML(item.current_price), "</span>                </span>            </div>            ");
                            _template_fun_array.push("            "), i == divider && _template_fun_array.push('                </div><div class="dish-c">            '), _template_fun_array.push("            "), i == len - 1 && _template_fun_array.push("                </div>            "), _template_fun_array.push("        ")
                        }
                        _template_fun_array.push("    ")
                    }
                    _template_fun_array.push("</div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        setMealGrpsTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push("");
                    for (var i = 0, len = data.length; len > i; i++) {
                        var item = data[i];
                        _template_fun_array.push('    <div class="group-item '), curIndex == i && _template_fun_array.push(" select"), _template_fun_array.push('" data-index="', "undefined" == typeof i ? "" : baidu.template._encodeHTML(i), '" data-grps-id="', "undefined" == typeof item.dish_group_id ? "" : baidu.template._encodeHTML(item.dish_group_id), '">        <span class="top-tip"></span>        '), _template_fun_array.push(parseInt(item.min_num) > 0 ? '            <p class="gtitle">必选</p>        ' : '            <p class="gtitle-not">可选</p>        '), _template_fun_array.push('        <p class="gname">', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), "</p>    </div>    "), len - 1 > i && _template_fun_array.push('        <div class="group-divider">            +        </div>    '), _template_fun_array.push("")
                    }
                    _template_fun_array.push('<span class="group-arrow" data-node="groupArrow"></span>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        setMealBotmTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<table width="100%">    <tr>        <td width="300">            套餐价：<span class="price" data-node="bottomprice" data-type="', "undefined" == typeof data.isFixedPrice ? "" : baidu.template._encodeHTML(data.isFixedPrice), '">￥'), 1 == parseInt(data.isFixedPrice) ? _template_fun_array.push("", "undefined" == typeof data.itemPrice ? "" : baidu.template._encodeHTML(data.itemPrice), "") : _template_fun_array.push("0"), _template_fun_array.push("</span>        </td>        <td>            "), data.itemStock < 50 && _template_fun_array.push("库存", "undefined" == typeof data.itemStock ? "" : baidu.template._encodeHTML(data.itemStock), "份"), _template_fun_array.push("            "), data.itemStock < 50 && data.minOrderNumber > 1 && _template_fun_array.push(" | "), _template_fun_array.push("            "), data.minOrderNumber > 1 && _template_fun_array.push("", "undefined" == typeof data.minOrderNumber ? "" : baidu.template._encodeHTML(data.minOrderNumber), "份起订"), _template_fun_array.push('        </td>        <td>            <div class="select-outer disable" data-node="selectouter">                <div class="select-con">                    <div class="select-inner">                        <strong class="minusfrcart" data-node="minusfrcart"></strong>                        <strong class="select_count" data-node="selectCount">', "undefined" == typeof data.minOrderNumber ? "" : baidu.template._encodeHTML(data.minOrderNumber), '</strong>                        <strong class="addtocart" data-node="addtocart"></strong>                    </div>                </div>            </div>        </td>        <td width="170" align="center"><span class="submit-btn disable"  data-node="submitBtn">加入购物车</span></td>    </tr></table>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        dishListClass = ".dishes-list",
        dishItemClass = ".dish-item",
        mulItemClass = "mutiple",
        grpItemClass = ".group-item",
        seboxItemCls = ".select-box",
        countItemCls = ".select_count",
        EventCenter, GlobalTips = require("waimai:static/utils/GlobalTips.js");
    $.extend(setMeal.prototype, {
        renderList: function(e) {
            var t = this.opt.$el;
            if (e && e.groups.length > 0) {
                var a = setMealTmpl();
                t.html(a), t.find("[data-node=setMeal-title]").html(setMealTitleTmpl({
                    data: e.basics
                })), t.find("[data-node=setMeal-content-groups]").html(setMealGrpsTmpl({
                    data: e.groups,
                    curIndex: this.opt.curGrp
                })), t.find("[data-node=setMeal-content-dishes]").html(setMealDishTmpl({
                    data: e.groups[this.opt.curGrp],
                    selected: {}
                })), t.find("[data-node=setMeal-bottom]").html(setMealBotmTmpl({
                    data: e.basics
                })), $(this).trigger("list.complete")
            }
        },
        getRealLeftNum: function() {},
        bindEvent: function() {
            var e = this,
                t = e.opt.$el;
            t.find("[data-node=setMeal-title]").on("click", function() {}), t.find("[data-node=setMeal-content-groups]").on("click", grpItemClass, function(a) {
                var n = $(a.currentTarget);
                e.switchGrps(n, t.find("[data-node=setMeal-content-groups]"))
            }), t.find("[data-node=setMeal-content-dishes]").on("click", "[data-node=mutipletitle]", "." + mulItemClass, function(e) {
                var t = $(e.currentTarget);
                t.parents(dishItemClass).toggleClass("selected")
            }), t.find("[data-node=setMeal-content-dishes]").on("click", "[data-node=sizeTable] .s-item", "." + mulItemClass, function(t) {
                var a = $(t.currentTarget);
                a.hasClass("sec") || (a.parents("tr").find(".s-item").removeClass("sec"), a.addClass("sec"), e.selectAttr(a), EventCenter.trigger("selectAttr"))
            }), t.find("[data-node=setMeal-bottom]").on("click", "[data-node]", function(t) {
                var a = $(t.currentTarget);
                e.handleBottomeClick(a)
            }), t.find("[data-node=setMeal-content-dishes]").on("click", "[data-node=addIcon]", function(t) {
                var a = $(t.currentTarget),
                    n = a.parents(dishListClass);
                n.hasClass("enough") ? GlobalTips.tip("已到达可选菜品上限") : a.hasClass("disable") && GlobalTips.tip("多规格菜品需要先选择规格"), e.addIconClick(a)
            }), t.find("[data-node=setMeal-content-dishes]").on("click", "[data-node=minusIcon]", function(t) {
                var a = $(t.currentTarget);
                e.minusIconClick(a)
            }), EventCenter.on("selectAttr", function() {
                e.refreshSelectMsg(), e.refreshBottom()
            }), EventCenter.on("addDish", function() {
                e.onAddDish()
            }), EventCenter.on("minusDish", function() {
                e.onMinusDish()
            }), EventCenter.on("switchGrps", function() {
                e.refreshSelectMsg()
            })
        },
        switchGrps: function(e, t) {
            var a = this,
                n = a.opt.$el,
                s = a.opt.data;
            t.find(grpItemClass).removeClass("select"), e.addClass("select"), a.opt.curGrp = e.data("index");
            var i = s.groups[a.opt.curGrp];
            n.find("[data-node=setMeal-content-dishes]").html(setMealDishTmpl({
                data: i,
                selected: a.opt.selectData[i.dish_group_id]
            })), a.setArrowPos(e), EventCenter.trigger("selectAttr")
        },
        setArrowPos: function(e) {
            var t = this,
                a = t.opt.$el,
                n = e.position(),
                s = a.find("[data-node=groupArrow]");
            s.css({
                left: n.left + e.width() / 2 - s.width() / 2 + "px"
            })
        },
        selectAttr: function(e) {
            var t = this,
                a = t.opt.data.groups[t.opt.curGrp],
                n = a.dish_group_id,
                s = t.opt.selectData[n] || {
                    total: {
                        count: 0
                    }
                },
                i = e.parents("[data-node=sizeTable]").find("[data-key]"),
                d = e.parents("[data-node=sizeTable]").find(".sec"),
                r = e.parents(dishItemClass).find("[data-node=dishCost]");
            if (d.length < i.length) return e.parents("[data-node=sizeTable]").find("[data-node=addIcon]").addClass("disable"), !1;
            e.parents("[data-node=sizeTable]").find("[data-node=addIcon]").removeClass("disable");
            var l = t.getItemInfo(e),
                o = l.id,
                p = [],
                u = [];
            s[o] = t.getItemSelectData(l, s[o]);
            for (var m = 0, _ = i.length; _ > m; m++)"1" == $(i[m]).data("maink") && (s[o].realId = $(i[m]).find(".sec").data("id") + "", s[o].realPrice = $(i[m]).find(".sec").data("price"), r.text("￥" + $(i[m]).find(".sec").data("price"))), p.push($(i[m]).find(".sec").data("id") + ""), u.push($(i[m]).find(".sec").data("name"));
            return s[o].features = p, s[o].featueNames = u, "addIcon" == e.data("node") ? s[o].count++ : "minusIcon" == e.data("node") && s[o].count--, t.opt.selectData[n] = s, !0
        },
        onAddDish: function() {
            var e = this;
            e.refreshTopTip(), e.refreshSelectMsg(), e.refreshBottom()
        },
        onMinusDish: function() {
            var e = this;
            e.refreshTopTip(), e.refreshSelectMsg(), e.refreshBottom()
        },
        refreshSelectMsg: function() {
            var e = this,
                t = e.opt.selectData,
                a = e.opt.data.groups,
                n = a[e.opt.curGrp],
                s = t[n.dish_group_id];
            s && s.total && parseInt(s.total.count) >= parseInt(n.max_num) ? e.opt.$el.find(dishListClass).addClass("enough") : e.opt.$el.find(dishListClass).removeClass("enough");
            var i = "&nbsp;";
            for (var d in s)"total" != d && s[d].count && (i += s[d].dname, s[d].featueNames && s[d].featueNames.length && (i += "_" + s[d].featueNames.join("_")), i += "*" + s[d].count + "、");
            e.opt.$el.find("[ data-node=selectmsg]").html(i)
        },
        refreshTopTip: function() {
            for (var e = this, t = e.opt.selectData, a = e.opt.data, n = 0, s = a.groups.length; s > n; n++) {
                var i = $("[data-grps-id=" + a.groups[n].dish_group_id + "]").find(".top-tip");
                if (t[a.groups[n].dish_group_id]) {
                    var d = t[a.groups[n].dish_group_id].total.count;
                    d && a.groups[n].min_num <= d && d <= a.groups[n].max_num ? i.addClass("ready").text(t[a.groups[n].dish_group_id].total.count).show() : d && t[a.groups[n].dish_group_id].total.count >= 0 ? i.removeClass("ready").text(t[a.groups[n].dish_group_id].total.count).show() : i.hide()
                }
            }
        },
        refreshBottom: function() {
            for (var e = this, t = e.opt.$el, a = t.find("[data-node=bottomprice]"), n = t.find("[data-node=selectouter]"), s = t.find("[data-node=submitBtn]"), i = e.opt.selectData, d = e.opt.data.groups, r = [], l = 0, o = 0, p = d.length; p > o; o++) parseInt(d[o].min_num) && r.push(i[d[o].dish_group_id] && i[d[o].dish_group_id].total.count >= d[o].min_num ? 1 : 0), 1 === Math.min.apply(null, r) ? (n.removeClass("disable"), s.removeClass("disable")) : (n.addClass("disable"), s.addClass("disable"));
            if (1 !== parseInt(a.data("type"))) {
                for (var u in i) {
                    var m = i[u];
                    if (m.total.count) for (var _ in m)"total" !== _ && m[_].count && (l += parseFloat(m[_].realPrice || m[_].price) * parseInt(m[_].count))
                }
                a.html("￥" + l.toFixed(2)), e.opt.selectBasic.price = l
            } else e.opt.selectBasic.price = e.opt.data.basics.itemPrice
        },
        refreshSelectArea: function(e, t, a) {
            var n = e.parent();
            t[a.id].count > 0 ? (n.find("[data-node=minusIcon]").removeClass("v-hide"), n.find(countItemCls).text(t[a.id].count).removeClass("v-hide")) : (e.parent().find(countItemCls).text(t[a.id].count).addClass("v-hide"), n.find("[data-node=minusIcon]").addClass("v-hide"))
        },
        addIconClick: function(e) {
            var t = this,
                a = t.opt.data.groups[t.opt.curGrp],
                n = parseInt(a.max_num),
                s = a.dish_group_id,
                i = t.opt.selectData[s] || {
                    total: {
                        count: 0
                    }
                },
                d = t.getItemInfo(e);
            if (i[d.id] = t.getItemSelectData(d, i[d.id]), e.parents(dishItemClass).hasClass(mulItemClass) && i.total.count < n) t.selectAttr(e) && i.total.count++;
            else {
                if (!(i.total.count < n)) return;
                i.total.count++, i[d.id].count++
            }
            t.refreshSelectArea(e, i, d), t.opt.selectData[s] = i, EventCenter.trigger("addDish")
        },
        getItemSelectData: function(e, t) {
            return t = t || {
                count: 0,
                dname: e.name,
                price: e.price
            }
        },
        getItemInfo: function(e) {
            var t = e.parents(dishItemClass),
                a = "";
            a = t.data("id") + "";
            var n = t.data("name"),
                s = t.data("price");
            return {
                id: a,
                name: n,
                price: s,
                count: 0
            }
        },
        minusIconClick: function(e) {
            var t = this,
                a = t.opt.data.groups[t.opt.curGrp],
                n = (parseInt(a.min_num), a.dish_group_id),
                s = t.opt.selectData[n] || {
                    total: {
                        count: 0
                    }
                },
                i = t.getItemInfo(e);
            if (s[i.id] = t.getItemSelectData(i, s[i.id]), e.parents(dishItemClass).hasClass(mulItemClass) && s[i.id].count >= 1) t.selectAttr(e) && s.total.count--;
            else {
                if (s[i.id].count <= 0) return void(s[i.id].count = 0);
                s.total.count--, s[i.id].count--
            }
            t.refreshSelectArea(e, s, i), t.opt.selectData[n] = s, EventCenter.trigger("minusDish")
        },
        handleBottomeClick: function(e) {
            var t = this,
                a = t.opt.data.basics,
                n = e.data("node"),
                s = t.opt.$el.find("[data-node=selectCount]"),
                i = parseInt(s.html()) || 0;
            "addtocart" === n ? i && i < a.itemStock ? s.html(++i) : i || s.html(a.minOrderNumber) : "minusfrcart" === n && s.html(i <= a.minOrderNumber ? 0 : --i), t.opt.data.basics.itemCount = i, "submitBtn" === n && !e.hasClass("disable") && t.submitSetMeal()
        },
        adjustDataStructure: function(e) {
            e.orignItemId = e.itemId, e.grpsInfo.basic.id = e.itemId, e.itemPrice = e.grpsInfo.basic.price, e.type = "append";
            var t = [],
                a = [],
                n = [];
            for (var s in e.grpsInfo.data) {
                var i = e.grpsInfo.data[s];
                t.push(s + "_p" + i.total.count);
                for (var d in i)"total" !== d && (a.push(d + "_p" + i[d].count), i[d].features && i[d].features.length && n.concat(i[d].features))
            }
            e.itemId = t.sort().join("__") + "___" + a.sort().join("__") + "___" + n.sort().join("__")
        },
        saveGrpsData: function(e) {
            e.grpsInfo && localStore.set("s" + e.itemId + "s", e.grpsInfo)
        },
        submitSetMeal: function() {
            var e = this,
                t = {};
            t = $.extend(t, e.opt.data.basics), t.grpsInfo = {
                basic: e.opt.selectBasic,
                data: e.opt.selectData
            }, e.adjustDataStructure(t), e.saveGrpsData(t), e.opt.onSubmitBtn(t)
        }
    }), module.exports = setMeal
});;
define("waimai:widget/common/verifyphone/verifyphone.js", function(n, e, o) {
    function t(n) {
        var e = (f(n).prop("result.first_order_status"), ""),
            o = "";
        return e = l("wm_succbind_tpl", {
            desc: o,
            url: window.location.href
        })
    }
    function i(n) {
        var e = t(n);
        m.disableKeyEvent(), d = new m({
            html: e
        }), d.show({
            fade: !0
        }), setTimeout(function() {
            window.location.href = window.location.href
        }, 2e3)
    }
    function r() {
        function n(n) {
            c.html(n), setTimeout(function() {
                c.html("")
            }, 3e3)
        }
        function e() {
            var n = t.val(),
                e = new RegExp("^\\d{11}$");
            return n && e.test(n) ? n : (t.next(".error-input").removeClass("v-hide"), !1)
        }
        var o = $("#common_verifyphone"),
            t = o.find(".verify-phone"),
            r = o.find(".verify-code"),
            a = o.find(".verify-btn"),
            c = o.find(".error-msg");
        o.find(".verify-btn").on("click", function() {
            var o = e();
            a.hasClass("btn-disable") || o !== !1 && $.ajax({
                url: "/waimai?qt=sendphonecode",
                data: {
                    mobile: o
                },
                dataType: "json",
                success: function(e) {
                    var o = 60;
                    return 0 != e.error_no ? void n(e.error_msg) : void
                    function() {
                        0 >= o ? a.removeClass("btn-disable").html("发送动态码") : (a.addClass("btn-disable").html("重新发送" + o--), setTimeout(arguments.callee, 1e3))
                    }()
                }
            })
        }), o.find(".commit-btn").on("click", function() {
            var o = r.val(),
                t = e();
            if (t !== !1) return o ? void $.ajax({
                url: "/waimai?qt=verifyphonecode",
                data: {
                    mobile: t,
                    code: o,
                    from: u
                },
                dataType: "json",
                success: function(e) {
                    return 0 != e.error_no ? void n(e.error_msg) : void i(e)
                }
            }) : void r.parent().find(".error-input").removeClass("v-hide")
        }), t.focus(function() {
            $(this).next(".error-input").addClass("v-hide")
        }), r.focus(function() {
            $(this).parent().find(".error-input").addClass("v-hide")
        })
    }
    function a(n) {
        var e = n && n.cancel_text ? n.cancel_text : "取消",
            o = l("wm_bindphone_tpl", {
                cancel_text: e
            });
        return o
    }
    function c() {
        if (passport && passport.pop) {
            var n = $("#bindstoken").val(),
                e = passport.pop.ArmorWidget("bindmobile", {
                    token: n,
                    title: "绑定手机",
                    msg: "",
                    auth_title: "绑定手机",
                    auth_msg: "为了保证您的帐号安全，绑定手机前请先进行安全验证",
                    onSubmitSuccess: function(n, e) {
                        window.location.reload()
                    },
                    onSubmitFail: function() {},
                    onHide: function() {}
                });
            e.show()
        }
    }
    function s(n) {
        n && n.from && (u = n.from)
    }
    var d, u, l = n("wcommon:static/util/Template.js"),
        f = (n("jsmod/ui/pagination"), n("wcommon:static/util/DataHelper.js")),
        m = (n("wcommon:static/util.js"), n("jsmod/ui/dialog"));
    o.exports = {
        bindPhone: function(n) {
            var e = function(n) {
                    n.hide({
                        fade: !0
                    })
                },
                o = a(n),
                t = n && n.cancelCb ? n.cancelCb : e,
                i = new m({
                    html: o
                });
            i.getElement().delegate("#common_verifyphone .cancel-btn", "click", function() {
                t(i)
            }), i.show({
                fade: !0
            }), setTimeout(function() {
                $(".placeholder-con").placeholder()
            }, 0), s(n), r()
        },
        bindPhoneWidget: function() {
            c()
        }
    }
});;
define("waimai:widget/common/ui/search/search.js", function(require, exports, module) {
    require("waimai:static/utils/statis.js");
    var CookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        AddressDataCenter = require("waimai:static/utils/AddressDataCenter.js"),
        resultTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="search-title">    <div class="search-desc">请确定您的地址</div></div><div class="search-list s-list">    <ul>        ');
                    for (var i = 0, len = data.length; len > i; i++) {
                        var item = data[i];
                        _template_fun_array.push('            <li data-uid = "', "undefined" == typeof item.uid ? "" : baidu.template._encodeHTML(item.uid), '" data-link = "/waimai?qt=shoplist&lat=', "undefined" == typeof item.latitude ? "" : baidu.template._encodeHTML(item.latitude), "&lng=", "undefined" == typeof item.longitude ? "" : baidu.template._encodeHTML(item.longitude), "&address=", "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), "&city_id=", "undefined" == typeof city_id ? "" : baidu.template._encodeHTML(city_id), '" data-msg = "', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), "$", "undefined" == typeof(item.address ? item.address : "") ? "" : baidu.template._encodeHTML(item.address ? item.address : ""), "$", "undefined" == typeof item.latitude ? "" : baidu.template._encodeHTML(item.latitude), "$", "undefined" == typeof item.longitude ? "" : baidu.template._encodeHTML(item.longitude), "$", "undefined" == typeof item.shopnum ? "" : baidu.template._encodeHTML(item.shopnum), "$", "undefined" == typeof city_id ? "" : baidu.template._encodeHTML(city_id), '" data-name="', "undefined" == typeof decodeURIComponent(item.name) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.name)), '">                <div class="addr addr-icon"></div>                <div class="addr addr-content">                    <p class="addr-name">', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '</p>                    <p class="addr-desc">', "undefined" == typeof(item.address ? item.address : "") ? "" : baidu.template._encodeHTML(item.address ? item.address : ""), "</p>                    "), item.shopnum && 0 !== parseInt(item.shopnum, 10) ? _template_fun_array.push('                        <p class="addr-shop-num">', "undefined" == typeof item.shopnum ? "" : baidu.template._encodeHTML(item.shopnum), "家餐厅</p>                    ") : _template_fun_array.push('                        <p class="addr-shop-num addr-no-open">暂无开通</p>                    '), _template_fun_array.push("                </div>            </li>        ")
                    }
                    _template_fun_array.push("    </ul></div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        historyTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="s-list search-list">    <ul>        ');
                    for (var i = 0, len = data.length; len > i; i++) {
                        var item = data[i];
                        _template_fun_array.push('        <li data-link = "https://waimai.baidu.com/waimai?qt=shoplist&lat=', "undefined" == typeof item.lat ? "" : baidu.template._encodeHTML(item.lat), "&lng=", "undefined" == typeof item.lng ? "" : baidu.template._encodeHTML(item.lng), "&address=", "undefined" == typeof decodeURIComponent(item.name) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.name)), "&city_id=", "undefined" == typeof decodeURIComponent(item.city_id) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.city_id)), "&uid=", "undefined" == typeof decodeURIComponent(item.uid) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.uid)), '" data-name="', "undefined" == typeof decodeURIComponent(item.name) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.name)), '">                <div class="addr his-icon"></div>                <div class="addr addr-content">                    <p class="addr-name">', "undefined" == typeof decodeURIComponent(item.name) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.name)), '</p>                    <p class="addr-desc">', "undefined" == typeof decodeURIComponent(item.address) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.address)), "</p>                    "), item.shopnum && 0 !== parseInt(item.shopnum, 10) ? _template_fun_array.push('                        <p class="addr-shop-num">', "undefined" == typeof item.shopnum ? "" : baidu.template._encodeHTML(item.shopnum), "家外卖餐厅</p>                    ") : _template_fun_array.push('                        <p class="addr-shop-num addr-no-open">暂无开通</p>                    '), _template_fun_array.push("                </div>            </li>        ")
                    }
                    _template_fun_array.push('    </ul></div><div class="search-history-clear">    <a class="clear-btn">清空历史记录</a></div>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        sugTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="search-list s-list">    <ul>        ');
                    for (var i = 0, len = data.length; len > i; i++) {
                        var item = data[i];
                        _template_fun_array.push('            <li data-name="', "undefined" == typeof item.name3 ? "" : baidu.template._encodeHTML(item.name3), '" data-lat="', "undefined" == typeof item.lat ? "" : baidu.template._encodeHTML(item.lat), '" data-lng="', "undefined" == typeof item.lng ? "" : baidu.template._encodeHTML(item.lng), '">                <div class="addr addr-icon"></div>                <div class="addr addr-content">                    <p class="addr-name">', "undefined" == typeof item.name3 ? "" : baidu.template._encodeHTML(item.name3), '</p>                    <p class="addr-desc">', "undefined" == typeof item.name1 ? "" : baidu.template._encodeHTML(item.name1), "", "undefined" == typeof item.name2 ? "" : baidu.template._encodeHTML(item.name2), "", "undefined" == typeof item.name3 ? "" : baidu.template._encodeHTML(item.name3), "</p>                </div>            </li>        ")
                    }
                    _template_fun_array.push("    </ul></div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        emptyTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push("<p>此地点附近暂时没有外卖餐厅，努力覆盖中...</p>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        _historyHtml, Search = function(e, t) {
            var a = function() {
                    function e(e) {
                        $.extend(C, e)
                    }
                    function t() {
                        C.$resultEl.addClass("mod-search-hide mod-search-container")
                    }
                    function a() {
                        C.$resultEl.addClass("mod-search-hide")
                    }
                    function n() {
                        for (var e = C.$resultEl.find(".s-list li"), t = C.$resultEl.offset().top, a = 0, n = e.length; n > a; a++) {
                            var i = e.eq(a).offset().top,
                                d = e.eq(a).outerHeight(!0),
                                l = i - d - t;
                            e.eq(a).attr("data-top", l)
                        }
                    }
                    function i() {
                        var e;
                        C.$resultEl.empty().removeClass("mod-search-result mod-search-sug mod-search-empty").addClass("mod-search-history"), e = c(), e ? (C.$resultEl.removeClass("mod-search-hide").append(e).show(), n()) : C.$resultEl.addClass("mod-search-hide")
                    }
                    function d() {
                        C.$resultEl.hide().empty().removeClass("mod-search-history").addClass("mod-search-hide")
                    }
                    function l(e) {
                        C.$resultEl.empty().removeClass("mod-search-hide mod-search-result mod-search-history mod-search-empty").addClass("mod-search-sug").append(e).show(), n(), m()
                    }
                    function s(e) {
                        C.$resultEl.empty(), C.$resultEl.removeClass("mod-search-hide mod-search-sug mod-search-history mod-search-empty"), C.$resultEl.addClass("mod-search-result"), C.$resultEl.append(e).show(), n(), m()
                    }
                    function r() {
                        if (C.NOListLiJump) C.$hiddenSearchPOI.val("0-0"), a();
                        else {
                            var e = emptyTmpl();
                            C.$resultEl.empty(), C.$resultEl.removeClass("mod-search-hide mod-search-sug mod-search-history mod-search-result"), C.$resultEl.addClass("mod-search-empty"), C.$resultEl.append(e).show(), m()
                        }
                    }
                    function o() {
                        $(".s-loading").removeClass("mod-search-hide")
                    }
                    function m() {
                        $(".s-loading").addClass("mod-search-hide")
                    }
                    function u(e) {
                        e.preventDefault(), e.stopPropagation()
                    }
                    function c() {
                        if (_historyHtml) return _historyHtml;
                        var e = AddressDataCenter.getAll() || [];
                        return e && e.length ? _historyHtml = historyTmpl({
                            data: e
                        }) : null
                    }
                    function p(e) {
                        var t = CookieDataCenter.getCity().code,
                            e = e ? e : C.$searchConEl.val(),
                            a = "";
                        $.ajax({
                            url: "/waimai?qt=poisug",
                            type: "POST",
                            dataType: "json",
                            data: {
                                cid: t,
                                type: 0,
                                wd: e,
                                from: "pc"
                            },
                            success: function(t) {
                                var n = t.s || [];
                                if (n.length > 0) {
                                    if (C.NOListLiJump) {
                                        a = "";
                                        var i = [];
                                        $.each(n, function(t, a) {
                                            {
                                                var n = a.split("$"),
                                                    d = n[3],
                                                    l = n[5].split(",")[0],
                                                    s = n[5].split(",")[1];
                                                d.replace(e, "<b>" + e + "</b>")
                                            }
                                            i.push({
                                                name1: n[0],
                                                name2: n[1],
                                                name3: d,
                                                lat: l,
                                                lng: s
                                            })
                                        }), a = sugTmpl({
                                            data: i
                                        })
                                    } else a = "<div class='search-list s-list'><ul>", $.each(n, function(t, n) {
                                        var i = n.split("$"),
                                            d = i[3],
                                            l = i[5].split(",")[0],
                                            s = i[5].split(",")[1],
                                            r = "<i></i><span>" + d.replace(e, "<b>" + e + "</b>") + "</span>";
                                        a += "<li data-name='" + d + "' data-lat='" + l + "' data-lng='" + s + "'>" + r + "</li>"
                                    }), a += "</ul></div>";
                                    l(a)
                                }
                            }
                        })
                    }
                    function _(e, t, n) {
                        o(), !t && (t = ""), !n && (n = "");
                        var e = e ? e : C.$searchConEl.val();
                        addNStat({
                            da_src: "findBk.searchBtn",
                            da_act: "click",
                            da_trd: "waimai"
                        });
                        var i = "/waimai?qt=poisearch&from=pc&ie=utf-8&sug=0&tn=B_NORMAL_MAP&oue=1&res=1&c=" + CookieDataCenter.getCity().code;
                        $.ajax({
                            type: "GET",
                            url: i,
                            dataType: "json",
                            data: {
                                lat: t,
                                lng: n,
                                wd: e,
                                _t: +new Date
                            },
                            timeout: 1e4,
                            success: function(e) {
                                if (0 == e.error_no) if ("" == e.result.url) if (C.NOListLiJump && 1 == e.result.content.length) {
                                    var t = e.result.content[0].name || "",
                                        n = e.result.content[0].latitude || "0",
                                        i = e.result.content[0].longitude || "0";
                                    C.$searchConEl.val(t), C.$hiddenSearchPOI.val(i + "-" + n), C.$hiddenSearchPOI.attr("poi_id", e.result.content[0].uid), a()
                                } else {
                                    var d = resultTmpl({
                                        data: e.result.content,
                                        city_id: e.result.city_id
                                    });
                                    s(d)
                                } else {
                                    var l = e.result.content[0] || {
                                        shopnum: 0
                                    };
                                    if (l.shopnum) {
                                        var o = {};
                                        o.name = l.name, o.address = l.address, o.lat = l.latitude, o.lng = l.longitude, o.shopnum = l.shopnum, o.city_id = e.result.city_id, o.uid = l.uid, AddressDataCenter.add(o), C.NOListLiJump ? (C.$searchConEl.val(o.name), C.$hiddenSearchPOI.val(o.lng + "-" + o.lat), C.$hiddenSearchPOI.attr("poi_id", l.uid), a()) : y(e.result.url)
                                    } else r()
                                } else r()
                            },
                            error: function() {
                                r()
                            }
                        })
                    }
                    function f() {
                        var e = C.$resultEl.find(".s-list");
                        if (e.length > 0) {
                            var t = e.find("li.s-on");
                            if (t.length > 0) return void t.click()
                        }
                        C.$searchConEl.val() && _(C.$searchConEl.val(), "", "")
                    }
                    function h() {
                        var e, t = C.$resultEl.find(".s-list li");
                        if (t.length > 0) {
                            if (C.$resultEl.hasClass("mod-search-result")) {
                                if (t.size() < 5) return
                            } else if (t.size() < 7) return;
                            e = C.$resultEl.find(".s-list li.s-on").attr("data-top"), C.$resultEl.scrollTop(e)
                        }
                    }
                    function v(e) {
                        var t = C.$searchConEl.filter("input"),
                            n = C.$resultEl,
                            l = "show.history";
                        C.showHistoryTrg && (l = C.showHistoryTrg);
                        var s = "hide.history";
                        C.hideHistoryTrg && (s = C.hideHistoryTrg), $(e).on(l, function() {
                            setTimeout(function() {
                                i()
                            }, 0)
                        }), $(e).on(s, function() {
                            setTimeout(function() {
                                d()
                            }, 0)
                        }), n.on("blur", function() {
                            this.hide()
                        }), t.on("click", function(e) {
                            var a = t.val(),
                                n = CookieDataCenter.getCity();
                            0 == a.length ? n.hasaoi || i() : p(a), e.stopPropagation()
                        }), t.on("keydown", function(e) {
                            if (window.NOBLUR = "NOPE", C.$hiddenSearchPOI && C.$hiddenSearchPOI.val(""), 13 == e.which) return void f();
                            if (38 != e.which) if (40 != e.which) {
                                var a = CookieDataCenter.getCity();
                                setTimeout(function() {
                                    var e = t.val();
                                    0 == e.length ? a.hasaoi || i() : p(e)
                                }, 0)
                            } else {
                                var d = n.find(".s-list");
                                if (d.length > 0) {
                                    var l = d.find("li.s-on");
                                    0 == l.length || l.index() == d.find("li").length - 1 ? (d.find("li:first").addClass("s-on"), l.removeClass("s-on")) : (l.next("li").addClass("s-on"), l.removeClass("s-on"));
                                    var s = d.find("li.s-on"),
                                        r = s.attr("data-name");
                                    h(), r && t.val(r)
                                }
                            } else {
                                var d = n.find(".s-list");
                                if (d.length > 0) {
                                    var l = d.find("li.s-on");
                                    0 == l.length || 0 == l.index() ? (d.find("li:last").addClass("s-on"), l.removeClass("s-on")) : (l.prev("li").addClass("s-on"), l.removeClass("s-on"));
                                    var s = d.find("li.s-on"),
                                        r = s.attr("data-name");
                                    h(), r && t.val(r)
                                }
                            }
                        }), n.on("click", ".s-list li", function(e) {
                            var t = $(e.currentTarget);
                            if (u(e), n.hasClass("mod-search-sug")) {
                                var a = t.data("name"),
                                    i = t.data("lat"),
                                    l = t.data("lng");
                                return a && C.$searchConEl.val(a), void _(a, i, l)
                            }
                            var s = {},
                                r = $(this).attr("data-msg"),
                                o = $(this).attr("data-link");
                            if (n.hasClass("mod-search-result")) {
                                if (C.NOListLiJump);
                                else if ($(this).find(".addr-shop-num").hasClass("addr-no-open")) return;
                                var m = r.split("$");
                                s.name = m[0], s.address = m[1], s.lat = m[2], s.lng = m[3], s.shopnum = m[4], s.city_id = m[5], AddressDataCenter.add(s)
                            }
                            if (C.NOListLiJump) {
                                for (var m = o.split("&"), c = [], p = 0; p < m.length; p++) {
                                    var f = m[p].split("=")[0],
                                        h = m[p].split("=")[1];
                                    c[f] = h
                                }
                                s.name = c.address, s.lat = c.lat, s.lng = c.lng, s.city_id = c.city_id, s.uid = c.uid, AddressDataCenter.add(s), C.$searchConEl.val(c.address), C.$hiddenSearchPOI.val(s.lng + "-" + s.lat), C.$hiddenSearchPOI.attr("poi_id", s.uid), d()
                            } else y(o)
                        }), n.on("mousedown", ".s-list li", function() {
                            window.NOBLUR = "YES"
                        }), n.on("click", ".clear-btn", function(e) {
                            u(e), AddressDataCenter.clearAll(), _historyHtml = null, a(), n.empty()
                        }), $(document).on("click", a), n.hover(function() {
                            $(document).unbind("click", a)
                        }, function() {
                            $(document).on("click", a)
                        }), t.hover(function() {
                            $(document).unbind("click", a)
                        }, function() {
                            $(document).on("click", a)
                        })
                    }
                    function y(e) {
                        function t(e, t) {
                            var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                                n = t.match(a);
                            return null != n ? unescape(n[2]) : null
                        }
                        var a = /(\/shopinterface)|(\/activity)/;
                        if (a.test(window.location.pathname)) {
                            var n = t("lng", e),
                                i = t("lat", e),
                                d = t("address", e);
                            CookieDataCenter.setAddr({
                                lng: n,
                                lat: i,
                                address: d
                            }), window.location.reload()
                        } else location.href = e
                    }
                    var C = {
                        $resultEl: null,
                        $searchConEl: null,
                        $searchBtn: null,
                        showHistoryTrg: null,
                        hideHistoryTrg: null,
                        NOListLiJump: null,
                        $hiddenSearchPOI: null
                    };
                    return {
                        initOption: e,
                        initHtml: t,
                        bindEvent: v
                    }
                }();
            a.initOption(t), a.initHtml(), a.bindEvent(e), a = null
        };
    module.exports = {
        init: function(e) {
            new Search(this, e)
        }
    }
});;
define("waimai:widget/common/ui/address/address.js", function(require, exports, module) {
    function Address(e) {
        this.opt = $.extend({}, _opt, e), this.bindEvent(), this.initList()
    }
    var Dialog = require("jsmod/ui/dialog"),
        listTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push("");
                    for (var i = 0, len = data.length; len > i; i++) {
                        var item = data[i];
                        _template_fun_array.push('<li class="addr-item" data-id="', "undefined" == typeof item.id ? "" : baidu.template._encodeHTML(item.id), '" data-sugaddress="', "undefined" == typeof item.sug_address ? "" : baidu.template._encodeHTML(item.sug_address), '" data-msg="', "undefined" == typeof item.user_name ? "" : baidu.template._encodeHTML(item.user_name), "$", "undefined" == typeof item.gender ? "" : baidu.template._encodeHTML(item.gender), "$", "undefined" == typeof item.user_phone ? "" : baidu.template._encodeHTML(item.user_phone), "$", "undefined" == typeof item.sug_address ? "" : baidu.template._encodeHTML(item.sug_address), "$", "undefined" == typeof item.detail_address ? "" : baidu.template._encodeHTML(item.detail_address), "$", "undefined" == typeof item.location ? "" : baidu.template._encodeHTML(item.location), "$", "undefined" == typeof item.uid ? "" : baidu.template._encodeHTML(item.uid), '">    <div class="addr-title">        <div class="addr-user">            <span class="name">', "undefined" == typeof item.user_name ? "" : baidu.template._encodeHTML(item.user_name), '</span>            <span class="sex">', "undefined" == typeof(2 == item.gender ? "女士" : "先生") ? "" : baidu.template._encodeHTML(2 == item.gender ? "女士" : "先生"), '</span>        </div>        <div class="addr-action">            <a class="addr-edit">编辑</a>            <a class="addr-remove">删除</a>        </div>    </div>    <div class="addr-con">        <p class="phone">', "undefined" == typeof item.user_phone ? "" : baidu.template._encodeHTML(item.user_phone), '</p>        <p class="addr-desc">', "undefined" == typeof item.address ? "" : baidu.template._encodeHTML(item.address), '</p>    </div>    <span class="select-ico"></span></li>')
                    }
                    _template_fun_array.push(""), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        detailTeml = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="addr-detail new-address-section">    <form>        <table class="addr-table" border="0">            <tr>                <td valign="top"><span class="l-label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span></td>                <td>                    <input type="hidden" value="', "undefined" == typeof data.id ? "" : baidu.template._encodeHTML(data.id), '" name="adrr_id">                    <div class="form-group">                        <div class="input-control">                            <input type="text" name="user_name" placeholder="您的姓名" value="', "undefined" == typeof data.user_name ? "" : baidu.template._encodeHTML(data.user_name), '" class="placeholder-con">                            <span class="star">*</span>                        </div>                        <div class="error-msg v-hide">请填写您的姓名，不能超过8个字符</div>                    </div>                    <div class="form-group">                        <div class="input-control">                                                        <input type="hidden" name="gender" value="', "undefined" == typeof(data.gender ? data.gender : 1) ? "" : baidu.template._encodeHTML(data.gender ? data.gender : 1), '">                            <div class="s-gender '), (1 === parseInt(data.gender, 10) || isNaN(parseInt(data.gender, 10))) && _template_fun_array.push(" selected "), _template_fun_array.push('" data-gender="1"  >                                <i></i><span>先生</span>                            </div>                            <div class="s-gender '), 2 == data.gender && _template_fun_array.push(" selected "), _template_fun_array.push('" data-gender="2">                                <i></i><span>女士</span>                            </div>                        </div>                        <div class="error-msg v-hide">请选择您的性别</div>                    </div>                </td>            </tr>            <tr>                <td valign="top"><span class="l-label">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</span></td>                <td>                    <div class="form-group">                        <div class="input-control">                            <input type="text" name="user_phone" placeholder="11位手机号" value="', "undefined" == typeof data.user_phone ? "" : baidu.template._encodeHTML(data.user_phone), '" class="placeholder-con">                            <span class="star">*</span>                        </div>                        <div class="error-msg v-hide">请填写正确的手机号</div>                    </div>                </td>            </tr>            <tr>                <td valign="top"><span class="l-label">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span></td>                <td>                    <div class="form-group">                        <div class="input-control poi_address">                            <i class="addr-icon-input"></i>                            <input type="text" name="sug_address" placeholder="请输入小区、大厦或学校" value="', "undefined" == typeof data.sug_address ? "" : baidu.template._encodeHTML(data.sug_address), '" class="placeholder-con poi_address">                            <span class="star">*</span>                                                        <input type="hidden" name="hide_sug_address" value="', "undefined" == typeof data.lng ? "" : baidu.template._encodeHTML(data.lng), "-", "undefined" == typeof data.lat ? "" : baidu.template._encodeHTML(data.lat), '" class="hide_poi_address" poi_id="', "undefined" == typeof data.uid ? "" : baidu.template._encodeHTML(data.uid), '">                        </div>                        <div class="error-msg v-hide">请输入地址并在下拉框中进行选择</div>                        <div class="s-search-container2"></div>                                            </div>                </td>            </tr>            <tr>                <td valign="top"><span class="l-label">详细地址</span></td>                <td>                    <div class="form-group">                        <div class="input-control">                                                        <input type="text" name="detail_address" placeholder="请输入门牌号等详细信息" value="', "undefined" == typeof data.detail_address ? "" : baidu.template._encodeHTML(data.detail_address), '" class="placeholder-con">                        </div>                        <div class="error-msg v-hide">请输入门牌号等详细信息</div>                    </div>                </td>            </tr>        </table>        <div class="form-group form-submit">            <input type="button" class="saveBtn" data-node="saveBtn" value="'), confirmTxt ? _template_fun_array.push("", "undefined" == typeof confirmTxt ? "" : baidu.template._encodeHTML(confirmTxt), "") : _template_fun_array.push("保存"), _template_fun_array.push('">            '), noCancel || _template_fun_array.push('                <input type="button" class="escBtn versa" value="取消">            '), _template_fun_array.push("        </div>    </form></div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        GlobalTips = require("waimai:static/utils/GlobalTips.js"),
        cacheDialog;
    window.NOBLUR = "NOPE";
    var CookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        SearchForSug = require("waimai:widget/common/ui/search/search.js"),
        ADD_AJAX = "/waimai?qt=addressmanage&type=add&display=json",
        UPDATE_AJAX = "/waimai?qt=addressmanage&type=update&display=json",
        REMOVE_AJAX = "/waimai?qt=addressmanage&type=del&display=json",
        SETDEFAULT_AJAX = "/waimai?qt=addressmanage&type=set&display=json",
        _opt = {
            data: [],
            $listEl: null,
            $addBtn: null,
            $detailEl: null,
            listComplete: null,
            itemRemove: null,
            dialogShow: null,
            saveSuccess: null,
            reForm: !0
        };
    $.extend(Address.prototype, {
        checkTotal: function() {
            var e = this.opt.$listEl.find("li.addr-item:not('.addr-add')").length;
            e >= 10 ? this.opt.$addBtn.addClass("hide") : this.opt.$addBtn.removeClass("hide")
        },
        bindEvent: function() {
            var e = this.opt.$listEl,
                t = this;
            e.on("click", ".addr-edit", function(e) {
                var a = {},
                    i = $(this).closest("li").attr("data-msg"),
                    d = i.split("$");
                a.id = $(this).closest("li").attr("data-id"), a.user_name = d[0], a.gender = d[1], a.user_phone = d[2], a.sug_address = d[3], a.detail_address = d[4], a.lng = d[5].split(",")[0], a.lat = d[5].split(",")[1], a.uid = d[6], t.showDetailDialog(a), e.preventDefault(), e.stopPropagation()
            }), e.on("click", ".addr-remove", function(e) {
                t.removeAddress($(this).closest("li")), window.Search.resetMyAddress(), e.preventDefault(), e.stopPropagation()
            }), this.opt.$addBtn && this.opt.$addBtn.on("click", function() {
                var e = t.opt.$listEl.find("li.addr-item:not('.addr-add')").length;
                return e >= 10 ? void t.errorTip("最多只能添加10个送货地址") : void t.showDetailDialog()
            }), $(this).on("listComplete", function() {
                this.opt.listComplete && this.opt.listComplete(t);
                var e = $(".new-address-section");
                this.initSugEvent(e), $(document).on("click", function() {
                    e.find(".s-selected").hide(), e.find(".s-search-container2").hide()
                })
            }), $(this).on("dialogShow", function() {
                this.opt.dialogShow && this.opt.dialogShow(t)
            }), this.opt.$detailEl && (this.opt.$detailEl.on("click", ".saveBtn", function() {
                t.saveAddress()
            }), this.opt.$detailEl.on("click", ".escBtn", function() {
                t.cacheDialog.hide({
                    fade: !0
                })
            })), $(this).on("saveSuccess", function(e, a) {
                this.opt.saveSuccess ? (this.opt.saveSuccess(t, a), window.Search.resetMyAddress()) : (t.cacheDialog.hide({
                    fade: !0
                }), this.successTip("保存成功，正在刷新..."), setTimeout(function() {
                    window.location.reload()
                }, 1500))
            }), $(this).on("itemRemove", function(e, a) {
                window.Search.resetMyAddress(), this.opt.itemRemove && t.opt.itemRemove(t, a)
            })
        },
        initList: function() {
            this.opt.data;
            this.opt.data && this.opt.data.length > 0 && (this.opt.data.uid || (this.opt.data.uid = ""), this.opt.$listEl.prepend(listTmpl({
                data: this.opt.data
            }))), $(this).trigger("listComplete")
        },
        initSugEvent: function(e) {
            var t = this,
                a = e,
                i = a.find(".s-search-container2"),
                d = a.find(".poi_address"),
                s = a.find(".poi_address"),
                n = a.find(".hide_poi_address");
            SearchForSug.init({
                $resultEl: i,
                $searchConEl: d,
                showHistoryTrg: "address.show.history",
                hideHistoryTrg: "address.hide.history",
                NOListLiJump: "NOPE",
                $hiddenSearchPOI: n
            }), s.on("click", function(e) {
                t.showSearch(a), e.stopPropagation()
            }), $(".mod-dialog-wrap").on("click", function(e) {
                i.hide(), e.stopPropagation()
            }), d.on("blur", function() {
                "NOPE" == window.NOBLUR && t.checkForm("SUG")
            })
        },
        showSearch: function(e) {
            var t = e.find(".poi_address");
            t.focus(), $(Search).trigger("hide.history")
        },
        bindGenderEvent: function(e) {
            e.on("click", ".s-gender", function() {
                if (!$(this).hasClass("selected")) {
                    $(".s-gender").removeClass("selected"), $(this).addClass("selected");
                    var e = $(this).attr("data-gender");
                    $(this).parent().find("[name='gender']").val(e)
                }
            })
        },
        showDetailDialog: function(e) {
            var t = e ? e : {},
                a = detailTeml({
                    data: t,
                    noCancel: !1,
                    confirmTxt: "保存"
                });
            this.cacheDialog = new Dialog({
                html: a,
                width: 560,
                height: 400
            }), this.cacheDialog.show({
                fade: !0
            }), this.opt.$detailEl = $(".addr-detail.new-address-section"), $(".placeholder-con").placeholder(), this.bindGenderEvent(this.opt.$detailEl), $(this).trigger("dialogShow"), this.initSugEvent(this.opt.$detailEl)
        },
        removeAddress: function(e) {
            var t = e.attr("data-id");
            try {
                $.ajax({
                    url: REMOVE_AJAX,
                    type: "GET",
                    dataType: "json",
                    data: {
                        id: t,
                        bdstoken: $("#bdstoken").val()
                    },
                    context: this,
                    success: function(a) {
                        if (0 == a.error_no) e.fadeOut(), e.remove(), this.successTip("送餐地址删除成功"), $(this).trigger("itemRemove", t);
                        else {
                            var i = a.error_msg ? a.error_msg : "服务器累了，请稍后重试";
                            this.errorTip(i)
                        }
                    }
                })
            } catch (a) {
                "undefined" != typeof alog && alog("exception.fire", "catch", {
                    msg: a.message || a.description,
                    path: "waimai:widget/common/ui/address/address.js",
                    ln: 258
                })
            }
        },
        saveAddress: function() {
            if (this.errorHide(), this.checkForm()) {
                var e = this.getFormData();
                e.bdstoken = $("#bdstoken").val();
                var t = e.id ? UPDATE_AJAX : ADD_AJAX;
                try {
                    $.ajax({
                        url: t,
                        type: "POST",
                        dataType: "json",
                        data: e,
                        context: this,
                        success: function(t) {
                            if (0 == t.error_no) e.__type = e.id ? "update" : "add", e.id = e.id || t.result.id || "", $(this).trigger("saveSuccess", e);
                            else {
                                var a = t.error_msg ? t.error_msg : "服务器累了，请稍后重试";
                                this.errorTip(a)
                            }
                        }
                    })
                } catch (a) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: a.message || a.description,
                        path: "waimai:widget/common/ui/address/address.js",
                        ln: 286
                    })
                }
            }
        },
        checkForm: function(e) {
            var t = e ? 1 : 0;
            if (t) {
                var a = this.getInputValue("sug_address"),
                    i = this.opt.$detailEl.find(".hide_poi_address").val();
                return (!$.trim(a) || a.length > 40 || !i) && this.errorShow("sug_address"), !1
            }
            var d = this.getInputValue("user_name");
            if (!$.trim(d) || d.length > 8) return this.errorShow("user_name"), !1;
            var s = this.getInputValue("gender");
            if (!s) return this.errorShow("gender"), !1;
            var n = this.getInputValue("user_phone");
            if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(n)) return this.errorShow("user_phone"), !1;
            var a = this.getInputValue("sug_address"),
                i = this.opt.$detailEl.find(".hide_poi_address").val();
            return !$.trim(a) || a.length > 40 || !i ? (this.errorShow("sug_address"), !1) : !0
        },
        getFormData: function() {
            for (var e = this.opt.$detailEl.find(".input-control"), t = {}, a = 0, i = e.length; i > a; a++) {
                var d = e.eq(a),
                    s = d.find("input").length ? d.find("input").attr("name") : d.find("textarea").attr("name");
                t[s] = this.getInputValue(s)
            }
            t.id = this.getInputValue("adrr_id");
            var n = e.find(".hide_poi_address").val(),
                r = e.find(".hide_poi_address").attr("poi_id");
            return r && void 0 != r && "undefined" != r || (r = ""), t.lng = n.split("-")[0] ? n.split("-")[0] : "", t.lat = n.split("-")[1] ? n.split("-")[1] : "", t.location = n, t.poi_id = r, t.address = t.sug_address + " " + t.detail_address, t
        },
        successTip: function(e) {
            GlobalTips.tip(e)
        },
        errorTip: function(e) {
            GlobalTips.tip(e)
        },
        errorShow: function(e) {
            $("[name='" + e + "']").parent().next().removeClass("v-hide"), $("[name='" + e + "']").addClass("caution-line"), this.errorHide(2500, e)
        },
        errorHide: function(e, t) {
            var e = e ? e : 0,
                t = t ? t : "";
            return e ? void setTimeout(function() {
                $(".error-msg").addClass("v-hide"), t && $("[name='" + t + "']").removeClass("caution-line")
            }, e) : void $(".error-msg").addClass("v-hide")
        },
        getInputValue: function(e) {
            var t = this.opt.$detailEl.find("[name='" + e + "']"),
                a = t.get(0).tagName.toLowerCase(),
                i = t.attr("type"),
                d = function() {
                    var t = $(" input[name='" + e + "']").filter(":checked");
                    return t.length ? t.val() : null
                },
                s = function() {
                    var t = [],
                        a = $(" input[name='" + e + "']:checkbox");
                    if (len = a.length, len > 0) for (var i = 0; len > i; i++) a[i].checked && t.push(a[i].value);
                    return t
                },
                n = function() {
                    return t.val()
                };
            switch (a) {
            case "input":
                switch (i) {
                case "radio":
                    return d();
                case "checkbox":
                    return s();
                default:
                    return n()
                }
                break;
            case "select":
                return n();
            case "textarea":
                return n();
            default:
                return null
            }
        },
        addFormHtml: function() {
            return detailTeml({
                data: {},
                noCancel: !0,
                confirmTxt: "保存送餐信息"
            })
        },
        updateOpt: function(e) {
            this.opt = $.extend({}, this.opt, e)
        }
    }), module.exports = Address
});;
define("waimai:widget/common/ui/addressEditDialog/addressEditDialog.js", function(require, exports, module) {
    var Dialog = require("jsmod/ui/dialog"),
        cookie = require("wcommon:static/util/Cookie.js"),
        detailTeml = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="addr-detail new-address-section1">    <form>        <table class="addr-table" border="0">            <tr>                <td valign="top"><span class="l-label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span></td>                <td>                    <input type="hidden" value="', "undefined" == typeof data.id ? "" : baidu.template._encodeHTML(data.id), '" name="adrr_id">                    <div class="form-group">                        <div class="input-control">                            <input type="text" name="user_name" placeholder="您的姓名" value="', "undefined" == typeof data.user_name ? "" : baidu.template._encodeHTML(data.user_name), '" class="placeholder-con">                            <span class="star">*</span>                        </div>                        <div class="error-msg v-hide">请填写您的姓名，不能超过8个字符</div>                    </div>                    <div class="form-group">                        <div class="input-control">                                                        <input type="hidden" name="gender" value="', "undefined" == typeof(data.gender ? data.gender : 1) ? "" : baidu.template._encodeHTML(data.gender ? data.gender : 1), '">                            <div class="s-gender '), (1 === parseInt(data.gender, 10) || isNaN(parseInt(data.gender, 10))) && _template_fun_array.push(" selected "), _template_fun_array.push('" data-gender="1"  >                                <i></i><span>先生</span>                            </div>                            <div class="s-gender '), 2 == data.gender && _template_fun_array.push(" selected "), _template_fun_array.push('" data-gender="2">                                <i></i><span>女士</span>                            </div>                        </div>                        <div class="error-msg v-hide">请选择您的性别</div>                    </div>                </td>            </tr>            <tr>                <td valign="top"><span class="l-label">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</span></td>                <td>                    <div class="form-group">                        <div class="input-control">                            <input type="text" name="user_phone" placeholder="11位手机号" value="', "undefined" == typeof data.user_phone ? "" : baidu.template._encodeHTML(data.user_phone), '" class="placeholder-con">                            <span class="star">*</span>                        </div>                        <div class="error-msg v-hide">请填写正确的手机号</div>                    </div>                </td>            </tr>            <tr>                <td valign="top"><span class="l-label">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span></td>                <td>                    <div class="form-group">                        <div class="input-control poi_address">                            <i class="addr-icon-input"></i>                            <input type="text" name="sug_address" placeholder="请输入小区、大厦或学校" value="', "undefined" == typeof data.sug_address ? "" : baidu.template._encodeHTML(data.sug_address), '" class="placeholder-con poi_address1">                            <span class="star">*</span>                                                        <input type="hidden" name="hide_sug_address" value="', "undefined" == typeof data.lng ? "" : baidu.template._encodeHTML(data.lng), "-", "undefined" == typeof data.lat ? "" : baidu.template._encodeHTML(data.lat), '" class="hide_poi_address1">                        </div>                        <div class="error-msg v-hide">请输入地址并在下拉框中进行选择</div>                        <div class="s-search-container2"></div>                                            </div>                </td>            </tr>            <tr>                <td valign="top"><span class="l-label">详细地址</span></td>                <td>                    <div class="form-group">                        <div class="input-control">                                                        <input type="text" name="detail_address" placeholder="请输入门牌号等详细信息" value="', "undefined" == typeof data.detail_address ? "" : baidu.template._encodeHTML(data.detail_address), '" class="placeholder-con">                        </div>                        <div class="error-msg v-hide">请输入门牌号等详细信息</div>                    </div>                </td>            </tr>        </table>        <div class="form-group form-submit">            <input type="button" class="saveBtn" data-node="saveBtn" value="'), confirmTxt ? _template_fun_array.push("", "undefined" == typeof confirmTxt ? "" : baidu.template._encodeHTML(confirmTxt), "") : _template_fun_array.push("保存"), _template_fun_array.push('">            '), noCancel || _template_fun_array.push('                <input type="button" class="escBtn versa" value="取消">            '), _template_fun_array.push("        </div>    </form></div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        GlobalTips = require("waimai:static/utils/GlobalTips.js"),
        superTip = require("waimai:static/utils/superTip.js"),
        cacheDialog;
    window.NOBLUR = "NOPE";
    var CookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        SearchForSug = require("waimai:widget/common/ui/search/search.js"),
        ADD_AJAX = "/waimai?qt=addressmanage&type=add&display=json",
        UPDATE_AJAX = "/waimai?qt=addressmanage&type=update&display=json",
        AddressEditDialog = function() {};
    $.extend(AddressEditDialog.prototype, {
        opt: {},
        setTipFlag: function() {
            cookie.setRaw("sug_address_input_tip_flag", 1, {
                path: "/"
            })
        },
        getTipFlag: function() {
            return cookie.get("sug_address_input_tip_flag")
        },
        showTip: function() {
            var e = this.getTipFlag();
            this.opt.showSuperTip && 1 != e && (this.setTipFlag(), this.opt.superTip = superTip.create({
                hostSelector: this.cacheDialog.content.find("[name=sug_address]"),
                autoOpen: !0,
                autoClose: !0,
                showTime: 3e3,
                msg: "在这里输入并进行选择",
                borderRadius: 5,
                triangleColor: "#ddcc9c",
                position: {
                    my: "top left",
                    at: "bottom left"
                },
                offset: {
                    x: 15,
                    y: -8
                }
            }, {
                display: "none",
                "background-color": "rgba(254, 248, 222, 0.9)",
                "background-color\x00": "rgb(254, 248, 222)\x00",
                "font-size": "14px",
                color: "#333",
                "line-height": "1.4",
                "z-index": "1000",
                border: "solid 1px #ddcc9c"
            }))
        },
        bindEvent: function() {
            var e = this;
            $(this).off("dialogShow").on("dialogShow", function() {
                e.showTip()
            }), this.opt.$detailEl && this.opt.$detailEl.undelegate(".saveBtn", "click").delegate(".saveBtn", "click", function() {
                e.saveAddress()
            }).undelegate(".escBtn", "click").delegate(".escBtn", "click", function() {
                e.opt.superTip && e.opt.superTip.remove(), e.cacheDialog.hide({
                    fade: !0
                })
            }), $(this).off("saveSuccess").on("saveSuccess", function(t, a) {
                if (this.opt.saveSuccess) this.opt.saveSuccess(e, a);
                else {
                    if (e.cacheDialog.hide({
                        fade: !0
                    }), window.Search.resetMyAddress(), this.opt.isGoSearch) {
                        var i = window.Search.goShopList(a, !0);
                        return window.Search.setDefaultAddress(a.id), void(window.location.href = i)
                    }
                    window.Search.setDefaultAddress(a.id), this.successTip("保存成功，正在刷新..."), setTimeout(function() {
                        window.location.reload()
                    }, 1500)
                }
            })
        },
        initSugEvent: function(e) {
            var t = this,
                a = e,
                i = a.find(".s-search-container2"),
                s = a.find(".poi_address1"),
                d = a.find(".poi_address1"),
                n = a.find(".hide_poi_address1"),
                r = {
                    $resultEl: i,
                    $searchConEl: s,
                    showHistoryTrg: "address.show.history",
                    hideHistoryTrg: "address.hide.history",
                    NOListLiJump: "NOPE",
                    $hiddenSearchPOI: n
                };
            SearchForSug.init(r), d.off("click").on("click", function(e) {
                t.showSearch(a), e.stopPropagation()
            }), $(".mod-dialog-wrap").off("click").on("click", function(e) {
                i.hide(), e.stopPropagation()
            }), s.off("blur").on("focus", function() {
                t.opt.superTip && t.opt.superTip.elem.remove()
            }), s.off("blur").on("blur", function() {
                "NOPE" == window.NOBLUR && t.checkForm("SUG")
            })
        },
        showSearch: function(e) {
            var t = e.find(".poi_address1");
            t.focus(), $(Search).trigger("hide.history")
        },
        bindGenderEvent: function(e) {
            e.on("click", ".s-gender", function() {
                if (!$(this).hasClass("selected")) {
                    $(".s-gender").removeClass("selected"), $(this).addClass("selected");
                    var e = $(this).attr("data-gender");
                    $(this).parent().find("[name='gender']").val(e)
                }
            })
        },
        showDetailDialog: function(e, t, a) {
            var i = e ? e : {},
                s = detailTeml({
                    data: i,
                    noCancel: !1,
                    confirmTxt: "保存"
                });
            this.cacheDialog = new Dialog({
                html: s,
                width: 560,
                height: 400
            }), this.cacheDialog.show({
                fade: !0
            }), this.opt.$detailEl = $(".addr-detail.new-address-section1"), $(".placeholder-con").placeholder(), this.bindGenderEvent(this.opt.$detailEl), this.opt.isGoSearch = t, this.opt.showSuperTip = a, this.bindEvent(), $(this).trigger("dialogShow"), this.initSugEvent(this.opt.$detailEl)
        },
        saveAddress: function() {
            var e = this;
            if (this.errorHide(), this.checkForm()) {
                var t = this.getFormData();
                t.bdstoken = $("#bdstoken")[0].value;
                var a = t.id ? UPDATE_AJAX : ADD_AJAX;
                try {
                    $.ajax({
                        url: a,
                        type: "POST",
                        dataType: "json",
                        data: t,
                        context: this,
                        success: function(a) {
                            if (0 == a.error_no) t.__type = t.id ? "update" : "add", t.id = t.id || a.result.id || "", $(e).trigger("saveSuccess", t);
                            else {
                                var i = a.error_msg ? a.error_msg : "服务器累了，请稍后重试";
                                this.errorTip(i)
                            }
                        }
                    })
                } catch (i) {
                    "undefined" != typeof alog && alog("exception.fire", "catch", {
                        msg: i.message || i.description,
                        path: "waimai:widget/common/ui/addressEditDialog/addressEditDialog.js",
                        ln: 217
                    })
                }
            }
        },
        checkForm: function(e) {
            var t = e ? 1 : 0;
            if (t) {
                var a = this.getInputValue("sug_address"),
                    i = this.opt.$detailEl.find(".hide_poi_address1")[0].value;
                return (!$.trim(a) || a.length > 40 || !i) && this.errorShow("sug_address"), !1
            }
            var s = this.getInputValue("user_name");
            if (!$.trim(s) || s.length > 8) return this.errorShow("user_name"), !1;
            var d = this.getInputValue("gender");
            if (!d) return this.errorShow("gender"), !1;
            var n = this.getInputValue("user_phone");
            if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(n)) return this.errorShow("user_phone"), !1;
            var a = this.getInputValue("sug_address"),
                i = this.opt.$detailEl.find(".hide_poi_address1")[0].value;
            return !$.trim(a) || a.length > 40 || !i ? (this.errorShow("sug_address"), !1) : !0
        },
        getFormData: function() {
            for (var e = this.opt.$detailEl.find(".input-control"), t = {}, a = 0, i = e.length; i > a; a++) {
                var s = e.eq(a),
                    d = s.find("input").length ? s.find("input").attr("name") : s.find("textarea").attr("name");
                t[d] = this.getInputValue(d)
            }
            t.id = this.getInputValue("adrr_id");
            var n = e.find(".hide_poi_address1")[0].value;
            return t.lng = n.split("-")[0] ? n.split("-")[0] : "", t.lat = n.split("-")[1] ? n.split("-")[1] : "", t.location = n, t.address = t.sug_address + " " + t.detail_address, t
        },
        successTip: function(e) {
            GlobalTips.tip(e)
        },
        errorTip: function(e) {
            GlobalTips.tip(e)
        },
        errorShow: function(e) {
            this.opt.$detailEl.find("[name='" + e + "']").parent().next().removeClass("v-hide"), this.opt.$detailEl.find("[name='" + e + "']").addClass("caution-line"), this.errorHide(2500, e)
        },
        errorHide: function(e, t) {
            var e = e ? e : 0,
                t = t ? t : "";
            return e ? void setTimeout(function() {
                $(".error-msg").addClass("v-hide"), t && $("[name='" + t + "']").removeClass("caution-line")
            }, e) : void $(".error-msg").addClass("v-hide")
        },
        getInputValue: function(e) {
            var t = this.opt.$detailEl.find("[name='" + e + "']"),
                a = t.get(0).tagName.toLowerCase(),
                i = t.attr("type"),
                s = function() {
                    var t = $(" input[name='" + e + "']").filter(":checked");
                    return t.length ? t[0].value : null
                },
                d = function() {
                    var t = [],
                        a = $(" input[name='" + e + "']:checkbox");
                    if (len = a.length, len > 0) for (var i = 0; len > i; i++) a[i].checked && t.push(a[i].value);
                    return t
                },
                n = function() {
                    return t[0].value
                };
            switch (a) {
            case "input":
                switch (i) {
                case "radio":
                    return s();
                case "checkbox":
                    return d();
                default:
                    return n()
                }
                break;
            case "select":
                return n();
            case "textarea":
                return n();
            default:
                return null
            }
        },
        addFormHtml: function() {
            return detailTeml({
                data: {},
                noCancel: !0,
                confirmTxt: "保存送餐信息"
            })
        },
        updateOpt: function(e) {
            this.opt = $.extend({}, this.opt, e)
        }
    }), module.exports = new AddressEditDialog
});;
define("waimai:widget/common/ui/feedback/feedback.js", function(require, exports, module) {
    function Feedback(e) {
        $.extend(opt, e), bindEvent(), initContent()
    }
    function bindEvent() {
        var e = opt.$el;
        e.on("saveSuccess", function() {
            opt.saveSuccess(e)
        }), e.on("click", ".submitBtn", function() {
            commitForm()
        }), e.on("focus", ".input", function() {
            var e = $(this).attr("name");
            removeError(e)
        })
    }
    function initContent() {
        var e = feedbackTmpl();
        opt.$el.append(e)
    }
    function showError(e, t) {
        var a = opt.$el;
        a.find("[name='" + e + "']").parent().next().removeClass("v-hide").text(t)
    }
    function removeError(e) {
        var t = opt.$el;
        t.find("[name='" + e + "']").parent().next().addClass("v-hide").empty()
    }
    function commitForm() {
        var e = opt.$el,
            t = CookieDataCenter.getAddr(),
            a = window.location.href,
            n = t.lat,
            o = t.lng,
            r = e.find("[name='content']").val(),
            i = e.find("[name='contact']").val(),
            c = "pc";
        return $.trim(r) ? r.length > 800 ? void showError("content", "功能建议最多不能超过800个字") : checkContact(i) ? void $.ajax({
            url: FEEDBACK_AJAX,
            type: "POST",
            dataType: "json",
            data: {
                url: a,
                lat: n,
                lng: o,
                content: r,
                contact: i,
                from: c
            },
            success: function(t) {
                return 0 == t.error_no ? (e.trigger("saveSuccess"), void LISTENER.trigger("waimai-contact-feedback", "feedback", {
                    succ: !0
                })) : (GlobalTips.tip(t.error_msg), !1)
            },
            error: function() {
                GlobalTips.tip("操作失败1")
            }
        }) : void showError("contact", "请填写正确的联系方式") : void showError("content", "请填写功能建议")
    }
    function checkContact(e) {
        var t = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/,
            a = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/,
            n = /^1[3|4|5|7|8][0-9]\d{8}$/,
            o = /^0[\d]{2,3}-[\d]{7,8}/;
        return $.trim(e) ? !t.test(e) && a.test(e) ? !0 : n.test(e) ? !0 : o.test(e) ? !0 : !1 : !1
    }
    var GlobalTips = require("waimai:static/utils/GlobalTips.js"),
        CookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        FEEDBACK_AJAX = "/waimai?qt=feedback",
        feedbackTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="feedback-wrap">    <div class="f-form">        <div class="form-group">            <label>功能建议：</label>            <div class="input-control">                <textarea name="content" placeholder="百度外卖还在不断完善和成长，我们真诚的期望听到您的反馈和建议" class="input placeholder-con"></textarea>            </div>            <div class="error-msg v-hide"></div>        </div>        <div class="form-group">            <label>联系方式：</label>            <div class="input-control">                <input type="text" name="contact" placeholder="请留下您的手机号或邮箱" class="input placeholder-con"/>            </div>            <div class="error-msg  v-hide"></div>        </div>        <div class="form-submit">            <input type="button" value="提交" class="submitBtn"/>            <input type="button" value="取消" class="cancelBtn versa"/>        </div>    </div></div>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        LISTENER = window.listener,
        opt = {
            $el: null,
            saveSuccess: null
        };
    module.exports = Feedback
});;
define("waimai:widget/common/backtop/backtop.js", function(o, e, i) {
    function t() {
        c = new d({
            html: "",
            width: "460",
            height: "330"
        }), new l({
            $el: c.getElement(),
            saveSuccess: n
        }), c.getElement().delegate(".cancelBtn", "click", function() {
            c.hide({
                fade: !0
            })
        }), c.show({
            fade: !0
        }), setTimeout(function() {
            $(".placeholder-con").placeholder()
        }, 0)
    }
    function n() {
        c.hide({
            fade: !0
        }), setTimeout(function() {
            s.tip("感谢您对百度外卖的支持，我们会继续努力！")
        }, 20)
    }
    function a(o) {
        o = o || {}, ]o.scrollTop = o.scrollTop || 650;
        $(window).bind("scroll", function() {
            var e = $(window).scrollTop(),
                i = $("body").height(),
                t = $(window).height(),
                n = i - t - e;
            if (190 > n) {
                m = !1;
                var a = 210 - n;
                p.css({
                    bottom: a + "px"
                })
            } else m || (p.css({
                bottom: "20px"
            }), m = !0);
            e > o.scrollTop ? $("#backTop").removeClass("v-hide") : $("#backTop").addClass("v-hide")
        });
        var e = p.find("[data-node=appdown-img]");
        e.on("mouseover", function() {
            e.addClass("appdown-smll"), e.stop().animate({
                width: "100px",
                height: "100px"
            }, "slow")
        }), e.on("mouseout", function() {
            e.removeClass("appdown-smll"), e.stop().animate({
                width: "65px",
                height: "60px"
            }, "slow")
        }), $("#backTop").click(function(o) {
            o.preventDefault(), $("#backTop").addClass("v-hide"), $("html, body").animate({
                scrollTop: 0
            }, 200)
        }), $("#feedback").click(function() {
            t()
        }), $("#appdownClose").click(function() {
            p.find("[data-node=appdown]").hide()
        })
    }
    var c, e, d = o("jsmod/ui/dialog"),
        s = o("waimai:static/utils/GlobalTips.js"),
        l = o("waimai:widget/common/ui/feedback/feedback.js"),
        p = $("#backtop-section"),
        m = ($("#cart-section"), !0);
    e = i.exports = {
        init: function(o) {
            a(o)
        }
    }
});;
define("waimai:widget/common/footer/footer.js", function(require, exports, module) {
    function closeDialog() {
        clearTimeout(timer), cacheDialog.hide({
            fade: !0
        })
    }
    function initDialog() {
        cacheDialog = new Dialog
    }
    function showWeChat() {
        var a = WeChatTmpl();
        cacheDialog = new Dialog({
            html: a,
            width: 370,
            height: 450
        }), cacheDialog.show({
            fade: !0
        })
    }
    function initEvent() {
        $el.on("click", '[data-node="wechat"]', function() {
            showWeChat()
        }), $(".mod-dialog-frame").on("click", ".closeBtn", function() {
            closeDialog()
        }), $(".mod-dialog-frame").on("click", ".mod-dialog-wrap", function(a) {
            a.stopPropagation()
        })
    }
    var Dialog = require("jsmod/ui/dialog"),
        WeChatTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="contact-dialog wm-wechat">    <a class=\'closeBtn\'>×</a>    <h3>百度外卖官方微信二维码</h3>    <img src="', baidu.template._encodeHTML("https://static.waimai.baidu.com/static/waimai/images/wm_wechat_92d65a3.jpg"), '" width="370" height="370"></div>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        $el = $("#baiducopy"),
        cacheDialog, timer = null;
    module.exports = {
        init: function() {
            initDialog(), initEvent()
        }
    }
});;
define("waimai:widget/common/ui/noresult/noresult.js", function(require, exports, module) {
    var tmpl = [function(_template_object) {
        var _template_fun_array = [],
            fn = function(__data__) {
                var _template_varName = "";
                for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                eval(_template_varName), _template_fun_array.push('<div class="no-result">    <div class="no-result-image" style="padding:80px 0 20px;">        <img src="" alt="无结果" style="display:block;margin:auto;">    </div>    <div class="no-result-notice" style="text-align:center;padding-bottom: 50px;"></div></div>'), _template_varName = null
            }(_template_object);
        return fn = null, _template_fun_array.join("")
    }][0],
        img_src = "https://static.waimai.baidu.com/static/waimai/images/noresult_b2672ee.png";
    module.exports = {
        show: function(t, e, a) {
            a && (img_src = a), $container = $(e), $container.html(tmpl()).find(".no-result-notice").html(t), $container.find("img").attr("src", img_src), this.$container = $container
        },
        hide: function() {
            this.$container.find(".no-result").remove()
        }
    }
});;
define("waimai:widget/common/ui/popCarousel/popCarousel.js", function(require, exports, module) {
    function popCarousel(i) {
        this.opt = $.extend({}, _opt, i), currentIndex = i.index || 0, this.initBigPic(), this.bindEvent()
    }
    var Dialog = require("jsmod/ui/dialog"),
        Carousel = require("jsmod/ui/carousel"),
        detailTeml = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="pop-con">    <div class="closeBtn"></div><div class="side"><div class="icon-con" data-node="prev"><span class="icon-prev"></span></div></div>    <div class="big-pic" data-node="popContent">        </div>    <div class="side">    <div class="icon-con" data-node="next">    <span class="icon-next"></span>    </div>    </div>    <div class="clearfix"></div>    <div class="pic-list">    <div class="icons-con"  data-node="prevp">    <span class="icon-prev"></span>    </div>    <div class="list-con" data-node="listContent">    </div>    <div class="icons-con" data-node="nextp">    <span class="icon-next"></span>    </div>    </div></div>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        cacheDialog, bigPic, listPic, currentIndex = 0,
        listCount = 3,
        ADD_AJAX = "/waimai?qt=addressmanage&type=add&display=json",
        UPDATE_AJAX = "/waimai?qt=addressmanage&type=update&display=json",
        REMOVE_AJAX = "/waimai?qt=addressmanage&type=del&display=json",
        SETDEFAULT_AJAX = "/waimai?qt=addressmanage&type=set&display=json",
        _opt = {
            data: [],
            $bigPicEl: null,
            $addBtn: null,
            $detailEl: null,
            listComplete: null,
            itemRemove: null,
            dialogShow: null,
            saveSuccess: null,
            reForm: !0
        };
    $.extend(popCarousel.prototype, {
        bindEvent: function() {
            var i = cacheDialog.getElement();
            i.on("click", "[data-node=next]", function() {
                bigPic.next()
            }), i.on("click", "[data-node=prev]", function() {
                bigPic.pre()
            }), i.on("click", "[data-node=nextp]", function() {
                listPic.cur(currentIndex + listCount, void 0, !0)
            }), i.on("click", "[data-node=prevp]", function() {
                listPic.cur(currentIndex - listCount, void 0, !0)
            })
        },
        initBigPic: function() {
            var i = this.opt.data,
                e = [],
                t = [];
            cacheDialog = new Dialog({
                html: detailTeml()
            });
            for (var a = cacheDialog.getElement(), n = 0, o = i.length; o > n; n++) e.push('<div class="image-content"><img onerror="util.errorImg(this);" data-src="' + i[n].rsrc + '"></div>'), t.push('<div class="image-content"><img onerror="util.errorImg(this);" src="' + i[n].src + '" width="167" height="100"></div>');
            bigPic = new Carousel(a.find('[data-node="popContent"]'), {
                count: 1,
                htmls: e
            }), cacheDialog.show(), $(bigPic).on("active", function(i) {
                currentIndex = i.index;
                var e = this.getItem(i.index).find("img");
                e.prop("src", e.data("src")), listPic.cur(currentIndex)
            }), listPic = new Carousel(a.find('[data-node="listContent"]'), {
                count: 3,
                htmls: t
            }), $('[data-node="listContent"]').on("click", ".mod-carousel-item", function() {
                var i = $(this).data("index");
                bigPic.cur(i), listPic.cur(i)
            }), bigPic.cur(currentIndex)
        },
        successTip: function(i) {
            GlobalTips.tip(i)
        },
        errorTip: function(i) {
            GlobalTips.tip(i)
        },
        updateOpt: function(i) {
            this.opt = $.extend({}, this.opt, i)
        }
    }), module.exports = popCarousel
});;
define("waimai:widget/common/ui/citybar/citybar.js", function(require, exports, module) {
    function Citybar(t) {
        $.extend(opt, t), bindEvent(), initHtml()
    }
    function bindEvent() {
        var t = opt.$el,
            e = 0;
        t.on("click", function(t) {
            e = !e, listener.trigger("city", "select", {
                toggle: e
            }), t.stopPropagation()
        }), listener.on("muticities", "selected", function(t, e) {
            setCity(e), e.hasaoi ? listener.trigger("city", "hasaoi", e) : listener.trigger("city", "hide")
        }), $(document).on("click", function() {
            listener.trigger("city", "hide")
        })
    }
    function setCity(t) {
        var e = opt.$el;
        e.find(".current-city").html(t.name).attr("data-name", t.name).attr("data-code", t.code).attr("data-hasaoi", t.hasaoi)
    }
    function initHtml() {
        var t, e = opt.cityList,
            i = opt.currentCity;
        i && i.name ? CookieDataCenter.setCity(opt.currentCity) : (i = CookieDataCenter.getCity(), opt.currentCity = i), t = cityBarTmpl({
            city_list: e,
            current_city: i
        }), opt.$el.append(t), opt.init && opt.init(opt)
    }
    var CookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        cityBarTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="city-dropdown">    <div class="city-locate dropdown-toggle">        <a class="current-city" data-name="', "undefined" == typeof current_city.name ? "" : baidu.template._encodeHTML(current_city.name), '" data-code="', "undefined" == typeof current_city.code ? "" : baidu.template._encodeHTML(current_city.code), '">', "undefined" == typeof current_city.name ? "" : baidu.template._encodeHTML(current_city.name), '</a>        <b class="arrow"></b>    </div>    <div class="dropdown-menu hide">        <!-- <div class="city-disabled">已开通城市</div>        <ul class="city-list">            ');
                    for (var i = 0, len = city_list.length; len > i; i++) {
                        var item = city_list[i];
                        _template_fun_array.push('                <li class="city-item" data-name = "', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '" data-code = "', "undefined" == typeof item.code ? "" : baidu.template._encodeHTML(item.code), '">', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), "</li>            ")
                    }
                    _template_fun_array.push("        </ul> -->    </div></div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        exports, opt = {
            $el: null,
            cityList: [],
            currentCity: null,
            init: null
        };
    exports = module.exports = Citybar
});;
define("waimai:widget/common/ui/navSearch/search.js", function(require, exports, module) {
    function Search(e, t) {
        this.setMyAddress(), this.initOption(t), this.initHtml(), this.bindEvent(e)
    }
    var Dialog = require("jsmod/ui/dialog"),
        CookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        AddressDataCenter = require("waimai:static/utils/AddressDataCenter.js"),
        addressEditDialog = require("waimai:widget/common/ui/addressEditDialog/addressEditDialog.js");
    require("waimai:static/utils/statis.js");
    var resultTmpl = [function(_template_object) {
        var _template_fun_array = [],
            fn = function(__data__) {
                var _template_varName = "";
                for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                eval(_template_varName), _template_fun_array.push('<div class="search-title">    <div class="search-desc">请确定您的地址</div></div><div class="search-list s-list">    <ul>        ');
                for (var i = 0, len = data.length; len > i; i++) {
                    var item = data[i];
                    _template_fun_array.push('            <li data-uid = "', "undefined" == typeof item.uid ? "" : baidu.template._encodeHTML(item.uid), '" data-link = "/waimai?qt=shoplist&lat=', "undefined" == typeof item.latitude ? "" : baidu.template._encodeHTML(item.latitude), "&lng=", "undefined" == typeof item.longitude ? "" : baidu.template._encodeHTML(item.longitude), "&address=", "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), "&city_id=", "undefined" == typeof city_id ? "" : baidu.template._encodeHTML(city_id), '" data-msg = "', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), "$", "undefined" == typeof(item.address ? item.address : "") ? "" : baidu.template._encodeHTML(item.address ? item.address : ""), "$", "undefined" == typeof item.latitude ? "" : baidu.template._encodeHTML(item.latitude), "$", "undefined" == typeof item.longitude ? "" : baidu.template._encodeHTML(item.longitude), "$", "undefined" == typeof item.shopnum ? "" : baidu.template._encodeHTML(item.shopnum), "$", "undefined" == typeof city_id ? "" : baidu.template._encodeHTML(city_id), '" data-name="', "undefined" == typeof decodeURIComponent(item.name) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.name)), '">                <div class="addr addr-icon"></div>                <div class="addr addr-content">                    <p class="addr-name">', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '</p>                    <p class="addr-desc">', "undefined" == typeof(item.address ? item.address : "") ? "" : baidu.template._encodeHTML(item.address ? item.address : ""), "</p>                    "), item.shopnum && 0 !== parseInt(item.shopnum, 10) ? _template_fun_array.push('                        <p class="addr-shop-num">', "undefined" == typeof item.shopnum ? "" : baidu.template._encodeHTML(item.shopnum), "家餐厅</p>                    ") : _template_fun_array.push('                        <p class="addr-shop-num addr-no-open">暂无开通</p>                    '), _template_fun_array.push("                </div>            </li>        ")
                }
                _template_fun_array.push("    </ul></div>"), _template_varName = null
            }(_template_object);
        return fn = null, _template_fun_array.join("")
    }][0],
        historyTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    if (eval(_template_varName), _template_fun_array.push(""), historyaddr && historyaddr.length) {
                        _template_fun_array.push('    <h5>历史纪录</h5>    <ul class="nav-sug-list nav-sug-dish-list">        ');
                        for (var i = 0; i < historyaddr.length; i++) {
                            var item = historyaddr[i];
                            _template_fun_array.push('            <li class="s-list-history" data-link="/waimai?qt=shoplist&lat=', "undefined" == typeof item.lat ? "" : baidu.template._encodeHTML(item.lat), "&lng=", "undefined" == typeof item.lng ? "" : baidu.template._encodeHTML(item.lng), "&address=", "undefined" == typeof decodeURIComponent(item.name) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.name)), "&city_id=", "undefined" == typeof decodeURIComponent(item.city_id) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.city_id)), '" data-name="', "undefined" == typeof decodeURIComponent(item.name) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.name)), '">                <div class="addr his-icon"></div>                <div class="addr addr-content">                    <p class="addr-name">', "undefined" == typeof decodeURIComponent(item.name) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.name)), '</p>                    <p class="addr-desc">', "undefined" == typeof decodeURIComponent(item.address) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.address)), "</p>                    "), item.shopnum && 0 !== parseInt(item.shopnum, 10) ? _template_fun_array.push('                        <p class="addr-shop-num">', "undefined" == typeof item.shopnum ? "" : baidu.template._encodeHTML(item.shopnum), "家外卖餐厅</p>                    ") : _template_fun_array.push('                        <p class="addr-shop-num addr-no-open">暂无开通</p>                    '), _template_fun_array.push("                </div>            </li>        ")
                        }
                        _template_fun_array.push('        <li class="search-history-clear"><a class="clear-btn">清空历史记录</a></li>    </ul>')
                    }
                    _template_fun_array.push(""), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        myAddressTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    if (eval(_template_varName), _template_fun_array.push(""), myaddr) {
                        if (_template_fun_array.push('    <h5>我的收餐地址</h5>    <div class="search-list-my-address-block">    '), myaddr.length) {
                            _template_fun_array.push('        <ul class="my-address-list">            ');
                            for (var i = 0; i < myaddr.length; i++) {
                                var item = myaddr[i];
                                if (5 > i) {
                                    var lat = 0,
                                        lng = 0;
                                    item.location && 2 == item.location.split(",").length && (lng = item.location.split(",")[0], lat = item.location.split(",")[1]), _template_fun_array.push('                <li class="s-list-myaddress" data-link="/waimai?qt=shoplist&lat=', "undefined" == typeof lat ? "" : baidu.template._encodeHTML(lat), "&lng=", "undefined" == typeof lng ? "" : baidu.template._encodeHTML(lng), "&address=", "undefined" == typeof decodeURIComponent(item.sug_address) ? "" : baidu.template._encodeHTML(decodeURIComponent(item.sug_address)), '&city_id=" data-sugaddress="', "undefined" == typeof item.sug_address ? "" : baidu.template._encodeHTML(item.sug_address), '" data-addr="', "undefined" == typeof JSON.stringify(item) ? "" : baidu.template._encodeHTML(JSON.stringify(item)), '">                    <span class="myaddr-info">', "undefined" == typeof item.user_name ? "" : baidu.template._encodeHTML(item.user_name), "&nbsp;", "undefined" == typeof(1 == item.gender ? "先生" : "女士") ? "" : baidu.template._encodeHTML(1 == item.gender ? "先生" : "女士"), "&nbsp;", "undefined" == typeof item.user_phone ? "" : baidu.template._encodeHTML(item.user_phone), '</span>                    <span class="myaddr-address">', "undefined" == typeof(item.sug_address || item.address) ? "" : baidu.template._encodeHTML(item.sug_address || item.address), "</span>                </li>            ")
                                }
                            }
                            _template_fun_array.push("        </ul>    ")
                        } else _template_fun_array.push('        <a class="search-address-add-btn" href="javascript:;">            <span class="icon-search-add"><i></i><i></i></span>新增地址        </a>    ');
                        _template_fun_array.push("    </div>")
                    }
                    _template_fun_array.push(""), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        sugTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="search-list s-list">    <ul>        ');
                    for (var i = 0, len = data.length; len > i; i++) {
                        var item = data[i];
                        _template_fun_array.push('            <li data-name="', "undefined" == typeof item.name3 ? "" : baidu.template._encodeHTML(item.name3), '" data-lat="', "undefined" == typeof item.lat ? "" : baidu.template._encodeHTML(item.lat), '" data-lng="', "undefined" == typeof item.lng ? "" : baidu.template._encodeHTML(item.lng), '">                <div class="addr addr-icon"></div>                <div class="addr addr-content">                    <p class="addr-name">', "undefined" == typeof item.name3 ? "" : baidu.template._encodeHTML(item.name3), '</p>                    <p class="addr-desc">', "undefined" == typeof item.name1 ? "" : baidu.template._encodeHTML(item.name1), "", "undefined" == typeof item.name2 ? "" : baidu.template._encodeHTML(item.name2), "", "undefined" == typeof item.name3 ? "" : baidu.template._encodeHTML(item.name3), "</p>                </div>            </li>        ")
                    }
                    _template_fun_array.push("    </ul></div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        emptyTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push("<p>此地点附近暂时没有外卖餐厅，努力覆盖中...</p>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0];
    $.extend(Search.prototype, {
        opt: {
            $resultEl: null,
            $searchConEl: null,
            $searchBtn: null,
            showHistoryTrg: null,
            hideHistoryTrg: null,
            NOListLiJump: null,
            $hiddenSearchPOI: null
        },
        setDefaultAddress: function(e) {
            $.ajax({
                url: "/waimai/user/address/updatelastusedtime?address_id=" + e,
                type: "GET",
                dataType: "json",
                async: !1,
                cache: !1,
                success: function() {}
            })
        },
        varobj: {
            addressData: null,
            _historyHtml: ""
        },
        initOption: function(e) {
            $.extend(this.opt, e)
        },
        initHtml: function() {
            this.opt.$resultEl.addClass("mod-search-hide mod-search-container")
        },
        hideResult: function() {
            this.opt.$resultEl.addClass("mod-search-hide")
        },
        setItemTopAttr: function() {
            for (var e = this.opt.$resultEl.find(".s-list li"), t = this.opt.$resultEl.offset().top, a = 0, d = e.length; d > a; a++) {
                var s = e.eq(a).offset().top,
                    i = e.eq(a).outerHeight(!0),
                    n = s - i - t;
                e.eq(a).attr("data-top", n)
            }
        },
        showHistory: function() {
            var e;
            this.opt.$resultEl.empty().removeClass("mod-search-result mod-search-sug mod-search-empty").addClass("mod-search-history"), e = this.getHistoryTemplate(), e ? (this.opt.$resultEl.removeClass("mod-search-hide").append('<div class="s-list search-list history-s-list">' + e + "</div>").show(), this.setItemTopAttr()) : this.opt.$resultEl.addClass("mod-search-hide")
        },
        hideHistory: function() {
            this.opt.$resultEl.hide().empty().removeClass("mod-search-history").addClass("mod-search-hide")
        },
        showSug: function(e) {
            this.opt.$resultEl.empty().removeClass("mod-search-hide mod-search-result mod-search-history mod-search-empty").addClass("mod-search-sug").append(e).show(), this.setItemTopAttr(), this.hideLoading()
        },
        showResult: function(e) {
            this.opt.$resultEl.empty().removeClass("mod-search-hide mod-search-sug mod-search-history mod-search-empty").addClass("mod-search-result").append(e).show(), this.setItemTopAttr(), this.hideLoading()
        },
        showEmpty: function() {
            if (this.opt.NOListLiJump) this.opt.$hiddenSearchPOI.val("0-0"), this.hideResult();
            else {
                var e = emptyTmpl();
                this.opt.$resultEl.empty().removeClass("mod-search-hide mod-search-sug mod-search-history mod-search-result").addClass("mod-search-empty").append(e).show(), this.hideLoading()
            }
        },
        showLoading: function() {
            $(".s-loading").removeClass("mod-search-hide")
        },
        hideLoading: function() {
            $(".s-loading").addClass("mod-search-hide")
        },
        stopBubble: function(e) {
            e.preventDefault(), e.stopPropagation()
        },
        setMyAddress: function() {
            var e = this;
            this.varobj.addressData = null, $.ajax({
                url: "/waimai/user/address/select?display=json",
                type: "GET",
                cache: !1,
                dataType: "json",
                success: function(t) {
                    t && 0 == t.error_no ? e.varobj.addressData = t.result && t.result.data && $.isArray(t.result.data) && t.result.data.length ? t.result.data : [] : t && 1102 != t.error_no && e.addressLoadFaild(), t && t._bdstoken && $("#bdstoken").val(t._bdstoken)
                },
                error: function() {
                    e.addressLoadFaild()
                }
            })
        },
        resetMyAddress: function() {
            $.extend(this.varobj, {
                addressData: null,
                _historyHtml: ""
            }), this.hideResult(), this.setMyAddress()
        },
        getHistoryTemplate: function() {
            if (!this.varobj._historyHtml) {
                {
                    var e = {
                        myaddr: this.varobj.addressData,
                        historyaddr: AddressDataCenter.getAll() || []
                    },
                        t = myAddressTmpl(e);
                    historyTmpl(e)
                }
                t && addNStat({
                    da_src: "navSearchAddressMyAddressList",
                    da_act: "show",
                    da_trd: "waimai"
                }), this.varobj._historyHtml = myAddressTmpl(e) + historyTmpl(e)
            }
            return this.varobj._historyHtml
        },
        addressAddPosition: function(e) {
            if (e && e.id) {
                var t = "dialog-s-list-myaddress-not-position",
                    a = "." + t,
                    d = $(a);
                d.length || (d = $('<div class="' + t + '"><div class="dslm-container"><p>我们在地图上找不到您的位置<br />为了更好的为您服务，求告知～</p><p><input type="button" class="dslm-go-set-btn" value="去添加" /></p></div></div>').appendTo("body")), d.show().undelegate(".dslm-go-set-btn", "click").delegate(".dslm-go-set-btn", "click", function() {
                    d.hide(), addressEditDialog.showDetailDialog(e, !0, !0)
                })
            }
        },
        addressLoadFaild: function() {
            var e = this,
                t = "dialog-s-list-myaddress-not-position",
                a = "." + t,
                d = $(a);
            d.length || (d = $('<div class="' + t + '"><div class="dslm-container"><div class="dslm-title">我的收餐地址<a class="dslm-close-link" href="javascript:;"></a></div><p>加载失败</p><p><input type="button" class="dslm-addr-reload-btn" value="重新加载" /></p></div></div>').appendTo("body")), d.show().undelegate(".dslm-addr-reload-btn", "click").delegate(".dslm-addr-reload-btn", "click", function() {
                d.hide(), addNStat({
                    da_src: "navSearchAddressMyAddressListReloadBtn",
                    da_act: "click",
                    da_trd: "waimai"
                }), e.setMyAddress()
            }).undelegate(".dslm-close-link", "click").delegate(".dslm-close-link", "click", function() {
                d.hide(), addNStat({
                    da_src: "navSearchAddressMyAddressListCloseReloadBtn",
                    da_act: "click",
                    da_trd: "waimai"
                })
            })
        },
        getSug: function(e) {
            var t = this,
                a = CookieDataCenter.getCity() ? CookieDataCenter.getCity().code : null;
            e = e || this.opt.$searchConEl.val(), $.ajax({
                url: "/waimai?qt=poisug",
                type: "POST",
                dataType: "json",
                data: {
                    cid: a,
                    type: 0,
                    wd: e,
                    from: "pc"
                },
                success: function(a) {
                    var d = a.s || [],
                        s = "",
                        i = [];
                    d.length > 0 && (t.opt.NOListLiJump ? ($.each(d, function(t, a) {
                        {
                            var d = a.split("$"),
                                s = d[3],
                                n = d[5].split(",")[0],
                                l = d[5].split(",")[1];
                            s.replace(e, "<b>" + e + "</b>")
                        }
                        i.push({
                            name1: d[0],
                            name2: d[1],
                            name3: s,
                            lat: n,
                            lng: l
                        })
                    }), s = sugTmpl({
                        data: i
                    })) : (s = "<div class='search-list s-list'><ul>", $.each(d, function(t, a) {
                        var d = a.split("$"),
                            i = d[3],
                            n = d[5].split(",")[0],
                            l = d[5].split(",")[1],
                            o = "<i></i><span>" + i.replace(e, "<b>" + e + "</b>") + "</span>";
                        s += "<li data-name='" + i + "' data-lat='" + n + "' data-lng='" + l + "'>" + o + "</li>"
                    }), s += "</ul></div>"), t.showSug(s))
                }
            })
        },
        goShopList: function(e, t) {
            if (e && e.id) {
                var a = e.lat || 0,
                    d = e.lng || 0,
                    s = e.sug_address || "";
                a || d || !e.location || 2 != e.location.split(",").length || (d = e.location.split(",")[0], a = e.location.split(",")[1]);
                var i = "/waimai?qt=shoplist&lat=" + a + "&lng=" + d + "&address=" + s;
                if (t) return i;
                window.location.href = i
            }
        },
        goSearch: function(e, t, a) {
            this.showLoading(), e = e || this.opt.$searchConEl.val(), !t && (t = ""), !a && (a = "");
            var d = this,
                s = "",
                i = "/waimai?qt=poisearch&from=pc&ie=utf-8&sug=0&tn=B_NORMAL_MAP&oue=1&res=1&c=" + CookieDataCenter.getCity().code;
            addNStat({
                da_src: "findBk.searchBtn",
                da_act: "click",
                da_trd: "waimai"
            }), $.ajax({
                type: "GET",
                url: i,
                dataType: "json",
                data: {
                    lat: t,
                    lng: a,
                    wd: e,
                    _t: +new Date
                },
                timeout: 1e4,
                success: function(e) {
                    if (0 == e.error_no) if ("" == e.result.url) if (d.opt.NOListLiJump && 1 == e.result.content.length) {
                        var t = e.result.content[0].name || "",
                            a = e.result.content[0].latitude || "0",
                            i = e.result.content[0].longitude || "0";
                        d.opt.$searchConEl.val(t), d.opt.$hiddenSearchPOI.val(i + "-" + a), d.hideResult()
                    } else s = resultTmpl({
                        data: e.result.content,
                        city_id: e.result.city_id
                    }), d.showResult(s);
                    else {
                        var n = e.result.content[0] || {
                            shopnum: 0
                        };
                        if (n.shopnum) {
                            var l = {};
                            $.extend(l, {
                                name: n.name,
                                address: n.address,
                                lat: n.latitude,
                                lng: n.longitude,
                                shopnum: n.shopnum,
                                city_id: e.result.city_id
                            }), AddressDataCenter.add(l), d.opt.NOListLiJump ? (d.opt.$searchConEl.val(l.name), d.opt.$hiddenSearchPOI.val(l.lng + "-" + l.lat), d.hideResult()) : d.noonteaSearch(e.result.url)
                        } else d.showEmpty()
                    } else d.showEmpty()
                },
                error: function() {
                    d.showEmpty()
                }
            })
        },
        enterOption: function() {
            var e = this.opt.$resultEl.find(".s-list li.s-on"),
                t = this.opt.$searchConEl.val();
            return e.length ? void e.click() : void(t && this.goSearch(t, "", ""))
        },
        listScroll: function() {
            var e, t = this.opt.$resultEl.find(".s-list li");
            if (t.length) {
                if (this.opt.$resultEl.hasClass("mod-search-result")) {
                    if (t.size() < 5) return
                } else if (t.size() < 7) return;
                e = this.opt.$resultEl.find(".s-list li.s-on").attr("data-top"), this.opt.$resultEl.scrollTop(e)
            }
        },
        noonteaSearch: function(e) {
            var t = /(\/shopinterface)|(\/activity)/;
            t.test(window.location.pathname) ? (CookieDataCenter.setAddr({
                lng: this.getQueryString("lng", e),
                lat: this.getQueryString("lat", e),
                address: this.getQueryString("address", e)
            }), window.location.reload()) : location.href = e
        },
        getQueryString: function(e, t) {
            var a = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                d = t.match(a);
            return null != d ? unescape(d[2]) : null
        },
        bindEvent: function(e) {
            var t = this,
                a = this.opt.$searchConEl,
                d = this.opt.$resultEl,
                s = this.opt.showHistoryTrg || "show.history",
                i = this.opt.hideHistoryTrg || "hide.history";
            $(e).on(s, function() {
                setTimeout(function() {
                    t.showHistory()
                }, 0)
            }), $(e).on(i, function() {
                setTimeout(function() {
                    t.hideHistory()
                }, 0)
            }), d.on("blur", function() {
                this.hide()
            }), a.on("click", function(e) {
                var a = $(this).val(),
                    d = CookieDataCenter.getCity();
                addNStat({
                    da_src: "navSearchAddressInput",
                    da_act: "focus",
                    da_trd: "waimai"
                }), a ? t.getSug(a) : d.hasaoi || t.showHistory(), e.stopPropagation()
            }), a.on("keydown", function(e) {
                if (window.NOBLUR = "NOPE", t.opt.$hiddenSearchPOI && t.opt.$hiddenSearchPOI.val(""), 13 == e.which) return void t.enterOption();
                if (38 == e.which) {
                    var s, i, n = d.find(".s-list"),
                        l = n.find("li.s-on");
                    return void(n.length && (0 == l.length || 0 == l.index() ? (n.find("li:last").addClass("s-on"), l.removeClass("s-on")) : (l.prev("li").addClass("s-on"), l.removeClass("s-on")), s = n.find("li.s-on"), i = s.data("name"), t.listScroll(), i && a.val(i)))
                }
                if (40 == e.which) {
                    var s, i, n = d.find(".s-list"),
                        l = n.find("li.s-on");
                    return void(n.length && (0 == l.length || l.index() == n.find("li").length - 1 ? (n.find("li:first").addClass("s-on"), l.removeClass("s-on")) : (l.next("li").addClass("s-on"), l.removeClass("s-on")), s = n.find("li.s-on"), i = s.attr("data-name"), t.listScroll(), i && a.val(i)))
                }
                setTimeout(function() {
                    var e = a.val(),
                        d = CookieDataCenter.getCity();
                    e ? t.getSug(e) : d.hasaoi || t.showHistory()
                }, 0)
            }), d.on("click", ".s-list li:not(.s-list-myaddress)", function(e) {
                if (t.stopBubble(e), d.hasClass("mod-search-sug")) {
                    var a = $(e.currentTarget),
                        s = a.data("name"),
                        i = a.data("lat"),
                        n = a.data("lng");
                    return s && t.opt.$searchConEl.val(s), void t.goSearch(s, i, n)
                }
                var l = {},
                    o = $(this).attr("data-msg"),
                    r = $(this).attr("data-link");
                if (d.hasClass("mod-search-result")) {
                    if (!t.opt.NOListLiJump && $(this).find(".addr-shop-num").hasClass("addr-no-open")) return;
                    var m = o.split("$");
                    $.extend(l, {
                        name: m[0],
                        address: m[1],
                        lat: m[2],
                        lng: m[3],
                        shopnum: m[4],
                        city_id: m[5]
                    }), AddressDataCenter.add(l)
                }
                if (t.opt.NOListLiJump) {
                    for (var m = r.split("&"), u = {}, p = 0; p < m.length; p++) {
                        var c = m[p].split("=")[0];
                        val = m[p].split("=")[1], u[c] = val
                    }
                    $.extend(l, {
                        name: u.address,
                        lat: u.lat,
                        lng: u.lng,
                        city_id: u.city_id
                    }), AddressDataCenter.add(l), t.opt.$searchConEl.val(u.address), t.opt.$hiddenSearchPOI.val(l.lng + "-" + l.lat), t.hideHistory()
                } else t.noonteaSearch(r)
            }), d.on("click", ".s-list li.s-list-myaddress", function(e) {
                t.stopBubble(e);
                var a = $(this).data("sugaddress"),
                    d = $(this).data("addr").id;
                if (addNStat({
                    da_src: "navSearchAddressMyAddressList",
                    da_act: "click",
                    da_trd: "waimai"
                }), a) {
                    var s = $(this).data("link");
                    t.setDefaultAddress(d), window.location.href = s
                } else t.hideResult(), addNStat({
                    da_src: "navSearchAddressAddSugAddressDialog",
                    da_act: "show",
                    da_trd: "waimai"
                }), t.addressAddPosition($(this).data("addr"))
            }), d.delegate(".search-address-add-btn", "click", function() {
                addNStat({
                    da_src: "navSearchAddressMyAddressList.addAddressBtn",
                    da_act: "click",
                    da_trd: "waimai"
                }), window.Search.hideResult(), addressEditDialog.showDetailDialog(null, !0, !0)
            }), d.on("mousedown", ".s-list li", function() {
                window.NOBLUR = "YES"
            }), d.on("click", ".clear-btn", function(e) {
                t.stopBubble(e), t.varobj._historyHtml = null, t.hideResult(), AddressDataCenter.clearAll(), d.empty()
            });
            var n = function() {
                    t.hideResult()
                };
            $(document).on("click", n), d.hover(function() {
                $(document).unbind("click", n)
            }, function() {
                $(document).on("click", n)
            }), a.hover(function() {
                $(document).unbind("click", n)
            }, function() {
                $(document).on("click", n)
            })
        }
    }), module.exports = {
        init: function(e) {
            return new Search(this, e)
        }
    }
});;
define("waimai:widget/common/nav/nav.js", function(require, exports, module) {
    function getBasicUrl() {
        return "/waimai/shoplist/" + hashKeyId
    }
    function hideSearch() {
        $searchEl.removeClass("s-active")
    }
    function showSearch() {
        $searchEl.addClass("s-active"), $searchEl.find(".s-second .s-con").val(""), $searchEl.find(".s-second .s-con").focus(), $(Search).trigger("show.history"), $(Search).trigger("address.hide.history")
    }
    function showCircle(e) {
        var i = CookieDataCenter.getCity(i);
        i.hasaoi ? ($searchEl.addClass("s-active"), $searchEl.find(".s-second .s-con").val(""), $searchEl.find(".s-second .s-con").focus(), listener.trigger("city", "hasaoi", i), $(Search).trigger("hide.history")) : showSearch(), e && e.stopPropagation()
    }
    function initEvent() {
        navList.on("click.nav", function(e) {
            var i = $(this).attr("id"),
                a = this;
            return "order" === i ? (e.preventDefault(), void require.async("waimai:widget/common/userinfo/UserMgr.js", function(e) {
                e.login({
                    url: $(a).find(".nav-item-link").prop("href")
                })
            })) : void $(this).addClass("nav-item-active")
        }), $searchEl.find(".s-first .s-con").on("click", showCircle), $searchEl.find(".s-second .s-con").on("click", showCircle), $searchEl.find("#s-con").on("keyup focus", function(e) {
            var i = $(e.currentTarget),
                a = i.val(),
                t = CookieDataCenter.getCity();
            t.hasaoi && "" === a ? setTimeout(function() {
                listener.trigger("city", "hasaoi", t), $(Search).trigger("hide.history")
            }, 0) : listener.trigger("city", "hide")
        }), listener.on("muticities", "selected", function() {
            showCircle()
        }), $(document).on("click", hideSearch), $searchEl.hover(function() {
            $(document).unbind("click", hideSearch)
        }, function() {
            $(document).on("click", hideSearch)
        }), listener.on("city", "select", function() {
            $(Search).trigger("hide.history")
        }), $("#f-search").on("click", function() {
            if (addNStat({
                da_src: "searchShopBk.searchBtn",
                da_act: "click",
                da_trd: "waimai"
            }), $("#f-input").val()) {
                var e = getBasicUrl(),
                    i = e + "?wd=" + $("#f-input").val() + (_welfareElse ? "&welfare=" + _welfareElse : "");
                window.location.href = i
            } else $("#f-input").focus()
        }), $("#f-input").on("keydown", function(e) {
            return 13 == e.which ? void $("#f-search").click() : void 0
        })
    }
    function initCityBar() {}
    function searchEvent() {
        $searchList.delegate("li a", "click", function(e) {
            e.preventDefault();
            var i = this.href,
                a = $(this).data("type"),
                t = "nav-sug-shop" == a,
                s = "nav-sug-dish" == a;
            addNStat({
                da_src: "SugListBk.clickSearchList",
                da_act: "click",
                da_trd: "waimai"
            }), t && addNStat({
                da_src: "SugListBk.clickSearchShopList",
                da_act: "click",
                da_trd: "waimai"
            }), s && addNStat({
                da_src: "SugListBk.clickSearchDishList",
                da_act: "click",
                da_trd: "waimai"
            }), window.location = i
        }), $searchInput.on("input propertychange", function(e) {
            if (hashKeyId) {
                {
                    var i = $searchInput.val();
                    $(this)
                }
                40 !== e.keyCode && 38 !== e.keyCode && 39 !== e.keyCode && 41 !== e.keyCode && $.ajax({
                    url: "/shopui?qt=shopdishsuggest&addr_id=" + hashKeyId + "&word=" + encodeURIComponent(i) + "&pre_only=0&page_num=0&range_num=5&" + Math.random(),
                    type: "GET",
                    dataType: "JSON",
                    success: function(e) {
                        e && 0 == e.error_no && e.result ? renderSearchList(e.result) : $searchList.hide()
                    },
                    error: function() {
                        $searchList.hide()
                    }
                })
            } else {
                $searchList.html("");
                var a = "";
                a = '<li><span class="f-search-txt"><img class="jumpDirectImg" src="' + jumpDirectImg + '">请先填写您的地址</span></li>', $searchList.html(a), $searchList.show()
            }
        }), $searchInput.on("focus", function() {
            $searchList.children().length > 0 && ($searchList.show(), addNStat({
                da_src: "SugListBk.showSearchList",
                da_act: "show",
                da_trd: "waimai"
            }))
        }), $searchInput.on("focusout", function() {
            setTimeout(function() {
                $searchList.hide()
            }, 300)
        })
    }
    function renderSearchList(e) {
        for (var i = 0; i < e.shop_sug_list.length; i++) {
            var a = decodeURIComponent(e.shop_sug_list[i].shop_logo.substring(109)),
                t = a.match(/http:\/\/([^\/]+)/i);
            e.shop_sug_list[i].shop_logo = "http://img.waimai.bdimg.com" == t[0] ? a.replace("http://img.waimai.bdimg.com", "https://img.waimai.baidu.com") : "http://img.waimai.baidu.com" == t[0] ? a.replace("http://img.waimai.baidu.com", "https://img.waimai.baidu.com") : ""
        }
        var s = navSugTpl(convertSug(e));
        $searchList.html(s), $searchList.children().length > 0 ? ($searchList.show(), addNStat({
            da_src: "SugListBk.showSearchList",
            da_act: "show",
            da_trd: "waimai"
        })) : $searchList.hide()
    }
    function convertSug(e) {
        function i(e, i) {
            var a = e.businessStatus;
            e.classWait = "", 1 === a || 4 === a ? (e.tip = "店铺" + BUSS_STATUS[a], e.classWait = "wait") : 2 === a || 5 === a ? (e.tip = e.takeout_open_time + "开始配送", e.classWait = "start") : e.tip = "shop" === i ? e.sell_month_count + "份" : "¥ " + e.price
        }
        for (var a = e.dish_sug_list, t = e.shop_sug_list, s = a.length, n = t.length, c = 0, o = 0; s > c; c++) {
            var r = a[c];
            i(r, "dish")
        }
        for (; n > o; o++) {
            var r = t[o];
            i(r, "shop")
        }
        return e.recall_info = recall_info, e
    }
    function sys_timeout() {
        var e = 864e5,
            i = (new Date).getTime(),
            a = new Fingerprint({
                canvas: !0,
                ie_activex: !0,
                screen_resolution: !0
            }),
            t = a.get(),
            s = a.getKey();
        cookie.setRaw("SYS_CONFIRM", JSON.stringify(s), {
            expires: i + 365 * e,
            path: "/"
        }), cookie.setRaw("SYS_TIMEOUT", t, {
            expires: i + 365 * e,
            path: "/"
        })
    }
    var util = require("wcommon:static/util.js"),
        Fingerprint = require("waimai:static/utils/fingerprint.js"),
        CookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        CityBar = require("waimai:widget/common/ui/citybar/citybar.js"),
        Search = require("waimai:widget/common/ui/navSearch/search.js"),
        cookie = require("wcommon:static/util/Cookie.js"),
        navSugTpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    if (eval(_template_varName), _template_fun_array.push(""), shop_sug_list && shop_sug_list.length) {
                        _template_fun_array.push('<h5>商户</h5><ul class="nav-sug-list nav-sug-shop-list">');
                        for (var i = 0; i < shop_sug_list.length; i++) {
                            var shop = shop_sug_list[i];
                            _template_fun_array.push("<li>                "), shop.is_store && 1 == shop.is_store ? _template_fun_array.push('                    <a href="/shopui/upc/shopview?shop_id=', "undefined" == typeof shop.id ? "" : baidu.template._encodeHTML(shop.id), '" title="', "undefined" == typeof shop.name ? "" : baidu.template._encodeHTML(shop.name), "，本月销售", "undefined" == typeof shop.sell_month_count ? "" : baidu.template._encodeHTML(shop.sell_month_count), '份" data-type="nav-sug-shop">                        <span class="n-s-left"><img src="', "undefined" == typeof shop.shop_logo ? "" : baidu.template._encodeHTML(shop.shop_logo), '" onerror="util.errorImg(this);"/>', "undefined" == typeof shop.name ? "" : baidu.template._encodeHTML(shop.name), '</span>                        <span class="n-s-right ', "undefined" == typeof shop.classWait ? "" : baidu.template._encodeHTML(shop.classWait), '">', "undefined" == typeof shop.tip ? "" : baidu.template._encodeHTML(shop.tip), "</span>                    </a>                ") : _template_fun_array.push('                    <a href="/waimai/shop/', "undefined" == typeof shop.id ? "" : baidu.template._encodeHTML(shop.id), '" title="', "undefined" == typeof shop.name ? "" : baidu.template._encodeHTML(shop.name), "，本月销售", "undefined" == typeof shop.sell_month_count ? "" : baidu.template._encodeHTML(shop.sell_month_count), '份" data-type="nav-sug-shop">                        <span class="n-s-left"><img src="', "undefined" == typeof shop.shop_logo ? "" : baidu.template._encodeHTML(shop.shop_logo), '" onerror="util.errorImg(this);"/>', "undefined" == typeof shop.name ? "" : baidu.template._encodeHTML(shop.name), '</span>                        <span class="n-s-right ', "undefined" == typeof shop.classWait ? "" : baidu.template._encodeHTML(shop.classWait), '">', "undefined" == typeof shop.tip ? "" : baidu.template._encodeHTML(shop.tip), "</span>                    </a>                "), _template_fun_array.push("</li>")
                        }
                        _template_fun_array.push("</ul>")
                    }
                    if (_template_fun_array.push(""), dish_sug_list && dish_sug_list.length) {
                        _template_fun_array.push('<h5>商品</h5><ul class="nav-sug-list nav-sug-dish-list">');
                        for (var i = 0; i < dish_sug_list.length; i++) {
                            var dish = dish_sug_list[i];
                            _template_fun_array.push('<li>            <a href="/waimai/shop/', "undefined" == typeof dish.rid ? "" : baidu.template._encodeHTML(dish.rid), "?searchdishid=", "undefined" == typeof dish.id ? "" : baidu.template._encodeHTML(dish.id), '" title="', "undefined" == typeof dish.name ? "" : baidu.template._encodeHTML(dish.name), "，", "undefined" == typeof dish.ownshop ? "" : baidu.template._encodeHTML(dish.ownshop), "，¥", "undefined" == typeof dish.price ? "" : baidu.template._encodeHTML(dish.price), '" data-type="nav-sug-dish"><span class="n-s-left"><span>', "undefined" == typeof dish.name ? "" : baidu.template._encodeHTML(dish.name), "</span><span>", "undefined" == typeof dish.ownshop ? "" : baidu.template._encodeHTML(dish.ownshop), '</span></span><span class="n-s-right ', "undefined" == typeof dish.classWait ? "" : baidu.template._encodeHTML(dish.classWait), '">', "undefined" == typeof dish.tip ? "" : baidu.template._encodeHTML(dish.tip), "</span></a></li>")
                        }
                        _template_fun_array.push("</ul>")
                    }
                    _template_fun_array.push(""), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        navList = $(".header .nav .nav-item"),
        $el = $(".header"),
        $searchEl = $("#nav-search-section"),
        $searchInput = $("#f-input"),
        $searchList = $(".f-search-list"),
        cityBarObj, _welfareElse = "",
        hashKeyId = "",
        recall_info = null,
        BUSS_STATUS = ["", "休息中", "可预订", "营业中", "已打烊", "需预定"];
    jumpDirectImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAALCAMAAACqC0YIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADqUExURQAAACcmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNnqKxrYAAABNdFJOUwCWBQwKCIgBB/7T+1ToAzlHM1CHfZOgcXey4y6+4igJMtcdRics9Tbg37ltSnOp5tXPGufsGA3bFxvJyBEWyrvdwsz9vy1wb+UCp8vAurOuBgAAAJRJREFUCNc9zkUSwzAMQFGnbSInZWZmZmZG3/86VaROtXz+I1mI7UaOprBczMR/YL2yJkNrPu51GHxoO2WP2e86iaQfBOzJBm0XZzKE3ZFMOZj0WBztxGYGASmfSOIjfJTJqNVzVa1h4A64nA8tTlWtqYoVrJ/vx00a7p+mCrT1dcfa47Ulm0nzpSv9Sw9EwtFyieQLDSYaJ3qNHqUAAAAASUVORK5CYII=", module.exports = {
        init: function(e) {
            "baiduwaimai.com.cn" === window.location.hostname && $("#medicine").show();
            try {
                sys_timeout()
            } catch (i) {}
            var a = e.hashKey;
            recall_info = e.recall_info, hashKeyId = a ? a : CookieDataCenter.getAddr() ? CookieDataCenter.getAddr().__id : void 0, hashKeyId || (hashKeyId = ""), cityBarObj = new CityBar({
                $el: $searchEl.find(".s-citybar"),
                init: initCityBar
            }), window.Search = Search.init({
                $resultEl: $searchEl.find(".s-search-container1"),
                $searchConEl: $searchEl.find(".s-second .s-con")
            }), initEvent(), searchEvent()
        },
        initSwitchaddr: function() {
            var e, i = CookieDataCenter.getAddr() || {};
            e = i.address || "", $("#nav-search-section input.s-con").val(util.encodeHTML(decodeURIComponent(e)))
        }
    }
});;
define("waimai:widget/common/ui/dishcard/dishcard.js", function(require, exports, module) {
    (function() {
        var dishCardTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push("    ");
                    for (var i = 0, len = data.length; len > i; i++) {
                        var dish = data[i],
                            status = dish.businessStatus,
                            statusText = "来一份";
                        if (_template_fun_array.push('    <li class="dish" data-dishid="', "undefined" == typeof dish.dish_id ? "" : baidu.template._encodeHTML(dish.dish_id), '" data-shopid="', "undefined" == typeof dish.shop_id ? "" : baidu.template._encodeHTML(dish.shop_id), '" is-store="', "undefined" == typeof dish.is_store ? "" : baidu.template._encodeHTML(dish.is_store), '">        <div class="dishImg">            '), dish.url) {
                            _template_fun_array.push("                ");
                            var imgDomain = dish.url.match(/http:\/\/([^\/]+)/i);
                            _template_fun_array.push("                "), "http://img.waimai.baidu.com" == imgDomain[0] || "http://img.waimai.bdimg.com" == imgDomain[0] ? _template_fun_array.push('                    <img status="new" src="/static/waimai/images/forapp/dishdefault_bg.png" data-src="', "undefined" == typeof dish.url ? "" : baidu.template._encodeHTML(dish.url), '@s_0,w_120,h_120,q_100" onerror="this.src=&#39;/static/waimai/images/forapp/hotdish_default_bg.png&#39;" />                ') : _template_fun_array.push('                    <img status="new" src="/static/waimai/images/forapp/dishdefault_bg.png" data-src="http://webmap', "undefined" == typeof Math.round(3 * Math.random()) ? "" : baidu.template._encodeHTML(Math.round(3 * Math.random())), ".map.bdimg.com/maps/services/thumbnails?width=120&height=120&align=center,center&quality=100&src=", "undefined" == typeof encodeURI(dish.url) ? "" : baidu.template._encodeHTML(encodeURI(dish.url)), '" onerror="this.src=&#39;/static/waimai/images/forapp/hotdish_default_bg.png&#39;" />                '), _template_fun_array.push("            ")
                        } else _template_fun_array.push('                <img status="new" src="/static/waimai/images/forapp/dishdefault_bg.png" data-src="http://webmap', "undefined" == typeof Math.round(3 * Math.random()) ? "" : baidu.template._encodeHTML(Math.round(3 * Math.random())), ".map.bdimg.com/maps/services/thumbnails?width=120&height=120&align=center,center&quality=100&src=", "undefined" == typeof encodeURI(dish.url) ? "" : baidu.template._encodeHTML(encodeURI(dish.url)), '" onerror="this.src=&#39;/static/waimai/images/forapp/hotdish_default_bg.png&#39;" />            ');
                        _template_fun_array.push('        </div>        <div class="dishInfo">            <p class="dishName" data-title="', "undefined" == typeof dish.dish_name ? "" : baidu.template._encodeHTML(dish.dish_name), '" data-content="', "undefined" == typeof dish.description ? "" : baidu.template._encodeHTML(dish.description), '">', "undefined" == typeof dish.dish_name ? "" : baidu.template._encodeHTML(dish.dish_name), '</p>            <p class="shopName">', "undefined" == typeof dish.shop_name ? "" : baidu.template._encodeHTML(dish.shop_name), '</p>            <p class="dishSale">                '), 2 === status || 5 === status ? _template_fun_array.push('                    <span class="book">接受预订中</span>                    <span class="start">', "undefined" == typeof dish.takeout_open_time ? "" : baidu.template._encodeHTML(dish.takeout_open_time), "开始配送</span>                ") : 1 === status ? _template_fun_array.push('                <span class="rest">店铺休息中</span>                ') : 4 === status ? _template_fun_array.push('                <span class="rest">店铺已打烊</span>                ') : 3 === status && (_template_fun_array.push("                    "), dish.recommend_num > 0 && _template_fun_array.push('                    <span class="dishSaleRecommand">', "undefined" == typeof dish.recommend_num ? "" : baidu.template._encodeHTML(dish.recommend_num), "人推荐</span>                    "), _template_fun_array.push("                    "), dish.saled > 0 && _template_fun_array.push('                    <span class="dishSaleAmount">月售', "undefined" == typeof dish.saled ? "" : baidu.template._encodeHTML(dish.saled), "份</span>                    "), _template_fun_array.push("                ")), _template_fun_array.push('            </p>            <span class="dishPrice">￥', "undefined" == typeof dish.price ? "" : baidu.template._encodeHTML(dish.price), "</span>            "), (2 === status || 3 === status || 5 === status) && (_template_fun_array.push("                    "), 1 != dish.operable ? (_template_fun_array.push("                       "), statusText = "已售完", _template_fun_array.push("                    ")) : (_template_fun_array.push("                        "), statusText = "来一份", _template_fun_array.push("                    ")), _template_fun_array.push('                <a is-store="', "undefined" == typeof dish.is_store ? "" : baidu.template._encodeHTML(dish.is_store), '" data-dishid="', "undefined" == typeof dish.dish_id ? "" : baidu.template._encodeHTML(dish.dish_id), '" class="dishOrder '), _template_fun_array.push(1 != dish.operable ? "hotDishOrderDeny" : "dishBuyBtn"), _template_fun_array.push('" data-shopid="', "undefined" == typeof dish.shop_id ? "" : baidu.template._encodeHTML(dish.shop_id), '">', "undefined" == typeof statusText ? "" : baidu.template._encodeHTML(statusText), "</a>            ")), _template_fun_array.push("        </div>    </li>    ")
                    }
                    _template_fun_array.push(""), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
            _opt = {
                data: [],
                $el: null,
                listComplete: null
            },
            DishCard = function() {
                function a(a) {
                    this.opt = a, this.opt = $.extend(_opt, a), this.bindEvent(), this.renderList(this.opt.data, this.opt.server_time)
                }
                return a.prototype = {
                    constructor: a,
                    renderList: function(a, t) {
                        var e = this.opt.$el,
                            s = this;
                        if (containClass = "dishcards", a && a.length > 0) {
                            var i = dishCardTmpl({
                                data: s.dataConvert(a),
                                server_time: t
                            });
                            "ul" === e.get(0).tagName.toLowerCase() ? (e.addClass(containClass), e.append(i)) : e.find("ul." + containClass).length ? e.find("ul." + containClass).append(i) : $("<ul/>").addClass(containClass).appendTo(e).append(i), $(this).trigger("list.complete"), this.imgInit()
                        }
                    },
                    imgInit: function() {
                        this.opt.$el.find("img[status=new]").each(function() {
                            this.src = $(this).data("src"), $(this).attr("status", "")
                        })
                    },
                    bindEvent: function() {
                        var a = this.opt.$el;
                        a.delegate("li.dish .dishBuyBtn", "click", function(a) {
                            a.preventDefault(), a.stopPropagation();
                            var t = $(this).attr("data-shopid"),
                                e = $(this).attr("data-dishid"),
                                s = $(this).attr("is-store");
                            s && 1 == s ? (addNStat({
                                da_src: "searchDishListBk.DishMarketItemBuyBtn",
                                da_act: "click",
                                da_trd: "waimai"
                            }), url = "/shopui/upc/shopview?shop_id=" + t + "&searchdishid=" + e + "&buy=1") : (addNStat({
                                da_src: "searchDishListBk.DishItemBuyBtn",
                                da_act: "click",
                                da_trd: "waimai"
                            }), url = "/waimai/shop/" + t + "?searchdishid=" + e + "&buy=1"), window.open(url)
                        }).delegate("li.dish", "click", function() {
                            var a = $(this).attr("data-shopid"),
                                t = $(this).attr("data-dishid"),
                                e = $(this).attr("is-store"),
                                s = "";
                            e && 1 == e ? (addNStat({
                                da_src: "searchDishListBk.DishMarketItem",
                                da_act: "click",
                                da_trd: "waimai"
                            }), s = "/shopui/upc/shopview?shop_id=" + a + "&searchdishid=" + t) : (addNStat({
                                da_src: "searchDishListBk.DishItem",
                                da_act: "click",
                                da_trd: "waimai"
                            }), s = "/waimai/shop/" + a + "?searchdishid=" + t), window.open(s)
                        }), $(this).on("list.complete", function() {
                            this.opt.listComplete && this.opt.listComplete(this.opt)
                        })
                    },
                    dataConvert: function(a) {
                        return a
                    }
                }, a
            }();
        module.exports = DishCard
    }).call(this)
});;
define("waimai:widget/common/ui/multiSetmeal/setmeal.js", function(require, exports, module) {
    function setMeal(e) {
        var t = {
            data: [],
            $el: null,
            selectData: {},
            curGrp: 0,
            selectBasic: {}
        };
        EventCenter = $({}), this.opt = $.extend(t, e), this.renderList(this.opt.data), this.bindEvent()
    }
    var stat = require("waimai:static/utils/statis.js"),
        cookie = require("wcommon:static/util/Cookie.js"),
        localStore = require("waimai:static/utils/store.js"),
        setMealTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="setMeal">    <div class="dish-title" data-node="setMeal-title">    </div>    <div class="content" data-node="setMeal-content">        <div class="groups" data-node="setMeal-content-groups">        </div>        <div class="dishes" data-node="setMeal-content-dishes">        </div>    </div>    <div class="bottom" data-node="setMeal-bottom">    </div></div>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        setMealTitleTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<span class="closeBtn"></span><h2>', "undefined" == typeof data.itemName ? "" : baidu.template._encodeHTML(data.itemName), "</h2>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        setMealDishTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    if (eval(_template_varName), _template_fun_array.push('<div class="list-title">    <div class="big-tip">        '), _template_fun_array.push(parseInt(data.min_num) >= 1 ? "            必选        " : "            可选        "), _template_fun_array.push("        "), parseInt(data.min_num) == parseInt(data.max_num) ? (_template_fun_array.push("            "), 1 == data.min_num ? _template_fun_array.push("            (单选)            ") : _template_fun_array.push("            (多选 ", "undefined" == typeof data.max_num ? "" : baidu.template._encodeHTML(data.max_num), "份)            "), _template_fun_array.push("        ")) : _template_fun_array.push("            (多选 ", "undefined" == typeof data.min_num ? "" : baidu.template._encodeHTML(data.min_num), "-", "undefined" == typeof data.max_num ? "" : baidu.template._encodeHTML(data.max_num), "份)        "), _template_fun_array.push('    </div>    <span class="select-msg" data-node="selectmsg">&nbsp;            </span></div><div class="dishes-list '), selected && selected.total && selected.total.count >= data.max_num && _template_fun_array.push(" enough"), _template_fun_array.push('">    '), data.ids.length > 0) {
                        var len = data.ids.length,
                            divider = Math.ceil(len / 2) - 1;
                        _template_fun_array.push("        ");
                        for (var i = 0, len = data.ids.length; len > i; i++) {
                            var item = data.ids[i];
                            if (_template_fun_array.push("            "), 0 == i && _template_fun_array.push('                <div class="dish-c">            '), _template_fun_array.push("            "), parseInt(item.have_attr) || parseInt(item.have_feature)) {
                                _template_fun_array.push('            <div class="dish-item mutiple" data-id="', "undefined" == typeof item.item_id ? "" : baidu.template._encodeHTML(item.item_id), '" data-name="', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '" data-price="', "undefined" == typeof item.current_price ? "" : baidu.template._encodeHTML(item.current_price), '">                <div class="mutiple-title" data-node="mutipletitle">                    <span class="dish-name">', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '</span>                    <span class="right-side">                        <span class="mutiple-box">                            多规格                        </span>                        <span class="dish-cost" data-node="dishCost">￥'), selected && selected[item.item_id] && selected[item.item_id].realPrice ? _template_fun_array.push("", "undefined" == typeof selected[item.item_id].realPrice ? "" : baidu.template._encodeHTML(selected[item.item_id].realPrice), "") : _template_fun_array.push("", "undefined" == typeof item.current_price ? "" : baidu.template._encodeHTML(item.current_price), ""), _template_fun_array.push('</span>                        <span class="select-icon"></span>                    </span>                </div>                <div class="mutiple-content">                    <table class="size-table" data-node="sizeTable">                        ');
                                for (var da in item.dish_attr) item.dish_attr[da].mainK = 1;
                                _template_fun_array.push("                        ");
                                var attrs = _.extend(item.dish_features, item.dish_attr);
                                for (var att in attrs) {
                                    _template_fun_array.push('                        <tr data-key="', "undefined" == typeof att ? "" : baidu.template._encodeHTML(att), '" data-maink="'), _template_fun_array.push(attrs[att].mainK ? "1" : "0"), _template_fun_array.push('">                            <td class="attr-title" valign="top">', "undefined" == typeof att ? "" : baidu.template._encodeHTML(att), "：</td>                            <td>                                ");
                                    for (var j = 0, attrlen = attrs[att].length; attrlen > j; j++) _template_fun_array.push('                                    <span class="s-item '), selected && selected[item.item_id] && -1 != _.indexOf(selected[item.item_id].features, attrs[att][j].id) && _template_fun_array.push(" sec"), _template_fun_array.push('" data-price="', "undefined" == typeof attrs[att][j].price ? "" : baidu.template._encodeHTML(attrs[att][j].price), '"  data-id="', "undefined" == typeof attrs[att][j].id ? "" : baidu.template._encodeHTML(attrs[att][j].id), '"  data-name="', "undefined" == typeof attrs[att][j].name ? "" : baidu.template._encodeHTML(attrs[att][j].name), '">', "undefined" == typeof attrs[att][j].name ? "" : baidu.template._encodeHTML(attrs[att][j].name), "</span>                                ");
                                    _template_fun_array.push("                            </td>                        </tr>                        ")
                                }
                                _template_fun_array.push('                        <tr>                            <td colspan="2">                                <span class="select-box">                                    '), selected && selected[item.item_id] && selected[item.item_id].count ? _template_fun_array.push('                                        <span class="minusicon" data-node="minusIcon"></span>                                        <span class="select_count">', "undefined" == typeof selected[item.item_id].count ? "" : baidu.template._encodeHTML(selected[item.item_id].count), '</span>                                        <span class="addicon" data-node="addIcon"></span>                                    ') : _template_fun_array.push('                                        <span class="minusicon v-hide" data-node="minusIcon"></span>                                        <span class="select_count v-hide">0</span>                                        <span class="addicon disable" data-node="addIcon"></span>                                    '), _template_fun_array.push("                                </span>                            </td>                        </tr>                    </table>                </div>            </div>            ")
                            } else _template_fun_array.push('            <div class="dish-item" data-id="', "undefined" == typeof item.item_id ? "" : baidu.template._encodeHTML(item.item_id), '" data-name="', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '" data-price="', "undefined" == typeof item.current_price ? "" : baidu.template._encodeHTML(item.current_price), '">                <span class="dish-name">', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), '</span>                <span class="right-side">                    <span class="select-box">                        '), selected && selected[item.item_id] && selected[item.item_id].count ? _template_fun_array.push('                            <span class="minusicon" data-node="minusIcon"></span>                            <span class="select_count">', "undefined" == typeof selected[item.item_id].count ? "" : baidu.template._encodeHTML(selected[item.item_id].count), '</span>                            <span class="addicon" data-node="addIcon"></span>                        ') : _template_fun_array.push('                            <span class="minusicon v-hide" data-node="minusIcon"></span>                            <span class="select_count v-hide">0</span>                            <span class="addicon" data-node="addIcon"></span>                        '), _template_fun_array.push('                    </span>                    <span class="dish-cost">￥', "undefined" == typeof item.current_price ? "" : baidu.template._encodeHTML(item.current_price), "</span>                </span>            </div>            ");
                            _template_fun_array.push("            "), i == divider && _template_fun_array.push('                </div><div class="dish-c">            '), _template_fun_array.push("            "), i == len - 1 && _template_fun_array.push("                </div>            "), _template_fun_array.push("        ")
                        }
                        _template_fun_array.push("    ")
                    }
                    _template_fun_array.push("</div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        setMealGrpsTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push("");
                    for (var i = 0, len = data.length; len > i; i++) {
                        var item = data[i];
                        _template_fun_array.push('    <div class="group-item '), curIndex == i && _template_fun_array.push(" select"), _template_fun_array.push('" data-index="', "undefined" == typeof i ? "" : baidu.template._encodeHTML(i), '" data-grps-id="', "undefined" == typeof item.dish_group_id ? "" : baidu.template._encodeHTML(item.dish_group_id), '">        <span class="top-tip"></span>        '), _template_fun_array.push(parseInt(item.min_num) > 0 ? '            <p class="gtitle">必选</p>        ' : '            <p class="gtitle-not">可选</p>        '), _template_fun_array.push('        <p class="gname">', "undefined" == typeof item.name ? "" : baidu.template._encodeHTML(item.name), "</p>    </div>    "), len - 1 > i && _template_fun_array.push('        <div class="group-divider">            +        </div>    '), _template_fun_array.push("")
                    }
                    _template_fun_array.push('<span class="group-arrow" data-node="groupArrow"></span>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        setMealBotmTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<table width="100%">    <tr>        <td width="300">            套餐价：<span class="price" data-node="bottomprice" data-type="', "undefined" == typeof data.isFixedPrice ? "" : baidu.template._encodeHTML(data.isFixedPrice), '">￥'), 1 == parseInt(data.isFixedPrice) ? _template_fun_array.push("", "undefined" == typeof data.itemPrice ? "" : baidu.template._encodeHTML(data.itemPrice), "") : _template_fun_array.push("0"), _template_fun_array.push("</span>        </td>        <td>            "), data.itemStock < 50 && _template_fun_array.push("库存", "undefined" == typeof data.itemStock ? "" : baidu.template._encodeHTML(data.itemStock), "份"), _template_fun_array.push("            "), data.itemStock < 50 && data.minOrderNumber > 1 && _template_fun_array.push(" | "), _template_fun_array.push("            "), data.minOrderNumber > 1 && _template_fun_array.push("", "undefined" == typeof data.minOrderNumber ? "" : baidu.template._encodeHTML(data.minOrderNumber), "份起订"), _template_fun_array.push('        </td>        <td>            <div class="select-outer disable" data-node="selectouter">                <div class="select-con">                    <div class="select-inner">                        <strong class="minusfrcart" data-node="minusfrcart"></strong>                        <strong class="select_count" data-node="selectCount">', "undefined" == typeof data.minOrderNumber ? "" : baidu.template._encodeHTML(data.minOrderNumber), '</strong>                        <strong class="addtocart" data-node="addtocart"></strong>                    </div>                </div>            </div>        </td>        <td width="170" align="center"><span class="submit-btn disable"  data-node="submitBtn">加入购物车</span></td>    </tr></table>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        dishListClass = ".dishes-list",
        dishItemClass = ".dish-item",
        mulItemClass = "mutiple",
        grpItemClass = ".group-item",
        seboxItemCls = ".select-box",
        countItemCls = ".select_count",
        EventCenter, GlobalTips = require("waimai:static/utils/GlobalTips.js");
    $.extend(setMeal.prototype, {
        renderList: function(e) {
            var t = this.opt.$el;
            if (e && e.groups.length > 0) {
                var a = setMealTmpl();
                t.html(a), t.find("[data-node=setMeal-title]").html(setMealTitleTmpl({
                    data: e.basics
                })), t.find("[data-node=setMeal-content-groups]").html(setMealGrpsTmpl({
                    data: e.groups,
                    curIndex: this.opt.curGrp
                })), t.find("[data-node=setMeal-content-dishes]").html(setMealDishTmpl({
                    data: e.groups[this.opt.curGrp],
                    selected: {}
                })), t.find("[data-node=setMeal-bottom]").html(setMealBotmTmpl({
                    data: e.basics
                })), $(this).trigger("list.complete")
            }
        },
        getRealLeftNum: function() {},
        bindEvent: function() {
            var e = this,
                t = e.opt.$el;
            t.find("[data-node=setMeal-title]").on("click", function() {}), t.find("[data-node=setMeal-content-groups]").on("click", grpItemClass, function(a) {
                var n = $(a.currentTarget);
                e.switchGrps(n, t.find("[data-node=setMeal-content-groups]"))
            }), t.find("[data-node=setMeal-content-dishes]").on("click", "[data-node=mutipletitle]", "." + mulItemClass, function(e) {
                var t = $(e.currentTarget);
                t.parents(dishItemClass).toggleClass("selected")
            }), t.find("[data-node=setMeal-content-dishes]").on("click", "[data-node=sizeTable] .s-item", "." + mulItemClass, function(t) {
                var a = $(t.currentTarget);
                a.hasClass("sec") || (a.parents("tr").find(".s-item").removeClass("sec"), a.addClass("sec"), e.selectAttr(a), EventCenter.trigger("selectAttr"))
            }), t.find("[data-node=setMeal-bottom]").on("click", "[data-node]", function(t) {
                var a = $(t.currentTarget);
                e.handleBottomeClick(a)
            }), t.find("[data-node=setMeal-content-dishes]").on("click", "[data-node=addIcon]", function(t) {
                var a = $(t.currentTarget),
                    n = a.parents(dishListClass);
                n.hasClass("enough") ? GlobalTips.tip("已到达可选菜品上限") : a.hasClass("disable") && GlobalTips.tip("多规格菜品需要先选择规格"), e.addIconClick(a)
            }), t.find("[data-node=setMeal-content-dishes]").on("click", "[data-node=minusIcon]", function(t) {
                var a = $(t.currentTarget);
                e.minusIconClick(a)
            }), EventCenter.on("selectAttr", function() {
                e.refreshSelectMsg(), e.refreshBottom()
            }), EventCenter.on("addDish", function() {
                e.onAddDish()
            }), EventCenter.on("minusDish", function() {
                e.onMinusDish()
            }), EventCenter.on("switchGrps", function() {
                e.refreshSelectMsg()
            })
        },
        switchGrps: function(e, t) {
            var a = this,
                n = a.opt.$el,
                s = a.opt.data;
            t.find(grpItemClass).removeClass("select"), e.addClass("select"), a.opt.curGrp = e.data("index");
            var i = s.groups[a.opt.curGrp];
            n.find("[data-node=setMeal-content-dishes]").html(setMealDishTmpl({
                data: i,
                selected: a.opt.selectData[i.dish_group_id]
            })), a.setArrowPos(e), EventCenter.trigger("selectAttr")
        },
        setArrowPos: function(e) {
            var t = this,
                a = t.opt.$el,
                n = e.position(),
                s = a.find("[data-node=groupArrow]");
            s.css({
                left: n.left + e.width() / 2 - s.width() / 2 + "px"
            })
        },
        selectAttr: function(e) {
            var t = this,
                a = t.opt.data.groups[t.opt.curGrp],
                n = a.dish_group_id,
                s = t.opt.selectData[n] || {
                    total: {
                        count: 0
                    }
                },
                i = e.parents("[data-node=sizeTable]").find("[data-key]"),
                d = e.parents("[data-node=sizeTable]").find(".sec"),
                r = e.parents(dishItemClass).find("[data-node=dishCost]");
            if (d.length < i.length) return e.parents("[data-node=sizeTable]").find("[data-node=addIcon]").addClass("disable"), !1;
            e.parents("[data-node=sizeTable]").find("[data-node=addIcon]").removeClass("disable");
            var l = t.getItemInfo(e),
                o = l.id,
                p = [],
                u = [];
            s[o] = t.getItemSelectData(l, s[o]);
            for (var m = 0, _ = i.length; _ > m; m++)"1" == $(i[m]).data("maink") && (s[o].realId = $(i[m]).find(".sec").data("id") + "", s[o].realPrice = $(i[m]).find(".sec").data("price"), r.text("￥" + $(i[m]).find(".sec").data("price"))), p.push($(i[m]).find(".sec").data("id") + ""), u.push($(i[m]).find(".sec").data("name"));
            return s[o].features = p, s[o].featueNames = u, "addIcon" == e.data("node") ? s[o].count++ : "minusIcon" == e.data("node") && s[o].count--, t.opt.selectData[n] = s, !0
        },
        onAddDish: function() {
            var e = this;
            e.refreshTopTip(), e.refreshSelectMsg(), e.refreshBottom()
        },
        onMinusDish: function() {
            var e = this;
            e.refreshTopTip(), e.refreshSelectMsg(), e.refreshBottom()
        },
        refreshSelectMsg: function() {
            var e = this,
                t = e.opt.selectData,
                a = e.opt.data.groups,
                n = a[e.opt.curGrp],
                s = t[n.dish_group_id];
            s && s.total && parseInt(s.total.count) >= parseInt(n.max_num) ? e.opt.$el.find(dishListClass).addClass("enough") : e.opt.$el.find(dishListClass).removeClass("enough");
            var i = "&nbsp;";
            for (var d in s)"total" != d && s[d].count && (i += s[d].dname, s[d].featueNames && s[d].featueNames.length && (i += "_" + s[d].featueNames.join("_")), i += "*" + s[d].count + "、");
            e.opt.$el.find("[ data-node=selectmsg]").html(i)
        },
        refreshTopTip: function() {
            for (var e = this, t = e.opt.selectData, a = e.opt.data, n = 0, s = a.groups.length; s > n; n++) {
                var i = $("[data-grps-id=" + a.groups[n].dish_group_id + "]").find(".top-tip");
                if (t[a.groups[n].dish_group_id]) {
                    var d = t[a.groups[n].dish_group_id].total.count;
                    d && a.groups[n].min_num <= d && d <= a.groups[n].max_num ? i.addClass("ready").text(t[a.groups[n].dish_group_id].total.count).show() : d && t[a.groups[n].dish_group_id].total.count >= 0 ? i.removeClass("ready").text(t[a.groups[n].dish_group_id].total.count).show() : i.hide()
                }
            }
        },
        refreshBottom: function() {
            for (var e = this, t = e.opt.$el, a = t.find("[data-node=bottomprice]"), n = t.find("[data-node=selectouter]"), s = t.find("[data-node=submitBtn]"), i = e.opt.selectData, d = e.opt.data.groups, r = [], l = 0, o = 0, p = d.length; p > o; o++) parseInt(d[o].min_num) && r.push(i[d[o].dish_group_id] && i[d[o].dish_group_id].total.count >= d[o].min_num ? 1 : 0), 1 === Math.min.apply(null, r) ? (n.removeClass("disable"), s.removeClass("disable")) : (n.addClass("disable"), s.addClass("disable"));
            if (1 !== parseInt(a.data("type"))) {
                for (var u in i) {
                    var m = i[u];
                    if (m.total.count) for (var _ in m)"total" !== _ && m[_].count && (l += parseFloat(m[_].realPrice || m[_].price) * parseInt(m[_].count))
                }
                a.html("￥" + l.toFixed(2)), e.opt.selectBasic.price = l
            } else e.opt.selectBasic.price = e.opt.data.basics.itemPrice
        },
        refreshSelectArea: function(e, t, a) {
            var n = e.parent();
            t[a.id].count > 0 ? (n.find("[data-node=minusIcon]").removeClass("v-hide"), n.find(countItemCls).text(t[a.id].count).removeClass("v-hide")) : (e.parent().find(countItemCls).text(t[a.id].count).addClass("v-hide"), n.find("[data-node=minusIcon]").addClass("v-hide"))
        },
        addIconClick: function(e) {
            var t = this,
                a = t.opt.data.groups[t.opt.curGrp],
                n = parseInt(a.max_num),
                s = a.dish_group_id,
                i = t.opt.selectData[s] || {
                    total: {
                        count: 0
                    }
                },
                d = t.getItemInfo(e);
            if (i[d.id] = t.getItemSelectData(d, i[d.id]), e.parents(dishItemClass).hasClass(mulItemClass) && i.total.count < n) t.selectAttr(e) && i.total.count++;
            else {
                if (!(i.total.count < n)) return;
                i.total.count++, i[d.id].count++
            }
            t.refreshSelectArea(e, i, d), t.opt.selectData[s] = i, EventCenter.trigger("addDish")
        },
        getItemSelectData: function(e, t) {
            return t = t || {
                count: 0,
                dname: e.name,
                price: e.price
            }
        },
        getItemInfo: function(e) {
            var t = e.parents(dishItemClass),
                a = "";
            a = t.data("id") + "";
            var n = t.data("name"),
                s = t.data("price");
            return {
                id: a,
                name: n,
                price: s,
                count: 0
            }
        },
        minusIconClick: function(e) {
            var t = this,
                a = t.opt.data.groups[t.opt.curGrp],
                n = (parseInt(a.min_num), a.dish_group_id),
                s = t.opt.selectData[n] || {
                    total: {
                        count: 0
                    }
                },
                i = t.getItemInfo(e);
            if (s[i.id] = t.getItemSelectData(i, s[i.id]), e.parents(dishItemClass).hasClass(mulItemClass) && s[i.id].count >= 1) t.selectAttr(e) && s.total.count--;
            else {
                if (s[i.id].count <= 0) return void(s[i.id].count = 0);
                s.total.count--, s[i.id].count--
            }
            t.refreshSelectArea(e, s, i), t.opt.selectData[n] = s, EventCenter.trigger("minusDish")
        },
        handleBottomeClick: function(e) {
            var t = this,
                a = t.opt.data.basics,
                n = e.data("node"),
                s = t.opt.$el.find("[data-node=selectCount]"),
                i = parseInt(s.html()) || 0;
            "addtocart" === n ? i && i < a.itemStock ? s.html(++i) : i || s.html(a.minOrderNumber) : "minusfrcart" === n && s.html(i <= a.minOrderNumber ? 0 : --i), t.opt.data.basics.itemCount = i, "submitBtn" === n && !e.hasClass("disable") && t.submitSetMeal()
        },
        adjustDataStructure: function(e) {
            e.orignItemId = e.itemId, e.grpsInfo.basic.id = e.itemId, e.itemPrice = e.grpsInfo.basic.price, e.type = "append";
            var t = [],
                a = [],
                n = [];
            for (var s in e.grpsInfo.data) {
                var i = e.grpsInfo.data[s];
                t.push(s + "_p" + i.total.count);
                for (var d in i)"total" !== d && (a.push(d + "_p" + i[d].count), i[d].features && i[d].features.length && n.concat(i[d].features))
            }
            e.itemId = t.sort().join("__") + "___" + a.sort().join("__") + "___" + n.sort().join("__")
        },
        saveGrpsData: function(e) {
            e.grpsInfo && localStore.set("p" + e.itemId + "p", e.grpsInfo)
        },
        submitSetMeal: function() {
            var e = this,
                t = {};
            t = $.extend(t, e.opt.data.basics), t.grpsInfo = {
                basic: e.opt.selectBasic,
                data: e.opt.selectData
            }, e.adjustDataStructure(t), e.saveGrpsData(t), e.opt.onSubmitBtn(t)
        }
    }), module.exports = setMeal
});;
define("waimai:widget/common/ui/muticities/muti.js", function(require, exports, module) {
    function Muti() {
        this.$el = $("#muti-aois"), this.aois = {}
    }
    function getQueryString(e, t) {
        var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
            a = t.match(i);
        return null != a ? unescape(a[2]) : null
    }
    var CookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        citiesTpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="cities" data-node="cities">    '), maybe_city.name && _template_fun_array.push('    <div class="guess-city">        <dl>            <dt>猜你在</dt>            <dd>                <a data-node="nav_city" href="javascript:void(0);" data-cityid="', "undefined" == typeof maybe_city.code ? "" : baidu.template._encodeHTML(maybe_city.code), '" data-hasAoi="', "undefined" == typeof maybe_city.isHaveAoi ? "" : baidu.template._encodeHTML(maybe_city.isHaveAoi), '">', "undefined" == typeof maybe_city.name ? "" : baidu.template._encodeHTML(maybe_city.name), "</a>            </dd>        </dl>    </div>    "), _template_fun_array.push("    ");
                    for (var i in city_list) {
                        _template_fun_array.push('    <dl class="cities-group">        <dt>            ', "undefined" == typeof i ? "" : baidu.template._encodeHTML(i), "        </dt>        <dd>            <ul>            ");
                        for (var j in city_list[i]) _template_fun_array.push('                <li>                    <a data-node="nav_city" href="javascript:void(0);" data-cityid="', "undefined" == typeof city_list[i][j].code ? "" : baidu.template._encodeHTML(city_list[i][j].code), '" data-hasAoi="', "undefined" == typeof city_list[i][j].isHaveAoi ? "" : baidu.template._encodeHTML(city_list[i][j].isHaveAoi), '" title="', "undefined" == typeof city_list[i][j].name ? "" : baidu.template._encodeHTML(city_list[i][j].name), '">                        ', "undefined" == typeof city_list[i][j].name ? "" : baidu.template._encodeHTML(city_list[i][j].name), "                    </a>                </li>            ");
                        _template_fun_array.push("            </ul>        </dd>    </dl>    ")
                    }
                    _template_fun_array.push("</div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        aoisTpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="aois" data-node="aois">    ');
                    for (var i in aois) {
                        _template_fun_array.push('    <dl class="aoi-group">        <dt>', "undefined" == typeof i ? "" : baidu.template._encodeHTML(i), "</dt>        <dd>            <ul>            ");
                        for (var j in aois[i]) _template_fun_array.push('                <li>                    <a title="', "undefined" == typeof aois[i][j].name ? "" : baidu.template._encodeHTML(aois[i][j].name), '" data-node="nav_aoi" href="/waimai?qt=shoplist&lat=', "undefined" == typeof aois[i][j].lat ? "" : baidu.template._encodeHTML(aois[i][j].lat), "&lng=", "undefined" == typeof aois[i][j].lng ? "" : baidu.template._encodeHTML(aois[i][j].lng), "&address=", "undefined" == typeof aois[i][j].name ? "" : baidu.template._encodeHTML(aois[i][j].name), "&city_id=", "undefined" == typeof city_id ? "" : baidu.template._encodeHTML(city_id), '">                        ', "undefined" == typeof aois[i][j].name ? "" : baidu.template._encodeHTML(aois[i][j].name), "                    </a>                </li>            ");
                        _template_fun_array.push("            </ul>        </dd>    </dl>    ")
                    }
                    _template_fun_array.push("</div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0];
    $.extend(Muti.prototype, {
        init: function() {
            var e = this;
            e.initEvents()
        },
        initCities: function() {
            var e = this;
            e.showCities()
        },
        initEvents: function() {
            var e = this;
            e.$el.on("click", function(e) {
                e.stopPropagation()
            }), e.$el.delegate('[data-node="nav_city"]', "click", function(e) {
                var t = $(e.currentTarget),
                    i = t.data("cityid"),
                    a = $.trim(t.html()),
                    n = t.data("hasaoi"),
                    o = {
                        name: a,
                        code: i,
                        hasaoi: n
                    };
                CookieDataCenter.setCity(o), listener.trigger("muticities", "selected", o), e.stopPropagation()
            }), e.$el.delegate('[data-node="nav_aoi"]', "click", function(e) {
                var t = $(e.currentTarget),
                    i = $.trim(t.html()),
                    a = /(\/shopinterface)|(\/activity)/;
                if (a.test(window.location.pathname)) {
                    var n = getQueryString("lng", t.attr("href")),
                        o = getQueryString("lat", t.attr("href")),
                        d = getQueryString("address", t.attr("href"));
                    return CookieDataCenter.setAddr({
                        lng: n,
                        lat: o,
                        address: d
                    }), window.location.reload(), !1
                }
                listener.trigger("mutiaois", "selected", {
                    aoiname: i
                }), e.stopPropagation()
            }), listener.on("city", "select", function() {
                e.hide(), e.showCities(), listener.trigger("muticities", "show")
            }), listener.on("city", "hide", function() {
                e.hide()
            }), listener.on("city", "hasaoi", function(t, i) {
                e.showAoi(i)
            })
        },
        showCities: function() {
            var e = this;
            return e.cities ? void e._htmlCities(e.cities) : void $.ajax({
                url: "/waimai?qt=getcitylist&format=1",
                data: {
                    t: (new Date).getTime()
                },
                dataType: "json",
                beforeSend: function() {
                    e.$el.empty().addClass("loading").show()
                },
                success: function(t) {
                    if (t.result) {
                        var i = t.result;
                        e.cities = i, setTimeout(function() {
                            e._htmlCities(i)
                        }, 0)
                    }
                },
                error: function() {}
            })
        },
        _htmlCities: function(e) {
            var t = this,
                i = citiesTpl(e);
            t.$el.removeClass("loading").html(i).show()
        },
        _htmlAois: function(e) {
            var t = this,
                i = aoisTpl(e);
            t.$el.html(i).removeClass("loading").show(), listener.trigger("mask", "show")
        },
        hide: function() {
            var e = this;
            e.$el.hide().empty()
        },
        showAoi: function(e) {
            var t = this;
            return t.aois[e.code] ? void t._htmlAois(t.aois[e.code]) : void $.ajax({
                url: "/waimai?qt=getcitylist",
                data: {
                    city_id: e.code,
                    t: (new Date).getTime()
                },
                dataType: "json",
                beforeSend: function() {},
                success: function(i) {
                    if (i.result) {
                        var a = i.result;
                        t.aois[e.code] = a, setTimeout(function() {
                            t._htmlAois(a)
                        }, 0)
                    }
                },
                error: function() {}
            })
        }
    }), module.exports = new Muti
});;
define("waimai:widget/common/ui/pagination/core.js", function(e, t, n) {
    var a = e("waimai:static/utils/oop-base/base/base.js"),
        i = function(e) {
            return /^\d+$/.test(e)
        },
        r = a.extend({
            attrs: {
                total: {
                    value: 0,
                    setter: function(e) {
                        return i(e) ? parseInt(e, 10) : 0
                    }
                },
                pageSize: {
                    value: 20,
                    setter: function(e) {
                        return i(e) ? parseInt(e, 10) : 20
                    }
                },
                curPage: {
                    value: 1,
                    setter: function(e) {
                        return i(e) ? parseInt(e, 10) : 1
                    }
                },
                totalPage: {
                    readonly: !0,
                    getter: function() {
                        return Math.ceil(this.get("total") / this.get("pageSize"))
                    }
                },
                rangeLength: {
                    value: 10,
                    setter: function(e) {
                        return i(e) ? parseInt(e, 10) : 10
                    }
                }
            },
            initialize: function(e) {
                r.superclass.initialize.call(this, e)
            },
            getRangePage: function(e) {
                var t = this,
                    n = t.get("curPage"),
                    a = t.get("rangeLength") - 1,
                    i = Math.floor(a / 2),
                    r = Math.ceil(a / 2),
                    g = t.get("totalPage"),
                    o = {
                        begin: 1,
                        end: 1
                    };
                return e ? (o.begin = e - i, o.end = e + r) : (o.begin = n - i, o.end = n + r), o.begin < 1 ? (o.end = o.end - o.begin + 1, o.begin = 1, o.end > g && (o.end = g)) : o.end > g && (o.begin += g - o.end, o.end = g, o.begin < 1 && (o.begin = 1)), o
            },
            goPage: function(e) {
                var t = this,
                    n = t.get("totalPage");
                return e >= 1 && n >= e ? (t.set("curPage", e), this.trigger("page", {
                    page: e
                }), !0) : !1
            },
            updateTotal: function(e) {
                var t = this,
                    n = t.get("total");
                return 0 > e || e === n || "[object Number]" !== toString.call(e) ? !1 : (t.set("total", e), t.render(), !0)
            }
        });
    n.exports = r
});;
define("waimai:widget/common/ui/pagination/standard/standard.js", function(require, exports, module) {
    var PaginationCore = require("waimai:widget/common/ui/pagination/core.js"),
        standardTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    if (eval(_template_varName), _template_fun_array.push('<div class="widget-pagination-standard clearfix"><span class="pager-wrap"><button class="btn prev-trigger" data-node="prev_trigger"><</button><ul class="pagination clearfix" data-node="pager_wrap"></ul><button class="btn next-trigger" data-node="next_trigger">></button></span><span class="info-wrap">'), showTotal && _template_fun_array.push('<span class="total-wrap" data-node="total_wrap">共 ', "undefined" == typeof total ? "" : baidu.template._encodeHTML(total), " 条</span>"), _template_fun_array.push(""), showSelectPageSize) {
                        _template_fun_array.push('<span class="page-size-select">每页显示<select class="form-control" data-node="page_size_select">');
                        for (var i = 0; i < pageSizeArr.length; i++) _template_fun_array.push('<option value="', "undefined" == typeof pageSizeArr[i] ? "" : baidu.template._encodeHTML(pageSizeArr[i]), '" '), pageSize == pageSizeArr[i] && _template_fun_array.push("selected"), _template_fun_array.push(">", "undefined" == typeof pageSizeArr[i] ? "" : baidu.template._encodeHTML(pageSizeArr[i]), "</option>");
                        _template_fun_array.push("</select></span>")
                    }
                    _template_fun_array.push("</span></div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        moreItemTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<li><a href="javascript:void(0)" class="more">...</a></li>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        itemTmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<li class="'), active && _template_fun_array.push("active"), _template_fun_array.push('"><a href="javascript:void(0)">', "undefined" == typeof num ? "" : baidu.template._encodeHTML(num), "</a></li>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        TRUE = !0,
        FALSE = !1,
        hiddenCls = "hidden",
        disabledCls = "disabled",
        PAGE_SIZE_ARR = [10, 20, 40, 80, 100],
        StandardPagination = PaginationCore.extend({
            attrs: {
                showTotal: TRUE,
                showSelectPageSize: TRUE,
                $container: $("body")
            },
            initialize: function(e) {
                var a = this;
                StandardPagination.superclass.initialize.call(a, e), a.render()
            },
            render: function() {
                var e = this,
                    a = e.get("pageSize"),
                    t = e.get("showTotal"),
                    n = PAGE_SIZE_ARR,
                    r = e.get("showSelectPageSize"); - 1 === $.inArray(a, n) && (n = [a].concat(n)), e.$el && e.$el.remove(), e.$el = $(standardTmpl({
                    showTotal: t,
                    showSelectPageSize: r,
                    total: e.get("total"),
                    pageSize: a,
                    pageSizeArr: n
                })), e.get("$container").append(e.$el), e.$pagerWrap = e.$el.find("[data-node=pager_wrap]"), e.$nextTrigger = e.$el.find("[data-node=next_trigger]"), e.$prevTrigger = e.$el.find("[data-node=prev_trigger]"), e.$pageSizeSelect = e.$el.find("[data-node=page_size_select]"), e.$totalWrap = e.$el.find("[data-node=total_wrap]"), e.renderPager(), e.bindEvent(), e.updateStatus()
            },
            updateStatus: function() {
                var e, a = this,
                    t = "active",
                    n = a.get("curPage"),
                    r = a.get("totalPage");
                a.$nextTrigger.toggleClass(disabledCls, n >= r), a.$prevTrigger.toggleClass(disabledCls, 1 >= n), a.$pagerWrap.children().each(function(a, r) {
                    e = $(r), Number(e.text()) === n ? e.addClass(t) : e.removeClass(t)
                })
            },
            goPage: function(e) {
                var a = this,
                    t = 2;
                return StandardPagination.superclass.goPage.call(this, e) ? ((a.curPageRange.begin > 1 && e - t < a.curPageRange.begin || a.curPageRange.end < a.get("totalPage") && e + t > a.curPageRange.end) && a.renderPager(), a.updateStatus(), TRUE) : FALSE
            },
            bindEvent: function() {
                var e, a, t = this;
                t.$el.on("click", "a", function(n) {
                    a = $(n.currentTarget), e = parseInt(a.text(), 10), a.hasClass("more") || t.goPage(e)
                }), t.$prevTrigger.on("click", function(e) {
                    $(e.currentTarget).hasClass(disabledCls) || t.goPage(t.get("curPage") - 1)
                }), t.$nextTrigger.on("click", function(e) {
                    $(e.currentTarget).hasClass(disabledCls) || t.goPage(t.get("curPage") + 1)
                }), t.$pageSizeSelect.on("change", function() {
                    t.trigger("changePageSize", {
                        pageSize: t.$pageSizeSelect.val()
                    })
                })
            },
            oldupdateTotal: function(e) {
                var a = this,
                    t = a.get("total");
                return 0 > e || e === t || "[object Number]" !== toString.call(e) ? !0 : (a.set("total", e), a.renderPager(), void a.$totalWrap.html("共" + e + "条"))
            },
            renderPager: function() {
                var e = this,
                    a = $(document.createDocumentFragment()),
                    t = e.getRangePage(),
                    n = e.get("totalPage"),
                    r = e.get("curPage");
                e.$pagerWrap.empty(), t.begin > 1 && (a.append(itemTmpl({
                    num: 1,
                    active: FALSE
                })), a.append(moreItemTmpl()));
                for (var i = t.begin; i <= t.end; i++) a.append(itemTmpl({
                    num: i,
                    active: i === r
                }));
                t.end < n && (a.append(moreItemTmpl()), a.append(itemTmpl({
                    num: n,
                    active: FALSE
                }))), e.$pagerWrap.append(a), e.curPageRange = t
            },
            destroy: function() {
                var e = this;
                e.$el.remove()
            }
        });
    module.exports = StandardPagination
});;
define("waimai:widget/common/ui/shopcard/shopcard.js", function(require, exports, module) {
    function ShopCard(e) {
        this.opt = $.extend(_opt, e), this.bindEvent(), this.renderList(this.opt.data, this.opt.display_new_shop, this.opt.server_time, this.opt.city_info)
    }
    var shopCardTmpl = [function(_template_object) {
        var _template_fun_array = [],
            fn = function(__data__) {
                var _template_varName = "";
                for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                eval(_template_varName), _template_fun_array.push("");
                var __default_src = "https://static.waimai.baidu.com/static/waimai/images/shopcard_loading_84603da.png";
                _template_fun_array.push("");
                var certificated_icon = "https://static.waimai.baidu.com/static/forpc/certificated_s.png";
                city_info && 333 == city_info.city_id && (certificated_icon = "https://static.waimai.baidu.com/static/forpc/certificated_jinhua.png");
                for (var i = 0, len = data.length; len > i; i++) {
                    var shop = data[i];
                    if ($(".data" + shop.release_id).length <= 0) {
                        _template_fun_array.push('    <li class="list-item shopcard data', "undefined" == typeof shop.release_id ? "" : baidu.template._encodeHTML(shop.release_id), " "), _template_fun_array.push(0 == shop.is_online ? " offline " : " online "), _template_fun_array.push('" ismarket="', "undefined" == typeof(shop.is_store || 0) ? "" : baidu.template._encodeHTML(shop.is_store || 0), '" data="', "undefined" == typeof shop.release_id ? "" : baidu.template._encodeHTML(shop.release_id), '" >        '), 0 == shop.is_online && (_template_fun_array.push("            "), 1 == shop.bussiness_status ? _template_fun_array.push('                <figure class="shop-rest-icon">                </figure>            ') : 4 == shop.bussiness_status && _template_fun_array.push('                <figure class="shop-closed-icon">                </figure>            '), _template_fun_array.push("       ")), _template_fun_array.push("");
                        var is_new = shop.is_new;
                        _template_fun_array.push(""), display_new_shop && 0 != shop.is_online && (_template_fun_array.push(""), is_new && _template_fun_array.push('<div class="newshop"><span>新店</span></div>'), _template_fun_array.push("")), _template_fun_array.push('        <div class="shopimg">            ');
                        var url = shop.shop_logo ? shop.shop_logo : shop.logo_url;
                        _template_fun_array.push("");
                        var is_collected = shop.is_collected;
                        _template_fun_array.push("            ");
                        var imgDomain = url.match(/http:\/\/([^\/]+)/i);
                        _template_fun_array.push("            "), url && "http://img.waimai.baidu.com" === imgDomain[0] ? _template_fun_array.push('                <img width="228" height="140" data-src="', "undefined" == typeof url.replace("http://img.waimai.baidu.com", "https://img.waimai.baidu.com") ? "" : baidu.template._encodeHTML(url.replace("http://img.waimai.baidu.com", "https://img.waimai.baidu.com")), '@s_0,w_228,h_140,q_100" alt="', "undefined" == typeof shop.shop_name ? "" : baidu.template._encodeHTML(shop.shop_name), '" onerror="this.src=&#39;', "undefined" == typeof __default_src ? "" : baidu.template._encodeHTML(__default_src), '&#39;" src="', "undefined" == typeof shop.logo_url.replace("http://img.waimai.baidu.com", "https://img.waimai.baidu.com") ? "" : baidu.template._encodeHTML(shop.logo_url.replace("http://img.waimai.baidu.com", "https://img.waimai.baidu.com")), '"/>            ') : url && "http://img.waimai.bdimg.com" === imgDomain[0] ? _template_fun_array.push('                <img width="228" height="140" data-src="', "undefined" == typeof url.replace("http://img.waimai.bdimg.com", "https://img.waimai.baidu.com") ? "" : baidu.template._encodeHTML(url.replace("http://img.waimai.bdimg.com", "https://img.waimai.baidu.com")), '@s_0,w_228,h_140,q_100" alt="', "undefined" == typeof shop.shop_name ? "" : baidu.template._encodeHTML(shop.shop_name), '" onerror="this.src=&#39;', "undefined" == typeof __default_src ? "" : baidu.template._encodeHTML(__default_src), '&#39;" src="', "undefined" == typeof shop.logo_url.replace("http://img.waimai.bdimg.com", "https://img.waimai.baidu.com") ? "" : baidu.template._encodeHTML(shop.logo_url.replace("http://img.waimai.bdimg.com", "https://img.waimai.baidu.com")), '"/>            ') : _template_fun_array.push('                <img width="228" height="140" src="', baidu.template._encodeHTML("https://static.waimai.baidu.com/static/waimai/images/shopcard_default_bg_7236c9d.png"), '"/>            '), _template_fun_array.push(""), is_collected && _template_fun_array.push('<div class="collected">&nbsp; </div>'), _template_fun_array.push("            "), shop.start_time && (_template_fun_array.push('                <div class="shopdesc">'), 2 == shop.bussiness_status ? _template_fun_array.push("<span>接受预订&nbsp;</span>", "undefined" == typeof shop.start_time ? "" : baidu.template._encodeHTML(shop.start_time), "开始配送") : 3 == shop.bussiness_status && _template_fun_array.push("", "undefined" == typeof shop.start_time ? "" : baidu.template._encodeHTML(shop.start_time), "开始营业                "), _template_fun_array.push("</div>            ")), _template_fun_array.push("            "), shop.advance_need_order_day > 0 && 5 == shop.bussiness_status && _template_fun_array.push('            <div class="reserve">                <span class="reserve-bg">预定提示</span>                本商户需提前', "undefined" == typeof shop.advance_need_order_day ? "" : baidu.template._encodeHTML(shop.advance_need_order_day), "天预定            </div>            "), _template_fun_array.push('        </div>        <div class="title" title="', "undefined" == typeof shop.shop_name ? "" : baidu.template._encodeHTML(shop.shop_name), '">            '), shop.shop_name && _template_fun_array.push("", "undefined" == typeof(shop.shop_name.length <= 11 ? shop.shop_name : shop.shop_name.slice(0, 11) + "...") ? "" : baidu.template._encodeHTML(shop.shop_name.length <= 11 ? shop.shop_name : shop.shop_name.slice(0, 11) + "..."), ""), _template_fun_array.push(""), shop.is_certificated && _template_fun_array.push('<span class="cert-icon"><img src="', "undefined" == typeof certificated_icon ? "" : baidu.template._encodeHTML(certificated_icon), '"/></span>'), _template_fun_array.push("        </div>        ");
                        var score = shop.comment_num ? shop.comment_num >= 10 ? shop.average_score : 0 : shop.average_score;
                        _template_fun_array.push('        <div class="info s-info clearfix">            <div class="f-col f-star star-control" data-star="', "undefined" == typeof score ? "" : baidu.template._encodeHTML(score), '">                <span class="rate">                    <span class="rate-inner" style="width:', "undefined" == typeof(14.4 * score) ? "" : baidu.template._encodeHTML(14.4 * score), 'px"></span>                </span>            </div>            <div class="f-col f-sale">                '), 0 == shop.saled_month || shop.saled_month ? _template_fun_array.push("                月售<span>", "undefined" == typeof shop.saled_month ? "" : baidu.template._encodeHTML(shop.saled_month), "</span>份                ") : _template_fun_array.push("                已售<span>", "undefined" == typeof shop.saled ? "" : baidu.template._encodeHTML(shop.saled), "</span>份                "), _template_fun_array.push('            </div>        </div>        <div class="info f-info clearfix">            <div class="f-col f-price">                <span class="item-label">起送:</span>                <span class="item-value">&#165;', "undefined" == typeof shop.takeout_price ? "" : baidu.template._encodeHTML(shop.takeout_price), '</span>            </div>            <div class="f-col f-cost">                <span class="item-label">配送:</span>                <span class="item-value">                    &#165;', "undefined" == typeof shop.takeout_cost ? "" : baidu.template._encodeHTML(shop.takeout_cost), '                </span>            </div>            <div class="f-col f-time">                    '), 0 == shop.advance_need_order_day && (_template_fun_array.push("                        "), shop.delivery_time >= 1440 ? _template_fun_array.push("                            ", "undefined" == typeof Math.floor(shop.delivery_time / 1440) ? "" : baidu.template._encodeHTML(Math.floor(shop.delivery_time / 1440)), "天                        ") : shop.delivery_time >= 60 ? (_template_fun_array.push("                            "), shop.delivery_time % 60 == 0 ? _template_fun_array.push("                                ", "undefined" == typeof(shop.delivery_time / 60) ? "" : baidu.template._encodeHTML(shop.delivery_time / 60), "小时                            ") : _template_fun_array.push("                                ", "undefined" == typeof Math.floor(shop.delivery_time / 60) ? "" : baidu.template._encodeHTML(Math.floor(shop.delivery_time / 60)), "小时", "undefined" == typeof(shop.delivery_time % 60) ? "" : baidu.template._encodeHTML(shop.delivery_time % 60), "分钟                            "), _template_fun_array.push("                        ")) : _template_fun_array.push("                            ", "undefined" == typeof shop.delivery_time ? "" : baidu.template._encodeHTML(shop.delivery_time), "分钟                        "), _template_fun_array.push("                    ")), _template_fun_array.push('            </div>        </div>        <div class="feature">            ');
                        for (var j = 0, welfareLen = shop.welfare_info.length; welfareLen > j; j++) {
                            var welfareItem = shop.welfare_info[j];
                            _template_fun_array.push('                <em class="', "undefined" == typeof welfareItem.type ? "" : baidu.template._encodeHTML(welfareItem.type), '-min-icon premium-icon" data-msg="', "undefined" == typeof welfareItem.msg ? "" : baidu.template._encodeHTML(welfareItem.msg), '"><img src="https://static.waimai.baidu.com/static/forpc/', "undefined" == typeof welfareItem.type ? "" : baidu.template._encodeHTML(welfareItem.type), '_s.png" /></em>            ')
                        }
                        if (_template_fun_array.push('        </div>        <div class="overlay">            <div class="o-con">                <div class="shop-title">                    <p>', "undefined" == typeof shop.shop_name ? "" : baidu.template._encodeHTML(shop.shop_name), ""), shop.is_certificated && _template_fun_array.push('<span class="cert-icon"><img src="', "undefined" == typeof certificated_icon ? "" : baidu.template._encodeHTML(certificated_icon), '"/></span>'), _template_fun_array.push("</p>                    "), shop.is_certificated && _template_fun_array.push('<p class="cert-pah">支持查看政府认可的资质证照</p>'), _template_fun_array.push("                </div>                "), shop.welfare_info.length) {
                            _template_fun_array.push('                <div class="shop-feature">                    <ul>                        ');
                            for (var j = 0, welfareLen = shop.welfare_info.length; welfareLen > j; j++) {
                                var welfareItem = shop.welfare_info[j];
                                _template_fun_array.push('                            <li>                                <em class="', "undefined" == typeof welfareItem.type ? "" : baidu.template._encodeHTML(welfareItem.type), '-min-icon premium-icon"><img src="https://static.waimai.baidu.com/static/forpc/', "undefined" == typeof welfareItem.type ? "" : baidu.template._encodeHTML(welfareItem.type), '_s.png"  /></em>                                <p '), "pay" == welfareItem.type && _template_fun_array.push(' style="width:150px;"'), _template_fun_array.push(">", "undefined" == typeof welfareItem.msg ? "" : baidu.template._encodeHTML(welfareItem.msg), "</p>                            </li>                        ")
                            }
                            _template_fun_array.push("                    </ul>                </div>                ")
                        }
                        _template_fun_array.push('                <div class="shop-notice">                    <h2>商家公告</h2>                    <p>                        '), shop.shop_announcement ? _template_fun_array.push("                            ", "undefined" == typeof shop.shop_announcement ? "" : shop.shop_announcement, "                        ") : _template_fun_array.push("                            本店欢迎您下单，用餐高峰请提前下单，谢谢！                        "), _template_fun_array.push('                    </p>                </div>            </div>            <div class="o-arrow"></div>        </div>    </li>')
                    }
                }
                _template_fun_array.push(""), _template_varName = null
            }(_template_object);
        return fn = null, _template_fun_array.join("")
    }][0],
        HOST_REG = /baiduwaimai\.com|\.cn/,
        REAL_HOST_REG = /waimai\.baidu\.com/,
        LOCA_HREF = window.location.href,
        lawControl = {
            el: "#shop-list",
            init: function(e) {
                this.$el = $(this.el), this.data = e, this.handle()
            },
            isHost: function(e) {
                return function(a) {
                    return a.test(e)
                }
            },
            handle: function() {
                var e = this.data,
                    a = this.isHost(e.localHref);
                (a(e.hostReg) || !a(e.relealHostReg)) && this.$el.addClass(e.hideClass)
            }
        };
    lawControl.init({
        hostReg: HOST_REG,
        localHref: LOCA_HREF,
        relealHostReg: REAL_HOST_REG,
        hideClass: "law-certificate-director"
    });
    var _opt = {
        data: [],
        $el: null,
        listComplete: null
    };
    $.extend(ShopCard.prototype, {
        renderList: function(e, a, t, s) {
            var i = this.opt.$el;
            if (e && e.length > 0) {
                var p = shopCardTmpl({
                    data: e,
                    display_new_shop: a,
                    server_time: t,
                    city_info: s
                });
                "ul" == i.get(0).tagName.toLowerCase() ? (i.addClass("shopcards-list"), i.append(p)) : i.find("ul.shopcards-list").length ? i.find("ul.shopcards-list").append(p) : (i.append("<ul class='shopcards-list'></ul>"), i.find("ul.shopcards-list").append(p)), $(this).trigger("list.complete")
            }
        },
        bindEvent: function() {
            var e = this.opt.$el;
            e.off("click", "li.list-item"), e.on("click", "li.list-item", function() {
                var e = $(this).attr("data"),
                    a = $(this).attr("ismarket");
                a && 1 == a ? (addNStat({
                    da_src: "ShopListBk.ShopMarketItemBtn",
                    da_act: "click",
                    da_trd: "waimai"
                }), window.open("/shopui/upc/shopview?shop_id=" + e)) : (addNStat({
                    da_src: "ShopListBk.ShopItemBtn",
                    da_act: "click",
                    da_trd: "waimai"
                }), window.open("/waimai/shop/" + e))
            }), $(this).on("list.complete", function() {
                this.opt.listComplete && this.opt.listComplete(this.opt)
            })
        }
    }), module.exports = ShopCard
});;
define("waimai:widget/common/userinfo/comp/registerDialog.js", function(require, exports, module) {
    var dialogTMPL = [function(_template_object) {
        var _template_fun_array = [],
            fn = function(__data__) {
                var _template_varName = "";
                for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                eval(_template_varName), _template_fun_array.push('<div class="logout-user-info-register-dialog-container fade">    <div class="register-dialog-content">        <div class="dialog-title">            <a class="dialog-close" data-node="registerDialogClose"></a>            <span class="title" data-node="title">', "undefined" == typeof data.title ? "" : baidu.template._encodeHTML(data.title), '</span>        </div>        <div class="dialog-body pass-form-container">            <div class="pass-form-item">                <label class="pass-label">手机号</label>                <input type="text" class="pass-text-input pass-text-input-phone" maxlength="11" autocomplete="off"                    placeholder="可用于登录和找回密码" >                <span class="pass-text-errmsg pass-text-errmsg-related"></span>            </div>            <div class="pass-form-item">                <label class="pass-label">密码</label>                <input type="password" class="pass-text-input  pass-text-input-password"                    placeholder="密码" autocomplete="off" >                <span class="pass-text-errmsg pass-text-errmsg-related"></span>            </div>            <div class="pass-form-item">                <label class="pass-label">确认密码</label>                <input type="password" class="pass-text-input  pass-text-input-repassword"                    placeholder="确认密码" autocomplete="off">                <span class="pass-text-errmsg pass-text-errmsg-related"></span>            </div>            <div class="pass-form-item">                <label class="pass-label pass-place"></label>                <span class="pass-explain" data-node="passExplain">VIP注册采用会员收费方式 会员费20元</span>            </div>            <div class="pass-form-item">                <label class="pass-label pass-place"></label>                <input type="button" class="pass-button pass-button-register-pay"                    value="注册并交费" data-node="passButtonRegisterPay" data-normal="false">            </div>            <div class="pass-form-item">                <label class="pass-label pass-place"></label>                <div class="pass-text-input pass-bottom-text">                    <a class="pass-normal-register" href="javascript:;" data-node="normalRegisterChange">普通用户注册</a>                </div>            </div>        </div>        <div class="dialog-bottom">        </div>    </div></div>'), _template_varName = null
            }(_template_object);
        return fn = null, _template_fun_array.join("")
    }][0];
    window.cookie = require("wcommon:static/util/Cookie.js");
    var defaultSettings = {
        createId: "dialog-created-" + 100 * Math.random()
    },
        createdJson = {},
        regs = {
            isTel: /^1[3|4|5|7|8]\d{9}$/
        },
        validStragey = {
            noEmpty: function(t) {
                return t ? !0 : void 0
            },
            isTel: function(t) {
                return regs.isTel.test(t) ? !0 : void 0
            },
            isEqual: function(t, e) {
                return t === e ? !0 : void 0
            }
        },
        Valid = function() {
            this.stack = []
        };
    Valid.prototype = {
        constructor: Valid,
        add: function() {
            var t = [].slice.call(arguments);
            return this.stack.push(t), this
        },
        check: function() {
            var t = this.stack.length;
            if (t) {
                for (var e, a, s = 0; t > s; s++) {
                    var i = this.stack[s],
                        o = i[0],
                        l = validStragey[i[1]],
                        n = i[2],
                        r = i.splice(3);
                    if (!l.apply(this, r)) {
                        a = o, e = n;
                        break
                    }
                }
                return this.clear(), e ? {
                    $el: a,
                    msg: e
                } : void 0
            }
        },
        clear: function() {
            return this.stack = [], this
        }
    };
    var valid = new Valid,
        NORMAL_TEXT = {
            title: "百度外卖账号注册",
            passExplain: "",
            passButtonRegisterPay: "注册并登录",
            normalRegisterChange: "vip用户注册"
        },
        VIP_TEXT = {
            title: "百度外卖VIP账号注册",
            passExplain: "",
            passButtonRegisterPay: "注册并交费",
            normalRegisterChange: "普通用户注册"
        },
        RegisterDialog = {
            urls: {
                loginPay: "/pay/loginpay"
            },
            channels: {},
            events: {
                "click [data-node=registerDialogClose]": "hideDialog",
                "click [data-node=passButtonRegisterPay]": "registerSubmit",
                "click [data-node=normalRegisterChange]": "registerChangeHandler",
                "blur .pass-text-input": "inputBlur"
            },
            init: function(t) {
                return this.cfg = this.cfg || {}, $.extend(this.cfg, defaultSettings, t), createdJson[this.cfg.createId] ? (this.show(), this) : (createdJson[this.cfg.createId] = !0, this.render(t), this.initDom(), void this.show())
            },
            show: function(t) {
                this.$el.show(), this.$el[0].offsetWidth, this.$el.addClass("in"), this.$el.trigger("show"), t && t.call(this)
            },
            createMask: function() {},
            removeMask: function() {},
            hide: function(t) {
                var e = this;
                this.$el.removeClass("in"), this.$el.trigger("hide"), setTimeout(function() {
                    e.$el.hide()
                }, 300), t && t.call(this)
            },
            hideDialog: function() {
                this.hide()
            },
            registerSubmit: function(t) {
                var e = this.$dom.$phone,
                    a = this.$dom.$password,
                    s = this.$dom.$rePassword,
                    i = ($(t.currentTarget), e.val()),
                    o = a.val(),
                    l = s.val(),
                    n = valid.add(e, "noEmpty", "手机号不能为空", i).add(e, "isTel", "请输入11位手机号", i).add(a, "noEmpty", "密码不能为空", o).add(s, "noEmpty", "确认密码不能为空", l).add(s, "isEqual", "两次密码输入不一致", o, l).check();
                n ? $.data(n.$el, "$related").text(n.msg).show().css("opacity", "1") : (this.setCookie(), this.setLoginState({
                    phoneValue: i
                }))
            },
            setCookie: function() {
                window.cookie.set("directorGeneralLogin", !0, {
                    path: "/",
                    expires: 2592e6
                })
            },
            setLoginState: function(t) {
                var e = t.phoneValue;
                this.vipRegister ? this.goToPay({
                    phoneValue: e
                }) : ($("#logout_user_info .logout_info").html("<li><a>已登录</a></li>"), this.hide())
            },
            vipRegister: !0,
            registerChangeHandler: function() {
                this.vipRegister = !this.vipRegister;
                var t = this.vipRegister;
                t ? this.vipStateChange() : this.normlStateChange()
            },
            vipStateChange: function() {
                this.$dom.$title.text(VIP_TEXT.title), this.$dom.$passExplain.parents(".pass-form-item").show(), this.$dom.$passButtonRegisterPay.val(VIP_TEXT.passButtonRegisterPay), this.$dom.$normalRegisterChange.text(VIP_TEXT.normalRegisterChange)
            },
            normlStateChange: function() {
                this.$dom.$title.text(NORMAL_TEXT.title), this.$dom.$passExplain.parents(".pass-form-item").hide(), this.$dom.$passButtonRegisterPay.val(NORMAL_TEXT.passButtonRegisterPay), this.$dom.$normalRegisterChange.text(NORMAL_TEXT.normalRegisterChange)
            },
            inputBlur: function(t) {
                var e = $(t.currentTarget);
                this.setValidRelated([e]), $.data(e, "$related").css("opacity", 0).hide().text("")
            },
            goToPay: function(t) {
                var e = {
                    user_phone: t.phoneValue,
                    total_amount: 2e3,
                    order_id: 1,
                    situation: "login",
                    pay_supplier: 2,
                    shop_name: "登录支付活动",
                    channel_from: "pc",
                    pay_application: 99
                };
                $.ajax({
                    url: this.urls.loginPay,
                    type: "GET",
                    dataType: "JSON",
                    data: e
                }).done(function(t) {
                    0 === t.error_no ? window.location.href = t.result.pay_url : alert(t.error_msg)
                }).fail(function() {})
            },
            render: function(t) {
                var e = dialogTMPL({
                    data: t
                }),
                    a = this.cfg.createId;
                this.$el = $(e, "body"), this.$el.attr("id", a), this.el = "#" + a, $("body").append(this.$el), this.$dom = this.$dom || {}, this.$dom.$okButton = "", this.$dom.$body = this.$el.find(".dialog-body"), this.$dom.$cancelButton = this.$el.find(".dialog-close"), this.$dom.$phone = this.$el.find(".pass-text-input-phone"), this.$dom.$password = this.$el.find(".pass-text-input-password"), this.$dom.$rePassword = this.$el.find(".pass-text-input-repassword"), this.setValidRelated([this.$dom.$phone, this.$dom.$password, this.$dom.$rePassword])
            },
            setValidRelated: function(t) {
                for (var e = t.length, a = 0; e > a; a++) {
                    var s = t[a];
                    $.data(s, "$related", s.next(".pass-text-errmsg-related"))
                }
            },
            initDom: function() {
                var t = this,
                    e = this.$el.find("[data-node]");
                this.$dom = this.$dom || {}, e.each(function(e, a) {
                    var s = $(a),
                        i = s.data("node");
                    t.$dom["$" + i] = s
                })
            }
        };
    module.exports = Widget.extend(RegisterDialog)
});;
define("waimai:widget/common/userinfo/UserMgr.js", function(i, e, t) {
    function o(i) {
        var e = window.location.host;
        return i.test(e) ? !0 : void 0
    }
    var n = i("waimai:widget/common/userinfo/comp/registerDialog.js"),
        a = /waimai\.baidu\.com/g,
        s = o(a),
        r = $.Event;
    !
    function(e) {
        function o(i) {
            var t = m + (new Date).getTime(),
                i = i || {},
                o = i.url || e.location.href;
            if (sucCallBack = i.sucessCB ||
            function() {}, b) {
                b.show();
                var n = $("#place-login-tips");
                n.length && (c.getParam("tip") ? n.show() : c.mustTip || n.hide())
            } else {
                var a, s = function() {
                        var i = {
                            tangram: !0,
                            id: "login",
                            cache: !0,
                            apiOpt: {
                                product: "waimai",
                                staticPage: h,
                                u: o,
                                sms: 2
                            },
                            authsite: k,
                            authsiteCfg: {
                                act: "implicit",
                                u: o
                            },
                            onSubmitStart: function() {
                                c.getParam("purl") && (a = e.open("about:blank"))
                            },
                            onLoginSuccess: function(i) {
                                var e = $.Event("onLoginSuccess");
                                sucCallBack(), $(c).trigger(e), e.isDefaultPrevented() ? i.returnValue = !1 : a && (a.location.href = c.getParam("purl"))
                            },
                            onSubmitedErr: function() {
                                a && a.close()
                            }
                        },
                            t = window.passport || null;
                        t && t.pop && (b = t.pop.init(i), b.show(), function() {
                            var i = $("#passport-login-pop"),
                                e = arguments,
                                t = (c.getParam("purl"), c.getParam("tip")),
                                o = c.getParam("title");
                            i.length && t ? setTimeout(function() {
                                $('<div id="place-login-tips" class="place-login-tips">' + t + "</div>").appendTo(i), o && i.find("#TANGRAM__PSP_2__titleText").text(o)
                            }, 100) : setTimeout(function() {
                                e.callee()
                            }, 10)
                        }())
                    };
                baidu.phoenix.require(k, {
                    target: "otherLogin",
                    tpl: "waimai",
                    act: "implicit",
                    u: location.href
                }), $.ajax({
                    url: t,
                    type: "get",
                    dataType: "script",
                    crossDomain: !0,
                    data: null,
                    async: !0,
                    error: function() {
                        location.reload()
                    },
                    success: function() {
                        s()
                    }
                })
            }
        }
        function a(i) {
            if (!i) return "";
            var e = "",
                t = i.uName || i.displayname,
                o = i.email,
                n = i.mobile;
            t ? e = t : (o || n) && (e = o || n);
            var a = "";
            /qt=find/.test(location.href) && (a = '<li class="uname"> <a href="/waimai?qt=contact" class="contract ">联系我们</a></li>');
            var s = ['<ul class="login_info">' + a + '<li id="usernameInfo" class="uname mn-lk-w">'];
            return s.push(t ? '<a id="username" class="mn-lk" href="/waimai/trade/orderlist">你好，' + e + "</a>" : '<a id="username" class="mn-lk" href="https:/passport.baidu.com/v2/?ucenteradduname">' + e + "</a>"), s.push('<div id="popUserInfoId" class="mn-tip"><div class="top-arrow"></div><ul class="mn">'), s.push('<li><a class="my-info" href="/waimai?qt=orderlist&type=wait"><span class="icon order-icon"></span>我的订单</a></li>'), s.push('<li><a class="my-info" href="/waimai?qt=addressmanage&type=select"><span class="icon address-icon"></span>送餐地址</a></li>'), s.push('<li><a class="my-info" href="/waimai?qt=myfavorite"><span class="icon favorite-icon"></span>收藏夹</a></li>'), s.push('<li><a class="my-info" href="/waimai?qt=couponinfo"><span class="icon coupon-icon"></span>代金券</a></li>'), s.push('<li><a class="my-info" href="/pay?qt=getuserleft"><span class="icon left-icon"></span>我的余额</a></li>'), s.push('<li><a class="my-info" href="/trade/refundlist"><span class="icon refund-icon"></span>我的退款</a></li>'), s.push('<li><a id="logout" class="logout" href="javascript:void(0)"><span class="icon account-icon"></span>退出</a></li>'), s.push("</ul></div>"), s.join("")
        }
        function l(i, e) {
            var t = "",
                o = e ? "&" + encodeURIComponent(e) : "";
            switch (i) {
            case "login":
                t = d + p;
                break;
            case "logout":
                t = f
            }
            return u + t + g + encodeURIComponent(o)
        }
        var c, u = "https://passport.baidu.com",
            d = "v2/",
            g = "&tpl=ma",
            p = "?login",
            f = "?logout";
        T_ORDER_LIST = ['<ul class="order-list">', '<li><a target="_blank" class="order-list-cater" href="/detail?qt=orderlist&type=cater&detail=order_list">餐饮订单</a></li>', '<li><a target="_blank" class="order-list-movie" href="/detail?qt=orderlist&type=movie">电影订单</a></li>', "</ul>"].join("");
        var m = u + "/passApi/js/uni_login_wrapper.js?cdnversion=",
            h = e.location.origin + "/static/common/widget/userinfo/v3Jump.html",
            v = "/waimai/checklogin",
            _ = "1",
            w = {},
            b = null,
            k = [],
            y = !1;
        c = {
            init: function() {
                var i;
                y || (this.update({
                    onsuccess: function() {}
                }), $("#user_info").delegate(".book-order", "mouseenter.order", function() {
                    var e, t = $(this).find(".order-list");
                    e = c.userState && c.userState.isOnline || "0", i && clearTimeout(i), 0 == t.length && (t = $(this).append($(T_ORDER_LIST))), t.show(), t.find(".order-list-hotel").attr("stat", "click|{da_src:inf.order_hotel, user: " + e + "}")
                }).delegate(".book-order", "mouseleave.order", function() {
                    var e = $(this).find(".order-list");
                    e.length > 0 && (i = setTimeout(function() {
                        e.hide()
                    }, 50))
                }), y = !0)
            },
            setSearchOrder: function(i) {
                $(this).on("setlogin", function() {
                    $("#user_info .book-order").html(i)
                }), $("#user_info .book-order").html(i), setTimeout(function() {
                    $("#user_info").undelegate(".book-order", "mouseenter.order").undelegate(".book-order", "mouseleave.order")
                }, 100)
            },
            update: function(i) {
                i = i || {},


                this.getState(function(e) {
                    if (e) {
                        c.userState = e;
                        var t = this,
                            o = i.onsuccess,
                            n = i.scope;
                        if (e.isOnline && (e.displayname || "") + (e.email || "") + (e.mobile || "")) {
                            if (t.isLogin(e), !s) {
                                var a = r("isLogin", {
                                    userIsLogin: !0,
                                    userState: e
                                });
                                $(document.body).trigger(a)
                            }
                        } else if (t.isLogout(e), !s) {
                            var l = r("breforeCreateRegister", {
                                userMgr: t
                            });
                            $(document.body).trigger(l);
                            var u = cookie.get("directorGeneralLogin");
                            u ? $("#logout_user_info .logout_info").html("<li><a>已登录</a></li>") : t.createRegisterDialog();
                            var d = r("isLogout", {});
                            $(document.body).trigger(d)
                        }
                        i && o && n && o.call(n, e)
                    }
                })
            },
            getState: function(e) {
                window.cookie = i("wcommon:static/util/Cookie.js"), $.ajax({
                    url: "https://passport.baidu.com/v3/login/api/auth/?return_type=3&tpl=waimai&u=https://waimai.baidu.com/waimai/setstoken",
                    dataType: "jsonp",
                    error: function() {
                        $.ajax({
                            url: v,
                            dataType: "json",
                            success: function(i) {
                                c._getState(i)
                            }
                        })
                    }
                }), this._getStateCBK = e
            },
            _getState: function(i) {
                i && this._getStateCBK && this._getStateCBK(i)
            },
            bindEvents: function() {
                var i = this,
                    t = function() {
                        i.tipTimer = setTimeout(function() {
                            $("#popUserInfoId").css("visibility", "hidden")
                        }, 200)
                    };
                $("#username").on("mouseover", function() {
                    $("#popUserInfoId").css({
                        display: "none",
                        visibility: "visible"
                    }).fadeIn()
                }), $("#popUserInfoId").on("mouseover", function() {
                    e.clearTimeout(i.tipTimer)
                }), $("#username").on("mouseout", t), $("#popUserInfoId").on("mouseout", t), $("#logout").on("click", function() {
                    return c.logout(), !1
                })
            },
            addLoginEvt: function() {
                var i = this;
                $("#login, #login-buttom").off("click").on("click", function(e) {
                    e.stopPropagation(), e.preventDefault(), i.removeAll(), i.login()
                })
            },
            addRegisterEvt: function() {
                var i = this;
                $("#logout_user_register").off("click").on("click", function(e) {
                    return s ? !0 : (e.stopPropagation(), e.preventDefault(), void i.createRegisterDialog())
                })
            },
            createRegisterDialog: function() {
                this.RegisterDialogWidget ? this.RegisterDialogWidget.show() : this.RegisterDialogWidget = n.createWidget({
                    title: "百度外卖VIP账号注册",
                    createId: "logout_user_register_create"
                })
            },
            login: function(i) {
                i = i || {}, true ? i.url && (location.href = i.url) : o(i)
            },
            logout: function() {
                cookie.remove("stoken", {
                    path: "/"
                }), e.location.href = l("logout", {
                    u: e.location.href
                })
            },
            isLogin: function(i) {
                var e = this,
                    t = $("#logout_user_info"),
                    o = $("#login_user_info");
                t.length && t.hide(), o.length && (o.show(), o.html(a(i))), $(e).trigger("setlogin"), this.bindEvents()
            },
            isLogout: function() {
                var i = $("#logout_user_info"),
                    e = $("#login_user_info");
                i && i.show(), e && e.hide();
                var t = "";
                /qt=find/.test(location.href) && (t = '<li> <a href="/waimai?qt=contact" class="contract">联系我们</a> </li>'), $(".logout_info").prepend(t), this.addLoginEvt(), this.addRegisterEvt()
            },
            clickPage: function(i, e) {
                "normal" == i ? ($("#loginIframe_iph" + e).hide(), $("#passports" + e).show(), $("#normal_login" + e).addClass("login_hover"), $("#phone_login" + e).removeClass("login_hover")) : "iph" == i && ($("#loginIframe_iph" + e).show(), $("#passports" + e).hide(), $("#phone_login" + e).addClass("login_hover"), $("#normal_login" + e).removeClass("login_hover"))
            },
            setParam: function(i, e) {
                w[i] = e
            },
            getParam: function(i) {
                return w[i]
            },
            removeParam: function(i) {
                for (var e, t = 0; e = i[t]; t++) delete w[e]
            },
            removeAll: function() {
                w = {}
            }
        }, t.exports = c
    }(window)
});;
define("waimai:page/layout.js", function(i) {
    var n = i("waimai:static/utils/GlobalErrorMonitor.js"),
        o = i("jsmod/ui/dialog");
    $("#content").css("min-height", $(window).height() - 290), window.onerror1 = function() {
        return n.error.apply(n, arguments), !0
    }, window.onresize = function() {
        $("#content").css("min-height", $(window).height() - 290)
    }, $(function() {
        o && o.setOpacity(.55), $(".placeholder-con").placeholder()
    })
});