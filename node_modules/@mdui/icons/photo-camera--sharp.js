import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhotoCamera_Sharp = class IconPhotoCamera_Sharp extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="12" r="3"/><path d="M9 2 7.17 4H2v16h20V4h-5.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>');
    }
};
IconPhotoCamera_Sharp.styles = style;
IconPhotoCamera_Sharp = __decorate([
    customElement('mdui-icon-photo-camera--sharp')
], IconPhotoCamera_Sharp);
export { IconPhotoCamera_Sharp };
