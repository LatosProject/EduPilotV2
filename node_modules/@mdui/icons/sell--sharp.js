import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSell_Sharp = class IconSell_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22.83 12.83 12 2H2v10l10.83 10.83 10-10zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z"/>');
    }
};
IconSell_Sharp.styles = style;
IconSell_Sharp = __decorate([
    customElement('mdui-icon-sell--sharp')
], IconSell_Sharp);
export { IconSell_Sharp };
