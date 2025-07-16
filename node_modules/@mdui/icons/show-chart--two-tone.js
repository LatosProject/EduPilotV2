import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShowChart_TwoTone = class IconShowChart_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m13.5 13.48-4-4L2 16.99l1.5 1.5 6-6.01 4 4L22 6.92l-1.41-1.41z"/>');
    }
};
IconShowChart_TwoTone.styles = style;
IconShowChart_TwoTone = __decorate([
    customElement('mdui-icon-show-chart--two-tone')
], IconShowChart_TwoTone);
export { IconShowChart_TwoTone };
