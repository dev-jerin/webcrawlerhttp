const fs = require('fs')

// printReport takes a dictionary of pages and prints them
// to the console in a human-friendly way
function printReport(pages){
  console.log('==========')
  console.log('REPORT')
  console.log('==========')
  const sortedPages = sortPages(pages)
  for (const sortedPage of sortedPages){
    const url = sortedPage[0]
    const count = sortedPage[1]
    console.log(`Found ${count} internal links to ${url}`)
  }
}

// saveReportAsCSV takes a dictionary of pages and saves them
// to a CSV file
function saveReportAsCSV(pages, baseURL, filename = 'report.csv'){
  const sortedPages = sortPages(pages)
  let csvContent = 'URL,Count,Type\n'
  const baseUrlObj = new URL(baseURL)
  for (const sortedPage of sortedPages){
    const url = sortedPage[0]
    const count = sortedPage[1]
    const urlObj = new URL('http://' + url) // since normalizedURL is host + path
    const type = urlObj.hostname === baseUrlObj.hostname ? 'internal' : 'external'
    csvContent += `"${url}",${count},${type}\n`
  }
  fs.writeFileSync(filename, csvContent)
  console.log(`Report saved to ${filename}`)
}
// sortPages sorts a dictionary of pages
// into a list of tuples (url, count)
// with the highest counts first in the list
function sortPages(pages){
  // 2D array where the
  // inner array: [ url, count ]
  const pagesArr = Object.entries(pages)
  pagesArr.sort((pageA, pageB) => {
    return pageB[1] - pageA[1]
  })
  return pagesArr
}

module.exports = {
  printReport,
  saveReportAsCSV,
  sortPages
}
