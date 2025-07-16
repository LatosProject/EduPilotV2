import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGif_Sharp = class IconGif_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11.5 9H13v6h-1.5V9zM10 9H5v6h5v-3H8.5v1.5h-2v-3H10V9zm9 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1h3z"/>');
    }
};
IconGif_Sharp.styles = style;
IconGif_Sharp = __decorate([
    customElement('mdui-icon-gif--sharp')
], IconGif_Sharp);
export { IconGif_Sharp };
