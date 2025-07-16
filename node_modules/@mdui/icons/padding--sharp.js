import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPadding_Sharp = class IconPadding_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm6 6H7V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2z"/>');
    }
};
IconPadding_Sharp.styles = style;
IconPadding_Sharp = __decorate([
    customElement('mdui-icon-padding--sharp')
], IconPadding_Sharp);
export { IconPadding_Sharp };
