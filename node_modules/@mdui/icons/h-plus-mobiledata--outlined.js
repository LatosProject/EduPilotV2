import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHPlusMobiledata_Outlined = class IconHPlusMobiledata_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 11H6V7H4v10h2v-4h6v4h2V7h-2v4zm10 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2z"/>');
    }
};
IconHPlusMobiledata_Outlined.styles = style;
IconHPlusMobiledata_Outlined = __decorate([
    customElement('mdui-icon-h-plus-mobiledata--outlined')
], IconHPlusMobiledata_Outlined);
export { IconHPlusMobiledata_Outlined };
