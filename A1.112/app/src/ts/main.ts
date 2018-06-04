declare let $: any;
import { FormValidation as vf } from './form-validate';
import { Navigation as nv } from './navigation';
window.onload = function () {
    vf.init();
    nv.init();
} 