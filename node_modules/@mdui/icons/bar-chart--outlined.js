import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBarChart_Outlined = class IconBarChart_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"/>');
    }
};
IconBarChart_Outlined.styles = style;
IconBarChart_Outlined = __decorate([
    customElement('mdui-icon-bar-chart--outlined')
], IconBarChart_Outlined);
export { IconBarChart_Outlined };
