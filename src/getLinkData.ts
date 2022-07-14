import { parseHtml } from "./utils/parseHtml"
import { getPreviewData } from "./utils/previewTags"
import { getPageContent } from "./utils/scrap"

type PreviewLink = {
  description: string
  title: string
  image: string
  url: string
}

const getLinkData = async (url: string): Promise<PreviewLink | undefined> => {
  try {
    if (!url?.includes('https://')) {
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