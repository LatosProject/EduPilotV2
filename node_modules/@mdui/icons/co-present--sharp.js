import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCoPresent_Sharp = class IconCoPresent_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v10h2V5h18v16h2z"/><circle cx="9" cy="10" r="4"/><path d="M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"/>');
    }
};
IconCoPresent_Sharp.styles = style;
IconCoPresent_Sharp = __decorate([
    customElement('mdui-icon-co-present--sharp')
], IconCoPresent_Sharp);
export { IconCoPresent_Sharp };
