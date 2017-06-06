"use strict";
/**
 * Created by admin on 31/05/2017.
 */
var Event = (function () {
    function Event() {
    }
    Object.defineProperty(Event.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "shortText", {
        get: function () {
            return this._shortText;
        },
        set: function (value) {
            this._shortText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "longText", {
        get: function () {
            return this._longText;
        },
        set: function (value) {
            this._longText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "dateTime", {
        get: function () {
            return this._dateTime;
        },
        set: function (value) {
            this._dateTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (value) {
            this._duration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "createdById", {
        get: function () {
            return this._createdById;
        },
        set: function (value) {
            this._createdById = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "eventType", {
        get: function () {
            return this._eventType;
        },
        set: function (value) {
            this._eventType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "mediaSet", {
        get: function () {
            return this._mediaSet;
        },
        set: function (value) {
            this._mediaSet = value;
        },
        enumerable: true,
        configurable: true
    });
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=Event.js.map