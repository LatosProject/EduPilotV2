import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOutput_Sharp = class IconOutput_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"/><path d="M19 19H5V5h14v2h2V3H3v18h18v-4h-2z"/>');
    }
};
IconOutput_Sharp.styles = style;
IconOutput_Sharp = __decorate([
    customElement('mdui-icon-output--sharp')
], IconOutput_Sharp);
export { IconOutput_Sharp };
