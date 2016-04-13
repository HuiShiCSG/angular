import { DirectiveResolver } from 'angular2/core';
var COMPONENT_SELECTOR = /^[\w|-]*$/;
var SKEWER_CASE = /-(\w)/g;
var directiveResolver = new DirectiveResolver();
export function getComponentInfo(type) {
    var resolvedMetadata = directiveResolver.resolve(type);
    var selector = resolvedMetadata.selector;
    if (!selector.match(COMPONENT_SELECTOR)) {
        throw new Error('Only selectors matching element names are supported, got: ' + selector);
    }
    var selector = selector.replace(SKEWER_CASE, (all, letter) => letter.toUpperCase());
    return {
        type: type,
        selector: selector,
        inputs: parseFields(resolvedMetadata.inputs),
        outputs: parseFields(resolvedMetadata.outputs)
    };
}
export function parseFields(names) {
    var attrProps = [];
    if (names) {
        for (var i = 0; i < names.length; i++) {
            var parts = names[i].split(':');
            var prop = parts[0].trim();
            var attr = (parts[1] || parts[0]).trim();
            var capitalAttr = attr.charAt(0).toUpperCase() + attr.substr(1);
            attrProps.push({
                prop: prop,
                attr: attr,
                bracketAttr: `[${attr}]`,
                parenAttr: `(${attr})`,
                bracketParenAttr: `[(${attr})]`,
                onAttr: `on${capitalAttr}`,
                bindAttr: `bind${capitalAttr}`,
                bindonAttr: `bindon${capitalAttr}`
            });
        }
    }
    return attrProps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXd5ZDJieGJsLnRtcC9hbmd1bGFyMi9zcmMvdXBncmFkZS9tZXRhZGF0YS50cyJdLCJuYW1lcyI6WyJnZXRDb21wb25lbnRJbmZvIiwicGFyc2VGaWVsZHMiXSwibWFwcGluZ3MiOiJPQUFPLEVBQU8saUJBQWlCLEVBQW9CLE1BQU0sZUFBZTtBQUd4RSxJQUFJLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztBQUNyQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDM0IsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFvQmhELGlDQUFpQyxJQUFVO0lBQ3pDQSxJQUFJQSxnQkFBZ0JBLEdBQXNCQSxpQkFBaUJBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzFFQSxJQUFJQSxRQUFRQSxHQUFHQSxnQkFBZ0JBLENBQUNBLFFBQVFBLENBQUNBO0lBQ3pDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3hDQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSw0REFBNERBLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBO0lBQzNGQSxDQUFDQTtJQUNEQSxJQUFJQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxHQUFHQSxFQUFFQSxNQUFjQSxLQUFLQSxNQUFNQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUM1RkEsTUFBTUEsQ0FBQ0E7UUFDTEEsSUFBSUEsRUFBRUEsSUFBSUE7UUFDVkEsUUFBUUEsRUFBRUEsUUFBUUE7UUFDbEJBLE1BQU1BLEVBQUVBLFdBQVdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDNUNBLE9BQU9BLEVBQUVBLFdBQVdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7S0FDL0NBLENBQUNBO0FBQ0pBLENBQUNBO0FBRUQsNEJBQTRCLEtBQWU7SUFDekNDLElBQUlBLFNBQVNBLEdBQWVBLEVBQUVBLENBQUNBO0lBQy9CQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNWQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtZQUN0Q0EsSUFBSUEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDaENBLElBQUlBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBQzNCQSxJQUFJQSxJQUFJQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUN6Q0EsSUFBSUEsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaEVBLFNBQVNBLENBQUNBLElBQUlBLENBQVdBO2dCQUN2QkEsSUFBSUEsRUFBRUEsSUFBSUE7Z0JBQ1ZBLElBQUlBLEVBQUVBLElBQUlBO2dCQUNWQSxXQUFXQSxFQUFFQSxJQUFJQSxJQUFJQSxHQUFHQTtnQkFDeEJBLFNBQVNBLEVBQUVBLElBQUlBLElBQUlBLEdBQUdBO2dCQUN0QkEsZ0JBQWdCQSxFQUFFQSxLQUFLQSxJQUFJQSxJQUFJQTtnQkFDL0JBLE1BQU1BLEVBQUVBLEtBQUtBLFdBQVdBLEVBQUVBO2dCQUMxQkEsUUFBUUEsRUFBRUEsT0FBT0EsV0FBV0EsRUFBRUE7Z0JBQzlCQSxVQUFVQSxFQUFFQSxTQUFTQSxXQUFXQSxFQUFFQTthQUNuQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7QUFDbkJBLENBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlLCBEaXJlY3RpdmVSZXNvbHZlciwgRGlyZWN0aXZlTWV0YWRhdGF9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBDT01QT05FTlRfU0VMRUNUT1IgPSAvXltcXHd8LV0qJC87XG52YXIgU0tFV0VSX0NBU0UgPSAvLShcXHcpL2c7XG52YXIgZGlyZWN0aXZlUmVzb2x2ZXIgPSBuZXcgRGlyZWN0aXZlUmVzb2x2ZXIoKTtcblxuZXhwb3J0IGludGVyZmFjZSBBdHRyUHJvcCB7XG4gIHByb3A6IHN0cmluZztcbiAgYXR0cjogc3RyaW5nO1xuICBicmFja2V0QXR0cjogc3RyaW5nO1xuICBicmFja2V0UGFyZW5BdHRyOiBzdHJpbmc7XG4gIHBhcmVuQXR0cjogc3RyaW5nO1xuICBvbkF0dHI6IHN0cmluZztcbiAgYmluZEF0dHI6IHN0cmluZztcbiAgYmluZG9uQXR0cjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEluZm8ge1xuICB0eXBlOiBUeXBlO1xuICBzZWxlY3Rvcjogc3RyaW5nO1xuICBpbnB1dHM6IEF0dHJQcm9wW107XG4gIG91dHB1dHM6IEF0dHJQcm9wW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wb25lbnRJbmZvKHR5cGU6IFR5cGUpOiBDb21wb25lbnRJbmZvIHtcbiAgdmFyIHJlc29sdmVkTWV0YWRhdGE6IERpcmVjdGl2ZU1ldGFkYXRhID0gZGlyZWN0aXZlUmVzb2x2ZXIucmVzb2x2ZSh0eXBlKTtcbiAgdmFyIHNlbGVjdG9yID0gcmVzb2x2ZWRNZXRhZGF0YS5zZWxlY3RvcjtcbiAgaWYgKCFzZWxlY3Rvci5tYXRjaChDT01QT05FTlRfU0VMRUNUT1IpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IHNlbGVjdG9ycyBtYXRjaGluZyBlbGVtZW50IG5hbWVzIGFyZSBzdXBwb3J0ZWQsIGdvdDogJyArIHNlbGVjdG9yKTtcbiAgfVxuICB2YXIgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKFNLRVdFUl9DQVNFLCAoYWxsLCBsZXR0ZXI6IHN0cmluZykgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgIGlucHV0czogcGFyc2VGaWVsZHMocmVzb2x2ZWRNZXRhZGF0YS5pbnB1dHMpLFxuICAgIG91dHB1dHM6IHBhcnNlRmllbGRzKHJlc29sdmVkTWV0YWRhdGEub3V0cHV0cylcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmllbGRzKG5hbWVzOiBzdHJpbmdbXSk6IEF0dHJQcm9wW10ge1xuICB2YXIgYXR0clByb3BzOiBBdHRyUHJvcFtdID0gW107XG4gIGlmIChuYW1lcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXJ0cyA9IG5hbWVzW2ldLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgcHJvcCA9IHBhcnRzWzBdLnRyaW0oKTtcbiAgICAgIHZhciBhdHRyID0gKHBhcnRzWzFdIHx8IHBhcnRzWzBdKS50cmltKCk7XG4gICAgICB2YXIgY2FwaXRhbEF0dHIgPSBhdHRyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYXR0ci5zdWJzdHIoMSk7XG4gICAgICBhdHRyUHJvcHMucHVzaCg8QXR0clByb3A+e1xuICAgICAgICBwcm9wOiBwcm9wLFxuICAgICAgICBhdHRyOiBhdHRyLFxuICAgICAgICBicmFja2V0QXR0cjogYFske2F0dHJ9XWAsXG4gICAgICAgIHBhcmVuQXR0cjogYCgke2F0dHJ9KWAsXG4gICAgICAgIGJyYWNrZXRQYXJlbkF0dHI6IGBbKCR7YXR0cn0pXWAsXG4gICAgICAgIG9uQXR0cjogYG9uJHtjYXBpdGFsQXR0cn1gLFxuICAgICAgICBiaW5kQXR0cjogYGJpbmQke2NhcGl0YWxBdHRyfWAsXG4gICAgICAgIGJpbmRvbkF0dHI6IGBiaW5kb24ke2NhcGl0YWxBdHRyfWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXR0clByb3BzO1xufVxuIl19