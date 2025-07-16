import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBolt_Sharp = class IconBolt_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28L11 21z"/>');
    }
};
IconBolt_Sharp.styles = style;
IconBolt_Sharp = __decorate([
    customElement('mdui-icon-bolt--sharp')
], IconBolt_Sharp);
export { IconBolt_Sharp };
