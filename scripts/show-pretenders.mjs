import {resolve} from 'node:path';
import {scan} from '@markuplint/pretenders';

const components = ['button', 'chip', 'picture', 'tab'].map((name) =>
  resolve(`src/${name}.tsx`),
);
const mappings = await scan(components);
console.log(JSON.stringify(mappings, null, 2));
