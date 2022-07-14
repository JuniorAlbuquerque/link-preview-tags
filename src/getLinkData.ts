import { parseHtml } from "./utils/parseHtml"
import { PreviewLink } from "./utils/parseHtml/types"
import { getPreviewData } from "./utils/previewTags"
import { getPageContent } from "./utils/scrap"

const getLinkData = async (url: string): Promise<PreviewLink> => {
  try {
    if (!url.includes('https://')) {
      throw new Error('invalid url')
    }

    const pageContent = await getPageContent(url as string)
    const html = parseHtml(pageContent)
    const tags = getPreviewData(html)

    return tags
  } catch (error) {
    console.warn('<<error>>', error)
  }
}

export {
  getLinkData
}