import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRuleFolder_Rounded = class IconRuleFolder_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM7.12 15.29l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71 2.83-2.83a.996.996 0 1 1 1.41 1.41L8.53 15.3c-.39.38-1.02.38-1.41-.01zM17.41 13l.88.88a.996.996 0 1 1-1.41 1.41l-.88-.88-.88.88a.996.996 0 1 1-1.41-1.41l.88-.88-.88-.88a.996.996 0 1 1 1.41-1.41l.88.88.88-.88a.996.996 0 1 1 1.41 1.41l-.88.88z"/>');
    }
};
IconRuleFolder_Rounded.styles = style;
IconRuleFolder_Rounded = __decorate([
    customElement('mdui-icon-rule-folder--rounded')
], IconRuleFolder_Rounded);
export { IconRuleFolder_Rounded };
