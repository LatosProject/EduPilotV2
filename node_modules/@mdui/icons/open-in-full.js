import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOpenInFull = class IconOpenInFull extends LitElement {
    render() {
        return svgTag('<path d="M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"/>');
    }
};
IconOpenInFull.styles = style;
IconOpenInFull = __decorate([
    customElement('mdui-icon-open-in-full')
], IconOpenInFull);
export { IconOpenInFull };
