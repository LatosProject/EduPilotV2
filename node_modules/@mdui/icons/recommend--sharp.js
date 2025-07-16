import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRecommend_Sharp = class IconRecommend_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 10.05L15.46 18H7v-7.56L12 5l1 1v.53L12.41 10H18v2.05z"/>');
    }
};
IconRecommend_Sharp.styles = style;
IconRecommend_Sharp = __decorate([
    customElement('mdui-icon-recommend--sharp')
], IconRecommend_Sharp);
export { IconRecommend_Sharp };
