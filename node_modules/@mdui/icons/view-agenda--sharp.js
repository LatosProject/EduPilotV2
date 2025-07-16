import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewAgenda_Sharp = class IconViewAgenda_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 13h18v8H3zM3 3h18v8H3z"/>');
    }
};
IconViewAgenda_Sharp.styles = style;
IconViewAgenda_Sharp = __decorate([
    customElement('mdui-icon-view-agenda--sharp')
], IconViewAgenda_Sharp);
export { IconViewAgenda_Sharp };
