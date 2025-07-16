import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSplitscreen_Sharp = class IconSplitscreen_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 4v5H6V4h12m2-2H4v9h16V2zm-2 13v5H6v-5h12m2-2H4v9h16v-9z"/>');
    }
};
IconSplitscreen_Sharp.styles = style;
IconSplitscreen_Sharp = __decorate([
    customElement('mdui-icon-splitscreen--sharp')
], IconSplitscreen_Sharp);
export { IconSplitscreen_Sharp };
