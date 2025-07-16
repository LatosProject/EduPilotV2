import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCategory_Sharp = class IconCategory_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m12 2-5.5 9h11z"/><circle cx="17.5" cy="17.5" r="4.5"/><path d="M3 13.5h8v8H3z"/>');
    }
};
IconCategory_Sharp.styles = style;
IconCategory_Sharp = __decorate([
    customElement('mdui-icon-category--sharp')
], IconCategory_Sharp);
export { IconCategory_Sharp };
