import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import { outputDirectory, slugify, sourceDirectory } from './villas-image-manifest.mjs'

const files = (await fs.readdir(sourceDirectory)).filter((file) => /\.(jpe?g|png)$/i.test(file))
await fs.mkdir(outputDirectory, { recursive: true })
for (const file of files) {
  const logo = /^RA_Logotipo/.test(file)
  const output = path.join(outputDirectory, `${slugify(file)}.${logo ? 'png' : 'webp'}`)
  const image = sharp(path.join(sourceDirectory, file)).rotate().resize({ width: logo ? 1200 : 1600, withoutEnlargement: true })
  if (logo) await image.png({ compressionLevel: 9 }).toFile(output)
  else await image.webp({ quality: 82 }).toFile(output)
  console.log(path.relative(process.cwd(), output))
}
