import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDisabledByDefault_TwoTone = class IconDisabledByDefault_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 5v14h14V5H5zm12 10.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" opacity=".3"/><path d="M19 19H5V5h14v14zM3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>');
    }
};
IconDisabledByDefault_TwoTone.styles = style;
IconDisabledByDefault_TwoTone = __decorate([
    customElement('mdui-icon-disabled-by-default--two-tone')
], IconDisabledByDefault_TwoTone);
export { IconDisabledByDefault_TwoTone };
