"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer"); // install inquirer  old version so that it works 
var function_js_1 = require("./function.js");
var node_banner_1 = require("node-banner"); //node banner is used to make it beautiful and its command is npm i node-banner
var gradient_string_1 = require("gradient-string"); //grdient string is used to give colors to text
var answers = [
    {
        name: "num1",
        type: "number",
        message: gradient_string_1.default.rainbow("Enter first number?"),
    },
    {
        name: "num2",
        type: "number",
        message: gradient_string_1.default.rainbow("Enter second number?"),
    },
    {
        name: "operation",
        type: "list",
        choices: ["multiplication", "division", "subtraction", "Addition"],
        message: gradient_string_1.default.rainbow("Enter your operation "),
    },
];
var answer = [
    {
        name: "again",
        type: "confirm", // on inqirer page , confirm means boolean 
        message: "Do you want to continue?",
        validate: function (input) {
            if (NaN = input) {
                return "please enter a number ";
            }
            return false;
        }
    }
];
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, node_banner_1.default)('CALCULATOR', 'This calculator can perform addition, subtraction, multiplication and division ', "green", "red")];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
function calculator() {
    return __awaiter(this, void 0, void 0, function () {
        var condition, _a, num1, num2, operation, again;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    condition = true;
                    _b.label = 1;
                case 1:
                    if (!condition) return [3 /*break*/, 4];
                    return [4 /*yield*/, inquirer_1.default.prompt(answers)];
                case 2:
                    _a = _b.sent(), num1 = _a.num1, num2 = _a.num2, operation = _a.operation;
                    if (operation === 'Addition') {
                        console.log('the sum of two number is ', (0, function_js_1.sum)(num1, num2));
                    }
                    else if (operation === 'subtraction') {
                        console.log('the sub of two number is ', (0, function_js_1.sub)(num1, num2));
                    }
                    else if (operation === 'multiplication') {
                        console.log('the multplication of two number is ', (0, function_js_1.mult)(num1, num2));
                    }
                    else if (operation === 'division') {
                        console.log('the division of two number is ', (0, function_js_1.div)(num1, num2));
                    }
                    return [4 /*yield*/, inquirer_1.default.prompt(answer)];
                case 3:
                    again = (_b.sent()).again;
                    condition = again;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
setTimeout(function () {
    calculator();
}, 1000);
//call function 
