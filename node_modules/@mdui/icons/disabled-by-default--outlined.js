import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDisabledByDefault_Outlined = class IconDisabledByDefault_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 19H5V5h14v14zM3 3v18h18V3H3zm14 12.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>');
    }
};
IconDisabledByDefault_Outlined.styles = style;
IconDisabledByDefault_Outlined = __decorate([
    customElement('mdui-icon-disabled-by-default--outlined')
], IconDisabledByDefault_Outlined);
export { IconDisabledByDefault_Outlined };
