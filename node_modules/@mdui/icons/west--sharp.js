import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWest_Sharp = class IconWest_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"/>');
    }
};
IconWest_Sharp.styles = style;
IconWest_Sharp = __decorate([
    customElement('mdui-icon-west--sharp')
], IconWest_Sharp);
export { IconWest_Sharp };
