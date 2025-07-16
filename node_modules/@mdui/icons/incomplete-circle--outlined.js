import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconIncompleteCircle_Outlined = class IconIncompleteCircle_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07L12 12V2c5.52 0 10 4.48 10 10z"/>');
    }
};
IconIncompleteCircle_Outlined.styles = style;
IconIncompleteCircle_Outlined = __decorate([
    customElement('mdui-icon-incomplete-circle--outlined')
], IconIncompleteCircle_Outlined);
export { IconIncompleteCircle_Outlined };
