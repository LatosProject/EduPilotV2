import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalShades_Rounded = class IconVerticalShades_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zm-10 0V5h4v14h-4z"/>');
    }
};
IconVerticalShades_Rounded.styles = style;
IconVerticalShades_Rounded = __decorate([
    customElement('mdui-icon-vertical-shades--rounded')
], IconVerticalShades_Rounded);
export { IconVerticalShades_Rounded };
