import { EVENTS } from "./consts"
import { useEffect, useState } from "react"
import { match } from "path-to-regexp"

export function Router ({ routes = [], defaultComponent: DefaultComponent }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    }
  }, [])

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    // hemos usado 'path-to-regexp' para detectar rutas dinámicas
    // /search/:query <--- :query es una ruta dinámica
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false;

    /* guardar los parámetros de la URL que eran dinámicos, extraídos con páth-to-regexp
    si la ruta es /search/:query
    y la url es /search/javascript
    matched.params.query === 'javascript'
    */
    routeParams = matched.params
    return true
  })?.Component;

  return Page 
    ? <Page routeParams={routeParams} /> 
    : <DefaultComponent routeParams={routeParams} />;
}