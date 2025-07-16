import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAlignVerticalTop_Outlined = class IconAlignVerticalTop_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z"/>');
    }
};
IconAlignVerticalTop_Outlined.styles = style;
IconAlignVerticalTop_Outlined = __decorate([
    customElement('mdui-icon-align-vertical-top--outlined')
], IconAlignVerticalTop_Outlined);
export { IconAlignVerticalTop_Outlined };
