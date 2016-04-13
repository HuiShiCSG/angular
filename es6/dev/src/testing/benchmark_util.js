import { BrowserDomAdapter } from 'angular2/src/platform/browser/browser_adapter';
import { document, window } from 'angular2/src/facade/browser';
import { NumberWrapper, isBlank } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
var DOM = new BrowserDomAdapter();
export function getIntParameter(name) {
    return NumberWrapper.parseInt(getStringParameter(name), 10);
}
export function getStringParameter(name) {
    var els = DOM.querySelectorAll(document, `input[name="${name}"]`);
    var value;
    var el;
    for (var i = 0; i < els.length; i++) {
        el = els[i];
        var type = DOM.type(el);
        if ((type != 'radio' && type != 'checkbox') || DOM.getChecked(el)) {
            value = DOM.getValue(el);
            break;
        }
    }
    if (isBlank(value)) {
        throw new BaseException(`Could not find and input field with name ${name}`);
    }
    return value;
}
export function bindAction(selector, callback) {
    var el = DOM.querySelector(document, selector);
    DOM.on(el, 'click', function (_) { callback(); });
}
export function microBenchmark(name, iterationCount, callback) {
    var durationName = `${name}/${iterationCount}`;
    window.console.time(durationName);
    callback();
    window.console.timeEnd(durationName);
}
export function windowProfile(name) {
    window.console.profile(name);
}
export function windowProfileEnd(name) {
    window.console.profileEnd(name);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuY2htYXJrX3V0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXd5ZDJieGJsLnRtcC9hbmd1bGFyMi9zcmMvdGVzdGluZy9iZW5jaG1hcmtfdXRpbC50cyJdLCJuYW1lcyI6WyJnZXRJbnRQYXJhbWV0ZXIiLCJnZXRTdHJpbmdQYXJhbWV0ZXIiLCJiaW5kQWN0aW9uIiwibWljcm9CZW5jaG1hcmsiLCJ3aW5kb3dQcm9maWxlIiwid2luZG93UHJvZmlsZUVuZCJdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQztPQUN4RSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsTUFBTSw2QkFBNkI7T0FDckQsRUFBQyxhQUFhLEVBQUUsT0FBTyxFQUFDLE1BQU0sMEJBQTBCO09BQ3hELEVBQUMsYUFBYSxFQUFtQixNQUFNLGdDQUFnQztBQUU5RSxJQUFJLEdBQUcsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFFbEMsZ0NBQWdDLElBQVk7SUFDMUNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLFFBQVFBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDOURBLENBQUNBO0FBRUQsbUNBQW1DLElBQVk7SUFDN0NDLElBQUlBLEdBQUdBLEdBQUdBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsRUFBRUEsZUFBZUEsSUFBSUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDbEVBLElBQUlBLEtBQUtBLENBQUNBO0lBQ1ZBLElBQUlBLEVBQUVBLENBQUNBO0lBRVBBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1FBQ3BDQSxFQUFFQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNaQSxJQUFJQSxJQUFJQSxHQUFHQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUN4QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsT0FBT0EsSUFBSUEsSUFBSUEsSUFBSUEsVUFBVUEsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEVBLEtBQUtBLEdBQUdBLEdBQUdBLENBQUNBLFFBQVFBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1lBQ3pCQSxLQUFLQSxDQUFDQTtRQUNSQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuQkEsTUFBTUEsSUFBSUEsYUFBYUEsQ0FBQ0EsNENBQTRDQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUM5RUEsQ0FBQ0E7SUFFREEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7QUFDZkEsQ0FBQ0E7QUFFRCwyQkFBMkIsUUFBZ0IsRUFBRSxRQUFrQjtJQUM3REMsSUFBSUEsRUFBRUEsR0FBR0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDL0NBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBLFVBQVNBLENBQUNBLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNBLENBQUNBO0FBQ25EQSxDQUFDQTtBQUVELCtCQUErQixJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVE7SUFDM0RDLElBQUlBLFlBQVlBLEdBQUdBLEdBQUdBLElBQUlBLElBQUlBLGNBQWNBLEVBQUVBLENBQUNBO0lBQy9DQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtJQUNsQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7SUFDWEEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7QUFDdkNBLENBQUNBO0FBRUQsOEJBQThCLElBQVk7SUFDbENDLE1BQU1BLENBQUNBLE9BQVFBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3RDQSxDQUFDQTtBQUVELGlDQUFpQyxJQUFZO0lBQ3JDQyxNQUFNQSxDQUFDQSxPQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtBQUN6Q0EsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9icm93c2VyX2FkYXB0ZXInO1xuaW1wb3J0IHtkb2N1bWVudCwgd2luZG93fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHtOdW1iZXJXcmFwcGVyLCBpc0JsYW5rfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuXG52YXIgRE9NID0gbmV3IEJyb3dzZXJEb21BZGFwdGVyKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnRQYXJhbWV0ZXIobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBOdW1iZXJXcmFwcGVyLnBhcnNlSW50KGdldFN0cmluZ1BhcmFtZXRlcihuYW1lKSwgMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyaW5nUGFyYW1ldGVyKG5hbWU6IHN0cmluZykge1xuICB2YXIgZWxzID0gRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoZG9jdW1lbnQsIGBpbnB1dFtuYW1lPVwiJHtuYW1lfVwiXWApO1xuICB2YXIgdmFsdWU7XG4gIHZhciBlbDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xuICAgIGVsID0gZWxzW2ldO1xuICAgIHZhciB0eXBlID0gRE9NLnR5cGUoZWwpO1xuICAgIGlmICgodHlwZSAhPSAncmFkaW8nICYmIHR5cGUgIT0gJ2NoZWNrYm94JykgfHwgRE9NLmdldENoZWNrZWQoZWwpKSB7XG4gICAgICB2YWx1ZSA9IERPTS5nZXRWYWx1ZShlbCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgQ291bGQgbm90IGZpbmQgYW5kIGlucHV0IGZpZWxkIHdpdGggbmFtZSAke25hbWV9YCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kQWN0aW9uKHNlbGVjdG9yOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICB2YXIgZWwgPSBET00ucXVlcnlTZWxlY3Rvcihkb2N1bWVudCwgc2VsZWN0b3IpO1xuICBET00ub24oZWwsICdjbGljaycsIGZ1bmN0aW9uKF8pIHsgY2FsbGJhY2soKTsgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWNyb0JlbmNobWFyayhuYW1lLCBpdGVyYXRpb25Db3VudCwgY2FsbGJhY2spIHtcbiAgdmFyIGR1cmF0aW9uTmFtZSA9IGAke25hbWV9LyR7aXRlcmF0aW9uQ291bnR9YDtcbiAgd2luZG93LmNvbnNvbGUudGltZShkdXJhdGlvbk5hbWUpO1xuICBjYWxsYmFjaygpO1xuICB3aW5kb3cuY29uc29sZS50aW1lRW5kKGR1cmF0aW9uTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aW5kb3dQcm9maWxlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAoPGFueT53aW5kb3cuY29uc29sZSkucHJvZmlsZShuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpbmRvd1Byb2ZpbGVFbmQobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICg8YW55PndpbmRvdy5jb25zb2xlKS5wcm9maWxlRW5kKG5hbWUpO1xufVxuIl19