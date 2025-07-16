import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExpand_TwoTone = class IconExpand_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 20h16v2H4v-2zM4 2h16v2H4V2zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3V9z"/>');
    }
};
IconExpand_TwoTone.styles = style;
IconExpand_TwoTone = __decorate([
    customElement('mdui-icon-expand--two-tone')
], IconExpand_TwoTone);
export { IconExpand_TwoTone };
