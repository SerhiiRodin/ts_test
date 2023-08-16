// function combine(param1: number | string, param2: number | string) {
//   return param1 + param2;
// }
// Ошибка TS не знает число это или строка, надо проверять.
function combine(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return console.log(param1 + param2);
    }
    else {
        return console.log(param1.toString() + param2.toString());
    }
}
export { combine };
//# sourceMappingURL=fnExample.js.map