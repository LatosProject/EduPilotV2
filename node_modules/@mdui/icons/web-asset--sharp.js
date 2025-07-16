import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWebAsset_Sharp = class IconWebAsset_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 4v16h18V4H3zm16 14H5V8h14v10z"/>');
    }
};
IconWebAsset_Sharp.styles = style;
IconWebAsset_Sharp = __decorate([
    customElement('mdui-icon-web-asset--sharp')
], IconWebAsset_Sharp);
export { IconWebAsset_Sharp };
