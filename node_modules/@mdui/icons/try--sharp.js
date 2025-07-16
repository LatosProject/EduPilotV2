import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTry_Sharp = class IconTry_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v20l4-4h16V2zm-8.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z"/>');
    }
};
IconTry_Sharp.styles = style;
IconTry_Sharp = __decorate([
    customElement('mdui-icon-try--sharp')
], IconTry_Sharp);
export { IconTry_Sharp };
