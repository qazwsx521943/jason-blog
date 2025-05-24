import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <pre>
          {`
               ____.                        /\           ________                 .___
    |    |____    __________   ___)/  ______  /  _____/_____ _______  __| _/____   ____
    |    \__  \  /  ___/  _ \ /    \ /  ___/ /   \  ___\__  \\_  __ \/ __ |/ __ \ /    \
/\__|    |/ __ \_\___ (  <_> )   |  \\___ \  \    \_\  \/ __ \|  | \/ /_/ \  ___/|   |  \
\________(____  /____  >____/|___|  /____  >  \______  (____  /__|  \____ |\___  >___|  /
              \/     \/           \/     \/          \/     \/           \/    \/     \/
          `}
        </pre>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
