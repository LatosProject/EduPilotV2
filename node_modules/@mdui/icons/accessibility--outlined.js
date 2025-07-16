import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccessibility_Outlined = class IconAccessibility_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>');
    }
};
IconAccessibility_Outlined.styles = style;
IconAccessibility_Outlined = __decorate([
    customElement('mdui-icon-accessibility--outlined')
], IconAccessibility_Outlined);
export { IconAccessibility_Outlined };
