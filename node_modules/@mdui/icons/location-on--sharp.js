import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocationOn_Sharp = class IconLocationOn_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>');
    }
};
IconLocationOn_Sharp.styles = style;
IconLocationOn_Sharp = __decorate([
    customElement('mdui-icon-location-on--sharp')
], IconLocationOn_Sharp);
export { IconLocationOn_Sharp };
