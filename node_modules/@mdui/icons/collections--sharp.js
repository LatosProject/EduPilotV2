import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCollections_Sharp = class IconCollections_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 18V2H6v16h16zm-11-6 2.03 2.71L16 11l4 5H8l3-4zM2 6v16h16v-2H4V6H2z"/>');
    }
};
IconCollections_Sharp.styles = style;
IconCollections_Sharp = __decorate([
    customElement('mdui-icon-collections--sharp')
], IconCollections_Sharp);
export { IconCollections_Sharp };
