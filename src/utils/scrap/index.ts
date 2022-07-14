import axios from 'axios'

const getPageContent = async (url: string) => {
  const { data } = await axios.get(url, {
    method: 'get',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })

  return data
}

export {
  getPageContent
}