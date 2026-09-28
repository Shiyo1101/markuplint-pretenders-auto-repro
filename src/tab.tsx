type Props = {
  selected: boolean;
};

export function Tab({selected}: Props) {
  return (
    <button
      type='button'
      role='tab'
      aria-label='Example'
      tabIndex={selected ? 0 : -1}
    >
      Example
    </button>
  );
}
