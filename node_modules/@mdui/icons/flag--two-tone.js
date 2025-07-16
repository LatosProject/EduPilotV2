import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlag_TwoTone = class IconFlag_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12.36 6H7v6h7.24l.4 2H18V8h-5.24z" opacity=".3"/><path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6zm3.6 8h-3.36l-.4-2H7V6h5.36l.4 2H18v6z"/>');
    }
};
IconFlag_TwoTone.styles = style;
IconFlag_TwoTone = __decorate([
    customElement('mdui-icon-flag--two-tone')
], IconFlag_TwoTone);
export { IconFlag_TwoTone };
