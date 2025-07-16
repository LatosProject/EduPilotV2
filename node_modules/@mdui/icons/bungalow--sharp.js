import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBungalow_Sharp = class IconBungalow_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 3 4.2 15.5l1.7 1.06L7 14.8V21h4v-5h2v5h4v-6.21l1.1 1.77 1.7-1.06L12 3zm1 11h-2v-2h2v2z"/>');
    }
};
IconBungalow_Sharp.styles = style;
IconBungalow_Sharp = __decorate([
    customElement('mdui-icon-bungalow--sharp')
], IconBungalow_Sharp);
export { IconBungalow_Sharp };
