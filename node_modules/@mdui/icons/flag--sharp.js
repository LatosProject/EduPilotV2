import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlag_Sharp = class IconFlag_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>');
    }
};
IconFlag_Sharp.styles = style;
IconFlag_Sharp = __decorate([
    customElement('mdui-icon-flag--sharp')
], IconFlag_Sharp);
export { IconFlag_Sharp };
