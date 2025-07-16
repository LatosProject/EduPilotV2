import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMaximize_TwoTone = class IconMaximize_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v2H3V3z"/>');
    }
};
IconMaximize_TwoTone.styles = style;
IconMaximize_TwoTone = __decorate([
    customElement('mdui-icon-maximize--two-tone')
], IconMaximize_TwoTone);
export { IconMaximize_TwoTone };
