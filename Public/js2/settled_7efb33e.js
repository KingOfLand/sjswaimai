define("merchants:widget/settled/basicinfo/aptitude-description.js",
function(e, t, i) {
    i.exports = {
        "主体资质": {
            "替代营业执照的资质": ["事业单位法人证书", "民办非企业单位登记证书", "军队单位对外有偿服务许可证", "社会团体法人登记证书", "成都市灵活就业（营业）辅导证"]
        },
        "行业资质": {
            "餐饮服务许可证": ["餐饮服务许可证"],
            "食品流通许可证": ["食品流通许可证"],
            "食品经营许可证": ["食品经营许可证"],
            "食品卫生许可证": ["食品卫生许可证"],
            "全国工业产品生产许可证": ["全国工业产品生产许可证", "食品生产许可证"],
            "酒类资质": ["酒类流通备案登记表", "酒类商品批发许可证", "酒类商品零售许可证", "当地政府承认的酒类资质"],
            "药品类资质": ["药品生产许可证", "药品经营许可证", "医疗器械经营企业许可证", "药品经营质量管理规范认证证书", "互联网药品信息服务资格证书", "互联网药品交易服务资格证书"],
            "其他特殊资质(地方性)": ["德阳市灵活就业（营业）辅导证", "德阳市XX区食品安全灵活就业辅导意见书", "德阳市小餐饮食品安全辅导意见书", "德阳市XX区小作坊食品安全辅导意见书", "小餐饮食品安全辅导证", "小餐饮登记证", "成都市灵活就业（营业）辅导意见", "成都市灵活就业（营业）卫生辅导意见", "成都市XX区食品行业灵活就业辅导意见", "成都市灵活就业（营业）卫生辅导意见", "食品经营实名备案证", "餐饮服务备案登记证", "中国人民解放军卫生许可证", "当地政府承认的其他有效资质"]
        }
    }
});;
define("merchants:widget/settled/basicinfo/basicinfo.js",
function(require, exports, module) {
    var aptitude = require("merchants:widget/settled/basicinfo/aptitude-description.js"),
    descTmpl = [function(_template_object) {
        var _template_fun_array = [],
        fn = function(__data__) {
            var _template_varName = "";
            for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
            eval(_template_varName),
            _template_fun_array.push("<table>    <tr>        <th>一级分类</th>        <th>二级分类</th>        <th>包含证件</th>    <tr>    ");
            for (var firstLevel in data) {
                _template_fun_array.push("        ");
                var firstLevelSpan = 0,
                initialized = !1;
                if (_template_fun_array.push("        "), "[object Array]" == Object.prototype.toString.call(data[firstLevel])) {
                    _template_fun_array.push("                ");
                    for (var i = 0; i < data[firstLevel].length; i++) _template_fun_array.push("                    <tr>                        "),
                    initialized || (_template_fun_array.push('                            <td rowspan="', "undefined" == typeof data[firstLevel].length ? "": baidu.template._encodeHTML(data[firstLevel].length), '" colspan="2">                                ', "undefined" == typeof firstLevel ? "": baidu.template._encodeHTML(firstLevel), "                            </td>                            "), initialized = !0, _template_fun_array.push("                        ")),
                    _template_fun_array.push("                        <td>", "undefined" == typeof data[firstLevel][i] ? "": baidu.template._encodeHTML(data[firstLevel][i]), "</td>                    </tr>                ");
                    _template_fun_array.push("        ")
                } else {
                    _template_fun_array.push("            ");
                    for (var secondLevel in data[firstLevel]) _template_fun_array.push("                "),
                    firstLevelSpan += data[firstLevel][secondLevel].length,
                    _template_fun_array.push("            ");
                    _template_fun_array.push("            ");
                    for (var secondLevel in data[firstLevel]) {
                        _template_fun_array.push("                ");
                        for (var i = 0; i < data[firstLevel][secondLevel].length; i++) _template_fun_array.push("                    <tr>                        "),
                        initialized || (_template_fun_array.push('                            <td rowspan="', "undefined" == typeof firstLevelSpan ? "": baidu.template._encodeHTML(firstLevelSpan), '">                                ', "undefined" == typeof firstLevel ? "": baidu.template._encodeHTML(firstLevel), "                            </td>                            "), initialized = !0, _template_fun_array.push("                        ")),
                        _template_fun_array.push("                        "),
                        0 == i && _template_fun_array.push('                            <td rowspan="', "undefined" == typeof data[firstLevel][secondLevel].length ? "": baidu.template._encodeHTML(data[firstLevel][secondLevel].length), '">                                ', "undefined" == typeof secondLevel ? "": baidu.template._encodeHTML(secondLevel), "                            </td>                        "),
                        _template_fun_array.push("                        <td>", "undefined" == typeof data[firstLevel][secondLevel][i] ? "": baidu.template._encodeHTML(data[firstLevel][secondLevel][i]), "</td>                    </tr>                ");
                        _template_fun_array.push("            ")
                    }
                    _template_fun_array.push("        ")
                }
                _template_fun_array.push("    ")
            }
            _template_fun_array.push("</table>"),
            _template_varName = null
        } (_template_object);
        return fn = null,
        _template_fun_array.join("")
    }][0],
    cauTmpl = [function(_template_object) {
        var _template_fun_array = [],
        fn = function(__data__) {
            var _template_varName = "";
            for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
            eval(_template_varName),
            _template_fun_array.push('<div class="caution-dialog"><i class="caution-cancle" data-node="caution-cancle"></i>'),
            _template_fun_array.push(0 == data.error_no ? '<div class="logo-img success"></div>': '<div class="logo-img error "></div>'),
            _template_fun_array.push("<p>", "undefined" == typeof data.error_msg ? "": baidu.template._encodeHTML(data.error_msg), "</p>"),
            _template_fun_array.push(0 == data.error_no ? '<a href="javascript:void(0);" class="caution-sure" data-node="cautionSureHide">确定</a>': '<a href="javascript:void(0);" class="caution-sure" data-node="cautionSure">确定</a>'),
            _template_fun_array.push("</div>"),
            _template_varName = null
        } (_template_object);
        return fn = null,
        _template_fun_array.join("")
    }][0],
    SUBMIT_AJAX = "/biz";
    module.exports = Widget.extend({
        el: ".settled-basicinfo",
        events: {
            "click [data-node=formsubmit]": "onFormSubmit",
            "change [data-node=aptitude_control] input[type=radio]": "toggleAptitudePanel",
            "click [data-node=back_to_position]": "backToPosition",
            "click [data-node=description]": "showAptitudeWindow",
            'click [data-node="aptitude_description"] .close': "hideAptitudeWindow"
        },
        channels: {
            "position finishpoi": "onSelectPOI",
            "progress change": "onProgressChange"
        },
        init: function() {
            this.poiParam = {},
            this.form = this.$el.find('[data-node="join_table"]'),
            this.aptitudeWrap = this.$dom.aptitude_description,
            this.initPics()
        },
        initPics: function() {
            this.$el.find(".pic-container").addClass("widget-settled-basicinfo-imageblock").uploadImg({
                width: 150,
                height: 125,
                title: "",
                url: "?qt=uploadpic"
            })
        },
        toggleAptitudePanel: function(e) {
            var t = $(e.target),
            a = this.$dom.aptitude_control.find("input[type=radio]").index(t);
            this.$dom.aptitude_panel.children().hide().eq(a).show()
        },
        onSelectPOI: function(e, t) {
            this.poiParam = t,
            this.$el.show(),
            this.$el.find("[data-node=poi_name]").val(t.poi_name)
        },
        onFormSubmit: function() {
            var e = this;
            this.form.is(".unuse") || $.when(e.checkForm()).done(function() {
                var t = e.getFormData();
                $.ajax({
                    url: SUBMIT_AJAX,
                    type: "POST",
                    dataType: "json",
                    data: t,
                    success: function(t) {
                        var a = {
                            error_msg: t.errmsg || "提交成功",
                            error_no: t.errno || 0
                        };
                        0 == t.errno || 1201 == t.errno ? listener.trigger("progress", "change", 3, a) : e.showCautionTip(a)
                    },
                    error: function() {
                        alert("请检查网络")
                    }
                })
            }).fail(function(t) {
                e.putErrorToTip(t, 1)
            })
        },
        checkForm: function() {
            for (var e, t, a, n, i = this,
            r = $.Deferred(), o = this.form.find('[data-node="half"]'), l = o.length, u = 0, c = l; c > u; u++) if (e = o.eq(u), t = e.find("input").length ? e.find("input").attr("data-check") : e.find("select").attr("data-check"), t && (a = e.find("input").length ? e.find("input").attr("data-errormsg") : e.find("select").attr("data-errormsg"), n = i.getInputValue(t), !i.checkChild(t, n))) return r.reject(a),
            r;
            var s = this.checkPicData();
            return s ? (r.reject(s), r) : (r.resolve(), r)
        },
        checkPicData: function() {
            var e = this.getPicData(),
            t = e.picData,
            a = "";
            return t.shop_front_url ? t.shop_env_url ? e.no_business_license || t.business_license_url || t.restaurant_license_url || 0 != t.other_license_url.length ? "": a = "请填写正确的资质信息！": a = "请上传店内环境图": a = "请上传店铺门脸图"
        },
        getPicData: function() {
            function e(e) {
                return e.find("[data-node=imgUrl]").val()
            }
            var t = {},
            a = this.$el.find("[data-node=no_license]").prop("checked");
            return this.$el.find(".pic-panel").each(function(a, n) {
                var i = $(n),
                r = i.find(".pic-block"),
                o = i.data("pic-key"),
                l = "";
                r.length > 1 ? (l = [], $.each(r,
                function(t, a) {
                    var n = e($(a));
                    n && l.push(n)
                })) : l = e(r),
                t[o] = l
            }),
            a && (t.business_license_url = "", t.other_license_url = [], t.restaurant_license_url = ""),
            {
                picData: t,
                no_business_license: a
            }
        },
        checkChild: function(e, t) {
            var a = this;
            switch (e) {
            case "shop_name":
                if (!a.checkNull(t) && !a.checkLength(t, 20)) return ! 1;
                break;
            case "shop_type":
            case "business_scope":
            case "delivery":
            case "business_license":
                if (!a.checkNull(t)) return ! 1;
                break;
            case "city":
                if (!a.checkSelect(t)) return ! 1;
                break;
            case "address":
                if (!a.checkNull(t) && !a.checkLength(t, 50)) return ! 1;
                break;
            case "contact_man":
                if (!a.checkNull(t) && !a.checkLength(t, 20)) return ! 1;
                break;
            case "contact_phone":
                if (!a.checkTelephone(t)) return ! 1
            }
            return ! 0
        },
        checkNull: function(e) {
            return null == e || "" == e ? !1 : !0
        },
        checkLength: function(e, t) {
            $.trim(e);
            return e.length > t || e.length < 1 ? !1 : !0
        },
        checkTelephone: function(e) {
            return /^1[3|4|5|7|8][0-9]\d{8}$/.test(e) ? !0 : !1
        },
        checkSelect: function(e) {
            return "请选择" == e ? !1 : !0
        },
        getInputValue: function(e) {
            var t = $("[name='" + e + "']"),
            a = t[0].tagName.toLowerCase(),
            n = t.attr("type"),
            i = function() {
                var t = $(" input[name='" + e + "']").filter(":checked");
                return t.length ? t.val() : null
            },
            r = function() {
                return t.val()
            };
            switch (a) {
            case "input":
                switch (n) {
                case "radio":
                    return i();
                default:
                    return r()
                }
                break;
            case "select":
                return r();
            default:
                return null
            }
        },
        putErrorToTip: function(e, t) {
            var a = this,
            n = {
                error_msg: e,
                error_no: t
            };
            a.showCautionTip(n)
        },
        getFormData: function() {
            for (var e = $('[data-node="half"]'), t = {},
            a = this.getPicData(), n = 0, i = e.length; i > n; n++) {
                var r = e.eq(n),
                o = r.find("input").length ? r.find("input").attr("name") : r.find("select").attr("name");
                t[o] = this.getInputValue(o)
            }
            return $.extend(t, this.poiParam),
            $.extend(t, a.picData),
            t
        },
        backToPosition: function() {
            listener.trigger("progress", "change", 1)
        },
        onProgressChange: function(e, t) {
            2 == t ? this.$el.show() : this.$el.hide()
        },
        showCautionTip: function(e) {
            var t = this,
            a = cauTmpl({
                data: e
            });
            $('[data-node="cautionTip"]').html(a).show(),
            $('[data-node="caution-cancle"]').click(function() {
                $('[data-node="cautionTip"]').hide()
            }),
            $('[data-node="cautionSure"]').click(function() {
                $('[data-node="cautionTip"]').hide()
            }),
            $('[data-node="cautionSureHide"]').click(function() {
                $('[data-node="cautionTip"]').hide(),
                t.onhideDialog()
            })
        },
        showAptitudeWindow: function() {
            this.aptitudeWrap.show(),
            0 == this.aptitudeWrap.find(".table-content").children().size() && this.aptitudeWrap.find(".table-content").html(descTmpl({
                data: aptitude
            }))
        },
        hideAptitudeWindow: function() {
            this.aptitudeWrap.hide()
        }
    })
});;
define("merchants:widget/settled/finish/finish.js",
function(e, n, i) {
    i.exports = Widget.extend({
        el: ".settled-finish",
        events: {
            "click [data-node=back_to_main]": "backToMain"
        },
        channels: {
            "progress change": "onProgressChange"
        },
        init: function() {},
        backToMain: function() {
            window.location.href = "/biz"
        },
        onProgressChange: function(e, n, i) {
            3 == n ? (this.$el.show(), this.$dom.submit_result.text(i.error_msg)) : this.$el.hide()
        }
    })
});;
define("merchants:widget/settled/position/citySelect/citySelect.js",
function(require, exports, module) {
    // function CitySelect(t) {
    //     t.html(CITY_WRAP_TMPL()),
    //     this.wrap = t,
    //     this.$cityWrap = t.find("[data-node=allCityList]"),
    //     this.$cityInput = t.find("[data-node=selectCity]"),
    //     this.rendered = !1,
    //     this.province = {
    //         name: "",
    //         id: ""
    //     },
    //     this.city = {
    //         name: "",
    //         id: "",
    //         is_open: "0"
    //     },
    //     this.rendered = !1,
    //     this.errMsg = "请选择省份与城市",
    //     this.arrowDown = t.find("[data-node=arrowDown]"),
    //     this.init(),
    //     this.initEvent()
    // }
    var CITY_SELECT_TMPL = [function(_template_object) {
        var _template_fun_array = [],
        fn = function(__data__) {
            var _template_varName = "";
            for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
            eval(_template_varName),
            _template_fun_array.push('<div class="cityNavHead">    <div class="cityNav province curr" data-type="province">省份</div>    <div class="cityNav city" data-type="city">城市</div></div><div class="cityContent">    <div class="content province curr">暂无数据，加载中</div>    <div class="content city">暂无数据，请选择省份</div></div>'),
            _template_varName = null
        } (_template_object);
        return fn = null,
        _template_fun_array.join("")
    }][0],
    CITY_LIST_TMPL = [function(_template_object) {
        var _template_fun_array = [],
        fn = function(__data__) {
            var _template_varName = "";
            for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
            eval(_template_varName),
            _template_fun_array.push("");
            for (var keys in data) {
                _template_fun_array.push('    <div class="city-row">        <div class="keys">', "undefined" == typeof keys ? "": baidu.template._encodeHTML(keys), '</div>        <div class="cities">            ');
                for (var i = 0; i < data[keys].length; i++) {
                    _template_fun_array.push("                ");
                    var d = data[keys][i];
                    _template_fun_array.push('                <li data-id="', "undefined" == typeof d.id ? "": baidu.template._encodeHTML(d.id), '" data-isopen="', "undefined" == typeof d.is_open ? "": baidu.template._encodeHTML(d.is_open), '" >', "undefined" == typeof d.city_name.split("-")[1] ? "": baidu.template._encodeHTML(d.city_name.split("-")[1]), "</li>            ")
                }
                _template_fun_array.push("        </div>    </div>")
            }
            _template_fun_array.push(""),
            _template_varName = null
        } (_template_object);
        return fn = null,
        _template_fun_array.join("")
    }][0],
    CITY_WRAP_TMPL = [function(_template_object) {
        var _template_fun_array = [],
        fn = function(__data__) {
            var _template_varName = "";
            for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
            eval(_template_varName),
            _template_fun_array.push('<input type="text" placeholder="选择餐厅所在城市" name="city" maxlength="20"data-node="selectCity" readonly/><ul class="cityList" data-node="allCityList"></ul><i class="arrowDown" data-node="arrowDown"><img src=', baidu.template._encodeHTML("http://web1.waimai.bdimg.com/static/merchants/images/announce/down_12079ec.jpg"), "></i>"),
            _template_varName = null
        } (_template_object);
        return fn = null,
        _template_fun_array.join("")
    }][0],
    CITIES_URL = {
        province: "/biz?qt=provinceList",
        city: "/biz?qt=citylist"
    };
    CitySelect.prototype = {
        init: function() {
            this.wrap.addClass("widget-merchants-settled-city-select"),
            this.$cityWrap.html(CITY_SELECT_TMPL())
        },
        initEvent: function() {
            var t = this;
            this.arrowDown.bind("click",
            function(e) {
                t.toggle(),
                e.stopPropagation()
            }),
            this.$cityWrap.bind("click",
            function(t) {
                t.stopPropagation()
            }),
            this.$cityWrap.find(".cityNavHead").delegate(".cityNav", "click",
            function() {
                var e = $(this),
                a = e.attr("data-type");
                t.toggleNav(a)
            }),
            this.$cityWrap.find(".content").delegate("li", "click",
            function(e) {
                var a = $(e.delegateTarget),
                i = $(this),
                n = i.attr("data-id"),
                r = i.text();
                if (!i.is(".curr")) if (a.find("li").removeClass("curr"), i.addClass("curr"), a.is(".province")) t.renderContent("city", {
                    province_id: n
                }),
                t.toggleNav("city"),
                t.setInputValue(r, n, !1, "province"),
                t.openCityHandler(!1, "", r);
                else if (a.is(".city")) {
                    var c = i.attr("data-isopen");
                    t.setInputValue(r, n, c, "city"),
                    t.$cityWrap.hide(),
                    t.openCityHandler("1" == c ? !0 : !1, n, r)
                }
            })
        },
        openCityHandler: function(t, e, a) {
            listener.trigger("position", "selectcity", {
                is_open: t,
                city_id: e,
                city: a
            })
        },
        setInputValue: function(t, e, a, i) {
            this[i] = {
                name: t,
                id: e
            },
            "province" == i ? this.city = {
                name: "",
                id: "",
                is_open: !1
            }: "city" == i && (this.city.is_open = a),
            this.$cityInput.val(this.province.name + "-" + this.city.name)
        },
        toggle: function() {
            this.rendered || (this.renderContent("province"), this.rendered = !0),
            this.$cityWrap.toggle()
        },
        hideSelection: function() {
            this.$cityWrap.hide()
        },
        toggleNav: function(t) {
            this.$cityWrap.find(".cityNav").removeClass("curr").filter("." + t).addClass("curr"),
            this.$cityWrap.find(".content").removeClass("curr").filter("." + t).addClass("curr")
        },
        renderContent: function(t, e) {
            var a = CITIES_URL[t],
            i = this;
            $.ajax({
                url: a,
                dataType: "json",
                data: e,
                success: function(e) {
                    0 == e.error_no && i.renderData(e.result, t)
                }
            })
        },
        renderData: function(t, e) {
            var a = this,
            t = a.rangeData(t[e + "_list"], e),
            i = this.$cityWrap.find(".content." + e);
            i.html(CITY_LIST_TMPL({
                data: t
            }))
        },
        rangeData: function(t, e) {
            var a = {
                ABCDE: [],
                FGHIJ: [],
                KLMNO: [],
                PQRST: [],
                UVWXYZ: []
            };
            for (var i in a) for (var n = 0; n < i.length; n++) {
                var r = i[n];
                if (t.hasOwnProperty(r)) for (var c = 0; c < t[r].length; c++) {
                    var _ = t[r][c];
                    _.id = _[e + "_id"],
                    a[i].push(t[r][c])
                }
            }
            return a
        },
        validate: function() {
            return !! this.city.name
        },
        getData: function() {
            var t = this;
            return {
                city_id: t.city.id,
                city: t.city.name,
                is_open: t.city.is_open
            }
        }
    },
    module.exports = CitySelect
});;
define("merchants:widget/settled/position/positionSearch/positionSearch.js",
function(require, exports, module) {
    function PositionSearch(t) {
        this.wrap = t,
        this.wrap.html(WRAP_TMPL()),
        this.wrap.addClass("widget-merchants-settled-position-search"),
        this.form = this.wrap.find("form"),
        this.$searchInput = this.wrap.find("[data-node=searchPosition]"),
        this.$sugWrapper = this.$searchInput.siblings(".sugList"),
        this.errMsg = "请输入有效位置",
        this.cid = "",
        this.is_open = !1,
        this.coordinate = "",
        this.initEvent()
    }
    var SEARCH_POSITION_URL = "/waimai?qt=poisug",
    WRAP_TMPL = [function(_template_object) {
        var _template_fun_array = [],
        fn = function(__data__) {
            var _template_varName = "";
            for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
            eval(_template_varName),
            _template_fun_array.push('<form><input type="text" placeholder="请输入商户位置/小区/大厦/学校" name="poi_name"  data-node="searchPosition" autocomplete="off"/><button type="submit">搜索</button><ul class="sugList positionList" data-node="allPositionList"></ul></form>'),
            _template_varName = null
        } (_template_object);
        return fn = null,
        _template_fun_array.join("")
    }][0];
    PositionSearch.prototype = {
        initEvent: function() {
            var t = this;
            this.$searchInput.on("keyup",
            function(e) {
                13 != e.keyCode && 40 != e.keyCode && 38 != e.keyCode && $.when(t.getSugData()).done(function(e) {
                    0 == e.s.length ? t.hideSugs() : t.showSugs(e.s)
                }).fail(function() {})
            }),
            this.$searchInput.on("keydown",
            function(e) {
                var i = $(".sug-wrapper li"),
                n = t.getCurrIndex();
                if (13 == e.keyCode) e.preventDefault(),
                t.form.submit();
                else if (40 == e.keyCode) {
                    if (e.preventDefault(), !t.isSugsShow()) return;
                    n < t.getSugLength() - 1 ? ++n: n = 0;
                    var r = t.getSugAtIndex(n);
                    t.setInputValue(r.text()),
                    t.setCurrSug(r)
                } else if (38 == e.keyCode) {
                    if (e.preventDefault(), !t.isSugsShow()) return;
                    n > 0 ? n--:n = i.length - 1;
                    var r = t.getSugAtIndex(n);
                    t.setInputValue(r.text()),
                    t.setCurrSug(r)
                }
            }),
            this.$sugWrapper.delegate("li", "mousemove",
            function() {
                t.setCurrSug($(this))
            }),
            this.$sugWrapper.delegate("li", "mouseout",
            function() {
                t.cancelCurrSug($(this))
            }),
            this.$sugWrapper.delegate("li", "click",
            function() {
                t.setInputValue($(this).text()),
                t.setCurrSug($(this)),
                t.hideSugs()
            }),
            this.form.on("submit",
            function() {
                return t.hideSugs(),
                listener.trigger("position", "selectposition", {
                    is_open: t.is_open,
                    city: t.city,
                    city_id: t.cid,
                    wd: t.$searchInput.val()
                }),
                !1
            })
        },
        showSugs: function(t) {
            for (var e = "",
            i = 0; i < t.length; i++) {
                var n = t[i].split("$");
                e += '<li data-coordinate="' + n[5] + '">' + n[3] + "</li>"
            }
            this.$sugWrapper.empty().html(e).show()
        },
        hideSugs: function() {
            this.$sugWrapper.hide()
        },
        isSugsShow: function() {
            return ! ("none" == this.$sugWrapper.css("display"))
        },
        setCurrSug: function(t) {
            var e = this.$sugWrapper.find("li");
            e.removeClass("curr"),
            t.addClass("curr")
        },
        cancelCurrSug: function(t) {
            t.removeClass("curr")
        },
        getCurrIndex: function() {
            var t = this.$sugWrapper.find("li");
            return t.index(this.$sugWrapper.find("li.curr"))
        },
        setInputValue: function(t) {
            this.$searchInput.val(t)
        },
        getSugLength: function() {
            return this.$sugWrapper.find("li").length
        },
        getSugAtIndex: function(t) {
            return this.$sugWrapper.find("li").eq(t)
        },
        getSugData: function() {
            var t = this,
            e = $.Deferred();
            return $.ajax({
                url: SEARCH_POSITION_URL,
                method: "post",
                dataType: "json",
                data: {
                    wd: $.trim(t.$searchInput.val()),
                    type: 0,
                    from: "pc",
                    cid: t.cid
                },
                success: function(t) {
                    e.resolve(t)
                },
                error: function() {
                    e.reject()
                }
            }),
            e
        },
        toggleDisable: function(t, e, i) {
            this.cid = e,
            this.is_open = t,
            this.city = i
        },
        validate: function() {
            var t = this,
            e = [],
            i = [],
            n = $.Deferred();
            return this.is_open ? $.when(t.getSugData()).done(function(r) {
                for (var s = 0; s < r.s.length; s++) {
                    var a = r.s[s].split("$");
                    e.push(a[3]),
                    i.push(a[5])
                }
                var u = e.indexOf($.trim(t.$searchInput.val()));
                u > -1 ? (t.coordinate = i[u], n.resolve()) : n.reject("请选择合理的店铺位置")
            }).fail(function() {}) : n.resolve(),
            n
        },
        getData: function() {
            var t = this,
            e = {};
            return this.is_open && (e.poi_name = t.$searchInput.val(), e.latitude = t.coordinate.split(",")[0], e.longitude = t.coordinate.split(",")[1]),
            e
        }
    },
    module.exports = PositionSearch
});;
define("merchants:widget/settled/position/positionMap/positionMap.js",
function(require, exports, module) {
    function PositionMap(t, e) {
        var n = new BMap.Point(116.331398, 39.897445);
        this.map = new BMap.Map(t),
        this.marker = null,
        this.markerLocation = null,
        this.markerPoint = null,
        this.infoWindow = null,
        this.rendered = !1,
        this.listwrap = e,
        this.listwrap.html(LIST_CONTAINER_TMPL()).hide(),
        this.totalNum = this.listwrap.find("[data-node=total_list_num]"),
        this.local = null,
        this.initLocal(),
        this.centerByPoint(n),
        this.init()
    }
    var LIST_CONTAINER_TMPL = [function(_template_object) {
        var _template_fun_array = [],
        fn = function(__data__) {
            var _template_varName = "";
            for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
            eval(_template_varName),
            _template_fun_array.push('<div class="map-position-list">    <div class="list-head">共<span data-node="total_list_num"></span>条，请选择离您餐厅最近的地址</div>    <ul class="position-list" data-node="position_list" id="positionList">    </ul></div>'),
            _template_varName = null
        } (_template_object);
        return fn = null,
        _template_fun_array.join("")
    }][0],
    MARK_CONTENT_TMPL = [function(_template_object) {
        var _template_fun_array = [],
        fn = function(__data__) {
            var _template_varName = "";
            for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
            eval(_template_varName),
            _template_fun_array.push('<div style="width:210px;font:bold 14px/16px arial,sans-serif;margin:0;color:#cc5522;white-space:nowrap;overflow:hidden">    ', "undefined" == typeof address ? "": baidu.template._encodeHTML(address), '</div><button class="poi-set-btn" id="markerSetPoi" onclick="window.onMarkSetPoi()">确认选择</button>'),
            _template_varName = null
        } (_template_object);
        return fn = null,
        _template_fun_array.join("")
    }][0],
    MARK_HINT_TMPL = [function(_template_object) {
        var _template_fun_array = [],
        fn = function(__data__) {
            var _template_varName = "";
            for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
            eval(_template_varName),
            _template_fun_array.push("<div style='font-size:14px;background:#ccc;color:#fff;height:26px;line-height:26px;'><span style=\"margin:0px 5px;display: inline-block;width: 10px;height: 20px;vertical-align:middle;background:url('data:image/png;base64,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')\"></span>点击地图可直接扎点</div>"),
            _template_varName = null
        } (_template_object);
        return fn = null,
        _template_fun_array.join("")
    }][0],
    CITIES_URL = {
        province: "/biz?qt=provinceList",
        city: "/biz?qt=citylist"
    };
    window.onMarkSetPoi = function() {
        listener.trigger("position", "marked")
    },
    PositionMap.prototype.init = function() {
        var t = new BMap.Geolocation,
        e = this;
        t.getCurrentPosition(function(t) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS && !e.rendered) {
                var n = new BMap.Point(t.point.lng, t.point.lat);
                e.centerByPoint(n)
            }
        },
        {
            enableHighAccuracy: !0
        });
        var n = new BMapLib.MarkerTool(e.map, {
            followText: "",
            autoClose: !1
        });
        n.open(),
        n.setIcon(BMapLib.MarkerTool.SYS_ICONS[2]),
        n.addEventListener("markend",
        function(t) {
            e.marker && e.map.removeOverlay(e.marker),
            e.marker = t.marker,
            e.marker.addEventListener("click",
            function(t) {
                t.domEvent.cancelBubble = !0,
                e.infoWindow && e.markerPoint && e.openWindow(e.infoWindow, e.markerPoint)
            });
            var n = new BMap.Geocoder;
            n.getLocation(e.marker.point,
            function(n) {
                var i = MARK_CONTENT_TMPL(n);
                e.markerLocation = n,
                e.markerPoint = new BMap.Point(t.marker.point.lng, t.marker.point.lat),
                e.infoWindow = new BMap.InfoWindow(i, {}),
                e.openWindow(e.infoWindow, e.markerPoint)
            })
        }),
        listener.on("position", "marked", $.proxy(e.onMarked, e)),
        this.addMarkHint()
    },
    PositionMap.prototype.addMarkHint = function() {
        var t = new BMap.CopyrightControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT
        });
        this.map.addControl(t);
        var e = this.map.getBounds();
        t.addCopyright({
            id: 1,
            content: MARK_HINT_TMPL(),
            bounds: e
        })
    },
    PositionMap.prototype.openWindow = function(t, e) {
        this.map.openInfoWindow(t, e)
    },
    PositionMap.prototype.initLocal = function() {
        var t = this;
        this.local = new BMap.LocalSearch(t.map, {
            renderOptions: {
                map: t.map,
                panel: "positionList"
            },
            onResultsHtmlSet: function(t) {
                t.style.border = "none"
            },
            onInfoHtmlSet: function(e, n) {
                var i = $(n);
                if (0 == i.find("[data-node=poi_set_btn]").size()) {
                    var o = $("<button data-node='poi_set_btn' class='poi-set-btn'>确认选择</button>");
                    i.append(o),
                    o.on("click",
                    function() {
                        t.onSelectPoi(e)
                    })
                }
                setTimeout(function() {
                    t.map.setCenter(e.point)
                },
                0)
            },
            onSearchComplete: function(e) {
                if (e) {
                    var n = t.local.getResults().getNumPois();
                    n ? (t.showList(), t.setTotalNum(t.local.getResults().getNumPois())) : t.hideList()
                } else t.hideList()
            },
            onMarkersSet: function(t) {
                $(t).each(function(t, e) {
                    e.marker.addEventListener("click",
                    function(t) {
                        t.domEvent.cancelBubble = !0
                    })
                })
            }
        })
    },
    PositionMap.prototype.centerByCity = function(t) {
        this.rendered = !0,
        this.map.centerAndZoom(t, 15)
    },
    PositionMap.prototype.centerByPoint = function(t, e) {
        this.map.centerAndZoom(t, e || 12)
    },
    PositionMap.prototype.panPoint = function(t) {
        this.map.centerAndZoom(t)
    },
    PositionMap.prototype.search = function(t) {
        this.local.search(t),
        this.local.enableFirstResultSelection()
    },
    PositionMap.prototype.setTotalNum = function(t) {
        this.totalNum.text(t)
    },
    PositionMap.prototype.onSelectPoi = function(t) {
        listener.trigger("position", "selectpoi", {
            poi_name: t.title,
            lat: t.point.lat,
            lng: t.point.lng
        })
    },
    PositionMap.prototype.hideList = function() {
        this.listwrap.hide()
    },
    PositionMap.prototype.showList = function() {
        this.listwrap.show()
    },
    PositionMap.prototype.onMarked = function() {
        var t = this,
        e = this.markerLocation.addressComponents.province,
        n = this.markerLocation.addressComponents.city,
        i = {
            city: n,
            city_id: "",
            is_open: "",
            fromMarked: !0
        },
        o = {
            poi_name: this.markerLocation.address,
            lat: this.markerLocation.point.lat,
            lng: this.markerLocation.point.lng
        };
        t.fetchCityData("province", {},
        function(a) {
            var r = a[e].id;
            t.fetchCityData("city", {
                province_id: r
            },
            function(t) {
                var e = t[n].id,
                a = "1" == t[n].is_open;
                i.city_id = e,
                i.is_open = a,
                listener.trigger("position", "selectposition", i),
                listener.trigger("position", "selectpoi", o)
            })
        })
    },
    PositionMap.prototype.rangeData = function(t, e) {
        var n = {};
        for (var i in t) for (var o = t[i], a = 0; a < o.length; a++) {
            var r = o[a],
            p = r.city_name.split("-")[1];
            n[p] = {
                id: r[e + "_id"]
            },
            "city" == e && (n[p].is_open = r.is_open)
        }
        return n
    },
    PositionMap.prototype.fetchCityData = function(t, e, n) {
        {
            var i = CITIES_URL[t],
            o = this;
            $.Deferred()
        }
        $.ajax({
            url: i,
            dataType: "json",
            data: e,
            success: function(e) {
                if (0 == e.error_no) {
                    var i = e.result[t + "_list"];
                    i = o.rangeData(i, t),
                    n && n(i)
                }
            },
            error: function() {
                alert("网络错误！")
            }
        })
    },
    module.exports = PositionMap
});;
define("merchants:widget/settled/position/position.js",
function(i, t, o) {
    var s = i("merchants:widget/settled/position/citySelect/citySelect.js"),
    e = i("merchants:widget/settled/position/positionSearch/positionSearch.js"),
    n = i("merchants:widget/settled/position/positionMap/positionMap.js");
    o.exports = Widget.extend({
        el: ".settled-position",
        events: {},
        channels: {
            "position selectcity": "onSelectCity",
            "position selectposition": "onSelectPosition",
            "position selectpoi": "onSelectPOI",
            "progress change": "onProgressChange"
        },
        init: function() {
            this.positionParam = {
                poi_name: "",
                latitude: "",
                longitude: "",
                city_id: "",
                city: "",
                is_open: ""
            },
            this.position = null,
            this.$citySelectWrap = this.$dom.city_select_wrap,
            this.$positionSearchWrap = this.$dom.search_position_wrap,
            this.$positionListWrap = this.$dom.position_list_wrap,
            this.positionSearch = new e(this.$positionSearchWrap),
            this.citySelect = new s(this.$citySelectWrap),
            this.positionMap = new n("positionMap", this.$positionListWrap)
        },
        onSelectCity: function(i, t) {
            var o = t.is_open,
            s = t.city_id,
            e = t.city;
            this.positionSearch.toggleDisable(o, s, e),
            this.positionMap.centerByCity(e),
            this.positionMap.hideList()
        },
        onSelectPosition: function(i, t) {
            this.positionParam.is_open = t.is_open ? 1 : 0,
            this.positionParam.city = t.city,
            this.positionParam.city_id = t.city_id,
            t.fromMarked || this.positionMap.search(t.city_id ? t.wd: "")
        },
        onSelectPOI: function(i, t) {
            this.positionParam.poi_name = t.poi_name,
            this.positionParam.latitude = t.lat,
            this.positionParam.longitude = t.lng,
            listener.trigger("position", "finishpoi", this.positionParam),
            listener.trigger("progress", "change", 2)
        },
        onProgressChange: function(i, t) {
            1 == t ? this.$el.show() : this.$el.hide()
        }
    })
});;
define("merchants:widget/settled/progress/progress.js",
function(e, s, t) {
    t.exports = Widget.extend({
        el: ".settled-progress",
        events: {},
        channels: {
            "progress change": "setPhase"
        },
        init: function() {},
        setPhase: function(e, s) {
            this.$el.find("li").removeClass("active").slice(0, s).addClass("active")
        }
    })
});