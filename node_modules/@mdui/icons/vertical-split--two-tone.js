import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalSplit_TwoTone = class IconVerticalSplit_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 7h4v10h-4z" opacity=".3"/><path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5h-8zm6 12h-4V7h4v10z"/>');
    }
};
IconVerticalSplit_TwoTone.styles = style;
IconVerticalSplit_TwoTone = __decorate([
    customElement('mdui-icon-vertical-split--two-tone')
], IconVerticalSplit_TwoTone);
export { IconVerticalSplit_TwoTone };
