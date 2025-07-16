import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNewLabel = class IconNewLabel extends LitElement {
    render() {
        return svgTag('<path d="m21 12-4.37 6.16c-.37.52-.98.84-1.63.84h-3v-6H9v-3H3V7c0-1.1.9-2 2-2h10c.65 0 1.26.31 1.63.84L21 12zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3v-2z"/>');
    }
};
IconNewLabel.styles = style;
IconNewLabel = __decorate([
    customElement('mdui-icon-new-label')
], IconNewLabel);
export { IconNewLabel };
