import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReportProblem = class IconReportProblem extends LitElement {
    render() {
        return svgTag('<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>');
    }
};
IconReportProblem.styles = style;
IconReportProblem = __decorate([
    customElement('mdui-icon-report-problem')
], IconReportProblem);
export { IconReportProblem };
