import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEject_TwoTone = class IconEject_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 8.6 9.07 13h5.86z" opacity=".3"/><path d="M5 17h14v2H5zm7-12L5.33 15h13.34L12 5zm0 3.6 2.93 4.4H9.07L12 8.6z"/>');
    }
};
IconEject_TwoTone.styles = style;
IconEject_TwoTone = __decorate([
    customElement('mdui-icon-eject--two-tone')
], IconEject_TwoTone);
export { IconEject_TwoTone };
