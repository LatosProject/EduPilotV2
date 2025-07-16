import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextFormat_TwoTone = class IconTextFormat_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98 13.87 11h-3.74L12 5.98z"/>');
    }
};
IconTextFormat_TwoTone.styles = style;
IconTextFormat_TwoTone = __decorate([
    customElement('mdui-icon-text-format--two-tone')
], IconTextFormat_TwoTone);
export { IconTextFormat_TwoTone };
