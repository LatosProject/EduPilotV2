import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUndo_Outlined = class IconUndo_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>');
    }
};
IconUndo_Outlined.styles = style;
IconUndo_Outlined = __decorate([
    customElement('mdui-icon-undo--outlined')
], IconUndo_Outlined);
export { IconUndo_Outlined };
