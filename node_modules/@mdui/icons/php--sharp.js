import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhp_Sharp = class IconPhp_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9zM8 9v4H4.5v2H3V9h5zm-1.5 1.5h-2v1h2v-1zm15-1.5v4H18v2h-1.5V9h5zM20 10.5h-2v1h2v-1z"/>');
    }
};
IconPhp_Sharp.styles = style;
IconPhp_Sharp = __decorate([
    customElement('mdui-icon-php--sharp')
], IconPhp_Sharp);
export { IconPhp_Sharp };
