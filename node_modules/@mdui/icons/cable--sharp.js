import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCable_Sharp = class IconCable_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 5V3h-4v2h-1v5h2v9h-4V3H5v11H3v5h1v2h4v-2h1v-5H7V5h4v16h8V10h2V5h-1z"/>');
    }
};
IconCable_Sharp.styles = style;
IconCable_Sharp = __decorate([
    customElement('mdui-icon-cable--sharp')
], IconCable_Sharp);
export { IconCable_Sharp };
