import { FunctionComponent } from 'react'

const PreferencesGroup: FunctionComponent = ({ children }) => (
  <div className="mb-3 flex flex-col rounded border border-solid border-border bg-default p-6">{children}</div>
)

export default PreferencesGroup
