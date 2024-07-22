import { Plugin } from '@nuxt/types'

const axiosPlugin: Plugin = ({ $axios }) => {
  $axios.defaults.baseURL = 'https://apicampusdir.civitas.id'
  $axios.defaults.headers.common['Api-Key'] = '4Qe7h5NcgCu1EPDzCKIO'
}

export default axiosPlugin
