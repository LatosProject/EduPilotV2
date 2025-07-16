import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertPageBreak = class IconInsertPageBreak extends LitElement {
    render() {
        return svgTag('<path d="M4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2v-3H4v3zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2v7H20V8zm-7 1V3.5L18.5 9H13zm-4 4h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z"/>');
    }
};
IconInsertPageBreak.styles = style;
IconInsertPageBreak = __decorate([
    customElement('mdui-icon-insert-page-break')
], IconInsertPageBreak);
export { IconInsertPageBreak };
