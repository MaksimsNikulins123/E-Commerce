import { LINK_FIELDS, LINK_FIELDS_LOCATION, LINK_FIELDS_SOCIAL_MEDIA } from './link'

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Footer {
    subscribe
    greenfinity
    shopNavItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    sellNavItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    aboutNavItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    helpNavItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    socialMedia {
      linkForSocialMedia ${LINK_FIELDS_SOCIAL_MEDIA({ disableAppearance: true })}
		}
    locationSettings{
      settings ${LINK_FIELDS_LOCATION({ disableAppearance: true })}
    }
    copyright 
    additionalLinks {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`

export const SETTINGS = `
  Settings {
    productsPage {
      slug
    }
  }
`

export const SETTINGS_QUERY = `
query Settings {
  ${SETTINGS}
}
`
