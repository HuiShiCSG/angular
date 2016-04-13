'use strict';/**
 * @module
 * @description
 * Change detection enables data binding in Angular.
 */
var change_detection_1 = require('./change_detection/change_detection');
exports.ChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
exports.ExpressionChangedAfterItHasBeenCheckedException = change_detection_1.ExpressionChangedAfterItHasBeenCheckedException;
exports.ChangeDetectionError = change_detection_1.ChangeDetectionError;
exports.ChangeDetectorRef = change_detection_1.ChangeDetectorRef;
exports.WrappedValue = change_detection_1.WrappedValue;
exports.SimpleChange = change_detection_1.SimpleChange;
exports.IterableDiffers = change_detection_1.IterableDiffers;
exports.KeyValueDiffers = change_detection_1.KeyValueDiffers;
exports.CollectionChangeRecord = change_detection_1.CollectionChangeRecord;
exports.KeyValueChangeRecord = change_detection_1.KeyValueChangeRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtbkp3N2hYaGsudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILGlDQW9CTyxxQ0FBcUMsQ0FBQztBQW5CM0MsNkVBQXVCO0FBRXZCLDZIQUErQztBQUMvQyx1RUFBb0I7QUFFcEIsaUVBQWlCO0FBRWpCLHVEQUFZO0FBQ1osdURBQVk7QUFFWiw2REFBZTtBQUdmLDZEQUFlO0FBR2YsMkVBQXNCO0FBQ3RCLHVFQUUyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGFuZ2UgZGV0ZWN0aW9uIGVuYWJsZXMgZGF0YSBiaW5kaW5nIGluIEFuZ3VsYXIuXG4gKi9cblxuZXhwb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cbiAgRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFeGNlcHRpb24sXG4gIENoYW5nZURldGVjdGlvbkVycm9yLFxuXG4gIENoYW5nZURldGVjdG9yUmVmLFxuXG4gIFdyYXBwZWRWYWx1ZSxcbiAgU2ltcGxlQ2hhbmdlLFxuICBQaXBlVHJhbnNmb3JtLFxuICBJdGVyYWJsZURpZmZlcnMsXG4gIEl0ZXJhYmxlRGlmZmVyLFxuICBJdGVyYWJsZURpZmZlckZhY3RvcnksXG4gIEtleVZhbHVlRGlmZmVycyxcbiAgS2V5VmFsdWVEaWZmZXIsXG4gIEtleVZhbHVlRGlmZmVyRmFjdG9yeSxcbiAgQ29sbGVjdGlvbkNoYW5nZVJlY29yZCxcbiAgS2V5VmFsdWVDaGFuZ2VSZWNvcmQsXG4gIFRyYWNrQnlGblxufSBmcm9tICcuL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG4iXX0=