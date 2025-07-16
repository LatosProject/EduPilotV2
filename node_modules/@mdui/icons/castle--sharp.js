import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCastle_Sharp = class IconCastle_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-5h4v5h9V9h-2zm-10 3H9V9h2v3zm4 0h-2V9h2v3z"/>');
    }
};
IconCastle_Sharp.styles = style;
IconCastle_Sharp = __decorate([
    customElement('mdui-icon-castle--sharp')
], IconCastle_Sharp);
export { IconCastle_Sharp };
