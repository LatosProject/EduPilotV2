import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScore_Sharp = class IconScore_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-9 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12V5zM7 7.25h2.5V6.5H7V5h4v3.75H8.5v.75H11V11H7V7.25zM19 13l-6 6-4-4-4 4v-2.5l4-4 4 4 6-6V13z"/>');
    }
};
IconScore_Sharp.styles = style;
IconScore_Sharp = __decorate([
    customElement('mdui-icon-score--sharp')
], IconScore_Sharp);
export { IconScore_Sharp };
