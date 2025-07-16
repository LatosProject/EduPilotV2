import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalSee_Sharp = class IconLocalSee_Sharp extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="12" r="3.2"/><path d="M22 4h-5.17L15 2H9L7.17 4H2v16h20V4zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>');
    }
};
IconLocalSee_Sharp.styles = style;
IconLocalSee_Sharp = __decorate([
    customElement('mdui-icon-local-see--sharp')
], IconLocalSee_Sharp);
export { IconLocalSee_Sharp };
