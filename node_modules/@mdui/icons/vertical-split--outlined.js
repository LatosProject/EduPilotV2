import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalSplit_Outlined = class IconVerticalSplit_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm16 2v10h-4V7h4m2-2h-8v14h8V5z"/>');
    }
};
IconVerticalSplit_Outlined.styles = style;
IconVerticalSplit_Outlined = __decorate([
    customElement('mdui-icon-vertical-split--outlined')
], IconVerticalSplit_Outlined);
export { IconVerticalSplit_Outlined };
