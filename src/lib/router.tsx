import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from "react"

const NAVIGATE_EVENT = "wka:navigate"

function normalizePath(pathname: string) {
  if (pathname.length > 1) return pathname.replace(/\/+$/, "")
  return pathname
}

function scrollToHash(hash: string) {
  if (!hash) return
  const target = document.querySelector(hash)
  if (target) target.scrollIntoView({ block: "start" })
}

export function usePathname() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const update = () => setPathname(normalizePath(window.location.pathname))
    window.addEventListener("popstate", update)
    window.addEventListener(NAVIGATE_EVENT, update)
    return () => {
      window.removeEventListener("popstate", update)
      window.removeEventListener(NAVIGATE_EVENT, update)
    }
  }, [])

  return pathname
}

export function navigate(href: string) {
  const url = new URL(href, window.location.origin)
  const nextPath = normalizePath(url.pathname)
  const currentPath = normalizePath(window.location.pathname)

  if (nextPath === currentPath) {
    window.history.replaceState({}, "", url.pathname + url.search + url.hash)
    if (url.hash) scrollToHash(url.hash)
    else window.scrollTo({ top: 0 })
    return
  }

  window.history.pushState({}, "", url.pathname + url.search + url.hash)
  window.dispatchEvent(new Event(NAVIGATE_EVENT))
  window.scrollTo({ top: 0 })
  if (url.hash) window.requestAnimationFrame(() => scrollToHash(url.hash))
}

export function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//")
}

export function shouldHandleClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.button === 0 &&
    !event.defaultPrevented &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  )
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Link({ href, onClick, ...props }: LinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        onClick?.(event)
        if (!isInternal(href) || !shouldHandleClick(event)) return
        event.preventDefault()
        navigate(href)
      }}
      {...props}
    />
  )
}
