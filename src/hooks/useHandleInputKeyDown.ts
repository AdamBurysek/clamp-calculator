import { useCallback } from 'react'

const useHandleInputKeyDown = () => {
  const handleInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      ;(e.target as HTMLInputElement).blur()
    }
  }, [])

  return handleInputKeyDown
}

export default useHandleInputKeyDown
