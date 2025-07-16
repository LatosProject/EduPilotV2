import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLens_Rounded = class IconLens_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>');
    }
};
IconLens_Rounded.styles = style;
IconLens_Rounded = __decorate([
    customElement('mdui-icon-lens--rounded')
], IconLens_Rounded);
export { IconLens_Rounded };
