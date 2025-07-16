import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLaptopMac_Sharp = class IconLaptopMac_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m20 18 1.99-2L22 3H2v13l2 2H0v2h24v-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>');
    }
};
IconLaptopMac_Sharp.styles = style;
IconLaptopMac_Sharp = __decorate([
    customElement('mdui-icon-laptop-mac--sharp')
], IconLaptopMac_Sharp);
export { IconLaptopMac_Sharp };
