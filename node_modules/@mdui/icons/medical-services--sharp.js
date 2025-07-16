import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMedicalServices_Sharp = class IconMedicalServices_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 6V2H8v4H2v16h20V6h-6zm-6-2h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"/>');
    }
};
IconMedicalServices_Sharp.styles = style;
IconMedicalServices_Sharp = __decorate([
    customElement('mdui-icon-medical-services--sharp')
], IconMedicalServices_Sharp);
export { IconMedicalServices_Sharp };
