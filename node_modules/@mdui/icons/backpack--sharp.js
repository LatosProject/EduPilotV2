import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBackpack_Sharp = class IconBackpack_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 8v14H4V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86zM6 12v2h10v2h2v-4H6z"/>');
    }
};
IconBackpack_Sharp.styles = style;
IconBackpack_Sharp = __decorate([
    customElement('mdui-icon-backpack--sharp')
], IconBackpack_Sharp);
export { IconBackpack_Sharp };
