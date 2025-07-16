import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStraighten_TwoTone = class IconStraighten_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 12h-2V8h-2v4h-2V8h-2v4H9V8H7v4H5V8H3v8h18V8h-2z" opacity=".3"/><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"/>');
    }
};
IconStraighten_TwoTone.styles = style;
IconStraighten_TwoTone = __decorate([
    customElement('mdui-icon-straighten--two-tone')
], IconStraighten_TwoTone);
export { IconStraighten_TwoTone };
