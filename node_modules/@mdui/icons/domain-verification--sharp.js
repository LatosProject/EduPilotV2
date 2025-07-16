import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDomainVerification_Sharp = class IconDomainVerification_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z"/><path d="M3 4v16h18V4H3zm16 14H5V8h14v10z"/>');
    }
};
IconDomainVerification_Sharp.styles = style;
IconDomainVerification_Sharp = __decorate([
    customElement('mdui-icon-domain-verification--sharp')
], IconDomainVerification_Sharp);
export { IconDomainVerification_Sharp };
