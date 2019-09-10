import { Before, After, AfterAll } from 'cucumber'
import puppeteer from 'puppeteer'

let browser, page
Before('not @pending', async function() {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: false
    })

    page = await browser.newPage()
    this.page = page
    await this.page.setViewport({
      width: 1280,
      height: 1024
    })
  } else {
    this.page = page
  }
})

After('not @pending', async function() {})

AfterAll('not @pending', async function() {
  if (browser) {
    await browser.close()
  }
})
