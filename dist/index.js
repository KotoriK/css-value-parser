"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vmin = exports.vmax = exports.vw = exports.vh = void 0;
function vh(percent) {
    return window.innerHeight * percent;
}
exports.vh = vh;
function vw(percent) {
    return window.innerWidth * percent;
}
exports.vw = vw;
function vmax(percent) {
    return Math.max(vh(percent), vw(percent));
}
exports.vmax = vmax;
function vmin(percent) {
    return Math.min(vh(percent), vw(percent));
}
exports.vmin = vmin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixFQUFFLENBQUMsT0FBYztJQUM3QixPQUFPLE1BQU0sQ0FBQyxXQUFXLEdBQUMsT0FBTyxDQUFBO0FBQ3JDLENBQUM7QUFGRCxnQkFFQztBQUNELFNBQWdCLEVBQUUsQ0FBQyxPQUFjO0lBQzdCLE9BQU8sTUFBTSxDQUFDLFVBQVUsR0FBQyxPQUFPLENBQUE7QUFDcEMsQ0FBQztBQUZELGdCQUVDO0FBQ0QsU0FBZ0IsSUFBSSxDQUFDLE9BQWM7SUFDL0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtBQUM1QyxDQUFDO0FBRkQsb0JBRUM7QUFDRCxTQUFnQixJQUFJLENBQUMsT0FBYztJQUMvQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0FBQUEsQ0FBQztBQUQ3QyxvQkFDNkMifQ==