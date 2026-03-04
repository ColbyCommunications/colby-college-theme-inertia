// Loader.stories.js
import Loader from './Loader.vue'

/** Per-file decorator: reset the global loader singleton so stories don't leak state. */
const resetGlobalLoaderState = () => {
  if (typeof window === 'undefined') return
  window.colby = window.colby || {}
  window.colby.components = window.colby.components || {}
  window.colby.components['colby-loader'] = window.colby.components['colby-loader'] || {}

  const s = window.colby.components['colby-loader']
  s.ids = []
  s.spinnerStarted = 0
  // Don't assume CSS-module classnames here; the component will manage visibility.
}

export default {
  title: 'Core Components/Loader (wrapper)',
  component: Loader,
  decorators: [
    () => {
      resetGlobalLoaderState()
      return { template: '<story />' }
    },
  ],
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: ['global', 'inline', 'skeleton'],
    },
    loading: { control: 'boolean' },
    removeChildren: { control: 'boolean' },
  },
}

const BaseTemplate = (args) => ({
  components: { Loader },
  setup() {
    return { args }
  },
  template: `
    <div style="padding: 24px; max-width: 720px;">
      <Loader v-bind="args">
        <template v-if="args.type === 'skeleton'" #skeleton>
          <div style="display:grid; gap: 12px;">
            <div style="height: 14px; width: 60%; background: #e5e7eb; border-radius: 2px;"></div>
            <div style="height: 14px; width: 90%; background: #e5e7eb; border-radius: 2px;"></div>
            <div style="height: 120px; width: 100%; background: #e5e7eb; border-radius: 2px;"></div>
          </div>
        </template>

        <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px;">
          <div style="font-weight: 600; margin-bottom: 8px;">Content</div>
          <p style="margin:0; line-height: 1.5;">
            This is the slot content rendered by the Loader component.
            Toggle <code>loading</code> to see each mode.
          </p>
        </div>
      </Loader>
    </div>
  `,
})

export const GlobalLoading = {
  render: BaseTemplate,
  args: {
    type: 'global',
    loading: true,
    removeChildren: false,
  },
}

export const GlobalLoadingRemoveChildren = {
  render: BaseTemplate,
  args: {
    type: 'global',
    loading: true,
    removeChildren: true,
  },
}

export const Inline = {
  render: BaseTemplate,
  args: {
    type: 'inline',
    loading: true,
    removeChildren: false,
  },
}

export const InlineRemoveChildren = {
  render: BaseTemplate,
  args: {
    type: 'inline',
    loading: true,
    removeChildren: true,
  },
}

export const Skeleton = {
  render: BaseTemplate,
  args: {
    type: 'skeleton',
    loading: true,
    removeChildren: false,
  },
}