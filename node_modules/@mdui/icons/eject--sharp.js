import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEject_Sharp = class IconEject_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 17h14v2H5v-2zm7-12L5.33 15h13.34L12 5z"/>');
    }
};
IconEject_Sharp.styles = style;
IconEject_Sharp = __decorate([
    customElement('mdui-icon-eject--sharp')
], IconEject_Sharp);
export { IconEject_Sharp };
