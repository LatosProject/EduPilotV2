import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrowserUpdated_Sharp = class IconBrowserUpdated_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 13v5h-5l1 1v2H6v-2l1-1H2V3h10v2H4v11h16v-3h2zm-7 2-5-5h4V3h2v7h4l-5 5z"/>');
    }
};
IconBrowserUpdated_Sharp.styles = style;
IconBrowserUpdated_Sharp = __decorate([
    customElement('mdui-icon-browser-updated--sharp')
], IconBrowserUpdated_Sharp);
export { IconBrowserUpdated_Sharp };
