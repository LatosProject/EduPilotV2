import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerifiedUser_Sharp = class IconVerifiedUser_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>');
    }
};
IconVerifiedUser_Sharp.styles = style;
IconVerifiedUser_Sharp = __decorate([
    customElement('mdui-icon-verified-user--sharp')
], IconVerifiedUser_Sharp);
export { IconVerifiedUser_Sharp };
