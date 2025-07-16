import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlagCircle_Rounded = class IconFlagCircle_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13h-3.38c-.38 0-.73-.21-.89-.55L12 13H9.5v4.25c0 .41-.34.75-.75.75S8 17.66 8 17.25V8c0-.55.45-1 1-1h4.38c.38 0 .73.21.89.55L15 9h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1z"/>');
    }
};
IconFlagCircle_Rounded.styles = style;
IconFlagCircle_Rounded = __decorate([
    customElement('mdui-icon-flag-circle--rounded')
], IconFlagCircle_Rounded);
export { IconFlagCircle_Rounded };
