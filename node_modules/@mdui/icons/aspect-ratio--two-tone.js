import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAspectRatio_TwoTone = class IconAspectRatio_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 19.01h18V4.99H3v14.02zM14 15h3v-3h2v5h-5v-2zM5 7h5v2H7v3H5V7z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM7 9h3V7H5v5h2zm12 3h-2v3h-3v2h5z"/>');
    }
};
IconAspectRatio_TwoTone.styles = style;
IconAspectRatio_TwoTone = __decorate([
    customElement('mdui-icon-aspect-ratio--two-tone')
], IconAspectRatio_TwoTone);
export { IconAspectRatio_TwoTone };
