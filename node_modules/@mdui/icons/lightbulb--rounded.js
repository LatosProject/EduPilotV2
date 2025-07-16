import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLightbulb_Rounded = class IconLightbulb_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm-3-3h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1zm3-17C7.86 2 4.5 5.36 4.5 9.5c0 3.82 2.66 5.86 3.77 6.5h7.46c1.11-.64 3.77-2.68 3.77-6.5C19.5 5.36 16.14 2 12 2z"/>');
    }
};
IconLightbulb_Rounded.styles = style;
IconLightbulb_Rounded = __decorate([
    customElement('mdui-icon-lightbulb--rounded')
], IconLightbulb_Rounded);
export { IconLightbulb_Rounded };
