import { useState } from 'react'

function downloadFile(downloadUrl, fileName) {
  const link = document.createElement('a')
  link.download = fileName
  link.href = encodeURI(downloadUrl)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const useFileExport = (queryFn) => {
  const [exportOptions, setExportOptions] = useState({})
  function handleExport() {
    queryFn({ variables: { ...exportOptions } })
  }
  return {
    setExportOptions,
    handleExport,
    downloadFile,
  }
}

export { downloadFile }
export default useFileExport
