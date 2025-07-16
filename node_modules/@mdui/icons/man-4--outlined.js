import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMan_4_Outlined = class IconMan_4_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L10 22h4l1.73-12.74C15.89 8.07 14.96 7 13.75 7z"/><circle cx="12" cy="4" r="2"/>');
    }
};
IconMan_4_Outlined.styles = style;
IconMan_4_Outlined = __decorate([
    customElement('mdui-icon-man-4--outlined')
], IconMan_4_Outlined);
export { IconMan_4_Outlined };
