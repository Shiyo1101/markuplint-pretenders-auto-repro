type Props = {
  interactive: boolean;
  label: string;
};

export function Chip({interactive, label}: Props) {
  if (interactive) {
    return <button type='button' aria-label='Notifications'>{label}</button>;
  }

  return <span>{label}</span>;
}
