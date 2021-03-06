var BMapLib = window.BMapLib = BMapLib || {};
"undefined" == typeof BMapLib._toolInUse && (BMapLib._toolInUse = !1),
function() {
    var e = e || {
        guid: "$BAIDU$"
    }; !
    function() {
        window[e.guid] = {},
        e.extend = function(e, n) {
            for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
            return e
        },
        e.lang = e.lang || {},
        e.lang.guid = function() {
            return "TANGRAM__" + (window[e.guid]._counter++).toString(36)
        },
        window[e.guid]._counter = window[e.guid]._counter || 1,
        window[e.guid]._instances = window[e.guid]._instances || {},
        e.lang.Class = function(n) {
            this.guid = n || e.lang.guid(),
            window[e.guid]._instances[this.guid] = this
        },
        e.lang.isString = function(e) {
            return "[object String]" == Object.prototype.toString.call(e)
        },
        e.lang.isFunction = function(e) {
            return "[object Function]" == Object.prototype.toString.call(e)
        },
        e.lang.Class.prototype.toString = function() {
            return "[object " + (this._className || "Object") + "]"
        },
        e.lang.Class.prototype.dispose = function() {
            delete window[e.guid]._instances[this.guid];
            for (var n in this) e.lang.isFunction(this[n]) || delete this[n];
            this.disposed = !0
        },
        e.lang.Event = function(e, n) {
            this.type = e,
            this.returnValue = !0,
            this.target = n || null,
            this.currentTarget = null
        },
        e.lang.Class.prototype.addEventListener = function(n, i, t) {
            if (e.lang.isFunction(i)) { ! this.__listeners && (this.__listeners = {});
                var a, o = this.__listeners;
                if ("string" == typeof t && t) {
                    if (/[^\w\-]/.test(t)) throw "nonstandard key:" + t;
                    i.hashCode = t,
                    a = t
                }
                0 != n.indexOf("on") && (n = "on" + n),
                "object" != typeof o[n] && (o[n] = {}),
                a = a || e.lang.guid(),
                i.hashCode = a,
                o[n][a] = i
            }
        },
        e.lang.Class.prototype.removeEventListener = function(n, i) {
            if (e.lang.isFunction(i)) i = i.hashCode;
            else if (!e.lang.isString(i)) return; ! this.__listeners && (this.__listeners = {}),
            0 != n.indexOf("on") && (n = "on" + n);
            var t = this.__listeners;
            t[n] && t[n][i] && delete t[n][i]
        },
        e.lang.Class.prototype.dispatchEvent = function(n, i) {
            e.lang.isString(n) && (n = new e.lang.Event(n)),
            !this.__listeners && (this.__listeners = {}),
            i = i || {};
            for (var t in i) n[t] = i[t];
            var t, a = this.__listeners,
            o = n.type;
            if (n.target = n.target || this, n.currentTarget = this, 0 != o.indexOf("on") && (o = "on" + o), e.lang.isFunction(this[o]) && this[o].apply(this, arguments), "object" == typeof a[o]) for (t in a[o]) a[o][t].apply(this, arguments);
            return n.returnValue
        },
        e.lang.inherits = function(e, n, i) {
            var t, a, o = e.prototype,
            s = new Function;
            s.prototype = n.prototype,
            a = e.prototype = new s;
            for (t in o) a[t] = o[t];
            e.prototype.constructor = e,
            e.superClass = n.prototype,
            "string" == typeof i && (a._className = i)
        }
    } ();
    var n = BMapLib.MarkerTool = function(i, t) {
        e.lang.Class.call(this),
        this._map = i,
        this._opts = {
            icon: n.SYS_ICONS[8],
            followText: "点击地图添加标注",
            autoClose: !0
        },
        e.extend(this._opts, t),
        this._isOpen = !1,
        this._opts.followText = this._checkStr(this._opts.followText),
        this._followMarker = null,
        this._followLabel = null
    };
    e.lang.inherits(n, e.lang.Class, "MarkerTool"),
    n.prototype.open = function() {
        return this._map ? 1 == this._isOpen ? !0 : BMapLib._toolInUse ? !1 : (BMapLib._toolInUse = !0, this._isOpen = !0, this._binded || (this._bind(), this._binded = !0), this._followMarker || (this._followMarker = new BMap.Marker(this._map.getCenter(), {
            offset: new BMap.Size(0, 0)
        }), this._map.addOverlay(this._followMarker), this._followMarker.setZIndex(1e3), this._followMarker.hide()), this._preCursor = this._map.getDefaultCursor(), !0) : !1
    },
    n.prototype.close = function() {
        this._isOpen && (this._map.removeEventListener("mousemove", this._mouseMoveHandler), this._map.removeEventListener("click", this._clickHandler), this._followMarker.hide(), this._map.setDefaultCursor(this._preCursor), BMapLib._toolInUse = !1, this._isOpen = !1, this._binded = !1)
    },
    n.prototype.setIcon = function(e) {
        e && e instanceof BMap.Icon && (this._opts.icon = e)
    },
    n.prototype.getIcon = function() {
        return this._opts.icon
    },
    n.prototype._checkStr = function(e) {
        return e ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;") : ""
    },
    n.prototype._bind = function() {
        var n = this;
        n._isOpen && (n._mouseMoveHandler = function(e) {
            var i = e.point;
            n._followMarker.setIcon(n._opts.icon),
            n._followMarker.setPosition(i),
            n._followMarker.setLabel(n._followLabel),
            n._followMarker.hide()
        },
        n._map.addEventListener("mousemove", n._mouseMoveHandler), n._clickHandler = function(i) {
            var t = i.pixel,
            a = new BMap.Pixel(t.x, t.y),
            o = n._map.pixelToPoint(a),
            s = new BMap.Marker(o, {
                icon: n._opts.icon
            });
            n._map.addOverlay(s);
            var p = new e.lang.Event("onmarkend");
            p.marker = s,
            n.dispatchEvent(p),
            n._opts.autoClose && n.close()
        },
        n._map.addEventListener("click", n._clickHandler))
    },
    n.CUR_IMG = "http://api.map.baidu.com/library/MarkerTool/1.2/src/images/transparent.cur",
    n.ICON_IMG = "http://api.map.baidu.com/library/MarkerTool/1.2/src/images/us_mk_icon.png",
    n.SYS_ICONS = [new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(6, 21),
        imageOffset: new BMap.Size(0, 0)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(6, 21),
        imageOffset: new BMap.Size( - 23, 0)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(6, 21),
        imageOffset: new BMap.Size( - 46, 0)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(6, 21),
        imageOffset: new BMap.Size( - 69, 0)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(6, 21),
        imageOffset: new BMap.Size( - 92, 0)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(6, 21),
        imageOffset: new BMap.Size( - 115, 0)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(23, 25), {
        anchor: new BMap.Size(9, 25),
        imageOffset: new BMap.Size(0, -21)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(23, 25), {
        anchor: new BMap.Size(9, 25),
        imageOffset: new BMap.Size( - 23, -21)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(23, 25), {
        anchor: new BMap.Size(9, 25),
        imageOffset: new BMap.Size( - 46, -21)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(23, 25), {
        anchor: new BMap.Size(9, 25),
        imageOffset: new BMap.Size( - 69, -21)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(23, 25), {
        anchor: new BMap.Size(9, 25),
        imageOffset: new BMap.Size( - 92, -21)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(23, 25), {
        anchor: new BMap.Size(9, 25),
        imageOffset: new BMap.Size( - 115, -21)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(1, 21),
        imageOffset: new BMap.Size(0, -46)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(1, 21),
        imageOffset: new BMap.Size( - 23, -46)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(1, 21),
        imageOffset: new BMap.Size( - 46, -46)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(1, 21),
        imageOffset: new BMap.Size( - 69, -46)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(1, 21),
        imageOffset: new BMap.Size( - 92, -46)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(21, 21), {
        anchor: new BMap.Size(1, 21),
        imageOffset: new BMap.Size( - 115, -46)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(25, 25), {
        anchor: new BMap.Size(12, 25),
        imageOffset: new BMap.Size(0, -67)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(25, 25), {
        anchor: new BMap.Size(12, 25),
        imageOffset: new BMap.Size( - 25, -67)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(24, 25), {
        anchor: new BMap.Size(12, 25),
        imageOffset: new BMap.Size( - 50, -67)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(25, 25), {
        anchor: new BMap.Size(12, 25),
        imageOffset: new BMap.Size( - 75, -67)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(25, 25), {
        anchor: new BMap.Size(12, 25),
        imageOffset: new BMap.Size( - 100, -67)
    }), new BMap.Icon(n.ICON_IMG, new BMap.Size(19, 25), {
        anchor: new BMap.Size(9, 25),
        imageOffset: new BMap.Size( - 125, -67)
    })]
} ();