import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewHeadline_Sharp = class IconViewHeadline_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>');
    }
};
IconViewHeadline_Sharp.styles = style;
IconViewHeadline_Sharp = __decorate([
    customElement('mdui-icon-view-headline--sharp')
], IconViewHeadline_Sharp);
export { IconViewHeadline_Sharp };
