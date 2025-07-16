import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOpenInBrowser_TwoTone = class IconOpenInBrowser_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"/>');
    }
};
IconOpenInBrowser_TwoTone.styles = style;
IconOpenInBrowser_TwoTone = __decorate([
    customElement('mdui-icon-open-in-browser--two-tone')
], IconOpenInBrowser_TwoTone);
export { IconOpenInBrowser_TwoTone };
