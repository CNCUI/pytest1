<!DOCTYPE html>
<html>
    <head lang=zh-CN>
        <meta charset=UTF-8>
        <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
        <meta http-equiv=Content-Type content="text/html; charset=utf-8">
        <script src=https://captcha.gtimg.com/open/2/lang_2052.js></script>
        <script src=https://captcha.gtimg.com/open/2/jquery-1.11.3.min.js></script>
        <link rel=stylesheet type=text/css href="/cap_icons.css?v=2.2.3">
        <link rel=stylesheet type=text/css href="/union_char_cap.css?v=2.2.4">
        <script src=https://captcha.gtimg.com/open/2/JsonMsg.js></script>
        <script src=https://captcha.gtimg.com/open/2/libbm.js></script>
        <script type=text/javascript src=https://captcha.gtimg.com/open/2/dc_c.js></script>
        <script defer type=text/javascript src="https://captcha.gtimg.com/public/2/tokenidiframe_d.js?v=1.0.0"></script>
    </head>
    <body>
        <div class="captcha_aq char">
            <div class=container_wrap>
                <div class=container_head>
                    <div class=icon>
                        <div class="title_icon logo aq_icon aq_icon_vryLogo" style=color:#;>&#xe910;</div>
                        <div class=title_icon_modal></div>
                    </div>
                    <div class=title id=title1 style=color:#;></div>
                    <span class="aq_icon aq_icon_close icon_close">&#xe901;</span>
                </div>
                <div class=container id=container>
                    <div class=capachArea ctrl=capachArea>
                        <div class=layout>
                            <div class=title id=title2></div>
                            <div class=info id=info></div>
                            <div class=char>
                                <div class=left>
                                    <img id=capImg class=cimg>
                                </div>
                                <div class=right>
                                    <input id=capAns type=text class=cinput>
                                </div>
                                <div id=cap_tip class="fb_tip warn">
                                    <span class=bkg></span>
                                    <span class=word id=tip_word></span>
                                </div>
                                <div class=clear_both></div>
                            </div>
                        </div>
                        <div class=opArea>
                            <div class="refresh captcha_icon">
                                <a class="aq_icon aq_icon_refresh" id=reload href=javascript:void(0)>&#xe904;</a>
                                <span class=tip style=color:#; id=change_pic></span>
                            </div>
                            <div class="help captcha_icon">
                                <a class="aq_icon aq_icon_feedback" id=showFB target=_blank rel="noopener noreferrer" href=javascript:void(0);>&#xe90f;</a>
                                <span class=tip style=color:#; id=feedback></span>
                            </div>
                            <span class="btn btn_verify btn_primary" id=submit style=background:#;border-color:#;></span>
                            <div class=clear_both></div>
                        </div>
                    </div>
                    <div class=tip_success>
                        <div class=tip_bkg></div>
                        <div class=tip_icon>
                            <div class="pic aq_icon aq_icon_shield" style=color:#;>&#xe905;</div>
                            <p class=main_word id=main_word></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script type=text/javascript>
        !function(t) {
            function e(o) {
                if (n[o])
                    return n[o].exports;
                var i = n[o] = {
                    exports: {},
                    id: o,
                    loaded: !1
                };
                return t[o].call(i.exports, i, i.exports, e),
                i.loaded = !0,
                i.exports
            }
            var n = {};
            return e.m = t,
            e.c = n,
            e.p = "",
            e(0)
        }([function(t, e, n) {
            var o = n(1)
              , i = n(2)
              , r = n(5)
              , a = n(6)
              , s = n(7)
              , c = n(8);
            n(11);
            n(17);
            var d = ""
              , f = "2052"
              , p = ""
              , l = "popup"
              , u = ""
              , h = n(12)
              , g = n(14);
            o(function() {
                var t = new i;
                t.init({
                    theme: p,
                    color: u
                }),
                "noborder" != d && t.addBorder(),
                t.conform(l, 1, u, p),
                c.init(t),
                s.init(),
                o("#title1").html(r.c2),
                o("#title2").html(r.c2),
                o("#info").html(r.char1),
                o("#tip_word").html(r.char2),
                o("#change_pic").html(r.c5),
                o("#feedback").html(r.c4),
                o("#submit").html(r.c6),
                o("#main_word").html(r.c3),
                o("#capAns").attr("placeholder", r.char2),
                "1033" == f && (o("#submit").css("letter-spacing", "0px"),
                o(".fb_tip").css("width", "180px"),
                o(".fb_tip").css("margin", "0 0 0 -100px")),
                a.init(),
                BJ_REPORT && BJ_REPORT.init && BJ_REPORT.init({
                    onReport: function(t, e) {
                        var n = "";
                        e && e.msg && (n += e.msg),
                        g.send(h.getInfo().tokenid, 1, n)
                    }
                })
            })
        }
        , function(t, e) {
            t.exports = jQuery
        }
        , function(t, e, n) {
            function o(t) {
                this.opts = i.extend(s, t || {})
            }
            var i = n(1)
              , r = n(3)
              , a = n(4)
              , s = {
                color: "#1a79ff",
                color_e: "#b3b3b3",
                c_gray_icon: "#b3b3b3",
                borderEle: i(".container_wrap"),
                fontEles: [i(".radio"), i(".tip")],
                bgEles: [i(".btn_primary")],
                theme: ""
            };
            o.prototype.init = function(t) {
                this.opts = i.extend(s, t || {}),
                "yellow" == this.opts.theme ? this.opts.color_e = "#bea272" : "" != this.opts.color && (this.opts.color_e = this.opts.color)
            }
            ,
            o.prototype.addBorder = function() {
                this.opts.borderEle.addClass("cap_container")
            }
            ,
            o.prototype.addBorderTop = function() {
                this.opts.borderEle.addClass("cap_container_top cap_container_shadow")
            }
            ,
            o.prototype.dealEvents = function(t) {
                if ("yellow" == this.opts.theme) {
                    var e = r.lighten(this.opts.color_e, 40);
                    t.css("color", e)
                } else {
                    var e = r.lighten(this.opts.c_gray_icon, 40);
                    t.css("color", e)
                }
            }
            ,
            o.prototype.unDealEvents = function(t) {
                "yellow" == this.opts.theme ? t.css("color", this.opts.color_e) : t.css("color", this.opts.c_gray_icon)
            }
            ,
            o.prototype.setElements = function() {
                for (var t = this.opts.color, e = this.opts.fontEles, n = 0; n < e.length; n++)
                    e[n].each(function() {
                        i(this).css("color", t)
                    });
                for (var o = this.opts.bgEles, r = 0; r < o.length; r++)
                    o[r].each(function() {
                        i(this).css({
                            background: t,
                            "border-color": t
                        })
                    })
            }
            ,
            o.prototype.set = function(t, e) {
                t in this.opts && (this.opts[t] = e)
            }
            ,
            o.prototype.conform = function(t, e, n, o) {
                if ("yellow" == o && this.opts.borderEle.css("1" == a.isIE() ? {
                    border: "1px solid rgb(234,223,199)",
                    background: "linear-gradient(180deg,#fff9ed,#fff4dd)",
                    background: "-moz-linear-gradient(180deg, #fff9ed,#fff4dd)",
                    background: "-o-linear-gradient(180deg,#fff9ed,#fff4dd)",
                    background: "-webkit-linear-gradient(180deg,#fff9ed,#fff4dd)",
                    background: "-ms-linear-gradient(180deg,#fff9ed,#fff4dd)",
                    filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#fff9ed',endColorStr='#fff4dd',gradientType='0')"
                } : "point" == t ? {
                    border: "1px solid rgb(234,223,199)",
                    "border-top": "0px",
                    background: "linear-gradient(180deg,#fff9ed,#fff4dd)",
                    background: "-moz-linear-gradient(180deg, #fff9ed,#fff4dd)",
                    background: "-o-linear-gradient(180deg,#fff9ed,#fff4dd)",
                    background: "-webkit-linear-gradient(180deg,#fff9ed,#fff4dd)",
                    filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#fff9ed',endColorStr='#fff4dd',gradientType='0')"
                } : {
                    border: "1px solid rgb(234,223,199)",
                    background: "linear-gradient(180deg,#fff9ed,#fff4dd)",
                    background: "-moz-linear-gradient(180deg, #fff9ed,#fff4dd)",
                    background: "-o-linear-gradient(180deg,#fff9ed,#fff4dd)",
                    background: "-webkit-linear-gradient(180deg,#fff9ed,#fff4dd)",
                    filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#fff9ed',endColorStr='#fff4dd',gradientType='0')"
                }),
                "popup" == t)
                    switch (e) {
                    case 1:
                        "yellow" == o && (i(".title_icon, .title, .icon_close, .aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({
                            color: "#bea272"
                        }),
                        i(".btn").css({
                            background: "#bea272",
                            border: "none"
                        }));
                        break;
                    case 2:
                        "yellow" == o ? (i(".container_head").css({
                            "border-bottom": "none"
                        }),
                        i(".title_icon, .title, .icon_close, .aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({
                            color: "#bea272"
                        }),
                        i(".captcha_aq").css({
                            background: "linear-gradient(to bottom,#fff9ed,#fff4dd)"
                        }),
                        i(".btn").css({
                            background: "#bea272",
                            border: "none"
                        })) : i(".container_head").css({
                            "border-bottom": "none"
                        });
                        break;
                    case 3:
                        "yellow" == o ? (i(".container_head").css({
                            "border-bottom": "none"
                        }),
                        i(".title_icon, .title, .icon_close, .aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({
                            color: "#bea272"
                        }),
                        i(".captcha_aq").css({
                            background: "linear-gradient(to bottom,#fff9ed,#fff4dd)"
                        }),
                        i(".btn").css({
                            background: "#bea272",
                            border: "none"
                        })) : i(".popup_ct_wrap_head").css({
                            "border-bottom": "1px solid #e5e5e5"
                        });
                        break;
                    case 4:
                        if ("yellow" == o)
                            i(".tip").css({
                                color: "#bea272"
                            }),
                            i(".bar_head").css({
                                border: "none",
                                "border-radius": "5px",
                                "box-shadow": "0 0 10px rgba(108,85,35,0.5)",
                                background: "linear-gradient(to bottom,#ffffff,#eadab6)"
                            }),
                            i(".slide_bkg").css(1 == a.isLteIEVersion(9) ? {
                                filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#7Fecddbb',endColorstr='#7Fecddbb')",
                                color: "#bea272"
                            } : {
                                "border-top": "1px solid rgba(109,84,28,0.1)",
                                background: "rgba(236,221,187,0.5)",
                                filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#19ecddbb',endColorstr='#19ecddbb')",
                                color: "#bea272"
                            }),
                            i(".title_icon, aq_icon_vryLogo, .title, .aq_icon_close, .aq_icon_va_loading").css({
                                color: "#bea272"
                            });
                        else if (null != n && "" != n) {
                            (n[0] = "#" && 7 == n.length) && (n = n.substr(1));
                            var r = parseInt(n.substr(0, 2), 16)
                              , s = parseInt(n.substr(2, 2), 16)
                              , c = parseInt(n.substr(4, 2), 16)
                              , d = "1px solid rgba(" + r + "," + s + "," + c + ",0.2)"
                              , f = "1px solid rgba(" + r + "," + s + "," + c + ",0.1)"
                              , p = "rgba(" + r + "," + s + "," + c + ",0.1)"
                              , l = "#19" + n;
                            1 == a.isLteIEVersion(9) ? (i(".bar_head").css({
                                background: "#fff",
                                border: "1px solid #f5f5f6",
                                "box-shadow": "0 0 10px #d4d4d4",
                                "border-radius": "5px",
                                left: "0px",
                                top: "0px"
                            }),
                            i(".slide_bkg").css({
                                background: p,
                                filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + l + ",endColorstr=" + l + ")"
                            })) : (i(".bar_head").css({
                                background: "#fff",
                                border: d,
                                "box-shadow": "0 0 10px #d4d4d4",
                                "border-radius": "5px",
                                left: "0px",
                                top: "0px"
                            }),
                            i(".slide_bkg").css({
                                background: p,
                                filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + l + ",endColorstr=" + l + ")",
                                "border-top": f
                            }))
                        }
                    }
                else
                    switch (e) {
                    case 1:
                        "yellow" == o && (i(".captcha_aq").css({
                            background: "linear-gradient(to bottom,#fffdf8,#fff9eb)"
                        }),
                        i(".aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({
                            color: "#bea272"
                        }),
                        i(".aq_icon_ok, .aq_icon_logo").css({
                            color: "#bea272"
                        }),
                        i(".btn").css({
                            background: "#bea272",
                            border: "none"
                        }));
                        break;
                    case 2:
                        "yellow" == o && (i(".aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({
                            color: "#bea272"
                        }),
                        i(".aq_icon_vryLogo .title").css({
                            color: "#bea272"
                        }),
                        i(".captcha_aq").css({
                            background: "linear-gradient(to bottom,#fffdf8,#fff9eb)"
                        }),
                        i(".btn").css({
                            background: "#bea272",
                            border: "none"
                        }));
                        break;
                    case 3:
                        "yellow" == o && (i(".aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({
                            color: "#bea272"
                        }),
                        i(".aq_icon_vryLogo .title").css({
                            color: "#bea272"
                        }),
                        i(".captcha_aq").css({
                            background: "linear-gradient(to bottom,#fffdf8,#fff9eb)"
                        }),
                        i(".btn").css({
                            background: "#bea272",
                            border: "none"
                        }));
                        break;
                    case 4:
                        if ("yellow" == o)
                            i(".tip").css({
                                color: "#bea272"
                            }),
                            i(".bar_head").css({
                                border: "none",
                                "border-radius": "5px",
                                "box-shadow": "0 0 10px rgba(108,85,35,0.5)",
                                background: "linear-gradient(to bottom,#ffffff,#eadab6)"
                            }),
                            i(".aq_icon_va_loading").css({
                                color: "#bea272"
                            }),
                            i(".slide_bkg").css(1 == a.isLteIEVersion(9) ? {
                                filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#7Fecddbb',endColorstr='#7Fecddbb')",
                                color: "#bea272"
                            } : {
                                "border-top": "1px solid rgba(109,84,28,0.1)",
                                background: "rgba(236,221,187,0.5)",
                                filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#19ecddbb',endColorstr='#19ecddbb')",
                                color: "#bea272"
                            });
                        else if (null != n && "" != n) {
                            (n[0] = "#" && 7 == n.length) && (n = n.substr(1));
                            var r = parseInt(n.substr(0, 2), 16)
                              , s = parseInt(n.substr(2, 2), 16)
                              , c = parseInt(n.substr(4, 2), 16)
                              , d = "1px solid rgba(" + r + "," + s + "," + c + ",0.2)"
                              , f = "1px solid rgba(" + r + "," + s + "," + c + ",0.1)"
                              , p = "rgba(" + r + "," + s + "," + c + ",0.1)"
                              , l = "#19" + n;
                            1 == a.isLteIEVersion(9) ? (i(".bar_head").css({
                                background: "#fff",
                                border: "1px solid #f5f5f6",
                                "box-shadow": "0 0 10px #d4d4d4",
                                "border-radius": "5px",
                                left: "0px",
                                top: "0px"
                            }),
                            i(".slide_bkg").css({
                                background: p,
                                filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + l + ",endColorstr=" + l + ")"
                            })) : (i(".bar_head").css({
                                background: "#fff",
                                border: d,
                                "box-shadow": "0 0 10px #d4d4d4",
                                "border-radius": "5px",
                                left: "0px",
                                top: "0px"
                            }),
                            i(".slide_bkg").css({
                                background: p,
                                filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + l + ",endColorstr=" + l + ")",
                                "border-top": f
                            }))
                        }
                    }
            }
            ,
            t.exports = o
        }
        , function(t, e) {
            function n(t, e) {
                var n = !1;
                "#" == t[0] && (t = t.slice(1),
                n = !0);
                var o = parseInt(t, 16)
                  , i = (o >> 16) + e;
                i > 255 ? i = 255 : 0 > i && (i = 0);
                var r = (o >> 8 & 255) + e;
                r > 255 ? r = 255 : 0 > r && (r = 0);
                var a = (255 & o) + e;
                return a > 255 ? a = 255 : 0 > a && (a = 0),
                (n ? "#" : "") + (a | r << 8 | i << 16).toString(16)
            }
            function o(t, e) {
                var n = t.toLowerCase();
                if (n && i.test(n)) {
                    if (4 === n.length) {
                        for (var o = "#", r = 1; 4 > r; r += 1)
                            o += n.slice(r, r + 1).concat(n.slice(r, r + 1));
                        n = o
                    }
                    for (var a = [], r = 1; 7 > r; r += 2)
                        a.push(parseInt("0x" + n.slice(r, r + 2)));
                    return "RGBA(" + a.join(",") + "," + e + ")"
                }
                return n
            }
            var i = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
            t.exports = {
                lighten: n,
                rgba: o
            }
        }
        , function(t, e) {
            function n() {
                var t = navigator.userAgent
                  , e = t.indexOf("Opera") > -1
                  , n = t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1 && !e;
                return n ? "1" : "-1"
            }
            function o(t) {
                var e = navigator.userAgent
                  , n = e.indexOf("Opera") > -1
                  , o = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1 && !n;
                if (o) {
                    var i = new RegExp("MSIE (\\d+\\.\\d+);");
                    i.test(e);
                    var r = parseFloat(RegExp.$1);
                    return t > r ? !0 : !1
                }
                return !1
            }
            function i(t) {
                var e = document.createElement("b");
                return e.innerHTML = "<!--[if IE " + t + "]><i></i><![endif]-->",
                1 === e.getElementsByTagName("i").length
            }
            function r() {
                var t, e = {}, n = {}, o = navigator.userAgent.toLowerCase();
                (t = o.match(/msie ([\d.]+)/)) ? e.ie = t[1] : (t = o.match(/firefox\/([\d.]+)/)) ? e.firefox = t[1] : (t = o.match(/chrome\/([\d.]+)/)) ? e.chrome = t[1] : (t = o.match(/opera.([\d.]+)/)) ? e.opera = t[1] : (t = o.match(/version\/([\d.]+).*safari/)) ? e.safari = t[1] : 0;
                return e.ie ? (n.name = "IE",
                n.version = e.ie) : e.firefox ? (n.name = "firefox",
                n.version = e.firefox) : e.chrome ? (n.name = "chrome",
                n.version = e.chrome) : e.opera ? (n.name = "opera",
                n.version = e.opera) : e.safari ? (n.name = "safari",
                n.version = e.safari) : (n.name = "other",
                n.version = "0"),
                n
            }
            function a() {
                var t = {}
                  , e = navigator.userAgent
                  , n = "Win32" == navigator.platform || "Windows" == navigator.platform
                  , o = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
                if (o) {
                    var i = e.match(/Mac OS X ([\d_]+)/);
                    return t.name = "iMac",
                    i[1] ? t.version = i[1] : t.version = "pc",
                    t
                }
                t.version = "pc";
                var r = "X11" == navigator.platform && !n && !o;
                if (r)
                    return t.name = "Unix",
                    t;
                var a = String(navigator.platform).indexOf("Linux") > -1;
                if (a)
                    return t.name = "Linux",
                    t;
                if (n) {
                    var s = e.indexOf("Windows NT 5.0") > -1 || e.indexOf("Windows 2000") > -1;
                    if (s)
                        return t.name = "Win2000",
                        t;
                    var c = e.indexOf("Windows NT 5.1") > -1 || e.indexOf("Windows XP") > -1;
                    if (c)
                        return t.name = "WinXP",
                        t;
                    var d = e.indexOf("Windows NT 5.2") > -1 || e.indexOf("Windows 2003") > -1;
                    if (d)
                        return t.name = "Win2003",
                        t;
                    var f = e.indexOf("Windows NT 6.0") > -1 || e.indexOf("Windows Vista") > -1;
                    if (f)
                        return t.name = "WinVista",
                        t;
                    var p = e.indexOf("Windows NT 6.1") > -1 || e.indexOf("Windows 7") > -1;
                    if (p)
                        return t.name = "Win7",
                        t
                }
                return t.name = "other",
                t
            }
            t.exports = {
                isLteIEVersion: o,
                isIE: n,
                getBrowserInfo: r,
                getOSInfo: a,
                isIEVer: i
            }
        }
        , function(t, e) {
            t.exports = captcha
        }
        , function(t, e, n) {
            var o = n(1)
              , i = {
                _check: function() {
                    return "placeholder"in document.createElement("input")
                },
                init: function() {
                    this._check() || this.fix()
                },
                fix: function() {
                    try {
                        jQuery(":input[placeholder]").each(function(t, e) {
                            var n = o(this)
                              , i = n.attr("placeholder");
                            n.wrap(o('<div class="wrap"></div>').css({
                                position: "relative",
                                zoom: "1",
                                border: "none",
                                background: "none",
                                padding: "none",
                                margin: "none"
                            }));
                            var r = n.position()
                              , a = n.outerHeight(!0)
                              , s = n.css("padding-left")
                              , c = n.css("padding-right")
                              , d = n.css("padding-top")
                              , f = n.css("padding-bottom")
                              , p = o('<span style="font-size: 12px;text-align: left;"></span>').text(i).css({
                                position: "absolute",
                                left: r.left,
                                top: r.top,
                                height: a - d - f,
                                paddingLeft: s,
                                paddingTop: d,
                                paddingRight: c,
                                paddingBottom: f,
                                color: "#aaa"
                            }).appendTo(n.parent());
                            n.focusin(function(t) {
                                p.hide()
                            }).focusout(function(t) {
                                n.val() || p.show()
                            }),
                            p.click(function(t) {
                                p.hide(),
                                n.focus()
                            })
                        })
                    } catch (t) {}
                }
            };
            t.exports = i
        }
        , function(t, e, n) {
            var o = n(1)
              , i = {
                _check: function() {
                    return "maxLength"in document.createElement("textarea")
                },
                init: function() {
                    this._check() || this.fix()
                },
                fix: function() {
                    o("textarea[maxlength]").each(function(t, e) {
                        var n = o(this)
                          , i = parseInt(n.attr("maxlength"), 10);
                        i > 0 && n.keyup(function() {
                            var t = n.val();
                            t.length > i && (t = t.substring(0, i)),
                            n.val(t)
                        })
                    })
                }
            };
            t.exports = i
        }
        , function(t, e, n) {
            function o(t) {
                a.addTarget(window.parent, "parent"),
                i.init({
                    theme: t,
                    success: function(t) {
                        var e = {
                            message: {
                                type: 3,
                                ticket: t.ticket,
                                randstr: t.randstr
                            }
                        };
                        a.targets.parent.send(JSON.stringify(e))
                    }
                }),
                r.init({
                    theme: t,
                    close: function() {
                        try {
                            var t = {
                                message: {
                                    type: 6
                                }
                            };
                            a.targets.parent.send(JSON.stringify(t))
                        } catch (e) {}
                    }
                }),
                "popup" == s && (t.addBorderTop(),
                r.show())
            }
            var i = (n(1),
            n(9))
              , r = n(16)
              , a = new TCapMsg("securityCode")
              , s = "popup";
            t.exports = {
                init: o
            }
        }
        , function(t, e, n) {
            function o(t, e, n) {
                var o = new Image;
                o.onload = function() {
                    e(o)
                }
                ,
                o.onerror = n || function() {}
                ,
                o.src = t
            }
            function i() {
                $("#capRefreshTips").text(k.c7),
                $("#capImg").css("background", "none"),
                $("#capImg").attr("src", "/tx_capacha_fail.png")
            }
            function r() {
                var t = location.search.substr(1)
                  , e = new Object;
                if (t.length > 0)
                    for (var n = t.split("&"), o = 0; o < n.length; o++) {
                        var i = n[o].split("=");
                        e[i[0]] = i[1]
                    }
                return e
            }
            function a(t) {
                return r(location.search)[t]
            }
            function s(t) {
                M.success = t.success,
                c(),
                g(t.theme),
                d(E, !0)
            }
            function c() {
                0 == a("fb") && $(".help.captcha_icon").hide(),
                "point" == a("showtype") && $(".cap_container").css("border", "none")
            }
            function d(t, e) {
                var n, r = (new Date).getTime();
                n = "" != location.search ? location.search + "&rand=" + Math.random() : "?rand=" + Math.random();
                var a = "/cap_union_new_getcapbysig" + n + "&vsig=" + t + "&ischartype=1";
                o(a, function(t) {
                    $("#capImg").attr("src", a);
                    var n = (new Date).getTime();
                    _.push(25, n - r),
                    e && (S = !0,
                    _.push(32, n),
                    _.send())
                }, function() {
                    i(),
                    e && (S = !1,
                    R = (new Date).getTime()),
                    f(0, (new Date).getTime() - r)
                }),
                e && setTimeout(function() {
                    S || (_.push(30, 2e3),
                    0 >= R && (R = (new Date).getTime()),
                    _.push(32, R),
                    _.send())
                }, 2e3)
            }
            function f(t, e) {
                var n = {
                    tk: T.getInfo().tokenid,
                    capType: "0",
                    clientType: "2",
                    appid: "1252328573"
                }
                  , o = new v;
                o.set(n),
                o.push(t, e),
                o.send()
            }
            function p(t, e, n, o, i) {
                var r = Number(new Date) + (o || 2e3);
                i = i || 100,
                function a() {
                    t() ? e() : Number(new Date) < r ? setTimeout(a, i) : n(new Error("timed out for " + t + ": " + arguments))
                }()
            }
            function l() {
                var t, e = "tokenidiframe_d.js";
                e && -1 == e.indexOf("tokenidiframe_d") && -1 != e.indexOf("tokenidiframe") ? p(function() {
                    return window && window.getFPVryData && "undefined" != typeof (t = window.getFPVryData())
                }, function() {
                    u(t)
                }, function() {
                    u(t),
                    window && window.getFPVryData ? w.send(T.getInfo().tokenid, 4, "") : w.send(T.getInfo().tokenid, 3, "")
                }, 600, 100) : u(t)
            }
            function u(t) {
                if (t = encodeURIComponent(t),
                !$("#submit").hasClass(q)) {
                    var e = $.trim($("#capAns").val());
                    if (0 == e.length)
                        return $("#cap_tip").show().find(".word").text(k.char2),
                        void y.start(function(t) {
                            $("#cap_tip").hide(),
                            t.end()
                        });
                    var n;
                    n = "" != location.search ? location.search + "&rand=" + Math.random() : "?rand=" + Math.random(),
                    T.setData({
                        trycnt: ++P,
                        refreshcnt: C
                    });
                    var o = T.getData()
                      , i = 0;
                    if ("string" == typeof O && "" != O) {
                        O = O.replace(/&quot;/g, '"'),
                        O = O.replace(/&apos;/g, "'");
                        var a;
                        try {
                            a = JSON.parse(O)
                        } catch (s) {}
                        if ("object" == typeof a && "string" == typeof a.randstr && ("string" == typeof a.M || "number" == typeof a.M) && "string" == typeof a.ans) {
                            a.ans = a.ans.toLowerCase(),
                            a.M = parseInt(a.M);
                            for (var c = 0; c < a.M && 1e3 > c; c++) {
                                var d = a.randstr + c
                                  , f = md5(d);
                                if (a.ans == f.toLowerCase()) {
                                    i = c;
                                    break
                                }
                            }
                        }
                    }
                    var p = T.getEks()
                      , l = T.getFps()
                      , u = T.getTlg()
                      , g = r() || {}
                      , v = $.extend(g, {
                        subcapclass: "0",
                        vsig: E,
                        cdata: i,
                        "bcbbfe": o,
                        websig: "fa604753ae27cb0228d7424060249bf4d202173854eec28331ca7905a6c9ce6b4950dff0e76de3761c4ee7d2c511ee4a08e5c8fb9a568d510131a45b4cedff3d",
                        ans: e,
                        eks: p,
                        fps: l,
                        fpinfo: t,
                        tlg: u
                    })
                      , x = (new Date).getTime();
                    $.ajax({
                        type: "POST",
                        url: "/cap_union_new_verify?random=" + +new Date,
                        data: v,
                        dataType: "json",
                        cache: !1,
                        success: function(t) {
                            var e = (new Date).getTime();
                            if (_.push(30, 0),
                            _.push(27, e - x),
                            _.send(),
                            t && 0 == t.errorCode)
                                setTimeout(function() {
                                    m(),
                                    M.success(t)
                                }, 100);
                            else if (51 == t.errorCode) {
                                var n = {
                                    message: {
                                        type: 8,
                                        sess: t.sess
                                    }
                                };
                                L.targets.parent.send(JSON.stringify(n))
                            } else
                                $("#cap_tip").show().find(".word").text(k.char3),
                                y.start(function(t) {
                                    $("#cap_tip").hide(),
                                    t.end()
                                }),
                                h()
                        },
                        error: function(t, e, n) {
                            var o = (new Date).getTime();
                            _.push(30, 0),
                            _.push(27, o - x),
                            _.send();
                            var i = ""
                              , r = 0;
                            t && t.status && (r = t.status),
                            e && (i += e + ":"),
                            n && (i += n),
                            w.send(T.getInfo().tokenid, b.ERROR_TYPE_AJAX_VERIFY, i, r)
                        }
                    })
                }
            }
            function h() {
                C++,
                T.clearData(),
                $("#capAns").val(""),
                $("#capAns").focus();
                var t;
                t = "" != location.search ? location.search + "&rand=" + Math.random() : "?rand=" + Math.random();
                var e = (new Date).getTime();
                $.ajax({
                    type: "GET",
                    url: "/cap_union_new_getsig" + t + "ischartype=1",
                    dataType: "json",
                    success: function(t) {
                        var n = (new Date).getTime();
                        if (_.push(26, n - e),
                        52 == t.ret) {
                            var o = {
                                message: {
                                    type: 15
                                }
                            };
                            return void L.targets.parent.send(JSON.stringify(o))
                        }
                        t && t.vsig ? (E = t.vsig,
                        O = t.chlg ? JSON.stringify(t.chlg) : "",
                        d(t.vsig, !1)) : i()
                    },
                    error: function(t, e, n) {
                        i();
                        var o = ""
                          , r = 0;
                        t && t.status && (r = t.status),
                        e && (o += e + ":"),
                        e && (o += n),
                        w.send(T.getInfo().tokenid, b.ERROR_TYPE_AJAX_GETSIG, o, r)
                    }
                })
            }
            function g(t) {
                T.setData({
                    clientType: I
                }),
                $(document).on("keydown", function(t) {
                    t && 13 == t.keyCode && l()
                }),
                $(".captcha_icon").on("mouseenter mouseleave mousedown", function(e) {
                    var n = $(this).find(".tip")
                      , o = $(this).find("a");
                    "mouseenter" == e.type && (t.dealEvents(o),
                    n.show()),
                    ("mouseleave" == e.type || "mousedown" == e.type) && (t.unDealEvents(o),
                    n.hide())
                }),
                $("#reload, #capImg").on("click", h),
                $("#submit").on("click", l)
            }
            function m() {
                $(".tip_success").show(),
                $("#submit").addClass(q),
                $("#capAns").blur()
            }
            var b = n(10)
              , _ = n(11)
              , v = n(13)
              , w = n(14)
              , x = n(15)
              , T = n(12)
              , y = x(1e3)
              , k = n(5)
              , E = ""
              , I = "2"
              , C = 0
              , P = 0
              , D = "1252328573"
              , O = ""
              , R = (!!window.ActiveXObject,
            0)
              , q = "btn_disabled"
              , S = !1
              , M = {
                success: function() {}
            }
              , A = "open"
              , L = new TCapMsg("securityCode");
            L.addTarget(window.parent, "parent");
            var j;
            j = {
                message: {
                    type: 14
                }
            },
            L.targets.parent.send(JSON.stringify(j)),
            "inner" == A ? -1 == window.location.href.indexOf("https") ? _.set(21406, 1, 1, D) : _.set(21408, 1, 1, D) : -1 == window.location.href.indexOf("https") ? _.set(21407, 1, 1, D) : _.set(21412, 1, 1, D),
            t.exports = {
                init: s
            }
        }
        , function(t, e) {
            t.exports = {
                ERROR_TYPE_AJAX_GETSIG: 9,
                ERROR_TYPE_AJAX_VERIFY: 8,
                ERROR_TYPE_IMAGE_BEYONDSIZE: 7,
                ERROR_TYPE_MB_FP_REGISTER_TIMEOUT: 6,
                ERROR_TYPE_MB_FPJS_DOWNLOAD_FAIL: 5,
                ERROR_TYPE_PC_FP_REGISTER_TIMEOUT: 4,
                ERROR_TYPE_PC_FPJS_DOWNLOAD_FAIL: 3,
                ERROR_TYPE_BADJS_DOWNLOAD_FAIL: 2,
                ERROR_TYPE_BADJS_REPORT: 1
            }
        }
        , function(t, e, n) {
            var o = !!window.ActiveXObject
              , i = n(12)
              , r = {
                timePoints: [],
                flag1: 21406,
                flag2: 1,
                flag3: 1,
                appid: 0,
                push: function(t, e) {
                    this.timePoints[t] = e,
                    32 == t && !o && window.performance && window.performance.timing && (this.timePoints[32] = this.timePoints[32] - window.performance.timing.navigationStart)
                },
                set: function(t, e, n, o) {
                    this.flag1 = t,
                    this.flag2 = e,
                    this.flag3 = n,
                    this.appid = o
                },
                send: function(t) {
                    var e = [];
                    if (t)
                        e.push(t + "=" + this.timePoints[t]);
                    else {
                        if (!o && window.performance && window.performance.timing) {
                            var n = window.performance.timing;
                            this.timePoints[1] = n.unloadEventStart,
                            this.timePoints[2] = n.unloadEventEnd,
                            this.timePoints[3] = n.redirectStart,
                            this.timePoints[4] = n.redirectEnd,
                            this.timePoints[5] = n.fetchStart,
                            this.timePoints[6] = n.domainLookupStart,
                            this.timePoints[7] = n.domainLookupEnd,
                            this.timePoints[8] = n.connectStart,
                            this.timePoints[9] = n.connectEnd,
                            this.timePoints[10] = n.requestStart,
                            this.timePoints[11] = n.responseStart,
                            this.timePoints[12] = n.responseEnd,
                            this.timePoints[13] = n.domLoading,
                            this.timePoints[14] = n.domInteractive,
                            this.timePoints[15] = n.domContentLoadedEventStart,
                            this.timePoints[16] = n.domContentLoadedEventEnd,
                            this.timePoints[17] = n.domComplete,
                            this.timePoints[18] = n.loadEventStart,
                            this.timePoints[19] = n.loadEventEnd,
                            this.timePoints[17] <= 0 && (this.timePoints[17] = n.domContentLoadedEventEnd),
                            this.timePoints[18] <= 0 && (this.timePoints[18] = this.timePoints[17]),
                            this.timePoints[19] <= 0 && (this.timePoints[19] = this.timePoints[18]),
                            this.timePoints[20] = this.timePoints[19] - n.navigationStart,
                            this.timePoints[21] = this.timePoints[17] - n.responseEnd,
                            this.timePoints[22] = n.domainLookupEnd - n.domainLookupStart,
                            this.timePoints[23] = n.responseStart - n.navigationStart,
                            this.timePoints[24] = n.connectEnd - n.connectStart,
                            this.timePoints[29] = this.appid,
                            this.timePoints[31] = i.getInfo().tokenid
                        }
                        for (var r = 1; 33 > r; r++)
                            e.push("undefined" != typeof this.timePoints[r] ? r + "=" + this.timePoints[r] : r + "=0");
                        e.push("33=")
                    }
                    var a, s, c, d, f = "flag1=" + this.flag1 + "&flag2=" + this.flag2 + "&flag3=" + this.flag3 + "&" + e.join("&");
                    -1 == window.location.href.indexOf("https") ? (a = "http://dj.captcha.qq.com/caplog?appid=20128&platform=pc&" + f,
                    c = "http://report.huatuo.qq.com/report.cgi?appid=20128&platform=pc&speedparams=" + escape(f)) : (a = "https://dj.captcha.qq.com/caplog?appid=20128&platform=pc&" + f,
                    c = "https://report.huatuo.qq.com/report.cgi?appid=20128&platform=pc&speedparams=" + escape(f)),
                    s = new Image,
                    s.src = a,
                    d = new Image,
                    d.src = c
                }
            };
            t.exports = r
        }
        , function(t, e) {
            function n(t) {
                "undefined" != typeof TDC && TDC.setData && TDC.setData(t)
            }
            function o() {
                "undefined" != typeof TDC && TDC.clearTc && TDC.clearTc()
            }
            function i() {
                var t = "";
                return "undefined" != typeof TDC && TDC.getData && (t = TDC.getData(!0)),
                t
            }
            function r() {
                var t = "";
                return "undefined" != typeof TDC && TDC.getInfo && (t = TDC.getInfo()),
                t
            }
            function a() {
                var t = "";
                return "undefined" != typeof TDC && TDC.getInfo && (t = TDC.getInfo()) && (t = t.info),
                t
            }
            function s() {
                var t = "";
                return "undefined" != typeof TDC && TDC.getInfo && (t = TDC.getInfo()) && (t = t.fps),
                t
            }
            function c() {
                var t = "undefined" == typeof TDC ? 0 : 1;
                return t
            }
            t.exports = {
                setData: n,
                getData: i,
                clearData: o,
                getInfo: r,
                getEks: a,
                getFps: s,
                getTlg: c
            }
        }
        , function(t, e) {
            function n() {
                this.url = "https://aq.qq.com/cn2/manage/mbtoken/cap_monitor",
                this.obj = {},
                this.points = []
            }
            n.prototype = {
                push: function(t, e) {
                    this.points[t] = e
                },
                set: function(t) {
                    this.obj.tk = t.tk,
                    this.obj.clientType = t.clientType,
                    this.obj.appid = t.appid,
                    this.obj.capType = t.capType
                },
                send: function() {
                    this.obj.data = this.points.slice();
                    var t = new Image;
                    this.url += "?appid=" + encodeURIComponent(this.obj.appid) + "&uid=&clientType=" + encodeURIComponent(this.obj.clientType) + "&capType=" + encodeURIComponent(this.obj.capType) + "&tk=" + encodeURIComponent(this.obj.tk),
                    this.url += "&t0=" + this.points[0],
                    this.url += "&t1=" + this.points[1],
                    this.url += "&t2=" + this.points[2],
                    this.url += "&rnd=" + Math.random(),
                    t.src = this.url
                }
            },
            t.exports = n
        }
        , function(t, e) {
            var n = {
                send: function(t, e, n, o) {
                    try {
                        var i = new Image
                          , r = document.referrer
                          , a = location.href;
                        r = r.length > 500 ? r.substr(0, 500) : r,
                        a = a.length > 400 ? a.substr(0, 400) : a,
                        n = n && n.length > 300 ? n.substr(0, 300) : n,
                        o = o || 0;
                        var s = "https://aq.qq.com/cn2/manage/mbtoken/cap_monitor?uid=&subcapclass=0&appid=1252328573&referer=" + encodeURIComponent(r) + "&href=" + encodeURIComponent(a);
                        s += "&tokenid=" + t,
                        s += "&type=" + e,
                        s += "&reason=" + encodeURIComponent(n),
                        s += "&errType=" + o,
                        i.src = s
                    } catch (c) {}
                }
            };
            t.exports = n
        }
        , function(t, e) {
            var n = function(t) {
                var e = {
                    id: "",
                    time: t,
                    start: function(t) {
                        this.end();
                        var e = this.time
                          , n = this;
                        this.id = setTimeout(function() {
                            t(n)
                        }, e)
                    },
                    end: function() {
                        clearTimeout(this.id)
                    }
                };
                return e
            };
            t.exports = n
        }
        , function(t, e, n) {
            var o = n(1)
              , i = {
                header: o(".container_head"),
                hideTitle: function() {
                    this.header.find(".title").hide()
                },
                showTitle: function() {
                    this.header.find(".title").show()
                },
                setTitle: function(t) {
                    this.header.find(".title").html(t)
                },
                show: function(t) {
                    this.header.show()
                },
                init: function(t) {
                    this.header.find(".icon_close").on("mouseenter mouseleave click", function(e) {
                        var n = o(this);
                        "mouseenter" == e.type && t.theme && t.theme.dealEvents(n),
                        "mouseleave" == e.type && t.theme && t.theme.unDealEvents(n),
                        "click" == e.type && t.close && t.close()
                    })
                }
            };
            t.exports = i
        }
        , function(t, e, n) {
            var o = n(12)
              , i = n(4)
              , r = "1252328573"
              , a = "611204476";
            $(function() {
                $("#showFB").on("click", function() {
                    var t = "https://support.qq.com/products/2130"
                      , e = o.getInfo().tokenid
                      , n = i.getBrowserInfo()
                      , s = i.getOSInfo();
                    t += t && t.indexOf("?") > 1 ? "&" : "?",
                    t = t + "clientInfo=" + n.name + "&clientVersion=" + n.version + "&os=" + s.name + "&osVersion=" + s.version + "&netType=" + r + "&imei=" + e,
                    a && a.length > 0 && (t = t + "&customInfo=custominfo:clientIP:" + a),
                    window.open(t)
                })
            })
        }
        ]);
    </script>
    <script type=text/javascript src=https://captcha.gtimg.com/open/2/ft.js></script>
</html>
