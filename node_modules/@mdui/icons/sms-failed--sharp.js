import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSmsFailed_Sharp = class IconSmsFailed_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v20l4-4h16V2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>');
    }
};
IconSmsFailed_Sharp.styles = style;
IconSmsFailed_Sharp = __decorate([
    customElement('mdui-icon-sms-failed--sharp')
], IconSmsFailed_Sharp);
export { IconSmsFailed_Sharp };
