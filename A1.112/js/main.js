"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form_validate_1 = require("./form-validate");
var navigation_1 = require("./navigation");
window.onload = function () {
    form_validate_1.FormValidation.init();
    navigation_1.Navigation.init();
};
