import { isDomainDesigner } from '@ddd-tool/domain-designer-core';
const __d1 = (await import('./simple-example')).default;
const __d2 = (await import('./complex-example')).default;
const __d3 = (await import('./design-en')).default;
const __d4 = (await import('./design-zh')).default;
const data = {};
if (isDomainDesigner(__d1)) {
    data['simple-example'] = __d1;
}
if (isDomainDesigner(__d2)) {
    data['complex-example'] = __d2;
}
if (isDomainDesigner(__d3)) {
    data['design-en'] = __d3;
}
if (isDomainDesigner(__d4)) {
    data['design-zh'] = __d4;
}
export default data;
//# sourceMappingURL=index.js.map