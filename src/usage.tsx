import {Button} from './button';
import {Chip} from './chip';
import {Picture} from './picture';
import {Tab} from './tab';

export function Example() {
  return (
    <div>
      <Button />
      <label>
        <input type='checkbox' aria-label='Notifications' />
        <Chip interactive={false} label='Notifications' />
      </label>
      <Picture />
      <div role='tablist' aria-label='Examples'>
        <Tab selected={true} />
      </div>
    </div>
  );
}
