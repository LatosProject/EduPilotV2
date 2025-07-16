import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHls_Sharp = class IconHls_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2V9zm9 6h5v-3.5H17v-1h2v.5h1.5V9h-5v3.5H19v1h-2V13h-1.5v2zM14 15v-1.5h-2.5V9H10v6h4z"/>');
    }
};
IconHls_Sharp.styles = style;
IconHls_Sharp = __decorate([
    customElement('mdui-icon-hls--sharp')
], IconHls_Sharp);
export { IconHls_Sharp };
