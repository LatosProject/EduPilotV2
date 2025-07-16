import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowRightAlt_Rounded = class IconArrowRightAlt_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z"/>');
    }
};
IconArrowRightAlt_Rounded.styles = style;
IconArrowRightAlt_Rounded = __decorate([
    customElement('mdui-icon-arrow-right-alt--rounded')
], IconArrowRightAlt_Rounded);
export { IconArrowRightAlt_Rounded };
