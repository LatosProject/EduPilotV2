import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconThumbUp_Sharp = class IconThumbUp_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14.17 1 7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z"/>');
    }
};
IconThumbUp_Sharp.styles = style;
IconThumbUp_Sharp = __decorate([
    customElement('mdui-icon-thumb-up--sharp')
], IconThumbUp_Sharp);
export { IconThumbUp_Sharp };
