import { onBeforeUnmount, watch } from 'vue'

/**
 * Module-scoped singleton state shared across all imports.
 * This replaces the old window.colby.components['colby-loader'] singleton.
 */
const state = {
  ids: new Set(),
  spinnerStarted: 0,
  div: null,
}

function makeId(len = 10) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  // Prefer crypto when available
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const bytes = new Uint8Array(len)
    crypto.getRandomValues(bytes)
    let out = ''
    for (let i = 0; i < len; i++) out += alphabet[bytes[i] % alphabet.length]
    return out
  }

  // Fallback
  let out = ''
  for (let i = 0; i < len; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)]
  return out
}

function ensureDiv(className, hiddenClassName) {
  if (state.div) return state.div

  const div = document.createElement('div')
  div.className = `${className} ${hiddenClassName}`
  document.body.appendChild(div)
  state.div = div
  return div
}

function show(div, hiddenClassName) {
  if (div.classList.contains(hiddenClassName)) {
    state.spinnerStarted = Date.now()
    div.classList.remove(hiddenClassName)
  }
}

function hideIfUnused(div, hiddenClassName) {
  if (state.ids.size === 0 && !div.classList.contains(hiddenClassName)) {
    state.spinnerStarted = 0
    div.classList.add(hiddenClassName)
  }
}

/**
 * Vue 3 composable for a singleton global loader overlay.
 *
 * @param {import('vue').Ref<boolean>} loading - reactive loading ref
 * @param {Object} opts
 * @param {number} [opts.delayStart=300] - ms before showing spinner
 * @param {number} [opts.minDuration=1000] - ms spinner must stay visible once shown
 * @param {string} [opts.className='loader'] - base loader class (use CSS module value)
 * @param {string} [opts.hiddenClassName='hidden'] - hidden class (use CSS module value)
 */
export function useGlobalLoader(loading, opts = {}) {
  const delayStart = opts.delayStart ?? 300
  const minDuration = opts.minDuration ?? 1000
  const className = opts.className ?? 'loader'
  const hiddenClassName = opts.hiddenClassName ?? 'hidden'

  const id = makeId(10)
  const div = ensureDiv(className, hiddenClassName)

  let startTimeout = null
  let stopTimeout = null

  function acquire() {
    // Cancel any pending stop for this instance
    if (stopTimeout != null) {
      window.clearTimeout(stopTimeout)
      stopTimeout = null
    }

    state.ids.add(id)

    startTimeout = window.setTimeout(() => {
      // Only show if someone still needs it
      if (state.ids.size > 0) show(div, hiddenClassName)
    }, delayStart)
  }

  function release() {
    // Stop pending show for this instance
    if (startTimeout != null) {
      window.clearTimeout(startTimeout)
      startTimeout = null
    }

    if (!state.ids.has(id)) return
    state.ids.delete(id)

    // Enforce minDuration if spinner is/was visible
    let delay = 0
    if (state.spinnerStarted > 0) {
      const elapsed = Date.now() - state.spinnerStarted
      delay = Math.max(minDuration - elapsed, 0)
    }

    stopTimeout = window.setTimeout(() => {
      hideIfUnused(div, hiddenClassName)
    }, delay)
  }

  // Sync with reactive loading
  watch(
    loading,
    (next, prev) => {
      if (next && !prev) acquire()
      if (!next && prev) release()
    },
    { immediate: true }
  )

  onBeforeUnmount(() => {
    if (startTimeout != null) window.clearTimeout(startTimeout)
    if (stopTimeout != null) window.clearTimeout(stopTimeout)

    state.ids.delete(id)
    hideIfUnused(div, hiddenClassName)
  })

  return {
    // For debugging/tests
    get activeCount() {
      return state.ids.size
    },

    // Useful for Storybook cleanup
    reset() {
      state.ids.clear()
      state.spinnerStarted = 0
      if (state.div) state.div.classList.add(hiddenClassName)
    },
  }
}