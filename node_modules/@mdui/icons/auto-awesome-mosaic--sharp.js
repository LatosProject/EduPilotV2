import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAutoAwesomeMosaic_Sharp = class IconAutoAwesomeMosaic_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 21h8V3H3v18zM21 3h-8v8h8V3zm-8 18h8v-8h-8v8z"/>');
    }
};
IconAutoAwesomeMosaic_Sharp.styles = style;
IconAutoAwesomeMosaic_Sharp = __decorate([
    customElement('mdui-icon-auto-awesome-mosaic--sharp')
], IconAutoAwesomeMosaic_Sharp);
export { IconAutoAwesomeMosaic_Sharp };
