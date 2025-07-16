import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWebAsset_Rounded = class IconWebAsset_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-1 14H6c-.55 0-1-.45-1-1V8h14v9c0 .55-.45 1-1 1z"/>');
    }
};
IconWebAsset_Rounded.styles = style;
IconWebAsset_Rounded = __decorate([
    customElement('mdui-icon-web-asset--rounded')
], IconWebAsset_Rounded);
export { IconWebAsset_Rounded };
