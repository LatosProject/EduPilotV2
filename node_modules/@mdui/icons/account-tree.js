import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccountTree = class IconAccountTree extends LitElement {
    render() {
        return svgTag('<path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"/>');
    }
};
IconAccountTree.styles = style;
IconAccountTree = __decorate([
    customElement('mdui-icon-account-tree')
], IconAccountTree);
export { IconAccountTree };
