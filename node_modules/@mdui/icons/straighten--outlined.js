import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStraighten_Outlined = class IconStraighten_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"/>');
    }
};
IconStraighten_Outlined.styles = style;
IconStraighten_Outlined = __decorate([
    customElement('mdui-icon-straighten--outlined')
], IconStraighten_Outlined);
export { IconStraighten_Outlined };
