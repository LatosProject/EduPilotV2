import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccessibility_Rounded = class IconAccessibility_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8 7h-5v12c0 .55-.45 1-1 1s-1-.45-1-1v-5h-2v5c0 .55-.45 1-1 1s-1-.45-1-1V9H4c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
    }
};
IconAccessibility_Rounded.styles = style;
IconAccessibility_Rounded = __decorate([
    customElement('mdui-icon-accessibility--rounded')
], IconAccessibility_Rounded);
export { IconAccessibility_Rounded };
