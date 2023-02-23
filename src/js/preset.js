import fs from 'node:fs/promises'
import path from 'node:path'

(async function() {
  const prefixes = ['dd', 'bb', '99', '77', '55', '33']
  const rootDir = path.resolve(path.dirname(''))

  // Colors preset
  const { colors } = JSON.parse(await fs.readFile(rootDir + '/src/presets/colors.json', { encoding: 'binary' }))
  let colorsData = ''
  colors.map(color => {
    colorsData += `$${color.name}-100: ${color.code};\n`
    prefixes.map((prefix, index) => {
      colorsData += `$${color.name}-${index + 2}00: ${color.code}${prefix};\n`
    })
  })
  await fs.writeFile(rootDir + '/src/scss/partials/_presetColors.scss', colorsData, { encoding: 'binary' })
})()