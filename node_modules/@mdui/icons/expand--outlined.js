import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExpand_Outlined = class IconExpand_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 20h16v2H4zM4 2h16v2H4zm5.41 11.59L8 15l4 4 4-4-1.41-1.41L13 15.17V8.83l1.59 1.58L16 9l-4-4-4 4 1.41 1.41L11 8.83v6.34z"/>');
    }
};
IconExpand_Outlined.styles = style;
IconExpand_Outlined = __decorate([
    customElement('mdui-icon-expand--outlined')
], IconExpand_Outlined);
export { IconExpand_Outlined };
