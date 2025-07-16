import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDeblur_Rounded = class IconDeblur_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 3v18a9 9 0 0 0 0-18z"/><circle cx="6" cy="14" r="1"/><circle cx="6" cy="18" r="1"/><circle cx="6" cy="10" r="1"/><circle cx="3" cy="10" r=".5"/><circle cx="6" cy="6" r="1"/><circle cx="3" cy="14" r=".5"/><circle cx="10" cy="21" r=".5"/><circle cx="10" cy="3" r=".5"/><circle cx="10" cy="6" r="1"/><circle cx="10" cy="14" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="10" cy="18" r="1"/>');
    }
};
IconDeblur_Rounded.styles = style;
IconDeblur_Rounded = __decorate([
    customElement('mdui-icon-deblur--rounded')
], IconDeblur_Rounded);
export { IconDeblur_Rounded };
