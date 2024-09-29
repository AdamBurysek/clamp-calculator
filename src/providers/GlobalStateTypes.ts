export interface GlobalStateProps {
  remBase: number
  setRemBase: React.Dispatch<React.SetStateAction<number>>
  isTargetUnitsPx: boolean
  setIsTargetUnitsPx: React.Dispatch<React.SetStateAction<boolean>>
  isViewportUnitsPx: boolean
  setIsViewportUnitsPx: React.Dispatch<React.SetStateAction<boolean>>
  minTargetValue: number
  setMinTargetValue: React.Dispatch<React.SetStateAction<number>>
  maxTargetValue: number
  setMaxTargetValue: React.Dispatch<React.SetStateAction<number>>
  minViewportValue: number
  setMinViewportValue: React.Dispatch<React.SetStateAction<number>>
  maxViewportValue: number
  setMaxViewportValue: React.Dispatch<React.SetStateAction<number>>
  clampValue: string
  setClampValue: React.Dispatch<React.SetStateAction<string>>
  outputInPx: boolean
  setOutputInPx: React.Dispatch<React.SetStateAction<boolean>>
  targetValue: string
  setTargetValue: React.Dispatch<React.SetStateAction<string>>
  commentValue: string
  setCommentValue: React.Dispatch<React.SetStateAction<string>>
  addComment: boolean
  setAddComment: React.Dispatch<React.SetStateAction<boolean>>
  useTailwind: boolean
  setUseTailwind: React.Dispatch<React.SetStateAction<boolean>>
  customTargetValue: string
  setCustomTargetValue: React.Dispatch<React.SetStateAction<string>>
}
