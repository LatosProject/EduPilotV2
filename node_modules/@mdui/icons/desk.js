import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDesk = class IconDesk extends LitElement {
    render() {
        return svgTag('<path d="M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 2v2h-4V8h4zm-4 6v-2h4v2h-4z"/>');
    }
};
IconDesk.styles = style;
IconDesk = __decorate([
    customElement('mdui-icon-desk')
], IconDesk);
export { IconDesk };
