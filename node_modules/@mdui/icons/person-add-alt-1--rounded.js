import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPersonAddAlt_1_Rounded = class IconPersonAddAlt_1_Rounded extends LitElement {
    render() {
        return svgTag('<circle cx="9" cy="8" r="4"/><path d="M9 14c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4zm11-4V7h-2v3h-3v2h3v3h2v-3h3v-2z"/>');
    }
};
IconPersonAddAlt_1_Rounded.styles = style;
IconPersonAddAlt_1_Rounded = __decorate([
    customElement('mdui-icon-person-add-alt-1--rounded')
], IconPersonAddAlt_1_Rounded);
export { IconPersonAddAlt_1_Rounded };
