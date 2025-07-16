import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMaximize_Outlined = class IconMaximize_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v2H3V3z"/>');
    }
};
IconMaximize_Outlined.styles = style;
IconMaximize_Outlined = __decorate([
    customElement('mdui-icon-maximize--outlined')
], IconMaximize_Outlined);
export { IconMaximize_Outlined };
