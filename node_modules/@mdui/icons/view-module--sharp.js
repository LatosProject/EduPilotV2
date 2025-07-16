import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewModule_Sharp = class IconViewModule_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z"/>');
    }
};
IconViewModule_Sharp.styles = style;
IconViewModule_Sharp = __decorate([
    customElement('mdui-icon-view-module--sharp')
], IconViewModule_Sharp);
export { IconViewModule_Sharp };
