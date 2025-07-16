import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertPageBreak_Sharp = class IconInsertPageBreak_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 17h16v5H4zm16-9-6-6H4.01L4 11h16V8zm-7 1V3.5L18.5 9H13zm-4 4h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z"/>');
    }
};
IconInsertPageBreak_Sharp.styles = style;
IconInsertPageBreak_Sharp = __decorate([
    customElement('mdui-icon-insert-page-break--sharp')
], IconInsertPageBreak_Sharp);
export { IconInsertPageBreak_Sharp };
