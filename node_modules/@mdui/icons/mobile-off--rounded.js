import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMobileOff_Rounded = class IconMobileOff_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 16.44 3.61 3.05A.996.996 0 1 0 2.2 4.46L5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75L20 22.27a.996.996 0 1 0 1.41-1.41L19 18.44l-2-2zM7 19V9.27L16.73 19H7zM17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5H17z"/>');
    }
};
IconMobileOff_Rounded.styles = style;
IconMobileOff_Rounded = __decorate([
    customElement('mdui-icon-mobile-off--rounded')
], IconMobileOff_Rounded);
export { IconMobileOff_Rounded };
