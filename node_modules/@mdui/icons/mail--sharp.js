import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMail_Sharp = class IconMail_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zm-2 4-8 5-8-5V6l8 5 8-5v2z"/>');
    }
};
IconMail_Sharp.styles = style;
IconMail_Sharp = __decorate([
    customElement('mdui-icon-mail--sharp')
], IconMail_Sharp);
export { IconMail_Sharp };
