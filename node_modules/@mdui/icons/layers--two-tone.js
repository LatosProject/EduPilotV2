import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLayers_TwoTone = class IconLayers_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6.26 9 12 13.47 17.74 9 12 4.53z" opacity=".3"/><path d="m19.37 12.8-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2 3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"/>');
    }
};
IconLayers_TwoTone.styles = style;
IconLayers_TwoTone = __decorate([
    customElement('mdui-icon-layers--two-tone')
], IconLayers_TwoTone);
export { IconLayers_TwoTone };
