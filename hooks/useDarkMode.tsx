import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

import { RootState } from "../store/reducer";
import { setDarkmodeToggle } from "../store/mode/actions";

function useDarkMode() {
  const dispatch = useDispatch()
  const { darkMode } = useSelector((state: RootState) => state.mode);
  const [IconSrc, setIconSrc] = useState("/images/icon-sun.svg")

  useEffect(() => {
    darkMode? setIconSrc("/images/icon-sun.svg") : setIconSrc("/images/icon-moon.svg")
  }, [darkMode])
  
  function toggleDarkMode() {
    dispatch(setDarkmodeToggle(!darkMode))
  }

  return {
    darkMode,
    toggleDarkMode,
    IconSrc
  }
}

export default useDarkMode