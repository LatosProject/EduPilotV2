import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPentagon = class IconPentagon extends LitElement {
    render() {
        return svgTag('<path d="m2 9 4 12h12l4-12-10-7z"/>');
    }
};
IconPentagon.styles = style;
IconPentagon = __decorate([
    customElement('mdui-icon-pentagon')
], IconPentagon);
export { IconPentagon };
