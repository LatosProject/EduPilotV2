import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFactory_Outlined = class IconFactory_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8v12zM12 9.95l-5 2V10l-3 1.32V20h16v-8h-8V9.95zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z"/>');
    }
};
IconFactory_Outlined.styles = style;
IconFactory_Outlined = __decorate([
    customElement('mdui-icon-factory--outlined')
], IconFactory_Outlined);
export { IconFactory_Outlined };
