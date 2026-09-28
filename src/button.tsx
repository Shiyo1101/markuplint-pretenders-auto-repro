type Props = {
  type?: 'button' | 'submit' | 'reset';
};

export function Button({type}: Props) {
  return (
    <button
      aria-label='Save'
      type={type === 'submit' ? 'submit' : type === 'reset' ? 'reset' : 'button'}
    >
      Save
    </button>
  );
}
