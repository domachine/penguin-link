const renderHref = ({ language }, { href }) => `/${language}${href}`

export function render (ctx, props) {
  return { attrs: { href: renderHref(ctx, props) } }
}

export function mount (ctx, props, el) {
  if (process.env.PENGUIN_ENV === 'production') return
  el.setAttribute('href', renderHref(ctx, props))
}
