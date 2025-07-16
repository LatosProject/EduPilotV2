import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconImagesearchRoller = class IconImagesearchRoller extends LitElement {
    render() {
        return svgTag('<path d="M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2"/>');
    }
};
IconImagesearchRoller.styles = style;
IconImagesearchRoller = __decorate([
    customElement('mdui-icon-imagesearch-roller')
], IconImagesearchRoller);
export { IconImagesearchRoller };
