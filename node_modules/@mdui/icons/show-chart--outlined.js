import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShowChart_Outlined = class IconShowChart_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z"/>');
    }
};
IconShowChart_Outlined.styles = style;
IconShowChart_Outlined = __decorate([
    customElement('mdui-icon-show-chart--outlined')
], IconShowChart_Outlined);
export { IconShowChart_Outlined };
