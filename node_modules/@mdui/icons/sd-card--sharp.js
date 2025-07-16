import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSdCard_Sharp = class IconSdCard_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 2H10L4 8v14h16V2zm-8 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"/>');
    }
};
IconSdCard_Sharp.styles = style;
IconSdCard_Sharp = __decorate([
    customElement('mdui-icon-sd-card--sharp')
], IconSdCard_Sharp);
export { IconSdCard_Sharp };
