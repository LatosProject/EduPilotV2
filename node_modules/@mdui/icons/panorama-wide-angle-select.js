import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPanoramaWideAngleSelect = class IconPanoramaWideAngleSelect extends LitElement {
    render() {
        return svgTag('<path d="M12 4c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z"/>');
    }
};
IconPanoramaWideAngleSelect.styles = style;
IconPanoramaWideAngleSelect = __decorate([
    customElement('mdui-icon-panorama-wide-angle-select')
], IconPanoramaWideAngleSelect);
export { IconPanoramaWideAngleSelect };
