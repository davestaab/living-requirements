import { Before, After, AfterAll } from 'cucumber'
import puppeteer from 'puppeteer'

let browser
Before('not @pending', async function() {
  if (!this.browser) {
    browser = await puppeteer.launch({
      headless: false
    })

    this.page = await browser.newPage()
    await this.page.setViewport({
      width: 1280,
      height: 1024
    })
  }
})

After('not @pending', async function() {})

AfterAll('not @pending', async function() {
  if (browser) {
    await browser.close()
  }
})
