import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRequestPage_Sharp = class IconRequestPage_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 2H4.01L4 22h16V8l-6-6zm1 9h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9V9h2V8h2v1h2v2z"/>');
    }
};
IconRequestPage_Sharp.styles = style;
IconRequestPage_Sharp = __decorate([
    customElement('mdui-icon-request-page--sharp')
], IconRequestPage_Sharp);
export { IconRequestPage_Sharp };
