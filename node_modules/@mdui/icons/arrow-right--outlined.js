import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowRight_Outlined = class IconArrowRight_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m10 17 5-5-5-5v10z"/>');
    }
};
IconArrowRight_Outlined.styles = style;
IconArrowRight_Outlined = __decorate([
    customElement('mdui-icon-arrow-right--outlined')
], IconArrowRight_Outlined);
export { IconArrowRight_Outlined };
