export const sourceDirectory = '/Users/isreal/Downloads/0-Renders Finales'
export const outputDirectory = 'public/images/projects/villas-tres-hermanas'

export const slugify = (name) => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
