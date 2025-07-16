import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScanner_TwoTone = class IconScanner_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 14v4h14v-4H5zm3 3H6v-2h2v2zm10 0h-8v-2h8v2z" opacity=".3"/><path d="M19.8 10.7 4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM19 18H5v-4h14v4zM6 15h2v2H6zm4 0h8v2h-8z"/>');
    }
};
IconScanner_TwoTone.styles = style;
IconScanner_TwoTone = __decorate([
    customElement('mdui-icon-scanner--two-tone')
], IconScanner_TwoTone);
export { IconScanner_TwoTone };
