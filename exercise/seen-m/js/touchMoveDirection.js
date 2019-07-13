; (function ($, window, document, undefined) {
    var touchMoveDirection = function (ele, opt) {
        var $this = this;
        $this.$element = $(ele);
        $this._default = {
            onLeft: null,
            onUp: null,
            onRight: null,
            onDown: null
        }
        $this.option = $.extend({}, $this._default, opt);

        $this.startX = 0;
        $this.startY = 0;
        $this.endX = 0;
        $this.endY = 0;
        $this.$element.on("touchstart", function (e) {
            var touchPosition = e.originalEvent.targetTouches[0];
            $this.startX = touchPosition.pageX;
            $this.startY = touchPosition.pageY;
        });

        $this.$element.on("touchend", function (e) {

            var touchPosition = e.originalEvent.changedTouches[0];
            $this.endX = touchPosition.pageX;
            $this.endY = touchPosition.pageY;

            $this.invokeDirectionCallBack();
        });
    }

    touchMoveDirection.prototype = {
        getAngle: function (angx, angy) {
            return Math.atan2(angy, angx) * 180 / Math.PI;
        },
        invokeDirectionCallBack: function () {
            var $this = this;

            var angx = $this.endX - $this.startX;
            var angy = $this.endY - $this.startY;

            //如果滑动距离太短
            if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
                return;
            }

            var angle = $this.getAngle(angx, angy);
            if (-135 <= angle && angle <= -45) {
                //Up
                if (typeof ($this.option.onUp) == "function") {
                    $this.option.onUp();
                }
            } else if (45 <= angle && angle < 135) {
                //Down
                if (typeof ($this.option.onDown) == "function") {
                    $this.option.onDown();
                }
            } else if ((135 <= angle && angle <= 180) || (-180 <= angle && angle < -135)) {
                //Left
                if (typeof ($this.option.onLeft) == "function") {
                    $this.option.onLeft();
                }
            } else if (-45 <= angle && angle <= 45) {
                //Right
                if (typeof ($this.option.onRight) == "function") {
                    $this.option.onRight();
                }
            }
        }
    }

    $.fn.touchMoveDirection = function (opt) {
        return new touchMoveDirection(this, opt);
    }
})(jQuery, window, document);