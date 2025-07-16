import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReadMore_Rounded = class IconReadMore_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M14 9h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1zm7 6h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zM8.85 7.85a.5.5 0 0 0-.85.36V11H3c-.55 0-1 .45-1 1s.45 1 1 1h5v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71L8.85 7.85z"/>');
    }
};
IconReadMore_Rounded.styles = style;
IconReadMore_Rounded = __decorate([
    customElement('mdui-icon-read-more--rounded')
], IconReadMore_Rounded);
export { IconReadMore_Rounded };
