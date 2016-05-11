$(function () {
    $(window).scroll(function () {
        if ($(".right_navbar").attr("closed") == "1") return;
        try {
            var isIE = !!window.ActiveXObject;
            var isIE6 = isIE && !window.XMLHttpRequest;
            if (isIE6) {
                $(".right_navbar").hide();
            }
            else {
                if ($(window).scrollTop() > 550) {
                    $(".right_navbar").fadeIn();
                }
                else {
                    $(".right_navbar").fadeOut();
                }
            }
        }
        catch (ex) {}
    });
    $(".close_nav").click(function () {
        $(".right_navbar").css("display", "none");
        $(".right_navbar").attr("closed", 1);
    });

    var hui = {};
    hui.c = function (searchClass, node, tag) {
        if (document.getElementsByClassName) {
            var nodes = (node || document).getElementsByClassName(searchClass),
                result = nodes;
            if (tag != undefined) {
                result = [];
                for (var i = 0; node = nodes[i++];) {
                    if (tag !== "*" && node.tagName === tag.toUpperCase()) {
                        result.push(node);
                    }
                    else {
                        result.push(node);
                    }
                }
            }
            return result;
        }
        else {
            node = node || document;
            tag = tag || "*";
            var classes = searchClass.split(" "),
                elements = (tag === "*" && node.all) ? node.all : node.getElementsByTagName(tag),
                patterns = [],
                returnElements = [],
                current,
                match;
            var i = classes.length;
            while (--i >= 0) {
                patterns.push(new RegExp("(^|\\s)" + classes[i] + "(\\s|$)"));
            }
            var j = elements.length;
            while (--j >= 0) {
                current = elements[j];
                match = false;
                for (var k = 0, kl = patterns.length; k < kl; k++) {
                    match = patterns[k].test(current.className);
                    if (!match) {
                        break;
                    }
                }
                if (match) {
                    returnElements.push(current);
                }
            }
            return returnElements;
        }
    };

    var isScrolling = false;
    $(".run_to_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });

    function run_click() {
        if (!isScrolling) {
            isScrolling = true;
            var index = this.index;
            var main_location = $(".run_item" + index).offset().top - 36;
            var oScrollTop = document.body.scrollTop || $("html,body").scrollTop();
            if (main_location == oScrollTop) {
                $("html,body").stop();
                isScrolling = false;
            }
            else {
                $("html,body").animate({
                    scrollTop: main_location
                }, 1000, function () {
                    isScrolling = false;
                });
            }
        }
    };
    for (var i = 1; i <= 8; i++) {
        var list = hui.c('run_to_' + i);
        for (j = 0; j < list.length; j++) {
            list[j].index = i;
            list[j].onclick = run_click;
        }
    };

})