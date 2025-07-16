import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSave_Sharp = class IconSave_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 3H3v18h18V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>');
    }
};
IconSave_Sharp.styles = style;
IconSave_Sharp = __decorate([
    customElement('mdui-icon-save--sharp')
], IconSave_Sharp);
export { IconSave_Sharp };
