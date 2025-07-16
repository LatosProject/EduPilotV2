import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCurtains_Sharp = class IconCurtains_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 19V3H4v16H2v2h20v-2h-2zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7z"/>');
    }
};
IconCurtains_Sharp.styles = style;
IconCurtains_Sharp = __decorate([
    customElement('mdui-icon-curtains--sharp')
], IconCurtains_Sharp);
export { IconCurtains_Sharp };
