import { Dispatch, SetStateAction, useState } from 'react'
import usePreviousValue from './usePreviousValue'

export function useTraceableState<T>(initialValue: T): [T | undefined, T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(initialValue)
  const prevValue = usePreviousValue(value)
  return [prevValue, value, setValue]
}
