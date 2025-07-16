import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAutoAwesomeMosaic_Rounded = class IconAutoAwesomeMosaic_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z"/>');
    }
};
IconAutoAwesomeMosaic_Rounded.styles = style;
IconAutoAwesomeMosaic_Rounded = __decorate([
    customElement('mdui-icon-auto-awesome-mosaic--rounded')
], IconAutoAwesomeMosaic_Rounded);
export { IconAutoAwesomeMosaic_Rounded };
