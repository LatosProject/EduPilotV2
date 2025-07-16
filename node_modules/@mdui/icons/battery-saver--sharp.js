import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBatterySaver_Sharp = class IconBatterySaver_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 4h-3V2h-4v2H7v18h10V4zm-2 10h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"/>');
    }
};
IconBatterySaver_Sharp.styles = style;
IconBatterySaver_Sharp = __decorate([
    customElement('mdui-icon-battery-saver--sharp')
], IconBatterySaver_Sharp);
export { IconBatterySaver_Sharp };
