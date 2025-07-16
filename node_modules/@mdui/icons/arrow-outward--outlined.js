import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowOutward_Outlined = class IconArrowOutward_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"/>');
    }
};
IconArrowOutward_Outlined.styles = style;
IconArrowOutward_Outlined = __decorate([
    customElement('mdui-icon-arrow-outward--outlined')
], IconArrowOutward_Outlined);
export { IconArrowOutward_Outlined };
