import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignpost_Rounded = class IconSignpost_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7z"/>');
    }
};
IconSignpost_Rounded.styles = style;
IconSignpost_Rounded = __decorate([
    customElement('mdui-icon-signpost--rounded')
], IconSignpost_Rounded);
export { IconSignpost_Rounded };
