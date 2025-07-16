import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBlender_Rounded = class IconBlender_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m16.13 15.13 1.69-10.98c.1-.6-.37-1.15-.99-1.15H14c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm7 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.29-5H9.72L8.33 5h7.34l-1.38 9z"/>');
    }
};
IconBlender_Rounded.styles = style;
IconBlender_Rounded = __decorate([
    customElement('mdui-icon-blender--rounded')
], IconBlender_Rounded);
export { IconBlender_Rounded };
