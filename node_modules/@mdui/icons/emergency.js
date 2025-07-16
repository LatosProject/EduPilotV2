import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEmergency = class IconEmergency extends LitElement {
    render() {
        return svgTag('<path d="m20.79 9.23-2-3.46L14 8.54V3h-4v5.54L5.21 5.77l-2 3.46L8 12l-4.79 2.77 2 3.46L10 15.46V21h4v-5.54l4.79 2.77 2-3.46L16 12z"/>');
    }
};
IconEmergency.styles = style;
IconEmergency = __decorate([
    customElement('mdui-icon-emergency')
], IconEmergency);
export { IconEmergency };
