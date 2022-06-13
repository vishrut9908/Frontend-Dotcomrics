// const name = 'http://localhost:1337/api'
const name = 'https://dotcomreps-backend.herokuapp.com/api'


export const serviceurl = () => name + '/services'
export const serviceindividualurl = (id)=> name + '/services?filters[slug]=' + id+ '&populate=*'


export const booksurl = () => name + '/books' + '?populate=*'
export const booksindividualurl = (id) => name + '/books/' + id


export const blogsurl = () => name + '/blogs'+ '?populate=*' + '&sort[0]=posted:DESC&pagination[pageSize]=24'
export const blogpagesurl = (id) => name + '/blogs'+ '?populate=*' + '&sort[0]=posted:DESC&pagination[pageSize]=24' + '&pagination[page]='+ id
export const blogsindividualurl = (id) => name + '/blogs?filters[slug]=' + id+ '&populate=*'


export const reviewsurl = () => name + '/reviews'+ '?populate=*'
export const reviewsindividualurl = (id) => name + '/reviews/' + id

export const logourl = () => name + '/logo'+ '?populate=*'

export const contacturl = () => name + '/contacts'
export const quickurl = () => name + '/quickcontacts'
export const emailurl = () => '/api/contact'

export const privacyurl = () => name + '/privacy'
export const termurl = () => name + '/term'