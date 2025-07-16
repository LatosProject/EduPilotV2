import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGrade_Rounded = class IconGrade_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m12 17.27 5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88 4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51-2.35-5.54a.498.498 0 0 0-.92 0L9.19 8.63l-6.01.51a.5.5 0 0 0-.28.88l4.56 3.95-1.37 5.88c-.1.43.37.77.75.54L12 17.27z"/>');
    }
};
IconGrade_Rounded.styles = style;
IconGrade_Rounded = __decorate([
    customElement('mdui-icon-grade--rounded')
], IconGrade_Rounded);
export { IconGrade_Rounded };
