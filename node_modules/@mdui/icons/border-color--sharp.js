import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderColor_Sharp = class IconBorderColor_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68-3.75-3.75 2.53-2.54 3.75 3.75-2.53 2.54z"/>');
    }
};
IconBorderColor_Sharp.styles = style;
IconBorderColor_Sharp = __decorate([
    customElement('mdui-icon-border-color--sharp')
], IconBorderColor_Sharp);
export { IconBorderColor_Sharp };
