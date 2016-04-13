'use strict';var lang_1 = require('angular2/src/facade/lang');
var collection_1 = require('angular2/src/facade/collection');
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new collection_1.Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var split = param.split('=');
            var key = split[0];
            var val = split[1];
            var list = lang_1.isPresent(map.get(key)) ? map.get(key) : [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 */
var URLSearchParams = (function () {
    function URLSearchParams(rawParams) {
        if (rawParams === void 0) { rawParams = ''; }
        this.rawParams = rawParams;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams();
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        if (collection_1.isListLikeIterable(storedParam)) {
            return collection_1.ListWrapper.first(storedParam);
        }
        else {
            return null;
        }
    };
    URLSearchParams.prototype.getAll = function (param) {
        var mapParam = this.paramsMap.get(param);
        return lang_1.isPresent(mapParam) ? mapParam : [];
    };
    URLSearchParams.prototype.set = function (param, val) {
        var mapParam = this.paramsMap.get(param);
        var list = lang_1.isPresent(mapParam) ? mapParam : [];
        collection_1.ListWrapper.clear(list);
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var mapParam = _this.paramsMap.get(param);
            var list = lang_1.isPresent(mapParam) ? mapParam : [];
            collection_1.ListWrapper.clear(list);
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        var mapParam = this.paramsMap.get(param);
        var list = lang_1.isPresent(mapParam) ? mapParam : [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var mapParam = _this.paramsMap.get(param);
            var list = lang_1.isPresent(mapParam) ? mapParam : [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var mapParam = _this.paramsMap.get(param);
            var list = lang_1.isPresent(mapParam) ? mapParam : [];
            collection_1.ListWrapper.clear(list);
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) { values.forEach(function (v) { return paramsList.push(k + '=' + v); }); });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
})();
exports.URLSearchParams = URLSearchParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX3NlYXJjaF9wYXJhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLW5KdzdoWGhrLnRtcC9hbmd1bGFyMi9zcmMvaHR0cC91cmxfc2VhcmNoX3BhcmFtcy50cyJdLCJuYW1lcyI6WyJwYXJhbVBhcnNlciIsIlVSTFNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcy5jb25zdHJ1Y3RvciIsIlVSTFNlYXJjaFBhcmFtcy5jbG9uZSIsIlVSTFNlYXJjaFBhcmFtcy5oYXMiLCJVUkxTZWFyY2hQYXJhbXMuZ2V0IiwiVVJMU2VhcmNoUGFyYW1zLmdldEFsbCIsIlVSTFNlYXJjaFBhcmFtcy5zZXQiLCJVUkxTZWFyY2hQYXJhbXMuc2V0QWxsIiwiVVJMU2VhcmNoUGFyYW1zLmFwcGVuZCIsIlVSTFNlYXJjaFBhcmFtcy5hcHBlbmRBbGwiLCJVUkxTZWFyY2hQYXJhbXMucmVwbGFjZUFsbCIsIlVSTFNlYXJjaFBhcmFtcy50b1N0cmluZyIsIlVSTFNlYXJjaFBhcmFtcy5kZWxldGUiXSwibWFwcGluZ3MiOiJBQUFBLHFCQUE2QywwQkFBMEIsQ0FBQyxDQUFBO0FBQ3hFLDJCQUErRCxnQ0FBZ0MsQ0FBQyxDQUFBO0FBRWhHLHFCQUFxQixTQUFzQjtJQUF0QkEseUJBQXNCQSxHQUF0QkEsY0FBc0JBO0lBQ3pDQSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxnQkFBR0EsRUFBb0JBLENBQUNBO0lBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6QkEsSUFBSUEsTUFBTUEsR0FBYUEsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLEtBQWFBO1lBQzNCQSxJQUFJQSxLQUFLQSxHQUFhQSxLQUFLQSxDQUFDQSxLQUFL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QSxPQUFPQSxDQUFDQSxVQUFDQSxLQUFLQSxFQUFFQSxLQUFLQTtZQUMxQ0EsSUFBSUEsUUFBUUEsR0FBR0EsS0FBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDekNBLElBQUlBLElBQUlBLEdBQUdBLGdCQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUMvQ0Esd0JBQVdBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3hCQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQTtnQkFDdENBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RCQSxDQUFDQTtZQUNEQSxLQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNsQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFRFYsa0NBQVFBLEdBQVJBO1FBQ0VXLElBQUlBLFVBQVVBLEdBQWFBLEVBQUVBLENBQUNBO1FBQzlCQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxJQUFPQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxDQUFDQSxJQUFJQSxPQUFBQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUE1QkEsQ0FBNEJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzlGQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFFRFgsZ0NBQU1BLEdBQU5BLFVBQVFBLEtBQWFBLElBQVVZLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ2hFWixzQkFBQ0E7QUFBREEsQ0FBQ0EsQUF0R0QsSUFzR0M7QUF0R1ksdUJBQWUsa0JBc0czQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT05TVF9FWFBSLCBpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge01hcCwgTWFwV3JhcHBlciwgTGlzdFdyYXBwZXIsIGlzTGlzdExpa2VJdGVyYWJsZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcblxuZnVuY3Rpb24gcGFyYW1QYXJzZXIocmF3UGFyYW1zOiBzdHJpbmcgPSAnJyk6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gIHZhciBtYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG4gIGlmIChyYXdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgIHZhciBwYXJhbXM6IHN0cmluZ1tdID0gcmF3UGFyYW1zLnNwbGl0KCcmJyk7XG4gICAgcGFyYW1zLmZvckVhY2goKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHZhciBzcGxpdDogc3RyaW5nW10gPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgdmFyIGtleSA9IHNwbGl0WzBdO1xuICAgICAgdmFyIHZhbCA9IHNwbGl0WzFdO1xuICAgICAgdmFyIGxpc3QgPSBpc1ByZXNlbnQobWFwLmdldChrZXkpKSA/IG1hcC5nZXQoa2V5KSA6IFtdO1xuICAgICAgbGlzdC5wdXNoKHZhbCk7XG4gICAgICBtYXAuc2V0KGtleSwgbGlzdCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBNYXAtbGlrZSByZXByZXNlbnRhdGlvbiBvZiB1cmwgc2VhcmNoIHBhcmFtZXRlcnMsIGJhc2VkIG9uXG4gKiBbVVJMU2VhcmNoUGFyYW1zXShodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHNlYXJjaHBhcmFtcykgaW4gdGhlIHVybCBsaXZpbmcgc3RhbmRhcmQsXG4gKiB3aXRoIHNldmVyYWwgZXh0ZW5zaW9ucyBmb3IgbWVyZ2luZyBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0czpcbiAqICAgLSBzZXRBbGwoKVxuICogICAtIGFwcGVuZEFsbCgpXG4gKiAgIC0gcmVwbGFjZUFsbCgpXG4gKi9cbmV4cG9ydCBjbGFzcyBVUkxTZWFyY2hQYXJhbXMge1xuICBwYXJhbXNNYXA6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPjtcbiAgY29uc3RydWN0b3IocHVibGljIHJhd1BhcmFtczogc3RyaW5nID0gJycpIHsgdGhpcy5wYXJhbXNNYXAgPSBwYXJhbVBhcnNlcihyYXdQYXJhbXMpOyB9XG5cbiAgY2xvbmUoKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgICB2YXIgY2xvbmUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgY2xvbmUuYXBwZW5kQWxsKHRoaXMpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIGhhcyhwYXJhbTogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnBhcmFtc01hcC5oYXMocGFyYW0pOyB9XG5cbiAgZ2V0KHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciBzdG9yZWRQYXJhbSA9IHRoaXMucGFyYW1zTWFwLmdldChwYXJhbSk7XG4gICAgaWYgKGlzTGlzdExpa2VJdGVyYWJsZShzdG9yZWRQYXJhbSkpIHtcbiAgICAgIHJldHVybiBMaXN0V3JhcHBlci5maXJzdChzdG9yZWRQYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGdldEFsbChwYXJhbTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHZhciBtYXBQYXJhbSA9IHRoaXMucGFyYW1zTWFwLmdldChwYXJhbSk7XG4gICAgcmV0dXJuIGlzUHJlc2VudChtYXBQYXJhbSkgPyBtYXBQYXJhbSA6IFtdO1xuICB9XG5cbiAgc2V0KHBhcmFtOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XG4gICAgdmFyIG1hcFBhcmFtID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKTtcbiAgICB2YXIgbGlzdCA9IGlzUHJlc2VudChtYXBQYXJhbSkgPyBtYXBQYXJhbSA6IFtdO1xuICAgIExpc3RXcmFwcGVyLmNsZWFyKGxpc3QpO1xuICAgIGxpc3QucHVzaCh2YWwpO1xuICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gIH1cblxuICAvLyBBIG1lcmdlIG9wZXJhdGlvblxuICAvLyBGb3IgZWFjaCBuYW1lLXZhbHVlcyBwYWlyIGluIGBzZWFyY2hQYXJhbXNgLCBwZXJmb3JtIGBzZXQobmFtZSwgdmFsdWVzWzBdKWBcbiAgLy9cbiAgLy8gRS5nOiBcImE9WzEsMiwzXSwgYz1bOF1cIiArIFwiYT1bNCw1LDZdLCBiPVs3XVwiID0gXCJhPVs0XSwgYz1bOF0sIGI9WzddXCJcbiAgLy9cbiAgLy8gVE9ETyhAY2FpdHApOiBkb2N1bWVudCB0aGlzIGJldHRlclxuICBzZXRBbGwoc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICBzZWFyY2hQYXJhbXMucGFyYW1zTWFwLmZvckVhY2goKHZhbHVlLCBwYXJhbSkgPT4ge1xuICAgICAgdmFyIG1hcFBhcmFtID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKTtcbiAgICAgIHZhciBsaXN0ID0gaXNQcmVzZW50KG1hcFBhcmFtKSA/IG1hcFBhcmFtIDogW107XG4gICAgICBMaXN0V3JhcHBlci5jbGVhcihsaXN0KTtcbiAgICAgIGxpc3QucHVzaCh2YWx1ZVswXSk7XG4gICAgICB0aGlzLnBhcmFtc01hcC5zZXQocGFyYW0sIGxpc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kKHBhcmFtOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIG1hcFBhcmFtID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKTtcbiAgICB2YXIgbGlzdCA9IGlzUHJlc2VudChtYXBQYXJhbSkgPyBtYXBQYXJhbSA6IFtdO1xuICAgIGxpc3QucHVzaCh2YWwpO1xuICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gIH1cblxuICAvLyBBIG1lcmdlIG9wZXJhdGlvblxuICAvLyBGb3IgZWFjaCBuYW1lLXZhbHVlcyBwYWlyIGluIGBzZWFyY2hQYXJhbXNgLCBwZXJmb3JtIGBhcHBlbmQobmFtZSwgdmFsdWUpYFxuICAvLyBmb3IgZWFjaCB2YWx1ZSBpbiBgdmFsdWVzYC5cbiAgLy9cbiAgLy8gRS5nOiBcImE9WzEsMl0sIGM9WzhdXCIgKyBcImE9WzMsNF0sIGI9WzddXCIgPSBcImE9WzEsMiwzLDRdLCBjPVs4XSwgYj1bN11cIlxuICAvL1xuICAvLyBUT0RPKEBjYWl0cCk6IGRvY3VtZW50IHRoaXMgYmV0dGVyXG4gIGFwcGVuZEFsbChzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtcykge1xuICAgIHNlYXJjaFBhcmFtcy5wYXJhbXNNYXAuZm9yRWFjaCgodmFsdWUsIHBhcmFtKSA9PiB7XG4gICAgICB2YXIgbWFwUGFyYW0gPSB0aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pO1xuICAgICAgdmFyIGxpc3QgPSBpc1ByZXNlbnQobWFwUGFyYW0pID8gbWFwUGFyYW0gOiBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgbGlzdC5wdXNoKHZhbHVlW2ldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIEEgbWVyZ2Ugb3BlcmF0aW9uXG4gIC8vIEZvciBlYWNoIG5hbWUtdmFsdWVzIHBhaXIgaW4gYHNlYXJjaFBhcmFtc2AsIHBlcmZvcm0gYGRlbGV0ZShuYW1lKWAsXG4gIC8vIGZvbGxvd2VkIGJ5IGBzZXQobmFtZSwgdmFsdWVzKWBcbiAgLy9cbiAgLy8gRS5nOiBcImE9WzEsMiwzXSwgYz1bOF1cIiArIFwiYT1bNCw1LDZdLCBiPVs3XVwiID0gXCJhPVs0LDUsNl0sIGM9WzhdLCBiPVs3XVwiXG4gIC8vXG4gIC8vIFRPRE8oQGNhaXRwKTogZG9jdW1lbnQgdGhpcyBiZXR0ZXJcbiAgcmVwbGFjZUFsbChzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtcykge1xuICAgIHNlYXJjaFBhcmFtcy5wYXJhbXNNYXAuZm9yRWFjaCgodmFsdWUsIHBhcmFtKSA9PiB7XG4gICAgICB2YXIgbWFwUGFyYW0gPSB0aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pO1xuICAgICAgdmFyIGxpc3QgPSBpc1ByZXNlbnQobWFwUGFyYW0pID8gbWFwUGFyYW0gOiBbXTtcbiAgICAgIExpc3RXcmFwcGVyLmNsZWFyKGxpc3QpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBsaXN0LnB1c2godmFsdWVbaV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXJhbXNNYXAuc2V0KHBhcmFtLCBsaXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgdmFyIHBhcmFtc0xpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgdGhpcy5wYXJhbXNNYXAuZm9yRWFjaCgodmFsdWVzLCBrKSA9PiB7IHZhbHVlcy5mb3JFYWNoKHYgPT4gcGFyYW1zTGlzdC5wdXNoKGsgKyAnPScgKyB2KSk7IH0pO1xuICAgIHJldHVybiBwYXJhbXNMaXN0LmpvaW4oJyYnKTtcbiAgfVxuXG4gIGRlbGV0ZSAocGFyYW06IHN0cmluZyk6IHZvaWQgeyB0aGlzLnBhcmFtc01hcC5kZWxldGUocGFyYW0pOyB9XG59XG4iXX0=