'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var collection_1 = require('angular2/src/facade/collection');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var lang_1 = require('angular2/src/facade/lang');
var Log = (function () {
    function Log() {
        this.logItems = [];
    }
    Log.prototype.add = function (value) { this.logItems.push(value); };
    Log.prototype.fn = function (value) {
        var _this = this;
        return function (a1, a2, a3, a4, a5) {
            if (a1 === void 0) { a1 = null; }
            if (a2 === void 0) { a2 = null; }
            if (a3 === void 0) { a3 = null; }
            if (a4 === void 0) { a4 = null; }
            if (a5 === void 0) { a5 = null; }
            _this.logItems.push(value);
        };
    };
    Log.prototype.clear = function () { this.logItems = []; };
    Log.prototype.result = function () { return this.logItems.join("; "); };
    Log = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Log);
    return Log;
})();
exports.Log = Log;
exports.browserDetection = null;
var BrowserDetection = (function () {
    function BrowserDetection(ua) {
        if (lang_1.isPresent(ua)) {
            this._ua = ua;
        }
        else {
            this._ua = lang_1.isPresent(dom_adapter_1.DOM) ? dom_adapter_1.DOM.getUserAgent() : '';
        }
    }
    BrowserDetection.setup = function () { exports.browserDetection = new BrowserDetection(null); };
    Object.defineProperty(BrowserDetection.prototype, "isFirefox", {
        get: function () { return this._ua.indexOf('Firefox') > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isAndroid", {
        get: function () {
            return this._ua.indexOf('Mozilla/5.0') > -1 && this._ua.indexOf('Android') > -1 &&
                this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Chrome') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isEdge", {
        get: function () { return this._ua.indexOf('Edge') > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isIE", {
        get: function () { return this._ua.indexOf('Trident') > -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isWebkit", {
        get: function () {
            return this._ua.indexOf('AppleWebKit') > -1 && this._ua.indexOf('Edge') == -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isIOS7", {
        get: function () {
            return this._ua.indexOf('iPhone OS 7') > -1 || this._ua.indexOf('iPad OS 7') > -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "isSlow", {
        get: function () { return this.isAndroid || this.isIE || this.isIOS7; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetection.prototype, "supportsIntlApi", {
        // The Intl API is only properly supported in recent Chrome and Opera.
        // Note: Edge is disguised as Chrome 42, so checking the "Edge" part is needed,
        // see https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
        get: function () {
            return this._ua.indexOf('Chrome/4') > -1 && this._ua.indexOf('Edge') == -1;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserDetection;
})();
exports.BrowserDetection = BrowserDetection;
function dispatchEvent(element, eventType) {
    dom_adapter_1.DOM.dispatchEvent(element, dom_adapter_1.DOM.createEvent(eventType));
}
exports.dispatchEvent = dispatchEvent;
function el(html) {
    return dom_adapter_1.DOM.firstChild(dom_adapter_1.DOM.content(dom_adapter_1.DOM.createTemplate(html)));
}
exports.el = el;
var _RE_SPECIAL_CHARS = ['-', '[', ']', '/', '{', '}', '\\', '(', ')', '*', '+', '?', '.', '^', '$', '|'];
var _ESCAPE_RE = lang_1.RegExpWrapper.create("[\\" + _RE_SPECIAL_CHARS.join('\\') + "]");
function containsRegexp(input) {
    return lang_1.RegExpWrapper.create(lang_1.StringWrapper.replaceAllMapped(input, _ESCAPE_RE, function (match) { return ("\\" + match[0]); }));
}
exports.containsRegexp = containsRegexp;
function normalizeCSS(css) {
    css = lang_1.StringWrapper.replaceAll(css, /\s+/g, ' ');
    css = lang_1.StringWrapper.replaceAll(css, /:\s/g, ':');
    css = lang_1.StringWrapper.replaceAll(css, /'/g, '"');
    css = lang_1.StringWrapper.replaceAll(css, / }/g, '}');
    css = lang_1.StringWrapper.replaceAllMapped(css, /url\((\"|\s)(.+)(\"|\s)\)(\s*)/g, function (match) { return ("url(\"" + match[2] + "\")"); });
    css = lang_1.StringWrapper.replaceAllMapped(css, /\[(.+)=([^"\]]+)\]/g, function (match) { return ("[" + match[1] + "=\"" + match[2] + "\"]"); });
    return css;
}
exports.normalizeCSS = normalizeCSS;
var _singleTagWhitelist = ['br', 'hr', 'input'];
function stringifyElement(el) {
    var result = '';
    if (dom_adapter_1.DOM.isElementNode(el)) {
        var tagName = dom_adapter_1.DOM.tagName(el).toLowerCase();
        // Opening tag
        result += "<" + tagName;
        // Attributes in an ordered way
        var attributeMap = dom_adapter_1.DOM.attributeMap(el);
        var keys = [];
        attributeMap.forEach(function (v, k) { return keys.push(k); });
        collection_1.ListWrapper.sort(keys);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var attValue = attributeMap.get(key);
            if (!lang_1.isString(attValue)) {
                result += " " + key;
            }
            else {
                result += " " + key + "=\"" + attValue + "\"";
            }
        }
        result += '>';
        // Children
        var childrenRoot = dom_adapter_1.DOM.templateAwareRoot(el);
        var children = lang_1.isPresent(childrenRoot) ? dom_adapter_1.DOM.childNodes(childrenRoot) : [];
        for (var j = 0; j < children.length; j++) {
            result += stringifyElement(children[j]);
        }
        // Closing tag
        if (!collection_1.ListWrapper.contains(_singleTagWhitelist, tagName)) {
            result += "</" + tagName + ">";
        }
    }
    else if (dom_adapter_1.DOM.isCommentNode(el)) {
        result += "<!--" + dom_adapter_1.DOM.nodeValue(el) + "-->";
    }
    else {
        result += dom_adapter_1.DOM.getText(el);
    }
    return result;
}
exports.stringifyElement = stringifyElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXJFVktkeHZCLnRtcC9hbmd1bGFyMi9zcmMvdGVzdGluZy91dGlscy50cyJdLCJuYW1lcyI6WyJMb2ciLCJMb2cuY29uc3RydWN0b3IiLCJMb2cuYWRkIiwiTG9nLmZuIiwiTG9nLmNsZWFyIiwiTG9nLnJlc3VsdCIsIkJyb3dzZXJEZXRlY3Rpb24iLCJCcm93c2VyRGV0ZWN0aW9uLmNvbnN0cnVjdG9yIiwiQnJvd3NlckRldGVjdGlvbi5zZXR1cCIsIkJyb3dzZXJEZXRlY3Rpb24uaXNGaXJlZm94IiwiQnJvd3NlckRldGVjdGlvbi5pc0FuZHJvaWQiLCJCcm93c2VyRGV0ZWN0aW9uLmlzRWRnZSIsIkJyb3dzZXJEZXRlY3Rpb24uaXNJRSIsIkJyb3dzZXJEZXRlY3Rpb24uaXNXZWJraXQiLCJCcm93c2VyRGV0ZWN0aW9uLmlzSU9TNyIsIkJyb3dzZXJEZXRlY3Rpb24uaXNTbG93IiwiQnJvd3NlckRldGVjdGlvbi5zdXBwb3J0c0ludGxBcGkiLCJkaXNwYXRjaEV2ZW50IiwiZWwiLCJjb250YWluc1JlZ2V4cCIsIm5vcm1hbGl6ZUNTUyIsInN0cmluZ2lmeUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QywyQkFBc0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUN2RSw0QkFBa0IsdUNBQXVDLENBQUMsQ0FBQTtBQUMxRCxxQkFBd0UsMEJBQTBCLENBQUMsQ0FBQTtBQUVuRztJQUlFQTtRQUFnQkMsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFBQ0EsQ0FBQ0E7SUFFckNELGlCQUFHQSxHQUFIQSxVQUFJQSxLQUFLQSxJQUFVRSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUUv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QUNBO1FBQ0RBLE1BQU1BLElBQUlBLEdBQUdBLENBQUNBO1FBRWRBLFdBQVdBO1FBQ1hBLElBQUlBLFlBQVlBLEdBQUdBLGlCQUFHQSxDQUFDQSxpQkFBaUJBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBQzdDQSxJQUFJQSxRQUFRQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsR0FBR0EsaUJBQUdBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO1FBQzNFQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxRQUFRQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUN6Q0EsTUFBTUEsSUFBSUEsZ0JBQWdCQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMxQ0EsQ0FBQ0E7UUFFREEsY0FBY0E7UUFDZEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0Esd0JBQVdBLENBQUNBLFFBQVFBLENBQUNBLG1CQUFtQkEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDeERBLE1BQU1BLElBQUlBLE9BQUtBLE9BQU9BLE1BQUdBLENBQUNBO1FBQzVCQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxpQkFBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDakNBLE1BQU1BLElBQUlBLFNBQU9BLGlCQUFHQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxDQUFDQSxRQUFLQSxDQUFDQTtJQUMxQ0EsQ0FBQ0E7SUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDTkEsTUFBTUEsSUFBSUEsaUJBQUdBLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO0lBQzVCQSxDQUFDQTtJQUVEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtBQUNoQkEsQ0FBQ0E7QUExQ2Usd0JBQWdCLG1CQTBDL0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xpc3RXcmFwcGVyLCBNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtET019IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX2FkYXB0ZXInO1xuaW1wb3J0IHtpc1ByZXNlbnQsIGlzU3RyaW5nLCBSZWdFeHBXcmFwcGVyLCBTdHJpbmdXcmFwcGVyLCBSZWdFeHB9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2cge1xuICBsb2dJdGVtczogYW55W107XG5cbiAgY29uc3RydWN0b3IoKSB7IHRoaXMubG9nSXRlbXMgPSBbXTsgfVxuXG4gIGFkZCh2YWx1ZSk6IHZvaWQgeyB0aGlzLmxvZ0l0ZW1zLnB1c2godmFsdWUpOyB9XG5cbiAgZm4odmFsdWUpIHtcbiAgICByZXR1cm4gKGExOiBhbnkgPSBudWxsLCBhMjogYW55ID0gbnVsbCwgYTM6IGFueSA9IG51bGwsIGE0OiBhbnkgPSBudWxsLCBhNTogYW55ID0gbnVsbCkgPT4ge1xuICAgICAgdGhpcy5sb2dJdGVtcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHsgdGhpcy5sb2dJdGVtcyA9IFtdOyB9XG5cbiAgcmVzdWx0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmxvZ0l0ZW1zLmpvaW4oXCI7IFwiKTsgfVxufVxuXG5leHBvcnQgdmFyIGJyb3dzZXJEZXRlY3Rpb246IEJyb3dzZXJEZXRlY3Rpb24gPSBudWxsO1xuXG5leHBvcnQgY2xhc3MgQnJvd3NlckRldGVjdGlvbiB7XG4gIHByaXZhdGUgX3VhOiBzdHJpbmc7XG5cbiAgc3RhdGljIHNldHVwKCkgeyBicm93c2VyRGV0ZWN0aW9uID0gbmV3IEJyb3dzZXJEZXRlY3Rpb24obnVsbCk7IH1cblxuICBjb25zdHJ1Y3Rvcih1YTogc3RyaW5nKSB7XG4gICAgaWYgKGlzUHJlc2VudCh1YSkpIHtcbiAgICAgIHRoaXMuX3VhID0gdWE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VhID0gaXNQcmVzZW50KERPTSkgPyBET00uZ2V0VXNlckFnZW50KCkgOiAnJztcbiAgICB9XG4gIH1cblxuICBnZXQgaXNGaXJlZm94KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fdWEuaW5kZXhPZignRmlyZWZveCcpID4gLTE7IH1cblxuICBnZXQgaXNBbmRyb2lkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl91YS5pbmRleE9mKCdNb3ppbGxhLzUuMCcpID4gLTEgJiYgdGhpcy5fdWEuaW5kZXhPZignQW5kcm9pZCcpID4gLTEgJiZcbiAgICAgICAgICAgdGhpcy5fdWEuaW5kZXhPZignQXBwbGVXZWJLaXQnKSA+IC0xICYmIHRoaXMuX3VhLmluZGV4T2YoJ0Nocm9tZScpID09IC0xO1xuICB9XG5cbiAgZ2V0IGlzRWRnZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3VhLmluZGV4T2YoJ0VkZ2UnKSA+IC0xOyB9XG5cbiAgZ2V0IGlzSUUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl91YS5pbmRleE9mKCdUcmlkZW50JykgPiAtMTsgfVxuXG4gIGdldCBpc1dlYmtpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdWEuaW5kZXhPZignQXBwbGVXZWJLaXQnKSA+IC0xICYmIHRoaXMuX3VhLmluZGV4T2YoJ0VkZ2UnKSA9PSAtMTtcbiAgfVxuXG4gIGdldCBpc0lPUzcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3VhLmluZGV4T2YoJ2lQaG9uZSBPUyA3JykgPiAtMSB8fCB0aGlzLl91YS5pbmRleE9mKCdpUGFkIE9TIDcnKSA+IC0xO1xuICB9XG5cbiAgZ2V0IGlzU2xvdygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaXNBbmRyb2lkIHx8IHRoaXMuaXNJRSB8fCB0aGlzLmlzSU9TNzsgfVxuXG4gIC8vIFRoZSBJbnRsIEFQSSBpcyBvbmx5IHByb3Blcmx5IHN1cHBvcnRlZCBpbiByZWNlbnQgQ2hyb21lIGFuZCBPcGVyYS5cbiAgLy8gTm90ZTogRWRnZSBpcyBkaXNndWlzZWQgYXMgQ2hyb21lIDQyLCBzbyBjaGVja2luZyB0aGUgXCJFZGdlXCIgcGFydCBpcyBuZWVkZWQsXG4gIC8vIHNlZSBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2hoODY5MzAxKHY9dnMuODUpLmFzcHhcbiAgZ2V0IHN1cHBvcnRzSW50bEFwaSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdWEuaW5kZXhPZignQ2hyb21lLzQnKSA+IC0xICYmIHRoaXMuX3VhLmluZGV4T2YoJ0VkZ2UnKSA9PSAtMTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudFR5cGUpOiB2b2lkIHtcbiAgRE9NLmRpc3BhdGNoRXZlbnQoZWxlbWVudCwgRE9NLmNyZWF0ZUV2ZW50KGV2ZW50VHlwZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWwoaHRtbDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICByZXR1cm4gPEhUTUxFbGVtZW50PkRPTS5maXJzdENoaWxkKERPTS5jb250ZW50KERPTS5jcmVhdGVUZW1wbGF0ZShodG1sKSkpO1xufVxuXG52YXIgX1JFX1NQRUNJQUxfQ0hBUlMgPVxuICAgIFsnLScsICdbJywgJ10nLCAnLycsICd7JywgJ30nLCAnXFxcXCcsICcoJywgJyknLCAnKicsICcrJywgJz8nLCAnLicsICdeJywgJyQnLCAnfCddO1xudmFyIF9FU0NBUEVfUkUgPSBSZWdFeHBXcmFwcGVyLmNyZWF0ZShgW1xcXFwke19SRV9TUEVDSUFMX0NIQVJTLmpvaW4oJ1xcXFwnKX1dYCk7XG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnNSZWdleHAoaW5wdXQ6IHN0cmluZyk6IFJlZ0V4cCB7XG4gIHJldHVybiBSZWdFeHBXcmFwcGVyLmNyZWF0ZShcbiAgICAgIFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbE1hcHBlZChpbnB1dCwgX0VTQ0FQRV9SRSwgKG1hdGNoKSA9PiBgXFxcXCR7bWF0Y2hbMF19YCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ1NTKGNzczogc3RyaW5nKTogc3RyaW5nIHtcbiAgY3NzID0gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsKGNzcywgL1xccysvZywgJyAnKTtcbiAgY3NzID0gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsKGNzcywgLzpcXHMvZywgJzonKTtcbiAgY3NzID0gU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsKGNzcywgLycvZywgJ1wiJyk7XG4gIGNzcyA9IFN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbChjc3MsIC8gfS9nLCAnfScpO1xuICBjc3MgPSBTdHJpbmdXcmFwcGVyLnJlcGxhY2VBbGxNYXBwZWQoY3NzLCAvdXJsXFwoKFxcXCJ8XFxzKSguKykoXFxcInxcXHMpXFwpKFxccyopL2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF0Y2gpID0+IGB1cmwoXCIke21hdGNoWzJdfVwiKWApO1xuICBjc3MgPSBTdHJpbmdXcmFwcGVyLnJlcGxhY2VBbGxNYXBwZWQoY3NzLCAvXFxbKC4rKT0oW15cIlxcXV0rKVxcXS9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1hdGNoKSA9PiBgWyR7bWF0Y2hbMV19PVwiJHttYXRjaFsyXX1cIl1gKTtcbiAgcmV0dXJuIGNzcztcbn1cblxudmFyIF9zaW5nbGVUYWdXaGl0ZWxpc3QgPSBbJ2JyJywgJ2hyJywgJ2lucHV0J107XG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5RWxlbWVudChlbCk6IHN0cmluZyB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKERPTS5pc0VsZW1lbnROb2RlKGVsKSkge1xuICAgIHZhciB0YWdOYW1lID0gRE9NLnRhZ05hbWUoZWwpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBPcGVuaW5nIHRhZ1xuICAgIHJlc3VsdCArPSBgPCR7dGFnTmFtZX1gO1xuXG4gICAgLy8gQXR0cmlidXRlcyBpbiBhbiBvcmRlcmVkIHdheVxuICAgIHZhciBhdHRyaWJ1dGVNYXAgPSBET00uYXR0cmlidXRlTWFwKGVsKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGF0dHJpYnV0ZU1hcC5mb3JFYWNoKCh2LCBrKSA9PiBrZXlzLnB1c2goaykpO1xuICAgIExpc3RXcmFwcGVyLnNvcnQoa2V5cyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIHZhciBhdHRWYWx1ZSA9IGF0dHJpYnV0ZU1hcC5nZXQoa2V5KTtcbiAgICAgIGlmICghaXNTdHJpbmcoYXR0VmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdCArPSBgICR7a2V5fWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gYCAke2tleX09XCIke2F0dFZhbHVlfVwiYDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ICs9ICc+JztcblxuICAgIC8vIENoaWxkcmVuXG4gICAgdmFyIGNoaWxkcmVuUm9vdCA9IERPTS50ZW1wbGF0ZUF3YXJlUm9vdChlbCk7XG4gICAgdmFyIGNoaWxkcmVuID0gaXNQcmVzZW50KGNoaWxkcmVuUm9vdCkgPyBET00uY2hpbGROb2RlcyhjaGlsZHJlblJvb3QpIDogW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgcmVzdWx0ICs9IHN0cmluZ2lmeUVsZW1lbnQoY2hpbGRyZW5bal0pO1xuICAgIH1cblxuICAgIC8vIENsb3NpbmcgdGFnXG4gICAgaWYgKCFMaXN0V3JhcHBlci5jb250YWlucyhfc2luZ2xlVGFnV2hpdGVsaXN0LCB0YWdOYW1lKSkge1xuICAgICAgcmVzdWx0ICs9IGA8LyR7dGFnTmFtZX0+YDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoRE9NLmlzQ29tbWVudE5vZGUoZWwpKSB7XG4gICAgcmVzdWx0ICs9IGA8IS0tJHtET00ubm9kZVZhbHVlKGVsKX0tLT5gO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCArPSBET00uZ2V0VGV4dChlbCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl19