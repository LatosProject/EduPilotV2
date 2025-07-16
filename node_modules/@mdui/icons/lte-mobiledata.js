import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLteMobiledata = class IconLteMobiledata extends LitElement {
    render() {
        return svgTag('<path d="M6 14h3v2H4V8h2v6zm3-4h2v6h2v-6h2V8H9v2zm12 0V8h-5v8h5v-2h-3v-1h3v-2h-3v-1h3z"/>');
    }
};
IconLteMobiledata.styles = style;
IconLteMobiledata = __decorate([
    customElement('mdui-icon-lte-mobiledata')
], IconLteMobiledata);
export { IconLteMobiledata };
