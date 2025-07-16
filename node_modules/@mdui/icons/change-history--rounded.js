import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChangeHistory_Rounded = class IconChangeHistory_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 7.77 18.39 18H5.61L12 7.77m-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0z"/>');
    }
};
IconChangeHistory_Rounded.styles = style;
IconChangeHistory_Rounded = __decorate([
    customElement('mdui-icon-change-history--rounded')
], IconChangeHistory_Rounded);
export { IconChangeHistory_Rounded };
