import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNewLabel_Sharp = class IconNewLabel_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m21 12-4.97 7H12v-6H9v-3H3V5h13.03L21 12zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3v-2z"/>');
    }
};
IconNewLabel_Sharp.styles = style;
IconNewLabel_Sharp = __decorate([
    customElement('mdui-icon-new-label--sharp')
], IconNewLabel_Sharp);
export { IconNewLabel_Sharp };
