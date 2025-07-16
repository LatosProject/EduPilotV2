import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowRightAlt_Outlined = class IconArrowRightAlt_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>');
    }
};
IconArrowRightAlt_Outlined.styles = style;
IconArrowRightAlt_Outlined = __decorate([
    customElement('mdui-icon-arrow-right-alt--outlined')
], IconArrowRightAlt_Outlined);
export { IconArrowRightAlt_Outlined };
