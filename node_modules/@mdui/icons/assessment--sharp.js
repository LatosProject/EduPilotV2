import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAssessment_Sharp = class IconAssessment_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>');
    }
};
IconAssessment_Sharp.styles = style;
IconAssessment_Sharp = __decorate([
    customElement('mdui-icon-assessment--sharp')
], IconAssessment_Sharp);
export { IconAssessment_Sharp };
