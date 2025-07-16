import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewStream_Sharp = class IconViewStream_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 19v-6h18v6H3zM3 5v6h18V5H3z"/>');
    }
};
IconViewStream_Sharp.styles = style;
IconViewStream_Sharp = __decorate([
    customElement('mdui-icon-view-stream--sharp')
], IconViewStream_Sharp);
export { IconViewStream_Sharp };
