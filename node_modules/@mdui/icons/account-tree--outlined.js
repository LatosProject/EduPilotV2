import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccountTree_Outlined = class IconAccountTree_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"/>');
    }
};
IconAccountTree_Outlined.styles = style;
IconAccountTree_Outlined = __decorate([
    customElement('mdui-icon-account-tree--outlined')
], IconAccountTree_Outlined);
export { IconAccountTree_Outlined };
