define("merchants:widget/common/backtop/backtop.js",
function(o, e, n) {
    var a = !0;
    n.exports = Widget.extend({
        el: "#common-widget-backtop",
        events: {},
        init: function(o) {
            var e = this;
            e.backTop(o)
        },
        backTop: function(o) {
            var e = this;
            o = o || {},
            o.scrollTop = o.scrollTop || 650;
            $(window).bind("scroll",
            function() {
                var n = $(window).scrollTop(),
                t = $("body").height(),
                i = $(window).height(),
                d = t - i - n;
                if (190 > d) {
                    a = !1;
                    var l = 210 - d;
                    e.$el.css({
                        bottom: l + "px"
                    })
                } else a || (e.$el.css({
                    bottom: "20px"
                }), a = !0);
                n > o.scrollTop ? $("#backTop").removeClass("v-hide") : $("#backTop").addClass("v-hide")
            });
            var n = e.$el.find("[data-node=appdown-img]");
            n.on("mouseover",
            function() {
                n.addClass("appdown-smll"),
                n.animate({
                    width: "100px",
                    height: "100px"
                },
                "slow")
            }),
            n.on("mouseout",
            function() {
                n.removeClass("appdown-smll"),
                n.animate({
                    width: "65px",
                    height: "60px"
                },
                "slow")
            }),
            $("#backTop").click(function(o) {
                o.preventDefault(),
                $("#backTop").addClass("v-hide"),
                $("html, body").animate({
                    scrollTop: 0
                },
                200)
            }),
            $("#appdownClose").click(function() {
                e.$el.find("[data-node=appdown]").hide()
            })
        }
    })
});