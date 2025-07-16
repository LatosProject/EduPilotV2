import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLandscape_Outlined = class IconLandscape_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m14 6-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"/>');
    }
};
IconLandscape_Outlined.styles = style;
IconLandscape_Outlined = __decorate([
    customElement('mdui-icon-landscape--outlined')
], IconLandscape_Outlined);
export { IconLandscape_Outlined };
