import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEject = class IconEject extends LitElement {
    render() {
        return svgTag('<path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"/>');
    }
};
IconEject.styles = style;
IconEject = __decorate([
    customElement('mdui-icon-eject')
], IconEject);
export { IconEject };
