import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBedtime_Sharp = class IconBedtime_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96z"/>');
    }
};
IconBedtime_Sharp.styles = style;
IconBedtime_Sharp = __decorate([
    customElement('mdui-icon-bedtime--sharp')
], IconBedtime_Sharp);
export { IconBedtime_Sharp };
