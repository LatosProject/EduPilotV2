import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconApproval_Sharp = class IconApproval_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 14v8h16v-8H4zm14 4H6v-2h12v2zM12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5z"/>');
    }
};
IconApproval_Sharp.styles = style;
IconApproval_Sharp = __decorate([
    customElement('mdui-icon-approval--sharp')
], IconApproval_Sharp);
export { IconApproval_Sharp };
