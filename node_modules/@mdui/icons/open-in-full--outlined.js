import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOpenInFull_Outlined = class IconOpenInFull_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"/>');
    }
};
IconOpenInFull_Outlined.styles = style;
IconOpenInFull_Outlined = __decorate([
    customElement('mdui-icon-open-in-full--outlined')
], IconOpenInFull_Outlined);
export { IconOpenInFull_Outlined };
