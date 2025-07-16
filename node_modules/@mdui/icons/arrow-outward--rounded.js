import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowOutward_Rounded = class IconArrowOutward_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M6 7c0 .55.45 1 1 1h7.59l-8.88 8.88a.996.996 0 1 0 1.41 1.41L16 9.41V17c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z"/>');
    }
};
IconArrowOutward_Rounded.styles = style;
IconArrowOutward_Rounded = __decorate([
    customElement('mdui-icon-arrow-outward--rounded')
], IconArrowOutward_Rounded);
export { IconArrowOutward_Rounded };
