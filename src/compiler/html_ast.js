'use strict';var lang_1 = require('angular2/src/facade/lang');
var HtmlTextAst = (function () {
    function HtmlTextAst(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    HtmlTextAst.prototype.visit = function (visitor, context) { return visitor.visitText(this, context); };
    return HtmlTextAst;
})();
exports.HtmlTextAst = HtmlTextAst;
var HtmlAttrAst = (function () {
    function HtmlAttrAst(name, value, sourceSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    HtmlAttrAst.prototype.visit = function (visitor, context) { return visitor.visitAttr(this, context); };
    return HtmlAttrAst;
})();
exports.HtmlAttrAst = HtmlAttrAst;
var HtmlElementAst = (function () {
    function HtmlElementAst(name, attrs, children, sourceSpan, startSourceSpan, endSourceSpan) {
        this.name = name;
        this.attrs = attrs;
        this.children = children;
        this.sourceSpan = sourceSpan;
        this.startSourceSpan = startSourceSpan;
        this.endSourceSpan = endSourceSpan;
    }
    HtmlElementAst.prototype.visit = function (visitor, context) { return visitor.visitElement(this, context); };
    return HtmlElementAst;
})();
exports.HtmlElementAst = HtmlElementAst;
var HtmlCommentAst = (function () {
    function HtmlCommentAst(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    HtmlCommentAst.prototype.visit = function (visitor, context) { return visitor.visitComment(this, context); };
    return HtmlCommentAst;
})();
exports.HtmlCommentAst = HtmlCommentAst;
function htmlVisitAll(visitor, asts, context) {
    if (context === void 0) { context = null; }
    var result = [];
    asts.forEach(function (ast) {
        var astResult = ast.visit(visitor, context);
        if (lang_1.isPresent(astResult)) {
            result.push(astResult);
        }
    });
    return result;
}
exports.htmlVisitAll = htmlVisitAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLW5KdzdoWGhrLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvaHRtbF9hc3QudHMiXSwibmFtZXMiOlsiSHRtbFRleHRBc3QiLCJIdG1sVGV4dEFzdC5jb25zdHJ1Y3RvciIsIkh0bWxUZXh0QXN0LnZpc2l0IiwiSHRtbEF0dHJBc3QiLCJIdG1sQXR0ckFzdC5jb25zdHJ1Y3RvciIsIkh0bWxBdHRyQXN0LnZpc2l0IiwiSHRtbEVsZW1lbnRBc3QiLCJIdG1sRWxlbWVudEFzdC5jb25zdHJ1Y3RvciIsIkh0bWxFbGVtZW50QXN0LnZpc2l0IiwiSHRtbENvbW1lbnRBc3QiLCJIdG1sQ29tbWVudEFzdC5jb25zdHJ1Y3RvciIsIkh0bWxDb21tZW50QXN0LnZpc2l0IiwiaHRtbFZpc2l0QWxsIl0sIm1hcHBpbmdzIjoiQUFBQSxxQkFBd0IsMEJBQTBCLENBQUMsQ0FBQTtBQVNuRDtJQUNFQSxxQkFBbUJBLEtBQWFBLEVBQVNBLFVBQTJCQTtRQUFqREMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBUUE7UUFBU0EsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBaUJBO0lBQUdBLENBQUNBO0lBQ3hFRCwyQkFBS0EsR0FBTEEsVUFBTUEsT0FBdUJBLEVBQUVBLE9BQVlBLElBQVNFLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ2hHRixrQkFBQ0E7QUFBREEsQ0FBQ0EsQUFIRCxJQUdDO0FBSFksbUJBQVcsY0FHdkIsQ0FBQTtBQUVEO0lBQ0VHLHFCQUFtQkEsSUFBWUEsRUFBU0EsS0FBYUEsRUFBU0EsVUFBMkJBO1FBQXRFQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFRQTtRQUFTQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFRQTtRQUFTQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFpQkE7SUFBR0EsQ0FBQ0E7SUFDN0ZELDJCQUFLQSxHQUFMQSxVQUFNQSxPQUF1QkEsRUFBRUEsT0FBWUEsSUFBU0UsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDaEdGLGtCQUFDQTtBQUFEQSxDQUFDQSxBQUhELElBR0M7QUFIWSxtQkFBVyxjQUd2QixDQUFBO0FBRUQ7SUFDRUcsd0JBQW1CQSxJQUFZQSxFQUFTQSxLQUFvQkEsRUFBU0EsUUFBbUJBLEVBQ3JFQSxVQUEyQkEsRUFBU0EsZUFBZ0NBLEVBQ3BFQSxhQUE4QkE7UUFGOUJDLFNBQUlBLEdBQUpBLElBQUlBLENBQVFBO1FBQVNBLFVBQUtBLEdBQUxBLEtBQUtBLENBQWVBO1FBQVNBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVdBO1FBQ3JFQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFpQkE7UUFBU0Esb0JBQWVBLEdBQWZBLGVBQWVBLENBQWlCQTtRQUNwRUEsa0JBQWFBLEdBQWJBLGFBQWFBLENBQWlCQTtJQUFHQSxDQUFDQTtJQUNyREQsOEJBQUtBLEdBQUxBLFVBQU1BLE9BQXVCQSxFQUFFQSxPQUFZQSxJQUFTRSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNuR0YscUJBQUNBO0FBQURBLENBQUNBLEFBTEQsSUFLQztBQUxZLHNCQUFjLGlCQUsxQixDQUFBO0FBRUQ7SUFDRUcsd0JBQW1CQSxLQUFhQSxFQUFTQSxVQUEyQkE7UUFBakRDLFVBQUtBLEdBQUxBLEtBQUtBLENBQVFBO1FBQVNBLGVBQVVBLEdBQVZBLFVBQVVBLENBQWlCQTtJQUFHQSxDQUFDQTtJQUN4RUQsOEJBQUtBLEdBQUxBLFVBQU1BLE9BQXVCQSxFQUFFQSxPQUFZQSxJQUFTRSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNuR0YscUJBQUNBO0FBQURBLENBQUNBLEFBSEQsSUFHQztBQUhZLHNCQUFjLGlCQUcxQixDQUFBO0FBU0Qsc0JBQTZCLE9BQXVCLEVBQUUsSUFBZSxFQUFFLE9BQW1CO0lBQW5CRyx1QkFBbUJBLEdBQW5CQSxjQUFtQkE7SUFDeEZBLElBQUlBLE1BQU1BLEdBQUdBLEVBQUVBLENBQUNBO0lBQ2hCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxHQUFHQTtRQUNkQSxJQUFJQSxTQUFTQSxHQUFHQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUM1Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsZ0JBQVNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3pCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7SUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDSEEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7QUFDaEJBLENBQUNBO0FBVGUsb0JBQVksZUFTM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5pbXBvcnQge1BhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi9wYXJzZV91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBIdG1sQXN0IHtcbiAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICB2aXNpdCh2aXNpdG9yOiBIdG1sQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgSHRtbFRleHRBc3QgaW1wbGVtZW50cyBIdG1sQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IEh0bWxBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkgeyByZXR1cm4gdmlzaXRvci52aXNpdFRleHQodGhpcywgY29udGV4dCk7IH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxBdHRyQXN0IGltcGxlbWVudHMgSHRtbEFzdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBIdG1sQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHsgcmV0dXJuIHZpc2l0b3IudmlzaXRBdHRyKHRoaXMsIGNvbnRleHQpOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBIdG1sRWxlbWVudEFzdCBpbXBsZW1lbnRzIEh0bWxBc3Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXR0cnM6IEh0bWxBdHRyQXN0W10sIHB1YmxpYyBjaGlsZHJlbjogSHRtbEFzdFtdLFxuICAgICAgICAgICAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgc3RhcnRTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgICAgICAgICAgIHB1YmxpYyBlbmRTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IEh0bWxBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkgeyByZXR1cm4gdmlzaXRvci52aXNpdEVsZW1lbnQodGhpcywgY29udGV4dCk7IH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxDb21tZW50QXN0IGltcGxlbWVudHMgSHRtbEFzdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBIdG1sQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHsgcmV0dXJuIHZpc2l0b3IudmlzaXRDb21tZW50KHRoaXMsIGNvbnRleHQpOyB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHRtbEFzdFZpc2l0b3Ige1xuICB2aXNpdEVsZW1lbnQoYXN0OiBIdG1sRWxlbWVudEFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEF0dHIoYXN0OiBIdG1sQXR0ckFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFRleHQoYXN0OiBIdG1sVGV4dEFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdENvbW1lbnQoYXN0OiBIdG1sQ29tbWVudEFzdCwgY29udGV4dDogYW55KTogYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbFZpc2l0QWxsKHZpc2l0b3I6IEh0bWxBc3RWaXNpdG9yLCBhc3RzOiBIdG1sQXN0W10sIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnlbXSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYXN0cy5mb3JFYWNoKGFzdCA9PiB7XG4gICAgdmFyIGFzdFJlc3VsdCA9IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgICBpZiAoaXNQcmVzZW50KGFzdFJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFzdFJlc3VsdCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==