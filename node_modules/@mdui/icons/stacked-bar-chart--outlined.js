import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStackedBarChart_Outlined = class IconStackedBarChart_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z"/>');
    }
};
IconStackedBarChart_Outlined.styles = style;
IconStackedBarChart_Outlined = __decorate([
    customElement('mdui-icon-stacked-bar-chart--outlined')
], IconStackedBarChart_Outlined);
export { IconStackedBarChart_Outlined };
