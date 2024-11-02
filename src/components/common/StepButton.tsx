interface Props {
  type: 'increment' | 'decrement'
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const StepButton = ({ type, onClick }: Props) => {
  return (
    <button
      className="flex h-12 w-12 items-center justify-center rounded-full bg-c-primary pb-1 text-xl font-bold text-c-background"
      onClick={onClick}
      data-type={type}
    >
      {type === 'increment' ? '+' : '-'}
    </button>
  )
}

export default StepButton
