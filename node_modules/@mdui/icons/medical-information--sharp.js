import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMedicalInformation_Sharp = class IconMedicalInformation_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 7h-7V2H9v5H2v15h20V7zM11 4h2v5h-2V4zm0 12H9v2H7v-2H5v-2h2v-2h2v2h2v2zm2-1.5V13h6v1.5h-6zm0 3V16h4v1.5h-4z"/>');
    }
};
IconMedicalInformation_Sharp.styles = style;
IconMedicalInformation_Sharp = __decorate([
    customElement('mdui-icon-medical-information--sharp')
], IconMedicalInformation_Sharp);
export { IconMedicalInformation_Sharp };
